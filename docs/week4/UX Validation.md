# UX Validation — Week 3 Components
**Document type:** UX Review — Carry-over from Week 3  
**Author:** Role 2 — UX Researcher + Frontend Contributor  
**Source specification:** `docs/week3/component-handoff.md`  
**Components reviewed:** Navbar, Footer, Card, HeroSection, AccordionSection, TabsSection, SectionHeader, PageLayout, ContentGrid  
**Status:** Action required on items marked Critical or High

---

## How to Read This Document

Each component is reviewed against the specification in `component-handoff.md` and the approved navigation model (Role 2, Week 2). Issues are rated:

- **Critical** — blocks a user journey or breaks accessibility
- **High** — significant UX problem, should fix before launch
- **Medium** — improvement that reduces friction
- **Low** — minor polish item

---

## 1. Navbar

**File reviewed:** `frontend/src/components/organisms/Navbar/Navbar.tsx`

### What is correct
- Sticky positioning (`sticky top-0`) — correct per spec
- Desktop nav hidden on mobile (`hidden md:flex`) — correct responsive approach
- Language switcher included — correct
- `aria-label="Open menu"` on mobile button — correct accessibility practice
- Shadow and border separation from content — correct

### Issues found

**Issue N-1 — Label "About" should be "About DRI" [High]**  
The current `navLinks` array defines `label: 'About'`. The approved navigation model specifies "About DRI." See `navigation-consistency-feedback.md` for full rationale.  
Fix: Change `'About'` to `'About DRI'` in the `navLinks` array.

**Issue N-2 — Label "Erasmus" should be "Erasmus+" [High]**  
The official programme name is Erasmus+. Using the short form is inconsistent with all other documents and taxonomies in this project.  
Fix: Change `'Erasmus'` to `'Erasmus+'` in the `navLinks` array.

**Issue N-3 — "Programmes" is not in the approved navigation model [Critical]**  
The approved top-level menu has 7 items: About DRI, Erasmus+, International Students, Scholarships & Exchanges, Partnerships, News, Contact. "Programmes" is not one of them. It may belong as a submenu item under Erasmus+ or International Students, but it should not appear as a standalone top-level item.  
Fix: Remove "Programmes" from the top level. Discuss placement with Role 1 and Role 3.

**Issue N-4 — "Scholarships & Exchanges" is missing [Critical]**  
This top-level item is absent from the current Navbar. It is a distinct user journey destination used by outgoing students, staff, and partner institutions.  
Fix: Add `{ label: 'Scholarships & Exchanges', to: '/scholarships' }` to `navLinks`.

**Issue N-5 — Mobile menu is not implemented [High]**  
The mobile button exists but the comment says "to be wired up." On mobile, there is no way to navigate the site. Three of the eight user journeys (Incoming Erasmus Student, International Applicant, Refugee/Asylum Seeker) are likely to be accessed on mobile devices.  
Fix: Implement collapsible mobile menu before user testing begins.

**Issue N-6 — No active link state [Medium]**  
The current implementation has no visual indicator for the currently active page. Users cannot orient themselves within the site structure.  
Fix: Use React Router's `NavLink` instead of `Link` and apply an active class (e.g. `text-blue-700 font-semibold`).

**Issue N-7 — Mobile menu button shows garbled character [Medium]**  
The hamburger icon renders as `Γÿ░` — a UTF-8 encoding issue. This means the button is visually broken on some systems.  
Fix: Replace with an SVG icon or a Lucide React icon component.

---

## 2. Footer

**File reviewed:** `frontend/src/components/organisms/Footer/Footer.tsx`

### What is correct
- Four-column grid layout — matches spec suggestion
- Responsive grid (`md:grid-cols-4`) — correct
- Generous padding (`py-16`) — good breathing room
- Branding column included — correct

### Issues found

**Issue F-1 — Column heading "Admissions" should be "International Students" [Critical]**  
The Footer uses "Admissions" as a section heading. This is the same label mismatch as the Navbar. The correct term is "International Students." See `navigation-consistency-feedback.md`.  
Fix: Change heading from `Admissions` to `International Students`.

**Issue F-2 — Column heading "Erasmus" should be "Erasmus+" [High]**  
Same issue as Navbar. The official name includes the plus sign.  
Fix: Change heading from `Erasmus` to `Erasmus+`.

**Issue F-3 — All list items are plain text, not links [Critical]**  
Every item in every Footer column (Requirements, Application, Deadlines, Mobility, Partners, Programs, Address, Email, Phone) is plain `<li>` text with no `<a>` or `<Link>` element. A footer with no working links provides no navigation value and fails basic accessibility expectations.  
Fix: Wrap each item in a `<Link to="...">` component pointing to the correct route.

**Issue F-4 — Missing footer sections from spec [Medium]**  
The `component-handoff.md` spec lists five suggested footer groups: navigation, resources, contact, legal links, social links. The current implementation has no legal links (privacy policy, cookie notice) and no social links. These are standard on institutional websites.  
Fix: Add a legal links row at the bottom and placeholder social links when content is available.

