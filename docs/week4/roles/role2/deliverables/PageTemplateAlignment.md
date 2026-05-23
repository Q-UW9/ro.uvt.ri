# Page Template Alignment Feedback

**Document type:** UX Review — Carry-over from Week 3  
**Author:** Role 2 — UX Researcher + Frontend Contributor  
**Source reviewed:** `docs/week4/roles/role5/addition/page-template-planning.md`  
**Status:** Approved with notes — see gaps below

---

## Summary

Both templates (`HomePageTemplate` and `InnerPageTemplate`) are structurally sound and cover the majority of user journeys documented in the Week 2 User Flows and Navigation Model. The prop interfaces are well-defined, the data ownership model (page files fetch, templates render) is correct, and the layout decisions are consistent with the approved navigation model.

Two structural gaps and two usability concerns are noted below. None block the build, but two items should be addressed before CPT detail pages go live.

---

## Template 1 — HomePageTemplate

### Coverage assessment

| User journey | Covered by template | Notes |
|---|---|---|
| Incoming Erasmus Student | ✅ | Audience card + NewsSection covers entry point |
| Outgoing UVT Student | ✅ | Audience card present |
| International Applicant (Non-EU / EU) | ✅ | Audience card present |
| Applicant from Ukraine | ⚠️ | No dedicated card — absorbed into International Students card |
| Refugee / Asylum Seeker | ⚠️ | No dedicated card — absorbed into International Students card |
| Academic Staff | ✅ | Staff Mobility card present |
| International Partner Institution | ✅ | Covered via NewsSection or cards |

### Gap 1 — Ukraine and Refugee journeys have no direct homepage entry point

**Severity:** Medium  
**Issue:** The Week 2 user flows for *Applicant from Ukraine* and *Refugee / Asylum Seeker* both begin at the homepage and expect a visible shortcut to their specific sub-page. The current `ContentGrid` of 3 audience cards does not include these groups — they are absorbed under a generic "International Students" card which links to `/international-students/`, adding one extra click before these users reach relevant content.  
**Recommendation:** Either expand the card grid to 5 columns (adding Ukraine and Refugees as separate cards), or add a secondary quick-access strip below the main card grid specifically for these two audiences. This matches the "Homepage quick-access links" model from the Week 2 navigation model.  
**Blocking:** No — template can ship as-is. Resolve before Week 6 content population.

### Gap 2 — No `Scholarships & Exchanges` entry point on homepage

**Severity:** Low  
**Issue:** The approved top-level navigation includes `Scholarships & Exchanges` as item 4. The homepage template has no card or quick-access link pointing to this section.  
**Recommendation:** Add a card or link for Scholarships & Exchanges in the homepage grid once the route is confirmed by Role 1.  
**Blocking:** No.

### Confirmed correct

- Full-width hero with no container is correct — matches the approved layout.
- `ContentGrid columns={3}` is appropriate for the initial card set.
- `NewsSection` placement at the bottom is correct per the navigation model.
- Static hero props until WP Page API is live is the right interim approach.

---

## Template 2 — InnerPageTemplate

### Coverage assessment

| User journey | Covered by template | Notes |
|---|---|---|
| Incoming Erasmus Student | ✅ | `/erasmus/incoming-students` → InnerPageTemplate |
| Outgoing UVT Student | ✅ | `/erasmus/outgoing-students` → InnerPageTemplate |
| International Applicant (Non-EU) | ✅ | `/international-students/non-eu` → InnerPageTemplate |
| International Applicant (EU) | ✅ | `/international-students/eu` → InnerPageTemplate |
| Applicant from Ukraine | ✅ | `/international-students/ukraine` → InnerPageTemplate |
| Refugee / Asylum Seeker | ✅ | `/international-students/refugees` → InnerPageTemplate |
| Academic Staff | ✅ | `/erasmus/incoming-staff` + `/erasmus/outgoing-staff` → InnerPageTemplate |
| International Partner Institution | ✅ | `/partnerships` → InnerPageTemplate |

All 8 user journeys reach their destination via InnerPageTemplate. Coverage is complete.

### Gap 3 — No breadcrumb navigation

**Severity:** High  
**Issue:** InnerPageTemplate has no breadcrumb organism. Users landing on nested routes (e.g. `/erasmus/incoming-students`) have no way to navigate back to the parent section (`/erasmus`) without using the browser back button or the top-level Navbar. This affects all 8 user journeys — every journey involves at least one nested route.  
**Recommendation:** Add a `Breadcrumb` organism above `SectionHeader` in InnerPageTemplate. The breadcrumb should be generated from the route path. This is particularly important for mobile users where the full Navbar may be collapsed.  
**Blocking:** No — but this should be scoped for Week 6 before beta.

### Gap 4 — `DocumentDownloadList` prop name mismatch noted in source

**Severity:** High  
**Issue:** The template planning doc flags that `DocumentDownloadList` currently uses `title`/`fileUrl` props but the template interface expects `label`/`url`/`fileType`. This mismatch will cause CPT detail pages for `calls` and `resources` to break at runtime.  
**Recommendation:** Role 5 must update `DocumentDownloadList` to match the `label`/`url`/`fileType` interface before any CPT detail page is wired to real data. This is a build prerequisite, not a UX issue.  
**Blocking:** Yes — for CPT detail pages only.

### Confirmed correct

- Optional rendering of `AccordionSection` and `DocumentDownloadList` (only when props are non-empty) is correct.
- All content inside `Container` with consistent max-width is correct.
- No fetching inside the template is correct — data ownership model is sound.
- `children` as a `ReactNode` for WP content is the right approach.

---

## Overall Verdict

Both templates are approved to build. The three non-blocking gaps (Ukraine/Refugee homepage entry, Scholarships card, breadcrumb) should be tracked as open issues for Week 6. The `DocumentDownloadList` prop mismatch (Gap 4) must be fixed before CPT detail pages are wired.

---

## References

- Role 5, Week 4: `page-template-planning.md`
- Role 2, Week 2: *User Flows and Navigation Model* — Section 2 (8 user flows), Section 3 (navigation model)
