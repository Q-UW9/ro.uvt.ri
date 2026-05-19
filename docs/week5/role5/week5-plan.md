# Role 5 — Week 5 Detailed Plan
**Role:** React Developer (Lead Frontend)  
**Week:** 5 (19–26 May 2026)  
**Beta deadline:** 02.06.2026

---

## Context

The component library is complete. Nothing is wired to real data. This week you connect everything: routes, API helpers, TypeScript types, and the first real pages. You are on the critical path — delays here delay Role 8 and the beta.

The order below is mandatory. Do not skip ahead.

---

## Day 1 — Monday 19 May

### Fix the Navbar (first thing, before any other work)

**File:** `frontend/src/components/organisms/Navbar/Navbar.tsx`

Apply all four label corrections and add the two missing items. The correct nav array is:

```tsx
const navLinks = [
  { label: 'About DRI',                  href: '/about' },
  { label: 'Erasmus+',                   href: '/erasmus' },
  { label: 'International Students',     href: '/international-students' },
  { label: 'Scholarships & Exchanges',   href: '/scholarships' },   // new route — stub only for now
  { label: 'Partnerships',               href: '/partnerships' },
  { label: 'News',                       href: '/news' },
  { label: 'Contact',                    href: '/contact' },
]
```

Source: `docs/week4/roles/role2/deliverables/NavigationConsistencyFeedback.md`

**Also in `App.tsx`:** Remove the two routes that are not in the sitemap:
- Delete: `<Route path="/admissions" ... />`
- Delete: `<Route path="/research" ... />`

Test: run `npm run dev`, open browser, verify nav renders all 7 items in order with no console errors.

Commit: `fix: correct Navbar labels and remove stale routes`

---

### Wire App.tsx — route structure

**File:** `frontend/src/App.tsx`

Wait for Role 1 to record the Vite decision (should be done by morning). Then wire all 29 routes.

**Exact App.tsx structure to implement:**

```tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// — pages (stubs for now, will fill in later)
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ErasmusPage from './pages/ErasmusPage'
import ErasmusIncomingStudentsPage from './pages/erasmus/IncomingStudentsPage'
import ErasmusOutgoingStudentsPage from './pages/erasmus/OutgoingStudentsPage'
import ErasmusIncomingStaffPage from './pages/erasmus/IncomingStaffPage'
import ErasmusOutgoingStaffPage from './pages/erasmus/OutgoingStaffPage'
import ErasmusPartnerCountriesPage from './pages/erasmus/PartnerCountriesPage'
import ErasmusCooperationProjectsPage from './pages/erasmus/CooperationProjectsPage'
import IntlStudentsPage from './pages/IntlStudentsPage'
import IntlNonEuPage from './pages/intl/NonEuPage'
import IntlEuPage from './pages/intl/EuPage'
import IntlUkrainePage from './pages/intl/UkrainePage'
import IntlRefugeesPage from './pages/intl/RefugeesPage'
import IntlPreparatoryPage from './pages/intl/PreparatoryYearPage'
import IntlFreeMoversPage from './pages/intl/FreeMoversPage'
import PartnershipsPage from './pages/PartnershipsPage'
import ScholarshipsPage from './pages/ScholarshipsPage'
import NewsPage from './pages/NewsPage'
import CallsPage from './pages/CallsPage'
import CallDetailPage from './pages/CallDetailPage'
import StoriesPage from './pages/StoriesPage'
import StoryDetailPage from './pages/StoryDetailPage'
import ResourcesPage from './pages/ResourcesPage'
import ResourceDetailPage from './pages/ResourceDetailPage'
import ProgrammesPage from './pages/ProgrammesPage'
import ProgrammeDetailPage from './pages/ProgrammeDetailPage'
import ContactPage from './pages/ContactPage'
import SearchPage from './pages/SearchPage'
import SitemapPage from './pages/SitemapPage'
import NotFoundPage from './pages/NotFoundPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"                                              element={<HomePage />} />
        <Route path="/about"                                         element={<AboutPage />} />
        <Route path="/erasmus"                                       element={<ErasmusPage />} />
        <Route path="/erasmus/incoming-students"                     element={<ErasmusIncomingStudentsPage />} />
        <Route path="/erasmus/outgoing-students"                     element={<ErasmusOutgoingStudentsPage />} />
        <Route path="/erasmus/incoming-staff"                        element={<ErasmusIncomingStaffPage />} />
        <Route path="/erasmus/outgoing-staff"                        element={<ErasmusOutgoingStaffPage />} />
        <Route path="/erasmus/partner-countries"                     element={<ErasmusPartnerCountriesPage />} />
        <Route path="/erasmus/cooperation-projects"                  element={<ErasmusCooperationProjectsPage />} />
        <Route path="/international-students"                        element={<IntlStudentsPage />} />
        <Route path="/international-students/non-eu"                 element={<IntlNonEuPage />} />
        <Route path="/international-students/eu"                     element={<IntlEuPage />} />
        <Route path="/international-students/ukraine"                element={<IntlUkrainePage />} />
        <Route path="/international-students/refugees"               element={<IntlRefugeesPage />} />
        <Route path="/international-students/preparatory-year"       element={<IntlPreparatoryPage />} />
        <Route path="/international-students/free-movers"            element={<IntlFreeMoversPage />} />
        <Route path="/partnerships"                                  element={<PartnershipsPage />} />
        <Route path="/scholarships"                                  element={<ScholarshipsPage />} />
        <Route path="/news"                                          element={<NewsPage />} />
        <Route path="/calls"                                         element={<CallsPage />} />
        <Route path="/calls/:slug"                                   element={<CallDetailPage />} />
        <Route path="/stories"                                       element={<StoriesPage />} />
        <Route path="/stories/:slug"                                 element={<StoryDetailPage />} />
        <Route path="/resources"                                     element={<ResourcesPage />} />
        <Route path="/resources/:slug"                               element={<ResourceDetailPage />} />
        <Route path="/programmes"                                    element={<ProgrammesPage />} />
        <Route path="/programmes/:slug"                              element={<ProgrammeDetailPage />} />
        <Route path="/contact"                                       element={<ContactPage />} />
        <Route path="/search"                                        element={<SearchPage />} />
        <Route path="/sitemap"                                       element={<SitemapPage />} />
        <Route path="*"                                              element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}
```

