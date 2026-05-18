# Role 2 — Week 4 Plan
**Role:** UX Researcher + Frontend Contributor  
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

---

## Context Entering Week 4

Role 2 produced nothing in Week 3. No files were submitted, no reviews were performed, and no coordination with other roles took place. Every deliverable from Week 3 is now a carry-over.

The consequence is that the entire component library built by Role 5 in Week 3 — Navbar, Footer, HeroSection, Card, AccordionSection, TabsSection, SectionHeader, PageLayout, ContentGrid — has never been validated against user journeys or sitemap requirements. The WordPress backend setup has never been reviewed for user-flow alignment. These validations must happen at the start of Week 4 before any new components or pages are built.

**The gap report flags Role 2's absence as a systemic risk.** No UX validation layer exists anywhere in the project right now.

---

## Priority Order This Week

```
1. Review existing components against sitemap and user journeys (W3 carry-overs)
2. Review WordPress structure assumptions against user flows
3. Produce all five carry-over documents
4. Begin Week 4 ongoing validation as new routes and templates are built
```

All carry-over documents must be produced before Role 5 begins adding real routes. Without UX validation, routes may be structured in a way that does not support the intended user journeys.

---

## Week 3 Carry-Overs — Priority Zero

Review each of the following components from the built library. For each one, check it against `01_Sitemap.md`, `02_User_Flows.md`, and `05_Route_Component_Map.md`. Record findings per component in `ux-validation-week3.md`.

### Component-by-Component Review Tasks

**Navbar** (`organisms/Navbar/Navbar.tsx`)
- [W3] [ ] Verify the 5 nav links match the agreed top-level routes from `01_Sitemap.md`. Current labels: About, Admissions, Erasmus, Research, Contact. The sitemap uses: About, Erasmus, International Students, Partnerships, Contact. Flag the discrepancy.
- [W3] [ ] Check whether a language switcher position is reserved in the Navbar layout.
- [W3] [ ] Check mobile menu — currently a stub button; confirm whether this is acceptable for Week 4.

**Footer** (`organisms/Footer/Footer.tsx`)
- [W3] [ ] Review link structure — does it reflect the information architecture from `01_Sitemap.md`?
- [W3] [ ] Check section groupings match the intended navigation model.

**HeroSection** (`organisms/HeroSection/HeroSection.tsx`)
- [W3] [ ] Verify it surfaces the right entry points for each user type (incoming students, outgoing students, partners, staff).
- [W3] [ ] Check whether audience-first CTAs are present or whether the hero is generic.

**Card + ContentGrid** (`molecules/Card/Card.tsx`, `templates/ContentGrid/ContentGrid.tsx`)
- [W3] [ ] Review whether the card pattern is appropriate for how users browse programmes, calls, and resources.
- [W3] [ ] Check whether ContentGrid handles different column counts needed for different listing types.

**AccordionSection** (`organisms/AccordionSection/AccordionSection.tsx`)
- [W3] [ ] Confirm this is the right pattern for the content types it will hold (FAQs, process steps).
- [W3] [ ] Check whether the single-open behavior is correct or whether multiple panels should be openable simultaneously.

**TabsSection** (`organisms/TabsSection/TabsSection.tsx`)
- [W3] [ ] Confirm this is appropriate for the content that will use it — identify which pages will use tabs.
- [W3] [ ] Check whether tabs work correctly on mobile (horizontal scroll vs stacked).

**Overall component set**
- [W3] [ ] Identify any components that are missing for the agreed content types. Key gaps to check: CTA section component, document download list, contact card, process steps block.
- [W3] [ ] Identify any components that do not fit the agreed structure.

### WordPress Structure Review

- [W3] [ ] Review the planned CPT structure (call, story, resource, programme, people) against the user flows — does each CPT map to a clear user need?
- [W3] [ ] Check whether the taxonomy structure (audience, programme-family, content-topic, academic-year) supports the filtering patterns users will need.
- [W3] [ ] Confirm whether the static vs dynamic content split (WP Pages for evergreen, CPTs for dynamic) aligns with user journey patterns.

---

## Carry-Over Documents to Produce

All five of these were due in Week 3.

### [W3] `ux-validation-week3.md`

Per-component UX review covering all Week 3 built components. For each component:
- Component name and file path
- What it is supposed to do
- Whether it serves its intended purpose based on `02_User_Flows.md`
- Specific issues found (if any)
- Pass / Needs revision verdict

### [W3] `route-hierarchy-corrections.md`

