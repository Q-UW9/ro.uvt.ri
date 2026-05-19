# Week 5–6 Role Plan — Beta Sprint
**Project:** RI.UVT.RO Redesign  
**Period:** Week 5 (19–26 May) + Week 6 (26 May – 2 June)  
**Beta deadline:** 02.06.2026  
**Compiled:** 2026-05-19

---

## Context

We have two weeks to reach a beta. The component library is fully built. The WordPress backend structure is configured in the repo but not yet live in WP admin. The frontend is not connected to any real data. No UVT styling has been applied. No real content exists in WordPress.

Two weeks is tight. Every blocker listed below costs a day we do not have.

---

## Week 5 Goal (by 26 May)

- App.tsx wired with real routes
- WordPress admin: CPTUI imported, ACF synced, test entries live
- CPT API helpers written and tested against real WP endpoints
- Homepage and at least two section pages rendering real data
- UVT styling applied to Navbar, HeroSection, Card, SectionHeader
- Role 2 docs backlog cleared

## Week 6 Goal (by 2 June — Beta)

- All sitemap routes working (static pages + CPT archives + detail pages)
- Real content in WP for all static pages and at least 3 entries per CPT
- Old site coherence gaps resolved
- Visual QA pass done
- Beta presentation ready

---

## Dependency Map

The following sequence is the critical path. A delay at any step delays everything after it.

```
Role 1 records Vite decision (Day 1)
  └─ Role 5 wires App.tsx routes

Role 6 imports CPTUI + ACF in WP admin (Day 1–2)
  └─ Role 6 publishes test entries
       └─ Role 5 writes + tests CPT API helpers
            └─ Role 8 builds page files (src/pages/)
                 └─ Pages render real WP data

Role 4 delivers UVT styling tokens
  └─ Role 5 applies to components
```

---

## Role 1 — Project Manager

### Day 1 (19 May) — Decisions required immediately

These two items are blocking other people. Do them first, before anything else.

1. **Record the Vite vs Next.js decision** in `docs/agent_memory/main/03_Frontend_Architecture.md`. The project runs on Vite + React Router. Write one sentence confirming this is the final choice. This unblocks Role 5's App.tsx wiring and locale routing.
2. **Decide the `people` CPT.** Tell Role 6 yes or no. If yes, Role 6 adds it this week. If no, close the issue.

### Week 5

- Review and merge Role 5's route wiring and API helper PRs once delivered
- Review Role 4's styling outputs on Wednesday and Friday — if Role 4 misses a component, apply the fix yourself using the same AI workflow (see Role 4 section)
- Resolve the color token conflict with Role 4: the main branch uses `uvt-blue: #005BBB`, `uvt-navy: #002147`, `uvt-gold: #F2B705`. If Role 4's old-site analysis produces different values, make the call on which set wins before end of week

### Week 6

- Daily merge coordination as pages come in from Role 5 and Role 8
- Final error-fix pass before 2 June
- Prepare beta presentation materials

---

## Role 2 — UX Researcher / Frontend Contributor

> You owe 4 documents from Week 4. These are blocking Role 5's template finalization. Clear the backlog first — none of them require more than a few hours each.

### Week 5 — Days 1–2: Clear the docs backlog

Deliver these four documents. Each is a review, not original research — the source material already exists.

1. **`PageTemplateAlignment.md`** — Review Role 5's `page-template-planning.md` (in `docs/week4/roles/role5/addition/`). Confirm that `HomePageTemplate` and `InnerPageTemplate` cover all user journeys. Note any missing organism or structural gap. This unblocks template finalization.
2. **`RouteHierarchyCorrections.md`** — Review `react-route-strategy.md` (same folder). Check that every route in `01_Sitemap.md` is present and correctly nested. Flag any route that should redirect or that is missing.
3. **`WordPressStructureUserFlow.md`** — Match the 4 CPTs (calls, stories, resources, programmes) and the 4 taxonomies against the user flows in `02_User_Flows.md`. Confirm the structures support how users browse the site.
4. **`UX Validation.md`** — Review the full component inventory in `component-architecture-week4.md`. For each organism, write one sentence confirming or flagging usability. Focus on mobile and on document-heavy sections.

### Week 5 — Days 3–5: React pages

After the backlog is cleared, implement the following page files. These are straightforward: each page fetches data from `api/wordpress.js` and passes it to an existing template.

