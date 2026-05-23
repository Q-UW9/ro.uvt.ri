

# 1. Wireframe Philosophy

The wireframes focus on:

- clarity;
- process guidance;
- audience segmentation;
- readable content structure;
- reusable frontend layouts;
- responsive scalability.

The wireframes are intentionally low-fidelity and focus on layout hierarchy rather than polished UI visuals.

---

# 2. Homepage Wireframe

## Purpose

The homepage should immediately guide users toward the correct audience path and reduce confusion caused by large informational structures.

---

## Homepage Layout Structure

```text
+------------------------------------------------+
| Navbar                                         |
+------------------------------------------------+
| Hero Section                                   |
| Title                                          |
| Subtitle                                       |
| Primary CTA                                    |
| Secondary CTA                                  |
+------------------------------------------------+
| Audience Navigation Cards                      |
| Incoming | Outgoing | International | Staff    |
+------------------------------------------------+
| Erasmus / International Highlight              |
+------------------------------------------------+
| Announcements / Calls                          |
+------------------------------------------------+
| Resources / Help Section                       |
+------------------------------------------------+
| Contact CTA                                    |
+------------------------------------------------+
| Footer                                         |
+------------------------------------------------+
```

---

## Homepage Layout Rules

- Hero should immediately explain the platform purpose.
- Audience cards should remain visually equal.
- Homepage sections should maintain generous spacing.
- News and announcements should not dominate the page.
- CTA sections should remain highly visible.
- Footer should support orientation and wayfinding.

---

# 3. Internal Page Wireframe

## Purpose

Internal pages should prioritize orientation, process clarity, and readability.

---

## Internal Page Layout Structure

```text
+------------------------------------------------+
| Navbar                                         |
+------------------------------------------------+
| Page Header                                    |
| Title + short explanation                      |
+------------------------------------------------+
| Quick Information / Key Facts                  |
+------------------------------------------------+
| Process Steps                                  |
| Step 1 | Step 2 | Step 3 | Step 4              |
+------------------------------------------------+
| Accordion Details                              |
+------------------------------------------------+
| Document Download List                         |
+------------------------------------------------+
| Related Links                                  |
+------------------------------------------------+
| Contact / Next Step CTA                        |
+------------------------------------------------+
| Footer                                         |
+------------------------------------------------+
```

---

## Internal Page Rules

- Orientation should appear before detailed information.
- Important first-step information should remain visible.
- Documents should never appear without explanation.
- Long content should remain easy to scan.
- Consistent section rhythm should be preserved.

---

# 4. Student Journey Page Wireframe

## Purpose

Student journey pages should guide users through complex academic or administrative processes.

---

## Student Journey Layout Structure

```text
+------------------------------------------------+
| Navbar                                         |
+------------------------------------------------+
| Journey Hero                                   |
| Title + process overview                       |
+------------------------------------------------+
| Timeline / Process Steps                       |
| Step 1 -> Step 2 -> Step 3 -> Step 4           |
+------------------------------------------------+
| Important Requirements                         |
+------------------------------------------------+
| Accordion FAQs                                 |
+------------------------------------------------+
| Required Documents                             |
+------------------------------------------------+
| Contact / Help CTA                             |
+------------------------------------------------+
| Footer                                         |
+------------------------------------------------+
```

---

## Student Journey Rules

- Use step-based guidance.
- Reduce cognitive overload.
- Highlight deadlines or requirements clearly.
- Preserve mobile readability.
- Keep actions visible during the journey.

---

# 5. Resource Listing Wireframe

## Purpose

The resource listing page should help users find documents quickly without overwhelming them.

---

## Resource Listing Layout Structure

```text
+------------------------------------------------+
| Navbar                                         |
+------------------------------------------------+
| Page Header: Resources                         |
+------------------------------------------------+
| Search / Filters / Category Chips              |
+------------------------------------------------+
| Resource Cards                                 |
| Title | Type | Audience | Download/View        |
+------------------------------------------------+
| Pagination / Load More                         |
+------------------------------------------------+
| Footer                                         |
+------------------------------------------------+
```

---

## Resource Listing Rules

- Search should remain visible.
- Cards should use consistent spacing.
- Document types should be easy to identify.
- Mobile layouts should stack cleanly.
- Avoid dense document walls.

---

# 6. Contact / Support Page Wireframe

## Purpose

The contact page should help users quickly identify the correct support channel.

---

## Contact Page Layout Structure

```text
+------------------------------------------------+
| Navbar                                         |
+------------------------------------------------+
| Contact Hero                                   |
| Title + explanation                            |
+------------------------------------------------+
| Support Categories                             |
| Admissions | Erasmus | Partnerships | Support  |
+------------------------------------------------+
| Contact Cards                                  |
| Name | Email | Department | CTA                |
+------------------------------------------------+
| FAQ Accordion                                  |
+------------------------------------------------+
| Additional Resources                           |
+------------------------------------------------+
| Footer                                         |
+------------------------------------------------+
```

---

## Contact Page Rules

- Contact information should remain highly scannable.
- Avoid overwhelming users with long text blocks.
- Provide contextual support guidance.
- Keep support categories visually separated.

---

# 7. Card Grid Wireframe

## Purpose

Used for audience paths, featured resources, announcements, or navigation sections.

---

## Card Grid Layout Structure

```text
+------------------------------------------------+
| Section Header                                 |
+------------------------------------------------+
| Card | Card | Card                             |
| Card | Card | Card                             |
+------------------------------------------------+
```

---

## Card Grid Rules

- Equal card spacing.
- Consistent card height where possible.
- Stack vertically on mobile.
- Hover and focus states required.
- Cards should remain readable with varying content lengths.

---

# 8. Accordion Section Wireframe

## Purpose

Used for grouped secondary information and FAQs.

---

## Accordion Layout Structure

```text
+------------------------------------------------+
| Section Header                                 |
+------------------------------------------------+
| Accordion Item                                 |
+------------------------------------------------+
| Accordion Item                                 |
+------------------------------------------------+
| Accordion Item                                 |
+------------------------------------------------+
```

---

## Accordion Rules

- Labels should remain specific and descriptive.
- Important onboarding information should not be hidden.
- Accordion spacing should remain comfortable on mobile.
- Keyboard accessibility is required.

---

# 9. CTA Section Wireframe

## Purpose

Guide users toward important next actions.

---

## CTA Layout Structure

```text
+------------------------------------------------+
| CTA Background                                 |
| Headline                                       |
| Supporting Text                                |
| Primary CTA                                    |
| Secondary CTA                                  |
+------------------------------------------------+
```

---

## CTA Rules

- Keep messaging concise.
- Preserve strong visual hierarchy.
- Avoid too many simultaneous CTAs.
- Maintain strong accessibility contrast.

---

# 10. Responsive Layout Notes

## Mobile Layout Rules

- Use single-column layouts.
- Stack cards vertically.
- Reduce spacing while preserving readability.
- Preserve CTA visibility.
- Maintain touch-friendly spacing.

---

## Tablet Layout Rules

- Allow flexible grid collapse.
- Preserve content hierarchy.
- Keep readable spacing.

---

## Desktop Layout Rules

- Preserve visual rhythm.
- Avoid excessive line lengths.
- Use wider spacing for major sections.

---

# 11. Future Implementation Notes

These wireframes are intended to guide:

- reusable React layouts;
- WordPress-driven content templates;
- responsive frontend structure;
- future Tailwind implementation;
- reusable UI sections.

The wireframes should remain flexible enough to support dynamic CMS content while preserving consistency across all pages.