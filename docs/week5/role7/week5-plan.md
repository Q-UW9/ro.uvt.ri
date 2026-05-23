# Role 7 — Week 5 Detailed Plan
**Role:** Content Strategist / Content Entry  
**Week:** 5 (19–26 May 2026)  
**Beta deadline:** 02.06.2026

---

## Context

Your task is writing. No coding required. You will read the old RI.UVT.RO website and produce clean, usable content drafts for five pages. These drafts will be entered into WordPress in Week 6 once Role 6 creates the page structure.

You are also coordinating loosely with Role 3 — they are doing a structural audit of the old site this week. If they flag content gaps, absorb those findings into your drafts.

---

## Your output format

For each page, create a separate markdown file using this template:

```md
# [Page Title]
**Route:** /[route]  
**WP slug:** [route without leading slash]  
**Purpose:** [one sentence — who is this page for and what does it help them do?]

---

## Section 1: [Heading]
[2–4 sentences of content. Plain text, no HTML. Write for a university audience — formal but not bureaucratic.]

## Section 2: [Heading]
[2–4 sentences]

## Section 3: [Heading] (optional)
[2–4 sentences]

---

## Key links to include
- [Link label] → [destination or description]

## Documents to attach (if any)
- [Document name] — [brief description] — [source on old site if available]

## FAQ items (if applicable)
Q: [question]
A: [answer]
```

---

## Page 1 — About DRI

**File:** `docs/week5/role7/content-drafts/about.md`  
**Route:** `/about`  
**Deadline:** Wednesday 21 May

**What this page covers:** The department's role, mission, and who works there.

**How to research:** On the old RI.UVT.RO site, find the "Despre" or "About" section. Read the existing text. Do not copy it verbatim — paraphrase and modernize. Keep it to 3 sections.

**Suggested structure:**
- Section 1: What is the DRI? (Department of International Relations — who we are, what we do)
- Section 2: What we offer (Erasmus+, bilateral exchanges, support for international students)
- Section 3: Contact / where to find us (building, office hours, email)

---

## Page 2 — Contact

**File:** `docs/week5/role7/content-drafts/contact.md`  
**Route:** `/contact`  
**Deadline:** Wednesday 21 May

**What this page covers:** How to reach the DRI office.

**Include:**
- Physical address of the DRI office
- Office hours
- Email address(es) — find on old site
- Phone number — find on old site
- Any separate contacts for Erasmus vs general inquiries

**Suggested structure:**
- Section 1: General contact info (address, hours, phone, email)
- Section 2: Erasmus+ specific contact (if separate person/email)
- Section 3: International students contact (if separate)

---

## Page 3 — Erasmus+ Landing

**File:** `docs/week5/role7/content-drafts/erasmus.md`  
**Route:** `/erasmus`  
**Deadline:** Thursday 22 May

**What this page covers:** The Erasmus+ landing page — an overview that links to all sub-sections.

This is a navigation page. Keep content brief. The goal is to orient the user and point them to the right sub-section.

**Suggested structure:**
- Section 1: What is Erasmus+? (2–3 sentences — the programme in plain language)
- Section 2: Who can participate? (bullet points: UVT students, UVT staff, international students, partner institution staff)
- Section 3: Where to start (paragraph directing users to the sub-pages: outgoing students, incoming students, staff, etc.)

**Sub-page links to reference:**
- Incoming Students → `/erasmus/incoming-students`
- Outgoing Students → `/erasmus/outgoing-students`
- Incoming Staff → `/erasmus/incoming-staff`
- Outgoing Staff → `/erasmus/outgoing-staff`
- Partner Countries → `/erasmus/partner-countries`
- Cooperation Projects → `/erasmus/cooperation-projects`

---

## Page 4 — International Students Landing

**File:** `docs/week5/role7/content-drafts/international-students.md`  
**Route:** `/international-students`  
**Deadline:** Thursday 22 May

**What this page covers:** An overview page for all non-Romanian students coming to UVT.

**Suggested structure:**
- Section 1: Welcome message — who this section is for (EU students, non-EU, refugees, free movers)
- Section 2: What UVT offers international students (brief — facilities, support services, language of instruction)
- Section 3: Where to start — link to sub-sections based on student category

**Sub-page links:**
- EU Students → `/international-students/eu`
- Non-EU Students → `/international-students/non-eu`
- Ukrainian Students → `/international-students/ukraine`
- Refugees → `/international-students/refugees`
- Preparatory Year → `/international-students/preparatory-year`
- Free Movers → `/international-students/free-movers`

---

## Page 5 — Partnerships

**File:** `docs/week5/role7/content-drafts/partnerships.md`  
**Route:** `/partnerships`  
**Deadline:** Friday 23 May

**What this page covers:** UVT's international academic partnerships.

**Suggested structure:**
- Section 1: Overview of UVT's international network (how many partner universities, which countries, what kinds of agreements)
- Section 2: Types of partnerships (Erasmus+ agreements, bilateral agreements, other frameworks)
- Section 3: How to propose a partnership / contact for institutions

---

## Coordination with Role 3

Role 3 is doing an audit of the old site this week. If they send you a file (`old-site-coherence-check.md`) before your Friday deadline:

- Check the "Missing Routes" section. If they found content on the old site that your 5 pages should include, add a note at the bottom of the relevant draft:
  ```md
  ## Role 3 additions
  - [what was added and why]
  ```
- Check the "Content That Should Be CPT Entries" section. If something you were about to write as page content should actually be a CPT entry (a specific call, a downloadable resource), note it instead of writing it as page text:
  ```md
  ## Should become CPT entry
  - [description] — suggest Role 6 creates as a [calls/resources/programmes] entry
  ```

---

## Deliverables summary

| File | Deadline |
|------|----------|
| `docs/week5/role7/content-drafts/about.md` | Wednesday 21 May |
| `docs/week5/role7/content-drafts/contact.md` | Wednesday 21 May |
| `docs/week5/role7/content-drafts/erasmus.md` | Thursday 22 May |
| `docs/week5/role7/content-drafts/international-students.md` | Thursday 22 May |
| `docs/week5/role7/content-drafts/partnerships.md` | Friday 23 May |

---

## What happens in Week 6

Once Role 6 creates the WP Page structure (slugs: `about`, `contact`, `erasmus`, `international-students`, `partnerships`), you will log into WP Admin and enter the content from your drafts directly into the page editor. You do not need coding skills for this — it is standard WordPress editing.
