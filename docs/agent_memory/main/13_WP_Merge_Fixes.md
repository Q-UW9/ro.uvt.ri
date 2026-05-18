# WordPress Merge — Fixes Applied
**Date:** 2026-05-18  
**Source branches:** `roles/role6/ro.uvt.ri`, `roles/role5/ro.uvt.ri` (feature/api-setup)  
**Target:** `ro.uvt.ri` (main)

---

## What Was Merged and Why

Role 6 produced the only original WordPress configuration work. Role 5's `feature/api-setup` branch contained copies of role6's ACF JSON and CPTUI export (confirmed by identical WordPress-generated group keys) on top of a committed WordPress core install — that branch was excluded from the merge.

All files were placed at the correct path: `wordpress/ro.uvt.ri/` — role6 had committed files at the repo root.

---

## Files Written to Main

| File | Type | Status |
|------|------|--------|
| `wordpress/ro.uvt.ri/cptui-export.json` | CPTUI post type config | Fixed (see Section 1) |
| `wordpress/ro.uvt.ri/cptui-taxonomies.json` | CPTUI taxonomy config | New (see Section 2) |
| `wordpress/ro.uvt.ri/wp-content/themes/twentytwentyfive/acf-json/group_6a087f7aa179c.json` | ACF — Call Details | Fixed (see Section 3) |
| `wordpress/ro.uvt.ri/wp-content/themes/twentytwentyfive/acf-json/group_6a010285605db.json` | ACF — Programme Details | Fixed (see Section 3) |
| `wordpress/ro.uvt.ri/wp-content/themes/twentytwentyfive/acf-json/group_6a0880749381c.json` | ACF — Resource Details | Fixed (see Section 3) |
| `wordpress/ro.uvt.ri/wp-content/themes/twentytwentyfive/acf-json/group_6a08815042fd6.json` | ACF — Story Details | Fixed (see Section 3) |
| `wordpress/ro.uvt.ri/wp-content/themes/twentytwentyfive/acf-json/group_6b1001a000001.json` | ACF — CTA Block (global) | New (see Section 4) |
| `wordpress/ro.uvt.ri/wp-content/themes/twentytwentyfive/acf-json/group_6b1001b000002.json` | ACF — Process Steps (global) | New (see Section 4) |
| `wordpress/ro.uvt.ri/wp-content/themes/twentytwentyfive/acf-json/group_6b1001c000003.json` | ACF — FAQ Section (global) | New (see Section 4) |
| `wordpress/ro.uvt.ri/wp-content/themes/twentytwentyfive/acf-json/group_6b1001d000004.json` | ACF — Contact Card (global) | New (see Section 4) |
| `wordpress/ro.uvt.ri/wp-content/themes/twentytwentyfive/acf-json/group_6b1001e000005.json` | ACF — Document Repeater (global) | New (see Section 4) |

---

## Section 1 — CPTUI Post Type Fixes (`cptui-export.json`)

Role6's export had all 4 CPTs misconfigured in the same three ways.

### Fix 1: `has_archive` set to `true` on all CPTs

| CPT | Before | After |
|-----|--------|-------|
| programmes | `"false"` | `"true"` |
| calls | `"false"` | `"true"` |
| stories | `"false"` | `"true"` |
| resources | `"false"` | `"true"` |

Without `has_archive: true`, WordPress does not create the archive page (`/calls/`, `/programmes/` etc.) — the frontend list pages would 404.

### Fix 2: `excerpt` added to `supports` on all CPTs

| CPT | Before | After |
|-----|--------|-------|
| all 4 | `["title","editor","thumbnail"]` | `["title","editor","thumbnail","excerpt"]` |

The excerpt field is used as a short summary in listing views (card descriptions, search results, RSS). Without it the field is not available in the WP editor.

### Fix 3: Taxonomy slugs attached to CPTs

| CPT | Before (`taxonomies`) | After (`taxonomies`) |
|-----|----------------------|---------------------|
| programmes | `[]` | `["audience","programme-family"]` |
| calls | `[]` | `["audience","academic-year"]` |
| stories | `[]` | `["audience","content-topic"]` |
| resources | `[]` | `["audience","content-topic","academic-year"]` |

