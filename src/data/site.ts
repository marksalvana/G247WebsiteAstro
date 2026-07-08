// Site-wide constants: nav, footer, values, offices, team, posts, work.
// Lifted verbatim from the prototype (components.jsx, home.jsx, misc.jsx).

export interface NavItem { id: string; label: string; href: string; }

// Primary nav. `href` is the real route (the prototype used hash routing).
// Buyer-focused order: "How We Work" earns a slot for procurement/BD traffic;
// Team stays one click away in the footer.
export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'what-we-do', label: 'What We Do', href: '/what-we-do' },
  { id: 'how-we-work', label: 'How We Work', href: '/how-we-work' },
  { id: 'work', label: 'Work', href: '/work' },
  { id: 'about', label: 'About', href: '/about' },
  { id: 'insights', label: 'Insights', href: '/insights' },
  { id: 'contact', label: 'Contact', href: '/contact' },
];

export const FOOTER_STUDIO = [
  { label: 'What we do', href: '/what-we-do' },
  { label: 'How we work', href: '/how-we-work' },
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
  { label: 'Video', href: '/video' },
];

export interface Value { num: string; name: string; def: string; looks: string; }
export const HOME_VALUES: Value[] = [
  { num: '01', name: 'Precision', def: 'Every pixel, word, and line of code is held to the standard our clients hired us for — and that their audiences will judge them by.', looks: 'Meticulous QA, design review, and quality checking before anything leaves the building.' },
  { num: '02', name: 'Innovation', def: 'We keep improving how we work — adopting useful technology, including AI, where it genuinely helps us deliver better results, faster, without cutting corners on craft.', looks: 'Continual improvement, useful tools reviewed by experienced people, modular content systems.' },
  { num: '03', name: 'Partnership', def: 'We operate as an embedded extension of our clients’ teams. Their brand standards, audiences, and business objectives become ours.', looks: 'Proactive comms, co-created briefs, shared KPIs.' },
  { num: '04', name: 'Integrity', def: 'We give honest advice, use technology responsibly, and hold ourselves accountable — even when honesty is not the easiest path.', looks: 'Transparent AI usage, clear IP governance, the confidence to push back on a brief.' },
  { num: '05', name: 'Agility', def: 'Our lean structure and global team are our speed. We make decisions fast, pivot when needed, and deliver across markets — multi-language, multi-format, multi-timezone.', looks: 'Senior decision-makers on every account. Regional teams keeping work moving across AU/PH/TH/CN timezones.' },
  { num: '06', name: 'True Value', def: 'We work smarter — not just harder — to deliver more for less. Senior people and dependable execution, with a delivery model designed to use budgets carefully.', looks: 'Transparent pricing, no unnecessary layers, useful technology reviewed by people, a global team built to maximise output without inflating cost.' },
];

export interface Office { flag: string; city: string; tz: string; meta: string; label: string; }
export const HOME_OFFICES: Office[] = [
  { flag: 'AU', city: 'Sydney', tz: 'Australia/Sydney', meta: 'HQ · Account · Client services', label: 'GMT+10' },
  { flag: 'TH', city: 'Bangkok', tz: 'Asia/Bangkok', meta: 'Creative · Artwork · Production', label: 'GMT+7' },
  { flag: 'CN', city: 'Dalian', tz: 'Asia/Shanghai', meta: 'Account · Prepress · QC', label: 'GMT+8' },
  { flag: 'PH', city: 'Manila', tz: 'Asia/Manila', meta: 'Account · Web · Project management', label: 'GMT+8' },
  { flag: 'MY', city: 'Selangor', tz: 'Asia/Kuala_Lumpur', meta: 'Design', label: 'GMT+8' },
];

