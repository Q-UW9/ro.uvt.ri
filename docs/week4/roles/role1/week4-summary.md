# Role 1 — Project Manager / Frontend Lead
## Week 4 Summary

---

## What was done this week

### WordPress Merge Resolution

Role 6 submitted a WordPress branch that could not be merged as-is. Role 1 reviewed every file, identified all defects, applied fixes, and merged the corrected output into `main`.

**Files merged to `wordpress/ro.uvt.ri/`:**

| File | Description |
|------|-------------|
| `cptui-export.json` | Fixed CPT configuration — 4 post types |
| `cptui-taxonomies.json` | New file — 4 taxonomy definitions (was missing entirely) |
| `acf-json/group_6a087f7aa179c.json` | Calls field group — corrected |
| `acf-json/group_6a010285605db.json` | Programme Details field group — corrected |
| `acf-json/group_6a0880749381c.json` | Resource Details field group — corrected |
| `acf-json/group_6a08815042fd6.json` | Story Details field group — corrected |
| `acf-json/group_6b1001a000001.json` | CTA Block — new global group |
| `acf-json/group_6b1001b000002.json` | Process Steps — new global group |
| `acf-json/group_6b1001c000003.json` | FAQ Section — new global group |
| `acf-json/group_6b1001d000004.json` | Contact Card — new global group |
| `acf-json/group_6b1001e000005.json` | Document Repeater — new global group |

### Defects Fixed Before Merge

| Defect | Impact if not fixed | Fix applied |
|--------|---------------------|-------------|
| `has_archive: false` on all 4 CPTs | Archive pages (`/calls/`, `/programmes/`, etc.) would return 404 | Set to `true` on all 4 |
| `excerpt` missing from all CPT `supports` | Excerpt field unavailable in the editor | Added to all 4 |
| Empty `taxonomies: []` on all CPTs | Taxonomy filters would silently return no results | Attached correct taxonomies per CPT |
| No taxonomy export | 4 taxonomies described in docs but never created | Built `cptui-taxonomies.json` from scratch |
| Field name mismatches (6 fields across 4 CPTs) | API responses would not match frontend expectations | Renamed to match frozen spec |
| Missing fields across all CPTs (8 fields) | Key data unavailable via REST | Added to field groups |
| No global ACF field groups | Page builder blocks unavailable on WP Pages | Created 5 global groups |

### Field Name Contract Frozen

ACF field names are now locked and documented in `docs/agent_memory/main/13_WP_Merge_Fixes.md` — Section 5 (Frozen Field Name Reference). Role 5 can write CPT API helpers against these names immediately.

---

## Status of open items

| Item | Status |
|------|--------|
| WordPress CPTs (4) merged and corrected | ✅ Done |
| WordPress Taxonomies (4) created | ✅ Done |
| ACF field groups — CPTs (4) | ✅ Done |
| ACF field groups — Global (5) | ✅ Done |
| Field name contract frozen | ✅ Done |
| Vite vs Next.js decision recorded | ⚠️ Pending — blocks App.tsx and locale routing |
| `people` CPT decision | ⚠️ Not recorded |

---

## Carrying into Week 5

- Formally record the Vite vs Next.js decision so Role 5 can wire `App.tsx`
- Record `people` CPT decision with Role 6
- Resolve color token conflict with Role 4 (which palette is canonical)
