# Week 3 End — Changes Report

**Generated:** 2026-05-12  
**Scope:** Changes merged into `ro.uvt.ri/` (main) from `roles/role5/` and `roles/role6/`  
**Merge basis:** `13_Merge_Plan.md`

---

> **Note on docs scope:** Documentation files inside `roles/role5/` and `roles/role6/` (including their `docs/agent_memory/`, `docs/week*/`, and `docs/management/` directories) are not considered authoritative. Only the docs inside `ro.uvt.ri/docs/` (main branch) are the canonical record. Role-level docs directories are working copies and are ignored for merge purposes.

---

## Role 5 — React Developer (Pages & Components)

Role 5's repository is fully reflected in main. Their component library and frontend scaffold constitute the primary frontend deliverable for Week 3 / Week 4.

### Frontend scaffold

| File | Status |
|------|--------|
| `frontend/src/main.tsx` | In main |
| `frontend/src/App.tsx` | In main (updated during this merge — see below) |
| `frontend/src/index.css` | In main |
| `frontend/src/styles/globals.css` | In main |
| `frontend/src/layouts/Container.tsx` | In main |
| `frontend/src/api/wordpress.js` | In main (stub) |

### Atoms

| Component | File | Notes |
|-----------|------|-------|
| `Button` | `components/atoms/Button/Button.tsx` | 3 variants: `primary`, `secondary`, `ghost`. 3 sizes: `sm`, `md`, `lg`. Accessible focus ring, disabled state. Uses `uvt-blue` and `uvt-gold` Tailwind tokens. |
| `Typography` | `components/atoms/Typography/Typography.tsx` | 5 variants: `h1`, `h2`, `h3`, `body`, `caption`. Renders the correct HTML element per variant. |

### Molecules

| Component | File | Notes |
|-----------|------|-------|
| `SectionHeader` | `components/molecules/SectionHeader/SectionHeader.tsx` | Title + optional subtitle + decorative gold rule (`bg-uvt-gold`). Composes `Typography`. |
| `Card` | `components/molecules/Card/Card.tsx` | Title, description, optional image, optional button. Hover lift effect. Composes `Button` and `Typography`. |

### Organisms

| Component | File | Notes |
|-----------|------|-------|
| `Navbar` | `components/organisms/Navbar/Navbar.tsx` | Sticky header, logo, 5 nav links, mobile menu button. Uses `uvt-blue` token. |
| `Footer` | `components/organisms/Footer/Footer.tsx` | 3 link sections + brand block + copyright bar. 4-column grid on desktop. |
| `HeroSection` | `components/organisms/HeroSection/HeroSection.tsx` | Full-width hero with `h1`, subtitle, primary + optional secondary CTA. Composes `Button`. |
| `AccordionSection` | `components/organisms/AccordionSection/AccordionSection.tsx` | Controlled single-open accordion. `aria-expanded` on trigger. `+` rotates to `×` on open. |
| `TabsSection` | `components/organisms/TabsSection/TabsSection.tsx` | Stateful tab switcher. Active tab highlighted with `uvt-blue`. `aria-selected` on buttons. |

### Templates

| Component | File | Notes |
|-----------|------|-------|
| `PageLayout` | `components/templates/PageLayout/PageLayout.tsx` | Full-height white shell. Wraps children in `Container` with `py-16` main. |
| `ContentGrid` | `components/templates/ContentGrid/ContentGrid.tsx` | Responsive grid with 2 / 3 / 4 column variants. Wraps any card-type children. |

### Pages

| File | Notes |
|------|-------|
| `pages/UnderConstruction.tsx` | Placeholder landing page. Still the default `/` route. |
| `pages/UnderConstruction.styles.js` | Styles for the above. |

---

### Role 5 — Outstanding issues

