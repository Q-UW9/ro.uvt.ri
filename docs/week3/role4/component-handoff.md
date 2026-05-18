

# 1. Purpose of This Document

This document provides implementation guidance for reusable frontend components that will be developed during Week 4.

The goal is to ensure:

- visual consistency;
- reusable frontend patterns;
- responsive behavior;
- accessibility support;
- WordPress-compatible layouts;
- scalable React component architecture.

These notes are intended primarily for Role 5 (React Developer) and Role 1 (Frontend Lead).

---

# 2. General Component Principles

All reusable components should:

- support responsive layouts;
- remain accessible by default;
- use consistent spacing rules;
- follow the typography system;
- support dynamic WordPress content;
- avoid hardcoded content assumptions;
- preserve reusable structure.

---

# 3. Button Component

## Purpose

Used for:
- primary actions;
- navigation CTAs;
- downloads;
- form actions;
- process guidance.

---

## Variants

### Primary Button

Usage:
- main page action;
- most important CTA.

Style Direction:
- filled background;
- strong contrast;
- rounded corners.

---

### Secondary Button

Usage:
- supporting actions;
- secondary navigation.

Style Direction:
- outlined style;
- lower visual priority.

---

### Ghost Button

Usage:
- low-emphasis actions;
- inline layouts.

Style Direction:
- transparent background;
- subtle hover state.

---

### Link Button

Usage:
- inline navigation;
- lightweight actions.

---

## States

Required states:
- default;
- hover;
- focus;
- active;
- disabled.

---

## Accessibility Rules

- Focus state must remain visible.
- Buttons should remain keyboard accessible.
- Minimum height: 44px.
- Avoid relying only on color differences.

---

## Responsive Rules

Desktop:
- inline layout allowed.

Mobile:
- allow full-width layout when necessary.

---

## Suggested Tailwind Direction

```jsx
rounded-xl px-6 py-3 font-semibold transition
```

---

# 4. Card Component

## Purpose

Used for:
- audience navigation;
- resources;
- announcements;
- related links;
- support categories.

---

## Card Anatomy

Optional:
- icon;
- metadata;
- CTA.

Required:
- title;
- short description.

---

## Layout Rules

- Consistent internal spacing.
- Equal visual rhythm.
- Hover states for clickable cards.
- Comfortable mobile stacking.

---

## Accessibility Rules

- Entire clickable area should remain obvious.
- Focus states required.
- Avoid tiny interaction targets.

---

## Responsive Rules

Desktop:
- multi-column grid.

Tablet:
- reduced columns.

Mobile:
- single-column stack.

---

## Suggested Tailwind Direction

```jsx
rounded-2xl border p-6 transition hover:shadow-md
```

---

# 5. SectionHeader Component

## Purpose

Reusable section introduction component.

---

## Anatomy

Optional:
- eyebrow label;
- supporting paragraph;
- CTA.

Required:
- section title.

---

## Rules

- Maintain spacing consistency.
- Preserve hierarchy.
- Avoid oversized supporting text.

---

## Responsive Rules

Desktop:
- optional centered alignment.

Internal pages:
- left alignment preferred.

Mobile:
- preserve readable line lengths.

---

# 6. Hero Section Component

## Purpose

Primary page introduction section.

---

## Anatomy

Required:
- title;
- short supporting text.

Optional:
- CTA buttons;
- image;
- illustration;
- breadcrumb.

---

## Rules

- Strong hierarchy.
- Immediate orientation.
- Clear primary CTA.
- Comfortable spacing above the fold.

---

## Responsive Rules

Desktop:
- split layouts allowed.

Mobile:
- vertical stacking required.

---

## Accessibility Rules

- Avoid low-contrast overlays.
- Ensure readable text on images.

---

# 7. AccordionSection Component

## Purpose

Used for:
- FAQs;
- grouped details;
- process explanations;
- secondary information.

---

## Rules

- Labels should remain descriptive.
- Avoid hiding critical onboarding content.
- Maintain spacing between items.
- Smooth open/close behavior.

---

## Accessibility Rules

Required:
- keyboard navigation;
- visible focus state;
- ARIA support;
- screen reader compatibility.

---

## Responsive Rules

- Preserve touch-friendly spacing.
- Keep labels readable.

---

# 8. DocumentDownloadList Component

## Purpose

Used for:
- forms;
- regulations;
- PDFs;
- guides;
- downloadable resources.

---

## Anatomy

Each item should include:
- title;
- file type;
- optional description;
- action button.

---

## Rules

- Explain document purpose before listing downloads.
- Use consistent icons.
- Preserve scannability.
- Avoid visually dense lists.

---

## Accessibility Rules

- Download actions should remain obvious.
- File type should not rely only on icons.

---

# 9. CTA Section Component

## Purpose

Guide users toward important next actions.

---

## Rules

- Keep messaging concise.
- Preserve clear hierarchy.
- Limit competing actions.
- Use strong visual contrast.

---

## Responsive Rules

Desktop:
- horizontal layouts allowed.

Mobile:
- stacked CTA layout preferred.

---

# 10. Navbar Component

## Purpose

Primary navigation system.

---

## Rules

- Clear navigation hierarchy.
- Preserve accessibility.
- Keep menu depth manageable.
- Highlight active navigation state.

---

## Mobile Rules

- Use collapsible navigation.
- Ensure touch-friendly spacing.
- Preserve clear CTA visibility.

---

# 11. Footer Component

## Purpose

Support navigation and orientation.

---

## Layout Rules

Suggested groups:
- navigation;
- resources;
- contact;
- legal links;
- social links.

---

## Accessibility Rules

- Maintain readable contrast.
- Preserve scannability.
- Ensure keyboard accessibility.

---

# 12. Responsive Implementation Notes

## Mobile

- Single-column layouts.
- Reduced spacing.
- Touch-friendly interaction sizes.
- Avoid hover-only interactions.

---

## Tablet

- Flexible grid collapse.
- Maintain spacing rhythm.

---

## Desktop

- Wider layouts.
- Preserve readable line lengths.
- Avoid excessive empty space.

---

# 13. WordPress Integration Notes

Components should support:

- dynamic CMS content;
- variable content lengths;
- optional sections;
- reusable template blocks;
- future Gutenberg compatibility.

Avoid:
- hardcoded layouts;
- fixed content assumptions;
- rigid card heights.

---

# 14. Accessibility Requirements

All components should support:

- visible focus states;
- keyboard navigation;
- readable contrast ratios;
- semantic HTML structure;
- screen reader compatibility;
- touch-friendly interactions;
- scalable typography.

---

# 15. Suggested Week 4 Priorities

Suggested implementation order:

1. Typography tokens
2. Button component
3. Container/layout utilities
4. Card component
5. SectionHeader component
6. Hero section
7. Accordion component
8. CTA section
9. Resource/document list
10. Page layout templates

---

# 16. Final Notes

The frontend system should prioritize:

- clarity;
- accessibility;
- consistency;
- modularity;
- responsive behavior;
- WordPress flexibility.

The visual language should remain stable across all future pages, templates, and reusable frontend components.