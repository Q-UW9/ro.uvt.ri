# Role 6 — Week 4 Review (Updated)
**Role:** WordPress Developer — API & Content Types  
**Reviewed:** 2026-05-17  
**Source branch:** `roles/role6/ro.uvt.ri`  
**Main branch:** `ro.uvt.ri`

---

## What Was Done Correctly

| Item | Evidence | Notes |
|------|----------|-------|
| 4 CPTs registered with `show_in_rest: true` | `cptui-export.json` | `programmes`, `calls`, `stories`, `resources` all present |
| CPTUI export committed | `cptui-export.json` at repo root | File exists and is importable |
| ACF field group for calls created | `acf-json/group_6a087f7aa179c.json` | `show_in_rest: 1` ✓ |
| ACF field group for programmes created | `acf-json/group_6a010285605db.json` | `show_in_rest: 1` ✓ |
| ACF field group for resources created | `acf-json/group_6a0880749381c.json` | `show_in_rest: 1` ✓ |
| ACF field group for stories created | `acf-json/group_6a08815042fd6.json` | `show_in_rest: 1` ✓ |
| ACF Local JSON Sync enabled | `acf-json/` folder exists in `twentytwentyfive` theme | 4 `.json` files committed |
| All ACF field groups have REST enabled | `show_in_rest: 1` in all 4 JSON files | ACF REST exposure active |
| 5 documentation files created | `docs/week4/` folder | Files present |
| 4 taxonomies listed | `wordpress-cpt-taxonomy-setup.md` | `audience`, `programme-family`, `content-topic`, `academic-year` named |

---

## What Is Wrong or Incomplete

### 1. Folder Structure — Not Fixed

WordPress files remain at the root of `roles/role6/ro.uvt.ri/` instead of inside `wordpress/ro.uvt.ri/`. The required structure matching main has not been applied. This was Step 1 in the plan and is still unresolved.

`cptui-export.json` is committed at the repo root rather than at `wordpress/ro.uvt.ri/cptui-export.json` as specified in `role6_extra.pdf`.

---

### 2. ACF Field Names Do Not Match the Plan

This is the most critical issue. **Field names are the contract between the WordPress backend and Role 5's API helpers.** Every field group has been built with different names than what the plan specifies. If Role 5 writes API helpers based on the plan's names — which they should, since the `rest-api-exposure-checklist.md` is the reference — the frontend will receive `undefined` for every ACF field.

#### Calls field group — `group_6a087f7aa179c.json`

| Plan specifies | Actual in JSON | Status |
|----------------|---------------|--------|
| `deadline` (date picker) | `application_deadline` (date picker) | **Name mismatch** |
| `eligibility` (textarea) | — | **Missing** |
| `application_steps` (repeater) | — | **Missing** |
| `documents` (repeater) | — | **Missing** |
| — | `financial_support` (text) | **Not in plan — undocumented addition** |

#### Programmes field group — `group_6a010285605db.json`

| Plan specifies | Actual in JSON | Status |
|----------------|---------------|--------|
| `duration` (text) | — | **Missing** |
| `language` (text) | — | **Missing** |
| `partner_institution` (text) | — | **Missing** |
| `application_deadline` (date picker) | `field_1:_deadline` (date picker) | **Broken field name** — contains `field_1:_` prefix; will not resolve in REST response |
| — | `country` (select, empty choices) | **Not in plan** |
| — | `coordinator_email` (email) | **Not in plan** |

#### Resources field group — `group_6a0880749381c.json`

| Plan specifies | Actual in JSON | Status |
|----------------|---------------|--------|
| `file_url` (url) | `download_url` (url) | **Name mismatch** |
| `file_type` (select: PDF/DOCX/XLS/Other) | `document_type` (select) | **Name mismatch** + choices malformed (single option `"PDF, DOCX, Link"` instead of separate values) |
| `audience_notes` (textarea) | — | **Missing** |

#### Stories field group — `group_6a08815042fd6.json`

| Plan specifies | Actual in JSON | Status |
|----------------|---------------|--------|
| `author` (text) | `testimonial_author` (text) | **Name mismatch** |
| `story_date` (date picker) | `study_destination` (text) | **Wrong field entirely** — different type and purpose |
| `pull_quote` (textarea) | — | **Missing** |

---

### 3. CPT Configuration Defects

| Setting | Plan requires | Actual (from `cptui-export.json`) | Status |
|---------|--------------|----------------------------------|--------|
| `has_archive` | `true` for all CPTs | `false` for all 4 CPTs | **Wrong** — archive pages will not work |
| `supports` | title, editor, thumbnail, **excerpt** | title, editor, thumbnail | **Missing `excerpt`** |
| `taxonomies` attached | audience (all), programme-family, content-topic, academic-year per CPT | Empty `"taxonomies":[]` on all CPTs | **Taxonomies not attached** |
| `people` CPT | Required (pending Role 1 confirmation) | Not present | **Missing** |

