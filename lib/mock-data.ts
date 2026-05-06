// ============================================================
// MOCK DATA — replaces Supabase for demo purposes
// ============================================================

export type LeadStatus = 'new' | 'contacted' | 'qualified' | 'proposal' | 'won' | 'lost'
export type PoolType = 'inground' | 'above_ground' | 'spa' | 'renovation'

export interface Lead {
  id: string
  created_at: string
  name: string
  email: string
  phone?: string
  status: LeadStatus
  ai_score: number
  ai_priority: 'high' | 'medium' | 'low'
  ai_reasoning: string
  pool_type?: PoolType
  pool_length?: number
  pool_width?: number
  pool_depth?: number
  finish_type?: string
  budget_range?: string
  timeline?: string
  notes?: string
  source: string
}

export interface Post {
  id: string
  created_at: string
  updated_at: string
  title: string
  slug: string
  content: string
  excerpt: string
  cover_image: string
  status: 'draft' | 'published' | 'archived'
  ai_generated: boolean
  tags: string[]
}

export interface Booking {
  id: string
  created_at: string
  lead_id?: string
  lead_name?: string
  title: string
  type: 'consultation' | 'maintenance' | 'inspection' | 'follow_up'
  start_time: string
  end_time: string
  status: 'scheduled' | 'confirmed' | 'completed' | 'cancelled'
  notes?: string
}

export interface TrainingDoc {
  id: string
  created_at: string
  name: string
  file_type: string
  status: 'processing' | 'active' | 'failed'
  chunks_count: number
  content_preview: string
}

export interface PageBlock {
  id: string
  type: 'hero' | 'text' | 'image' | 'cta' | 'features' | 'testimonial'
  content: Record<string, string>
}

export interface SitePage {
  id: string
  title: string
  slug: string
  blocks: PageBlock[]
  status: 'draft' | 'published'
}

// ─── LEADS ────────────────────────────────────────────────
export const mockLeads: Lead[] = [
  {
    id: '1',
    created_at: '2026-05-01T09:00:00Z',
    name: 'Marcus Johnson',
    email: 'marcus@gmail.com',
    phone: '(602) 555-0182',
    status: 'new',
    ai_score: 92,
    ai_priority: 'high',
    ai_reasoning: 'Budget specified, short timeline, inground pool with premium finish. High-value project.',
    pool_type: 'inground',
    pool_length: 40,
    pool_width: 20,
    pool_depth: 6,
    finish_type: 'pebble',
    budget_range: '$75,000 – $100,000',
    timeline: '3 months',
    notes: 'Wants a resort-style pool with tanning ledge and waterfall.',
    source: 'website',
  },
  {
    id: '2',
    created_at: '2026-05-02T14:30:00Z',
    name: 'Sarah & Tom Ellison',
    email: 'tellison@outlook.com',
    phone: '(480) 555-0341',
    status: 'contacted',
    ai_score: 78,
    ai_priority: 'high',
    ai_reasoning: 'Couple with clear pool dimensions and reasonable budget. Inground pool project.',
    pool_type: 'inground',
    pool_length: 30,
    pool_width: 15,
    finish_type: 'tile',
    budget_range: '$50,000 – $70,000',
    timeline: '6 months',
    notes: 'New home build, coordinating with contractor.',
    source: 'referral',
  },
  {
    id: '3',
    created_at: '2026-05-03T11:15:00Z',
    name: 'Diana Reyes',
    email: 'dreyes@yahoo.com',
    phone: '(623) 555-0267',
    status: 'qualified',
    ai_score: 65,
    ai_priority: 'medium',
    ai_reasoning: 'Spa project is smaller scope but decisive customer with timeline.',
    pool_type: 'spa',
    budget_range: '$15,000 – $25,000',
    timeline: '2 months',
    notes: 'Wants a standalone spa with jets and LED lighting.',
    source: 'instagram',
  },
  {
    id: '4',
    created_at: '2026-05-03T16:45:00Z',
    name: 'Kevin Park',
    email: 'kpark@gmail.com',
    status: 'proposal',
    ai_score: 84,
    ai_priority: 'high',
    ai_reasoning: 'Renovation of existing pool, specified finish upgrade. High close probability.',
    pool_type: 'renovation',
    finish_type: 'pebble',
    budget_range: '$30,000 – $45,000',
    timeline: '1 month',
    notes: 'Existing plaster pool needs full resurface + new equipment.',
    source: 'google',
  },
  {
    id: '5',
    created_at: '2026-04-28T10:00:00Z',
    name: 'Amanda Torres',
    email: 'amanda.torres@hotmail.com',
    phone: '(520) 555-0198',
    status: 'won',
    ai_score: 95,
    ai_priority: 'high',
    ai_reasoning: 'Completed deal. Large inground pool with full equipment package.',
    pool_type: 'inground',
    pool_length: 45,
    pool_width: 22,
    finish_type: 'pebble',
    budget_range: '$90,000 – $120,000',
    timeline: 'ASAP',
    notes: 'Signed contract 04/30. Excavation starts May 20.',
    source: 'referral',
  },
  {
    id: '6',
    created_at: '2026-04-25T09:30:00Z',
    name: 'Robert Huang',
    email: 'rhuang@corp.com',
    status: 'lost',
    ai_score: 32,
    ai_priority: 'low',
    ai_reasoning: 'No phone, vague budget, no specific pool type. Low engagement.',
    notes: 'Just browsing for now. Not ready to commit.',
    source: 'website',
  },
  {
    id: '7',
    created_at: '2026-05-04T08:00:00Z',
    name: 'Jennifer Walsh',
    email: 'jwalsh@gmail.com',
    phone: '(602) 555-0421',
    status: 'new',
    ai_score: 71,
    ai_priority: 'medium',
    ai_reasoning: 'Above ground pool, mid-range budget. Quick project timeline.',
    pool_type: 'above_ground',
    budget_range: '$8,000 – $12,000',
    timeline: '1 month',
    notes: 'Wants something for the kids this summer.',
    source: 'facebook',
  },
  {
    id: '8',
    created_at: '2026-05-05T13:00:00Z',
    name: 'Carlos Mendez',
    email: 'cmendez@gmail.com',
    phone: '(480) 555-0589',
    status: 'contacted',
    ai_score: 88,
    ai_priority: 'high',
    ai_reasoning: 'Inground with detailed specs and premium budget. Excellent project lead.',
    pool_type: 'inground',
    pool_length: 35,
    pool_width: 18,
    finish_type: 'fiberglass',
    budget_range: '$60,000 – $80,000',
    timeline: '4 months',
    notes: 'Wants fiberglass for lower maintenance. Has HOA approval.',
    source: 'google',
  },
]

