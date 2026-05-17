# Component Architecture — Week 4

**File:** `docs/component-architecture-week4.md`  
**Author:** Role 5 — React Developer  
**Week:** 4  
**Status:** Ready for Role 2 review

---

## 1. Component Inventory

All components currently in `frontend/src/`:

### Atoms — `src/components/atoms/`

| Component | Path | Responsibility |
|-----------|------|----------------|
| `Button` | `atoms/Button/Button.tsx` | Renders a styled `<button>` with variant (primary, secondary) and size (sm, md, lg) props |
| `Typography` | `atoms/Typography/Typography.tsx` | Renders semantic heading or paragraph elements (h1–h3, body, caption) with consistent type scale |
| `Divider` | `atoms/Divider/Divider.tsx` | Renders a horizontal rule separator |
| `Icon` | `atoms/Icon/Icon.tsx` | Wraps `react-icons` icons with consistent sizing |
| `LanguageSwitcher` | `atoms/LanguageSwitcher/LanguageSwitcher.tsx` | Renders RO/EN toggle buttons for locale switching |

### Molecules — `src/components/molecules/`

| Component | Path | Responsibility |
|-----------|------|----------------|
| `Card` | `molecules/Card/Card.tsx` | Renders a content card with title, description, and an optional link button |
| `SectionHeader` | `molecules/SectionHeader/SectionHeader.tsx` | Renders a section title, optional subtitle, and a gold underline accent |

### Organisms — `src/components/organisms/`

| Component | Path | Responsibility |
|-----------|------|----------------|
| `Navbar` | `organisms/Navbar/Navbar.tsx` | Site-wide top navigation with links and language switcher (mobile menu is a stub) |
| `Footer` | `organisms/Footer/Footer.tsx` | Site-wide footer with four column link groups |
| `HeroSection` | `organisms/HeroSection/HeroSection.tsx` | Full-width animated hero with title, subtitle, and up to two CTA buttons |
| `AccordionSection` | `organisms/AccordionSection/AccordionSection.tsx` | Accessible accordion with `aria-expanded` wired for FAQ and expandable content |
| `TabsSection` | `organisms/TabsSection/TabsSection.tsx` | Tabbed content panel |
| `DocumentDownloadList` | `organisms/DocumentDownloadList/DocumentDownloadList.tsx` | List of downloadable files with label, file type badge, and accessible download links |
| `ContentSection` | `organisms/ContentSection/ContentSection.tsx` | Generic content block for rich text areas |
| `NewsSection` | `organisms/NewsSection/NewsSection.tsx` | Renders a grid of announcement/news items |

### Templates — `src/components/templates/`

| Component | Path | Responsibility |
|-----------|------|----------------|
| `PageLayout` | `templates/PageLayout/PageLayout.tsx` | Global shell: wraps Navbar + `<main>` + Footer around any page content |
| `ContentGrid` | `templates/ContentGrid/ContentGrid.tsx` | Responsive CSS grid wrapper with configurable column count |
| `PageTransition` | `templates/PageTransition/PageTransition.tsx` | Wraps page content in a framer-motion fade-in animation |
| `SectionRenderer` | `templates/SectionRenderer/SectionRenderer.tsx` | Iterates a `sections` array and renders the correct organism per `section.type` |
| `HomePageTemplate` | `templates/HomePageTemplate/HomePageTemplate.tsx` | Composes the full homepage layout: hero, audience cards, news |
| `InnerPageTemplate` | `templates/InnerPageTemplate/InnerPageTemplate.tsx` | Composes inner page layout: page title header, main content, optional accordion or download list |

### Layouts — `src/layouts/`

| Component | Path | Responsibility |
|-----------|------|----------------|
| `Container` | `layouts/Container.tsx` | Centres content horizontally with `max-w-[1280px]` and `px-6` padding |

---

## 2. Global vs Page-Specific Components

**Global** (used on every page, not tied to any route):
- `Navbar`, `Footer`, `PageLayout`, `Container`, `PageTransition`
- `Typography`, `Button`, `Divider`, `Icon`, `LanguageSwitcher`

**Page-specific or context-specific** (used only where relevant):
- `HeroSection` — homepage and section landing pages only
- `AccordionSection` — FAQ and Erasmus detail pages
- `DocumentDownloadList` — call detail and resource detail pages
- `NewsSection` — homepage and news archive
- `TabsSection` — pages with tabbed content (e.g. Erasmus sub-sections)
- `ContentSection` — inner pages with rich WP content
- `SectionRenderer` — homepage only (renders `homePageData` array)

