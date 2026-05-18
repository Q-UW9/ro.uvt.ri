# Week 5 Plan — Dynamic Structures and Reusable Content Models
**Project:** RI.UVT.RO Redesign  
**Week 5 Objective:** Connect the WordPress content architecture with reusable React templates so the site can display structured, API-driven content. Prepare for full page population in Week 6.  
**Compiled:** 2026-05-18

---

## Workflow Changes for Week 5

Based on Week 4 outcomes, the following changes are in effect.

### Team structure

| Role | Specialization | Stream |
|------|---------------|--------|
| Role 1 | PM, coordination, architecture decisions | Cross-cutting |
| Role 2 | UX validation | Frontend |
| Role 3 | Information architecture, WP content model | Backend |
| Role 4 | UI design system | Frontend |
| Role 5 | React development | Frontend |
| Role 6 | WordPress API, CPTs, ACF | Backend |
| Role 7 | Content strategy | Content |
| Role 8 | Backend support | Backend |

**Role 3** comes online this week. Week 5 plan already assigns content model validation and WP structure — this matches their stated backend preference. Pair with Role 6.

**Role 7** comes online this week as Content Strategist per the Week 5 plan. Primary output: draft content blocks for every CPT so Role 6 can create test entries and Role 5 can test components against realistic data.

**Role 8** comes online this week. Assigned to the backend stream alongside Role 3 and Role 6. Tasks are concrete and scoped: WP admin steps, REST endpoint verification, content entry creation.

**Role 2** is assigned narrowly scoped UX review tasks only. No open-ended deliverables. Output is a checklist, not a document.

**Role 4** has one priority before anything else this week: resolve the color token conflict. New design work is blocked on that decision.

### Process rules

**1. Carry-over debt before new work.** Role 5 writes the 3 overdue planning documents before starting new components. Role 6 completes the WP admin steps (CPTUI import, ACF sync) before any new backend work. These are day-one tasks.

**2. Design tokens frozen before implementation.** The Week 4 color conflict (`#003B71` vs `uvt-blue: #005BBB`) must be resolved by Role 4 + Role 1 on day one of Week 5. No new components start until the decision is recorded in `index.css`.

**3. No copying files between branches.** Role 5's `feature/api-setup` branch copied Role 6's ACF JSON verbatim and introduced the same bugs. Going forward: if a role needs files from another role's branch, they wait for the merge into main or request a reviewed copy, never a direct file copy.

**4. Backend contracts freeze before frontend implementation.** API helpers are only written against field names confirmed in `docs/agent_memory/main/13_WP_Merge_Fixes.md`. That document is now the single source of truth. Do not write helpers based on unverified branch content.

**5. Role 1 reviews branches mid-week.** Not only at the end of the week. A mid-week check-in prevents the situation where Role 1 discovers structural problems (WP core committed, wrong paths, copy-paste) only when merging.

**6. Inactive roles get scoped tasks with a concrete output format.** "UX validation notes" is too vague. "Fill in the journey clarity checklist for the Erasmus Outgoing, Incoming, and Resources paths" is not.

---

## Week 5 Carry-overs from Week 4 (must close first)

These are blocking issues that must be resolved before week 5 new work starts.

| # | Task | Owner | Blocks |
|---|------|-------|--------|
| 1 | Resolve color token conflict — decide `#003B71` vs `#005BBB` and update `index.css` | Role 4 + Role 1 | Visual QA, all new components |
| 2 | Write `react-route-strategy.md` | Role 5 | Route tree, templates |
| 3 | Write `component-planning.md` | Role 5 | InnerPageTemplate, HomePageTemplate |
| 4 | Write `page-template-planning.md` | Role 5 | InnerPageTemplate |
| 5 | CPTUI import via admin (post types + taxonomies) | Role 6 | REST verification, test entries |
| 6 | ACF sync via admin (9 field groups) | Role 6 | REST verification, test entries |
| 7 | Record `people` CPT decision | Role 1 | Role 6 backend, Role 3 content model |

---

## Role 1 — Project Manager

