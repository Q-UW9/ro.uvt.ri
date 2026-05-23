# Route Hierarchy Corrections

**Document type:** UX Review — Carry-over from Week 3  
**Author:** Role 2 — UX Researcher + Frontend Contributor  
**Sources reviewed:** `docs/week4/roles/role5/addition/react-route-strategy.md` against `docs/agent_memory/main/01_Sitemap.md`  
**Status:** Two corrections required, one pending decision, one missing route

---

## Summary

The route map in `react-route-strategy.md` is largely correct and well-structured. All top-level sitemap routes are present. Nesting is correct for Erasmus and International Students sub-routes. Three issues are identified: two routes in the current `App.tsx` that do not exist in the approved sitemap and must be removed, one route that is missing from both documents, and one redirect that is not yet defined.

---

## Route Coverage Check

### Top-level routes

| Sitemap route | In react-route-strategy.md | Status |
|---|---|---|
| `/` | ✅ | Correct |
| `/about` | ✅ | Correct |
| `/erasmus` | ✅ | Correct |
| `/international-students` | ✅ | Correct |
| `/programmes` | ✅ | Correct |
| `/partnerships` | ✅ | Correct |
| `/calls` | ✅ | Correct |
| `/stories` | ✅ | Correct |
| `/news` | ✅ | Correct |
| `/resources` | ✅ | Correct |
| `/contact` | ✅ | Correct |
| `/search` | ✅ | Correct |
| `/sitemap` | ✅ | Correct |

All 13 top-level sitemap routes are present.

### Erasmus sub-routes

| Sitemap route | In react-route-strategy.md | Status |
|---|---|---|
| `/erasmus/incoming-students` | ✅ | Correct |
| `/erasmus/outgoing-students` | ✅ | Correct |
| `/erasmus/incoming-staff` | ✅ | Correct |
| `/erasmus/outgoing-staff` | ✅ | Correct |
| `/erasmus/partner-countries` | ✅ | Correct |
| `/erasmus/cooperation-projects` | ✅ | Correct |

All 6 Erasmus sub-routes are present and correctly nested.

### International Students sub-routes

| Sitemap route | In react-route-strategy.md | Status |
|---|---|---|
| `/international-students/non-eu` | ✅ | Correct |
| `/international-students/eu` | ✅ | Correct |
| `/international-students/ukraine` | ✅ | Correct |
| `/international-students/refugees` | ✅ | Correct |
| `/international-students/preparatory-year` | ✅ | Correct |
| `/international-students/free-movers` | ✅ | Correct |

All 6 International Students sub-routes are present and correctly nested.

### CPT archive and detail routes

| Route | In react-route-strategy.md | Status |
|---|---|---|
| `/calls` | ✅ | Correct |
| `/calls/:slug` | ✅ | Correct |
| `/stories` | ✅ | Correct |
| `/stories/:slug` | ✅ | Correct |
| `/resources` | ✅ | Correct |
| `/resources/:slug` | ✅ | Correct |
| `/programmes` | ✅ | Correct |
| `/programmes/:slug` | ✅ | Correct |

All CPT routes are present with correct slug params.

---

## Corrections Required

### Correction 1 — Remove `/admissions` from App.tsx

**Severity:** High  
**Issue:** The current `App.tsx` contains a route for `/admissions`. This route does not exist in `01_Sitemap.md`. The correct route is `/international-students`. Leaving `/admissions` live creates a dead-end page that users may land on from old bookmarks or external links, and it contradicts the approved sitemap.  
**Action for Role 5:** Remove the `/admissions` route from `App.tsx`. If any internal links point to `/admissions`, redirect them to `/international-students` (see Correction 3 below).  
**Blocking:** Yes — this route should not be present in the beta build.

### Correction 2 — Remove `/research` from App.tsx

**Severity:** High  
**Issue:** The current `App.tsx` contains a route for `/research`. This route does not exist in `01_Sitemap.md`. The correct route is `/partnerships`. Leaving `/research` live has the same problem as `/admissions` — it is a dead end that contradicts the approved sitemap and breaks the partner institution user journey.  
**Action for Role 5:** Remove the `/research` route from `App.tsx`. If any internal links point to `/research`, redirect them to `/partnerships`.  
**Blocking:** Yes — this route should not be present in the beta build.

### Correction 3 — Add redirects for removed routes

**Severity:** Medium  
**Issue:** Removing `/admissions` and `/research` without redirects will cause 404 errors for any user who has bookmarked these URLs or arrives via an external link. The old ri.uvt.ro site uses these label structures, so external links may exist.  
**Action for Role 5:** Add the following redirects in `App.tsx`:

```tsx
import { Navigate } from 'react-router-dom'

// Inside <Routes>:
<Route path="/admissions" element={<Navigate to="/international-students" replace />} />
<Route path="/research"   element={<Navigate to="/partnerships" replace />} />
```

Place these before the `*` 404 fallback route.  
**Blocking:** No — but should be included in the same PR as the route removal.

### Correction 4 — `/scholarships` route is missing from both documents

**Severity:** Medium  
**Issue:** The approved top-level navigation model (Role 2, Week 2) includes `Scholarships & Exchanges` as item 4 in the main menu. Neither `01_Sitemap.md` nor `react-route-strategy.md` includes a `/scholarships` or `/scholarships-exchanges` route. This means the Navbar will have a link with no destination.  
**Action for Role 1:** Decide the route path for Scholarships & Exchanges and add it to `01_Sitemap.md`.  
**Action for Role 5:** Once Role 1 confirms the path, add the route to `App.tsx` as a static `InnerPageTemplate` route. Until then, the Navbar link should point to `#` as a placeholder.  
**Blocking:** No — but must be resolved before beta.

---

## Route Nesting — Confirmed Correct

The flat route structure used in `react-route-strategy.md` (all routes as siblings inside `<Routes>`, not using nested `<Route>` with `<Outlet>`) is correct for this project's template model. `InnerPageTemplate` wraps its own `Navbar` and `Footer` via `PageLayout`, so React Router outlet nesting is not needed. This is the right call.

---

## 404 Fallback — Confirmed Correct

The `<Route path="*" element={<NotFoundPage />} />` catch-all is present and placed last. This is correct.

---

## References

- Role 5, Week 4: `react-route-strategy.md`
- `docs/agent_memory/main/01_Sitemap.md`
- Role 2, Week 2: *User Flows and Navigation Model* — Section 3: Navigation Model, Table 1
