# Role 6 — WordPress Developer
## Week 4 Summary

---

## What was done this week

### Custom Post Types — Registered

4 Custom Post Types registered and configured via CPTUI, with REST API exposure enabled.

| CPT slug | Label | `show_in_rest` | `has_archive` |
|----------|-------|----------------|---------------|
| `calls` | Calls / Opportunities | ✅ true | ✅ true |
| `stories` | Student Stories | ✅ true | ✅ true |
| `resources` | Resources | ✅ true | ✅ true |
| `programmes` | Programmes | ✅ true | ✅ true |

Export committed to `wordpress/ro.uvt.ri/cptui-export.json`.

### ACF Field Groups — Created

4 field groups created with REST enabled (`show_in_rest: 1`), one per CPT. ACF Local JSON sync folder (`acf-json/`) placed in the correct theme location.

**Field groups delivered:**
- Calls — deadline, eligibility, application steps, documents, funding details
- Programme Details — title, duration, language, partner institution, application deadline
- Resource Details — file URL, file type, audience, audience notes
- Story Details — testimonial author, programme, story date, pull quote, image

### CPTUI Export Committed

`cptui-export.json` produced and committed to the repository.

---

## Defects identified and fixed by Role 1 before merge

The following issues were found during the merge review and corrected by Role 1:

| Issue | Detail |
|-------|--------|
| `has_archive: false` on all 4 CPTs | Archive routes would 404 |
| `excerpt` missing from `supports` | Excerpt unavailable in editor |
| `taxonomies: []` empty on all CPTs | Taxonomy filters silently return no results |
| No taxonomy export | 4 taxonomies defined in docs but never created as a CPTUI export |
| 6 field name mismatches | Frontend and backend using different names |
| 8 missing fields across all CPTs | Key data unavailable via REST |
| No global ACF field groups | Page builder blocks unavailable on WP Pages |

All fixes applied by Role 1. Field names are now frozen in `docs/agent_memory/main/13_WP_Merge_Fixes.md`.

---

## Deliverables status

| Item | Status |
|------|--------|
| CPTs registered (4) | ✅ Done |
| ACF field groups — CPTs (4) | ✅ Done (corrected before merge) |
| CPTUI export committed | ✅ Done |
| Taxonomy definitions | ✅ Done (created by Role 1 — `cptui-taxonomies.json`) |
| `rest-api-exposure-checklist.md` | ❌ Delivered as a 4-line stub — not usable |
| CPTUI imported into WP admin | ⚠️ Pending — admin action required |
| ACF synced in WP admin | ⚠️ Pending — admin action required |
| Test entries published per CPT | ❌ Missing |
| REST endpoint verification | ⚠️ Blocked until import and sync are done |
| `people` CPT | ⚠️ No decision recorded |

---

## Carrying into Week 5

1. **Import `cptui-export.json`** via CPTUI → Tools → Import in WP admin
2. **Import `cptui-taxonomies.json`** via the same tool
3. **Sync ACF field groups** via ACF → Tools → Sync in WP admin
4. **Publish at least 2 test entries per CPT** so Role 5 can verify API responses
5. **Produce a usable `rest-api-exposure-checklist.md`** with endpoint URLs, query parameters, and confirmed field names
6. **Confirm or reject `people` CPT** with Role 1
