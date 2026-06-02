# End-to-End Stack: WordPress → REST API → React
**Week:** 6  
**Status:** In progress — all plumbing exists, data is not flowing yet

---

## What the full flow looks like

```
WP Admin
  └── editor creates a post (e.g. a new Call)
        └── CPTUI registers the CPT with show_in_rest: true
              └── ACF stores custom fields, exposed under the acf key
                    └── /wp-json/wp/v2/calls returns JSON array
                          └── React fetches it in useEffect
                                └── page renders a card list or detail view
```

The entire path is broken at step 5. The React app never calls the CPT endpoints because `api/wordpress.js` only has `getPosts()` and `getPost()`. Everything below that is stubs.

---

## Current state

### Done

| Layer | Status |
|-------|--------|
| CPTs registered (`calls`, `stories`, `resources`, `programmes`) | Done — `cptui-export.json` |
| Taxonomies registered (`audience`, `programme-family`, `content-topic`, `academic-year`) | Done — `cptui-taxonomies.json` |
| ACF field groups (9 groups, all with `show_in_rest: 1`) | Done — `acf-json/` |
| REST API base URL in `api/wordpress.js` | Done |
| Routes in `App.tsx` (`/calls`, `/calls/:slug`, `/stories`, etc.) | Done |
| `InnerPageTemplate` — accepts `title`, `subtitle`, `accordion`, `documents` | Done |
| `Card` + `NewsSection` — renders lists of items | Done |
| `AccordionSection` + `DocumentDownloadList` — renders structured fields | Done |

### Missing

| Layer | Status |
|-------|--------|
| Test content entries in WP admin (at least 2 per CPT) | Not done |
| API helpers for each CPT (`getCalls`, `getCall`, etc.) | Not done |
| Taxonomy filter helpers | Not done |
| TypeScript interfaces for REST responses | Not done |
| List pages wired to real data | Not done — all show `Content coming soon.` |
| Detail pages wired to real data | Not done — all stubs |

---

## Task 1 — WordPress: add test content
**Who:** Role 6  
**File:** WP Admin (`http://ro.uvt.ri.test/wp-admin/`)

Before the frontend can be wired, there must be at least 2 published entries per CPT to test against. Without them, every API call returns an empty array and nothing can be verified.

### Add taxonomy terms first

In WP Admin, go to each taxonomy and add the following terms:

| Taxonomy | Terms to add |
|----------|-------------|
| Audience | `students`, `staff`, `partner-institutions` |
| Academic Year | `2024-2025`, `2025-2026` |
| Programme Family | `erasmus`, `bilateral`, `scholarship` |
| Content Topic | `applications`, `deadlines`, `housing`, `visa` |

### Add 2 entries per CPT

**Calls** (WP Admin → Calls → Add New):

Entry 1:
- Title: `Erasmus+ Outgoing Call 2025/2026`
- ACF: Deadline `2025-11-30`, Eligibility `UVT students in a Bachelor or Master programme.`
- Audience: `students`, Academic Year: `2025-2026`

Entry 2:
- Title: `Bilateral Exchange — Call for Applications`
- ACF: fill with any placeholder values
- Audience: `students`, Academic Year: `2025-2026`

Repeat with similar placeholder entries for **Programmes**, **Resources**, and **Stories**.

### Verify the REST response

Open these URLs in a browser while Laragon is running:

```
http://ro.uvt.ri.test/wp-json/wp/v2/calls
http://ro.uvt.ri.test/wp-json/wp/v2/programmes
http://ro.uvt.ri.test/wp-json/wp/v2/resources
http://ro.uvt.ri.test/wp-json/wp/v2/stories
```

Each should return a JSON array. Each item should include an `acf` key with the custom fields. Example of a passing response:

```json
[
  {
    "id": 42,
    "slug": "erasmus-outgoing-call-2025",
    "title": { "rendered": "Erasmus+ Outgoing Call 2025/2026" },
    "excerpt": { "rendered": "<p>...</p>" },
    "acf": {
      "deadline": "2025-11-30",
      "eligibility": "UVT students in a Bachelor or Master programme.",
      "application_steps": [],
      "documents": []
    },
    "audience": [1],
    "academic-year": [3]
  }
]
```

If `acf` is missing: go to ACF → Field Groups → edit the group → Settings → Show in REST API → Yes → Save.  
If the endpoint returns 404: go to Settings → Permalinks → Save Changes (no change needed, just save to flush rewrite rules).

---

## Task 2 — API layer: extend `wordpress.js`
**Who:** Role 5  
**File:** `frontend/src/api/wordpress.js`

