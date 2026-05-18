# Week 4 Progress Report
**Project:** RI.UVT.RO Redesign  
**Period:** Week 4  
**Compiled:** 2026-05-18  
**Scope:** React frontend, API connection, WordPress backend

---

## 1. React Frontend

### Role 4 — UI Designer

Role 4 produced three design documents that guided frontend implementation.

**`component-handoff.md`** — Complete. Covers all 9 components needed by Role 5: Button (4 variants, 5 states), Card, SectionHeader, HeroSection, AccordionSection, DocumentDownloadList, CTA Section, Navbar, Footer. Each entry includes anatomy, layout rules, accessibility requirements, responsive rules, and Tailwind class direction. The Week 4 implementation priority order listed in the document matches the sequence Role 5 followed.

**`wireframes.md`** — Complete. 8 layout types covered with ASCII wireframes: Homepage, Internal Page, Student Journey, Resource Listing, Contact/Support, Card Grid, Accordion Section, CTA Section. All include responsive breakpoint rules. These are text-based layouts, which is adequate for this project's markdown-first workflow.

**`design-system-work-in-progress.md`** — Partial. Typography scale (Inter, H1–H3, body, small, button text with exact px/line-height values at each breakpoint), spacing system (section padding, container widths, card padding, grid gaps), and layout rules for homepage and internal pages are all defined. The file is explicitly marked as incomplete by the author.

**Critical issue — color conflict:** Role 4 defined `#003B71` (primary), `#F2C94C` (secondary), `#00A86B` (accent). The main branch `index.css` already has `uvt-blue: #005BBB`, `uvt-navy: #002147`, `uvt-gold: #F2B705` — different values on all three. Role 5 built every component against the main branch tokens. Role 4's color system and the implemented color tokens are currently misaligned. This must be resolved before any visual QA can be done: either Role 4 adopts the existing tokens or a formal decision is made to replace them.

**Missing:** No Tailwind config snippet or CSS variable definitions in a format ready to paste into `index.css`. Values exist only in prose.

---

### Role 5 — React Developer

Role 5 delivered the full core component library in Week 4. All changes are merged into main.

**Components added (commits `8a18c8c`, `fc7e920`):**

| Component | Tier | Notes |
|-----------|------|-------|
| `Card` | Molecule | Title, description, optional image and button; hover lift; uses Button + Typography |
| `SectionHeader` | Molecule | Title, subtitle, `uvt-gold` accent bar; uses Typography |
| `Footer` | Organism | Brand column + 3 nav sections + copyright bar |
| `HeroSection` | Organism | Title, subtitle, primary/secondary buttons |
| `Navbar` | Organism | Sticky header, desktop nav, mobile menu button |
| `TabsSection` | Organism | Stateful tab switcher; `aria-selected`; `uvt-blue` active state |
| `ContentGrid` | Template | Configurable 2/3/4 column responsive grid |

A folder naming typo was also corrected (`molechules` → `molecules`).

`UnderConstruction.tsx` was reworked into a full page assembly demo that integrates all new components — Navbar, HeroSection, TabsSection, ContentGrid, Card, Footer — demonstrating the complete vertical page structure.

**Week 3 carry-over planning documents (3) — written.** `react-route-strategy.md`, `component-architecture-week4.md` (covers component planning), and `page-template-planning.md` all delivered in Week 4.

**Additionally delivered (documented in addition files):** `DocumentDownloadList` organism; `InnerPageTemplate`, `HomePageTemplate`, `PageTransition`, `SectionRenderer` templates; `ContentSection`, `NewsSection` organisms; `Divider`, `Icon`, `LanguageSwitcher` atoms. Full route tree written in `react-route-strategy.md` — pending wiring in `App.tsx` and Role 1 Vite/Next.js decision.

**Not started:** Locale routing (`/ro`, `/en`) — blocked on Role 1 Vite/Next.js decision.

---

### Frontend Status Summary