// ─── BLOG POSTS ───────────────────────────────────────────
export const mockPosts: Post[] = [
  {
    id: '1',
    created_at: '2026-04-15T10:00:00Z',
    updated_at: '2026-04-15T10:00:00Z',
    title: '5 Reasons to Choose a Pebble Finish for Your Pool',
    slug: '5-reasons-pebble-finish',
    excerpt: 'Pebble finishes offer unmatched durability and a luxury resort aesthetic. Here\'s why our clients love them.',
    content: `# 5 Reasons to Choose a Pebble Finish for Your Pool\n\nWhen it comes to pool finishes, **pebble aggregate** stands apart from traditional plaster as the premium choice for Arizona homeowners. Here's why...\n\n## 1. Unmatched Durability\nPebble finishes last 15–25 years compared to 5–10 for standard plaster. The natural stone aggregate creates a surface that resists staining, etching, and the harsh Arizona sun.\n\n## 2. Resort-Quality Aesthetics\nThe flecks of natural stone create a shimmering, deep-blue appearance that elevates any backyard into a luxury retreat. No two pebble pools look identical.\n\n## 3. Safer Footing\nThe slightly textured surface provides natural grip, making it safer for children and adults to walk around the pool perimeter and on steps.\n\n## 4. Lower Long-Term Costs\nWhile the upfront cost is higher than plaster, the dramatically longer lifespan means fewer resurfacing projects and lower chemical costs over time.\n\n## 5. Increased Home Value\nA premium pebble pool finish signals quality craftsmanship and can add significant value to your property appraisal.\n\n**Ready to upgrade your pool?** Contact Above & Beyond Pools for a free consultation.`,
    cover_image: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=800&q=80',
    status: 'published',
    ai_generated: false,
    tags: ['pool finishes', 'pebble', 'maintenance', 'design'],
  },
  {
    id: '2',
    created_at: '2026-04-22T14:00:00Z',
    updated_at: '2026-04-22T14:00:00Z',
    title: 'Pool Maintenance Checklist for Arizona Summers',
    slug: 'arizona-summer-pool-maintenance',
    excerpt: 'Arizona summers are brutal on pools. Follow this weekly checklist to keep your water crystal clear all season.',
    content: `# Pool Maintenance Checklist for Arizona Summers\n\nWith temperatures regularly exceeding 110°F, Arizona pools face unique challenges that require a proactive maintenance approach...\n\n## Weekly Tasks\n- **Test water chemistry** (pH 7.2–7.6, Chlorine 1–3 ppm)\n- **Skim the surface** and empty skimmer baskets\n- **Brush walls and floor** to prevent algae buildup\n- **Check filter pressure** and backwash if needed\n\n## Every 2 Weeks\n- **Shock the pool** — high UV and heat break down chlorine faster in AZ\n- **Clean pool cleaner** filter and tracks\n- **Inspect equipment** for leaks or unusual sounds\n\n## Monthly\n- **Balance total alkalinity** (80–120 ppm)\n- **Check cyanuric acid** levels — critical for outdoor pools\n- **Inspect lights** and electrical connections\n\nNeed professional help keeping your pool perfect? Above & Beyond Pools offers monthly maintenance packages starting at $149/month.`,
    cover_image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80',
    status: 'published',
    ai_generated: false,
    tags: ['maintenance', 'arizona', 'summer', 'tips'],
  },
  {
    id: '3',
    created_at: '2026-05-01T09:00:00Z',
    updated_at: '2026-05-01T09:00:00Z',
    title: 'AI-Written: The Ultimate Guide to Pool Lighting in 2026',
    slug: 'ultimate-guide-pool-lighting-2026',
    excerpt: 'Transform your pool from a daytime retreat into a breathtaking nighttime oasis with modern LED lighting systems.',
    content: `# The Ultimate Guide to Pool Lighting in 2026\n\nModern pool lighting has evolved dramatically. Today's LED systems offer millions of colors, smartphone control, and energy efficiency that was unimaginable a decade ago...\n\n## Types of Pool Lights\n\n### LED Color-Changing Lights\nThe gold standard for modern pools. Set the mood from calming blue to vibrant party colors with a single tap on your smartphone.\n\n### Fiber Optic Lighting\nIdeal for creating a starfield effect on dark-colored pool surfaces. Lower maintenance since the light source is remote from the water.\n\n### Underwater LED Strips\nPerfect for illuminating steps, ledges, and water features. Creates dramatic depth effects.\n\n## Smart Home Integration\nAll major pool lighting brands now integrate with Google Home, Amazon Alexa, and Apple HomeKit. Automate sunset-to-sunrise schedules effortlessly.\n\n## Cost Guide\n- Basic LED conversion: $800–$1,500\n- Full color LED system: $2,000–$4,000\n- Premium smart system with app control: $4,000–$8,000`,
    cover_image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
    status: 'published',
    ai_generated: true,
    tags: ['lighting', 'LED', 'smart home', 'design', 'AI Generated'],
  },
  {
    id: '4',
    created_at: '2026-05-05T16:00:00Z',
    updated_at: '2026-05-05T16:00:00Z',
    title: 'Fiberglass vs. Concrete Pools: Which is Right for You?',
    slug: 'fiberglass-vs-concrete-pools',
    excerpt: 'The two most popular inground pool types each have distinct advantages. We break down the full comparison.',
    content: `# Fiberglass vs. Concrete Pools\n\nDraft content — to be expanded...`,
    cover_image: 'https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=800&q=80',
    status: 'draft',
    ai_generated: false,
    tags: ['fiberglass', 'concrete', 'comparison', 'buying guide'],
  },
]

