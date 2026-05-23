

# 1. Visual Language

The RI.UVT.RO redesign should use a clean institutional visual language with strong hierarchy, generous spacing, accessible contrast, and audience-oriented sections.

The interface should guide users through processes instead of overwhelming them with document lists.

The experience should feel:

- clear;
- modern;
- structured;
- student-oriented;
- trustworthy;
- accessible;
- internationally friendly.

The interface should avoid:

- bureaucratic layouts;
- visually overloaded sections;
- inconsistent spacing;
- dense document walls;
- excessive decorative elements;
- unclear navigation paths.

The visual system should prioritize readability, guidance, and consistency across all future pages and reusable frontend components.

---

# 2. Typography System

## Font Family

Primary Font Stack:
- Inter
- ui-sans-serif
- system-ui
- sans-serif

Tailwind Direction:

```css
font-sans
```

Rules:
- Use a clean sans-serif type system across all layouts.
- Prioritize readability and accessibility.
- Preserve consistent typography hierarchy across reusable components.

---

## Heading Scale

### H1 — Page Title

Tailwind:

```css
text-5xl
```

Size:
- 48px

Weight:
- 700

Letter Spacing:
- -0.02em

Usage:
- homepage hero title;
- major internal page titles;
- primary landing sections.

Rules:
- Maintain strong visual hierarchy.
- Avoid overly long multi-line titles.
- Preserve readable wrapping on mobile.

---

### H2 — Section Title

Tailwind:

```css
text-4xl
```

Size:
- 36px

Weight:
- 700

Letter Spacing:
- -0.02em

Usage:
- major content sections;
- grouped informational blocks;
- reusable section headers.

Rules:
- Maintain clear spacing above and below headings.
- Preserve visual consistency across pages.

---

### H3 — Subsection Title

Tailwind:

```css
text-2xl
```

Size:
- 24px

Weight:
- 700

Letter Spacing:
- -0.02em

Usage:
- card titles;
- accordion titles;
- subsection headers;
- support content headings.

Rules:
- Keep hierarchy visually clear relative to H2.
- Preserve readability inside compact layouts.

---

## Body Text

Tailwind:

```css
text-base leading-7
```

Size:
- 16px

Line Height:
- 1.75

Weight:
- 400

Usage:
- paragraphs;
- informational content;
- process explanations;
- long-form reading sections.

Rules:
- Prioritize comfortable reading rhythm.
- Avoid overly narrow line-height.
- Preserve readability on mobile devices.

---

## Caption Text

Tailwind:

```css
text-sm text-gray-500
```

Size:
- 14px

Weight:
- 400

Usage:
- metadata;
- helper text;
- captions;
- labels;
- secondary UI information.

Rules:
- Maintain readable contrast.
- Avoid excessively small supporting text.

---

## Button Typography

### Small Button

Tailwind:

```css
text-sm
```

Usage:
- compact UI actions;
- utility actions.

---

### Medium Button

Tailwind:

```css
text-base
```

Usage:
- standard CTAs;
- default interactive buttons.

---

### Large Button

Tailwind:

```css
text-lg
```

Usage:
- hero CTAs;
- high-emphasis actions.

---

## Button Typography Rules

Weight:
- 600

Case:
- sentence case

Rules:
- Avoid fully uppercase labels.
- Keep labels concise and action-oriented.
- Preserve readability across all button sizes.

Examples:
- Apply now
- Learn more
- Download guide
- View requirements

---

## Link Styles

Rules:
- Links should remain visually identifiable.
- Links should not rely only on color.
- Use underline on hover or active states.
- Maintain accessible contrast ratios.
- Interactive states should remain clearly visible.

---

## Reading Width Rules

Reading-focused layouts:
- max-width: 760px

General layouts:
- max-width: 1280px

Rules:
- Avoid extremely wide reading blocks.
- Preserve comfortable scanning rhythm for informational content.

---

## Mobile Typography Rules

- Avoid text smaller than 14px.
- Preserve heading hierarchy on small screens.
- Prevent heading overflow.
- Maintain readable line spacing.
- Ensure CTA labels remain readable on mobile.

---

# 3. Spacing System

The spacing system should create a calm, readable, and structured interface that supports long-form informational content and reusable frontend layouts.

