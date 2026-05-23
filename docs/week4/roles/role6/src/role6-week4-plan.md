# Role 6 — Week 4 Plan
**Role:** WordPress Developer — API & Content Types  
**Week:** 4  
**Project:** RI.UVT.RO Redesign  
**Sources:** `week4.md` · `week-4-todo.md` · `gap_report.pdf` · `role6-week4-plan.pdf` · `role6_extra.pdf`

---

## Status Legend

| Mark | Meaning |
|------|---------|
| `[W3]` | Week 3 carry-over — was required last week, not delivered |
| `[ ]` | Not started |
| `[x]` | Done |

---

## Context Entering Week 4

Role 6 installed ACF and Custom Post Type UI in Week 3 and committed them to the tracked plugin location. No other deliverables were produced. All documentation was missing. The folder structure of the role fork does not match main.

**Current state of the WordPress backend:**

| Area | Status |
|------|--------|
| ACF plugin | In `wp-content/plugins/` — not yet activated |
| Custom Post Type UI plugin | In `wp-content/plugins/` — not yet activated |
| CPTs (`call`, `story`, `resource`, `programme`, `people`) | Not created |
| Taxonomies | Not created |
| ACF field groups | Not created |
| REST API endpoints beyond WP default | Not implemented |
| Role fork folder structure | WordPress at repo root — must be fixed |
| `cptui-export.json` | Not committed |
| `acf-json/` folder | Not created |

The gap report identifies the REST API exposure checklist as the **most critical missing item** in the entire project. Without it, Role 5 cannot write typed API helpers, and Week 5 content integration cannot begin.

---

## Priority Order This Week

```
1. Fix folder structure in role fork
2. Produce three W3 carry-over documents (blocks everything else)
3. Activate plugins in WordPress admin
4. Register CPTs and taxonomies
5. Create ACF field groups
6. Export CPTUI config and ACF Local JSON to the repo
7. Verify REST API responses
8. Create test entries for Role 5
```

Do not proceed to step 3 until steps 1 and 2 are complete. Role 5 cannot write API helpers without the REST API exposure checklist. Field names agreed in that document must not change after step 5.

---

## Step 1 — Fix Folder Structure

Move WordPress files into the correct location to match main:

```
Current (wrong):
roles/role6/ro.uvt.ri/
  wp-admin/
  wp-content/
  wp-includes/
  frontend/
  docs/

Required (to match main):
roles/role6/ro.uvt.ri/
  wordpress/
    ro.uvt.ri/
      wp-content/
  frontend/
  docs/
```

This does not affect Laragon — Laragon reads from `C:/laragon/www/`, not from the repo.

Also pull the updated `.gitignore` from main before the next commit.

---

## Step 2 — Week 3 Carry-Over Documentation

These three documents must be written before any WordPress configuration begins.

### [W3] `wordpress-content-structure-notes.md`

Document which content lives in which WordPress content type. Use `06_WordPress_Content_Model.md` and `01_Sitemap.md` as sources.

Reference table:

| Content type | Route | Backed by |
|---|---|---|
| About | `/about` | WP Page |
| Erasmus section pages | `/erasmus/*` | WP Page |
| International Students section pages | `/international-students/*` | WP Page |
| Partnerships | `/partnerships` | WP Page |
| News | `/news` | WP Post |
| Announcements | (under news) | WP Post |
| Open calls | `/calls` | CPT `call` |
| Student stories | `/stories` | CPT `story` |
| Downloadable resources | `/resources` | CPT `resource` |
| Study programmes | `/programmes` | CPT `programme` |
| Staff / contacts | TBD | CPT `people` — confirm with Role 1 |

Also cover: how taxonomies relate to each CPT, any content that does not fit neatly into the above categories.

### [W3] `rest-api-exposure-checklist.md`

List every endpoint the frontend will consume. For each endpoint specify:
- The endpoint URL
- Whether it is a default WP endpoint or requires a registered CPT
- Which fields must appear in the REST response
- Whether ACF fields need explicit REST API exposure enabled
- Any filters or query parameters the frontend will use

**Minimum endpoints to document:**

| Endpoint | Type | Required fields | ACF needed |
|---|---|---|---|
| `/wp-json/wp/v2/pages` | Default WP | id, slug, title, content | No |
| `/wp-json/wp/v2/posts` | Default WP | id, slug, title, content, date | No |
| `/wp-json/wp/v2/calls` | CPT | id, slug, title, content, acf | Yes |
| `/wp-json/wp/v2/stories` | CPT | id, slug, title, content, acf | Yes |
| `/wp-json/wp/v2/resources` | CPT | id, slug, title, content, acf | Yes |
| `/wp-json/wp/v2/programmes` | CPT | id, slug, title, content, acf | Yes |
| `/wp-json/wp/v2/people` | CPT (if approved) | id, slug, title, acf | Yes |

**ACF field names per CPT (must be agreed with Role 5 before finalising):**