**Carry-overs (day one):**
- [ ] Decide and record the color token: `#003B71` (Role 4) or `#005BBB` (current `index.css`). Update the file that loses. Record the decision in a one-line note in `docs/agent_memory/main/`.
- [ ] Decide on `people` CPT. Record the decision in a one-line note.

**Week 5 tasks:**
- [ ] Mid-week branch review (before Thursday) — check Role 5, Role 6, Role 8 branches for structural issues
- [ ] Validate that Role 5's API helpers match the frozen field names in `13_WP_Merge_Fixes.md`
- [ ] Validate that frontend templates match the WordPress content model as confirmed by Role 3
- [ ] Produce Week 6 page-building task list once Role 5, Role 6, and Role 7 confirm their outputs are usable

**Deliverables:**
- Color token decision note
- `people` CPT decision note
- API-rendering consistency checklist
- Week 6 page-building task list

---

## Role 2 — UX Researcher

Role 2 has produced no work in Weeks 3 or 4. Week 5 tasks are narrowly scoped with a single output format.

**Task:** Fill in the journey clarity checklist below for three user paths. For each path check whether the current component structure and content model answers the six questions. Write findings in `docs/week5/role2/journey-clarity-checklist.md`.

**Paths to review:**
1. Outgoing UVT student (Erasmus)
2. Incoming international student
3. Academic staff looking for partnership resources

**For each path, answer:**
- Who is this page/section for? (is it stated?)
- What must the user do? (is there a clear action?)
- What documents are needed? (are they listed?)
- What deadline applies? (is it visible?)
- Who to contact? (is contact info present?)
- What is the next step? (is there a CTA?)

**Deliverables:**
- `docs/week5/role2/journey-clarity-checklist.md` — one table per user path, six rows each

---

## Role 3 — Information Architect

Role 3 joins the project this week. Primary responsibility: validate that the content model (CPTs, taxonomies, structured fields) aligns with the sitemap and route hierarchy.

**Tasks:**
- [ ] Review the 4 CPTs now in main (`calls`, `stories`, `resources`, `programmes`) against `docs/agent_memory/main/01_Sitemap.md` — confirm each CPT maps to one canonical route group, no overlaps
- [ ] Review the 4 taxonomy slugs (`audience`, `programme-family`, `content-topic`, `academic-year`) — confirm they cover the filtering needs of the sitemap
- [ ] Review ACF field groups in `wordpress/ro.uvt.ri/wp-content/themes/twentytwentyfive/acf-json/` — confirm each field has a clear frontend use case
- [ ] Confirm which sitemap routes are evergreen Pages vs CPT-driven vs dynamic detail routes
- [ ] Support Role 6 with WP admin steps if needed (CPTUI import, test entries)
- [ ] Produce static vs dynamic content map covering all sitemap routes

**Deliverables:**
- `docs/week5/role3/content-model-validation.md` — CPT and taxonomy alignment against sitemap
- `docs/week5/role3/static-vs-dynamic-map.md` — every sitemap route classified

---

## Role 4 — UI Designer

**Carry-over (day one, blocking everything else):**
- [ ] Resolve the color token conflict. Compare your `#003B71`/`#F2C94C` palette against `uvt-blue: #005BBB`, `uvt-navy: #002147`, `uvt-gold: #F2B705` in `frontend/src/index.css`. Make a recommendation to Role 1 and implement the agreed decision. If the current main branch tokens are adopted, update `design-system-work-in-progress.md` to reflect the correct values.

**Once color decision is resolved:**
- [ ] Remove the `!!!this file is subject to change` header from `design-system-work-in-progress.md` and finalize the document
- [ ] Produce a Tailwind token block (ready to paste into `index.css`) covering: color tokens, typography scale variables, and spacing scale
- [ ] Review Role 5's implemented components (Card, SectionHeader, Navbar, Footer, HeroSection, TabsSection) against `component-handoff.md` — note any deviations in spacing, typography, or color

**Deliverables:**
- Finalized `design-system-work-in-progress.md`
- `docs/week5/role4/tailwind-tokens.md` — copy-paste-ready token block
- `docs/week5/role4/component-review.md` — deviation notes for each reviewed component

---

## Role 5 — React Developer