export interface TeamMember { name: string; role: string; city: string; photo?: string; }
export const TEAM: TeamMember[] = [
  { name: 'David Noble', role: 'Director', city: 'Sydney', photo: '/team/david.jpg' },
  { name: 'Spike Walker', role: 'Client Services Director', city: 'Sydney', photo: '/team/spike.jpg' },
  { name: 'Steve Gow', role: 'Account Director', city: 'Sydney', photo: '/team/steve.jpg' },
  { name: 'Sunny Liu', role: 'Account Director', city: 'Dalian', photo: '/team/sunny.jpg' },
  { name: 'Thamakorn Sriwatcharakorn', role: 'Country Manager', city: 'Bangkok', photo: '/team/ble.png' },
  { name: 'Nerina Maher', role: 'Senior Account Manager', city: 'Sydney', photo: '/team/nez.jpg' },
  { name: 'Ismini Demetriou', role: 'Executive Account Manager', city: 'Sydney' },
  { name: 'Kay Pilapil', role: 'Regional Account Manager', city: 'Manila', photo: '/team/kay.jpg' },
  { name: 'Phanita Panyaart', role: 'Account Manager', city: 'Bangkok', photo: '/team/jajar.jpg' },
  { name: 'Jeranan Rattanaratree', role: 'Account Executive', city: 'Bangkok' },
  { name: 'Chanadol Patpawat', role: 'Creative Design Manager', city: 'Bangkok', photo: '/team/paytong.jpg' },
  { name: 'Annie Laurel', role: 'Project Manager', city: 'Manila', photo: '/team/annie.jpg' },
  { name: 'Joseph Mercado', role: 'Senior Web Developer', city: 'Cagayan de Oro', photo: '/team/joe.jpeg' },
  { name: 'Linda Li', role: 'Social Media Manager', city: 'Sydney' },
  { name: 'Maria Andreeva', role: 'Graphic Designer', city: 'Sydney', photo: '/team/maria.jpg' },
  { name: 'Thushaini Ananthan', role: 'Designer', city: 'Selangor', photo: '/team/shaini.jpg' },
  { name: 'Carina Yu', role: 'Designer', city: 'Dalian', photo: '/team/carina.jpg' },
  { name: 'Soravit Ditsorn', role: 'Artwork Manager', city: 'Bangkok', photo: '/team/nai.jpg' },
  { name: 'Saravut Sangkamaneevong', role: 'Technical Artwork Designer', city: 'Bangkok', photo: '/team/nueng.jpg' },
  { name: 'Wiphada Khanarak', role: 'Graphic Designer', city: 'Bangkok', photo: '/team/meena.jpg' },
  { name: 'Mallika Sungpood', role: 'Graphic Designer', city: 'Bangkok', photo: '/team/oil.jpg' },
  { name: 'Koragot Amonhemanon', role: 'Artworker', city: 'Bangkok', photo: '/team/kai.jpg' },
  { name: 'Chanon Thanupphetha', role: 'Artworker', city: 'Bangkok', photo: '/team/mind.jpg' },
  { name: 'Pornpawee Insawang', role: 'Artworker', city: 'Bangkok', photo: '/team/cat.jpg' },
  { name: 'Elaine Liu', role: 'Account Executive & QC', city: 'Dalian', photo: '/team/elaine.jpg' },
  { name: 'Nika Yang', role: 'Business Service Support', city: 'Dalian', photo: '/team/nika.jpg' },
  { name: 'Cayla Day', role: 'Operator', city: 'Dalian', photo: '/team/cayla.jpg' },
  { name: 'Pongrak Paseeratasang', role: 'Graphic Designer', city: 'Bangkok' },
  { name: 'Sawanya Phatthayut', role: 'Graphic Designer', city: 'Bangkok' },
  { name: 'Titiwannapa Dechanantpong', role: 'Graphic Designer', city: 'Bangkok' },
  { name: 'Passanai Wanchana', role: 'Production Artworker', city: 'Bangkok' },
  { name: 'Suphapon Kunta', role: 'Production Artworker', city: 'Bangkok' },
];

export interface HomeWork { title: string; tag: string; kind: string; ph: string; }
export const HOME_WORK: HomeWork[] = [
  { title: 'Global pharma launch', tag: 'Pharma', kind: 'eDetailer · Veeva', ph: 'Pack + screen system' },
  { title: 'FMCG shelf reset', tag: 'FMCG', kind: 'Packaging · POS', ph: 'Range refresh, 28 SKUs' },
  { title: 'ANZ insurer rebuild', tag: 'Financial Services', kind: 'Digital · Web', ph: 'Site rebuild, AU + NZ' },
  { title: 'Aged-care identity', tag: 'Healthcare', kind: 'Brand · Print', ph: 'Identity + brochure system' },
];