Empty taxonomy arrays mean taxonomy filter query params (`?audience=`, `?programme-family=` etc.) return no results — the REST API filtering that Role 5 depends on would be silently broken.

### Fix 4: File path corrected

Role6 committed the file at the repo root. Correct path: `wordpress/ro.uvt.ri/cptui-export.json`.

---

## Section 2 — CPTUI Taxonomy Definitions (new file: `cptui-taxonomies.json`)

Role6 listed the 4 taxonomies in a markdown file but never created a CPTUI taxonomy export. Without this file there is no replicable record of how to register the taxonomies in a fresh WordPress install.

A separate file is used because CPTUI imports post types and taxonomies via different admin pages.

| Taxonomy | Slug | Hierarchical | Attached to |
|----------|------|--------------|-------------|
| Audiences | `audience` | No | calls, stories, resources, programmes |
| Programme Families | `programme-family` | Yes | programmes |
| Content Topics | `content-topic` | No | resources, stories |
| Academic Years | `academic-year` | Yes | calls, resources |

All 4 have `show_in_rest: true` so taxonomy terms appear in REST responses and can be used as filter query params.

`programme-family` and `academic-year` are `hierarchical: true` (behave like categories) because they have parent–child relationships (e.g. Erasmus+ > KA1). `audience` and `content-topic` are flat tags.

---

## Section 3 — ACF Field Group Fixes

### Calls — `group_6a087f7aa179c.json`

| Field | Issue | Fix |
|-------|-------|-----|
| `application_deadline` | Name differed from plan spec (`deadline`) | Renamed to `deadline`; label updated to "Deadline" |
| `financial_support` | Not in plan spec but semantically valid | Kept — useful for editors, no conflict with Role 5 |
| `eligibility` | Missing entirely | Added as `textarea` |
| `application_steps` | Missing entirely | Added as `repeater` → sub-field `step` (text) |
| `documents` | Missing entirely | Added as `repeater` → sub-fields `label` (text) + `url` (url) |
| `return_format` on deadline | Was `"d/m/Y"` | Changed to `"Y-m-d"` — ISO format; JS `Date` parses this without ambiguity |

### Programmes — `group_6a010285605db.json`

| Field | Issue | Fix |
|-------|-------|-----|
| `field_1:_deadline` | Broken name — `field_1:_` prefix from a CPTUI import collision; ACF REST response would return key as literal `field_1:_deadline` | Renamed to `application_deadline`; label already read "Deadline" |
| `country` | Empty `choices: []` — select with no options | Kept field; left choices empty for admin to populate; set `allow_null: 1` so it doesn't block save |
| `coordinator_email` | Not in original plan but operationally useful | Kept |
| `duration` | Missing | Added as `text` with instruction hint "e.g. 1 semester, 10 months" |
| `language` | Missing | Added as `text` with instruction hint "e.g. English, Romanian" |
| `partner_institution` | Missing | Added as `text` |
| `return_format` on deadline | Was `"d/m/Y"` | Changed to `"Y-m-d"` |

### Resources — `group_6a0880749381c.json`

| Field | Issue | Fix |
|-------|-------|-----|
| `download_url` | Name differed from plan spec (`file_url`) | Renamed to `file_url`; label updated to "File URL" |
| `document_type` | Name differed (`file_type`); single malformed choice `"PDF, DOCX, Link": "PDF, DOCX, Link"` (all three types packed into one option) | Renamed to `file_type`; label updated to "File Type"; choices replaced with `{"PDF":"PDF","DOCX":"DOCX","XLS":"XLS","Other":"Other"}`; set `allow_null: 1` |
| `audience_notes` | Missing | Added as `textarea` |

### Stories — `group_6a08815042fd6.json`

| Field | Issue | Fix |
|-------|-------|-----|
| `testimonial_author` | Name differed (`author`) | Renamed to `author`; label updated to "Author" |
| `study_destination` | Wrong field entirely — text type, wrong purpose (was recording study destination, not a story date) | Replaced with `story_date` (`date_picker`, `return_format: "Y-m-d"`) |
| `pull_quote` | Missing | Added as `textarea` with `new_lines: "br"` (preserves line breaks in quotes) |