**Carry-overs (complete before new work):**
- [ ] Write `docs/week5/role5/react-route-strategy.md` — full route tree for all sitemap paths, locale prefix decision (`/ro`, `/en`), dynamic vs static route classification
- [ ] Write `docs/week5/role5/component-planning.md` — which components are global, which are page-specific, naming conventions
- [ ] Write `docs/week5/role5/page-template-planning.md` — InnerPageTemplate layout decisions (sidebar position, sticky nav, breadcrumb)

**New implementation (after carry-overs done):**

*API layer — use frozen field names from `docs/agent_memory/main/13_WP_Merge_Fixes.md` Section 5:*
- [ ] `getPages()` / `getPage(slug)`
- [ ] `getCalls(params?)` / `getCall(slug)` — support `audience`, `academic-year` filters
- [ ] `getProgrammes(params?)` / `getProgramme(slug)` — support `audience`, `programme-family` filters
- [ ] `getResources(params?)` / `getResource(slug)` — support `audience`, `content-topic`, `academic-year` filters
- [ ] `getStories(params?)` / `getStory(slug)` — support `audience`, `content-topic` filters

*TypeScript types (one per CPT + shared types):*
- [ ] `WPCall`, `WPProgramme`, `WPResource`, `WPStory`, `WPPage`, `WPPost`
- [ ] Shared: `ACFMedia`, `ACFRepeaterItem`, `WPTaxonomyTerm`

*Components:*
- [ ] `DocumentDownloadList` organism — props: `items: { label, file_url, file_type }[]`

*Templates:*
- [ ] `InnerPageTemplate` — Navbar + page header + content area + Footer (sidebar decision from `page-template-planning.md`)
- [ ] `HomePageTemplate` — Navbar + hero + audience cards + sections + Footer

*Route tree:*
- [ ] Wire full route tree in `App.tsx` with placeholder pages for all sitemap routes
- [ ] Implement locale prefix routing (`/ro`, `/en`) per decision in `react-route-strategy.md`

*Fallback states:*
- [ ] Loading, empty content, failed fetch — one shared pattern usable by all data-fetching pages

**Deliverables:**
- 3 planning documents (carry-overs)
- `frontend/src/api/wordpress.js` extended with 10 new helpers
- TypeScript type definitions
- `DocumentDownloadList` component
- `InnerPageTemplate` and `HomePageTemplate`
- Full route tree in `App.tsx`
- Fallback state patterns

---

## Role 6 — WordPress Developer

**Carry-overs (day one):**
- [ ] Import `cptui-export.json` via CPTUI → Post Types → Import
- [ ] Import `cptui-taxonomies.json` via CPTUI → Taxonomies → Import
- [ ] Run ACF → Tools → Sync to import all 9 field groups from `acf-json/`
- [ ] Go to Settings → Permalinks → Save (flushes rewrite rules)

**Verification:**
- [ ] Confirm `/wp-json/wp/v2/calls` returns 200 with `acf` key
- [ ] Confirm `/wp-json/wp/v2/programmes` returns 200 with `acf` key
- [ ] Confirm `/wp-json/wp/v2/resources` returns 200 with `acf` key
- [ ] Confirm `/wp-json/wp/v2/stories` returns 200 with `acf` key
- [ ] Confirm taxonomy filter params work: `?audience=<term>` returns filtered results

**Test entries (minimum 1 per CPT, all fields populated):**
- [ ] 1 Call entry — populate `deadline`, `financial_support`, `eligibility`, `application_steps`, `documents`
- [ ] 1 Programme entry — populate `application_deadline`, `duration`, `language`, `partner_institution`
- [ ] 1 Resource entry — populate `file_url`, `file_type`, `audience_notes`
- [ ] 1 Story entry — populate `author`, `story_date`, `pull_quote`
- [ ] Assign at least one taxonomy term to each entry

**`people` CPT:**
- [ ] Register if approved by Role 1. If not approved, document the decision.

**Deliverables:**
- All 4 CPT REST endpoints verified and documented
- Test entries (min 4) with all ACF fields populated
- REST response verification notes

---

## Role 7 — Content Strategist

