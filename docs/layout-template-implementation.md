# Layout & Template Implementation Notes

**File:** `docs/layout-template-implementation.md`  
**Author:** Role 5 — React Developer  
**Week:** 4

---

## HomePageTemplate

**Path:** `src/components/templates/HomePageTemplate/HomePageTemplate.tsx`

Composes the full homepage. Accepts `heroData`, `cards`, and `news` as props.
Renders `SectionRenderer` for the hero (full-width, no container), then a
`ContentGrid` of audience shortcut `Card` components inside a `Container`,
then `NewsSection` for latest announcements. Everything is wrapped in
`PageLayout` (Navbar + Footer) and `PageTransition` (fade animation).

**Organisms used:** `SectionRenderer` → `HeroSection`, `ContentGrid` + `Card`,
`SectionHeader`, `NewsSection`, `Navbar`, `Footer`

---

## InnerPageTemplate

**Path:** `src/components/templates/InnerPageTemplate/InnerPageTemplate.tsx`

Covers every route except `/`. Accepts `title`, optional `subtitle`, `children`
(WP page body or CPT content), optional `accordion` items, and optional
`documents` for download lists. The `SectionHeader` always renders at the top
with the page title and gold underline. `AccordionSection` and
`DocumentDownloadList` are rendered only when their respective props are provided
and non-empty. All content sits inside `Container` for consistent margins.

**Organisms used:** `SectionHeader`, `AccordionSection` (optional),
`DocumentDownloadList` (optional), `Navbar`, `Footer`

---

## PageLayout

**Path:** `src/components/templates/PageLayout/PageLayout.tsx`

Global shell used by both `HomePageTemplate` and `InnerPageTemplate` (and the
404 page directly). Wraps `Navbar` + `<main>` + `Footer` around any children.
Not used directly by page files — always accessed through a higher template.

---

## Container

**Path:** `src/layouts/Container.tsx`

Utility wrapper: `max-w-[1280px]`, `mx-auto`, `px-6`. Used inside templates
and organisms to constrain content width consistently across all pages.
