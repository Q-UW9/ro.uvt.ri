// Shared WP fields present on every CPT response

export interface WpTerm {
  id: number;
  name: string;
  slug: string;
}

export interface WpBase {
  id: number;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  _embedded?: {
    'wp:featuredmedia'?: [{ source_url: string; alt_text: string }];
    'wp:term'?: WpTerm[][];
  };
}

// ── Calls ────────────────────────────────────────────────────

export interface WpCall extends WpBase {
  acf: {
    deadline: string;
    eligibility: string;
    financial_support: string;
    application_steps: { step: string }[];
    documents: { label: string; url: string }[];
  };
}

// ── Programmes ───────────────────────────────────────────────

export interface WpProgramme extends WpBase {
  acf: {
    application_deadline: string;
    duration: string;
    language: string;
    partner_institution: string;
    country: string;
    coordinator_email: string;
  };
}

// ── Resources ────────────────────────────────────────────────

export interface WpResource extends WpBase {
  acf: {
    file_url: string;
    file_type: 'PDF' | 'DOCX' | 'XLS' | 'Other';
    audience_notes: string;
  };
}

// ── Stories ──────────────────────────────────────────────────

export interface WpStory extends WpBase {
  acf: {
    author: string;
    story_date: string;
    pull_quote: string;
  };
}

// ── Pages ────────────────────────────────────────────────────

export interface WpPage extends WpBase {
  acf: {
    heading?: string;
    body?: string;
    button_label?: string;
    button_url?: string;
    steps?: { step_title: string; step_description: string }[];
    faqs?: { question: string; answer: string }[];
    name?: string;
    role?: string;
    email?: string;
    phone?: string;
    documents?: { label: string; file_url: string }[];
  };
}
