# Group 24/7 Worldwide — Website (Astro)

Production rebuild of the **"AI Nav"** redesign direction for [group247ww.com](https://group247ww.com):
**Direction B (Studio dark)**, cycling hero, **Hanken Grotesk × JetBrains Mono**, with the
**"Ask G247"** AI concierge.

Built as a **static Astro site** (near-zero JS, served from the edge CDN for top Core Web Vitals
and GEO), with a single serverless function for the concierge.

## Stack

- **[Astro](https://astro.build)** — static output, real per-page URLs (great for SEO/GEO).
- **Preact island** — only the concierge overlay hydrates (`client:idle`).
- **Vanilla TS** — cursor, scroll reveals, live clocks, hero word cycle (`src/scripts/motion.ts`).
- **`@anthropic-ai/sdk`** — `claude-haiku-4-5` powers the concierge via `/api/concierge`.
- **Vercel adapter** — static pages on the CDN; `/api/*` as serverless functions.
- **Content** lives in typed files under `src/data/` (no CMS — content rarely changes).

## Local development

```bash
npm install
cp .env.example .env   # add your ANTHROPIC_API_KEY for the concierge
npm run dev            # http://localhost:4321
```

Without `ANTHROPIC_API_KEY` the concierge still works — it gracefully falls back to routing
visitors to "What We Do".

## Build & preview

```bash
npm run build      # → dist/ (static) + .vercel/output (functions)
npm run preview
```

## Deploy (Vercel)

1. Push this repo to GitHub and import it in Vercel.
2. Set **`ANTHROPIC_API_KEY`** in Project → Settings → Environment Variables.
3. Deploy. Static pages serve from the edge CDN; `/api/concierge` and `/api/contact`
   run as serverless functions. Branch pushes get preview URLs automatically. Free Hobby tier is sufficient.

## Project structure

```
src/
  data/        Typed content (services, site, concierge) — edit here to update the site
  styles/      tokens.css (Direction B locked) · base.css · ai-nav.css
  components/  Astro components + Concierge.tsx (the one Preact island)
  scripts/     motion.ts — cursor, reveals, clocks, hero cycle (vanilla)
  layouts/     Base.astro — head, fonts, JSON-LD, Nav/Footer, concierge
  pages/       12 routes + api/concierge.ts + api/contact.ts
public/        robots.txt (AI crawlers allowed), llms.txt, llms-full.txt, favicon, og
```

## Notes / follow-ups

- **Imagery** — Swiss-style striped placeholders stand in for real work/team photos; swap them in.
- **OG image** — `public/og.svg` is a placeholder; replace with a 1200×630 PNG for best social support.
- **Contact form** — `/api/contact` validates and logs the brief; wire it to email/CRM (Resend, Postmark, Slack, etc.).
- **Content** — team, work, insights and services are sample content in `src/data/*`; edit and redeploy.
- **GEO** — JSON-LD per page, `llms.txt`/`llms-full.txt`, AI-crawler-allow `robots.txt`, sitemap, and
  no-JS content resilience are all in place. Earning AI citations is also an ongoing content discipline.