| Item | Status |
|------|--------|
| Atoms: Button, Typography, Divider, Icon, LanguageSwitcher | Done |
| Molecules: Card, SectionHeader | Done |
| Organisms: Footer, HeroSection, Navbar, TabsSection, AccordionSection, DocumentDownloadList, ContentSection, NewsSection | Done |
| Templates: ContentGrid, PageLayout, PageTransition, SectionRenderer, HomePageTemplate, InnerPageTemplate | Done |
| Full route tree | Written (`react-route-strategy.md`) — pending wiring in `App.tsx` + Role 1 Vite/Next.js decision |
| Locale routing | Not started — blocked on Role 1 decision |
| Design system color tokens | Conflicted — must resolve Role 4 vs main branch values |
| Planning documents (3 carry-overs) | Done |

---

## 2. API Connection

### Role 5 — React Developer

The file `frontend/src/api/wordpress.js` remains unchanged from Week 3. It contains only `getPosts()` and `getPost(slug)`.

No CPT API helpers were written. Role 5 created a `feature/api-setup` branch with WordPress-related commits, but this branch was excluded from the merge:
- WordPress core files were committed directly to the repo (must be gitignored)
- ACF plugin files were committed (same problem)
- The ACF JSON and CPTUI export files on this branch were confirmed copies of role6's broken versions — identical group keys prove they were not independently produced
- All doc stubs matched role6's verbatim

The CPT API helpers remain blocked until the ACF field names are confirmed. The frozen field name reference is now in `docs/agent_memory/main/13_WP_Merge_Fixes.md` and is ready to use.

**API helpers required and not yet written:**

| Function pair | Endpoint | Taxonomy filters |
|---------------|----------|-----------------|
| `getPages()` / `getPage(slug)` | `/wp-json/wp/v2/pages` | — |
| `getCalls(params?)` / `getCall(slug)` | `/wp-json/wp/v2/calls` | `audience`, `academic-year` |
| `getProgrammes(params?)` / `getProgramme(slug)` | `/wp-json/wp/v2/programmes` | `audience`, `programme-family` |
| `getResources(params?)` / `getResource(slug)` | `/wp-json/wp/v2/resources` | `audience`, `content-topic`, `academic-year` |
| `getStories(params?)` / `getStory(slug)` | `/wp-json/wp/v2/stories` | `audience`, `content-topic` |

### Role 6 — WordPress Developer

Role 6 was responsible for producing the `rest-api-exposure-checklist.md` that Role 5 uses as the API contract. The file committed to the role6 branch contained 4 checkbox statements with no endpoint URLs, no field names, and no query parameter documentation — unusable as a contract.

The field name contract is now resolved and frozen in `docs/agent_memory/main/13_WP_Merge_Fixes.md` (Section 5 — Frozen Field Name Reference). Role 5 can proceed with writing API helpers against these names immediately.

---

### API Connection Status Summary

| Item | Status |
|------|--------|
| `getPosts()` / `getPost(slug)` | Done (Week 3) |
| `getPages()` / `getPage(slug)` | Not written |
| `getCalls()` / `getCall()` | Not written |
| `getProgrammes()` / `getProgramme()` | Not written |
| `getResources()` / `getResource()` | Not written |
| `getStories()` / `getStory()` | Not written |
| Field name contract frozen | Done (by Role 1 — see `13_WP_Merge_Fixes.md`) |
| `rest-api-exposure-checklist.md` usable | No — stub only; superseded by `13_WP_Merge_Fixes.md` |

---

## 3. WordPress

### Role 6 — WordPress Developer

Role 6 registered 4 Custom Post Types and created 4 ACF field groups with REST enabled. These were the core deliverables and were partially complete.

**Done correctly by Role 6:**
- 4 CPTs registered with `show_in_rest: true` (`calls`, `stories`, `resources`, `programmes`)
- CPTUI export committed
- 4 ACF field groups created with `show_in_rest: 1`
- ACF Local JSON sync folder (`acf-json/`) in correct theme location

**Defects found and fixed before merge:**