// ─── BOOKINGS ─────────────────────────────────────────────
const today = new Date('2026-05-06')
const d = (days: number, h: number, m = 0) => {
  const dt = new Date(today)
  dt.setDate(dt.getDate() + days)
  dt.setHours(h, m, 0, 0)
  return dt.toISOString()
}

export const mockBookings: Booking[] = [
  { id: '1', created_at: d(0, 8), lead_id: '1', lead_name: 'Marcus Johnson', title: 'Initial Consultation — Inground Pool', type: 'consultation', start_time: d(0, 9), end_time: d(0, 10), status: 'confirmed', notes: 'Bring portfolio of pebble finish examples.' },
  { id: '2', created_at: d(0, 8), lead_id: '3', lead_name: 'Diana Reyes', title: 'Site Visit — Spa Installation', type: 'inspection', start_time: d(0, 13), end_time: d(0, 14), status: 'scheduled' },
  { id: '3', created_at: d(0, 8), lead_name: 'Torres Residence', title: 'Pool Maintenance — Monthly Service', type: 'maintenance', start_time: d(1, 8), end_time: d(1, 9), status: 'scheduled' },
  { id: '4', created_at: d(0, 8), lead_id: '2', lead_name: 'Ellison Family', title: 'Design Presentation & Quote', type: 'consultation', start_time: d(1, 11), end_time: d(1, 12, 30), status: 'confirmed', notes: 'Prepare 3D rendering of inground design.' },
  { id: '5', created_at: d(0, 8), lead_id: '4', lead_name: 'Kevin Park', title: 'Renovation Follow-Up Call', type: 'follow_up', start_time: d(2, 10), end_time: d(2, 10, 30), status: 'scheduled' },
  { id: '6', created_at: d(0, 8), lead_name: 'Harrison Residence', title: 'Pool Maintenance — Weekly Service', type: 'maintenance', start_time: d(2, 14), end_time: d(2, 15), status: 'scheduled' },
  { id: '7', created_at: d(0, 8), lead_id: '8', lead_name: 'Carlos Mendez', title: 'Fiberglass Pool Consultation', type: 'consultation', start_time: d(4, 9), end_time: d(4, 10), status: 'scheduled', notes: 'Show fiberglass shell options and color samples.' },
  { id: '8', created_at: d(0, 8), lead_name: 'Ramirez Residence', title: 'Equipment Check & Chemical Balance', type: 'maintenance', start_time: d(5, 7, 30), end_time: d(5, 8, 30), status: 'scheduled' },
  { id: '9', created_at: d(0, 8), lead_id: '7', lead_name: 'Jennifer Walsh', title: 'Above Ground Pool Site Measure', type: 'inspection', start_time: d(6, 10), end_time: d(6, 11), status: 'scheduled' },
]

