# Role 5 — Week 4 Plan
**Role:** React Developer  
**Week:** 4  
**Project:** RI.UVT.RO Redesign  
**Sources:** `week4.md` · `week-4-todo.md` · `gap_report.pdf`

---

## Status Legend

| Mark | Meaning |
|------|---------|
| `[W3]` | Week 3 carry-over — was required last week, not delivered |
| `[ ]` | Not started |
| `[x]` | Done |
| `[~]` | Partial — exists in code but incomplete or undocumented |

---

## Context Entering Week 4

Role 5 built the component library ahead of scope in Week 3. The implementation is substantially correct and has been merged into main. However, all three required planning documents were not produced — the route strategy, component planning document, and page template planning draft. These must be written at the start of Week 4 before any new implementation continues.

**What is built and in main:**

| Component | Path | Status |
|-----------|------|--------|
| Button | `atoms/Button/Button.tsx` | Done — 3 variants, 3 sizes, focus ring |
| Typography | `atoms/Typography/Typography.tsx` | Done — h1–h3, body, caption |
| Card | `molecules/Card/Card.tsx` | Done |
| SectionHeader | `molecules/SectionHeader/SectionHeader.tsx` | Done |
| Navbar | `organisms/Navbar/Navbar.tsx` | Done — mobile menu is a stub |
| Footer | `organisms/Footer/Footer.tsx` | Done |
| HeroSection | `organisms/HeroSection/HeroSection.tsx` | Done |
| AccordionSection | `organisms/AccordionSection/AccordionSection.tsx` | Done — aria-expanded wired |
| TabsSection | `organisms/TabsSection/TabsSection.tsx` | Done |
| PageLayout | `templates/PageLayout/PageLayout.tsx` | Done |
| ContentGrid | `templates/ContentGrid/ContentGrid.tsx` | Done |
| Container | `layouts/Container.tsx` | Done |

**What is missing:**
- DocumentDownloadList organism
- InnerPageTemplate
- HomePageTemplate
- Full route tree (only `/` and `/test` exist)
- Locale routing
- CPT API helpers (blocked on Role 6)

**Open decision:** The architecture document specifies Next.js 14. The actual project uses Vite + React Router. Role 1 must resolve this before locale routing or the full route tree is built.

---

## Priority Order This Week

```
1. Produce three W3 carry-over documents (blocks route and template implementation)
2. Await Vite vs Next.js decision from Role 1
3. Build DocumentDownloadList organism
4. Implement full route tree
5. Build InnerPageTemplate and HomePageTemplate
6. Add CPT API helpers (blocked until Role 6 provides rest-api-exposure-checklist.md)
```

Do not start the locale routing implementation until Role 1 records the Vite vs Next.js decision.

Do not write CPT API helpers until Role 6 has produced `rest-api-exposure-checklist.md` and field names are confirmed. Changing field names after the helpers are written breaks the integration.

---

## Week 3 Carry-Overs — Priority Zero

### [W3] React Route Strategy Document

**File:** `docs/react-route-strategy.md`

Map every route in `01_Sitemap.md` to a React route path. For each route specify:

- The React route path (e.g. `/erasmus/incoming-students`)
- Whether it is static (WP Page) or dynamic (CPT archive or detail)
- Whether it requires a URL parameter (e.g. `:slug`)
- Which page template it uses (PageLayout, InnerPageTemplate, HomePageTemplate)
- Which organisms it composes

Minimum routes to cover:

