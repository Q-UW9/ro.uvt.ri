# Role 6 — Week 5 Detailed Plan
**Role:** WordPress Developer  
**Week:** 5 (19–26 May 2026)  
**Beta deadline:** 02.06.2026

---

## Context

The WordPress configuration exists in the repo as JSON files, but nothing is active in the WP admin yet. No CPTs, no taxonomies, no field groups, no content. The frontend cannot connect to any real data until you complete Day 1–2 tasks. This is blocking Role 5 and Role 8.

**WP admin:** `http://ro.uvt.ri.test/wp-admin/`  
**Laragon must be running** before any WP admin work.

---

## Day 1 — Monday 19 May: Import CPTUI

### Step 1 — Import post types

1. Log in to WP Admin
2. Navigate to: **Custom Post Types UI → Tools**
3. Click the **Import Post Types** tab
4. Open `wordpress/ro.uvt.ri/cptui-export.json` in a text editor, select all, copy
5. Paste into the import textarea and click **Import**
6. Verify: go to **Custom Post Types UI → Add/Edit Post Types** — you should see: `calls`, `stories`, `resources`, `programmes`

### Step 2 — Import taxonomies

1. Still in **Custom Post Types UI → Tools**
2. Click the **Import Taxonomies** tab
3. Open `wordpress/ro.uvt.ri/cptui-taxonomies.json`, copy all
4. Paste and click **Import**
5. Verify: go to **Custom Post Types UI → Add/Edit Taxonomies** — you should see: `audience`, `programme-family`, `content-topic`, `academic-year`

### Step 3 — Check taxonomy attachments

Confirm each taxonomy is attached to the correct CPTs:

| Taxonomy | Attached to |
|----------|-------------|
| `audience` | calls, stories, resources, programmes |
| `programme-family` | programmes only |
| `content-topic` | resources, stories |
| `academic-year` | calls, resources |

If any attachment is wrong, edit the taxonomy in CPTUI and add the missing CPT.

### Step 4 — Confirm CPT menu items appear

In WP Admin left sidebar, you should now see menu items for Calls, Stories, Resources, Programmes. If they do not appear, deactivate and reactivate the CPTUI plugin.

---

## Day 2 — Tuesday 20 May: Sync ACF field groups

### Step 1 — Sync ACF

1. Navigate to: **ACF → Tools**
2. Click the **Sync** tab (or look for a sync notification at the top of **ACF → Field Groups**)
3. You should see 9 files listed from `acf-json/`:
   - group_6a087f7aa179c — Call Details
   - group_6a010285605db — Programme Details
   - group_6a0880749381c — Resource Details
   - group_6a08815042fd6 — Story Details
   - group_6b1001a000001 — CTA Block
   - group_6b1001b000002 — Process Steps
   - group_6b1001c000003 — FAQ Section
   - group_6b1001d000004 — Contact Card
   - group_6b1001e000005 — Document Repeater
4. Select all 9 and click **Sync**
5. Verify: go to **ACF → Field Groups** — all 9 groups appear with **Active** status

### Step 2 — Verify REST API enabled per group

For each of the 4 CPT field groups (Call Details, Programme Details, Resource Details, Story Details):
1. Click the field group to edit it
2. Scroll down to **Settings**
3. Confirm **Show in REST API** is set to **Yes**
4. Save if you had to change it

---

## Day 2 — `people` CPT decision

Wait for Role 1's decision (should arrive Day 1). If yes:

1. Go to **Custom Post Types UI → Add/Edit Post Types**
2. Add a new post type:
   - **Post Type Slug:** `people`
   - **Plural Label:** People
   - **Singular Label:** Person
   - **Show in REST API:** Yes
   - **REST API base slug:** `people`
   - **Has Archive:** Yes
   - **Supports:** title, editor, thumbnail, excerpt
3. Export the updated CPTUI config: **Tools → Export Post Types** → copy JSON → overwrite `wordpress/ro.uvt.ri/cptui-export.json`
4. Create a basic ACF field group for `people`: name, title/position, email (optional). Save to `acf-json/`.

---

## Day 3–4 — Wednesday–Thursday: Test entries

Create at least **2 published entries per CPT**. Content does not need to be real — placeholder text is fine. The purpose is to give Role 5 something to test against.

### Taxonomy terms to create first

Before creating entries, add taxonomy terms:

1. Go to **Posts → Audience** (or whichever CPT shows the taxonomy). If it does not appear as a menu item, go to the CPT directly.
   - Actually: Go to **Calls → Audience** in the WP Admin sidebar
   - Add terms: `students`, `staff`, `partner-institutions`
2. Go to an academic-year taxonomy entry point and add: `2024-2025`, `2025-2026`
3. Programme-family: `erasmus`, `bilateral`, `scholarship`
4. Content-topic: `applications`, `deadlines`, `housing`, `visa`

