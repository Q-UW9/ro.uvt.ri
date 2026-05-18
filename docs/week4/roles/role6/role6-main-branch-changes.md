# Role 6 — Main Branch Changes & Expected Features (Updated)
**Role:** WordPress Developer — API & Content Types  
**Generated:** 2026-05-17  
**Scope:** What currently exists in the role6 branch vs what must be corrected and merged into main.

---

## What Currently Exists in the Role6 Branch

### WordPress Backend

**`cptui-export.json`** — present at repo root (wrong path). Contains:

| CPT | `show_in_rest` | `has_archive` | Taxonomies attached | `excerpt` in supports |
|-----|---------------|---------------|--------------------|-----------------------|
| `programmes` | `true` | `false` | None | No |
| `calls` | `true` | `false` | None | No |
| `stories` | `true` | `false` | None | No |
| `resources` | `true` | `false` | None | No |

No taxonomy export in the file. No `people` CPT.

**ACF field groups** — 4 files in `wp-content/themes/twentytwentyfive/acf-json/`. All have `show_in_rest: 1`. Field names as actually committed:

| Group title | CPT location rule | Fields in JSON |
|-------------|------------------|----------------|
| Call Details | `post_type == calls` | `application_deadline` (date), `financial_support` (text) |
| Programme Details | `post_type == programmes` | `field_1:_deadline` (date — **broken name**), `country` (select, empty), `coordinator_email` (email) |
| Resource Details | `post_type == resources` | `download_url` (url), `document_type` (select — one malformed option) |
| Story Details | `post_type == stories` | `testimonial_author` (text), `study_destination` (text) |

**Folder structure** — WordPress still at repo root. `wordpress/ro.uvt.ri/` does not exist.

### Documentation

| File | Lines | Quality |
|------|-------|---------|
| `docs/week4/wordpress-content-structure-notes.md` | 8 | Strategy statement only; no route table |
| `docs/week4/rest-api-exposure-checklist.md` | 6 | 4 checkbox statements; no URLs, no field names |
| `docs/week4/static-vs-dynamic-content.md` | 12 | 3 static + 4 dynamic entries; incomplete |
| `docs/week4/wordpress-cpt-taxonomy-setup.md` | 8 | Taxonomy descriptions only; no CPT config |
| `docs/week4/structured-fields-setup.md` | 6 | Field names inconsistent with actual ACF JSON |

### Frontend

`frontend/src/api/wordpress.js` — unchanged from Week 3. Only `getPosts()` and `getPost(slug)`.

---

## Field Name Conflicts: Role6 vs Plan

The plan (from `role6-week4-plan.pdf` and `role6_extra.pdf`) and the `rest-api-exposure-checklist.md` in the main branch specify these names. The role6 branch has committed different names. **These must be reconciled before Role 5 writes any API helpers.**

### Calls

| Field | Plan name | Role6 ACF JSON name | Verdict |
|-------|-----------|---------------------|---------|
| Deadline | `deadline` | `application_deadline` | Rename or accept — must be agreed |
| Eligibility | `eligibility` | — | Add |
| Application steps | `application_steps` | — | Add |
| Documents | `documents` | — | Add |
| Financial support | — | `financial_support` | Not in plan — keep or remove |

### Programmes

| Field | Plan name | Role6 ACF JSON name | Verdict |
|-------|-----------|---------------------|---------|
| Duration | `duration` | — | Add |
| Language | `language` | — | Add |
| Partner institution | `partner_institution` | — | Add |
| Application deadline | `application_deadline` | `field_1:_deadline` | Broken name — must fix |
| Country | — | `country` | Not in plan |
| Coordinator email | — | `coordinator_email` | Not in plan |

### Resources

| Field | Plan name | Role6 ACF JSON name | Verdict |
|-------|-----------|---------------------|---------|
| File URL | `file_url` | `download_url` | Rename |
| File type | `file_type` | `document_type` | Rename + fix choices |
| Audience notes | `audience_notes` | — | Add |

### Stories