The layout rhythm should remain consistent across homepage sections, internal pages, cards, accordions, and reusable content blocks.

---

## Section Padding

### Desktop

- 6rem (96px) vertical spacing

Tailwind Direction:

```css
py-24
```

---

### Tablet

- 5rem (80px) vertical spacing

---

### Mobile

- 3rem (48px) vertical spacing

Rules:
- Preserve comfortable section separation.
- Avoid cramped layouts on mobile.
- Maintain consistent vertical rhythm across all templates.

---

## Container Width

### Standard Layout

- max-width: 1280px

Tailwind Direction:

```css
max-w-7xl mx-auto
```

Usage:
- homepage layouts;
- internal page templates;
- resource pages;
- card grids.

---

### Reading Layout

- max-width: 760px

Usage:
- long-form informational content;
- explanations;
- process guidance sections.

Rules:
- Preserve readable line lengths.
- Avoid excessively wide reading areas.

---

## Card Spacing

### Standard Card Padding

Desktop:
- 32px

Mobile:
- 24px

Tailwind Direction:

```css
p-8 md:p-6
```

Used in:
- Card;
- AccordionSection;
- PageLayout;
- Resource cards;
- Support cards.

Rules:
- Maintain equal internal spacing.
- Avoid visually dense card layouts.
- Preserve readable spacing around titles and descriptions.

---

## Grid Gap

### Desktop

- 32px

### Tablet

- 24px

### Mobile

- 16px

Tailwind Direction:

```css
gap-8 md:gap-6 gap-4
```

Used in:
- ContentGrid;
- CardGrid;
- resource listings;
- homepage audience cards.

Rules:
- Maintain consistent visual rhythm.
- Prevent overcrowded grids on tablet and mobile.

---

## Button Padding

### Horizontal Padding

- 20px–24px

### Vertical Padding

- 12px–14px

Rules:
- Preserve touch-friendly interaction size.
- Maintain consistent button proportions.

---

## Border Radius

### Standard Radius

Tailwind Direction:

```css
rounded-xl
```

Usage:
- cards;
- accordions;
- CTA sections;
- buttons;
- modal surfaces.

Rules:
- Maintain a consistent component shape language.
- Avoid mixing multiple border-radius systems across components.

---

## Elevation / Shadow System

### Default Elevation

Minimal elevation system.

Tailwind Direction:

```css
shadow-sm
hover:shadow-md
```

Usage:
- subtle card hover states;
- interactive content blocks;
- elevated CTA sections.

Rules:
- Preserve a clean institutional visual language.
- Avoid heavy shadows or exaggerated floating effects.
- Use elevation sparingly to support hierarchy only.

---

## Mobile Spacing Rules

- Use single-column layouts where appropriate.
- Preserve readable spacing between sections.
- Maintain touch-friendly interaction spacing.
- Reduce spacing carefully without creating dense layouts.
- Ensure cards and accordions remain readable on small screens.

---
# 4. Color System

## Brand Colors

### Primary — uvt-blue

- #005BBB

Usage:
- primary buttons;
- links;
- interactive states;
- important UI highlights;
- active navigation states.

Rules:
- Main institutional brand color.
- Should be the dominant interactive color.
- Maintain accessible contrast on all backgrounds.

---

### Deep — uvt-navy

- #002147

Usage:
- footer backgrounds;
- dark sections;
- navigation backgrounds;
- hero overlays;
- high-contrast layout sections.

Rules:
- Use with white or light text only.
- Avoid excessive full-page dark layouts.

---

### Accent — uvt-gold

- #F2B705

Usage:
- badges;
- highlights;
- secondary emphasis;
- secondary CTAs;
- informational accents.

Rules:
- Use sparingly.
- Avoid large text blocks in gold.
- Gold text on white backgrounds requires contrast validation.
- Never rely on gold alone for meaning.

---

### Background — uvt-gray

- #F5F5F5

Usage:
- page backgrounds;
- card backgrounds;
- alternating sections;
- subtle layout separation.

Rules:
- Preserve readable contrast with body text.
- Avoid excessive gray stacking between adjacent sections.

---

## Text Colors

Strong Text:
- #0F172A

Body Text:
- #334155

Muted Text:
- #64748B

Inverse Text:
- #FFFFFF

---

## Border Colors

Default Border:
- #E2E8F0