- `src/pages/HomePage.tsx` — uses `HomePageTemplate`; data from `getPosts()` + hardcoded hero until WP Page API is live
- `src/pages/AboutPage.tsx` — uses `InnerPageTemplate`; data from `getPage('about')`
- `src/pages/ContactPage.tsx` — uses `InnerPageTemplate`; data from `getPage('contact')`

### Week 6

- UX validation pass on completed pages as they come in from Role 5 and Role 8
- Mobile usability check on CPT listing and detail pages
- Support Role 7 with content structure questions

---

## Role 3 — Information Architect

> You are busy. Your task this week is one contained research job. It does not require being online at a specific time or coordinating with others.

### Week 5 — Old Site Coherence Check

**Task:** Compare the old RI.UVT.RO site against the new architecture and find the gaps.

**Output:** `docs/week5/old-site-coherence-check.md`

**What to check:**

1. Open the old site. Go through every section and sub-page.
2. For each page or content area, check whether it maps to a route in `01_Sitemap.md` (in `docs/agent_memory/main/`).
3. Flag anything on the old site that has no equivalent in the new sitemap.
4. Note any content type that exists as PDFs or text blocks on the old site that should become a structured CPT entry (calls, resources, etc.) in the new site.
5. Note any navigation item on the old site that is missing from the approved Navbar model.

**Deliverable format:**

```
## Missing Routes
- [old URL or section name] — no equivalent in new sitemap

## Content That Should Be CPT Entries
- [description] — suggest CPT: calls / resources / programmes / stories

## Navbar Gaps
- [item on old site] — not in new approved Navbar model
```

Deliver by end of Week 5. Role 1 will merge findings into the open issues list.

### Week 6 — If available

If time allows, assist Role 6 with importing CPTUI and creating test entries in WP admin. This is a 30-minute admin task, not a coding task.

---

## Role 4 — UI Styling (UVT Style Application)

> You have one task this week. It is broken into three components. Do them in order. Each component is self-contained and follows the same workflow.

### Your task

Apply UVT styling (from the old UVT site, with a modern twist) to React components. The components are already built. You are adding the correct look.

**The workflow — follow this exactly for each component:**