**Page stub pattern** — use this for every page file you create. Replace `[PageTitle]` with a human-readable name:

```tsx
// src/pages/ErasmusPage.tsx
import { InnerPageTemplate } from '../components/templates/InnerPageTemplate/InnerPageTemplate'

export default function ErasmusPage() {
  return (
    <InnerPageTemplate title="Erasmus+">
      <p className="text-uvt-gray">Content coming soon.</p>
    </InnerPageTemplate>
  )
}
```

Subfolder structure for nested pages:
```
src/pages/
  erasmus/
    IncomingStudentsPage.tsx
    OutgoingStudentsPage.tsx
    IncomingStaffPage.tsx
    OutgoingStaffPage.tsx
    PartnerCountriesPage.tsx
    CooperationProjectsPage.tsx
  intl/
    NonEuPage.tsx
    EuPage.tsx
    UkrainePage.tsx
    RefugeesPage.tsx
    PreparatoryYearPage.tsx
    FreeMoversPage.tsx
```

**Acceptance criteria:** `npm run dev` — navigate to `/erasmus/incoming-students` → renders page title. Navigate to `/xyz` → renders 404 page. No console errors.

Commit: `feat: wire full route tree in App.tsx with page stubs`

---

## Day 2–3 — CPT API helpers and TypeScript types

**File:** `frontend/src/api/wordpress.js`

The field names are frozen. Source of truth: `docs/agent_memory/main/13_WP_Merge_Fixes.md` Section 5.

**Add these functions below the existing `getPosts`/`getPost`:**

```js
const BASE = 'http://ro.uvt.ri.test/wp-json/wp/v2'

// Pages
export async function getPages() {
  const res = await fetch(`${BASE}/pages`)
  return res.json()
}
export async function getPage(slug) {
  const res = await fetch(`${BASE}/pages?slug=${slug}`)
  return res.json()  // returns array — take [0]
}

// Calls
export async function getCalls(params = {}) {
  const query = new URLSearchParams(params).toString()
  const res = await fetch(`${BASE}/calls${query ? '?' + query : ''}`)
  return res.json()
}
export async function getCall(slug) {
  const res = await fetch(`${BASE}/calls?slug=${slug}`)
  return res.json()
}

// Programmes
export async function getProgrammes(params = {}) {
  const query = new URLSearchParams(params).toString()
  const res = await fetch(`${BASE}/programmes${query ? '?' + query : ''}`)
  return res.json()
}
export async function getProgramme(slug) {
  const res = await fetch(`${BASE}/programmes?slug=${slug}`)
  return res.json()
}

// Resources
export async function getResources(params = {}) {
  const query = new URLSearchParams(params).toString()
  const res = await fetch(`${BASE}/resources${query ? '?' + query : ''}`)
  return res.json()
}
export async function getResource(slug) {
  const res = await fetch(`${BASE}/resources?slug=${slug}`)
  return res.json()
}

// Stories
export async function getStories(params = {}) {
  const query = new URLSearchParams(params).toString()
  const res = await fetch(`${BASE}/stories${query ? '?' + query : ''}`)
  return res.json()
}
export async function getStory(slug) {
  const res = await fetch(`${BASE}/stories?slug=${slug}`)
  return res.json()
}
```

**TypeScript types — create `frontend/src/types/wordpress.ts`:**

