# React Route Strategy

**File:** `docs/react-route-strategy.md`  
**Author:** Role 5 — React Developer  
**Week:** 4  
**Status:** Ready for Role 1 review

---

## Architecture Decision: Vite + React Router (not Next.js)

The `docs/agent_memory/main/03_Frontend_Architecture.md` document specifies Next.js 14,
but the actual project uses **Vite + React + React Router DOM v7**. This is confirmed by
`frontend/package.json` — there is no Next.js dependency anywhere in the project.

**Decision required from Role 1:** Formally record whether the project stays on
Vite + React Router or migrates to Next.js. The route tree below is written for
**Vite + React Router** (the current reality). Locale routing strategy also depends
on this decision — do not implement it until Role 1 records the answer.

---

## Route Map

Every route from `docs/agent_memory/main/01_Sitemap.md` is mapped below.

| Path | Type | Template | Slug param | Notes |
|------|------|----------|------------|-------|
| `/` | Mixed | HomePageTemplate | — | Static hero shell + dynamic CPT featured blocks |
| `/about` | Static | InnerPageTemplate | — | WP Page |
| `/erasmus` | Mixed | InnerPageTemplate | — | Landing page with links to nested routes |
| `/erasmus/incoming-students` | Static | InnerPageTemplate | — | WP Page |
| `/erasmus/outgoing-students` | Static | InnerPageTemplate | — | WP Page |
| `/erasmus/incoming-staff` | Static | InnerPageTemplate | — | WP Page |
| `/erasmus/outgoing-staff` | Static | InnerPageTemplate | — | WP Page |
| `/erasmus/partner-countries` | Static | InnerPageTemplate | — | WP Page |
| `/erasmus/cooperation-projects` | Static | InnerPageTemplate | — | WP Page |
| `/international-students` | Static | InnerPageTemplate | — | WP Page (landing) |
| `/international-students/non-eu` | Static | InnerPageTemplate | — | WP Page |
| `/international-students/eu` | Static | InnerPageTemplate | — | WP Page |
| `/international-students/ukraine` | Static | InnerPageTemplate | — | WP Page |
| `/international-students/refugees` | Static | InnerPageTemplate | — | WP Page |
| `/international-students/preparatory-year` | Static | InnerPageTemplate | — | WP Page |
| `/international-students/free-movers` | Static | InnerPageTemplate | — | WP Page |
| `/partnerships` | Static | InnerPageTemplate | — | WP Page |
| `/news` | Dynamic list | InnerPageTemplate | — | WP Posts archive |
| `/calls` | Dynamic list | InnerPageTemplate | — | CPT `call` archive |
| `/calls/:slug` | Dynamic detail | InnerPageTemplate | `:slug` | Single call entry |
| `/stories` | Dynamic list | InnerPageTemplate | — | CPT `story` archive |
| `/stories/:slug` | Dynamic detail | InnerPageTemplate | `:slug` | Single story entry |
| `/resources` | Dynamic list | InnerPageTemplate | — | CPT `resource` archive |
| `/resources/:slug` | Dynamic detail | InnerPageTemplate | `:slug` | Single resource entry |
| `/programmes` | Dynamic list | InnerPageTemplate | — | CPT `programme` archive |
| `/programmes/:slug` | Dynamic detail | InnerPageTemplate | `:slug` | Single programme entry |
| `/contact` | Static | InnerPageTemplate | — | WP Page |
| `/search` | Static | InnerPageTemplate | — | Search results page |
| `/sitemap` | Static | InnerPageTemplate | — | HTML sitemap |
| `*` | — | — | — | 404 fallback |

---

## App.tsx Structure (Vite + React Router)

