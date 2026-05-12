# Version Report — All Branches

**Generated:** 2026-05-12  
**Scope:** `ro.uvt.ri` (main) · `roles/role5/ro.uvt.ri` · `roles/role6/ro.uvt.ri`

---

## Overview

Three versions of the repository were analysed:

| Version | Path | Role |
|---------|------|------|
| **Main** | `ro.uvt.ri/` | Canonical integration branch |
| **Role5** | `roles/role5/ro.uvt.ri/` | React Developer — Pages & Components |
| **Role6** | `roles/role6/ro.uvt.ri/` | WordPress Developer — API & Content Types |

---

## 1. Agent Memory Files (`docs/agent_memory/`)

| File | Main | Role5 | Role6 |
|------|------|-------|-------|
| `00_Project_Vision.md` | ✅ | ✅ identical | ✅ identical |
| `01_Sitemap.md` | ✅ | ✅ identical | ✅ identical |
| `02_User_Flows.md` | ✅ | ✅ identical | ✅ identical |
| `03_Frontend_Architecture.md` | ✅ | ✅ identical | ✅ identical |
| `04_Component_System.md` | ✅ | ✅ identical | ✅ identical |
| `05_Route_Component_Map.md` | ✅ | ✅ identical | ✅ identical |
| `06_WordPress_Content_Model.md` | ✅ | ✅ identical | ✅ identical |
| `07_API_Contract.md` | ✅ | ✅ identical | ✅ identical |
| `08_Technical_Task_List.md` | ✅ | ✅ identical | ✅ identical |
| `09_Developer_Workflow.md` | ✅ | ✅ identical | ✅ identical |
| `10_Project_Rules.md` | ✅ | ✅ identical | ✅ identical |
| `11_Project_Status.md` | ✅ | ✅ identical | ✅ identical |

**Verdict:** All 12 agent memory files are byte-for-byte identical across all three versions. No divergence.

---

## 2. Weekly To-Do Files (`docs/week*/`)

| File | Main | Role5 | Role6 |
|------|------|-------|-------|
| `week3/week-3-todo.md` | ✅ | ✅ identical | ✅ identical |
| `week4/week-4-todo.md` | ✅ | ✅ identical | ✅ identical |
| `week5/week-5-todo.md` | ✅ | ✅ identical | ✅ identical |

**Verdict:** All three weekly to-do files are identical across all three versions. No divergence.

---

## 3. Frontend Code (`frontend/src/`)

### 3a. Component structure comparison

| Layer | Component | Main | Role5 | Role6 |
|-------|-----------|------|-------|-------|
| **atoms** | `Button` | ✅ | ✅ identical | ✅ identical |
| **atoms** | `Typography` | ✅ | ✅ identical | ✅ identical |
| **molecules** | `Card` | ✅ | ✅ identical | ❌ missing |
| **molecules** | `SectionHeader` | ✅ (`molecules/`) | ✅ identical | ⚠️ present but under `molechules/` (typo) |
| **organisms** | `AccordionSection` | ✅ | ✅ identical | ✅ identical |
| **organisms** | `Footer` | ✅ | ✅ identical | ❌ missing |
| **organisms** | `HeroSection` | ✅ | ✅ identical | ❌ missing |
| **organisms** | `Navbar` | ✅ | ✅ identical | ❌ missing |
| **organisms** | `TabsSection` | ✅ | ✅ identical | ❌ missing |
| **templates** | `ContentGrid` | ✅ | ✅ identical | ❌ missing |
| **templates** | `PageLayout` | ✅ | ✅ identical | ✅ identical |
| **layouts** | `Container` | ✅ | ✅ identical | ✅ identical |

### 3b. Pages comparison

| File | Main | Role5 | Role6 |
|------|------|-------|-------|
| `pages/UnderConstruction.tsx` | ✅ | ✅ identical | ✅ identical |
| `pages/UnderConstruction.styles.js` | ✅ | ✅ identical | ✅ identical |
| `pages/TestPage.tsx` | ✅ | ✅ identical | ✅ **unique origin** — authored by Role6 |

### 3c. Styles comparison

