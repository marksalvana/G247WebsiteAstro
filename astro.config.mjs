// @ts-check
import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

// Pages prerender to static HTML (served from Vercel's edge CDN).
// Only routes that opt out with `export const prerender = false`
// (i.e. /api/concierge) deploy as Vercel Serverless Functions.
export default defineConfig({
  site: 'https://group247ww.com',
  output: 'static',
  adapter: vercel(),
  integrations: [preact(), sitemap()],
  prefetch: { prefetchAll: true, defaultStrategy: 'viewport' },
});
