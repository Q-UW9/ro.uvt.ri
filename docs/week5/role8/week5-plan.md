# Role 8 — Week 5 Detailed Plan
**Role:** API / React Data Layer  
**Week:** 5 (19–26 May 2026)  
**Beta deadline:** 02.06.2026

---

## Context

Your job this week is connecting the API helpers Role 5 writes to the CPT page templates. You own the page files in `src/pages/` for the four CPT listing pages. Role 5 owns the API functions and TypeScript types — you consume them.

**You start work on Day 3 (Wednesday 21 May).** Role 5 will have the API helpers and route stubs ready by then. Do not start page files before the helpers exist — you will be building against a confirmed type shape.

Use Days 1–2 for preparation: read the relevant docs and understand the data shapes.

---

## Day 1–2 — Preparation (no coding yet)

Read these files so you understand exactly what you are building against:

1. **`docs/week4/roles/role5/addition/component-architecture-week4.md`** — understand `InnerPageTemplate`, `ContentGrid`, `Card`, `DocumentDownloadList` props
2. **`docs/week4/roles/role5/addition/page-template-planning.md`** — understand the `InnerPageTemplate` and `HomePageTemplate` data interfaces
3. **`docs/agent_memory/main/13_WP_Merge_Fixes.md` Section 5** — memorize the ACF field names; these are the keys you will access from `response.acf.*`
4. **`docs/week5/src/week5-agent-context.md`** — props interfaces and TypeScript types

**Key props interfaces to know cold:**

```ts
// InnerPageTemplate — what you pass to every listing and detail page
{
  title: string
  subtitle?: string
  children: ReactNode             // the main content area
  accordion?: Array<{ question: string, answer: string }>
  documents?: Array<{ label: string, url: string, fileType?: string }>
}

// Card
{ title: string, description: string, buttonText?: string, route?: string }

// DocumentDownloadList
{ documents: Array<{ label: string, url: string, fileType?: string }> }
```

**ACF response structure:** WP REST API returns ACF fields under `response.acf`:
```json
{ "id": 1, "slug": "...", "title": { "rendered": "..." }, "acf": { "deadline": "...", ... } }
```

---

## Day 3–5 — Wire the CPT listing pages

Role 5 will create stub page files for all routes. Your job is to replace the stubs for these 4 pages with real data-fetching implementations:

- `frontend/src/pages/CallsPage.tsx`
- `frontend/src/pages/ProgrammesPage.tsx`
- `frontend/src/pages/ResourcesPage.tsx`
- `frontend/src/pages/StoriesPage.tsx`

**General pattern for all 4 pages:**

```tsx
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { InnerPageTemplate } from '../components/templates/InnerPageTemplate/InnerPageTemplate'
import { ContentGrid } from '../components/templates/ContentGrid/ContentGrid'
import { Card } from '../components/molecules/Card/Card'
import { getCalls } from '../api/wordpress'   // change per page
import type { WPCall } from '../types/wordpress'  // change per page

export default function CallsPage() {
  const [items, setItems] = useState<WPCall[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    getCalls()
      .then(data => { setItems(data); setLoading(false) })
      .catch(() => { setError(true); setLoading(false) })
  }, [])

  return (
    <InnerPageTemplate title="Calls for Applications">
      {loading && <p className="py-8 text-center">Loading...</p>}
      {error  && <p className="py-8 text-center text-red-600">Could not load content. Please try again later.</p>}
      {!loading && !error && items.length === 0 && (
        <p className="py-8 text-center">No calls available at this time.</p>
      )}
      {!loading && !error && items.length > 0 && (
        <ContentGrid columns={3}>
          {items.map(item => (
            <Card
              key={item.id}
              title={item.title.rendered}
              description={item.acf.deadline ? `Deadline: ${item.acf.deadline}` : ''}
              buttonText="View details"
              route={`/calls/${item.slug}`}
            />
          ))}
        </ContentGrid>
      )}
    </InnerPageTemplate>
  )
}
```

---

### `CallsPage.tsx`

- API function: `getCalls()`
- Type: `WPCall`
- Card description: `Deadline: ${item.acf.deadline}` (or fallback to `item.acf.eligibility` trimmed to 100 chars)
- Button route: `/calls/${item.slug}`
- Page title: `"Calls for Applications"`

