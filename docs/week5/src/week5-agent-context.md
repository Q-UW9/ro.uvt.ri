# Week 5 Agent Context — RI.UVT.RO Redesign
**For:** AI agents working on this project  
**Updated:** 2026-05-19  
**Beta deadline:** 2026-06-02  
**Current phase:** System Building → Content Integration

---

## What This Project Is

Redesign of the West University of Timișoara International Relations Department website (`ri.uvt.ro`). The new site is a headless WordPress + React (Vite) setup:

- **WordPress (Laragon, local):** Content management, CPTs, ACF fields, REST API source
- **React frontend (Vite + TypeScript + Tailwind):** Fetches from WP REST API, renders with typed templates
- **Repo structure:** `ro.uvt.ri/` in the main project
  - `ro.uvt.ri/frontend/` — React/Vite app
  - `ro.uvt.ri/wordpress/ro.uvt.ri/` — WordPress installation (tracked: wp-content, CPTUI/ACF JSON)
  - `ro.uvt.ri/docs/` — all project documentation

---

## State Entering Week 5

### Frontend — COMPONENT LIBRARY COMPLETE, NOT CONNECTED

The full component library is built and merged to main. Nothing is connected to real data.

**Component inventory (all in `frontend/src/components/`):**

| Tier | Components |
|------|-----------|
| Atoms | `Button`, `Typography`, `Divider`, `Icon`, `LanguageSwitcher` |
| Molecules | `Card`, `SectionHeader` |
| Organisms | `Navbar`, `Footer`, `HeroSection`, `AccordionSection`, `TabsSection`, `DocumentDownloadList`, `ContentSection`, `NewsSection` |
| Templates | `PageLayout`, `ContentGrid`, `PageTransition`, `SectionRenderer`, `HomePageTemplate`, `InnerPageTemplate` |
| Layouts | `Container` (`max-w-[1280px] mx-auto px-6`) |

**Architecture rules enforced (do not violate):**
- No API calls inside components — all fetching lives in `frontend/src/api/wordpress.js`
- No routing inside templates — `App.tsx` handles routing only
- Page files in `src/pages/` own data fetching and pass data to templates as props
- Static mock data lives in `src/data/` until WP API is connected
- Tailwind utility classes only — no separate `.css` files per component (exception: legacy `UnderConstruction.styles.ts`, do not extend this pattern)

**Key props interfaces:**

```ts
// HomePageTemplate
{ heroData: HeroSectionProps, cards: CardProps[], news: NewsItem[] }

// InnerPageTemplate
{
  title: string, subtitle?: string, children: ReactNode,
  accordion?: Array<{ question: string, answer: string }>,
  documents?: Array<{ label: string, url: string, fileType?: string }>
}

// Card
{ title: string, description: string, buttonText?: string, route?: string }

// DocumentDownloadList
{ documents: Array<{ label: string, url: string, fileType?: string }> }
```

**Tokens in `tailwind.config.js`:**
- `uvt-blue: #005BBB` (primary)
- `uvt-navy: #002147` (dark backgrounds)
- `uvt-gold: #F2B705` (accents, underlines)
- `uvt-gray: #F5F5F5` (backgrounds)
- `uvt-white: #FFFFFF`
- Spacing: `section: 6rem`, `container: 1280px`

**OPEN ISSUE — Color conflict:** Role 4 (UI designer) proposed different values (`#003B71`, `#F2C94C`, `#00A86B`). Role 5 built all components against the tokens above. Role 1 must decide which set is canonical before visual QA. Week 5 target: resolved.

### Frontend — WHAT IS NOT DONE

| Item | Status | Unblocked by |
|------|--------|-------------|
| `App.tsx` route tree | Not wired — stubs only (`/` and `/test`) | Role 1 recording Vite/Next.js decision |
| Navbar labels | 4 wrong labels + 2 missing items | No blocker — just needs to be done |
| CPT API helpers | Not written | ACF field names are confirmed (see below) |
| TypeScript types for WP responses | Not created | No blocker |
| Page files (`src/pages/`) | No real pages beyond stub | Needs routes + API helpers first |
| Locale routing (`/ro`, `/en`) | Not started | Role 1 Vite/Next.js decision + Role 4 LanguageSwitcher |
| UVT styling (old site applied) | Not applied | Role 4 must produce styling analysis |

**Navbar corrections required (source: `docs/week4/roles/role2/deliverables/NavigationConsistencyFeedback.md`):**

