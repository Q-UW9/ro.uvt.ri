# Role 6 — ACF Location Rules for Pages
**Blocking:** Role 7 cannot enter FAQ blocks, CTAs, or document lists on WP Pages until this is done.

---

## What to do

Three ACF field groups are currently configured to show only on CPTs. Their location rules need to be extended to also include **Pages**.

For each group below:
1. WP Admin → **ACF → Field Groups** → click the group
2. Scroll to **Location Rules**
3. Add a new rule: **Post Type** / **is equal to** / **Page**
4. Save

| Group | File | Needed for |
|-------|------|------------|
| Global: FAQ Section | `group_6a133f793e9aa.json` | Erasmus page FAQ items |
| Global: CTA Block | `group_6a133e65a5cca.json` | Page-level call-to-action blocks |
| Global: Document Repeater | `group_6a133fe10b4b9.json` | Document lists on Erasmus sub-pages |

> Saving in WP Admin will overwrite the JSON files in `wp-content/themes/twentytwentyfive/acf-json/`. Commit the updated files to the repo afterward so the change is not lost.
