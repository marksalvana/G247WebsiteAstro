/** @jsxImportSource preact */
// Concierge.tsx — "Ask G247" command-palette island. Ports ai-nav.jsx.
// Opened from the nav button, the hero bar ([data-ai-open]) or ⌘K.
// Calls the serverless endpoint /api/concierge (key stays server-side),
// then routes the visitor to a real URL.
import { useState, useRef, useEffect, useCallback } from 'preact/hooks';
import { AI_SUGGESTIONS, AI_PAGE_MAP, routeToHref } from '../data/concierge';

interface Related { route: string; label: string; }
interface Turn {
  q: string;
  pending?: boolean;
  a?: string;
  route?: string;
  route_label?: string;
  related?: Related[];
}

const nameForRoute = (route: string) =>
  AI_PAGE_MAP.find((p) => p.route === route)?.name ?? 'Open';

export default function Concierge() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const [busy, setBusy] = useState(false);
  const [turns, setTurns] = useState<Turn[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // ⌘K toggle + Escape; open from any [data-ai-open] trigger.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === 'Escape') setOpen(false);
    };
    const onOpen = (e: Event) => {
      e.preventDefault();
      setOpen(true);
    };
    window.addEventListener('keydown', onKey);
    const triggers = Array.from(document.querySelectorAll('[data-ai-open]'));
    triggers.forEach((t) => t.addEventListener('click', onOpen));
    return () => {
      window.removeEventListener('keydown', onKey);
      triggers.forEach((t) => t.removeEventListener('click', onOpen));
    };
  }, []);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 80);
  }, [open]);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [turns, busy]);

  const ask = useCallback(async (q?: string) => {
    const query = (q ?? value).trim();
    if (!query || busy) return;
    setValue('');
    setBusy(true);
    const prevTurns = turns;
    setTurns((prev) => [...prev, { q: query, pending: true }]);
    try {
      const transcript = prevTurns
        .map((t) => `User: ${t.q}\nConcierge: ${JSON.stringify({ answer: t.a, route: t.route })}`)
        .join('\n');
      const res = await fetch('/api/concierge', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query, transcript }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const parsed = await res.json();
      setTurns((prev) => {
        const next = [...prev];
        const last = next[next.length - 1];
        if (parsed && parsed.route) {
          Object.assign(last, {
            pending: false,
            a: parsed.answer || 'Here’s the most relevant page.',
            route: parsed.route,
            route_label: parsed.route_label || nameForRoute(parsed.route),
            related: Array.isArray(parsed.related) ? parsed.related.slice(0, 2) : [],
          });
        } else {
          Object.assign(last, {
            pending: false,
            a: 'Let me point you to an overview of everything we do — start there and I can narrow it down.',
            route: 'what-we-do', route_label: 'What We Do', related: [],
          });
        }
        return next;
      });
    } catch {
      setTurns((prev) => {
        const next = [...prev];
        const last = next[next.length - 1];
        Object.assign(last, {
          pending: false,
          a: 'I had trouble reaching the assistant just now — here’s our full capability overview in the meantime.',
          route: 'what-we-do', route_label: 'What We Do', related: [{ route: 'contact', label: 'Contact' }],
        });
        return next;
      });
    } finally {
      setBusy(false);
    }
  }, [value, busy, turns]);

  const go = (route: string) => {
    setOpen(false);
    window.location.href = routeToHref(route);
  };

  if (!open) return null;

  return (
    <div
      class="ai-overlay"
      onMouseDown={(e) => { if (e.target === e.currentTarget) setOpen(false); }}
    >
      <div class="ai-panel" role="dialog" aria-label="Ask G247" aria-modal="true">
        <div class="ai-head">
          <div class="ai-brand">
            <span class="ai-spark">✦</span>
            <span class="mono">Ask G247 — Concierge</span>
          </div>
          <button class="ai-close" onClick={() => setOpen(false)} aria-label="Close">esc</button>
        </div>

        <div class="ai-scroll" ref={scrollRef}>
          {turns.length === 0 && (
            <div class="ai-empty">
              <div class="ai-empty-lead">
                Tell me what you're trying to build.<br />
                <span class="muted">I'll take you straight to the right place.</span>
              </div>
              <div class="ai-sugs">
                {AI_SUGGESTIONS.map((s) => (
                  <button key={s} class="ai-sug" onClick={() => ask(s)}>{s}</button>
                ))}
              </div>
            </div>
          )}

          {turns.map((t, i) => (
            <div key={i} class="ai-turn">
              <div class="ai-q"><span class="ai-q-mark">›</span> {t.q}</div>
              {t.pending ? (
                <div class="ai-a ai-thinking">
                  <span class="ai-dot"></span><span class="ai-dot"></span><span class="ai-dot"></span>
                  <span class="mono muted" style="margin-left: 8px">routing…</span>
                </div>
              ) : (
                <div class="ai-a">
                  <p class="ai-answer">{t.a}</p>
                  <div class="ai-actions">
                    <button class="ai-go" onClick={() => go(t.route!)}>
                      {t.route_label}
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" stroke-width="1.4" stroke-linecap="square" /></svg>
                    </button>
                    {(t.related || []).map((r) => (
                      <button key={r.route} class="ai-rel" onClick={() => go(r.route)}>{r.label}</button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <form class="ai-input-row" onSubmit={(e) => { e.preventDefault(); ask(); }}>
          <span class="ai-input-spark">✦</span>
          <input
            ref={inputRef}
            class="ai-input"
            placeholder="Describe your project, your industry, or what you're looking for…"
            value={value}
            onInput={(e) => setValue((e.target as HTMLInputElement).value)}
            data-cursor="text"
          />
          <button class="ai-send" type="submit" disabled={busy || !value.trim()}>
            {busy ? '…' : 'Ask'}
          </button>
        </form>
        <div class="ai-foot">
          <span class="mono muted">Group 24/7 · Guided navigation</span>
          <span class="mono muted">⌘K to toggle</span>
        </div>
      </div>
    </div>
  );
}
