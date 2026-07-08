// motion.ts — custom cursor, scroll-reveal, live clocks, hero word cycle.
// Ported from the prototype's motion.jsx + HeroCycle. Pure vanilla, no framework.
// Loaded once from the Base layout; safe to re-run on Astro view transitions.

// Mark that JS is active (CSS reveals rely on this; no-js keeps content visible).
document.documentElement.classList.remove('no-js');

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

/* ---------- Custom cursor ---------- */
function initCursor() {
  if (!finePointer) return;
  let el = document.querySelector<HTMLDivElement>('.cursor');
  if (!el) {
    el = document.createElement('div');
    el.className = 'cursor';
    el.setAttribute('aria-hidden', 'true');
    document.body.appendChild(el);
  }
  const cursor = el;
  let mx = window.innerWidth / 2, my = window.innerHeight / 2;
  let cx = mx, cy = my;

  const move = (e: MouseEvent) => {
    mx = e.clientX; my = e.clientY;
    document.documentElement.style.setProperty('--mx', `${mx}px`);
    document.documentElement.style.setProperty('--my', `${my}px`);
    cursor.style.opacity = '1';
  };
  const over = (e: MouseEvent) => {
    const target = e.target as Element;
    const hot = target.closest('a, button, .nav-link, .svc-row, .work-card, .post, .cap, .office, .tier, [data-cursor="hover"]');
    const noFx = target.closest('[data-cursor="default"]');
    const txt = target.closest('input, textarea, [data-cursor="text"]');
    cursor.classList.toggle('is-hover', !!hot && !noFx);
    cursor.classList.toggle('is-text', !!txt);
  };
  const tick = () => {
    cx += (mx - cx) * 0.22;
    cy += (my - cy) * 0.22;
    cursor.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
    requestAnimationFrame(tick);
  };
  window.addEventListener('mousemove', move);
  window.addEventListener('mouseover', over);
  document.addEventListener('mouseleave', () => { cursor.style.opacity = '0'; });
  document.addEventListener('mouseenter', () => { cursor.style.opacity = '1'; });
  requestAnimationFrame(tick);
}

/* ---------- Mobile nav drawer ---------- */
function initNav() {
  const toggle = document.querySelector<HTMLButtonElement>('[data-nav-toggle]');
  const drawer = document.querySelector<HTMLElement>('[data-nav-drawer]');
  if (!toggle || !drawer) return;
  const setOpen = (open: boolean) => {
    drawer.classList.toggle('is-open', open);
    toggle.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    document.body.style.overflow = open ? 'hidden' : '';
  };
  toggle.addEventListener('click', () => setOpen(!drawer.classList.contains('is-open')));
  drawer.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setOpen(false)));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setOpen(false); });
  // Close if resized up to desktop.
  window.matchMedia('(min-width: 901px)').addEventListener('change', (e) => { if (e.matches) setOpen(false); });
}

/* ---------- Scroll reveal ---------- */
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (reduceMotion || typeof IntersectionObserver === 'undefined') {
    els.forEach((el) => el.classList.add('is-in'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('is-in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
  els.forEach((el) => { if (!el.classList.contains('is-in')) io.observe(el); });
}

/* ---------- Live clocks ---------- */
function initClocks() {
  const nodes = Array.from(document.querySelectorAll<HTMLElement>('[data-clock]'));
  if (!nodes.length) return;
  const render = () => {
    nodes.forEach((node) => {
      const tz = node.dataset.tz!;
      const label = node.dataset.label || '';
      try {
        const t = new Intl.DateTimeFormat('en-GB', {
          hour: '2-digit', minute: '2-digit', timeZone: tz, hour12: false,
        }).format(new Date());
        node.textContent = `${label} ${t}`.trim();
      } catch { /* keep server fallback */ }
    });
  };
  render();
  window.setInterval(render, 30_000);
}

/* ---------- Hero word cycle ---------- */
function initHeroCycle() {
  const host = document.querySelector<HTMLElement>('[data-hero-cycle]');
  if (!host) return;
  let words: string[] = [];
  try { words = JSON.parse(host.dataset.words || '[]'); } catch { /* noop */ }
  if (words.length < 2 || reduceMotion) return;
  let i = 0;
  window.setInterval(() => {
    i = (i + 1) % words.length;
    host.textContent = words[i];
    host.style.animation = 'none';
    // reflow to restart the keyframe
    void host.offsetWidth;
    host.style.animation = 'cycle .6s var(--ease-out)';
  }, 1800);
}

function initAll() {
  initCursor();
  initNav();
  initReveal();
  initClocks();
  initHeroCycle();
}

initAll();
// Re-init after Astro client-side navigation (prefetch/view transitions).
document.addEventListener('astro:page-load', initAll);
