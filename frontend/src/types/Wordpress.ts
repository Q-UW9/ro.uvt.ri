// ── Shared WP REST shapes ─────────────────────────────────

export interface WPRendered {
  rendered: string
}

export interface WPImage {
  id: number
  src: string
  alt: string
  width: number
  height: number
}

// ── WP Page ───────────────────────────────────────────────

export interface WPPage {
  id: number
  slug: string
  title: WPRendered
  content: WPRendered
  excerpt: WPRendered
  status: string
  acf: {
    // Global field groups (optional — not all pages use all groups)
    // CTA Block
    heading?: string
    body?: string
    button_label?: string
    button_url?: string
    // Process Steps
    steps?: Array<{ step_title: string; step_description: string }>
    // FAQ Section
    faqs?: Array<{ question: string; answer: string }>
    // Contact Card
    name?: string
    role?: string
    email?: string
    phone?: string
    // Document Repeater
    documents?: Array<{ label: string; file_url: string }>
  }
}

// ── WP Post (news) ────────────────────────────────────────

export interface WPPost {
  id: number
  slug: string
  date: string
  title: WPRendered
  content: WPRendered
  excerpt: WPRendered
  status: string
}

// ── Call CPT ──────────────────────────────────────────────

export interface WPCall {
  id: number
  slug: string
  title: WPRendered
  content: WPRendered
  excerpt: WPRendered
  status: string
  acf: {
    deadline: string                           // "Y-m-d"
    financial_support: string
    eligibility: string                        // may contain HTML
    application_steps: Array<{ step: string }>
    documents: Array<{ label: string; url: string }>
  }
}

// ── Programme CPT ─────────────────────────────────────────

export interface WPProgramme {
  id: number
  slug: string
  title: WPRendered
  content: WPRendered
  excerpt: WPRendered
  status: string
  acf: {
    application_deadline: string              // "Y-m-d"
    duration: string
    language: string
    partner_institution: string
    country: string
    coordinator_email: string
  }
}

// ── Resource CPT ──────────────────────────────────────────

export interface WPResource {
  id: number
  slug: string
  title: WPRendered
  content: WPRendered
  excerpt: WPRendered
  status: string
  acf: {
    file_url: string
    file_type: 'PDF' | 'DOCX' | 'XLS' | 'Other'
    audience_notes: string                    // may contain HTML
  }
}

// ── Story CPT ─────────────────────────────────────────────

export interface WPStory {
  id: number
  slug: string
  title: WPRendered
  content: WPRendered
  excerpt: WPRendered
  status: string
  acf: {
    author: string
    story_date: string                        // "Y-m-d"
    pull_quote: string
  }
}

// ── Filter param shapes ───────────────────────────────────

export interface CallFilterParams {
  audience?: string
  'academic-year'?: string
}

export interface ProgrammeFilterParams {
  audience?: string
  'programme-family'?: string
}

export interface ResourceFilterParams {
  audience?: string
  'content-topic'?: string
  'academic-year'?: string
}

export interface StoryFilterParams {
  audience?: string
  'content-topic'?: string
}