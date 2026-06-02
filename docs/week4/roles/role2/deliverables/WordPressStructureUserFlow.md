# WordPress Structure — User Flow Feedback

**Document type:** UX Review — Carry-over from Week 3  
**Author:** Role 2 — UX Researcher + Frontend Contributor  
**Reviewed against:** `docs/agent_memory/main/02_User_Flows.md` (Week 2 user flows)  
**Structures reviewed:** 4 Custom Post Types + 4 taxonomies  
**Status:** Approved with two gaps noted

---

## Summary

The 4 CPTs (`calls`, `stories`, `resources`, `programmes`) and 4 taxonomies (`audience`, `programme-family`, `content-topic`, `academic-year`) cover the majority of content needs across the 8 user flows. The structure is sound. Two gaps are identified: one missing content type and one taxonomy term gap that will affect filtering for two user groups.

---

## CPT Review Against User Flows

### CPT 1 — `calls`

**Purpose:** Time-based opportunities (scholarship deadlines, application windows, mobility calls).

| User flow | Uses this CPT | How |
|---|---|---|
| Incoming Erasmus Student | ✅ | Finds open calls for incoming mobility |
| Outgoing UVT Student | ✅ | Finds calls for outgoing mobility and scholarships |
| International Applicant (Non-EU) | ✅ | Finds application deadlines |
| International Applicant (EU) | ✅ | Finds application deadlines |
| Applicant from Ukraine | ✅ | Finds open calls with Ukraine-specific terms |
| Refugee / Asylum Seeker | ✅ | Finds calls with refugee eligibility |
| Academic Staff | ✅ | Finds staff mobility calls |
| International Partner Institution | ⚠️ | Partners need to find IIA calls — covered only if `audience` taxonomy includes a `partners` term |

**Verdict:** Supported. Confirm `audience` taxonomy includes `partners` term (see Taxonomy section below).

---

### CPT 2 — `stories`

**Purpose:** Student and staff experience narratives to support decision-making.

| User flow | Uses this CPT | How |
|---|---|---|
| Incoming Erasmus Student | ✅ | Reads stories from previous incoming students |
| Outgoing UVT Student | ✅ | Reads stories from previous outgoing students |
| International Applicant (Non-EU) | ✅ | Reads experience stories to assess UVT |
| International Applicant (EU) | ✅ | Same |
| Applicant from Ukraine | ✅ | Ukraine-specific stories if `audience` term exists |
| Refugee / Asylum Seeker | ⚠️ | No `refugee` audience term confirmed — stories may not be filterable for this group |
| Academic Staff | ✅ | Staff experience stories |
| International Partner Institution | — | Not a primary content type for this audience |

**Verdict:** Supported. Gap: refugee audience term needed (see below).

---

### CPT 3 — `resources`

**Purpose:** Downloadable files — forms, guides, policy documents, checklists.

| User flow | Uses this CPT | How |
|---|---|---|
| Incoming Erasmus Student | ✅ | Downloads arrival guides, housing forms |
| Outgoing UVT Student | ✅ | Downloads application forms, Learning Agreements |
| International Applicant (Non-EU) | ✅ | Downloads admission document checklists |
| International Applicant (EU) | ✅ | Same |
| Applicant from Ukraine | ✅ | Downloads Ukraine-specific document lists |
| Refugee / Asylum Seeker | ✅ | Downloads asylum-related guidance documents |
| Academic Staff | ✅ | Downloads staff mobility forms |
| International Partner Institution | ✅ | Downloads IIA templates, MoU templates |

**Verdict:** Fully supported across all 8 flows. This is the highest-traffic CPT for document-heavy journeys.

---

### CPT 4 — `programmes`

**Purpose:** Descriptions of institutional exchange and scholarship programmes (Erasmus+, Fulbright, DAAD, etc.).

