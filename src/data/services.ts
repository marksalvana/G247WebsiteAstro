// Service data — lifted verbatim from the prototype (home.jsx + services.jsx).

export type ServiceSlug =
  | 'packaging'
  | 'point-of-sale'
  | 'digital'
  | 'advertising'
  | 'edetailers'
  | 'video';

export interface HomeService {
  num: string;
  name: string;
  slug: ServiceSlug;
  meta: string;
  desc: string;
}

// Ordered list used on the homepage + What We Do index.
export const HOME_SERVICES: HomeService[] = [
  { num: '01', name: 'Packaging', slug: 'packaging', meta: 'Shelf · Pharma · Premium', desc: 'Structural and graphic packaging for brands competing in the most demanding categories — from regulated pharma to FMCG hero SKUs.' },
  { num: '02', name: 'Point of Sale', slug: 'point-of-sale', meta: 'Retail · POS · Display', desc: 'Display, signage and in-store environments designed to be specified, produced and rolled out at scale across markets.' },
  { num: '03', name: 'Digital', slug: 'digital', meta: 'Web · Search · Performance', desc: 'Websites, microsites and digital systems, structured for SEO and AI-search visibility so people and search tools can find and understand your brand.' },
  { num: '04', name: 'Advertising & Collateral', slug: 'advertising', meta: 'ATL · BTL · Print', desc: 'Concept-to-final-art campaigns for screen and print, made by senior people with a production process tuned for speed.' },
  { num: '05', name: 'eDetailers', slug: 'edetailers', meta: 'Pharma · Veeva · Compliance', desc: 'Veeva-ready eDetailers built by a team that lives in regulated content — made to move through review with fewer rounds.' },
  { num: '06', name: 'Video & Training Assets', slug: 'video', meta: 'Video · Motion · Training', desc: 'Video, motion and training content for launches, events, social and internal comms — from storyboards to editing, animation, localisation and versioning.' },
];

export interface Capability { num: string; name: string; desc: string; }
export interface ProcessStep { num: string; name: string; desc: string; }
export interface SampleWork { title: string; tag: string; }
export interface PriceTier {
  name: string;
  price: string;
  priceSmall: string;
  desc: string;
  features: string[];
  featured?: boolean;
}

export interface ServiceDetail {
  num: string;
  name: string;
  slug: ServiceSlug;
  tag: string;
  lede: string;
  capabilities: Capability[];
  process: ProcessStep[];
  industries: string[];
  work: SampleWork[];
  pricing?: PriceTier[];
}