**Issue F-5 — Contact column contains no actual contact information [Medium]**  
The contact column lists "Address," "Email," and "Phone" as plain text placeholders. Even as placeholders, these should either show real content or be clearly marked as coming from WordPress dynamically.  
Fix: Connect to WordPress contact fields or insert real placeholder values that match the actual DRI contact details.

---

## 3. Card Component

**File reviewed:** `frontend/src/components/molecules/Card/Card.tsx`

### What is correct
- Rounded corners, border, shadow — matches spec (`rounded-2xl border p-6`)
- Hover shadow and lift effect — matches spec hover state requirement
- Motion animation (`framer-motion`) — adds polish, acceptable
- Props interface defined — good pattern
- Optional button — correct per spec (CTA is listed as optional)

### Issues found

**Issue C-1 — No icon support [Medium]**  
The spec lists icon as an optional Card element. The current `CardProps` interface has no `icon` field. Icons are used on the homepage quick-access cards for audience navigation (Incoming Erasmus, Outgoing, International Applicants, Staff Mobility).  
Fix: Add optional `icon?: React.ReactNode` prop and render above the title when provided.

**Issue C-2 — No metadata support [Medium]**  
The spec lists metadata as an optional element (e.g. date for announcements, file type for resources). There is no `metadata` field in `CardProps`.  
Fix: Add optional `metadata?: string` prop and render as small text below the title.

**Issue C-3 — Entire card is not clickable when a route is provided [High]**  
The clickable area is only the Button element at the bottom. The spec states "entire clickable area should remain obvious." For audience navigation cards, users will expect to click anywhere on the card.  
Fix: When `route` is provided, wrap the entire `motion.div` in a `<Link>` or make the card itself the link target. Keep the Button as a visual affordance only in that case.

**Issue C-4 — Animation may cause accessibility issues [Low]**  
The `whileInView` animation triggers on scroll. Users with vestibular disorders or who have enabled "reduce motion" in their OS settings should not see motion effects. There is no `prefers-reduced-motion` check.  
Fix: Wrap animation props in a check: only apply if `window.matchMedia('(prefers-reduced-motion: reduce)').matches` is false.

---

## 4. HeroSection Component

**File reviewed:** `frontend/src/components/organisms/HeroSection/HeroSection.tsx`

> Note: Full code was not available for direct inspection. This review is based on the component-handoff spec and the file's presence in the repository.

### Expected per spec
- Required: title, short supporting text
- Optional: CTA buttons, image/illustration, breadcrumb
- Desktop: split layouts allowed
- Mobile: vertical stacking required
- Accessibility: no low-contrast overlays, readable text on images

### Items to verify

**Issue H-1 — Confirm breadcrumb support exists [Medium]**  
Inner pages (Erasmus subpages, International Students subpages) require breadcrumb navigation for orientation. Please confirm whether `HeroSection` accepts a `breadcrumb` prop or whether breadcrumb is handled separately.

**Issue H-2 — Confirm text contrast on image backgrounds [High]**  
If the Hero uses an image background with text overlay, the contrast ratio must meet WCAG AA (4.5:1 for normal text). This cannot be verified without seeing the rendered output.  
Action: Test with a real image and verify contrast using a tool such as the WebAIM Contrast Checker.

**Issue H-3 — Confirm mobile stacking behavior [High]**  
The spec requires vertical stacking on mobile. If the Hero uses a split layout (text left, image right), this must collapse to a single column below the `md` breakpoint.  
Action: Test on a 375px viewport.

---

## 5. AccordionSection Component

**File reviewed:** `frontend/src/components/organisms/AccordionSection/AccordionSection.tsx`

> Note: Full code was not available for direct inspection.

### Items to verify

**Issue A-1 — Confirm ARIA attributes are present [Critical]**  
The spec explicitly requires ARIA support and screen reader compatibility for the Accordion. This means each trigger should use `aria-expanded`, each panel should use `aria-hidden` or `aria-controls`, and the relationship between trigger and panel should be programmatically defined.  
Action: Inspect the rendered HTML and confirm ARIA attributes are present and toggling correctly.

**Issue A-2 — Confirm keyboard navigation works [Critical]**  
Users must be able to open and close accordion items using the keyboard (Enter/Space to toggle, Tab to move between items).  
Action: Test by navigating the accordion using only the keyboard.

**Issue A-3 — Confirm critical content is not hidden in accordions [High]**  
The spec warns: "Avoid hiding critical onboarding content." For the Erasmus incoming student journey, application deadlines and required documents are critical. These should not be the default-collapsed state on first load.  
Action: Review which content is placed inside accordions and ensure first-step information is visible without interaction.

---

## 6. TabsSection Component

**File reviewed:** `frontend/src/components/organisms/TabsSection/TabsSection.tsx`

> Note: Full code was not available for direct inspection.

### Items to verify

**Issue T-1 — Confirm active tab state is visually distinct [High]**  
Users must be able to tell which tab is currently selected. Active state should differ from hover state and inactive state.

**Issue T-2 — Confirm tab content is accessible to screen readers [High]**  
Tab panels should use `role="tabpanel"` and be associated with their trigger via `aria-controls` and `aria-labelledby`.