| Current label | Correct label | Severity |
|---|---|---|
| About | About DRI | Medium |
| Admissions | International Students | Critical |
| Erasmus | Erasmus+ | High |
| Research | Partnerships | Critical |

Missing from Navbar: `Scholarships & Exchanges`, `News`  
Correct full order: About DRI → Erasmus+ → International Students → Scholarships & Exchanges → Partnerships → News → Contact

Routes in `App.tsx` that must be removed (not in sitemap): `/admissions`, `/research`

### API Layer

**File:** `frontend/src/api/wordpress.js`  
**Currently implemented:** `getPosts()`, `getPost(slug)` only  
**Base URL:** `http://ro.uvt.ri.test/wp-json/wp/v2/`

**Helpers required for Week 5:**

```js
getPages()           // GET /wp/v2/pages
getPage(slug)        // GET /wp/v2/pages?slug={slug}
getCalls(params?)    // GET /wp/v2/calls — filter: audience, academic-year
getCall(slug)        // GET /wp/v2/calls?slug={slug}
getProgrammes(params?) // GET /wp/v2/programmes — filter: audience, programme-family
getProgramme(slug)
getResources(params?) // GET /wp/v2/resources — filter: audience, content-topic, academic-year
getResource(slug)
getStories(params?) // GET /wp/v2/stories — filter: audience, content-topic
getStory(slug)
```

**ACF field names (confirmed, do not change — source: `docs/agent_memory/main/13_WP_Merge_Fixes.md` Section 5):**

| CPT | Field key | Field name | Type |
|-----|-----------|------------|------|
| calls | `deadline` | Deadline | date |
| calls | `eligibility` | Eligibility | textarea |
| calls | `application_steps` | Application Steps | repeater |
| calls | `documents` | Documents | repeater (label + file URL) |
| programmes | `duration` | Duration | text |
| programmes | `language` | Language | text |
| programmes | `partner_institution` | Partner Institution | text |
| programmes | `application_deadline` | Application Deadline | date |
| resources | `file_url` | File URL | file |
| resources | `file_type` | File Type | select (PDF, DOCX, XLS, Other) |
| resources | `audience_notes` | Audience Notes | textarea |
| stories | `testimonial_author` | Author | text |
| stories | `story_date` | Story Date | date |
| stories | `pull_quote` | Pull Quote | textarea |

ACF fields appear in REST responses under the `acf` key: `response.acf.deadline`, etc.

### WordPress — CONFIGURED IN REPO, NOT YET LIVE IN ADMIN

**CPTUI and ACF JSON files are in the repo but have NOT been imported into WP admin.** No CPTs are active. No field groups are active. No test entries exist.

**Files to import:**
- CPTUI post types: `wordpress/ro.uvt.ri/cptui-export.json`
- CPTUI taxonomies: `wordpress/ro.uvt.ri/cptui-taxonomies.json`
- ACF field groups: auto-sync from `wordpress/ro.uvt.ri/wp-content/themes/twentytwentyfive/acf-json/` (9 files)

**CPTs that will exist after import:**
- `calls` — slug: `calls`, REST: enabled
- `stories` — slug: `stories`, REST: enabled
- `resources` — slug: `resources`, REST: enabled
- `programmes` — slug: `programmes`, REST: enabled

**Taxonomies:**
- `audience` — attached to all 4 CPTs
- `programme-family` — attached to `programmes`
- `content-topic` — attached to `resources`, `stories`
- `academic-year` — attached to `calls`, `resources`

**Global ACF field groups (for WP Pages):**
- CTA Block, Process Steps, FAQ Section, Contact Card, Document Repeater

**Pending admin decision:** `people` CPT — no decision recorded as of 2026-05-19. Role 1 must decide.

**REST endpoint base:** `http://ro.uvt.ri.test/wp-json/wp/v2/`

### Route Map (full 29-route sitemap)

Source: `docs/week4/roles/role5/addition/react-route-strategy.md`

