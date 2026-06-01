// Site-wide constants: nav, footer, values, offices, team, posts, work.
// Lifted verbatim from the prototype (components.jsx, home.jsx, misc.jsx).

export interface NavItem { id: string; label: string; href: string; }

// Primary nav. `href` is the real route (the prototype used hash routing).
export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'what-we-do', label: 'What We Do', href: '/what-we-do' },
  { id: 'work', label: 'Work', href: '/work' },
  { id: 'about', label: 'About', href: '/about' },
  { id: 'team', label: 'Team', href: '/team' },
  { id: 'insights', label: 'Insights', href: '/insights' },
  { id: 'contact', label: 'Contact', href: '/contact' },
];

export const FOOTER_STUDIO = [
  { label: 'What we do', href: '/what-we-do' },
  { label: 'Selected work', href: '/work' },
  { label: 'About us', href: '/about' },
  { label: 'Our team', href: '/team' },
];

export const FOOTER_CAPABILITIES = [
  { label: 'Packaging', href: '/packaging' },
  { label: 'Point of Sale', href: '/point-of-sale' },
  { label: 'Digital', href: '/digital' },
  { label: 'Advertising', href: '/advertising' },
  { label: 'eDetailers', href: '/edetailers' },
];

export interface Value { num: string; name: string; def: string; looks: string; }
export const HOME_VALUES: Value[] = [
  { num: '01', name: 'Precision', def: 'Every pixel, word, and line of code is held to the standard our clients hired us for — and that their audiences will judge them by.', looks: 'Meticulous QA, design review, and quality checking before anything leaves the building.' },
  { num: '02', name: 'Innovation', def: 'We embrace AI and emerging technology as a responsibility — to deliver better results, faster, at a standard a small team could not previously achieve alone.', looks: 'Active AI tool adoption, GEO exploration, modular content systems.' },
  { num: '03', name: 'Partnership', def: 'We operate as an embedded extension of our clients’ teams. Their brand standards, audiences, and business objectives become ours.', looks: 'Proactive comms, co-created briefs, shared KPIs.' },
  { num: '04', name: 'Integrity', def: 'We give honest advice, use technology responsibly, and hold ourselves accountable — even when honesty is not the easiest path.', looks: 'Transparent AI usage, clear IP governance, the confidence to push back on a brief.' },
  { num: '05', name: 'Agility', def: 'Our lean structure and global team are our speed. We make decisions fast, pivot when needed, and deliver across markets — multi-language, multi-format, multi-timezone.', looks: 'Senior decision-makers on every account. Round-the-clock execution across AU/PH/TH/CN.' },
  { num: '06', name: 'True Value', def: 'We work smarter — not just harder — to deliver more for less. Senior expertise and world-class execution at a cost that larger agencies cannot match.', looks: 'Transparent pricing, no unnecessary layers, AI-assisted delivery, a global team built to maximise output without inflating cost.' },
];

export interface Office { flag: string; city: string; tz: string; meta: string; label: string; }
export const HOME_OFFICES: Office[] = [
  { flag: 'AU', city: 'Sydney', tz: 'Australia/Sydney', meta: 'HQ · Strategy · Account', label: 'GMT+10' },
  { flag: 'PH', city: 'Manila', tz: 'Asia/Manila', meta: 'Production · Engineering', label: 'GMT+8' },
  { flag: 'TH', city: 'Bangkok', tz: 'Asia/Bangkok', meta: 'Production · Artwork', label: 'GMT+7' },
  { flag: 'CN', city: 'Shanghai', tz: 'Asia/Shanghai', meta: 'Local exec · Translation', label: 'GMT+8' },
];

export interface TeamMember { name: string; role: string; city: string; }
export const TEAM: TeamMember[] = [
  { name: 'Vincent Pearce', role: 'Founder & CEO', city: 'Sydney' },
  { name: 'Migs Salvana', role: 'Managing Partner', city: 'Manila' },
  { name: 'Mark Salvana', role: 'Strategy & Digital', city: 'Manila' },
  { name: 'Jon Reyes', role: 'Head of Engineering', city: 'Manila' },
  { name: 'Frank Aguilar', role: 'Senior Engineer', city: 'Manila' },
  { name: 'Anya Wirat', role: 'Head of Production', city: 'Bangkok' },
  { name: 'Liu Wei', role: 'China Lead', city: 'Shanghai' },
  { name: 'Ines Tan', role: 'Creative Director', city: 'Sydney' },
  { name: 'Sam O’Brien', role: 'Senior Designer', city: 'Sydney' },
  { name: 'Patcharin Sang', role: 'Artwork Lead', city: 'Bangkok' },
  { name: 'Carlo Tan', role: 'Production Manager', city: 'Manila' },
  { name: 'Mei Zhang', role: 'Translation Lead', city: 'Shanghai' },
];

