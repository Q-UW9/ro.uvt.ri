# Role 2 — Week 5 Detailed Plan
**Role:** UX Researcher / Frontend Contributor  
**Week:** 5 (19–26 May 2026)  
**Beta deadline:** 02.06.2026

---

## Context

You owe four documents from Week 4. They exist as empty stubs. Each one is a review task — the source material already exists and you just need to read and respond to it. None requires more than 2–3 hours. Clear them in the first two days, then move into React page work.

You are also capable of React development. The second half of the week puts you on building page files that connect templates to real data.

---

## Day 1–2 — Clear the document backlog

All four files should be saved to `docs/week5/role2/deliverables/`.

---

### Document 1 — `PageTemplateAlignment.md`

**What it is:** A review confirming that `HomePageTemplate` and `InnerPageTemplate` cover all user journeys.

**Source to read:** `docs/week4/roles/role5/addition/page-template-planning.md`  
**Cross-reference:** `docs/agent_memory/main/02_User_Flows.md`

**Write:**

```md
# Page Template Alignment Review
**Reviewer:** Role 2  
**Source:** page-template-planning.md  
**Date:** [date]

## HomePageTemplate — Assessment
[1 paragraph: does it surface the right entry points for each user type?
Check: hero CTA buttons, audience shortcut cards, news strip.
Flag any user journey from 02_User_Flows.md that has no entry point on the homepage.]

## InnerPageTemplate — Assessment
[1 paragraph: does it cover all inner page types?
Check: SectionHeader always present, AccordionSection optional, DocumentDownloadList optional.
Flag any content type (e.g. a page with a map, or a page with a contact form) that the template cannot currently render.]

## Missing Organisms or Layout Gaps
[Bullet list of anything you found. If nothing — say "None found."]

## Sign-off
[ ] HomePageTemplate approved for content wiring
[ ] InnerPageTemplate approved for content wiring
```

---

### Document 2 — `RouteHierarchyCorrections.md`

**What it is:** A check that every route in the sitemap exists in the React route map.

**Source to read:** `docs/week4/roles/role5/addition/react-route-strategy.md`  
**Cross-reference:** `docs/agent_memory/main/01_Sitemap.md`

**How to check:** Go through every item in `01_Sitemap.md`. Find it in the route table in `react-route-strategy.md`. Note any that are missing or named differently.

**Write:**

```md
# Route Hierarchy Corrections
**Reviewer:** Role 2  
**Date:** [date]

## Routes in sitemap but missing from react-route-strategy.md
- [path] — [note]
(or: "None — all sitemap routes are present.")

## Routes in react-route-strategy.md not in sitemap
- [path] — [note on whether it should be kept or removed]

## Naming mismatches
- [sitemap name] → [route path] — confirm match or flag

## Redirect suggestions
- [e.g. /erasmus should redirect to /erasmus/incoming-students if no content]
(or: "None.")

## Sign-off
[ ] Route map approved
```

---

### Document 3 — `WordPressStructureUserFlow.md`

**What it is:** A check that the 4 CPTs and 4 taxonomies match how users actually browse the site.

**Sources to read:**
- `docs/agent_memory/main/02_User_Flows.md` (how users navigate)
- `docs/agent_memory/main/06_WordPress_Content_Model.md` (what WP stores)

**Write:**

```md
# WordPress Structure and User Flow Review
**Reviewer:** Role 2  
**Date:** [date]

## CPT Review

### calls
User flow: [who looks for calls and how?]
Does the CPT structure (title, deadline, eligibility, documents) support this flow? [Yes / Partial / No — explain]

### programmes
User flow: [who looks for programmes?]
Does the CPT structure (title, duration, language, partner_institution, application_deadline) support this? [Yes / Partial / No — explain]

### resources
User flow: [who downloads resources and when?]
Does the CPT structure (title, file_url, file_type, audience_notes) support this? [Yes / Partial / No — explain]

### stories
User flow: [who reads stories and why?]
Does the CPT structure (title, testimonial_author, story_date, pull_quote) support this? [Yes / Partial / No — explain]

## Taxonomy Review

### audience
Does filtering by audience align with how users self-identify on the site? [Yes / No — explain]

### programme-family, content-topic, academic-year
[One sentence each on whether these are useful as filters from a UX perspective]

## Missing structures
[Anything you think users need that no CPT or taxonomy currently covers]

## Sign-off
[ ] WordPress structure approved for frontend integration
```

---

### Document 4 — `UXValidation.md`

