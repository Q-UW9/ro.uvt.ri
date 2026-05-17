# Role 1 — Week 4 Plan
**Role:** Project Manager + Frontend Lead  
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
| `[~]` | Partial |

---

## Context Entering Week 4

Role 1 successfully executed the Week 3 merge, produced the version report, merge plan, and developer sync guide, and committed both plugins to the tracked WordPress location. However, three required standalone deliverables were not produced: the frontend strategy validation document, the reuse and naming standards document, and the coordination notes document.

Additionally, Role 1 must resolve the **Vite vs Next.js** architectural conflict before any route work begins in Week 4. The original architecture spec (`03_Frontend_Architecture.md`) requires Next.js 14, but the actual project uses Vite + React Router. These are incompatible — a decision must be made and recorded this week.

**What is in main entering Week 4:**
- Full component library (Button, Typography, Card, SectionHeader, Navbar, Footer, HeroSection, AccordionSection, TabsSection, PageLayout, ContentGrid, Container)
- Two routes: `/` (UnderConstruction) and `/test` (TestPage)
- API stub: `getPosts()` and `getPost(slug)` only
- ACF and CPTUI plugins present in `wp-content/plugins/` — not activated, no CPTs configured

---

## Priority Order This Week

```
1. Resolve Vite vs Next.js — unblocks Role 5 route work
2. Produce W3 carry-over documentation
3. System coordination and cross-role validation
4. Produce Week 4 supervision and standards documents
```

Do not let Role 5 build the locale routing or full route tree until the Vite vs Next.js decision is recorded. That decision changes the implementation approach entirely.

---

## Week 3 Carry-Overs — Priority Zero

These were required in Week 3 and were not delivered. Produce them before any other Week 4 tasks.

### [W3] Frontend Strategy Validation Document

**File:** `docs/frontend-strategy-validation.md`

Produce a standalone document confirming that the component architecture aligns with:
- The sitemap (`01_Sitemap.md`)
- The user flows (`02_User_Flows.md`)
- The navigation model from the architecture document
- The route structure Role 5 will produce

This cannot remain embedded in change reports. It must be a dedicated document that Role 2 can review and Role 5 can build against.

### [W3] Reuse and Naming Standards Document

**File:** `docs/reuse-and-naming-standards.md`

Extract and consolidate the naming rules currently scattered across `15_Developer_Sync_Guide.md` and other change documents. Cover:

- Component naming convention (PascalCase, folder-per-component) — confirm and document
- File naming convention (`.tsx` for components, `.js` for API helpers)
- Which components are global (shared) vs page-specific — confirm all current components are global
- Import path conventions
- Tailwind class organisation rules
- Prop naming patterns (e.g. `children`, `className`, `variant`)
- When to build a new component vs extend an existing one
- Rules for not fetching data inside presentational components

### [W3] Resolve Vite vs Next.js

**Action:** Call a decision with the team and record it in `03_Frontend_Architecture.md`.

Options:
1. **Stay on Vite + React Router** — update `03_Frontend_Architecture.md` to reflect Vite. Add note that locale routing will use React Router's nested route pattern, not Next.js's `app/` directory.
2. **Migrate to Next.js** — role 5 rewrites the scaffold. This is a significant effort and delays Week 4 implementation.

The gap report confirms the current code is on Vite. Unless there is a specific reason to migrate (e.g. SSR requirement), staying on Vite is the lower-risk path. Document whichever decision is made.

---

## Week 4 System Coordination Tasks

These run throughout the week alongside the carry-over documents.

### Cross-Role Consistency Validation

- [ ] Validate consistency between frontend routes and WordPress structure — **blocked until Role 5 produces a route strategy and Role 6 produces backend assumptions**.
- [ ] Validate consistency between component architecture and user flows — **blocked until Role 2 produces UX validation notes**.
- [ ] Confirm that the component set built in Week 3 covers all content patterns in the sitemap — review against `01_Sitemap.md` and `05_Route_Component_Map.md`.
- [ ] Confirm that no page-specific components have been introduced prematurely.

### Communication and Sequencing