---

### 4. Taxonomies — Not Verified as Registered

`wordpress-cpt-taxonomy-setup.md` lists the 4 taxonomies by name, but there is no taxonomy export in the CPTUI export file and the `taxonomies` arrays in all CPTs are empty. There is no evidence the taxonomies were actually registered in WordPress — only that they were documented in a text file.

A CPTUI taxonomy export (or the `register_taxonomy` PHP equivalent) must exist for the configuration to be replicable by teammates.

---

### 5. No Global ACF Field Groups

The plan requires 5 global field groups for use across WP Pages:

| Group | Status |
|-------|--------|
| CTA block | **Not created** |
| Process steps | **Not created** |
| FAQ section | **Not created** |
| Contact card | **Not created** |
| Document repeater | **Not created** |

None of the 4 `acf-json/` files correspond to global groups.

---

### 6. Documentation Files Are Superficial Stubs

All 5 documentation files exist, but their content does not meet the specification.

#### `wordpress-content-structure-notes.md` — 8 lines total

The plan requires a table mapping every route to its WordPress content type, taxonomy relationships, and any edge cases. The actual file contains only a two-sentence strategy statement with no route table, no taxonomy mapping, and no coverage of the Erasmus or International Students section trees.

#### `rest-api-exposure-checklist.md` — 4 bullet points

The plan requires this as a **contract document for Role 5** listing every endpoint URL, required fields, ACF exposure status, and query parameters. The actual file contains 4 high-level checkbox statements with no endpoint URLs, no field names, and no query parameter documentation. **Role 5 cannot write API helpers from this document.**

#### `static-vs-dynamic-content.md` — 8 lines total

The plan requires a table covering every route in `01_Sitemap.md` classified as static / dynamic-list / dynamic-detail / mixed. The actual file lists 3 static slugs and 4 dynamic base endpoints — far fewer than the full sitemap covers. No mixed routes documented. No detail routes documented.

#### `wordpress-cpt-taxonomy-setup.md` — Taxonomies only

The plan requires this to document CPT configuration (slugs, labels, archive setting, REST setting, taxonomy attachments, supports). The actual file lists taxonomies only, with no CPT settings, no REST configuration record, and no attachment mapping.

#### `structured-fields-setup.md` — Wrong field names

This file documents fields that differ from what was actually created in the ACF JSON files. For example it lists `financial_support` for calls and `coordinator_email` for programmes, but does not match the plan's names either. It cannot serve as the reference document for Role 5 because it is inconsistent with both the plan and the actual ACF configuration.

---

### 7. Frontend API Helpers — Not Extended

`frontend/src/api/wordpress.js` is unchanged from the Week 3 state. It still contains only `getPosts()` and `getPost(slug)`. No CPT helpers were added.

---

### 8. Test Entries — Unverifiable

No test content entries are committed (they are database-only). Without these, Role 5 cannot validate API response shapes. The ACF field name mismatches mean even if entries existed, the response shape would not match what Role 5 expects.

---

## Deliverables Scorecard

| Deliverable | Required | Status | Notes |
|-------------|----------|--------|-------|
| Folder structure fixed | Yes | **No** | WordPress still at root |
| `cptui-export.json` committed | Yes | **Partial** | Exists but at wrong path; missing taxonomy export |
| `call` CPT with REST | Yes | **Partial** | Registered, but `has_archive: false`, no taxonomies attached |
| `story` CPT with REST | Yes | **Partial** | Same issues |
| `resource` CPT with REST | Yes | **Partial** | Same issues |
| `programme` CPT with REST | Yes | **Partial** | Same issues |
| `people` CPT | Decision required | **Missing** | Not created, no decision documented |
| Taxonomies registered | Yes | **Unverified** | Listed in doc, no export, not attached in CPTUI |
| ACF field groups (4 CPTs) | Yes | **Partial** | Created + REST-enabled, but field names wrong throughout |
| ACF `acf-json/` committed | Yes | **Done** | 4 files in correct theme folder |
| Global ACF field groups | Yes | **Missing** | None of the 5 created |
| REST endpoints verified | Yes | **Unknown** | No verification record |
| Test entries per CPT | Yes | **Missing** | No evidence of entries |
| `wordpress-content-structure-notes.md` | Yes | **Partial** | Exists but too thin |
| `rest-api-exposure-checklist.md` | Yes | **Partial** | Exists but unusable as contract |
| `static-vs-dynamic-content.md` | Yes | **Partial** | Exists but incomplete |
| `wordpress-cpt-taxonomy-setup.md` | Yes | **Partial** | Taxonomies only, no CPT config |
| `structured-fields-setup.md` | Yes | **Partial** | Wrong field names |
| Frontend CPT API helpers | Yes | **Missing** | `wordpress.js` unchanged |