| Issue | Severity | Action needed |
|-------|----------|---------------|
| `App.tsx` only routes to `/` (UnderConstruction) | High | Routes must be wired as pages are built in Week 5–6 |
| `api/wordpress.js` is a stub with only `getPosts` / `getPost` | High | Must be expanded with CPT endpoints once WordPress CPTs are live |
| No locale routing (`/(locale)/` groups) | High | Required by architecture; not yet implemented |
| `TestPage.tsx` imports from `molechules/` (typo) | Fixed in this merge | See merge actions below |

---

## Role 6 — WordPress Developer (API & Content Types)

Role 6 contributed three categories of changes: WordPress plugin installation, a component integration test page, and a global CSS baseline.

### WordPress plugins added to the repo

The local WordPress setup for this project uses **Laragon**. The `wordpress/ro.uvt.ri/` folder in the repo contains WP files that team members manually copy into `C:/laragon/www/ro.uvt.ri/`.

The original `.gitignore` had a blanket `wordpress/` rule that ignored the entire folder — meaning no plugin or theme was ever tracked. Role 6 installed ACF and Custom Post Type UI by dropping plugin folders into their local WordPress install, which worked on their machine but was invisible to the rest of the team.

The fix applied during this merge was to **replace the blanket `wordpress/` ignore with selective rules** that ignore only WP core files while allowing `wp-content/plugins/` and `wp-content/themes/` to be tracked.

**`.gitignore` — before:**
```
# We use .wp-env.json and `npx wp-env start` to handle the backend
wordpress/
```

**`.gitignore` — after:**
```
# WordPress — ignore core, track only wp-content/plugins/ and wp-content/themes/
# Copy the contents of wordpress/ro.uvt.ri/ into C:/laragon/www/ro.uvt.ri/ for local dev
wordpress/ro.uvt.ri/wp-admin/
wordpress/ro.uvt.ri/wp-includes/
wordpress/ro.uvt.ri/wp-content/uploads/
wordpress/ro.uvt.ri/*.php
wordpress/ro.uvt.ri/license.txt
wordpress/ro.uvt.ri/readme.html
```

What is now tracked:

| Path | Tracked |
|------|---------|
| `wp-content/plugins/advanced-custom-fields/` | ✅ Yes |
| `wp-content/plugins/custom-post-type-ui/` | ✅ Yes |
| `wp-content/plugins/akismet/` | ✅ Yes |
| `wp-content/themes/twentytwenty*/` | ✅ Yes |
| `wp-admin/` | ❌ Ignored (WP core) |
| `wp-includes/` | ❌ Ignored (WP core) |
| `wp-content/uploads/` | ❌ Ignored (user uploads) |
| Root `*.php` files (wp-login, wp-config, etc.) | ❌ Ignored (WP core) |

| Plugin | Purpose |
|--------|---------|
| Advanced Custom Fields | Field groups, repeaters, and structured field types needed for CPT content models (CTA blocks, process steps, FAQ, document repeaters, contact cards, deadline blocks) |
| Custom Post Type UI | GUI for registering the custom post types defined in `06_WordPress_Content_Model.md`: `call`, `story`, `resource`, `programme`, `people` |

**Effect on team workflow:** Any team member pulling from main will now receive the ACF and CPTUI plugin folders. They copy `wordpress/ro.uvt.ri/` into `C:/laragon/www/ro.uvt.ri/` as before, then activate the plugins in the WordPress admin.

### `TestPage.tsx` — component integration test

Role 6 authored `frontend/src/pages/TestPage.tsx` as a visual integration test for the component system. It exercises:

- `PageLayout` (template shell)
- `SectionHeader` (molecule)
- `Typography` — `h1` and `body` variants (atom)
- `Button` — all three variants: `primary`, `secondary`, `ghost` (atom)
- `AccordionSection` with two items (organism)

