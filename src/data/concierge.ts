// Concierge data — site map, suggestions, and the system prompt.
// Lifted from the prototype (ai-nav.jsx). The system prompt is shared by
// the server endpoint (/api/concierge); routes here map to real URLs.

export interface PageMapEntry { route: string; name: string; blurb: string; }

export const AI_PAGE_MAP: PageMapEntry[] = [
  { route: 'home',          name: 'Home',                     blurb: 'Studio overview, positioning, featured work, global team.' },
  { route: 'what-we-do',    name: 'What We Do',               blurb: 'All five practices in one place; why a single integrated studio.' },
  { route: 'packaging',     name: 'Packaging',                blurb: 'Structural + graphic packaging, pharma compliance, premium finishes, multi-market rollout.' },
  { route: 'point-of-sale', name: 'Point of Sale',            blurb: 'POS displays, in-store signage, retail environments, vendor management.' },
  { route: 'digital',       name: 'Digital',                  blurb: 'GEO-first websites, microsites, performance, design systems, headless CMS, AI-assisted dev.' },
  { route: 'advertising',   name: 'Advertising & Collateral', blurb: 'Campaigns, print collateral, OOH, social, sales enablement, brand systems.' },
  { route: 'edetailers',    name: 'eDetailers',               blurb: 'Veeva-ready pharma eDetailers, MLR/PromoMats approval, productised pricing tiers.' },
  { route: 'work',          name: 'Selected Work',            blurb: 'Case study archive filterable by industry — pharma, FMCG, finserv, healthcare.' },
  { route: 'about',         name: 'About',                    blurb: 'Mission, vision, 2006→2026 heritage timeline, operating values, AI charter.' },
  { route: 'team',          name: 'Team',                     blurb: 'Senior-only team across Sydney, Manila, Bangkok, Shanghai.' },
  { route: 'insights',      name: 'Insights',                 blurb: 'Articles on strategy, AI policy, GEO, pharma, global delivery, True Value.' },
  { route: 'contact',       name: 'Contact',                  blurb: 'Brief form, direct lines (general / pharma / careers), office locations.' },
];

export const AI_SUGGESTIONS = [
  'I need a Veeva eDetailer for a pharma launch',
  'My website is invisible to AI — can you help?',
  'Show me your packaging work for regulated brands',
  'How is G247 cheaper than a big agency?',
  'We need multi-market POS rolled out across Asia',
];

// Map concierge route ids → real site URLs.
export function routeToHref(route: string): string {
  return route === 'home' ? '/' : `/${route}`;
}

export const VALID_ROUTES = new Set(AI_PAGE_MAP.map((p) => p.route));

export const AI_SYSTEM = `You are the navigation concierge for Group 24/7 Worldwide (G247), an integrated creative + production studio.
Positioning: "Perfect design, flawless execution" across the full brand journey — packaging on the shelf to campaigns on the screen. Two decades of production heritage, now AI-empowered. Global team across Sydney, Manila, Bangkok, Shanghai. Strong in regulated industries (pharma, finance, insurance). Core promise of "True Value" — senior expertise at a cost big agencies can't match.

You help visitors find the right page. Here is the full site map (route → what's there):
${AI_PAGE_MAP.map((p) => `- ${p.route}: ${p.name} — ${p.blurb}`).join('\n')}

When the user describes a need, respond ONLY with a compact JSON object, no markdown, no prose outside it:
{
  "answer": "1-2 sentence concierge reply, warm and confident, first person plural ('we'). Speak to their need directly. No fluff.",
  "route": "the single best route id from the map",
  "route_label": "the human name of that page",
  "related": [{"route":"id","label":"Page name"}]
}
Keep "answer" under 40 words. Always pick a real route id from the map. If the request is vague, route to "what-we-do". If they want to talk to a human, get a quote, or start a project, route to "contact".`;