| CPT | Field name | Type |
|-----|-----------|------|
| `call` | `deadline` | date |
| `call` | `eligibility` | textarea |
| `call` | `application_steps` | repeater |
| `call` | `documents` | repeater (label + url) |
| `programme` | `duration` | text |
| `programme` | `language` | text |
| `programme` | `partner_institution` | text |
| `programme` | `application_deadline` | date |
| `resource` | `file_url` | url |
| `resource` | `file_type` | select |
| `resource` | `audience_notes` | textarea |
| `story` | `author` | text |
| `story` | `story_date` | date |
| `story` | `pull_quote` | textarea |

**Coordinate field names with Role 5 before finalising. Once agreed, field names must not change.**

### [W3] `static-vs-dynamic-content.md`

Classify every route from `01_Sitemap.md` as one of four types:

| Classification | Meaning |
|---|---|
| Static | Content lives in a WP Page. Frontend fetches by slug. |
| Dynamic — list | Frontend queries a CPT archive. Returns multiple entries. |
| Dynamic — detail | Frontend fetches a single CPT entry by slug. |
| Mixed | WP Page shell with embedded CPT query blocks. |

Produce as a table covering all routes. This document is needed by Role 1 for consistency validation and by Role 2 for UX validation.

---

## Step 3 — Activate Plugins

Once documentation is written:

1. Open Laragon — start Apache and MySQL
2. Navigate to `http://ro.uvt.ri.test/wp-admin`
3. Go to **Plugins → Installed Plugins**
4. Activate **Advanced Custom Fields**
5. Activate **Custom Post Type UI**

---

## Step 4 — Register Custom Post Types via CPTUI

Settings for every CPT: Public: Yes, Show in REST: **Yes**, Supports: title, editor, thumbnail, excerpt.

| CPT slug | Label | Has archive | REST base |
|----------|-------|-------------|-----------|
| `call` | Calls | Yes | `calls` |
| `story` | Stories | Yes | `stories` |
| `resource` | Resources | Yes | `resources` |
| `programme` | Programmes | Yes | `programmes` |
| `people` | People | TBD | `people` |

**Confirm `people` CPT with Role 1 before creating it.**

### Taxonomies

| Taxonomy slug | Label | Attached to | Hierarchical | show_in_rest |
|---------------|-------|-------------|--------------|--------------|
| `audience` | Audience | All CPTs | No | Yes |
| `programme-family` | Programme Family | `programme` | Yes | Yes |
| `content-topic` | Content Topic | `resource`, `story` | No | Yes |
| `academic-year` | Academic Year | `call`, `resource` | Yes | Yes |

---

## Step 5 — Export CPTUI Configuration

After registering CPTs and taxonomies:

1. Go to **CPT UI → Tools**
2. Under **Export Post Types** and **Export Taxonomies**, click **Get Code** (or JSON export if available)
3. Save as `wordpress/ro.uvt.ri/cptui-export.json`
4. Commit to role branch

This is the file teammates use to import the configuration via CPT UI → Tools → Import Post Types / Import Taxonomies.

---

## Step 6 — Create ACF Field Groups

Create one field group per CPT. Every group must have **Show in REST API: enabled**.

### Calls field group

| Field label | Field name | Type |
|-------------|------------|------|
| Deadline | `deadline` | Date picker |
| Eligibility | `eligibility` | Textarea |
| Application steps | `application_steps` | Repeater → Text sub-field |
| Documents | `documents` | Repeater → label (text) + url (url) |

### Programmes field group

| Field label | Field name | Type |
|-------------|------------|------|
| Duration | `duration` | Text |
| Language | `language` | Text |
| Partner institution | `partner_institution` | Text |
| Application deadline | `application_deadline` | Date picker |

### Resources field group

| Field label | Field name | Type |
|-------------|------------|------|
| File URL | `file_url` | URL |
| File type | `file_type` | Select (PDF / DOCX / XLS / Other) |
| Audience notes | `audience_notes` | Textarea |

### Stories field group

| Field label | Field name | Type |
|-------------|------------|------|
| Author | `author` | Text |
| Story date | `story_date` | Date picker |
| Pull quote | `pull_quote` | Textarea |

### Global field groups (for WP Pages)

| Group | Fields |
|-------|--------|
| CTA block | `heading` (text), `body` (textarea), `button_label` (text), `button_url` (url) |
| Process steps | `steps` repeater → `step_title` (text) + `step_description` (textarea) |
| FAQ section | `faqs` repeater → `question` (text) + `answer` (textarea) |
| Contact card | `name` (text), `role` (text), `email` (email), `phone` (text) |
| Document repeater | `label` (text) + `file_url` (url) |

---

## Step 7 — Enable ACF Local JSON Sync

This makes ACF field groups file-based and shareable via git (required by `role6_extra.pdf`).

1. Create this folder inside the active theme:
   `wordpress/ro.uvt.ri/wp-content/themes/[active-theme]/acf-json/`
2. Go to **ACF → Field Groups**
3. Open each field group and click **Save** (even without changes) — ACF will write a `.json` file per group into `acf-json/`
4. Commit the `acf-json/` folder and all generated `.json` files

