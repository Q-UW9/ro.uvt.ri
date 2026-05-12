# Merge Plan — Roles → Main

**Generated:** 2026-05-12  
**Based on:** `12_Version_Report.md`

---

## Guiding Principle

Main is the integration branch. Changes from roles are accepted only if they are **additive**, **correct**, and **consistent** with the established architecture. Anything that introduces structural errors, duplicates existing work, or conflicts with project conventions is rejected or requires a fix before merge.

---

## Decision Matrix

| Item | Source | Decision | Reason |
|------|--------|----------|--------|
| Agent memory files (00–11) | Role5, Role6 | **Skip** | Identical to main — nothing to merge |
| Week todo files (3–5) | Role5, Role6 | **Skip** | Identical to main — nothing to merge |
| `advanced-custom-fields` plugin | Role6 | **Accept** | Required for structured fields (CPTs, repeaters, FAQ blocks) per architecture |
| `custom-post-type-ui` plugin | Role6 | **Accept** | Required for CPT registration per Week 4–5 tasks |
| `styles/globals.css` | Role6 | **Accept with edit** | Useful typography baseline; import path must be verified against `index.css` |
| `TestPage.tsx` | Role6 | **Accept with fix** | Good component integration test; import path uses typo `molechules` → must be corrected |
| Role6 `molechules/` folder | Role6 | **Reject** | Typo — do not copy this folder or path into main |
| Role6 `SectionHeader.tsx` (under `molechules/`) | Role6 | **Skip** | Content is identical to main's `molecules/SectionHeader/SectionHeader.tsx` |
| Role6 subset of organisms | Role6 | **Skip** | Main already has a superset (more organisms than Role6) |
| Role6 WordPress at repo root | Role6 | **Reject** | Structural mismatch — WP must stay at `wordpress/ro.uvt.ri/` per repo convention |
| Role5 frontend (all) | Role5 | **Skip** | Identical to main |

---

## Step-by-Step Merge Instructions

### Step 1 — Copy WordPress plugins from Role6 into Main

Copy the two plugin folders from:
```
roles/role6/ro.uvt.ri/wp-content/plugins/advanced-custom-fields/
roles/role6/ro.uvt.ri/wp-content/plugins/custom-post-type-ui/
```
Into:
```
ro.uvt.ri/wordpress/ro.uvt.ri/wp-content/plugins/advanced-custom-fields/
ro.uvt.ri/wordpress/ro.uvt.ri/wp-content/plugins/custom-post-type-ui/
```

**Why accept:** ACF provides the field group infrastructure for all structured content fields (CTAs, process steps, FAQ, document repeaters, contact cards). CPTUI provides the GUI for registering the `calls`, `stories`, `resources`, `programmes`, `people` CPTs defined in `06_WordPress_Content_Model.md`. Without these, Week 5 tasks cannot begin.

**Why these are safe:** Both are standard, widely-used WordPress plugins with no custom code. They are read-only infrastructure additions that do not conflict with anything in main.

---

### Step 2 — Add `styles/globals.css` from Role6 into Main

Copy:
```
roles/role6/ro.uvt.ri/frontend/src/styles/globals.css
```
Into:
```
ro.uvt.ri/frontend/src/styles/globals.css
```

**Contents:**
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

**Why accept:** This provides a global typography baseline that is consistent with the design system. The heading rules (font-weight: 600, tight letter-spacing) align with the `Typography` atom's intent.

**Required check before accepting:** Confirm that `index.css` does not already import Tailwind in a way that conflicts with `@import "tailwindcss"`. If it does, consolidate rather than duplicate. Do not import `globals.css` automatically — leave it for Role5 (React Developer) to wire into the entry point at the appropriate time.

---

### Step 3 — Add `TestPage.tsx` from Role6 into Main, with import fix

Copy:
```
roles/role6/ro.uvt.ri/frontend/src/pages/TestPage.tsx
```
Into:
```
ro.uvt.ri/frontend/src/pages/TestPage.tsx
```

Then apply the following import correction:

**Before (wrong — Role6 typo):**
```tsx
import { SectionHeader } from '../components/molechules/SectionHeader/SectionHeader'
```

