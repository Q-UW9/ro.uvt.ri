const BASE = import.meta.env.VITE_WP_API_BASE ?? "http://ro.uvt.ri.test/wp-json/wp/v2";

// ── Generic helpers ─────────────────────────────────────────

async function fetchJSON(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`API error ${res.status}: ${url}`);
  return res.json();
}

function bySlug(endpoint, slug) {
  return fetchJSON(`${BASE}/${endpoint}?slug=${slug}&_embed`).then(d => d[0] ?? null);
}

function list(endpoint, params = {}) {
  const qs = new URLSearchParams({ per_page: "20", ...params }).toString();
  return fetchJSON(`${BASE}/${endpoint}?${qs}&_embed`);
}

// ── Standard posts ───────────────────────────────────────────

export const getPosts      = ()       => list("posts");
export const getPost       = (slug)   => bySlug("posts", slug);
export const getPages      = ()       => list("pages");
export const getPage       = (slug)   => bySlug("pages", slug);

// ── CPT: Calls ───────────────────────────────────────────────

export const getCalls      = (params) => list("calls", params);
export const getCall       = (slug)   => bySlug("calls", slug);

// ── CPT: Programmes ──────────────────────────────────────────

export const getProgrammes = (params) => list("programmes", params);
export const getProgramme  = (slug)   => bySlug("programmes", slug);

// ── CPT: Resources ───────────────────────────────────────────

export const getResources  = (params) => list("resources", params);
export const getResource   = (slug)   => bySlug("resources", slug);

// ── CPT: Stories ─────────────────────────────────────────────

export const getStories    = (params) => list("stories", params);
export const getStory      = (slug)   => bySlug("stories", slug);