| Defect | Detail | Fix applied |
|--------|--------|-------------|
| Wrong file path | `cptui-export.json` at repo root | Moved to `wordpress/ro.uvt.ri/cptui-export.json` |
| `has_archive: false` on all 4 CPTs | Archive pages (`/calls/`, `/programmes/` etc.) would 404 | Set to `true` on all 4 |
| `excerpt` missing from all CPT `supports` | Excerpt field unavailable in editor | Added to all 4 |
| Empty `taxonomies: []` on all CPTs | Taxonomy filters would silently return no results | Attached correct taxonomies per CPT |
| No taxonomy export | 4 taxonomies described in a doc but never exported or attached | Created `cptui-taxonomies.json` with all 4 taxonomy definitions |
| Calls: `application_deadline` field name | Mismatched plan spec (`deadline`) | Renamed to `deadline` |
| Calls: `eligibility`, `application_steps`, `documents` | Missing entirely | Added |
| Programmes: `field_1:_deadline` | Broken name — CPTUI import collision prefix | Fixed to `application_deadline` |
| Programmes: `duration`, `language`, `partner_institution` | Missing entirely | Added |
| Resources: `download_url` field name | Mismatched plan spec (`file_url`) | Renamed |
| Resources: `document_type` field name | Mismatched (`file_type`), malformed choices (`"PDF, DOCX, Link"` as single option) | Renamed; choices replaced with `PDF`, `DOCX`, `XLS`, `Other` |
| Resources: `audience_notes` | Missing | Added |
| Stories: `testimonial_author` field name | Mismatched (`author`) | Renamed |
| Stories: `study_destination` | Wrong field type and purpose (text instead of date picker for story date) | Replaced with `story_date` (date picker) |
| Stories: `pull_quote` | Missing | Added |
| No global ACF field groups | 5 global groups required for WP Pages | Created all 5 |

### Role 1 — Project Manager / Frontend Lead

Role 1 resolved the WordPress merge, applying all fixes and creating the following files in main:

**Merged to `wordpress/ro.uvt.ri/`:**
- `cptui-export.json` — fixed post type config (4 CPTs)
- `cptui-taxonomies.json` — new taxonomy definitions (4 taxonomies)
- `acf-json/group_6a087f7aa179c.json` — Calls field group (fixed)
- `acf-json/group_6a010285605db.json` — Programme Details field group (fixed)
- `acf-json/group_6a0880749381c.json` — Resource Details field group (fixed)
- `acf-json/group_6a08815042fd6.json` — Story Details field group (fixed)
- `acf-json/group_6b1001a000001.json` — CTA Block (new global group)
- `acf-json/group_6b1001b000002.json` — Process Steps (new global group)
- `acf-json/group_6b1001c000003.json` — FAQ Section (new global group)
- `acf-json/group_6b1001d000004.json` — Contact Card (new global group)
- `acf-json/group_6b1001e000005.json` — Document Repeater (new global group)

Full fix log: `docs/agent_memory/main/13_WP_Merge_Fixes.md`

---

### WordPress Status Summary

| Item | Status |
|------|--------|
| 4 CPTs registered with REST | Done (fixed by Role 1 before merge) |
| `has_archive: true` on all CPTs | Done |
| `excerpt` in supports on all CPTs | Done |
| Taxonomies registered (4) | Done — `cptui-taxonomies.json` created |
| Taxonomies attached to CPTs | Done |
| ACF field groups (4 CPTs) | Done — all field names fixed, missing fields added |
| Global ACF field groups (5) | Done — all 5 created |
| CPTUI import into WordPress | **Pending** — requires admin to import via CPTUI |
| ACF sync into WordPress | **Pending** — requires admin to sync via ACF → Tools |
| Test entries per CPT | **Missing** — no published entries |
| REST endpoint verification | **Pending** — cannot verify until CPTUI/ACF imported |
| `people` CPT | **No decision recorded** |

---

## Open Issues Carrying into Week 5

| # | Issue | Blocks | Owner |
|---|-------|--------|-------|
| 1 | Role 4 color tokens conflict with main branch `index.css` | Visual QA, design consistency | Role 4 + Role 1 decision |
| 2 | CPT API helpers not written | Any page consuming WP content | Role 5 |
| 3 | CPTUI and ACF sync not yet done in WordPress admin | REST endpoint verification, test entries | Role 6 |
| 4 | No test entries in WordPress | API response verification | Role 6 |
| 5 | Full route tree not wired in `App.tsx` | Page navigation | Role 5 |
| 6 | `people` CPT decision not recorded | Backend structure | Role 1 + Role 6 |
| 7 | Vite vs Next.js not formally recorded | `App.tsx` finalization, locale routing | Role 1 |
| 8 | Role 2 `page-template-alignment-feedback.md` not produced | Page template review gated | Role 2 |
| 9 | `/admissions` and `/research` routes in `App.tsx` not in sitemap | Route tree accuracy | Role 1 + Role 5 |