```ts
export interface WPRendered { rendered: string }

export interface WPPage {
  id: number
  slug: string
  title: WPRendered
  content: WPRendered
  excerpt: WPRendered
}

export interface WPPost extends WPPage {
  date: string
}

export interface WPCall {
  id: number
  slug: string
  title: WPRendered
  content: WPRendered
  acf: {
    deadline: string          // date string YYYY-MM-DD
    eligibility: string
    application_steps: Array<{ step: string }>
    documents: Array<{ label: string; file_url: string }>
  }
}

export interface WPProgramme {
  id: number
  slug: string
  title: WPRendered
  content: WPRendered
  acf: {
    duration: string
    language: string
    partner_institution: string
    application_deadline: string
  }
}

export interface WPResource {
  id: number
  slug: string
  title: WPRendered
  content: WPRendered
  acf: {
    file_url: string
    file_type: 'PDF' | 'DOCX' | 'XLS' | 'Other'
    audience_notes: string
  }
}

export interface WPStory {
  id: number
  slug: string
  title: WPRendered
  content: WPRendered
  acf: {
    testimonial_author: string
    story_date: string
    pull_quote: string
  }
}
```

**Test the helpers:** Once Role 6 has test entries live, open the browser console on your dev server and run:
```js
import { getCalls } from './api/wordpress'
getCalls().then(console.log)
```
Or open `http://ro.uvt.ri.test/wp-json/wp/v2/calls` directly in the browser. Confirm the `acf` key appears in the response JSON.

Commit: `feat: add CPT API helpers and TypeScript types`

---

## Day 4–5 — Wire the Homepage

**File:** `frontend/src/pages/HomePage.tsx`

Replace the stub with a real wired page:

```tsx
import { useEffect, useState } from 'react'
import { HomePageTemplate } from '../components/templates/HomePageTemplate/HomePageTemplate'
import { getPosts } from '../api/wordpress'
import type { WPPost } from '../types/wordpress'

// Static hero data until WP Page API is confirmed working
const heroData = {
  title: 'Biroul de Relații Internaționale',
  subtitle: 'Universitatea de Vest din Timișoara',
  primaryButtonText: 'Erasmus+',
  primaryButtonLink: '/erasmus',
  secondaryButtonText: 'Studenți Internaționali',
  secondaryButtonLink: '/international-students',
}

// Static audience cards — will be replaced with CPT data in Week 6
const audienceCards = [
  { id: 1, title: 'Studenți UVT', description: 'Mobilități Erasmus+, burse, programe internaționale', buttonText: 'Descoperă', route: '/erasmus/outgoing-students' },
  { id: 2, title: 'Studenți Internaționali', description: 'Admitere, cazare, viză, taxe', buttonText: 'Descoperă', route: '/international-students' },
  { id: 3, title: 'Cadre Didactice', description: 'Mobilități Erasmus+ pentru staff și profesori', buttonText: 'Descoperă', route: '/erasmus/outgoing-staff' },
]

export default function HomePage() {
  const [news, setNews] = useState<WPPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getPosts()
      .then((posts: WPPost[]) => {
        setNews(posts.slice(0, 4))
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  const newsItems = news.map(p => ({
    id: p.id,
    title: p.title.rendered,
    date: p.date,
    excerpt: p.excerpt.rendered,
    slug: p.slug,
  }))

  return (
    <HomePageTemplate
      heroData={heroData}
      cards={audienceCards}
      news={loading ? [] : newsItems}
    />
  )
}
```

**Acceptance criteria:**
- `/` loads without errors
- Hero section visible with correct text
- 3 audience cards visible
- News section renders (empty grid is fine if WP has no posts yet)
- `npm run build` passes (no TypeScript errors)

Commit: `feat: wire HomePage with real WP data`

---

## Deliverables summary

| Item | Deadline |
|------|----------|
| Navbar labels fixed + stale routes removed | Monday 19 May EOD |
| `App.tsx` wired with 29 routes + all page stubs created | Monday 19 May EOD |
| CPT API helpers in `wordpress.js` | Wednesday 21 May |
| TypeScript types in `src/types/wordpress.ts` | Wednesday 21 May |
| `HomePage.tsx` wired to real data | Friday 23 May |

---

## Handoff to Role 8

Once you commit the API helpers and page stubs (Day 2–3), notify Role 8. They will take the CPT stub pages (`CallsPage.tsx`, `ProgrammesPage.tsx`, etc.) and wire them to the API. Do not wire those pages yourself — that is Role 8's task.

Coordinate with Role 8 on TypeScript shapes. If a WP response field differs from what `types/wordpress.ts` defines, update the type and tell Role 8.

---

## If Role 6's test entries are not ready by Day 3

Write the API helpers anyway using the confirmed field names from `13_WP_Merge_Fixes.md`. The structure is known even without live data. Leave a comment at the top of the affected function:

```js
// NOTE: Untested against live WP — verify when Role 6 publishes test entries
```

Do not block the homepage on this. Use static mock data for the news feed if `getPosts()` returns empty.