export const SERVICE_DETAILS: Record<ServiceSlug, ServiceDetail> = {
  packaging: {
    num: '01', name: 'Packaging', slug: 'packaging', tag: 'Practice',
    lede: 'Structural and graphic packaging for brands competing in the most demanding categories — from regulated pharma to FMCG hero SKUs that need to win the shelf.',
    capabilities: [
      { num: '01', name: 'Range design', desc: 'Master brand systems and tiered architecture across 20–200 SKU portfolios.' },
      { num: '02', name: 'Pharma compliance', desc: 'TGA, FDA and EMA copy requirements built into the production loop, so artwork is ready to move through review.' },
      { num: '03', name: 'Structural / dieline', desc: 'Mock-ups, dielines, and pre-press files ready for any vendor, any market.' },
      { num: '04', name: 'Premium finishes', desc: 'Foils, embosses, soft-touch — speced and proofed with our production partners.' },
      { num: '05', name: 'Multi-market rollout', desc: 'Local-language adaptation across AU, SEA, and Greater China without losing brand integrity.' },
      { num: '06', name: 'Artwork management', desc: 'Final-art, versioning and asset libraries handled by a senior artwork team.' },
    ],
    process: [
      { num: '01', name: 'Brief', desc: 'Discovery, audit, and category review with senior strategists in the room.' },
      { num: '02', name: 'Design', desc: 'Concepts presented in context — on shelf, on screen, in hand.' },
      { num: '03', name: 'Refine', desc: 'Iterative refinement informed by compliance, retailer and consumer testing.' },
      { num: '04', name: 'Artwork', desc: 'Final-art, dielines, and proofs prepared for production.' },
      { num: '05', name: 'Roll-out', desc: 'Multi-language, multi-market roll-out coordinated across our regional teams.' },
    ],
    industries: ['Pharmaceutical', 'OTC Health', 'FMCG', 'Premium Spirits', 'Aged Care', 'Personal Care'],
    work: [
      { title: 'Global pharma pack system', tag: 'Pharma · 14 markets' },
      { title: 'FMCG range refresh', tag: 'FMCG · 28 SKUs' },
      { title: 'Premium spirits release', tag: 'Alcohol · Limited' },
    ],
  },
  'point-of-sale': {
    num: '02', name: 'Point of Sale', slug: 'point-of-sale', tag: 'Practice',
    lede: 'Display, signage and in-store environments designed to be specified, produced and rolled out at scale across markets.',
    capabilities: [
      { num: '01', name: 'POS Display', desc: 'FSDU, gondola ends, counter units — speced for production at any scale.' },
      { num: '02', name: 'In-store signage', desc: 'Wayfinding, shelf strips, wobblers — production-ready files for any vendor.' },
      { num: '03', name: 'Retail environment', desc: 'Pop-ups, activations, and brand spaces designed for build and travel.' },
      { num: '04', name: 'Vendor management', desc: 'We brief, qualify and manage your production vendors across markets.' },
      { num: '05', name: 'Roll-out kits', desc: 'Multi-market kits with local-language adaptation and install guidance.' },
      { num: '06', name: 'Sustainable specs', desc: 'Material specifications optimised for cost, recyclability and shipping footprint.' },
    ],
    process: [
      { num: '01', name: 'Brief', desc: 'Retail audit and channel-by-channel objectives.' },
      { num: '02', name: 'Concept', desc: 'Visual concepts and 3D mock-ups in retail context.' },
      { num: '03', name: 'Spec', desc: 'Materials, finishes and production specs.' },
      { num: '04', name: 'Produce', desc: 'Vendor management across markets.' },
      { num: '05', name: 'Install', desc: 'Install kits and field support.' },
    ],
    industries: ['Pharmacy Retail', 'Grocery', 'Department Store', 'Convenience', 'Specialty', 'Travel Retail'],
    work: [
      { title: 'Pharmacy counter rollout', tag: 'Retail · 1,200 stores' },
      { title: 'FMCG endcap system', tag: 'Grocery · AU/NZ' },
      { title: 'Travel-retail pop-up', tag: 'Travel · Airport' },
    ],
  },
  digital: {
    num: '03', name: 'Digital', slug: 'digital', tag: 'Practice',
    lede: 'Websites, microsites and digital systems, structured so people, search engines and AI-search tools can find and understand the information that matters. A senior dev team, no template factories.',
    capabilities: [
      { num: '01', name: 'SEO & AI-search visibility', desc: 'Structured so people, search engines and AI-search tools (sometimes called GEO) can find and understand your content — not just index it.' },
      { num: '02', name: 'Performance', desc: 'Fast, accessible and lean, with Core Web Vitals treated as a real target — not an afterthought.' },
      { num: '03', name: 'Microsite & campaign', desc: 'Launch microsites, product pages, and lead-gen experiences with full analytics built in.' },
      { num: '04', name: 'Design systems', desc: 'Modular component libraries that scale with your in-house team.' },
      { num: '05', name: 'Headless CMS', desc: 'WordPress, Sanity, Contentful — picked for the editor experience, not the agency margin.' },
      { num: '06', name: 'Senior-led build', desc: 'Experienced engineers, using modern tooling where it genuinely speeds up iteration — without cutting corners on craft.' },
    ],
    process: [
      { num: '01', name: 'Audit', desc: 'Search visibility, performance and content audit of your current site.' },
      { num: '02', name: 'Architecture', desc: 'IA, content model and tech selection.' },
      { num: '03', name: 'Design', desc: 'Hi-fi design system in real components.' },
      { num: '04', name: 'Build', desc: 'Senior-led build with QA throughout.' },
      { num: '05', name: 'Launch', desc: 'Performance pass, search-visibility checks, and post-launch care.' },
    ],
    industries: ['Pharmaceutical', 'Financial Services', 'Insurance', 'B2B SaaS', 'Premium Consumer', 'Healthcare'],
    work: [
      { title: 'ANZ insurer website rebuild', tag: 'Finserv · AU/NZ' },
      { title: 'Pharma Veeva microsite', tag: 'Pharma · Restricted' },
      { title: 'Aged-care lead engine', tag: 'Health · Direct response' },
    ],
  },
  advertising: {
    num: '04', name: 'Advertising & Collateral', slug: 'advertising', tag: 'Practice',
    lede: 'Concept-to-final-art campaigns for screen and print, made by senior people with a production process tuned for speed.',
    capabilities: [
      { num: '01', name: 'Campaign concepts', desc: 'Big-idea concepts that travel across paid, owned and earned channels.' },
      { num: '02', name: 'Print collateral', desc: 'Brochures, sales tools, annual reports — designed and final-arted in-house.' },
      { num: '03', name: 'OOH & print media', desc: 'Outdoor, press, magazine — concept through artwork delivery.' },
      { num: '04', name: 'Social campaign', desc: 'Modular social systems with motion templates that scale with your calendar.' },
      { num: '05', name: 'Sales enablement', desc: 'Pitch decks, one-pagers, and field tools that close.' },
      { num: '06', name: 'Brand systems', desc: 'Visual identities and guidelines built for the channels brands actually use.' },
    ],
    process: [
      { num: '01', name: 'Strategy', desc: 'Audience, channel and message strategy.' },
      { num: '02', name: 'Concept', desc: 'Big-idea concepts in 2–3 directions.' },
      { num: '03', name: 'Design', desc: 'Channel-by-channel design.' },
      { num: '04', name: 'Artwork', desc: 'Final art across every format.' },
      { num: '05', name: 'Activate', desc: 'Media planning and rollout support.' },
    ],
    industries: ['B2B Tech', 'Healthcare', 'Financial Services', 'Consumer', 'Education', 'Non-Profit'],
    work: [
      { title: 'Insurer always-on social', tag: 'Finserv · Social · AU' },
      { title: 'Aged-care national campaign', tag: 'Health · OOH+Print · AU' },
      { title: 'B2B sales toolkit', tag: 'B2B · APAC' },
    ],
  },
  edetailers: {
    num: '05', name: 'eDetailers', slug: 'edetailers', tag: 'Practice · NEW for 2026',
    lede: 'Veeva-ready eDetailers built by a team that lives in regulated content — made to move through MLR/PromoMats review with fewer rounds. Productised pricing, predictable turnaround.',
    capabilities: [
      { num: '01', name: 'Veeva CRM-ready', desc: 'Built to Veeva specification — drop straight into your reps’ iPads.' },
      { num: '02', name: 'Approval-ready', desc: 'MLR/PromoMats workflow built into our process. We speak your reviewers’ language.' },
      { num: '03', name: 'Modular content', desc: 'Reusable slide libraries that scale with the brand and the indication.' },
      { num: '04', name: 'Multi-language', desc: 'Local-language adaptation across SEA and Greater China without rebuilding from scratch.' },
      { num: '05', name: 'Analytics-ready', desc: 'Interaction tagging built in for measurable rep effectiveness.' },
      { num: '06', name: 'Productised pricing', desc: 'Three tiers, three turnarounds, three prices. No surprises.' },
    ],
    process: [
      { num: '01', name: 'Brief', desc: 'Indication, audience, key messages.' },
      { num: '02', name: 'Storyline', desc: 'Narrative structure and slide map.' },
      { num: '03', name: 'Design', desc: 'On-brand visual design.' },
      { num: '04', name: 'Build', desc: 'Veeva build and QA.' },
      { num: '05', name: 'Approval', desc: 'MLR/PromoMats submission and revision cycle.' },
    ],
    industries: ['Pharmaceutical', 'Biotech', 'Medical Devices', 'Animal Health', 'Consumer Health', 'Diagnostics'],
    work: [
      { title: 'Contrave interactive eDetailer', tag: 'Rx · Weight management' },
      { title: 'Difflam immune-support eDetailer', tag: 'Consumer health · OTC' },
      { title: 'DermaVeen eDetailer', tag: 'Skincare · Consumer' },
      { title: 'Rx launch eDetailer', tag: 'Rx · 14 markets' },
      { title: 'OTC eDetailer refresh', tag: 'OTC · AU/NZ' },
      { title: 'Diagnostics detailer series', tag: 'Devices · APAC' },
    ],
    pricing: [
      {
        name: 'Standard', price: 'From $14k', priceSmall: ' / module',
        desc: 'Single indication, single market, MLR-ready.',
        features: ['Up to 12 screens', 'Veeva-ready build', '2 revision rounds', '6-week turnaround'],
      },
      {
        name: 'Launch', price: 'From $34k', priceSmall: ' / module',
        desc: 'Launch-ready content, motion, and references.', featured: true,
        features: ['Up to 28 screens + motion', 'Modular library', 'Multi-market adaptation', 'Veeva analytics tagging', '4 revision rounds'],
      },
      {
        name: 'Global', price: 'Quoted', priceSmall: ' · 5+ markets',
        desc: 'Multi-market roll-out across SEA and Greater China.',
        features: ['Master + 5+ locales', 'Local-language QA', 'Reviewer comms support', 'Asset library + governance'],
      },
    ],
  },
  video: {
    num: '06', name: 'Video & Training Assets', slug: 'video', tag: 'Practice · NEW for 2026',
    lede: 'Practical video, motion and training content — for product launches, events, social and internal comms. From storyboards and editing to animation, localisation and versioning, made by senior people who know regulated and multi-market delivery.',
    capabilities: [
      { num: '01', name: 'Concept & storyboard', desc: 'Scripts and storyboards signed off before the expensive production work starts.' },
      { num: '02', name: 'Editing & post', desc: 'Editing, grading and finishing for launch films, social cut-downs and event content.' },
      { num: '03', name: 'Motion & animation', desc: 'Motion graphics and animation for explainers, product and training content.' },
      { num: '04', name: 'Training & learning', desc: 'Product, process and learning videos your teams can actually use.' },
      { num: '05', name: 'Localisation & versioning', desc: 'Captions, voiceover, local-language versions and market variants from one master.' },
      { num: '06', name: 'Delivery formats', desc: 'Every ratio and format you need — social, web, presentation and broadcast.' },
    ],
    process: [
      { num: '01', name: 'Brief', desc: 'Audience, message and where the video will be used.' },
      { num: '02', name: 'Storyboard', desc: 'Script and storyboard signed off before production.' },
      { num: '03', name: 'Produce', desc: 'Filming, editing, motion and sound.' },
      { num: '04', name: 'Review', desc: 'Revision rounds tracked, with regulated review supported where needed.' },
      { num: '05', name: 'Deliver', desc: 'Final masters, versions and formats, ready to publish.' },
    ],
    industries: ['Pharmaceutical', 'Healthcare', 'FMCG', 'Financial Services', 'B2B Tech', 'Education'],
    work: [
      { title: 'Global pharma launch film', tag: 'Rx · Multi-market' },
      { title: 'Regional training series', tag: 'Health · Multi-language' },
      { title: 'Product explainer set', tag: 'B2B · Social + web' },
    ],
  },
};

export const SERVICE_SLUGS = Object.keys(SERVICE_DETAILS) as ServiceSlug[];