// Proof-led work cards: each carries a short challenge / delivered / value
// summary so the Work page reads as evidence, not just project labels.
// Project names are illustrative placeholders pending approved case studies.
export interface WorkItem {
  year: string;
  title: string;
  industry: string;
  kind: string;
  ratio: string;
  size: number;
  challenge: string;
  delivered: string;
  value: string;
}
export const WORK: WorkItem[] = [
  {
    year: '2026', title: 'Global pharma launch — eDetailer + pack', industry: 'Pharma', kind: 'eDetailer · Veeva', ratio: '16/10', size: 7,
    challenge: 'A new prescription product launching in 14 markets needed a Veeva eDetailer and pack system that could clear review in each market without being rebuilt every time.',
    delivered: 'A modular eDetailer and master pack system with local-language variants, built to each market’s MLR process and managed from one shared reference library.',
    value: 'One master, many markets — local teams adapted approved modules instead of starting over, and review cycles got shorter as reviewers saw consistent content.',
  },
  {
    year: '2026', title: 'ANZ insurer — website rebuild', industry: 'Finserv', kind: 'Digital · Web', ratio: '16/12', size: 5,
    challenge: 'An insurer’s site was slow, hard for search and AI assistants to read, and its enquiry forms were leaking leads.',
    delivered: 'A rebuild on a fast, crawler-readable stack with a clear content structure and tracked enquiry forms across AU and NZ.',
    value: 'Faster pages, content that’s easy to find and quote, and a clearer path from visit to enquiry.',
  },
  {
    year: '2025', title: 'FMCG range — shelf reset', industry: 'FMCG', kind: 'Packaging · POS', ratio: '4/3', size: 6,
    challenge: 'A 28-SKU range had drifted out of consistency across retailers and markets, slowing every new variant.',
    delivered: 'A tiered pack architecture, dielines and final art, all managed through a single artwork library with clear versioning.',
    value: 'One source of truth for artwork, fewer version mix-ups, and faster turnarounds on the next SKU.',
  },
  {
    year: '2025', title: 'Aged-care provider — identity', industry: 'Healthcare', kind: 'Brand · Print', ratio: '4/3', size: 6,
    challenge: 'A care provider needed a brand and brochure system that local teams could use without going back to an agency each time.',
    delivered: 'An identity and templated brochure system with simple rules and reusable layouts.',
    value: 'Local teams produce on-brand materials themselves — fewer small briefs, lower cost per piece.',
  },
  {
    year: '2025', title: 'Premium spirits — limited release', industry: 'Alcohol', kind: 'Packaging · Premium', ratio: '4/3', size: 4,
    challenge: 'A limited premium release needed standout finishes proofed and signed off before a fixed production window.',
    delivered: 'Structural and graphic design with foils and embosses speced and proofed with the production partner up front.',
    value: 'Finishes confirmed before production, so the run went ahead on schedule with no costly surprises.',
  },
  {
    year: '2025', title: 'Pharmacy retail — counter rollout', industry: 'Retail', kind: 'POS · 1,200 stores', ratio: '4/3', size: 4,
    challenge: 'A counter and endcap program had to reach 1,200 stores on a fixed date, with variations by region.',
    delivered: 'Production-ready specs, vendor management and market-specific install kits, coordinated as one rollout.',
    value: 'One coordinated rollout instead of many separate briefs — fewer handoffs and a predictable install.',
  },
  {
    year: '2024', title: 'OTC health — pack + eDetailer refresh', industry: 'Pharma', kind: 'eDetailer · OTC', ratio: '4/3', size: 4,
    challenge: 'An OTC brand needed packaging and an eDetailer refreshed across AU/NZ and SEA on a tight timeline.',
    delivered: 'A refreshed pack and modular detailer with local-language adaptation, reusing already-approved modules.',
    value: 'Repeat work got easier — approved modules were reused, so later markets cost less and moved faster.',
  },
  {
    year: '2024', title: 'B2B tech — sales toolkit', industry: 'B2B', kind: 'Sales enablement', ratio: '4/3', size: 6,
    challenge: 'A B2B team’s pitch materials were inconsistent and slow to update across regions.',
    delivered: 'A modular deck and one-pager system with locked brand elements and editable content blocks.',
    value: 'Sales teams localise and update in minutes, with the brand staying consistent across APAC.',
  },
  {
    year: '2024', title: 'Travel retail — airport pop-up', industry: 'Travel Retail', kind: 'POS · Activation', ratio: '4/3', size: 6,
    challenge: 'A travel-retail activation needed to be designed, built and installed at an airport on a short lead time.',
    delivered: 'A buildable, travel-friendly design with specs and on-the-ground production coordination in market.',
    value: 'A senior lead in the region kept the build moving, and the activation opened on time.',
  },
];