The current file only covers standard posts. Add one fetch function per CPT and one detail fetch per CPT.

Replace the contents of `frontend/src/api/wordpress.js` with:

```js
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

export const getPosts   = ()            => list("posts");
export const getPost    = (slug)        => bySlug("posts", slug);

// ── CPT: Calls ───────────────────────────────────────────────

export const getCalls         = (params) => list("calls", params);
export const getCall          = (slug)   => bySlug("calls", slug);

// ── CPT: Programmes ──────────────────────────────────────────

export const getProgrammes    = (params) => list("programmes", params);
export const getProgramme     = (slug)   => bySlug("programmes", slug);

// ── CPT: Resources ───────────────────────────────────────────

export const getResources     = (params) => list("resources", params);
export const getResource      = (slug)   => bySlug("resources", slug);

// ── CPT: Stories ─────────────────────────────────────────────

export const getStories       = (params) => list("stories", params);
export const getStory         = (slug)   => bySlug("stories", slug);
```

`_embed` is added to all requests — it causes WordPress to inline `_embedded.wp:featuredmedia` so you get the featured image URL without a second request.

The `VITE_WP_API_BASE` env var lets different environments (local Laragon, staging, production) set their own base URL. Create `frontend/.env.local` with:

```
VITE_WP_API_BASE=http://ro.uvt.ri.test/wp-json/wp/v2
```

---

## Task 3 — TypeScript types for REST responses
**Who:** Role 5  
**File:** `frontend/src/api/types.ts` (new file)

The list and detail pages need a typed shape for what comes back from the API. Based on the ACF field groups confirmed in Week 5:

```ts
// Shared WP fields present on every CPT response

export interface WpTerm {
  id: number;
  name: string;
  slug: string;
}

export interface WpImage {
  source_url: string;
  alt_text: string;
}

export interface WpBase {
  id: number;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  _embedded?: {
    "wp:featuredmedia"?: [{ source_url: string; alt_text: string }];
    "wp:term"?: WpTerm[][];
  };
}

// ── Calls ────────────────────────────────────────────────────

export interface WpCall extends WpBase {
  acf: {
    deadline: string;          // "YYYY-MM-DD"
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
    file_type: "PDF" | "DOCX" | "XLS" | "Other";
    audience_notes: string;
  };
}

// ── Stories ──────────────────────────────────────────────────

export interface WpStory extends WpBase {
  acf: {
    author: string;
    story_date: string;        // "YYYY-MM-DD"
    pull_quote: string;
  };
}
```

> Verify the exact field names against the ACF field groups in `wordpress/ro.uvt.ri/wp-content/themes/twentytwentyfive/acf-json/` before using — the `name` key in each field object is what appears in the REST response.

---

## Task 4 — Wire the list pages
**Who:** Role 5  
**Files:** `frontend/src/pages/CallsPage.tsx`, `ProgrammesPage.tsx`, `ResourcesPage.tsx`, `StoriesPage.tsx`

All four list pages have the same structure. Here is the complete pattern using `CallsPage` as the reference implementation:

```tsx
// frontend/src/pages/CallsPage.tsx

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getCalls } from '../api/wordpress'
import type { WpCall } from '../api/types'
import { InnerPageTemplate } from '../components/templates/InnerPageTemplate/InnerPageTemplate'

export default function CallsPage() {
  const [calls, setCalls]     = useState<WpCall[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState<string | null>(null)

  useEffect(() => {
    getCalls()
      .then(setCalls)
      .catch(e => setError(e.message))
      .finally(() => setLoading(false))
  }, [])

  return (
    <InnerPageTemplate title="Calls for Applications">
      {loading && <p className="text-gray-500">Loading…</p>}
      {error   && <p className="text-red-600">Failed to load: {error}</p>}
      {!loading && !error && calls.length === 0 && (
        <p className="text-gray-500">No calls published yet.</p>
      )}
      <ul className="space-y-6">
        {calls.map(call => (
          <li key={call.id} className="border-b pb-4">
            <Link
              to={`/calls/${call.slug}`}
              className="text-xl font-semibold text-blue-700 hover:underline"
              dangerouslySetInnerHTML={{ __html: call.title.rendered }}
            />
            {call.acf.deadline && (
              <p className="mt-1 text-sm text-gray-500">
                Deadline: {call.acf.deadline}
              </p>
            )}
            <div
              className="mt-2 text-gray-700"
              dangerouslySetInnerHTML={{ __html: call.excerpt.rendered }}
            />
          </li>
        ))}
      </ul>
    </InnerPageTemplate>
  )
}
```