---

### `ProgrammesPage.tsx`

- API function: `getProgrammes()`
- Type: `WPProgramme`
- Card description: `${item.acf.duration} · ${item.acf.language}` (e.g. "1 semester · English")
- Button route: `/programmes/${item.slug}`
- Page title: `"Programmes"`

```tsx
description={[item.acf.duration, item.acf.language].filter(Boolean).join(' · ')}
```

---

### `ResourcesPage.tsx`

Resources render differently — use `DocumentDownloadList` instead of `ContentGrid` + `Card`, since resources are downloadable files.

```tsx
import { DocumentDownloadList } from '../components/organisms/DocumentDownloadList/DocumentDownloadList'
import type { WPResource } from '../types/wordpress'

// inside the component, after loading:
const documents = items.map(item => ({
  label: item.title.rendered,
  url: item.acf.file_url,
  fileType: item.acf.file_type,
}))

return (
  <InnerPageTemplate title="Resources" documents={documents}>
    {loading && <p className="py-8 text-center">Loading...</p>}
    {error && <p className="py-8 text-center text-red-600">Could not load resources.</p>}
    {!loading && !error && items.length === 0 && <p className="py-8 text-center">No resources available.</p>}
  </InnerPageTemplate>
)
```

**Note:** `InnerPageTemplate` renders `DocumentDownloadList` automatically when the `documents` prop is provided and non-empty. Pass it at the template level, not inside `children`.

---

### `StoriesPage.tsx`

- API function: `getStories()`
- Type: `WPStory`
- Card description: `item.acf.pull_quote` (trimmed to 120 chars if long) or `item.acf.testimonial_author`
- Button route: `/stories/${item.slug}`
- Page title: `"Stories"`

Helper for trimming:
```tsx
description={item.acf.pull_quote?.slice(0, 120) ?? item.acf.testimonial_author}
```

---

## Acceptance criteria for all 4 pages

For each page, verify:
- [ ] Navigating to the route (`/calls`, `/programmes`, etc.) renders without crashing
- [ ] Loading state appears briefly, then content renders
- [ ] If WP has no entries for that CPT, the empty state message renders (not a blank page)
- [ ] If the fetch fails (e.g. Laragon is off), the error message renders (not a JavaScript error)
- [ ] Card buttons navigate to the detail route (e.g. `/calls/erasmus-call-2025`)
- [ ] No TypeScript errors (`npm run build` passes)

---

## Handling the case where Role 6's entries aren't ready

If Role 6 has not published test entries yet when you start on Day 3:
- Implement the pages anyway using the confirmed type shape
- Test with the WP admin endpoint directly: `http://ro.uvt.ri.test/wp-json/wp/v2/calls`
- If it returns an empty array `[]`, the empty state `<p>No calls available.</p>` will render — this is correct behavior
- Add a comment noting the page is structurally complete but untested against real entries

---

## Deliverables summary

| File | Deadline |
|------|----------|
| `frontend/src/pages/CallsPage.tsx` | Friday 23 May |
| `frontend/src/pages/ProgrammesPage.tsx` | Friday 23 May |
| `frontend/src/pages/ResourcesPage.tsx` | Friday 23 May |
| `frontend/src/pages/StoriesPage.tsx` | Friday 23 May |

---

## Handoff and coordination

**With Role 5:**
- Check `frontend/src/types/wordpress.ts` before writing — use the types Role 5 defined
- If a WP response field differs from the TypeScript type, tell Role 5 and they will update the type
- Do not duplicate logic Role 5 has already written in API helpers

**With Role 6:**
- Once your pages are working, ask Role 6 to verify the Laragon entries show up in the UI correctly (taxonomy labels, deadline format, file links)

**In Week 6 you will wire:**
- `CallDetailPage.tsx` — `getCall(slug)`, renders full call with eligibility + application steps + documents
- `ProgrammeDetailPage.tsx` — `getProgramme(slug)`, renders programme metadata
- `ResourceDetailPage.tsx` — `getResource(slug)`, renders single download
- `StoryDetailPage.tsx` — `getStory(slug)`, renders story with pull quote