| Path | Type | Template | Notes |
|------|------|----------|-------|
| `/` | Mixed | HomePageTemplate | Static shell + dynamic CPT blocks |
| `/about` | Static | InnerPageTemplate | WP Page |
| `/erasmus` | Mixed | InnerPageTemplate | Landing — static + nested links |
| `/erasmus/incoming-students` | Static | InnerPageTemplate | WP Page |
| `/erasmus/outgoing-students` | Static | InnerPageTemplate | WP Page |
| `/erasmus/incoming-staff` | Static | InnerPageTemplate | WP Page |
| `/erasmus/outgoing-staff` | Static | InnerPageTemplate | WP Page |
| `/international-students` | Static | InnerPageTemplate | WP Page |
| `/international-students/*` | Static | InnerPageTemplate | Nested WP Pages |
| `/partnerships` | Static | InnerPageTemplate | WP Page |
| `/news` | Dynamic list | InnerPageTemplate | WP Posts archive |
| `/calls` | Dynamic list | InnerPageTemplate | CPT `call` archive |
| `/calls/:slug` | Dynamic detail | InnerPageTemplate | Single call |
| `/stories` | Dynamic list | InnerPageTemplate | CPT `story` archive |
| `/stories/:slug` | Dynamic detail | InnerPageTemplate | Single story |
| `/resources` | Dynamic list | InnerPageTemplate | CPT `resource` archive |
| `/resources/:slug` | Dynamic detail | InnerPageTemplate | Single resource |
| `/programmes` | Dynamic list | InnerPageTemplate | CPT `programme` archive |
| `/programmes/:slug` | Dynamic detail | InnerPageTemplate | Single programme |
| `/contact` | Static | InnerPageTemplate | WP Page |
| `*` | — | — | 404 fallback |

### [W3] Component Planning Document

**File:** `docs/component-architecture-week4.md`

Document what was built, why, and how components relate to each other:

- Full list of all components with file paths and a one-line description of responsibility
- Which components are global (all of them currently) vs which will be page-specific
- Naming conventions: PascalCase, folder-per-component, `index.ts` barrel exports or direct imports — document the pattern actually used
- How atoms compose into molecules, molecules into organisms, organisms into templates — give one worked example
- Which organisms use which atoms
- Props interface summary for each component (just the key props — variant, size, children, className pattern)
- Rules for adding new components: when to create a new atom vs extend an existing one

### [W3] Page Template Planning Draft

**File:** `docs/page-template-planning.md`

Specify what each page template does, what organisms it composes, and what data it requires:

**HomePageTemplate:**
- Organisms: Navbar, HeroSection, ContentGrid (featured calls or programmes), SectionHeader, Footer
- Data: static hero content from WP Page, dynamic CPT entries for featured sections
- Layout: full-width hero, then max-width container sections

**InnerPageTemplate:**
- Organisms: Navbar, SectionHeader (page title), main content area, optional AccordionSection or DocumentDownloadList, Footer
- Data: WP Page content (for static pages) or CPT entry (for dynamic detail pages)
- Layout: max-width container with consistent side margins

**Note:** This document must be reviewed by Role 2 (page-template alignment) before templates are built.

---

## Week 4 Implementation Tasks

Begin after the carry-over documents are written and the Vite vs Next.js decision is recorded.

### Missing Organism

**DocumentDownloadList** (`organisms/DocumentDownloadList/DocumentDownloadList.tsx`)

Required for resource pages and call pages where users need to download forms and documents.

- Props: `documents: Array<{ label: string; url: string; fileType?: string }>`
- Renders a list of download links with a file type indicator (PDF, DOCX, etc.)
- Each link must open in a new tab and have a clear download affordance
- Must be accessible: descriptive link text, not just "Download"
- Will be connected to the `documents` ACF field on the `call` CPT and `file_url` on the `resource` CPT

### Route Implementation

Once the route strategy document is written and reviewed by Role 1:

- [ ] Implement homepage route — replace current UnderConstruction placeholder with HomePageTemplate stub
- [ ] Implement top-level section routes: `/erasmus`, `/international-students`, `/partnerships`, `/about`, `/contact`, `/news`, `/calls`, `/stories`, `/resources`, `/programmes`
- [ ] Implement nested Erasmus routes: `/erasmus/incoming-students`, `/erasmus/outgoing-students`, `/erasmus/incoming-staff`, `/erasmus/outgoing-staff`
- [ ] Implement dynamic detail routes: `/calls/:slug`, `/stories/:slug`, `/resources/:slug`, `/programmes/:slug`
- [ ] Implement 404 fallback route
- [ ] Connect each route to a page file in `pages/` — one file per route