**What it is:** A usability pass on every built organism.

**Source to read:** `docs/week4/roles/role5/addition/component-architecture-week4.md` (organism section)

**For each organism, write one line:** confirm it is appropriate for its use case, or flag a specific problem.

```md
# UX Validation — Week 4 Components
**Reviewer:** Role 2  
**Date:** [date]

## Organisms

| Component | Assessment | Flag (if any) |
|-----------|------------|---------------|
| Navbar | [OK / Issue] | [e.g. "mobile menu is a stub — not usable on small screens"] |
| Footer | [OK / Issue] | |
| HeroSection | [OK / Issue] | |
| AccordionSection | [OK / Issue] | |
| TabsSection | [OK / Issue] | |
| DocumentDownloadList | [OK / Issue] | |
| ContentSection | [OK / Issue] | |
| NewsSection | [OK / Issue] | |

## Priority fixes before beta
[List any organisms you flagged as critical issues]

## Mobile-specific concerns
[Anything that will be problematic at 375px]

## Sign-off
[ ] Component set approved for page building
```

---

## Day 3–5 — React page files

After the four documents are submitted, implement the following page files. These are straightforward wiring tasks — the templates and API helpers already exist (or will exist by Day 3 from Role 5).

**Location:** `frontend/src/pages/`

---

### `HomePage.tsx`

```tsx
import { useEffect, useState } from 'react'
import { HomePageTemplate } from '../components/templates/HomePageTemplate/HomePageTemplate'
import { getPosts } from '../api/wordpress'
import { heroData } from '../data/homeSections'   // static hero until WP Page API confirmed
import { audienceCards } from '../data/homeSections' // static cards

export default function HomePage() {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getPosts().then(posts => {
      setNews(posts.slice(0, 4).map(p => ({
        id: p.id,
        title: p.title.rendered,
        date: p.date,
        excerpt: p.excerpt.rendered,
        slug: p.slug,
      })))
      setLoading(false)
    })
  }, [])

  if (loading) return <p className="p-8">Loading...</p>

  return <HomePageTemplate heroData={heroData} cards={audienceCards} news={news} />
}
```

**Acceptance criteria:** Homepage loads at `localhost:5173/`, news items appear, hero renders, no console errors.

---

### `AboutPage.tsx`

```tsx
import { useEffect, useState } from 'react'
import { InnerPageTemplate } from '../components/templates/InnerPageTemplate/InnerPageTemplate'
import { getPage } from '../api/wordpress'

export default function AboutPage() {
  const [page, setPage] = useState(null)

  useEffect(() => {
    getPage('about').then(data => setPage(data?.[0] ?? null))
  }, [])

  if (!page) return <p className="p-8">Loading...</p>

  return (
    <InnerPageTemplate title={page.title.rendered}>
      <div dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
    </InnerPageTemplate>
  )
}
```

**Note:** `dangerouslySetInnerHTML` is acceptable here — WP content is controlled by site admins, not user input.

**Acceptance criteria:** `/about` loads, shows the WP page title and content. If WP has no `about` page yet, the page shows "Loading..." — that is acceptable for Week 5.

---

### `ContactPage.tsx`

Same pattern as `AboutPage.tsx` — use `getPage('contact')`. File: `src/pages/ContactPage.tsx`.

**Acceptance criteria:** `/contact` loads without crashing.

---

## Deliverables summary

| File | Deadline |
|------|----------|
| `docs/week5/role2/deliverables/PageTemplateAlignment.md` | Tuesday 20 May |
| `docs/week5/role2/deliverables/RouteHierarchyCorrections.md` | Tuesday 20 May |
| `docs/week5/role2/deliverables/WordPressStructureUserFlow.md` | Wednesday 21 May |
| `docs/week5/role2/deliverables/UXValidation.md` | Wednesday 21 May |
| `frontend/src/pages/HomePage.tsx` | Friday 23 May |
| `frontend/src/pages/AboutPage.tsx` | Friday 23 May |
| `frontend/src/pages/ContactPage.tsx` | Friday 23 May |

---

## Handoff

After the four documents are submitted, notify Role 1. Role 5's `page-template-planning.md` is gated on `PageTemplateAlignment.md` — once you submit it, Role 5 can finalize the template interfaces.

After the page files are committed, test them locally (`npm run dev` in `frontend/`) before pushing. The homepage will only show real news if Role 6 has posts in WordPress — if not, static mock data from `src/data/` is acceptable.