| Path | Template | Type |
|------|----------|------|
| `/` | `HomePageTemplate` | Mixed |
| `/about` | `InnerPageTemplate` | Static WP Page |
| `/erasmus` | `InnerPageTemplate` | Static WP Page |
| `/erasmus/incoming-students` | `InnerPageTemplate` | Static WP Page |
| `/erasmus/outgoing-students` | `InnerPageTemplate` | Static WP Page |
| `/erasmus/incoming-staff` | `InnerPageTemplate` | Static WP Page |
| `/erasmus/outgoing-staff` | `InnerPageTemplate` | Static WP Page |
| `/erasmus/partner-countries` | `InnerPageTemplate` | Static WP Page |
| `/erasmus/cooperation-projects` | `InnerPageTemplate` | Static WP Page |
| `/international-students` | `InnerPageTemplate` | Static WP Page |
| `/international-students/non-eu` | `InnerPageTemplate` | Static WP Page |
| `/international-students/eu` | `InnerPageTemplate` | Static WP Page |
| `/international-students/ukraine` | `InnerPageTemplate` | Static WP Page |
| `/international-students/refugees` | `InnerPageTemplate` | Static WP Page |
| `/international-students/preparatory-year` | `InnerPageTemplate` | Static WP Page |
| `/international-students/free-movers` | `InnerPageTemplate` | Static WP Page |
| `/partnerships` | `InnerPageTemplate` | Static WP Page |
| `/news` | `InnerPageTemplate` | WP Posts archive |
| `/calls` | `InnerPageTemplate` | CPT `calls` archive |
| `/calls/:slug` | `InnerPageTemplate` | CPT `calls` single |
| `/stories` | `InnerPageTemplate` | CPT `stories` archive |
| `/stories/:slug` | `InnerPageTemplate` | CPT `stories` single |
| `/resources` | `InnerPageTemplate` | CPT `resources` archive |
| `/resources/:slug` | `InnerPageTemplate` | CPT `resources` single |
| `/programmes` | `InnerPageTemplate` | CPT `programmes` archive |
| `/programmes/:slug` | `InnerPageTemplate` | CPT `programmes` single |
| `/contact` | `InnerPageTemplate` | Static WP Page |
| `/search` | `InnerPageTemplate` | Static |
| `/sitemap` | `InnerPageTemplate` | Static |
| `*` | 404 fallback | — |

### Open Issues (priority order)

| # | Issue | Blocks | Owner | Status |
|---|-------|--------|-------|--------|
| 1 | Vite vs Next.js decision not recorded | App.tsx wiring, locale routing | Role 1 | Unblocked — Role 1 decision only |
| 2 | CPTUI + ACF not imported in WP admin | All REST testing, all page data | Role 6 | Unblocked — admin action only |
| 3 | No test entries in WordPress | API helper testing | Role 6 | Blocked by #2 |
| 4 | CPT API helpers not written | Any dynamic page | Role 5 | Blocked by #3 ideally; can start with structure |
| 5 | Route tree not wired in App.tsx | Page navigation | Role 5 | Blocked by #1 |
| 6 | Navbar labels wrong (4 corrections + 2 missing) | Navigation, visual QA | Role 5 | Unblocked |
| 7 | `/admissions` and `/research` routes in App.tsx (not in sitemap) | Route accuracy | Role 5 | Unblocked |
| 8 | Color token conflict (Role 4 vs main branch) | Visual QA | Role 1 + Role 4 | Unblocked |
| 9 | Role 2 owes 4 stub documents | Template finalization, UX sign-off | Role 2 | Unblocked |
| 10 | `people` CPT decision not recorded | Backend completeness | Role 1 | Unblocked |
| 11 | No UVT styling applied to components | Visual identity, beta readiness | Role 4 | Unblocked |
| 12 | Old site coherence check not done | Missing content/routes may exist | Role 3 | Unblocked |
| 13 | No real content in WP (static pages) | Static page routes render empty | Role 6 + Role 7 | Blocked by #2 |

---

## Open Decisions

### 1. Vite vs Next.js (CRITICAL — must resolve Day 1)

`docs/agent_memory/main/03_Frontend_Architecture.md` says Next.js 14. The actual project uses Vite + React Router DOM v7. These are incompatible. Role 1 must record the decision in that file. The entire route wiring and locale routing strategy depends on this.

**Expected answer:** Stay on Vite. The scaffold is too advanced to migrate.

### 2. `people` CPT

No decision recorded. A `people` CPT would store staff profiles. If approved, Role 6 adds it to CPTUI and Role 5 adds API helpers and a page template. If not approved, close the issue.

### 3. Locale routing scope for beta

The full locale routing (`/ro`, `/en` prefix) is in the plan but adds significant complexity. Role 1 should decide whether locale routing is required for the June 2 beta or deferred to post-beta.

### 4. UVT color tokens (canonical values)