1. Open the old UVT website. Find the equivalent of the component (e.g. for Navbar, find the old site's navigation bar).
2. Press `Ctrl+S` and save the page as a complete HTML file.
3. Open Claude (or another AI). Paste the HTML and send this prompt:
   > "Analyze the styling of this HTML page. Focus on: colors, typography, spacing, border radius, shadows, and hover states. Output a markdown file documenting the visual patterns."
4. Save that markdown output.
5. Open the React component file. Send both the styling markdown and the component code to the AI with this prompt:
   > "Apply this styling to the React component. Use Tailwind utility classes. Where a value matches an existing token in tailwind.config.js (`uvt-blue: #005BBB`, `uvt-navy: #002147`, `uvt-gold: #F2B705`, `uvt-gray: #F5F5F5`, `uvt-white: #FFFFFF`), use the token instead of a hardcoded value. Preserve the modern layout structure. Output the updated component."
6. Replace the component file with the output.
7. Open the local dev server (`npm run dev` in `frontend/`) and check the result. Fix any obvious visual errors.
8. Save the styling markdown as a doc file (see targets below).

**Target components and deadlines:**

| Component | File | Styling doc output | Deadline |
|-----------|------|--------------------|----------|
| `Navbar` | `frontend/src/components/organisms/Navbar/Navbar.tsx` | `docs/week5/styling/navbar-uvt-style.md` | Wednesday 21 May |
| `HeroSection` | `frontend/src/components/organisms/HeroSection/HeroSection.tsx` | `docs/week5/styling/hero-uvt-style.md` | Wednesday 21 May |
| `Card` | `frontend/src/components/molecules/Card/Card.tsx` | `docs/week5/styling/card-uvt-style.md` | Friday 23 May |

**Also on Wednesday 21 May:** Resolve the color token conflict. Check whether the old UVT site uses `#005BBB` or `#003B71` as its primary blue. Report to Role 1 with a screenshot. Role 1 makes the final call.

### Week 6 — If Week 5 targets are met

Apply the same workflow to: `SectionHeader`, `Footer`, `AccordionSection`.

---

## Role 5 — React Developer (Lead Frontend)

You are the critical path this week. The order matters.

### Week 5 — Day 1

**Fix the Navbar.** These corrections are required before any visual work or QA can proceed.

Per `NavigationConsistencyFeedback.md` (in `docs/week4/roles/role2/deliverables/`):

| Current label | Correct label |
|---|---|
| About | About DRI |
| Admissions | International Students |
| Erasmus | Erasmus+ |
| Research | Partnerships |

Also add: `Scholarships & Exchanges` and `News` to the nav links.

Remove `/admissions` and `/research` routes from `App.tsx` (they do not exist in the sitemap).

### Week 5 — Day 1–2: Wire App.tsx

Once Role 1 records the Vite decision:

Wire the full route tree from `react-route-strategy.md` into `App.tsx`. Create stub page files in `src/pages/` for every route. Each stub just renders the page title inside `InnerPageTemplate` for now. The goal is a working route structure — not finished pages.

### Week 5 — Day 2–3: CPT API helpers

The field names are confirmed in `docs/agent_memory/main/13_WP_Merge_Fixes.md` Section 5. Write these in `frontend/src/api/wordpress.js`:

| Function | Endpoint | Taxonomy filter params |
|----------|----------|----------------------|
| `getPages()` / `getPage(slug)` | `/wp-json/wp/v2/pages` | — |
| `getCalls(params?)` / `getCall(slug)` | `/wp-json/wp/v2/calls` | `audience`, `academic-year` |
| `getProgrammes(params?)` / `getProgramme(slug)` | `/wp-json/wp/v2/programmes` | `audience`, `programme-family` |
| `getResources(params?)` / `getResource(slug)` | `/wp-json/wp/v2/resources` | `audience`, `content-topic`, `academic-year` |
| `getStories(params?)` / `getStory(slug)` | `/wp-json/wp/v2/stories` | `audience`, `content-topic` |

Add TypeScript types for each response shape in `frontend/src/types/`.

Test each helper against the live Laragon WP instance once Role 6 has test entries live.

### Week 5 — Day 4–5: Homepage integration

Wire `HomePage.tsx` to real data:
- Hero: static props (WP Page API not needed yet)
- Cards: static from `src/data/homeSections.ts` until CPT entries exist
- News: `getPosts()` → pass to `NewsSection`

Verify it renders correctly in the browser.

### Week 6

- Wire all CPT listing pages (calls, programmes, resources, stories) — fetch from API, render in `InnerPageTemplate` with `ContentGrid`
- Wire CPT detail pages (`:slug` routes) — fetch single entry, render with `InnerPageTemplate` + `DocumentDownloadList` where applicable
- Wire static section pages (Erasmus sub-routes, International Students sub-routes) — `getPage(slug)` → `InnerPageTemplate`
- Apply UVT styling tokens from Role 4's outputs once they are merged
- Locale routing: implement only if Role 1 confirms it is in beta scope

---

## Role 6 — WordPress Developer

### Week 5 — Day 1–2: WP Admin actions (required immediately)

Nothing can be tested until this is done.

1. **Import CPTUI** — go to WP Admin → Custom Post Types → Tools → Import. Use `wordpress/ro.uvt.ri/cptui-export.json`. Verify the 4 CPTs appear (`calls`, `stories`, `resources`, `programmes`).
2. **Import CPTUI taxonomies** — same tools panel. Use `wordpress/ro.uvt.ri/cptui-taxonomies.json`. Verify the 4 taxonomies appear (`audience`, `programme-family`, `content-topic`, `academic-year`).
3. **Sync ACF** — go to WP Admin → ACF → Tools → Sync. All 9 JSON files in `acf-json/` should appear and sync. Verify 4 CPT field groups + 5 global field groups are active.
4. **Decide `people` CPT** — confirm with Role 1 (yes/no). If yes, add to CPTUI and re-export.

### Week 5 — Day 3–4: Test entries

Create at least 2 published entries per CPT. These are for testing — content does not need to be final.

- `calls`: title, deadline, eligibility, at least one document file link
- `programmes`: title, duration, language, partner institution
- `resources`: title, file URL (`https://example.com/test.pdf`), file type (`PDF`)
- `stories`: title, author, story date, pull quote

Assign taxonomy terms to each entry (at least one `audience` term per entry).

### Week 5 — Day 5: REST verification

For each CPT, open the endpoint in the browser and confirm ACF fields appear in the response:
- `http://ro.uvt.ri.test/wp-json/wp/v2/calls`
- `http://ro.uvt.ri.test/wp-json/wp/v2/programmes`
- `http://ro.uvt.ri.test/wp-json/wp/v2/resources`
- `http://ro.uvt.ri.test/wp-json/wp/v2/stories`

If ACF fields are missing from the response, go to ACF → field group → enable "Show in REST API" on the group.

Document results in `docs/week5/rest-api-verification.md`.

### Week 6

- Create static WP Pages for every route that uses `InnerPageTemplate` with a static WP Page source (`/about`, `/contact`, `/erasmus`, all sub-pages). Titles and slugs must match the route slugs exactly.
- Populate pages with real content (coordinate with Role 7)
- Add 3–5 more entries per CPT with real content
- If `people` CPT is approved, configure and populate it

---

## Role 7 — Content Strategist / Content Entry

> We are placing you on content work. This is not a technical role — it requires reading, writing, and organizing.

### Week 5

**Review the old RI.UVT.RO site and prepare content drafts** for the following WP Pages. These will be entered into WordPress in Week 6 once Role 6 creates the page structure.

For each page, produce a short markdown file with:
- Page title
- One-sentence page purpose
- 2–3 content sections with a heading and 2–4 sentences of text each
- Any relevant links or documents to include

Pages to draft:
1. About DRI (`/about`)
2. Contact (`/contact`)
3. Erasmus landing (`/erasmus`)
4. International Students landing (`/international-students`)
5. Partnerships (`/partnerships`)

Save drafts in `docs/week5/content-drafts/`.

Coordinate with Role 3's coherence check — if Role 3 flags missing content, absorb it into these drafts.

### Week 6

- Enter all content drafts into WP admin (Work with Role 6 who creates the page structure)
- Draft content for Erasmus sub-pages (`incoming-students`, `outgoing-students`, `incoming-staff`, `outgoing-staff`)
- Draft FAQ blocks for at least 2 pages (to populate `AccordionSection` components)

---

## Role 8 — API / React Data Layer

> Your job is to connect the API helpers Role 5 writes to the page templates. You are building the page files in `src/pages/`. Role 5 owns the API functions and templates; you own the wiring between them.

### Week 5 — Wait for Role 5's API helpers and route stubs

Role 5 will have the route stubs and CPT helpers done by Day 3. Pick them up then.

**Day 3–5: Wire CPT listing pages**

For each of the following, open the stub page file Role 5 created and wire it to the API:

- `CallsPage.tsx` — call `getCalls()`, render results with `InnerPageTemplate` + `ContentGrid` of `Card` components
- `ProgrammesPage.tsx` — call `getProgrammes()`, same pattern
- `ResourcesPage.tsx` — call `getResources()`, render with `ContentGrid` + `DocumentDownloadList`
- `StoriesPage.tsx` — call `getStories()`, `ContentGrid` of `Card`

Add a loading state (`<p>Loading...</p>`) and a basic error state (`<p>Could not load content.</p>`) to each page. Keep it simple.

### Week 6

- Wire CPT detail pages (`CallDetailPage`, `ProgrammeDetailPage`, `ResourceDetailPage`, `StoryDetailPage`) — use `getCall(slug)` etc., render in `InnerPageTemplate`, pass documents/accordion as appropriate
- Wire static section pages that use `getPage(slug)` (`AboutPage`, `ContactPage`, `ErasmusPage`, etc.)
- Coordinate with Role 5 on TypeScript type shapes if something doesn't fit

---

## Buffer and Risk

| Risk | Mitigation |
|------|------------|
| Role 4 delivers late or incomplete | Role 1 runs the same AI styling workflow on missed components |
| Role 6 WP import fails | Check the JSON files manually; the fix log is in `13_WP_Merge_Fixes.md` |
| Role 2 docs backlog still not cleared | Role 1 makes a judgment call on template finalization without the review docs |
| REST endpoints return missing ACF fields | Enable "Show in REST API" per field group in WP Admin → ACF |
| Role 3 unavailable for coherence check | Role 1 does a manual 30-minute pass on the old site |
| Route wiring breaks something | All route stubs are isolated page files — breaking one route does not affect others |

---

## Definition of Done — Beta (2 June)

- [ ] App runs at `localhost:5173` with real routes
- [ ] Homepage renders with real WP data
- [ ] At least 4 CPT listing pages working
- [ ] At least 2 CPT detail pages working
- [ ] Static pages (About, Contact, Erasmus, International Students) populated
- [ ] UVT styling applied to Navbar, HeroSection, Card, SectionHeader
- [ ] No broken routes (404 fallback in place)
- [ ] WP admin has real content across all CPTs
- [ ] Old site coherence gaps documented