Strong Border:
- #CBD5E1

---

## State Colors

Success:
- #15803D

Warning:
- #B45309

Error:
- #B91C1C

---

## Color Accessibility Rules

- Maintain WCAG-compliant contrast ratios.
- Avoid low-contrast text combinations.
- Never use gold text on white without contrast validation.
- Links should remain distinguishable beyond color alone.
- Interactive states should remain visually obvious.
# 5. Reusable Frontend Section Rules

## Hero Section

Purpose:
Introduce the page and orient users immediately.

Rules:
- Strong title hierarchy.
- Optional subtitle and CTA.
- Clear spacing.
- Primary CTA visible above the fold.

---

## SectionHeader

Purpose:
Introduce major content sections.

Rules:
- Optional eyebrow text.
- One primary heading.
- Optional paragraph.
- Internal pages should use left alignment.
- Homepage sections may use centered alignment.

---

## Card Grid

Purpose:
Group navigation paths, resources, or content categories.

Rules:
- Consistent spacing.
- Hover and focus states for clickable cards.
- Icon + title + description structure.
- Stack vertically on mobile.

---

## Accordion Section

Purpose:
Organize secondary details and FAQs.

Rules:
- Keep labels specific.
- Avoid hiding critical onboarding information.
- Must support keyboard navigation.
- Preserve spacing between accordion items.

---

## DocumentDownloadList

Purpose:
Present downloadable forms, regulations, and guides.

Rules:
- Show document title.
- Show file type.
- Show action button.
- Include contextual explanation before downloads.

---

## CTA Section

Purpose:
Guide users toward next actions.

Rules:
- Keep messaging concise.
- Use strong hierarchy.
- Avoid excessive CTA density.
- Preserve visibility on mobile.

---

## Footer

Purpose:
Support orientation and navigation.

Rules:
- Include grouped navigation links.
- Maintain readable spacing.
- Preserve accessibility and contrast.
- Keep footer scannable on mobile.

---

# 6. Layout Rules

## Homepage Layout

Suggested structure:

1. Hero section
2. Audience navigation cards
3. Erasmus / International highlight
4. Announcements or calls
5. Resource section
6. Contact CTA
7. Footer

Rules:
- Homepage should guide users toward their path quickly.
- Cards should separate user journeys clearly.
- Announcements should not dominate the homepage.

---

## Internal Page Layout

Suggested structure:

1. Page header
2. Introductory explanation
3. Process steps or key information
4. Accordion details
5. Document list
6. Related links
7. Contact CTA
8. Footer

Rules:
- Prioritize orientation before documents.
- Keep sections consistent across pages.
- Use readable spacing for long informational content.

---

# 7. Responsive Design Notes

## Mobile Rules

- Use single-column layouts.
- Reduce spacing while preserving readability.
- Prevent CTA overcrowding.
- Ensure touch targets remain large enough.
- Maintain readable accordion spacing.
- Preserve footer clarity.

---

## Tablet Rules

- Gradually reduce spacing.
- Allow flexible grid collapse.
- Preserve heading hierarchy.

---

## Desktop Rules

- Use wider content spacing.
- Preserve visual rhythm.
- Avoid excessive line lengths.

---

# 8. Accessibility Visual Rules

## Accessibility Requirements

- Visible focus states.
- Accessible contrast ratios.
- Readable font sizes.
- Link distinction beyond color alone.
- Clear clickable areas.
- Keyboard-accessible accordions.
- Safe touch targets for mobile.
- Avoid hover-only interactions.

---

# 9. Tailwind Direction Notes

Suggested utility direction:

Typography:
- text-base
- text-xl
- text-4xl
- font-bold
- leading-7

Spacing:
- py-12
- py-24
- gap-6
- gap-8
- px-4
- px-6

Layout:
- max-w-6xl
- mx-auto
- grid
- md:grid-cols-3

---

# 10. Week 4 Handoff Notes

This design system should guide:
- reusable React components;
- design tokens;
- layout shells;
- responsive behavior;
- typography implementation;
- accessibility implementation.

Role 5 should use these rules to implement:
- UI atoms;
- cards;
- buttons;
- accordions;
- section headers;
- layout templates;
- CTA components.

The visual system should remain consistent across all future pages and WordPress-driven content.