Apply the same pattern to the other three list pages, swapping in `getProgrammes`, `getResources`, `getStories` and the relevant `acf` fields for the preview line.

---

## Task 5 — Wire the detail pages
**Who:** Role 5  
**Files:** `frontend/src/pages/CallDetailPage.tsx`, `ProgrammeDetailPage.tsx`, `ResourceDetailPage.tsx`, `StoryDetailPage.tsx`

The existing stubs already have `useParams` in place. Here is the full implementation for `CallDetailPage`:

```tsx
// frontend/src/pages/CallDetailPage.tsx

import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getCall } from '../api/wordpress'
import type { WpCall } from '../api/types'
import { InnerPageTemplate } from '../components/templates/InnerPageTemplate/InnerPageTemplate'

export default function CallDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const [call, setCall]       = useState<WpCall | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState<string | null>(null)

  useEffect(() => {
    if (!slug) return
    getCall(slug)
      .then(data => {
        if (!data) throw new Error("Not found")
        setCall(data)
      })
      .catch(e => setError(e.message))
      .finally(() => setLoading(false))
  }, [slug])

  if (loading) return <InnerPageTemplate title="Loading…"><p /></InnerPageTemplate>
  if (error)   return <InnerPageTemplate title="Error"><p className="text-red-600">{error}</p></InnerPageTemplate>
  if (!call)   return null

  return (
    <InnerPageTemplate
      title={call.title.rendered}
      accordion={
        call.acf.application_steps?.map(s => ({
          question: "Step",
          answer: s.step,
        }))
      }
      documents={
        call.acf.documents?.map(d => ({
          label: d.label,
          url: d.url,
          fileType: "PDF",
        }))
      }
    >
      {call.acf.deadline && (
        <p className="mb-4 text-sm font-medium text-gray-500">
          Deadline: <strong>{call.acf.deadline}</strong>
        </p>
      )}
      {call.acf.eligibility && (
        <section className="mb-6">
          <h2 className="mb-2 text-lg font-semibold">Eligibility</h2>
          <p>{call.acf.eligibility}</p>
        </section>
      )}
    </InnerPageTemplate>
  )
}
```

`InnerPageTemplate` already renders the `accordion` and `documents` props — the detail page only needs to map the ACF repeater arrays into the shapes that template expects.

For `ProgrammeDetailPage`, `ResourceDetailPage`, and `StoryDetailPage`, use the same fetch pattern, but map different `acf` fields to the body content. None of those CPTs have repeater fields, so `accordion` and `documents` props are not needed.

---

## End-to-end test procedure

Once all five tasks are done, run this check:

1. Start Laragon. Confirm WP is at `http://ro.uvt.ri.test`.
2. Start the frontend: `cd frontend && npm run dev` → opens at `http://localhost:5173`.
3. In WP Admin, create a new **Call** entry, publish it, note the slug.
4. Open `http://ro.uvt.ri.test/wp-json/wp/v2/calls?slug=<your-slug>` — confirm the entry appears with an `acf` key.
5. Open `http://localhost:5173/calls` — the entry should appear in the list.
6. Click through to `http://localhost:5173/calls/<your-slug>` — the detail page should render title, deadline, eligibility, and any documents.
7. Repeat steps 3–6 for one entry in each of the other three CPTs.

If step 4 passes but step 5 does not, the issue is in the React fetch or state logic.  
If step 4 fails, the issue is in WordPress (REST not exposed, ACF not synced, or no published entries).

---

## File change summary

| File | Change |
|------|--------|
| `frontend/src/api/wordpress.js` | Add CPT fetch helpers and `_embed` param |
| `frontend/src/api/types.ts` | New file — TypeScript interfaces for all 4 CPT responses |
| `frontend/src/pages/CallsPage.tsx` | Replace stub with fetch + render loop |
| `frontend/src/pages/ProgrammesPage.tsx` | Replace stub with fetch + render loop |
| `frontend/src/pages/ResourcesPage.tsx` | Replace stub with fetch + render loop |
| `frontend/src/pages/StoriesPage.tsx` | Replace stub with fetch + render loop |
| `frontend/src/pages/CallDetailPage.tsx` | Replace stub with slug fetch + field render |
| `frontend/src/pages/ProgrammeDetailPage.tsx` | Replace stub with slug fetch + field render |
| `frontend/src/pages/ResourceDetailPage.tsx` | Replace stub with slug fetch + field render |
| `frontend/src/pages/StoryDetailPage.tsx` | Replace stub with slug fetch + field render |
| `frontend/.env.local` | New file — `VITE_WP_API_BASE` for local dev |
| WP Admin | Add 2+ published entries per CPT with taxonomy terms |