### Page Templates

- [ ] Build `InnerPageTemplate` — review `page-template-planning.md` and Role 2's `page-template-alignment-feedback.md` before building
- [ ] Build `HomePageTemplate` — same prerequisite

### Locale Routing

- [ ] Resolve Vite vs Next.js with Role 1 first
- [ ] Once decided: implement locale routing structure (React Router nested routes pattern if staying on Vite)
- [ ] LanguageSwitcher atom from Role 4 must exist before locale routing is wired

### API Layer

**Do not add these until Role 6 has produced `rest-api-exposure-checklist.md` and ACF field names are confirmed.**

- [ ] `getPages()` / `getPage(slug)` — `/wp-json/wp/v2/pages`
- [ ] `getCalls(params?)` / `getCall(slug)` — `/wp-json/wp/v2/calls`
- [ ] `getProgrammes(params?)` / `getProgramme(slug)` — `/wp-json/wp/v2/programmes`
- [ ] `getResources(params?)` / `getResource(slug)` — `/wp-json/wp/v2/resources`
- [ ] `getStories(params?)` / `getStory(slug)` — `/wp-json/wp/v2/stories`
- [ ] Add taxonomy filter param support (e.g. `?audience=incoming-students`) to list helpers

### Architecture Separation Rules (enforce throughout)

- [x] No API calls inside presentational components — all fetching in `api/wordpress.js`
- [x] Routing in `App.tsx` only — templates do not know their route
- [x] Templates compose organisms — organisms do not compose templates
- [ ] Page files (`pages/`) handle data fetching and pass data down as props — not inline in JSX
- [ ] Document this pattern in `component-architecture-week4.md`

---

## Deliverables Checklist

### Week 3 carry-overs (produce first)

- [W3] [ ] `react-route-strategy.md` — full route map from sitemap to React paths
- [W3] [ ] `component-architecture-week4.md` — component inventory, naming rules, composition model
- [W3] [ ] `page-template-planning.md` — template specs for HomePageTemplate and InnerPageTemplate

### Week 4 implementation deliverables

- [ ] `DocumentDownloadList` organism committed
- [ ] `InnerPageTemplate` built and committed
- [ ] `HomePageTemplate` built and committed
- [ ] Full top-level route tree in `App.tsx`
- [ ] All section routes connected to page files
- [ ] Dynamic detail routes with `:slug` params connected to page files
- [ ] 404 fallback route
- [ ] `layout-template-implementation.md` — brief notes on what each template does and which organisms it uses
- [ ] CPT API helpers — pending Role 6 delivering `rest-api-exposure-checklist.md`

---

## Dependencies This Week

| Role | What Role 5 needs from them | When |
|------|-----------------------------|------|
| Role 1 | Vite vs Next.js decision | Before route tree or locale routing |
| Role 2 | `page-template-alignment-feedback.md` | Before building InnerPageTemplate and HomePageTemplate |
| Role 4 | LanguageSwitcher atom | Before locale routing is wired |
| Role 6 | `rest-api-exposure-checklist.md`, confirmed CPT slugs and field names | Before any CPT API helpers are written |

| Role | What they need from Role 5 | When |
|------|---------------------------|------|
| Role 1 | `react-route-strategy.md` — needed for frontend consistency validation | Start of week |
| Role 2 | `component-architecture-week4.md` — needed for UX review context | Start of week |
| Role 6 | Confirm which CPT slug names will be used in API helpers | Before Role 6 finalises field names |

---

## Definition of Done — Role 5, Week 4

- [ ] `react-route-strategy.md` committed
- [ ] `component-architecture-week4.md` committed
- [ ] `page-template-planning.md` committed and reviewed by Role 2
- [ ] DocumentDownloadList, InnerPageTemplate, HomePageTemplate committed
- [ ] Full route tree implemented in `App.tsx`
- [ ] Locale routing strategy agreed with Role 1 and documented
- [ ] CPT API helpers committed once Role 6 delivers the exposure checklist