**After (correct):**
```tsx
import { SectionHeader } from '../components/molecules/SectionHeader/SectionHeader'
```

**Why accept:** `TestPage.tsx` is a practical component integration test that exercises Button, Typography, SectionHeader, AccordionSection, and PageLayout together. It is useful for verifying that the component system works end-to-end and for demoing progress during weekly reviews.

**Why the fix is required:** The `molechules` path does not exist in main. Merging without fixing would cause an immediate import error.

**Additional note:** Once merged, add a route for `TestPage` in `App.tsx` (e.g., `/test`) so it is accessible during development. This route should be removed or protected before final delivery.

---

## What Stays Out

### Role6's `molechules/` folder structure
**Rejected.** This is a typo that Role6 introduced in their local fork. Main uses `molecules/` (correctly spelled) and already has a complete `SectionHeader` there. Adopting the typo folder would corrupt the component naming convention and break all existing imports in main.

### Role6's WordPress location at repo root
**Rejected.** Role6's WordPress is installed at `roles/role6/ro.uvt.ri/` (mixed with `docs/` and `frontend/` at the same level). Main correctly separates WordPress into `wordpress/ro.uvt.ri/`. Only the plugin contents are taken (Step 1 above) — not the WordPress installation itself.

### Role6's subset component tree
**Rejected / skipped.** Role6 has a smaller set of components (missing Card, Footer, HeroSection, Navbar, TabsSection, ContentGrid). Main already has all of these. There is nothing to import from Role6's frontend beyond what is listed in Step 3.

### Role5 (everything)
**Skipped.** Role5's repository is byte-for-byte identical to main. There is nothing to merge.

---

## Post-Merge Checklist

After completing Steps 1–3, verify the following:

- [ ] `advanced-custom-fields` folder is present at `wordpress/ro.uvt.ri/wp-content/plugins/advanced-custom-fields/`
- [ ] `custom-post-type-ui` folder is present at `wordpress/ro.uvt.ri/wp-content/plugins/custom-post-type-ui/`
- [ ] Both plugins appear in the WordPress admin Plugins screen when WP is running locally
- [ ] `frontend/src/styles/globals.css` exists and does not duplicate Tailwind imports from `index.css`
- [ ] `frontend/src/pages/TestPage.tsx` exists
- [ ] `TestPage.tsx` imports `SectionHeader` from `../components/molecules/` (not `molechules`)
- [ ] `TestPage.tsx` compiles without TypeScript errors
- [ ] A `/test` route is added to `App.tsx` pointing to `TestPage` (for development use)
- [ ] No files from Role6's WordPress root (outside `wp-content/plugins/`) are copied

---

## What the Merge Does NOT Solve

This merge covers only the concrete file contributions from Role5 and Role6. The following remain open after the merge and must be addressed separately by the relevant roles:

| Gap | Owner | Priority |
|-----|-------|----------|
| WordPress CPTs not yet created/registered (even with CPTUI installed) | Role6 | High — needed for Week 5 |
| ACF field groups not yet configured | Role6 | High — needed for Week 5 |
| API layer still has only 2 stub endpoints | Role5 | High — needed for Week 5 |
| No locale routing implemented | Role5 | High — architecture calls for `/(locale)/` groups |
| `App.tsx` only has one route (`/`) | Role5 | High — routes must be built |
| No real page templates connected to live data | Role5 + Role6 | High — Week 5 target |
| `11_Project_Status.md` not updated to reflect Week 5 state | Role1 / PM | Medium |

---

## Architecture Constraints That Must Be Respected After Merge

These rules from `10_Project_Rules.md` and `03_Frontend_Architecture.md` apply to all future contributions:

1. **One canonical route per content area.** No duplicate trees.
2. **Frontend never fetches directly inside components.** All API calls go through the centralized layer at `frontend/src/api/`.
3. **Atomic order must be respected.** Atoms before molecules, molecules before organisms, templates before pages.
4. **WordPress plugins stay in `wordpress/ro.uvt.ri/wp-content/plugins/`.** Do not mix WP files with frontend or docs.
5. **No PDF-first workflows.** Content goes into WP fields, not document uploads.
6. **Folder names are lowercase, no typos.** The `molecules/` incident must not recur — review all new folder names before committing.