This page was already present in main but contained a broken import path (the `molechules` typo from Role 6's local fork). **This was fixed as part of this merge** (see merge actions below).

### `styles/globals.css` — global typography baseline

Role 6 also authored `frontend/src/styles/globals.css`, providing a consistent body and heading baseline:

```css
@import "tailwindcss";

body {
  background-color: white;
  color: #111827;
  font-family: sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 600;
  letter-spacing: -0.02em;
}
```

This file was already present in main at the time of this merge (identical content). No copy action was needed.

---

### Role 6 — Outstanding issues

| Issue | Severity | Action needed |
|-------|----------|---------------|
| ACF and CPTUI are in `wp-content/plugins/` but not yet activated or configured | High | Role 6 must activate both plugins in WordPress admin and begin CPT registration |
| No CPTs created yet (`call`, `story`, `resource`, `programme`, `people`) | High | Core Week 5 deliverable |
| No ACF field groups configured | High | Required before REST API can expose structured content |
| WordPress located at wrong path in role fork (repo root instead of `wordpress/`) | Medium | Role 6 must reorganise their local fork to match main's structure before next PR |
| `TestPage.tsx` in role6 fork still contains the `molechules` typo | Low | Role 6 should pull from main to sync the fix |

---

## Merge Actions Taken (this session)

The following changes were made to `ro.uvt.ri/` (main) during this merge:

### 1. `.gitignore` updated — WordPress core ignored, plugins tracked

**File:** `ro.uvt.ri/.gitignore`

The original `wordpress/` blanket ignore was replaced with granular rules that expose `wp-content/plugins/` and `wp-content/themes/` to git while continuing to ignore WP core directories and root PHP files.

```diff
- # We use .wp-env.json and `npx wp-env start` to handle the backend
- wordpress/
+ # WordPress — ignore core, track only wp-content/plugins/ and wp-content/themes/
+ # Copy the contents of wordpress/ro.uvt.ri/ into C:/laragon/www/ro.uvt.ri/ for local dev
+ wordpress/ro.uvt.ri/wp-admin/
+ wordpress/ro.uvt.ri/wp-includes/
+ wordpress/ro.uvt.ri/wp-content/uploads/
+ wordpress/ro.uvt.ri/*.php
+ wordpress/ro.uvt.ri/license.txt
+ wordpress/ro.uvt.ri/readme.html
```

This makes the ACF and CPTUI plugin folders (already present in `wordpress/ro.uvt.ri/wp-content/plugins/`) visible to git for the first time.

### 2. `TestPage.tsx` import path corrected

**File:** `ro.uvt.ri/frontend/src/pages/TestPage.tsx`

```diff
- import { SectionHeader } from '../components/molechules/SectionHeader/SectionHeader'
+ import { SectionHeader } from '../components/molecules/SectionHeader/SectionHeader'
```

The `molechules` directory does not exist in main. The correct path is `molecules/`. This was a typo originating in Role 6's local fork that had propagated into main.

### 3. `/test` route added to `App.tsx`

**File:** `ro.uvt.ri/frontend/src/App.tsx`

```diff
  import { BrowserRouter, Routes, Route } from "react-router-dom";
  import UnderConstruction from "./pages/UnderConstruction";
+ import { TestPage } from "./pages/TestPage";

  function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UnderConstruction />} />
+         <Route path="/test" element={<TestPage />} />
        </Routes>
      </BrowserRouter>
    );
  }
```

`TestPage` is now accessible at `http://ro.uvt.ri.test/test` during local development. This route is for development validation only and must be removed before final delivery.

---

## State of Main After This Merge

| Area | Status |
|------|--------|
| React atoms (Button, Typography) | Complete |
| React molecules (Card, SectionHeader) | Complete |
| React organisms (Navbar, Footer, HeroSection, AccordionSection, TabsSection) | Complete |
| React templates (PageLayout, ContentGrid) | Complete |
| Component integration test (`/test` route) | Now functional |
| Global CSS baseline | Present |
| WordPress core files | Present |
| WordPress plugins (ACF, CPTUI) | In `wp-content/plugins/`, now tracked by git — not yet activated |
| WordPress CPTs | Not created |
| WordPress field groups | Not created |
| REST API endpoints beyond stub | Not implemented |
| Locale routing | Not implemented |
| Real page routes | Not implemented |
