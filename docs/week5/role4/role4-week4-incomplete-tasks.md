# Role 4 — Week 4 Assigned Tasks (Carry-over into Week 5)
**Role:** UI Designer + Frontend Implementer  
**Status as of:** 2026-05-18

---

## Legend

| Mark | Meaning |
|------|---------|
| `[x]` | Done |
| `[~]` | Partial — exists but incomplete or incorrect |
| `[ ]` | Not done — carries into Week 5 |

---

## Group A — Week 3 Carry-overs (were due Week 3, still missing)

- [ ] **`design-system-draft.md`** — formal document covering:
  - Color tokens with hex values, usage rules, and forbidden uses (`uvt-blue: #005BBB`, `uvt-navy: #002147`, `uvt-gold: #F2B705`, `uvt-gray: #F5F5F5`)
  - Typography scale: h1 (48px/700), h2 (36px/700), h3 (24px/600), body (16px/400), caption (14px), button text
  - Spacing system: section padding (96px), container max-width (1280px), card padding, grid gaps
  - Elevation and shadow usage rules
  - Border radius standard values

- [ ] **`typography-spacing-color-rules.md`** — concise reference tables (not prose):
  - Heading scale: variant → px value → Tailwind class → usage context
  - Section padding at desktop / tablet / mobile
  - Color usage: name → hex → use case → forbidden use
  - Link styles: default, hover, visited, focus
  - Mobile spacing overrides (which values change below `md:`)

- [~] **`core-wireframes-notes.md`** — `wireframes.md` was produced but did not cover the detail page layout (single Programme / single Call showing ACF fields). Missing layout:
  - Detail page: Navbar + page title + metadata (deadline, language, ACF fields) + body + AccordionSection for application steps + document list + Footer

---

## Group B — Week 4 Documentation Tasks

- [ ] **`design-token-implementation.md`** — current token audit:
  - Which tokens are in `tailwind.config.js` vs hardcoded in component files
  - Typography scale currently hardcoded in `Typography.tsx` (`text-5xl`, `text-4xl`, `text-2xl`) — needs to move to Tailwind `fontSize` config
  - Card and grid spacing currently ad-hoc — standardise and record

- [ ] **`ui-atoms-checklist.md`** — status table for all 5 atoms:
  - Button: variants, sizes, states
  - Typography: variants
  - Divider: not built
  - Icon: not built
  - LanguageSwitcher: not built

- [ ] **`accessibility-implementation-standards.md`** — WCAG 2.1 AA target, contrast ratios, focus state requirements, touch target minimums (co-author with Role 1)

---

## Group C — Week 4 Implementation Tasks (atoms not built)

- [ ] **Divider atom** (`components/atoms/Divider/Divider.tsx`)
  - Props: `variant` (solid / dashed), `className`
  - Use Tailwind border color consistent with design system

- [ ] **Icon atom** (`components/atoms/Icon/Icon.tsx`)
  - Props: `name`, `size` (sm / md / lg), `className`
  - Decide on icon library (Heroicons recommended)
  - `aria-hidden` when decorative, `aria-label` when meaningful

- [ ] **LanguageSwitcher atom** (`components/atoms/LanguageSwitcher/LanguageSwitcher.tsx`)
  - Props: `currentLocale`, `onLocaleChange`
  - Do not couple to routing — accept locale and handler as props
  - Required by Role 5 before locale routing can be implemented

---

## Group D — Week 4 Verification Tasks

- [ ] Contrast check on `uvt-gold: #F2B705` on white — likely fails WCAG AA for normal text; restrict to large text or decorative use only and document the ruling
- [ ] Contrast check on `uvt-blue: #005BBB` on white — verify 4.5:1 ratio met for normal text
- [ ] Confirm visible focus states on: Navbar links, Footer links, AccordionSection trigger, TabsSection tabs
- [ ] Add `active:` state to Button atom (currently missing)
- [ ] Test ContentGrid column collapse: 4 col desktop → 2 col tablet → 1 col mobile
- [ ] Test AccordionSection on mobile — touch targets must be ≥ 44px
- [ ] Verify layout readability at 375px viewport width

---

## Critical Issue Blocking Everything

**Color token conflict — must resolve on day one of Week 5.**

`design-system-work-in-progress.md` (produced in Week 4) defines:
- Primary: `#003B71`
- Secondary: `#F2C94C`
- Accent: `#00A86B`

Main branch `index.css` has:
- `uvt-blue: #005BBB`
- `uvt-navy: #002147`
- `uvt-gold: #F2B705`

These are different values. Role 5 built all components against the main branch tokens. A decision must be made with Role 1 before any further implementation work is done. Once decided, update `design-system-work-in-progress.md` to reflect the agreed values and remove the `!!!this file is subject to change` header.

---

## Summary

| Group | Tasks | Done | Remaining |
|-------|-------|------|-----------|
| A — Week 3 carry-over docs | 3 | 0 (partially — wireframes exist but incomplete) | 3 |
| B — Week 4 documentation | 3 | 0 | 3 |
| C — Atoms not built | 3 | 0 | 3 |
| D — Verification | 7 | 0 | 7 |
| **Total** | **16** | **0** | **16** |

Items produced in Week 4 (`wireframes.md`, `component-handoff.md`, `design-system-work-in-progress.md`) are useful but do not satisfy the formal deliverable requirements from the Week 4 plan. They are partial substitutes, not completions.