Role 7 joins this week. Primary output: draft content that Role 6 can enter as test entries, and that Role 5 can test components against.

**Content mapping:**
- [ ] Review old RI.UVT.RO content and classify each item: Page / Post / Call / Story / Resource / Programme / FAQ / Process step
- [ ] Identify which PDF-first workflows can be replaced with structured page content

**Draft content blocks (to populate Role 6's test entries):**
- [ ] 1 Call draft — title, eligibility text, 3–4 application steps, deadline, 2 document links
- [ ] 1 Programme draft — title, duration, language, partner institution, application deadline
- [ ] 1 Resource draft — title, file URL, file type, audience notes
- [ ] 1 Story draft — title, author, story date, pull quote, body text
- [ ] 1 FAQ block — 5 questions + answers (for FAQ Section global group)
- [ ] 1 Process steps block — 4 steps with title + description (for Process Steps global group)

**Coordinate:**
- [ ] Share drafts with Role 6 before mid-week check-in so test entries can be created in time for Role 5 to test against

**Deliverables:**
- `docs/week5/role7/content-model-mapping.md` — content classification list
- `docs/week5/role7/content-drafts.md` — all draft content blocks

---

## Role 8 — Backend Support

Role 8 joins this week. Paired with the backend stream (Role 3 + Role 6).

**Tasks:**
- [ ] Support Role 6 with WP admin steps if needed
- [ ] Test all 4 CPT REST endpoints manually and record raw responses (paste into `docs/week5/role8/rest-responses.md`)
- [ ] Verify that taxonomy terms appear in CPT REST responses
- [ ] Verify that the `acf` key is present and correct in all 4 CPT responses
- [ ] Check that `?audience=`, `?programme-family=`, `?content-topic=`, `?academic-year=` query params return filtered results
- [ ] Report any discrepancy between the field names in the REST response and those in `docs/agent_memory/main/13_WP_Merge_Fixes.md` Section 5

**Deliverables:**
- `docs/week5/role8/rest-responses.md` — raw response excerpts and verification results for all 4 endpoints

---

## Week 5 Combined Outputs

| Deliverable | Owner | Required by |
|-------------|-------|-------------|
| Color token decision | Role 1 + Role 4 | Everything |
| `people` CPT decision | Role 1 | Role 6 |
| CPTUI + ACF imported into WP | Role 6 | All REST work |
| Test entries (4 CPTs) | Role 6 + Role 7 | Role 5, Role 8 |
| REST endpoints verified | Role 8 | Role 5 API helpers |
| Content model validation | Role 3 | Route tree, Role 1 Week 6 list |
| Planning docs (3 carry-overs) | Role 5 | Templates, route tree |
| CPT API helpers (10 functions) | Role 5 | Dynamic page rendering |
| TypeScript data types | Role 5 | Type-safe rendering |
| DocumentDownloadList | Role 5 | Resources page |
| InnerPageTemplate + HomePageTemplate | Role 5 | Page population (Week 6) |
| Full route tree | Role 5 | Navigation |
| Tailwind token block | Role 4 | Design consistency |
| Component deviation review | Role 4 | Visual QA |
| Journey clarity checklist | Role 2 | UX validation |
| Content drafts | Role 7 | Test entries |
| Week 6 task list | Role 1 | Week 6 kickoff |

---

## Definition of Done

Week 5 is complete when:

- [ ] Color tokens are consistent between `index.css` and the design system document
- [ ] CPTUI and ACF are imported and active in the running WordPress instance
- [ ] At least one published test entry exists per CPT with all ACF fields populated
- [ ] All 4 CPT REST endpoints return 200 with a correct `acf` key (verified by Role 8)
- [ ] `frontend/src/api/wordpress.js` has helpers for all 6 content types
- [ ] TypeScript types exist for all CPT API responses
- [ ] `DocumentDownloadList`, `InnerPageTemplate`, and `HomePageTemplate` are implemented
- [ ] Full route tree is wired in `App.tsx`
- [ ] Role 2 has submitted the journey clarity checklist
- [ ] Role 3 has confirmed the content model against the sitemap
- [ ] Role 1 has produced the Week 6 page-building task list