- [ ] Coordinate with Role 6 to ensure carry-over backend docs are produced before Role 5 writes CPT API helpers.
- [ ] Coordinate with Role 2 to schedule UX review of the Week 3 component output — this is overdue and blocks further implementation validation.
- [ ] Confirm with Role 1 + Role 5 whether `people` CPT is needed (Role 6 is waiting on this decision).
- [ ] Ensure Role 4 produces the design system document before any further visual implementation proceeds.

### Implementation Standards

- [ ] Ensure architecture remains aligned with accessibility goals — WCAG 2.1 AA minimum.
- [ ] Ensure architecture remains aligned with multilingual routing — confirm strategy with Role 5 once Vite vs Next.js is resolved.
- [ ] Ensure architecture remains aligned with REST API structure — confirm with Role 6 once CPT endpoints are registered.
- [ ] Ensure architecture remains aligned with long-term maintainability — no page-specific hacks.

### Sequencing Enforcement

- [x] Atoms before molecules — confirmed in existing code.
- [x] Molecules before organisms — confirmed.
- [x] Templates before pages — confirmed; no real pages built yet.
- [ ] Prevent premature page-specific implementation — enforce this as Week 4 routes are added.
- [ ] Ensure API helpers are not used directly inside presentational components.

---

## Week 4 Deliverables

### New Documents to Produce

| File | Contents | Priority |
|------|----------|----------|
| `docs/frontend-strategy-validation.md` | Component architecture validation against sitemap and user flows | **W3 carry-over** |
| `docs/reuse-and-naming-standards.md` | Consolidated naming and reuse rules | **W3 carry-over** |
| `docs/week4/role1/role1-week4-supervision-notes.md` | Weekly implementation supervision record | Week 4 new |
| `docs/accessibility-implementation-standards.md` | WCAG targets, focus rules, contrast ratios (co-authored with Role 4) | Week 4 new |

### Updates to Existing Documents

| File | Change |
|------|--------|
| `docs/agent_memory/03_Frontend_Architecture.md` | Record Vite vs Next.js decision |
| `docs/agent_memory/10_Project_Rules.md` | Sync with reuse and naming standards document |

---

## Deliverables Checklist

### Week 3 carry-overs

- [W3] [ ] `frontend-strategy-validation.md` — standalone document, not embedded in change reports
- [W3] [ ] `reuse-and-naming-standards.md` — consolidated, not distributed across sync guides
- [W3] [ ] Vite vs Next.js decision recorded in `03_Frontend_Architecture.md`

### Week 4 implementation deliverables

- [ ] Week 4 supervision notes — record of cross-role decisions made during the week
- [ ] Frontend consistency validation — routes vs sitemap vs WP structure confirmed
- [ ] Accessibility implementation standards document — WCAG 2.1 AA targets, focus states, contrast requirements
- [ ] Coordination complete: Role 2 has started UX review; Role 5 has a route strategy; Role 6 has carry-over docs started
- [ ] `people` CPT decision recorded

---

## Dependencies This Week

| Role | What Role 1 needs from them | When |
|------|-----------------------------|------|
| Role 2 | UX validation notes for existing components | Start of week — overdue |
| Role 4 | Design system document | Before any further visual implementation |
| Role 5 | React route strategy document | Before route consistency validation |
| Role 6 | `rest-api-exposure-checklist.md`, `wordpress-content-structure-notes.md` | Before backend/frontend consistency check |

| Role | What they need from Role 1 | When |
|------|---------------------------|------|
| Role 5 | Vite vs Next.js decision | Before route work begins |
| Role 6 | `people` CPT confirmation | Before Role 6 creates the CPT |
| Role 4 | Accessibility standards guidance | Before Role 4 completes atom work |
| Role 2 | Component list and context | Before UX review |

---

## Definition of Done — Role 1, Week 4

- [ ] `frontend-strategy-validation.md` committed as a standalone document
- [ ] `reuse-and-naming-standards.md` committed as a standalone document
- [ ] Vite vs Next.js decision recorded in `03_Frontend_Architecture.md`
- [ ] `accessibility-implementation-standards.md` committed
- [ ] All four carry-over tasks (Role 2 UX review, Role 4 design system, Role 5 route strategy, Role 6 backend docs) have been initiated and tracked
- [ ] Week 5 task list drafted based on Week 4 output