---

## 3. Naming Conventions

- **Component names:** PascalCase — e.g. `HeroSection`, `DocumentDownloadList`
- **File names:** match the component name exactly — e.g. `HeroSection.tsx`
- **Folder names:** match the component name exactly — one folder per component
- **Import pattern:** direct named imports, not barrel `index.ts` files

```tsx
// Correct — direct import
import { HeroSection } from '../../organisms/HeroSection/HeroSection'

// Not used in this project — no index.ts barrels
import { HeroSection } from '../../organisms/HeroSection'
```

- **CSS:** Tailwind utility classes only. No separate `.css` files per component
  (exception: `UnderConstruction.styles.ts` uses a styles object pattern — avoid
  extending this pattern to new components; prefer inline Tailwind classes)
- **Style helper:** `clsx` is used in `Button` and `Typography` for conditional classes

---

## 4. Atomic Composition Model

Components compose upward: atoms → molecules → organisms → templates → pages.

**Worked example — a card section on the homepage:**

```
Typography (atom)
  └─ used inside SectionHeader (molecule)
       └─ used inside HomePageTemplate (template)

Button (atom)
  └─ used inside Card (molecule)
       └─ Card used inside ContentGrid (template)
            └─ ContentGrid used inside HomePageTemplate (template)

HomePageTemplate (template)
  └─ rendered by HomePage (page)
       └─ mounted at route "/" in App.tsx
```

**Rule:** organisms do not compose other organisms. Templates compose organisms.
Pages compose templates and pass data down as props.

---

## 5. Props Interface Summary

| Component | Key Props |
|-----------|-----------|
| `Button` | `variant?: 'primary' \| 'secondary'`, `size?: 'sm' \| 'md' \| 'lg'`, `children`, `className`, all native `ButtonHTMLAttributes` |
| `Typography` | `variant?: 'h1' \| 'h2' \| 'h3' \| 'body' \| 'caption'`, `children`, `className` |
| `Card` | `title: string`, `description: string`, `buttonText?: string`, `route?: string` |
| `SectionHeader` | `title: string`, `subtitle?: string`, `className?: string` |
| `HeroSection` | `title: string`, `subtitle: string`, `primaryButtonText?`, `secondaryButtonText?`, `primaryButtonLink?`, `secondaryButtonLink?` |
| `DocumentDownloadList` | `documents: Array<{ label: string; url: string; fileType?: string }>` |
| `PageLayout` | `children: ReactNode` |
| `ContentGrid` | `children: ReactNode`, `columns?: number` |
| `Container` | `children: ReactNode`, `className?: string` |
| `InnerPageTemplate` | `title: string`, `subtitle?: string`, `children: ReactNode`, `accordion?: AccordionItem[]`, `documents?: DocumentItem[]` |
| `HomePageTemplate` | `heroData: HeroSectionProps`, `cards: CardProps[]`, `news: NewsItem[]` |

---

## 6. Rules for Adding New Components

**Create a new atom when:**
- The element is a single HTML primitive with styling logic (button, input, label, badge)
- It has no knowledge of other components
- It will be reused in 3+ different organisms or molecules

**Extend an existing atom when:**
- You only need an additional variant or size — add it to the existing component's
  variant map rather than creating a new file

**Create a new molecule when:**
- The component combines 2–3 atoms into a meaningful unit (e.g. icon + label)
- It represents a recognisable UI pattern but is not a full page section

**Create a new organism when:**
- The component is a self-contained page section with its own layout
- It may contain data logic (e.g. maps over a list) but does not fetch data itself

**Create a new template when:**
- The component defines a full page layout by composing multiple organisms
- It accepts data as props and does not fetch data itself

**Create a new page file when:**
- A new route is added to `App.tsx`
- The page file handles data fetching and passes data down to a template

---

## 7. Architecture Separation Rules

These rules are enforced across the codebase:

1. **No API calls inside components.** All fetching lives in `src/api/wordpress.js`.
2. **Routing only in `App.tsx`.** Templates and organisms have no knowledge of routes.
3. **Templates compose organisms.** Organisms never compose templates.
4. **Page files own data fetching.** They call `api/wordpress.js` functions and pass
   results as props to templates — no inline fetching in JSX.
5. **Data shape lives in `src/data/`.** Static mock data and type definitions for
   page sections live here until the WordPress API is connected.
