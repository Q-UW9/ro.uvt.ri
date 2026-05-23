# Role 2 — UX Researcher / Frontend Contributor
## Week 4 Summary

---

## What was done this week

### Navigation Consistency Review — Complete

Reviewed the `Navbar.tsx` component built by Role 5 against the approved navigation model from Week 2. Identified four label mismatches that must be corrected before the Navbar is used in any visual QA or user testing.

**Label corrections required:**

| Current label | Correct label | Severity | Route |
|---|---|---|---|
| About | **About DRI** | Medium | `/about/` |
| Admissions | **International Students** | Critical | `/international-students/` |
| Erasmus | **Erasmus+** | High | `/erasmus/` |
| Research | **Partnerships** | Critical | `/partnerships/` |
| Contact | Contact ✓ | — | No change needed |

**Rationale highlights:**
- *"Admissions"* is the wrong term — DRI does not run university admissions. This section serves incoming international students. Using the wrong label breaks their user journey.
- *"Research"* does not exist as a DRI function. Partner institutions looking for bilateral agreements will skip past it. This directly breaks the partner institution flow from Week 2.
- *"Erasmus+"* is the programme's legal name — the plus sign is not optional.

**Full correct top-level menu order:**

> About DRI → Erasmus+ → International Students → Scholarships & Exchanges → Partnerships → News → Contact

`Scholarships & Exchanges` and `News` are also missing from the current Navbar and must be added as placeholder links.

---

## Deliverables status

| Document | Status |
|----------|--------|
| `NavigationConsistencyFeedback.md` | ✅ Complete |
| `PageTemplateAlignment.md` | ❌ Not delivered |
| `RouteHierarchyCorrections.md` | ❌ Not delivered |
| `UX Validation.md` | ❌ Not delivered |
| `WordPressStructureUserFlow.md` | ❌ Not delivered |

---

## Carrying into Week 5

The four missing documents are outstanding. Role 5's `page-template-planning.md` explicitly gates template finalization on `PageTemplateAlignment.md` being delivered. These are the Week 5 priority for Role 2:

1. `PageTemplateAlignment.md` — review Role 5's template specs against UX flows
2. `RouteHierarchyCorrections.md` — validate route tree against sitemap and user journeys
3. `WordPressStructureUserFlow.md` — confirm WP page structure supports each user flow
4. `UX Validation.md` — overall UX sign-off on Week 4 frontend output
