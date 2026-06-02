# Role 6 — Week 5 Changes
**Date:** 2026-06-02  
**Role:** WordPress Developer

---

## WordPress: ACF Field Groups

### Replaced placeholder ACF files with verified implementations

The 5 stub field group files (`group_6b1001...`) have been replaced with the actual ACF-generated files from the live environment (`group_6a133...`).

| File | Field Group | Fields |
|------|-------------|--------|
| `group_6a133e65a5cca.json` | Global: CTA Block | `heading`, `body`, `button_label`, `button_url` |
| `group_6a133ee294347.json` | Global: Process Steps | `steps` repeater → `step_title`, `step_description` |
| `group_6a133f793e9aa.json` | Global: FAQ Section | `faqs` repeater → `question`, `answer` |
| `group_6a133fa7e2930.json` | Global: Contact Card | `name`, `role`, `email`, `phone` |
| `group_6a133fe10b4b9.json` | Global: Document Repeater | `documents_list` repeater → `label`, `file_url` |

The existing 4 CPT-specific field groups remain unchanged:

| File | Field Group |
|------|-------------|
| `group_6a010285605db.json` | Programme Details |
| `group_6a087f7aa179c.json` | Call Details |
| `group_6a0880749381c.json` | Resource Details |
| `group_6a08815042fd6.json` | Story Details |

---

## REST API Verification

All 4 CPT endpoints confirmed active and returning ACF data:

- `/wp-json/wp/v2/calls`
- `/wp-json/wp/v2/programmes`
- `/wp-json/wp/v2/resources`
- `/wp-json/wp/v2/stories`

All 5 taxonomies (`audience`, `academic-year`, `content-topic`, `programme-family`, `countries`) confirmed attached and filterable via the REST API.

Full verification details: [rest-api-verification.md](rest-api-verification.md)

---

## CPT Configuration

All 4 CPTs finalized with `has_archive: true` and `supports: title, editor, thumbnail, excerpt`.