// ─── TRAINING DOCS ────────────────────────────────────────
export const mockTrainingDocs: TrainingDoc[] = [
  {
    id: '1',
    created_at: '2026-04-01T10:00:00Z',
    name: 'Services & Pricing Guide 2026.pdf',
    file_type: 'application/pdf',
    status: 'active',
    chunks_count: 24,
    content_preview: 'Above & Beyond Pools offers inground pool construction starting at $45,000. Spa installations from $12,000. Monthly maintenance packages from $149/month...',
  },
  {
    id: '2',
    created_at: '2026-04-05T10:00:00Z',
    name: 'Pool Finish Comparison Guide.txt',
    file_type: 'text/plain',
    status: 'active',
    chunks_count: 12,
    content_preview: 'Plaster: Most affordable, 5-10 year lifespan. Pebble: Premium look, 15-25 years. Fiberglass shells: Low maintenance, 25+ years. Tile: Custom aesthetic, premium price...',
  },
  {
    id: '3',
    created_at: '2026-04-10T10:00:00Z',
    name: 'FAQ — Common Customer Questions.txt',
    file_type: 'text/plain',
    status: 'active',
    chunks_count: 31,
    content_preview: 'Q: How long does pool construction take? A: Typically 8–12 weeks for inground pools. Q: Do you handle permits? A: Yes, we handle all City/County permits...',
  },
  {
    id: '4',
    created_at: '2026-05-03T10:00:00Z',
    name: 'Equipment Brands & Warranties.pdf',
    file_type: 'application/pdf',
    status: 'processing',
    chunks_count: 0,
    content_preview: 'Processing...',
  },
]

// ─── SITE PAGES ───────────────────────────────────────────
export const mockPages: SitePage[] = [
  {
    id: '1',
    title: 'Summer Sale Landing Page',
    slug: 'summer-sale-2026',
    status: 'draft',
    blocks: [
      { id: 'b1', type: 'hero', content: { heading: 'Save Up to $10,000 This Summer', subheading: 'Limited-time offer on all inground pool builds. Get your free quote before June 30.', cta: 'Claim My Discount', image: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=1200&q=80' } },
      { id: 'b2', type: 'features', content: { title: 'Why Choose Above & Beyond?', feature1: '✓ 20+ Years in Business', feature2: '✓ 500+ Pools Built', feature3: '✓ Licensed & Insured', feature4: '✓ 5-Year Workmanship Warranty' } },
      { id: 'b3', type: 'cta', content: { heading: 'Ready to Get Started?', subheading: 'Our design team is standing by.', buttonText: 'Book Free Consultation', buttonLink: '/contact' } },
    ],
  },
  {
    id: '2',
    title: 'Pool Renovation Special',
    slug: 'renovation-special',
    status: 'published',
    blocks: [
      { id: 'b4', type: 'hero', content: { heading: 'Give Your Pool a Complete Makeover', subheading: 'From replastering to full equipment upgrades, we do it all.', cta: 'Get Renovation Quote' } },
      { id: 'b5', type: 'text', content: { body: 'Is your pool showing its age? Cracked plaster, outdated equipment, and faded tile are no match for our expert renovation team...' } },
    ],
  },
]

// ─── DASHBOARD STATS ──────────────────────────────────────
export const mockStats = {
  totalLeads: 47,
  newLeadsThisWeek: 8,
  openProposals: 6,
  wonDealsThisMonth: 3,
  wonRevenueThisMonth: 245000,
  scheduledAppointments: 12,
  publishedPosts: 3,
  avgLeadScore: 72,
  conversionRate: 34,
  activeTrainingDocs: 3,
}