| File | Main | Role5 | Role6 |
|------|------|-------|-------|
| `index.css` | ✅ | ✅ identical | ✅ identical |
| `App.css` | ✅ | ✅ identical | ✅ identical |
| `styles/globals.css` | ❌ absent | ❌ absent | ✅ **unique** — authored by Role6 |

### 3d. `App.tsx` and `main.tsx`

All three versions: **identical**. Single route `/` → `UnderConstruction`.

### 3e. `frontend/src/api/wordpress.js`

All three versions: **identical**. Stub file with `getPosts` and `getPost` only.

---

## 4. WordPress (`wp-content/`)

Main's WordPress lives at `wordpress/ro.uvt.ri/` (nested).  
Role6's WordPress lives at `roles/role6/ro.uvt.ri/` (root of their fork — structural discrepancy).

### 4a. Plugins comparison

| Plugin | Main | Role5 | Role6 |
|--------|------|-------|-------|
| `akismet` | ✅ | N/A | ✅ |
| `hello.php` | ✅ | N/A | ✅ |
| `advanced-custom-fields` | ❌ **absent** | N/A | ✅ **added by Role6** |
| `custom-post-type-ui` | ❌ **absent** | N/A | ✅ **added by Role6** |

### 4b. Themes comparison

| Theme | Main | Role6 |
|-------|------|-------|
| `twentytwentythree` | ✅ | ✅ |
| `twentytwentyfour` | ✅ | ✅ |
| `twentytwentyfive` | ✅ | ✅ |

No custom theme exists in either version.

### 4c. `wp-config.php`

Both main and Role6 use identical database config: `ro_uvt_ri`, `root`, no password, `localhost`.

---

## 5. Summary of Unique Contributions by Role

### Role5 — React Developer
- **No unique changes.** Role5's entire repository is byte-for-byte identical to main across docs, frontend, and all other files reviewed. Role5 either pulled from main and made no changes, or their work was already integrated into main.

### Role6 — WordPress Developer
Role6 has four unique contributions not present in main:

| # | Contribution | Location | Type |
|---|-------------|----------|------|
| 1 | `advanced-custom-fields` plugin | `wp-content/plugins/` | WordPress plugin |
| 2 | `custom-post-type-ui` plugin | `wp-content/plugins/` | WordPress plugin |
| 3 | `pages/TestPage.tsx` | `frontend/src/pages/` | React test page |
| 4 | `styles/globals.css` | `frontend/src/styles/` | Global CSS |

Role6 also has one **bug**: the `molecules` folder is misspelled as `molechules`, and `TestPage.tsx` imports from that wrong path. This cannot be merged as-is.

---

## 6. Known Issues

| Issue | Version | Severity |
|-------|---------|----------|
| `molecules` folder spelled `molechules` | Role6 | High — breaks imports |
| `TestPage.tsx` imports from `molechules/` path | Role6 | High — would break after merge |
| WordPress located at repo root instead of `wordpress/` subfolder | Role6 | Medium — structural mismatch |
| `TestPage.tsx` not yet wired into `App.tsx` router | Main + all | Low — no route exists for it yet |
| `App.tsx` only has one route (`/`) | All | Medium — routes are not yet implemented |

---

## 7. Current Project State (as of 2026-05-12)

Based on `11_Project_Status.md` (dated 2026-05-09) combined with observed code:

| Area | Status |
|------|--------|
| Planning docs (Weeks 1–2) | Complete |
| Agent memory | Complete and consistent |
| Week 3–5 to-do lists | Written, all unchecked |
| React atoms | ✅ Built (Button, Typography) |
| React molecules | ✅ Partial (Card, SectionHeader) |
| React organisms | ✅ Substantial (Accordion, Footer, Hero, Navbar, Tabs) |
| React templates | ✅ Partial (PageLayout, ContentGrid) |
| API layer | ⚠️ Stub only (2 endpoints, no CPTs) |
| WordPress CPTs | ❌ Not configured |
| WordPress plugins (ACF, CPTUI) | ❌ Not in main (but exist in Role6) |
| Locale routing | ❌ Not implemented |
| Any real page routes | ❌ Not implemented |