// De-identified mini case studies (challenge / work delivered / practical value).
// Real, named case studies will replace these as clients approve them.
export interface CaseStudy {
  sector: string;
  scope: string;
  challenge: string;
  delivered: string;
  value: string;
}
export const CASE_STUDIES: CaseStudy[] = [
  {
    sector: 'Contrave · Difflam · DermaVeen',
    scope: 'Interactive eDetailers · iPad',
    challenge: 'Three prescription and consumer-health brands needed reps and customers to explore product and clinical information without wading through static PDFs.',
    delivered: 'Interactive iPad eDetailers with smooth animations, touch-responsive navigation, dynamic graphs for clinical data and animated breakdowns of key ingredient benefits — working across tablet, phone and desktop.',
    value: 'Engaging, easy-to-navigate detailers that bring each brand’s product and clinical story to life for the people who need it.',
  },
  {
    sector: 'Global pharmaceutical brand',
    scope: 'eDetailer + packaging · 14 markets',
    challenge: 'A new prescription launch had to ship a compliant eDetailer and pack system across 14 markets — fast, and without rebuilding the content for every regulator.',
    delivered: 'A modular master with local-language variants, built around each market’s MLR/PromoMats process and managed from one shared library.',
    value: 'Local teams adapted approved modules instead of starting over. Reviews moved faster because reviewers kept seeing consistent, familiar content.',
  },
  {
    sector: 'ANZ insurer',
    scope: 'Website rebuild · AU + NZ',
    challenge: 'The existing site was slow, hard for search and AI assistants to read, and the enquiry forms were losing leads.',
    delivered: 'A rebuild on a fast, crawler-readable stack with a clear content structure and tracked forms for both markets.',
    value: 'Pages load quickly, content is easy to find and quote, and there’s a clearer path from visit to enquiry.',
  },
  {
    sector: 'FMCG food brand',
    scope: 'Range reset · 28 SKUs',
    challenge: 'A large range had drifted out of consistency across retailers and markets, and every new variant took too long.',
    delivered: 'A tiered pack system, dielines and final art, all run through one artwork library with clear version control.',
    value: 'One source of truth for artwork meant fewer version mix-ups and quicker turnarounds on each new SKU.',
  },
  {
    sector: 'Pharmacy retail group',
    scope: 'POS rollout · 1,200 stores',
    challenge: 'A counter and endcap program had to reach 1,200 stores on a fixed date, with regional variations to manage.',
    delivered: 'Production-ready specs, vendor management and market-specific install kits, run as a single coordinated rollout.',
    value: 'One brief and one accountable team instead of many — fewer handoffs, and a predictable install on the date.',
  },
  {
    sector: 'OTC health brand',
    scope: 'Pack + eDetailer refresh · AU/NZ + SEA',
    challenge: 'A refresh needed to roll out across several markets on a tight timeline without ballooning the budget.',
    delivered: 'Refreshed packaging and a modular detailer with local-language adaptation, reusing already-approved modules.',
    value: 'The second and third markets were faster and cheaper than the first, because approved work was reused, not rebuilt.',
  },
];

export interface Post { date: string; cat: string; title: string; read: string; url?: string; }
// Only one genuinely-published article exists so far (on the current live site).
// The fabricated placeholder posts have been removed; add real articles here as
// they're written, ideally with a local `url` once article pages are built.
export const POSTS: Post[] = [
  { date: 'May 25 2026', cat: 'Studio', title: '20 years on — what we’ve learned', read: '6 min', url: 'https://group247ww.com/2026/05/25/20-years-on-what-weve-learned/' },
];

export const HERO_CYCLE_WORDS = [
  'packaging.', 'campaigns.', 'eDetailers.', 'websites.',
  'point of sale.', 'video.',
];

export const TIMELINE = [
  { num: '2006', name: 'Founded', desc: 'Founded in Sydney as a production-first design studio.' },
  { num: '2012', name: 'Manila', desc: 'Manila production office opens. Beginning of always-on delivery.' },
  { num: '2018', name: 'Pharma', desc: 'Pharma practice scales — regulated content becomes a core discipline.' },
  { num: '2024', name: 'eDetailers', desc: 'Productised Veeva-ready eDetailer offer launches to existing pharma clients.' },
  { num: '2026', name: '20 years on', desc: 'Video and training assets join the offer, and websites are rebuilt for SEO and AI-search visibility — useful technology, experienced people.' },
];