| User flow | Uses this CPT | How |
|---|---|---|
| Incoming Erasmus Student | ✅ | Reads Erasmus+ incoming programme description |
| Outgoing UVT Student | ✅ | Reads programme options for outgoing mobility |
| International Applicant (Non-EU) | ⚠️ | May need programme info — but admission process is on a WP static page, not a CPT |
| International Applicant (EU) | ⚠️ | Same |
| Applicant from Ukraine | — | Not the primary content path |
| Refugee / Asylum Seeker | — | Not the primary content path |
| Academic Staff | ✅ | Reads staff mobility programme descriptions |
| International Partner Institution | ✅ | Reads partnership programme descriptions to assess fit |

**Verdict:** Supported for its target audiences. The Non-EU and EU applicant flows rely more on static WP pages than on the `programmes` CPT — this is correct and does not need to change.

---

## Missing CPT — `people`

**Severity:** Medium  
**Issue:** The Week 2 user flows for *International Partner Institution* and *Academic Staff (Incoming)* both include a step where the user looks for a named coordinator or contact person — the responsible Erasmus coordinator, the departmental contact, or the IRO staff member. None of the 4 current CPTs supports this. Contact information is currently expected to appear only on the static `/contact` WP page, which is a flat page with no filtering or individual profiles.  
**Recommendation:** The `people` CPT (under discussion by Role 1 and Role 6) should be approved. It directly supports two user journeys and prevents coordinator contact details from becoming stale text on a static page.  
**Action:** Role 1 to make the yes/no decision this week (per the Week 5 plan).

---

## Taxonomy Review Against User Flows

### Taxonomy 1 — `audience`

**Expected terms (from Week 2 user flows):**

| Term needed | Flow it serves |
|---|---|
| `incoming` | Incoming Erasmus Student |
| `outgoing` | Outgoing UVT Student |
| `non-eu` | International Applicant (Non-EU) |
| `eu` | International Applicant (EU) |
| `ukraine` | Applicant from Ukraine |
| `refugee` | Refugee / Asylum Seeker |
| `staff` | Academic Staff |
| `partners` | International Partner Institution |

**Gap:** Confirm that `refugee` and `ukraine` are defined as distinct terms. If they are merged into a generic `international` term, users in these two flows will be unable to filter content to their specific situation. These are the two most vulnerable user groups in the flows — filtering accuracy matters most for them.

**Verdict:** Structure is correct. Term completeness must be verified by Role 6 when creating taxonomy entries.

---

### Taxonomy 2 — `programme-family`

**Expected terms:** Erasmus+, Fulbright, DAAD, bilateral agreements, and others.

**Verdict:** Fully supported. This taxonomy correctly scopes the `programmes` CPT for filtering by programme type. No gaps identified.

---

### Taxonomy 3 — `content-topic`

**Expected terms:** admission, mobility, scholarships, housing, visa, documents, FAQ, and similar.

**Verdict:** Supported. This taxonomy is used on `resources` and `stories` and enables cross-CPT filtering by topic. Term list should be confirmed against the actual content categories on the old ri.uvt.ro site (Role 3's coherence check will surface this).

---

### Taxonomy 4 — `academic-year`

**Purpose:** Archiving time-based content — allows filtering calls and resources by year so outdated entries stay accessible but are not promoted.

**Verdict:** Fully supported. This is the correct approach for `calls` — without it, expired calls would need to be deleted, losing historical reference. No gaps identified.

---

## Overall Verdict

The WordPress CPT and taxonomy structure supports the 8 user flows. Two action items before beta:

1. **Confirm `refugee` and `ukraine` are distinct `audience` taxonomy terms** — Role 6 to verify when creating test entries.
2. **Approve the `people` CPT** — Role 1 decision required. Without it, coordinator contact journeys have no structured content backing.

Everything else is approved to build against.

---

## References

- Role 2, Week 2: *User Flows and Navigation Model* — Section 2 (8 user flows, audience types)
- `docs/agent_memory/main/06_WordPress_Content_Model.md` (CPT and taxonomy definitions)
- Week 5–6 Role Plan: Role 6 section (CPT import and test entry tasks)