Role 4 proposed `#003B71` / `#F2C94C` / `#00A86B`. Main branch has `#005BBB` / `#F2B705` / `#002147`. Role 4's old-site analysis in Week 5 should resolve this. If they match the main branch values, keep them. If the old site clearly uses different values, Role 1 makes the call on update vs keep. All components currently use the main branch values — changing them is a tailwind.config.js edit and all components rerender automatically.

---

## Team Reliability Context

This context is relevant when deciding how much to assume about each role's output.

| Role | Reliability | Notes |
|------|-------------|-------|
| Role 1 | High | PM, does final merges and fixes. Acts as safety net. |
| Role 2 | High | Owes 4 documents from Week 4. Good worker when engaged. |
| Role 3 | Medium | Busy. Contained async tasks only. Do not put on critical path. |
| Role 4 | Low | History of late/incomplete delivery. Assigned one well-scoped task with backup (Role 1 applies fix if missed). |
| Role 5 | Very High | Lead frontend. Put on critical path tasks. |
| Role 6 | Medium-High | WP end. No known issues. Admin imports are manual — must confirm done. |
| Role 7 | Unknown | Assigned content entry — non-technical, verifiable output. |
| Role 8 | High | API/React data layer. Works after Role 5 delivers helpers. |

**When an agent generates tasks or PRs:** Default to assuming Role 5 and Role 8 output is correct and testable. Treat Role 4 output as requiring verification — always check the component renders correctly before merging. Treat Role 6's admin actions as requiring REST endpoint verification before trusting API helper results.

---

## Key File Locations

| Purpose | Path |
|---------|------|
| Frozen ACF field names | `docs/agent_memory/main/13_WP_Merge_Fixes.md` Section 5 |
| Full 29-route map + App.tsx structure | `docs/week4/roles/role5/addition/react-route-strategy.md` |
| Component inventory + props interfaces | `docs/week4/roles/role5/addition/component-architecture-week4.md` |
| Template data interfaces | `docs/week4/roles/role5/addition/page-template-planning.md` |
| Navbar label corrections | `docs/week4/roles/role2/deliverables/NavigationConsistencyFeedback.md` |
| Sitemap | `docs/agent_memory/main/01_Sitemap.md` |
| User flows | `docs/agent_memory/main/02_User_Flows.md` |
| Frontend architecture | `docs/agent_memory/main/03_Frontend_Architecture.md` |
| WordPress content model | `docs/agent_memory/main/06_WordPress_Content_Model.md` |
| API contract | `docs/agent_memory/main/07_API_Contract.md` |
| Project status (end of Week 4) | `docs/agent_memory/main/11_Project_Status.md` |
| API layer | `frontend/src/api/wordpress.js` |
| Router | `frontend/src/App.tsx` |
| Tailwind tokens | `frontend/tailwind.config.js` |
| Global CSS | `frontend/src/index.css` |
| CPTUI export | `wordpress/ro.uvt.ri/cptui-export.json` |
| CPTUI taxonomies | `wordpress/ro.uvt.ri/cptui-taxonomies.json` |
| ACF JSON field groups | `wordpress/ro.uvt.ri/wp-content/themes/twentytwentyfive/acf-json/` |

---

## Beta MVP Scope (minimum for 2 June)

The following are required for beta. Everything else is a nice-to-have.

**Must work:**
- Homepage with real data (hero + news feed)
- Erasmus landing and at least 2 sub-pages
- International Students landing
- Calls archive + at least 1 call detail page
- Resources archive + at least 1 resource detail page
- About and Contact pages
- Navbar with correct labels and working links
- UVT styling on Navbar, HeroSection, Card, SectionHeader
- No JavaScript errors in console on any working page
- 404 fallback route

**Not required for beta:**
- Locale routing (`/ro`, `/en`)
- Full content on all 29 routes
- Visual QA pass on all components
- `people` CPT (unless approved)
- Search page
- Sitemap page

---

## How to Pick Up Work as an Agent

1. Check `docs/agent_memory/main/11_Project_Status.md` for current project state.
2. Check the open issues table above — find the highest-priority unblocked item.
3. Read the relevant addition docs in `docs/week4/roles/role5/addition/` before touching frontend code.
4. Check `13_WP_Merge_Fixes.md` Section 5 for field names before writing any WP API code.
5. Run `npm run dev` in `frontend/` to start the dev server.
6. WP admin is at `http://ro.uvt.ri.test/wp-admin/`.
7. Do not commit WordPress core files. The `.gitignore` in `ro.uvt.ri/` is the reference.