### Create `calls` entries

**Entry 1:**
- Title: `Erasmus+ Outgoing Students — Call 2025/2026`
- Publish status: **Published**
- ACF fields:
  - Deadline: `2025-11-30`
  - Eligibility: `UVT students enrolled in a Bachelor or Master degree program.`
  - Application Steps: add one repeater row → `Complete the online application form on the Erasmus+ portal.`
  - Documents: add one row → Label: `Application Form`, File URL: `https://example.com/erasmus-form.pdf`
- Audience taxonomy: `students`
- Academic Year: `2025-2026`

**Entry 2:**
- Title: `Bilateral Exchange — Call for Applications`
- Similar fields with different content
- Audience: `students`, Academic Year: `2025-2026`

### Create `programmes` entries

**Entry 1:**
- Title: `Erasmus+ Exchange Programme`
- ACF: Duration: `1 semester`, Language: `English`, Partner Institution: `University of Vienna`, Application Deadline: `2025-12-01`
- Audience: `students`, Programme-family: `erasmus`

**Entry 2:**
- Title: `Bilateral Exchange — Romania-Germany`
- Different values
- Audience: `students`

### Create `resources` entries

**Entry 1:**
- Title: `Erasmus+ Application Guide 2025`
- ACF: File URL: `https://example.com/guide.pdf`, File Type: `PDF`, Audience Notes: `For outgoing students only.`
- Audience: `students`

**Entry 2:**
- Title: `Housing Information for International Students`
- ACF: File URL: `https://example.com/housing.pdf`, File Type: `PDF`
- Audience: `students`

### Create `stories` entries

**Entry 1:**
- Title: `My Erasmus Year in Barcelona`
- ACF: Author: `Ana Popescu`, Story Date: `2025-06-15`, Pull Quote: `The best year of my academic life.`
- Audience: `students`, Content-topic: `erasmus`

**Entry 2:**
- Title: `Studying in Germany as an International Student`
- Similar structure

---

## Day 5 — Friday 23 May: REST verification

For each CPT, open the endpoint URL in your browser and confirm:

1. `http://ro.uvt.ri.test/wp-json/wp/v2/calls` — should return a JSON array with 2+ entries
2. `http://ro.uvt.ri.test/wp-json/wp/v2/programmes`
3. `http://ro.uvt.ri.test/wp-json/wp/v2/resources`
4. `http://ro.uvt.ri.test/wp-json/wp/v2/stories`

**For each response, check the ACF key is present:**
```json
{
  "id": 1,
  "slug": "erasmus-call-2025",
  "title": { "rendered": "..." },
  "acf": {
    "deadline": "2025-11-30",
    "eligibility": "...",
    ...
  }
}
```

If `acf` key is missing or empty:
1. Go to **ACF → Field Groups** → edit the relevant group
2. Scroll to Settings → **Show in REST API: Yes** → Save
3. Refresh the endpoint

Also verify taxonomies appear:
- The response should include `audience`, `academic-year` etc. as arrays of term IDs
- Confirm by filtering: `http://ro.uvt.ri.test/wp-json/wp/v2/calls?audience=X`

**Document results** in `docs/week5/role6/rest-api-verification.md`:

```md
# REST API Verification
**Date:** [date]

| Endpoint | Returns data | ACF fields present | Taxonomy filters work |
|----------|-------------|-------------------|----------------------|
| /wp/v2/calls | Yes / No | Yes / No | Yes / No |
| /wp/v2/programmes | Yes / No | Yes / No | Yes / No |
| /wp/v2/resources | Yes / No | Yes / No | Yes / No |
| /wp/v2/stories | Yes / No | Yes / No | Yes / No |

## Issues found
[List any endpoint that failed and what was done to fix it]
```

---

## Deliverables summary

| Item | Deadline |
|------|----------|
| CPTUI imported (4 CPTs + 4 taxonomies active) | Monday 19 May |
| ACF synced (9 field groups active, REST enabled) | Tuesday 20 May |
| `people` CPT configured (if approved) | Tuesday 20 May |
| Taxonomy terms created | Wednesday 21 May |
| 2 entries per CPT published | Thursday 22 May |
| REST endpoints verified + `rest-api-verification.md` | Friday 23 May |

---

## Common issues and fixes

| Problem | Fix |
|---------|-----|
| CPT menu items don't appear after import | Deactivate and reactivate CPTUI plugin |
| ACF sync shows no files | Check that `acf-json/` folder is inside the active theme: `wp-content/themes/twentytwentyfive/acf-json/` |
| `acf` key missing from REST response | Edit field group → Settings → Show in REST API → Yes → Save |
| Taxonomy filter returns 0 results | Check the taxonomy is attached to the CPT in CPTUI settings |
| REST returns 404 for CPT | Flush permalinks: Settings → Permalinks → Save Changes (no changes needed, just save) |