Teammates import by: pull repo → copy `wordpress/ro.uvt.ri/` to Laragon → open ACF → Field Groups → click **Sync**.

---

## Step 8 — Verify REST API Responses

After plugins and field groups are set up, verify each endpoint:

```
http://ro.uvt.ri.test/wp-json/wp/v2/calls
http://ro.uvt.ri.test/wp-json/wp/v2/stories
http://ro.uvt.ri.test/wp-json/wp/v2/resources
http://ro.uvt.ri.test/wp-json/wp/v2/programmes
```

Check that:
- Endpoint returns `200`
- The `acf` key appears in each entry's JSON
- Taxonomy terms appear in the response
- Field names match `rest-api-exposure-checklist.md`

If ACF fields are missing: go to **ACF → Field Groups → [group] → Settings → Show in REST API → enable**.

---

## Step 9 — Create Test Entries

Add at least one published entry per CPT. Placeholder content is fine — all fields must be populated so Role 5 can validate the response shape.

| CPT | Minimum entries |
|-----|----------------|
| `call` | 1 |
| `story` | 1 |
| `resource` | 1 |
| `programme` | 1 |
| `people` | 1 (if approved) |

---

## Deliverables Checklist

### Week 3 carry-overs (produce before anything else)

- [W3] [ ] `wordpress-content-structure-notes.md` committed
- [W3] [ ] `rest-api-exposure-checklist.md` committed and shared with Role 5
- [W3] [ ] `static-vs-dynamic-content.md` committed and shared with Role 1 + Role 2

### Week 4 implementation deliverables

- [ ] Role fork folder structure fixed — `wordpress/ro.uvt.ri/` in correct location
- [ ] `.gitignore` pulled from main
- [ ] ACF and CPTUI activated in WordPress admin
- [ ] `call` CPT registered with REST support
- [ ] `story` CPT registered with REST support
- [ ] `resource` CPT registered with REST support
- [ ] `programme` CPT registered with REST support
- [ ] `people` CPT decision made with Role 1; registered if approved
- [ ] `audience` taxonomy registered — attached to all CPTs
- [ ] `programme-family` taxonomy registered
- [ ] `content-topic` taxonomy registered
- [ ] `academic-year` taxonomy registered
- [ ] `cptui-export.json` committed at `wordpress/ro.uvt.ri/cptui-export.json`
- [ ] ACF field group for `calls` created — REST enabled — field names match checklist
- [ ] ACF field group for `programmes` created — REST enabled
- [ ] ACF field group for `resources` created — REST enabled
- [ ] ACF field group for `stories` created — REST enabled
- [ ] Global field groups created (CTA, process steps, FAQ, contact card, document repeater)
- [ ] `acf-json/` folder created in active theme
- [ ] All field groups re-saved to generate JSON files
- [ ] `acf-json/*.json` files committed
- [ ] All CPT REST endpoints verified returning `200` with `acf` key
- [ ] Taxonomy terms appearing in REST responses confirmed
- [ ] At least one test entry per CPT created and published
- [ ] `wordpress-cpt-taxonomy-setup.md` committed — record of CPT and taxonomy settings
- [ ] `structured-fields-setup.md` committed — record of all field groups and field names

---

## Dependencies This Week

| Role | What Role 6 needs from them | When |
|------|-----------------------------|------|
| Role 1 | Confirmation on whether `people` CPT is needed | Before creating it |
| Role 2 | `wordpress-structure-user-flow-feedback.md` | Before finalising taxonomy structure |
| Role 5 | Confirm which API helper function names will be used | Before finalising field names in checklist |

| Role | What they need from Role 6 | When |
|------|---------------------------|------|
| Role 5 | `rest-api-exposure-checklist.md` + confirmed field names | Before any CPT API helpers are written |
| Role 1 | `static-vs-dynamic-content.md` | For frontend consistency validation |
| Role 2 | `static-vs-dynamic-content.md` | For UX validation |
| Role 5 | CPT REST endpoints live with test entries | Week 5 content integration start |

---

## Definition of Done — Role 6, Week 4

- [ ] Three carry-over documents committed
- [ ] All four CPTs registered with REST support and exported to `cptui-export.json`
- [ ] All four taxonomies registered and showing in REST responses
- [ ] ACF field groups created for all CPTs and global groups, all REST-enabled
- [ ] `acf-json/*.json` files committed
- [ ] All CPT endpoints verified returning `200` with `acf` key
- [ ] At least one test entry per CPT exists in local database
- [ ] `wordpress-cpt-taxonomy-setup.md` and `structured-fields-setup.md` committed
- [ ] Role fork folder structure matches main

---

## Week 5 Handoff Condition

Role 5 cannot begin content integration in Week 5 without:

1. `rest-api-exposure-checklist.md` — needed to write typed API helpers
2. Confirmed CPT REST endpoints returning real data — needed to test helpers
3. At least one test entry per CPT — needed to validate response shape

All three are Role 6's responsibility and are currently missing.
