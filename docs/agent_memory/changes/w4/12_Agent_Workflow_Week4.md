# Agent Workflow — Week 4 Analysis & Merge Session
**Date:** 2026-05-18  
**Scope:** Roles 1, 2, 4, 5, 6 — Week 4 planning, fork analysis, merge decisions

---

## Session Overview

This document records what the agent did during the Week 4 management session: which forks were analyzed, what documents were produced, what merges were executed, and the standing issues that affect downstream roles.

---

## Phase 1 — Role 6 Initial Analysis

**Inputs read:**
- `docs/week4/role6-week4-plan.pdf`
- `docs/week4/role6_extra.pdf`
- `roles/role6/ro.uvt.ri/cptui-export.json`
- `roles/role6/ro.uvt.ri/wp-content/themes/twentytwentyfive/acf-json/*.json` (4 files)
- `roles/role6/ro.uvt.ri/docs/week4/*.md` (5 files)
- `roles/role6/ro.uvt.ri/frontend/src/api/wordpress.js`

**Finding:** Role 6 fork had CPT registration and ACF JSON committed but with critical field name mismatches against the plan. Documentation files were superficial stubs. No taxonomy export. No global ACF groups. Frontend API helpers unchanged from Week 3.

**Outputs created:**
- `docs/week4/role6/role6-week4-review.md` — scorecard: 1 fully done, 9 partial, 9 missing/wrong
- `docs/week4/role6/role6-main-branch-changes.md` — field name conflict tables, merge readiness checklist (15 items)

---

## Phase 2 — Role-Specific Week 4 Plans

**Inputs read:**
- `docs/week4/week4.md`
- `docs/week4/week-4-todo.md`
- `docs/week4/role6/role6-week4-plan.md`

**Outputs created** (one per role):
- `docs/week4/role1/role1-week4-plan.md` — Vite vs Next.js decision, architecture sign-off, coordination tasks
- `docs/week4/role2/role2-week4-plan.md` — Component review (Week 3 carry-over), Divider/Button/Card/HeroSection builds
- `docs/week4/role4/role4-week4-plan.md` — Design system docs, Divider atom, Icon atom, LanguageSwitcher atom
- `docs/week4/role5/role5-week4-plan.md` — 3 carry-over docs, DocumentDownloadList, InnerPageTemplate, HomePageTemplate, route tree, API helpers
- `docs/week4/role6/role6-week4-plan.md` — 9-step plan: structure fix, CPT config, ACF rework, global groups, docs rewrite, frontend helpers

---

## Phase 3 — Role 6 Re-Analysis (updated fork)

After the user confirmed the fork had been updated, the agent re-ran analysis against the current state.

**Change from Phase 1:** Some items previously marked missing were now partially complete (ACF JSON committed, CPTUI export present, 5 doc stubs created). The core problem remained: field names inconsistent across plan, `structured-fields-setup.md`, and actual ACF JSON.

**Outputs updated:**
- `docs/week4/role6/role6-week4-review.md` — rewritten with field-name-by-field-name comparison tables
- `docs/week4/role6/role6-main-branch-changes.md` — rewritten with exact current state and full change list

---

## Phase 4 — Role 5 Analysis and Merge

**Inputs read:**
- `docs/week3/gap_report.pdf`
- `docs/week3/end_changes.pdf`
- `docs/week4/plan.pdf`
- `roles/role5/ro.uvt.ri/` — full recursive file listing + git diff `12bd029c..HEAD`

**Finding (corrected):** Role 5 did produce Week 4 work in commits `8a18c8c` and `fc7e920`. Six new component files were added (Card, SectionHeader, Footer, HeroSection, Navbar, TabsSection, ContentGrid), a folder naming typo was fixed (`molechules` → `molecules`), and `UnderConstruction.tsx` was reworked into a full page assembly demo. All these changes are already present in main — filesystem diff confirmed content identity.

Initial analysis incorrectly concluded no new work existed because `diff -rq` compared role5 files to main files (already identical), not to the branch's own base commit.

**Merge status:** All role5 Week 4 changes are already in main. No copy needed.

**Output created:**
- `docs/week4/role5/role5-week4-report.md` — corrected scorecard (7 component deliverables done, planning docs + integration work missing), blocker list

---

## Project-Wide Blockers Identified

These issues affect multiple roles and must be resolved before Week 5 work can proceed normally.

### 1. ACF Field Name Contract Not Frozen (Roles 5 & 6)

The most critical cross-role dependency. `rest-api-exposure-checklist.md` in the role6 branch is non-functional as a contract document. Role 5 cannot write CPT API helpers until field names are agreed between Role 5 and Role 6.

**Required action:** Role 6 must fix ACF field groups (per `role6-week4-review.md` Group 2 checklist), regenerate `acf-json/` files, and rewrite `rest-api-exposure-checklist.md` with exact field names and endpoint URLs. Only then can Role 5 extend `wordpress.js`.

### 2. Taxonomy Registration Unverified (Role 6)

CPTUI export contains no taxonomy export. `taxonomies: []` on all CPTs. The 4 taxonomies (`audience`, `programme-family`, `content-topic`, `academic-year`) are listed in a markdown file but have no evidence of being registered in WordPress or attached to any CPT.

**Required action:** Role 6 must register taxonomies in CPTUI and re-export.

### 3. Route Architecture Not Decided (Roles 1 & 5)

The Vite vs Next.js decision and the full route tree design were deferred carry-overs from Week 3. Without a frozen route strategy, Role 5 cannot implement the full `App.tsx` route tree or locale routing.

**Required action:** Role 1 must decide and document the architecture. Role 5 must write the `react-route-strategy.md` carry-over document.

### 4. No `people` CPT Decision (Role 6 → Role 1)

The `people` CPT is marked "pending Role 1 confirmation." This decision has not been recorded anywhere.

---

## File Inventory — Documents Created This Session

| File | Type | Purpose |
|------|------|---------|
| `docs/week4/role1/role1-week4-plan.md` | Plan | Role 1 tasks and deliverables for Week 4 |
| `docs/week4/role2/role2-week4-plan.md` | Plan | Role 2 tasks and deliverables for Week 4 |
| `docs/week4/role4/role4-week4-plan.md` | Plan | Role 4 tasks and deliverables for Week 4 |
| `docs/week4/role5/role5-week4-plan.md` | Plan | Role 5 tasks and deliverables for Week 4 |
| `docs/week4/role5/role5-week4-report.md` | Report | Role 5 Week 4 accomplishment review |
| `docs/week4/role6/role6-week4-plan.md` | Plan | Role 6 tasks and deliverables for Week 4 |
| `docs/week4/role6/role6-week4-review.md` | Report | Role 6 Week 4 accomplishment review (rewritten) |
| `docs/week4/role6/role6-main-branch-changes.md` | Spec | What must change in role6 before merging to main |
| `docs/agent_memory/main/12_Agent_Workflow_Week4.md` | Workflow | This document |

---

## How to Use This Document in Future Sessions

- Read `docs/week4/role6/role6-week4-review.md` before doing any further Role 6 work. The ACF field name tables in Section 2 are the authoritative record of what names are currently in the JSON vs what the plan requires.
- Read `docs/week4/role5/role5-week4-report.md` to understand that Role 5 has no Week 4 code yet and needs Role 6 field names before writing helpers.
- The `docs/week4/role#/role#-week4-plan.md` files are the tasklists for each role. Start there when picking up any role's week 4 work.
- `07_API_Contract.md` in this folder should be updated when ACF field names are finally frozen — it is the long-term record of the WordPress API contract.
