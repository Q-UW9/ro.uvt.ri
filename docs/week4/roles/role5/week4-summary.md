# Role 5 — React Developer
## Week 4 Summary

---

## What was done this week

### Full Component Library — Built and Merged

The entire frontend component library was built from scratch and merged into `main`. Every component follows the atomic design model: atoms → molecules → organisms → templates.

**Atoms** — `src/components/atoms/`

| Component | Responsibility |
|-----------|----------------|
| `Button` | 4 variants (primary, secondary, ghost, danger), 5 states; `clsx` for conditional classes |
| `Typography` | Semantic h1–h3, body, caption with consistent type scale |
| `Divider` | Horizontal rule separator |
| `Icon` | `react-icons` wrapper with consistent sizing |
| `LanguageSwitcher` | RO/EN locale toggle buttons |

**Molecules** — `src/components/molecules/`

| Component | Responsibility |
|-----------|----------------|
| `Card` | Title, description, optional link button; hover lift effect |
| `SectionHeader` | Title, optional subtitle, gold underline accent bar |

**Organisms** — `src/components/organisms/`

| Component | Responsibility |
|-----------|----------------|
| `Navbar` | Sticky header, desktop nav links, mobile menu stub |
| `Footer` | Brand column + 3 nav sections + copyright bar |
| `HeroSection` | Full-width animated hero, title, subtitle, up to 2 CTA buttons |
| `AccordionSection` | Accessible accordion (`aria-expanded` wired) — FAQ and expandable content |
| `TabsSection` | Stateful tab switcher (`aria-selected`, `uvt-blue` active state) |
| `DocumentDownloadList` | Downloadable file list with label, file type badge, accessible links |
| `ContentSection` | Generic rich text content block |
| `NewsSection` | Grid of announcement/news items |

**Templates** — `src/components/templates/`

| Component | Responsibility |
|-----------|----------------|
| `PageLayout` | Global shell: Navbar + `<main>` + Footer |
| `ContentGrid` | Responsive CSS grid — configurable 2/3/4 columns |
| `PageTransition` | Framer-motion fade-in wrapper |
| `SectionRenderer` | Iterates a `sections` array and renders the correct organism per `section.type` |
| `HomePageTemplate` | Full homepage: hero → audience cards → news strip |
| `InnerPageTemplate` | All inner pages: SectionHeader + content + optional accordion + optional download list |

**Layouts** — `src/layouts/`

| Component | Responsibility |
|-----------|----------------|
| `Container` | Centres content at `max-w-[1280px]` with `px-6` padding |

`UnderConstruction.tsx` was reworked into a full vertical page demo integrating all new components.

A folder naming typo was also corrected (`molechules` → `molecules`).

---

### Planning Documents Delivered

| Document | Status |
|----------|--------|
| `react-route-strategy.md` | ✅ Complete — 29-route map, full App.tsx structure |
| `component-architecture-week4.md` | ✅ Complete — full inventory, props, composition rules |
| `page-template-planning.md` | ✅ Complete — data interfaces for both templates |
| `layout-template-implementation.md` | ✅ Complete — composition notes |
| `design-system.md` | ✅ Written — sparse summary (typography, grid, nav, a11y rules) |

---

### Architecture Rules Enforced

- No API calls inside components — all fetching stays in `src/api/wordpress.js`
- No routing inside templates or organisms
- Templates compose organisms; organisms do not compose templates
- Page files own data fetching and pass data down as props
- Tailwind utility classes only — no per-component `.css` files

---

## Deliverables status

| Item | Status |
|------|--------|
| Atoms (5) | ✅ Done |
| Molecules (2) | ✅ Done |
| Organisms (8) | ✅ Done |
| Templates (6) | ✅ Done |
| Planning documents (5) | ✅ Done |
| Route tree wired in `App.tsx` | ⚠️ Written — pending Role 1 Vite/Next.js decision |
| Locale routing (`/ro`, `/en`) | ❌ Not started — blocked on same decision |
| CPT API helpers | ❌ Not written — unblocked now (field names frozen in `13_WP_Merge_Fixes.md`) |
| Navbar label corrections (4) | ❌ Not applied — see Role 2 feedback |

---

## Carrying into Week 5

1. Fix 4 Navbar label corrections from Role 2's `NavigationConsistencyFeedback.md`
2. Add `Scholarships & Exchanges` and `News` as placeholder links in `Navbar.tsx`
3. Write CPT API helpers — `getCalls`, `getProgrammes`, `getResources`, `getStories`, `getPages`
4. Wire the route tree into `App.tsx` once Role 1 records the Vite decision
5. Build individual page files in `src/pages/` once routes are wired