---

## Section 4 — New Global ACF Field Groups

Five field groups for use on WordPress Pages (`post_type == page`). All have `show_in_rest: 1`.

| Group key | Title | Fields |
|-----------|-------|--------|
| `group_6b1001a000001` | CTA Block | `heading` (text), `body` (textarea), `button_label` (text), `button_url` (url) |
| `group_6b1001b000002` | Process Steps | `steps` repeater → `step_title` (text) + `step_description` (textarea) |
| `group_6b1001c000003` | FAQ Section | `faqs` repeater → `question` (text) + `answer` (textarea) |
| `group_6b1001d000004` | Contact Card | `name` (text), `role` (text), `email` (email), `phone` (text) |
| `group_6b1001e000005` | Document Repeater | `documents` repeater → `label` (text) + `file_url` (url) |

---

## Section 5 — What Was Excluded and Why

### Role5 `feature/api-setup` branch

| Item | Reason excluded |
|------|----------------|
| WordPress core files (`wp-admin/`, `wp-includes/`, `index.php`, etc.) | Should never be committed — git tracked WP core inflates the repo and creates merge conflicts on every WP update |
| ACF plugin files | Same reason — plugins are installed via WordPress admin, not committed (unless the project uses Composer, which it does not) |
| `cptui-export.json` (role5 copy) | Identical to role6's broken version; committed at repo root |
| 5 doc stubs | Identical to role6's stubs verbatim — confirmed by content match |
| 4 ACF JSON files (role5 copy) | Identical to role6's broken versions — confirmed by matching WordPress-generated group keys (`group_6a087f7aa179c` etc.) which are unique per WP installation |

---

## Frozen Field Name Reference

This is the contract for Role 5's API helpers. Field names here match the ACF JSON files now in main exactly.

### `/wp-json/wp/v2/calls` — `acf` object

| Field | Type | REST key |
|-------|------|----------|
| `deadline` | date (`Y-m-d`) | `acf.deadline` |
| `financial_support` | string | `acf.financial_support` |
| `eligibility` | string (HTML) | `acf.eligibility` |
| `application_steps` | array of `{step}` | `acf.application_steps` |
| `documents` | array of `{label, url}` | `acf.documents` |

### `/wp-json/wp/v2/programmes` — `acf` object

| Field | Type | REST key |
|-------|------|----------|
| `application_deadline` | date (`Y-m-d`) | `acf.application_deadline` |
| `duration` | string | `acf.duration` |
| `language` | string | `acf.language` |
| `partner_institution` | string | `acf.partner_institution` |
| `country` | string (select value) | `acf.country` |
| `coordinator_email` | string | `acf.coordinator_email` |

### `/wp-json/wp/v2/resources` — `acf` object

| Field | Type | REST key |
|-------|------|----------|
| `file_url` | string (url) | `acf.file_url` |
| `file_type` | string (`PDF`\|`DOCX`\|`XLS`\|`Other`) | `acf.file_type` |
| `audience_notes` | string (HTML) | `acf.audience_notes` |

### `/wp-json/wp/v2/stories` — `acf` object

| Field | Type | REST key |
|-------|------|----------|
| `author` | string | `acf.author` |
| `story_date` | date (`Y-m-d`) | `acf.story_date` |
| `pull_quote` | string | `acf.pull_quote` |

---

## What Still Requires Manual WordPress Admin Work

These items cannot be fixed by editing JSON files — they require a running WordPress instance.

| Task | Why it needs admin |
|------|-------------------|
| Import `cptui-export.json` via CPTUI → "Import Post Types" | Registers the 4 CPTs in the database |
| Import `cptui-taxonomies.json` via CPTUI → "Import Taxonomies" | Registers the 4 taxonomies |
| Navigate to ACF → Tools → Sync for `acf-json/` | Imports the 9 field groups from Local JSON into the database |
| Add `country` select choices to Programme Details | Choices are empty — admin must populate country list |
| Create at least one published test entry per CPT | Required to verify REST responses return `acf` key with correct field names |
| Verify `/wp-json/wp/v2/calls` etc. return 200 with `acf` key | REST endpoint verification |