List any corrections needed to the proposed route structure based on user journey analysis. Cross-reference `01_Sitemap.md` and `02_User_Flows.md`. Flag:
- Routes that are missing
- Route groupings that do not match user mental models
- Navigation paths that are too deep or have wrong parent-child relationships

### [W3] `navigation-consistency-feedback.md`

Review the Navbar labels and structure against the sitemap. Specifically flag the mismatch between the current Navbar labels (About, Admissions, Erasmus, Research, Contact) and the sitemap top-level routes. Provide corrected label recommendations.

### [W3] `page-template-alignment-feedback.md`

For each page type in the sitemap (homepage, section landing page, listing page, detail page, contact page), specify:
- What user goal the page must serve
- What components it should contain to serve that goal
- Whether the current template structure (PageLayout + ContentGrid) is sufficient
- What is missing

This document feeds directly into Role 5's InnerPageTemplate and HomePageTemplate work.

### [W3] `wordpress-structure-user-flow-feedback.md`

For Role 6. Review the planned CPT and taxonomy structure from a user perspective:
- Which CPTs are clearly needed and why
- Whether the `people` CPT is necessary for Week 4 or can be deferred (provide UX reasoning)
- Whether the taxonomy filtering model supports how users actually search for programmes and resources
- Any content that is planned as a CPT entry but would be better as a static WP Page, or vice versa

---

## Week 4 Ongoing Validation Tasks

These run throughout the week as Role 5 adds routes and templates.

### Layout and Route Validation

- [ ] Validate each new page route as it is added — does it serve a clear audience and user goal?
- [ ] Ensure homepage entry points remain visible and audience-oriented once HomePageTemplate is built.
- [ ] Verify route clarity — each URL must be self-explanatory to the user.
- [ ] Verify navigation hierarchy — nested routes must reflect information hierarchy, not implementation convenience.

### Component Review (Week 4 new components)

- [ ] Review `DocumentDownloadList` when built — verify it is usable as a workflow, not just a file dump.
- [ ] Review `InnerPageTemplate` when built — check it supports the user's orientation on arrival.
- [ ] Review `HomePageTemplate` when built — verify audience-first entry points are present.
- [ ] Review `Divider`, `Icon`, `LanguageSwitcher` atoms when built by Role 4.

### Accessibility and Mobile

- [ ] Check all reviewed components for keyboard navigation suitability.
- [ ] Verify CTA visibility and contrast in all templates.
- [ ] Review content grouping in listing pages — cards and grids must support scanning, not just reading.
- [ ] Check responsive usability of all organisms on mobile viewport (375px baseline).

---

## Deliverables Checklist

### Week 3 carry-overs (must be completed first)

- [W3] [ ] `ux-validation-week3.md` — per-component review of all Week 3 built components
- [W3] [ ] `route-hierarchy-corrections.md` — corrections to sitemap route structure
- [W3] [ ] `navigation-consistency-feedback.md` — Navbar label and structure corrections
- [W3] [ ] `page-template-alignment-feedback.md` — per-page-type component requirements
- [W3] [ ] `wordpress-structure-user-flow-feedback.md` — CPT and taxonomy review for Role 6

### Week 4 deliverables

- [ ] Mobile usability feedback for Week 4 components
- [ ] CTA and workflow alignment feedback for new templates
- [ ] Ongoing route validation notes as Role 5 adds routes

---

## Dependencies This Week

| Role | What Role 2 needs from them | When |
|------|-----------------------------|------|
| Role 1 | Component list and sitemap context | Immediately — start of week |
| Role 5 | Confirmation of which components are built and stable | Before review starts |
| Role 6 | CPT and taxonomy plan | Before WordPress structure review |

| Role | What they need from Role 2 | When |
|------|---------------------------|------|
| Role 1 | UX validation notes — needed for frontend consistency validation | Start of week |
| Role 5 | Route hierarchy corrections, page-template alignment feedback | Before building InnerPageTemplate and HomePageTemplate |
| Role 6 | WordPress structure user-flow feedback | Before CPT registration begins |
| Role 4 | Wireframe review input — what must the homepage and section pages contain | Before wireframes are produced |

---

## Definition of Done — Role 2, Week 4

- [ ] All five carry-over documents committed to `docs/`
- [ ] Navbar label discrepancy flagged and correction delivered to Role 5
- [ ] `page-template-alignment-feedback.md` delivered to Role 5 before InnerPageTemplate is built
- [ ] `wordpress-structure-user-flow-feedback.md` delivered to Role 6 before CPTs are registered
- [ ] Week 4 new components reviewed as they are built — no unreviewed organism or template merged