**Issue T-3 — Confirm tabs collapse gracefully on mobile [Medium]**  
Horizontal tab rows can overflow on narrow screens. The component should either scroll horizontally or collapse to a dropdown/accordion pattern on mobile.

---

## 7. SectionHeader Component

**File reviewed:** `frontend/src/components/organisms/SectionHeader/SectionHeader.tsx`

> Note: Full code was not available for direct inspection.

### Items to verify

**Issue S-1 — Confirm eyebrow label is optional and rendering correctly [Low]**  
The spec lists the eyebrow label as optional. If an eyebrow is passed, it should render above the title in a smaller, lighter style. If not passed, the space should not be reserved.

**Issue S-2 — Confirm alignment behavior per context [Medium]**  
The spec states: centered alignment is optional on the homepage, left alignment is preferred on inner pages. Confirm whether the component accepts an `align` prop or whether alignment is hardcoded.

---

## 8. PageLayout Component

**File reviewed:** `frontend/src/components/templates/PageLayout/PageLayout.tsx`

> Note: Full code was not available for direct inspection.

### Items to verify

**Issue P-1 — Confirm Navbar and Footer are included in all page layouts [Critical]**  
Every page must render within the Navbar/Footer shell. If any page template bypasses `PageLayout`, users will encounter pages with no navigation.

**Issue P-2 — Confirm skip-to-content link exists [High]**  
WCAG requires a "skip to main content" link as the first focusable element on every page. This is typically placed inside the PageLayout template so it appears on all pages automatically. Confirm this is present.

---

## 9. ContentGrid / Template

**File reviewed:** `frontend/src/components/templates/` (HomePageTemplate, InnerPageTemplate)

### Items to verify

**Issue G-1 — Confirm grid collapses correctly on mobile [High]**  
Card grids must stack to a single column on mobile (below `md` breakpoint). Multi-column grids that do not collapse create horizontal overflow and broken layouts on phones.

**Issue G-2 — Confirm grid supports variable card counts [Medium]**  
The grid should handle 2, 3, 4, or 5 cards without breaking the layout. Orphaned single cards in the last row should align left, not stretch to fill the full width.

---

## Summary Table

| ID | Component | Issue | Severity |
|---|---|---|---|
| N-1 | Navbar | "About" → "About DRI" | High |
| N-2 | Navbar | "Erasmus" → "Erasmus+" | High |
| N-3 | Navbar | "Programmes" not in approved model | Critical |
| N-4 | Navbar | "Scholarships & Exchanges" missing | Critical |
| N-5 | Navbar | Mobile menu not implemented | High |
| N-6 | Navbar | No active link state | Medium |
| N-7 | Navbar | Hamburger icon garbled | Medium |
| F-1 | Footer | "Admissions" → "International Students" | Critical |
| F-2 | Footer | "Erasmus" → "Erasmus+" | High |
| F-3 | Footer | List items are not links | Critical |
| F-4 | Footer | Missing legal and social sections | Medium |
| F-5 | Footer | Contact column has no real content | Medium |
| C-1 | Card | No icon prop | Medium |
| C-2 | Card | No metadata prop | Medium |
| C-3 | Card | Whole card not clickable | High |
| C-4 | Card | No prefers-reduced-motion check | Low |
| H-1 | HeroSection | Breadcrumb support unconfirmed | Medium |
| H-2 | HeroSection | Contrast on image backgrounds unverified | High |
| H-3 | HeroSection | Mobile stacking unverified | High |
| A-1 | AccordionSection | ARIA attributes unconfirmed | Critical |
| A-2 | AccordionSection | Keyboard navigation unconfirmed | Critical |
| A-3 | AccordionSection | Critical content may be hidden | High |
| T-1 | TabsSection | Active tab state unconfirmed | High |
| T-2 | TabsSection | Tab ARIA unconfirmed | High |
| T-3 | TabsSection | Mobile tab overflow unconfirmed | Medium |
| S-1 | SectionHeader | Eyebrow optional rendering unconfirmed | Low |
| S-2 | SectionHeader | Alignment prop unconfirmed | Medium |
| P-1 | PageLayout | Navbar/Footer inclusion unconfirmed | Critical |
| P-2 | PageLayout | Skip-to-content link missing or unconfirmed | High |
| G-1 | ContentGrid | Mobile grid collapse unconfirmed | High |
| G-2 | ContentGrid | Variable card count behavior unconfirmed | Medium |

---

## Recommended Fix Order

**This week (before any new pages are built):**
1. N-3, N-4 — Fix Navbar structure (wrong items, missing items)
2. F-1, F-3 — Fix Footer labels and make links functional
3. A-1, A-2 — Verify Accordion accessibility
4. P-1, P-2 — Verify PageLayout completeness

**This week (parallel):**
5. N-5 — Implement mobile menu
6. C-3 — Make full card clickable
7. H-2, H-3 — Test HeroSection on mobile and with images

**Next iteration:**
8. C-1, C-2 — Add icon and metadata props to Card
9. N-6, N-7 — Active link state and hamburger icon fix
10. F-4, F-5 — Footer legal links and real contact content

---