| Field | Plan name | Role6 ACF JSON name | Verdict |
|-------|-----------|---------------------|---------|
| Author | `author` | `testimonial_author` | Rename |
| Story date | `story_date` | `study_destination` | Replace entirely — wrong type |
| Pull quote | `pull_quote` | — | Add |

---

## What Must Be Added or Fixed Before Merging to Main

### 1. Folder Structure

Move the WordPress installation into `wordpress/ro.uvt.ri/` to match the main branch convention. Move `cptui-export.json` to `wordpress/ro.uvt.ri/cptui-export.json`.

### 2. CPTUI Configuration Fixes

The following changes must be made in WordPress admin and re-exported:

**All 4 existing CPTs:**
- Set `has_archive: true`
- Add `excerpt` to supports

**Taxonomy attachments** — attach each taxonomy to its CPTs via CPTUI and re-export:

| Taxonomy | Attach to |
|----------|-----------|
| `audience` | calls, stories, resources, programmes |
| `programme-family` | programmes |
| `content-topic` | resources, stories |
| `academic-year` | calls, resources |

**`people` CPT** — register if approved by Role 1, with `show_in_rest: true`, `has_archive` TBD.

**After changes:** re-export both post types and taxonomies to `wordpress/ro.uvt.ri/cptui-export.json` and commit.

### 3. ACF Field Group Corrections

Field names must be agreed with Role 5 before applying. Once agreed they are frozen — renaming after Role 5 writes helpers breaks the integration.

**Recommended resolution** (align to plan names for consistency with documentation):

**Calls group — rework:**

| Action | Field name | Type |
|--------|-----------|------|
| Rename from `application_deadline` | `deadline` | Date picker |
| Add | `eligibility` | Textarea |
| Add | `application_steps` | Repeater → text sub-field |
| Add | `documents` | Repeater → label (text) + url (url) |
| Decide: keep or remove | `financial_support` | Text |

**Programmes group — rework:**

| Action | Field name | Type |
|--------|-----------|------|
| Fix broken name `field_1:_deadline` → | `application_deadline` | Date picker |
| Add | `duration` | Text |
| Add | `language` | Text |
| Add | `partner_institution` | Text |
| Decide: keep or remove | `country` | Select |
| Decide: keep or remove | `coordinator_email` | Email |

**Resources group — rework:**

| Action | Field name | Type |
|--------|-----------|------|
| Rename from `download_url` | `file_url` | URL |
| Rename from `document_type` + fix choices | `file_type` | Select (PDF / DOCX / XLS / Other — separate values) |
| Add | `audience_notes` | Textarea |

**Stories group — rework:**

| Action | Field name | Type |
|--------|-----------|------|
| Rename from `testimonial_author` | `author` | Text |
| Replace `study_destination` with | `story_date` | Date picker |
| Add | `pull_quote` | Textarea |

After all changes: re-save each group to regenerate `acf-json/*.json` files. Commit updated files.

### 4. New Global ACF Field Groups

Five field groups must be created for use across WP Pages. All with `show_in_rest: 1`.

| Group | Fields |
|-------|--------|
| CTA block | `heading` (text), `body` (textarea), `button_label` (text), `button_url` (url) |
| Process steps | `steps` repeater → `step_title` (text) + `step_description` (textarea) |
| FAQ section | `faqs` repeater → `question` (text) + `answer` (textarea) |
| Contact card | `name` (text), `role` (text), `email` (email), `phone` (text) |
| Document repeater | `label` (text) + `file_url` (url) |

Re-save to write `acf-json/` files. Commit 5 new JSON files.

### 5. Documentation Rewrites

All 5 files must be substantially rewritten to be usable.

**`rest-api-exposure-checklist.md`** is the most critical. It must contain:

| Endpoint | Type | Required fields | ACF fields | Query params |
|----------|------|----------------|------------|--------------|
| `/wp-json/wp/v2/pages` | Default WP | id, slug, title, content | No | `?slug=` |
| `/wp-json/wp/v2/posts` | Default WP | id, slug, title, content, date | No | `?slug=`, `?per_page=` |
| `/wp-json/wp/v2/calls` | CPT | id, slug, title, content, acf | Yes | `?slug=`, `?audience=`, `?academic-year=` |
| `/wp-json/wp/v2/stories` | CPT | id, slug, title, content, acf | Yes | `?slug=`, `?audience=`, `?content-topic=` |
| `/wp-json/wp/v2/resources` | CPT | id, slug, title, content, acf | Yes | `?slug=`, `?audience=`, `?content-topic=`, `?academic-year=` |
| `/wp-json/wp/v2/programmes` | CPT | id, slug, title, content, acf | Yes | `?slug=`, `?audience=`, `?programme-family=` |

For each CPT endpoint the `acf` object must list the exact field names as agreed (see Section 3 above).

**`wordpress-content-structure-notes.md`** must include the full route-to-content-type table from `06_WordPress_Content_Model.md` and `01_Sitemap.md`, taxonomy relationships per CPT, and edge cases.

**`static-vs-dynamic-content.md`** must cover all routes in `01_Sitemap.md` including nested Erasmus routes, International Students sub-pages, and all dynamic detail routes (e.g. `/calls/:slug`).

**`wordpress-cpt-taxonomy-setup.md`** must document both CPT settings (slug, label, has_archive, show_in_rest, supports, attached taxonomies) and taxonomy settings (slug, label, hierarchical, show_in_rest, attached to).

**`structured-fields-setup.md`** must be rewritten to match the actual agreed field names after Group 3 is resolved. It is the frozen reference document — it must match the ACF JSON files exactly.

### 6. Frontend API Helpers

`frontend/src/api/wordpress.js` must be extended. **Do not write these until field names are finalised.**

```js
// Pages
getPages()                     // GET /wp-json/wp/v2/pages
getPage(slug)                  // GET /wp-json/wp/v2/pages?slug={slug}

// Calls
getCalls(params?)              // GET /wp-json/wp/v2/calls
getCall(slug)                  // GET /wp-json/wp/v2/calls?slug={slug}

// Programmes
getProgrammes(params?)         // GET /wp-json/wp/v2/programmes
getProgramme(slug)             // GET /wp-json/wp/v2/programmes?slug={slug}

// Resources
getResources(params?)          // GET /wp-json/wp/v2/resources
getResource(slug)              // GET /wp-json/wp/v2/resources?slug={slug}

// Stories
getStories(params?)            // GET /wp-json/wp/v2/stories
getStory(slug)                 // GET /wp-json/wp/v2/stories?slug={slug}
```

`params` must support taxonomy filter keys: `audience`, `programme-family`, `content-topic`, `academic-year`.

### 7. Test Entries

At least one published entry per CPT with all fields populated.

| CPT | Minimum |
|-----|---------|
| `calls` | 1 |
| `stories` | 1 |
| `resources` | 1 |
| `programmes` | 1 |
| `people` | 1 (if approved) |

---

## Merge Readiness Checklist

A PR from the role6 branch is ready to merge into main when:

- [ ] WordPress in `wordpress/ro.uvt.ri/` — folder structure matches main
- [ ] `cptui-export.json` at `wordpress/ro.uvt.ri/cptui-export.json` — includes post types **and** taxonomies
- [ ] All 4 CPTs: `has_archive: true`, `excerpt` in supports, taxonomies attached
- [ ] ACF field names agreed with Role 5 and frozen
- [ ] All 4 CPT field groups reworked to agreed names with missing fields added
- [ ] All 5 global field groups created
- [ ] `acf-json/*.json` updated — 9 files total (4 CPT + 5 global)
- [ ] All 5 documentation files rewritten to full specification
- [ ] `rest-api-exposure-checklist.md` usable as a contract document by Role 5
- [ ] Frontend `api/wordpress.js` updated with all CPT helpers
- [ ] REST endpoints verified returning 200 with `acf` key and correct field names
- [ ] Taxonomy terms appearing in CPT REST responses
- [ ] At least one published test entry per CPT
