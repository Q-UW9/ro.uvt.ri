# Role 3 — Week 5 Detailed Plan
**Role:** Information Architect  
**Week:** 5 (19–26 May 2026)  
**Beta deadline:** 02.06.2026

---

## Context

You are busy this week. Your assignment is one self-contained research task that requires no coordination with others and no specific time commitment. Do it when you have capacity. The deadline is **Friday 23 May**.

---

## Task — Old Site Coherence Check

**Goal:** Compare the current live RI.UVT.RO website against the new architecture. Find anything on the old site that is not accounted for in the new sitemap, CPT structure, or navigation model.

**Output file:** `docs/week5/role3/old-site-coherence-check.md`

**Time estimate:** 1–2 hours total.

---

## What to look at

### Step 1 — Read the new architecture first (15 min)

Before looking at the old site, read these two files so you know what the new architecture covers:

- `docs/agent_memory/main/01_Sitemap.md` — the approved new sitemap
- `docs/agent_memory/main/06_WordPress_Content_Model.md` — what content types exist

The approved Navbar for the new site has these top-level items:
> About DRI → Erasmus+ → International Students → Scholarships & Exchanges → Partnerships → News → Contact

CPTs in the new system: `calls`, `stories`, `resources`, `programmes`

### Step 2 — Go through the old site (45–60 min)

Open the old RI.UVT.RO site. Navigate every section. For each page or content area you find, check:

1. Is there a matching route in `01_Sitemap.md`?
2. If it is a list of items (calls, documents, programme info), does it map to one of the 4 CPTs?
3. Is the section represented in the approved Navbar?

Take notes as you go.

### Step 3 — Write the report

Use this exact format:

```md
# Old Site Coherence Check
**Author:** Role 3  
**Date:** [date]  
**Old site reviewed:** ri.uvt.ro (live as of review date)  
**New sitemap reference:** docs/agent_memory/main/01_Sitemap.md

---

## 1. Missing Routes
Pages or sections on the old site with no equivalent in the new sitemap.

| Old site section / URL | Notes |
|------------------------|-------|
| [section name or path] | [brief description of content and why it might be needed] |

(If nothing is missing: "All sections on the old site have a corresponding route in the new sitemap.")

---

## 2. Content That Should Become CPT Entries
Content currently presented as static pages or PDFs on the old site that should be structured as CPT entries in the new system.

| Old site content | Suggested CPT | Notes |
|-----------------|---------------|-------|
| [description] | calls / resources / programmes / stories | [why] |

---

## 3. Navbar Gaps
Navigation items present on the old site that are not in the approved new Navbar model.

| Old nav item | Status in new Navbar | Recommendation |
|---|---|---|
| [item] | Missing / Present as [name] | Keep / Drop / Rename |

---

## 4. Other Structural Observations
Anything else worth flagging — content patterns, recurring PDF downloads, audience-specific sections not modeled, etc.

[Free text — keep it brief]

---

## Summary
[2–3 sentences: overall assessment of coverage. Is the new architecture adequate? What is the most significant gap?]
```

---

## What Role 1 does with your report

Role 1 reviews your findings at the end of Week 5 and decides:
- Whether any missing routes should be added to the sitemap
- Whether any CPT entries need to be created before the beta
- Whether any Navbar items need to be revisited

You do not need to make those decisions — just report what you find.

---

## If you have extra time

If you finish the coherence check before Friday and have additional capacity:

Go to `http://ro.uvt.ri.test/wp-admin/` (Laragon local). Assist Role 6 with importing CPTUI:

1. WP Admin → Custom Post Types UI → Tools → Import (Post Types). Paste the contents of `wordpress/ro.uvt.ri/cptui-export.json`.
2. WP Admin → Custom Post Types UI → Tools → Import (Taxonomies). Paste `wordpress/ro.uvt.ri/cptui-taxonomies.json`.

This takes about 15 minutes and directly unblocks frontend testing. Notify Role 6 if you do this.