// Who we help — the buyer groups, named plainly (supports BD + LinkedIn traffic).
export interface Buyer { num: string; name: string; desc: string; }
export const WHO_WE_HELP: Buyer[] = [
  { num: '01', name: 'Marketing teams', desc: 'Campaigns, websites and content delivered on deadline — without you having to manage five different vendors.' },
  { num: '02', name: 'Brand teams', desc: 'One team keeping the brand consistent from the shelf to the screen, in every market you operate in.' },
  { num: '03', name: 'Trade & category teams', desc: 'POS, displays and retail-ready packaging speced and produced to roll out at scale.' },
  { num: '04', name: 'Production & studio teams', desc: 'Overflow artwork, final art and version control handled by a senior team that works the way yours does.' },
  { num: '05', name: 'Procurement teams', desc: 'Predictable scopes, transparent pricing and fewer suppliers to manage — with the detail handled.' },
  { num: '06', name: 'Regional & local teams', desc: 'Master assets adapted to local language and regulations, coordinated across AU, SEA and Greater China.' },
];

// How we work — the delivery process buyers actually ask about.
export interface WorkStep { num: string; name: string; desc: string; }
export const HOW_WE_WORK: WorkStep[] = [
  { num: '01', name: 'Briefing', desc: 'We start with a short, structured brief and a senior lead who stays on the account — so nothing gets lost in translation.' },
  { num: '02', name: 'A workflow that fits you', desc: 'A dedicated team from concept to final art, with a workflow adapted to how your team works. Fewer handoffs means fewer things to chase and re-explain.' },
  { num: '03', name: 'Approvals', desc: 'We work to your approval process — including MLR/PromoMats for regulated work — and prepare files to move through review with fewer rounds.' },
  { num: '04', name: 'Version control', desc: 'A single source of truth for artwork and assets, with clear versioning so the right file ships every time.' },
  { num: '05', name: 'QA checks', desc: 'Design, copy and compliance checks before anything leaves the studio — caught here, not at the printer or the reviewer.' },
  { num: '06', name: 'Localisation', desc: 'Local-language and market adaptation built into the workflow, so regional versions don’t mean starting from scratch.' },
  { num: '07', name: 'Repeat work, improved', desc: 'We build modular, reusable systems — so the second campaign, market or SKU is faster and lower-cost than the first.' },
];

// Procurement confidence — risk, detail, approvals, versions, repeat work.
export interface ProcurementPoint { name: string; desc: string; }
export const PROCUREMENT: ProcurementPoint[] = [
  { name: 'Fewer suppliers to manage', desc: 'One accountable partner across packaging, POS, digital, advertising, video and eDetailers — one point of contact, one team responsible.' },
  { name: 'Predictable scope and pricing', desc: 'Clear scopes and, where it fits, productised pricing — so budgets hold and surprises don’t turn up late.' },
  { name: 'Approvals supported', desc: 'We work inside your review and compliance process and keep a clear trail of versions and sign-offs.' },
  { name: 'The detail handled', desc: 'Specs, dielines, final art and install kits prepared properly up front, so production runs smoothly.' },
  { name: 'Repeat work made easier', desc: 'Reusable templates and asset libraries mean the next round is faster and lower-risk.' },
  { name: 'Risk reduced', desc: 'Senior people on every job, QA before release, and one team accountable from brief to delivery.' },
];

// ANZ / APAC rollout — concrete regional coordination examples.
export interface RegionalPoint { name: string; desc: string; }
export const REGIONAL: RegionalPoint[] = [
  { name: 'Market versions', desc: 'One master adapted into local versions for AU, NZ, SEA and Greater China — not eight separate builds.' },
  { name: 'Localisation in-region', desc: 'Local-language copy, units, claims and regulatory variations handled by people on the ground in each market.' },
  { name: 'Fewer handoffs', desc: 'Production, artwork and translation under one roof — no shipping files between separate agencies and vendors.' },
  { name: 'Regional coordination', desc: 'Senior leads in each timezone keep rollouts moving — including while your home market is asleep.' },
];

export const SITE = {
  name: 'Group 24/7 Worldwide',
  shortName: 'G247',
  url: 'https://group247ww.com',
  tagline: 'Careful thinking, dependable execution.',
  founded: '2006',
  email: 'info@group247ww.com',
  phone: '', // TODO: no public phone number on the live site — add real number when available
};
