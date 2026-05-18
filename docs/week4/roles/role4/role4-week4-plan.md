# Role 4 — Week 4 Plan
**Role:** UI Designer + Frontend Implementer  
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
| `[~]` | Partial — exists in code but no documentation |

---

## Context Entering Week 4

Role 4 produced no documents in Week 3. Design tokens exist in `tailwind.config.js` and base typographic styles exist in `globals.css`, but there is no design system document, no typography specification, no spacing rules, and no wireframes. The gap report notes these tokens may have been written by Role 5, not Role 4 — authorship is unconfirmed.

Three atoms are built (Button, Typography) and one is partial (Button has 3 variants/3 sizes; Typography has h1–h3, body, caption). Three atoms remain unbuilt: Divider, Icon, LanguageSwitcher.

**Current token state in code:**

| Token | Location | Value | Status |
|-------|----------|-------|--------|
| `uvt-blue` | `tailwind.config.js` | `#005BBB` | In code, no doc |
| `uvt-navy` | `tailwind.config.js` | `#002147` | In code, no doc |
| `uvt-gold` | `tailwind.config.js` | `#F2B705` | In code, no doc |
| `uvt-gray` | `tailwind.config.js` | `#F5F5F5` | In code, no doc |
| `section` spacing | `tailwind.config.js` | `6rem` | In code, no doc |
| `container` width | `tailwind.config.js` | `1280px` | In code, no doc |
| Heading weight | `globals.css` | `font-weight: 700` | In code, no doc |
| Heading tracking | `globals.css` | `letter-spacing: -0.02em` | In code, no doc |

Typography scale hardcoded in `Typography.tsx`: h1=`text-5xl`, h2=`text-4xl`, h3=`text-2xl` — not tokenised.

---

## Priority Order This Week

```
1. Produce the three carry-over documents (blocks Role 4's own implementation work)
2. Build missing atoms: Divider, Icon, LanguageSwitcher
3. Document existing design tokens
4. Implement responsive rules and accessibility checks
```

No further visual implementation should proceed until the design system document exists. Components built without a specification drift from each other and cannot be consistently reviewed.

---

## Week 3 Carry-Overs — Priority Zero

### [W3] Design System Draft Document

**File:** `docs/design-system-draft.md`

Formalise the visual language of the platform. Use the existing tokens in `tailwind.config.js` and `globals.css` as the source of truth for current values. Document:

**Colors:**
- Primary: `uvt-blue: #005BBB` — main brand, interactive elements, links
- Deep: `uvt-navy: #002147` — backgrounds, footer, dark sections
- Accent: `uvt-gold: #F2B705` — secondary CTA, highlights, badges
- Background: `uvt-gray: #F5F5F5` — page backgrounds, card backgrounds
- Text: standard dark on light; specify exact hex values
- Usage rules: when to use each color, what is never allowed (e.g. gold text on white — contrast check required)

**Typography:**
- Font family: specify the font stack (Tailwind default or custom)
- Heading scale: h1 (`text-5xl` = 48px), h2 (`text-4xl` = 36px), h3 (`text-2xl` = 24px)
- Body: `text-base` = 16px, line-height 1.75
- Caption: `text-sm` = 14px, color gray-500
- Button text: `text-sm` (sm), `text-base` (md), `text-lg` (lg)
- Heading weight: 700, letter-spacing: -0.02em

**Spacing:**
- Section padding: `6rem` (96px) vertical
- Container max-width: `1280px`
- Card spacing: document the padding used across Card, AccordionSection, PageLayout
- Grid gap: document the gap value used in ContentGrid

**Elevation / shadow:** document any box-shadow usage or lack thereof

**Border radius:** specify standard values (`rounded-xl` on cards and accordions — confirm rule)

### [W3] Typography, Spacing, and Color Rules Document

**File:** `docs/typography-spacing-color-rules.md`

A concise reference card (not a full design system narrative). Format as tables. Cover:

- Heading scale with pixel values, Tailwind class, and usage context
- Paragraph line-height values per context
- Link styles (default, hover, visited, focus)
- Button text sizing per button size
- Section padding values (desktop, tablet, mobile)
- Card internal padding
- Grid gap values per grid type
- Mobile overrides (which spacing values change below `md:` breakpoint)
- Color usage table: color name → hex → use case → forbidden use

This is the document Role 5 and Role 4 use when building new components to ensure visual consistency.

### [W3] Core Wireframes

**File:** `docs/core-wireframes-notes.md`

Produce wireframe descriptions (text or annotated sketches) for each of the following layout types. These do not need to be polished — they need to specify the component composition and content hierarchy.

**Homepage:**
- Navbar at top
- HeroSection with audience-oriented CTAs (who is this page for)
- Featured content sections (identify what goes here: news, open calls, key programmes)
- Footer

**Internal section page (e.g. Erasmus overview, About):**
- Navbar
- Page title + breadcrumb
- Body content (static WP Page content)
- Optional: sidebar or CTA block
- Footer

**Listing page (Programmes / Calls / Resources):**
- Navbar
- SectionHeader with title and optional filter
- ContentGrid of Cards
- Footer

**Detail page (single Programme / single Call):**
- Navbar
- Page title + metadata (deadline, language, etc. — ACF fields)
- Body content
- Structured sections (AccordionSection for application steps, document list for downloads)
- Footer

