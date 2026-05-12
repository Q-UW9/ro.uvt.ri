# Role 6 — WordPress Export Requirements

**Generated:** 2026-05-12  
**Context:** Plugin activation and CPT/taxonomy configuration done locally (Laragon) but not committed to the repo.

---

## The Problem

WordPress plugin activation, CPTUI post type and taxonomy definitions, and ACF field groups are all stored in the **MySQL database**. They do not appear as files in git. Your local setup is correct, but no one else on the team can replicate it because the configuration only exists on your machine.

Two exports are needed to fix this.

---

## 1. Export CPTUI Configuration

**What this covers:** All custom post types and taxonomies you registered (`call`, `story`, `resource`, `programme`, `people`, and any taxonomies).

**Steps:**

1. Open your WordPress admin (`http://ro.uvt.ri.test/wp-admin`)
2. Go to **CPT UI → Tools**
3. Under **Export Post Types** and **Export Taxonomies**, click **Get Code** (or use the JSON export option if available in your CPTUI version)
4. Save the output as a file at this path in the repo:

```
wordpress/ro.uvt.ri/cptui-export.json
```

5. Commit and push to your branch.

**How teammates import it:**

Same menu — CPT UI → Tools → Import Post Types / Import Taxonomies → paste the JSON.

---

## 2. Enable ACF Local JSON Sync

**What this covers:** All ACF field groups you configured for the CPTs.

**Steps:**

1. Create this folder inside the active theme directory:

```
wordpress/ro.uvt.ri/wp-content/themes/[your-active-theme]/acf-json/
```

2. Open your WordPress admin and go to **ACF → Field Groups**.
3. Open each field group and click **Save** (even without changes). ACF will detect the `acf-json/` folder and write a `.json` file for each group automatically.
4. Commit the `acf-json/` folder and all `.json` files inside it to the repo.

**How teammates use it:**

After pulling and copying `wordpress/ro.uvt.ri/` into `C:/laragon/www/ro.uvt.ri/`, they go to ACF → Field Groups. ACF will show a **Sync** notice for any `.json` files not yet in their database. They click Sync and the field groups are imported.

---

## 3. Verify REST API Exposure

After completing the exports above, confirm that the CPTs are accessible via the REST API:

```
http://ro.uvt.ri.test/wp-json/wp/v2/call
http://ro.uvt.ri.test/wp-json/wp/v2/story
http://ro.uvt.ri.test/wp-json/wp/v2/resource
http://ro.uvt.ri.test/wp-json/wp/v2/programme
http://ro.uvt.ri.test/wp-json/wp/v2/people
```

Each endpoint should return a JSON array. If you get a 404, the CPT was registered without `"show_in_rest" => true` — this needs to be enabled in CPTUI under the post type settings (**Show in REST API → True**).

---

## Summary Checklist

- [ ] CPTUI export JSON committed to `wordpress/ro.uvt.ri/cptui-export.json`
- [ ] `acf-json/` folder created in active theme
- [ ] All ACF field groups re-saved to trigger JSON file generation
- [ ] `acf-json/*.json` files committed to repo
- [ ] REST API endpoints verified for all 5 CPTs