**Summary: 1 fully done (acf-json/ committed), 9 partial, 9 missing/wrong.**

---

## Work to Finish

Ordered by dependency. Later groups should not start before the preceding group is resolved.

### Group 1 — Fix structural issues (no WordPress required)

- [ ] Move WordPress files into `wordpress/ro.uvt.ri/` in the role fork. Pull updated `.gitignore` from main.
- [ ] Move `cptui-export.json` to `wordpress/ro.uvt.ri/cptui-export.json`.
- [ ] Rewrite `rest-api-exposure-checklist.md` — it must list every endpoint URL, every required field name, ACF exposure flag, and any query params. This is the document Role 5 uses to write API helpers. The current version cannot serve that purpose.
- [ ] Rewrite `wordpress-content-structure-notes.md` — add the full route table covering all sitemap routes mapped to content type.
- [ ] Rewrite `static-vs-dynamic-content.md` — add all routes including nested Erasmus/International Students routes and all dynamic detail routes.
- [ ] Rewrite `structured-fields-setup.md` — must match the actual ACF JSON field names exactly (or update the ACF JSON to match the plan — see Group 2).

### Group 2 — Fix ACF field names and CPT config (requires Laragon)

**Coordinate with Role 5 first** — agree which field names will be used before making changes. Changing names after Role 5 has written helpers will break the integration.

- [ ] Fix Calls field group: rename `application_deadline` → `deadline`; add `eligibility` (textarea), `application_steps` (repeater → text sub-field), `documents` (repeater → label + url). Decide whether `financial_support` stays or is removed.
- [ ] Fix Programmes field group: rename the broken `field_1:_deadline` to `application_deadline`; replace `country` and `coordinator_email` with `duration` (text), `language` (text), `partner_institution` (text), and keep `application_deadline`.
- [ ] Fix Resources field group: rename `download_url` → `file_url`; rename `document_type` → `file_type`; fix select choices to separate values (PDF, DOCX, XLS, Other); add `audience_notes` (textarea).
- [ ] Fix Stories field group: rename `testimonial_author` → `author`; replace `study_destination` with `story_date` (date picker); add `pull_quote` (textarea).
- [ ] Re-save all field groups after changes to regenerate `acf-json/` files. Commit updated JSON files.
- [ ] Fix all 4 CPTs in CPTUI: set `has_archive: true`, add `excerpt` to supports.
- [ ] Attach taxonomies to CPTs in CPTUI: `audience` to all, `programme-family` to programmes, `content-topic` to resources + stories, `academic-year` to calls + resources.
- [ ] Re-export CPTUI config (post types + taxonomies) to `wordpress/ro.uvt.ri/cptui-export.json`. Commit.
- [ ] Decide on `people` CPT with Role 1. Register if approved.

### Group 3 — Create missing field groups (requires Group 2 done)

- [ ] Create global CTA block field group: `heading` (text), `body` (textarea), `button_label` (text), `button_url` (url). REST enabled.
- [ ] Create Process steps group: `steps` repeater → `step_title` (text) + `step_description` (textarea). REST enabled.
- [ ] Create FAQ section group: `faqs` repeater → `question` (text) + `answer` (textarea). REST enabled.
- [ ] Create Contact card group: `name` (text), `role` (text), `email` (email), `phone` (text). REST enabled.
- [ ] Create Document repeater group: `label` (text) + `file_url` (url). REST enabled.
- [ ] Re-save all groups to write their `acf-json/` files. Commit.

### Group 4 — Verify and test (requires Groups 2–3 done)

- [ ] Verify `/wp-json/wp/v2/calls`, `/stories`, `/resources`, `/programmes` all return 200 with `acf` key.
- [ ] Verify taxonomy terms appear in CPT REST responses.
- [ ] Verify field names in REST responses match `rest-api-exposure-checklist.md`.
- [ ] Create at least one published test entry per CPT with all fields populated.

### Group 5 — Frontend API helpers (can run parallel to Group 3, after field names agreed)

- [ ] Add to `frontend/src/api/wordpress.js`: `getPages()`, `getPage(slug)`, `getCalls(params?)`, `getCall(slug)`, `getProgrammes(params?)`, `getProgramme(slug)`, `getResources(params?)`, `getResource(slug)`, `getStories(params?)`, `getStory(slug)`.
- [ ] Use field names exactly as agreed in the fixed `rest-api-exposure-checklist.md`.