**Contact page:**
- Navbar
- Contact card(s)
- Form or CTA
- Footer

---

## Week 4 Implementation Tasks

These begin after carry-over documents are produced.

### Design Token Completion

- [x] Color tokens — `uvt-blue`, `uvt-navy`, `uvt-gold`, `uvt-gray` defined in `tailwind.config.js`
- [~] Typography tokens — hardcoded in `Typography.tsx` as Tailwind utility classes; should be moved to custom Tailwind `fontSize` config entries
- [~] Spacing tokens — `section` and `container` defined; card and grid spacing ad-hoc; standardise and document
- [ ] Responsive breakpoint rules — document which layouts change at `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px)

### Missing UI Atoms

These three atoms were in the Week 3 plan and were not built.

**Divider atom** (`components/atoms/Divider/Divider.tsx`)
- Horizontal rule between sections
- Props: `variant` (solid / dashed), `className`
- Should use a Tailwind border color that respects the design system

**Icon atom** (`components/atoms/Icon/Icon.tsx`)
- Wrapper for SVG icons
- Props: `name` (icon key), `size` (sm/md/lg), `className`
- Decide on icon library (Heroicons recommended — already compatible with Tailwind) or inline SVGs
- Must be accessible: include `aria-hidden` when decorative, `aria-label` when meaningful

**LanguageSwitcher atom** (`components/atoms/LanguageSwitcher/LanguageSwitcher.tsx`)
- Dropdown or toggle between language options (RO / EN minimum)
- Props: `currentLocale`, `onLocaleChange`
- Must work alongside whatever locale routing strategy Role 1 and Role 5 agree on
- Do not hard-wire this to a routing implementation — accept locale value and change handler as props

### Responsive Visual Behavior

- [ ] Test Button atom at all 3 sizes across desktop / tablet / mobile
- [ ] Test Typography atom at all 5 variants across breakpoints
- [ ] Test Navbar collapse behavior at `md:` breakpoint
- [ ] Test ContentGrid column collapse (4 col desktop → 2 col tablet → 1 col mobile)
- [ ] Test AccordionSection on mobile — verify touch targets are large enough
- [ ] Check spacing consistency — section padding should reduce on mobile
- [ ] Check layout readability at 375px (iPhone SE baseline)

### Accessibility-Friendly Visual Patterns

- [~] Visible focus states — Button has `focus:ring-2 focus:ring-uvt-blue`; check Navbar links, Footer links, AccordionSection trigger, TabsSection tabs — all interactive elements must have a visible focus indicator
- [ ] Contrast check — `uvt-blue #005BBB` on white: WCAG AA requires 4.5:1 for normal text. Verify. `uvt-gold #F2B705` on white: likely fails — document and restrict its use to large text or decorative purposes only.
- [~] Hover states — Navbar and Footer links have hover; check all interactive elements have hover feedback
- [ ] Active states — Button has no explicit active style; add `active:` class to Button
- [ ] `aria-expanded` on AccordionSection — already present; confirm it is correct
- [ ] WCAG 2.1 AA compliance — document target in `accessibility-implementation-standards.md` (co-authored with Role 1)

---

## Deliverables Checklist

### Week 3 carry-overs (produce first)

- [W3] [ ] `design-system-draft.md` — colors, typography, spacing, elevation, border radius
- [W3] [ ] `typography-spacing-color-rules.md` — concise reference tables
- [W3] [ ] `core-wireframes-notes.md` — 5 layout types described

### Week 4 implementation deliverables

- [ ] `design-token-implementation.md` — record current token state, what is tokenised vs hardcoded, what still needs tokenising
- [ ] `ui-atoms-checklist.md` — status of every atom: Button, Typography, Divider, Icon, LanguageSwitcher
- [ ] Divider atom built and committed
- [ ] Icon atom built and committed (with icon library decision recorded)
- [ ] LanguageSwitcher atom built and committed
- [ ] Responsive behavior tested and documented
- [ ] `accessibility-implementation-standards.md` co-produced with Role 1

---

## Dependencies This Week

| Role | What Role 4 needs from them | When |
|------|-----------------------------|------|
| Role 1 | Accessibility standards guidance and WCAG target | Before accessibility work |
| Role 2 | UX feedback on wireframes and visual patterns | As wireframes are produced |
| Role 5 | Confirmation of which Tailwind classes are in use across existing components | Before token standardisation |

| Role | What they need from Role 4 | When |
|------|---------------------------|------|
| Role 1 | Design system document — needed for architectural validation | Start of week |
| Role 5 | Typography tokens, responsive breakpoint rules, LanguageSwitcher atom | Before locale routing work |
| Role 2 | Wireframes — needed for page-template alignment feedback | Before Role 2 produces page-template alignment doc |

---

## Definition of Done — Role 4, Week 4

- [ ] `design-system-draft.md` committed as a standalone document
- [ ] `typography-spacing-color-rules.md` committed
- [ ] `core-wireframes-notes.md` committed (5 layout types covered)
- [ ] Divider, Icon, LanguageSwitcher atoms committed and accessible
- [ ] `ui-atoms-checklist.md` committed reflecting current state of all 5 atoms
- [ ] Contrast check on `uvt-blue` and `uvt-gold` documented
- [ ] All interactive elements have visible focus states confirmed