export interface HomeWork { title: string; tag: string; kind: string; ph: string; }
export const HOME_WORK: HomeWork[] = [
  { title: 'Centeril — Global Rx Launch', tag: 'Pharma', kind: 'eDetailer · Veeva', ph: 'Pack + screen system' },
  { title: 'Halo Foods — Shelf Reset', tag: 'FMCG', kind: 'Packaging · POS', ph: 'Range refresh, 28 SKUs' },
  { title: 'Northwind Insurance', tag: 'Financial Services', kind: 'Digital · GEO', ph: 'Site rebuild, AU + NZ' },
  { title: 'Asana Aged Care', tag: 'Healthcare', kind: 'Brand · Print', ph: 'Identity + brochure system' },
];

export interface WorkItem { year: string; title: string; industry: string; kind: string; ratio: string; size: number; }
export const WORK: WorkItem[] = [
  { year: '2026', title: 'Centeril — Global Rx Launch', industry: 'Pharma', kind: 'eDetailer · Veeva', ratio: '16/10', size: 7 },
  { year: '2026', title: 'Northwind Insurance Rebuild', industry: 'Finserv', kind: 'Digital · GEO', ratio: '16/12', size: 5 },
  { year: '2025', title: 'Halo Foods — Shelf Reset', industry: 'FMCG', kind: 'Packaging · POS', ratio: '4/3', size: 6 },
  { year: '2025', title: 'Asana Aged Care Identity', industry: 'Healthcare', kind: 'Brand · Print', ratio: '4/3', size: 6 },
  { year: '2025', title: 'Northland Spirits Premium', industry: 'Alcohol', kind: 'Packaging · Premium', ratio: '4/3', size: 4 },
  { year: '2025', title: 'Pharmacy Counter Reset', industry: 'Retail', kind: 'POS · 1,200 stores', ratio: '4/3', size: 4 },
  { year: '2024', title: 'Halocort OTC Refresh', industry: 'Pharma', kind: 'eDetailer · OTC', ratio: '4/3', size: 4 },
  { year: '2024', title: 'GrowthIQ Sales Toolkit', industry: 'B2B', kind: 'Sales enablement', ratio: '4/3', size: 6 },
  { year: '2024', title: 'Bangkok Travel Retail Pop-Up', industry: 'Travel Retail', kind: 'POS · Activation', ratio: '4/3', size: 6 },
];

export interface Post { date: string; cat: string; title: string; read: string; }
export const POSTS: Post[] = [
  { date: 'May 26 2026', cat: 'Strategy', title: '20 years on — what we’ve learned', read: '6 min' },
  { date: 'May 12 2026', cat: 'AI Policy', title: 'Our AI charter: how we use it, how we won’t', read: '4 min' },
  { date: 'Apr 28 2026', cat: 'GEO', title: 'Why your website is invisible to AI — and what to do about it', read: '7 min' },
  { date: 'Apr 14 2026', cat: 'Pharma', title: 'Veeva eDetailers: a productised approach', read: '5 min' },
  { date: 'Mar 30 2026', cat: 'Global', title: 'One brief, four timezones: how always-on delivery actually works', read: '5 min' },
  { date: 'Mar 16 2026', cat: 'Packaging', title: 'Shelf reset playbook for FMCG brands', read: '8 min' },
  { date: 'Mar 02 2026', cat: 'True Value', title: 'The maths behind senior-only teams', read: '4 min' },
  { date: 'Feb 16 2026', cat: 'Strategy', title: 'What “integrated agency” actually means in 2026', read: '6 min' },
];

export const HERO_CYCLE_WORDS = [
  'packaging.', 'campaigns.', 'eDetailers.', 'digital.',
  'point of sale.', 'pharma.', 'global brands.',
];

export const TIMELINE = [
  { num: '2006', name: 'Founded', desc: 'Founded in Sydney as a production-first design studio.' },
  { num: '2012', name: 'Manila', desc: 'Manila production office opens. Beginning of always-on delivery.' },
  { num: '2018', name: 'Pharma', desc: 'Pharma practice scales — regulated content becomes a core discipline.' },
  { num: '2024', name: 'eDetailers', desc: 'Productised Veeva-ready eDetailer offer launches to existing pharma clients.' },
  { num: '2026', name: 'AI-Empowered', desc: 'AI-assisted delivery becomes core to every practice. GEO-first web rebuild.' },
];

export const SITE = {
  name: 'Group 24/7 Worldwide',
  shortName: 'G247',
  url: 'https://group247ww.com',
  tagline: 'Perfect design, flawless execution.',
  founded: '2006',
  email: 'hello@group247ww.com',
  phone: '+61 2 8000 0000',
};