```tsx
<BrowserRouter>
  <Routes>

    {/* Home */}
    <Route path="/" element={<HomePage />} />

    {/* Static top-level pages */}
    <Route path="/about"         element={<AboutPage />} />
    <Route path="/partnerships"  element={<PartnershipsPage />} />
    <Route path="/contact"       element={<ContactPage />} />
    <Route path="/search"        element={<SearchPage />} />
    <Route path="/sitemap"       element={<SitemapPage />} />

    {/* Erasmus — nested */}
    <Route path="/erasmus"                            element={<ErasmusPage />} />
    <Route path="/erasmus/incoming-students"          element={<ErasmusIncomingStudentsPage />} />
    <Route path="/erasmus/outgoing-students"          element={<ErasmusOutgoingStudentsPage />} />
    <Route path="/erasmus/incoming-staff"             element={<ErasmusIncomingStaffPage />} />
    <Route path="/erasmus/outgoing-staff"             element={<ErasmusOutgoingStaffPage />} />
    <Route path="/erasmus/partner-countries"          element={<ErasmusPartnerCountriesPage />} />
    <Route path="/erasmus/cooperation-projects"       element={<ErasmusCooperationProjectsPage />} />

    {/* International Students — nested */}
    <Route path="/international-students"                       element={<IntlStudentsPage />} />
    <Route path="/international-students/non-eu"               element={<IntlNonEuPage />} />
    <Route path="/international-students/eu"                   element={<IntlEuPage />} />
    <Route path="/international-students/ukraine"              element={<IntlUkrainePage />} />
    <Route path="/international-students/refugees"             element={<IntlRefugeesPage />} />
    <Route path="/international-students/preparatory-year"     element={<IntlPreparatoryPage />} />
    <Route path="/international-students/free-movers"          element={<IntlFreeMoversPage />} />

    {/* News */}
    <Route path="/news" element={<NewsPage />} />

    {/* CPT archives + detail */}
    <Route path="/calls"           element={<CallsPage />} />
    <Route path="/calls/:slug"     element={<CallDetailPage />} />

    <Route path="/stories"         element={<StoriesPage />} />
    <Route path="/stories/:slug"   element={<StoryDetailPage />} />

    <Route path="/resources"       element={<ResourcesPage />} />
    <Route path="/resources/:slug" element={<ResourceDetailPage />} />

    <Route path="/programmes"      element={<ProgrammesPage />} />
    <Route path="/programmes/:slug" element={<ProgrammeDetailPage />} />

    {/* 404 */}
    <Route path="*" element={<NotFoundPage />} />

  </Routes>
</BrowserRouter>
```

---

## Organisms Used Per Template

### HomePageTemplate
- `Navbar`
- `HeroSection`
- `SectionRenderer` (renders hero data from `homePageData`)
- `ContentGrid` with `Card` components (audience shortcuts)
- `NewsSection`
- `Footer`

### InnerPageTemplate
- `Navbar`
- `SectionHeader` (renders page title + subtitle)
- main content area (WP page content or CPT entry body)
- optionally: `AccordionSection` (FAQ-style pages)
- optionally: `DocumentDownloadList` (call and resource detail pages)
- `Footer`

---

## Locale Routing (Pending Role 1 Decision)

If the project **stays on Vite + React Router**, locale routing will be implemented
as a nested route wrapper:

```tsx
<Route path="/:locale" element={<LocaleLayout />}>
  <Route index element={<HomePage />} />
  <Route path="about" element={<AboutPage />} />
  {/* ... all other routes nested here */}
</Route>
```

`LocaleLayout` reads `useParams().locale`, validates it against `['ro', 'en']`,
redirects to `/ro` if missing or invalid, and provides locale context to children.

**Do not implement this until Role 1 confirms Vite stays and Role 4 delivers
`LanguageSwitcher`.**

---

## Notes

- Route paths use kebab-case throughout, matching WP page slugs directly.
- All CPT detail routes use `:slug` — pages fetch by slug from `api/wordpress.js`.
- The existing `App.tsx` has `/admissions` and `/research` routes that do not
  exist in `01_Sitemap.md`. These should be removed or renamed to match the sitemap.
  Confirm with Role 1 before deleting.
- One page file per route lives in `src/pages/`. Page files handle data fetching
  and pass data down as props — no inline fetching in JSX or inside templates.
