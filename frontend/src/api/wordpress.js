const BASE = 'http://ro.uvt.ri.test/wp-json/wp/v2'

// ── Utility ───────────────────────────────────────────────

function buildQuery(params = {}) {
  const query = new URLSearchParams()
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      query.set(key, value)
    }
  })
  const str = query.toString()
  return str ? `?${str}` : ''
}

async function fetchJSON(url) {
  const res = await fetch(url)
  if (!res.ok) throw new Error(`API error ${res.status}: ${url}`)
  return res.json()
}

// ── Pages ─────────────────────────────────────────────────

export async function getPages() {
  return fetchJSON(`${BASE}/pages`)
}

export async function getPage(slug) {
  const data = await fetchJSON(`${BASE}/pages?slug=${slug}`)
  return data[0] ?? null
}

// ── Posts (news) ──────────────────────────────────────────

export async function getPosts(params = {}) {
  return fetchJSON(`${BASE}/posts${buildQuery(params)}`)
}

export async function getPost(slug) {
  const data = await fetchJSON(`${BASE}/posts?slug=${slug}`)
  return data[0] ?? null
}

// ── Calls ─────────────────────────────────────────────────
// Taxonomy filters: audience, academic-year

export async function getCalls(params = {}) {
  const { audience, 'academic-year': academicYear, ...rest } = params
  const query = buildQuery({
    ...(audience      ? { audience }                : {}),
    ...(academicYear  ? { 'academic-year': academicYear } : {}),
    ...rest,
  })
  return fetchJSON(`${BASE}/calls${query}`)
}

export async function getCall(slug) {
  const data = await fetchJSON(`${BASE}/calls?slug=${slug}`)
  return data[0] ?? null
}

// ── Programmes ────────────────────────────────────────────
// Taxonomy filters: audience, programme-family

export async function getProgrammes(params = {}) {
  const { audience, 'programme-family': programmeFamily, ...rest } = params
  const query = buildQuery({
    ...(audience        ? { audience }                          : {}),
    ...(programmeFamily ? { 'programme-family': programmeFamily } : {}),
    ...rest,
  })
  return fetchJSON(`${BASE}/programmes${query}`)
}

export async function getProgramme(slug) {
  const data = await fetchJSON(`${BASE}/programmes?slug=${slug}`)
  return data[0] ?? null
}

// ── Resources ─────────────────────────────────────────────
// Taxonomy filters: audience, content-topic, academic-year

export async function getResources(params = {}) {
  const {
    audience,
    'content-topic': contentTopic,
    'academic-year': academicYear,
    ...rest
  } = params
  const query = buildQuery({
    ...(audience     ? { audience }                      : {}),
    ...(contentTopic ? { 'content-topic': contentTopic } : {}),
    ...(academicYear ? { 'academic-year': academicYear } : {}),
    ...rest,
  })
  return fetchJSON(`${BASE}/resources${query}`)
}

export async function getResource(slug) {
  const data = await fetchJSON(`${BASE}/resources?slug=${slug}`)
  return data[0] ?? null
}

// ── Stories ───────────────────────────────────────────────
// Taxonomy filters: audience, content-topic

export async function getStories(params = {}) {
  const { audience, 'content-topic': contentTopic, ...rest } = params
  const query = buildQuery({
    ...(audience     ? { audience }                      : {}),
    ...(contentTopic ? { 'content-topic': contentTopic } : {}),
    ...rest,
  })
  return fetchJSON(`${BASE}/stories${query}`)
}

export async function getStory(slug) {
  const data = await fetchJSON(`${BASE}/stories?slug=${slug}`)
  return data[0] ?? null
}
