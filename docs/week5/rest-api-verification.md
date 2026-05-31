# REST API Exposure & Verification Checklist

**Project:** DRI Website Redesign  
**Role:** Role 6 WordPress Developer  
**Status:** Completed & Verified  

---

## 1. Verified Endpoints
The following endpoints have been confirmed as active and exposing ACF data in the REST response:

*   **Calls:** `http://ro.uvt.ri.test/wp-json/wp/v2/calls`[cite: 2]
*   **Programmes:** `http://ro.uvt.ri.test/wp-json/wp/v2/programmes`[cite: 2]
*   **Resources:** `http://ro.uvt.ri.test/wp-json/wp/v2/resources`[cite: 2]
*   **Stories:** `http://ro.uvt.ri.test/wp-json/wp/v2/stories`[cite: 2]

## 2. Taxonomy Filtering Verification
The following taxonomies are successfully attached to their respective CPTs and are visible in the API for frontend filtering[cite: 1, 2]:

*   **`audience`**: Attached to Calls, Programmes, and Stories[cite: 1, 2].
*   **`academic-year`**: Attached to Calls, Programmes, and Resources[cite: 1, 2].
*   **`content-topic`**: Attached to Stories and Resources[cite: 1, 2].
*   **`programme-family`**: Attached to Programmes and Calls[cite: 1, 2].
*   **`countries`**: Attached to Programmes[cite: 1, 2].

## 3. ACF Field Name Confirmation
All field names match the frozen documentation required for Role 5:

*   **Calls:** `deadline`, `eligibility`, `application_steps`, `documents`, `funding_details`.
*   **Programmes:** `duration`, `language`, `partner_institution`, `application_deadline`[cite: 1].
*   **Resources:** `file_url`, `file_type`, `audience_notes`[cite: 1].
*   **Stories:** `author`, `story_date`, `pull_quote`, `image`[cite: 1].

## 4. Administrative & Technical Fixes
*   **Archives:** `has_archive` set to `true` for all 4 CPTs to resolve 404 errors[cite: 1].
*   **Supports:** Added `excerpt` and `thumbnail` functionality to all CPTs[cite: 1].
*   **ACF Sync:** All 9 JSON files are synced and active in the local environment[cite: 1, 2].
*   **People CPT:** Decision pending/confirmed with Role 1[cite: 1, 2].

---
*Verified by Role 6 on 2026-05-24*