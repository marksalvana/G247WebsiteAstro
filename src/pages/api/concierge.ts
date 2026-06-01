// /api/concierge — server endpoint for the "Ask G247" concierge.
// Runs as a Vercel Serverless Function (prerender:false). The Anthropic API
// key stays here, server-side; it is never shipped to the browser.
import type { APIRoute } from 'astro';
import Anthropic from '@anthropic-ai/sdk';
import { AI_SYSTEM, VALID_ROUTES, AI_PAGE_MAP } from '../../data/concierge';

export const prerender = false;

const MODEL = 'claude-haiku-4-5'; // fast + cheap; ideal for JSON routing
const MAX_QUERY = 600;

// Very small in-memory per-IP rate limiter (best-effort; resets per cold start).
const HITS = new Map<string, { n: number; t: number }>();
const WINDOW_MS = 60_000;
const LIMIT = 12;
function rateLimited(ip: string): boolean {
  const now = Date.now();
  const rec = HITS.get(ip);
  if (!rec || now - rec.t > WINDOW_MS) { HITS.set(ip, { n: 1, t: now }); return false; }
  rec.n++;
  return rec.n > LIMIT;
}

function safeParse(text: string): any | null {
  if (!text) return null;
  let t = text.trim().replace(/^```(?:json)?/i, '').replace(/```$/, '').trim();
  const m = t.match(/\{[\s\S]*\}/);
  if (m) t = m[0];
  try { return JSON.parse(t); } catch { return null; }
}

const nameForRoute = (route: string) =>
  AI_PAGE_MAP.find((p) => p.route === route)?.name ?? 'Open';

const FALLBACK = {
  answer: 'Let me point you to an overview of everything we do — start there and I can narrow it down.',
  route: 'what-we-do', route_label: 'What We Do', related: [] as { route: string; label: string }[],
};

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });

export const POST: APIRoute = async ({ request, clientAddress }) => {
  const apiKey = import.meta.env.ANTHROPIC_API_KEY ?? process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return json({ ...FALLBACK, related: [{ route: 'contact', label: 'Contact' }] }, 200);

  if (rateLimited(clientAddress ?? 'anon')) return json(FALLBACK, 200);

  let query = '';
  let transcript = '';
  try {
    const body = await request.json();
    query = String(body.query ?? '').slice(0, MAX_QUERY).trim();
    transcript = String(body.transcript ?? '').slice(0, 4000);
  } catch {
    return json(FALLBACK, 200);
  }
  if (!query) return json(FALLBACK, 200);

  try {
    const anthropic = new Anthropic({ apiKey });
    const msg = await anthropic.messages.create({
      model: MODEL,
      max_tokens: 400,
      // Prompt caching: the system prompt (site map + positioning) is identical
      // on every request, so cache it to cut latency and cost.
      system: [{ type: 'text', text: AI_SYSTEM, cache_control: { type: 'ephemeral' } }],
      messages: [
        {
          role: 'user',
          content: `${transcript ? 'Conversation so far:\n' + transcript + '\n\n' : ''}New request: "${query}"`,
        },
      ],
    });

    const text = msg.content
      .filter((b): b is Anthropic.TextBlock => b.type === 'text')
      .map((b) => b.text)
      .join('');

    const parsed = safeParse(text);
    if (!parsed || !parsed.route || !VALID_ROUTES.has(parsed.route)) {
      return json(FALLBACK, 200);
    }

    return json({
      answer: typeof parsed.answer === 'string' ? parsed.answer : 'Here’s the most relevant page.',
      route: parsed.route,
      route_label: parsed.route_label || nameForRoute(parsed.route),
      related: Array.isArray(parsed.related)
        ? parsed.related
            .filter((r: any) => r && VALID_ROUTES.has(r.route) && r.route !== parsed.route)
            .slice(0, 2)
            .map((r: any) => ({ route: r.route, label: r.label || nameForRoute(r.route) }))
        : [],
    });
  } catch {
    return json({
      answer: 'I had trouble reaching the assistant just now — here’s our full capability overview in the meantime.',
      route: 'what-we-do', route_label: 'What We Do', related: [{ route: 'contact', label: 'Contact' }],
    }, 200);
  }
};
