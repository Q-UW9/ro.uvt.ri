# Navigation Consistency Feedback
**Document type:** UX Review — Carry-over from Week 3  
**Author:** Role 2 — UX Researcher + Frontend Contributor  
**Reviewed component:** `frontend/src/organisms/Navbar/Navbar.tsx`  
**Status:** Action required before merge

---

## Summary

A review of the Navbar component against the approved navigation model (Role 2, Week 2 — *User Flows and Navigation Model*) identified five label mismatches. Four labels are incorrect. One label is correct and requires no change.

These mismatches affect usability and user trust directly: if a label does not match what the user expects to find, they will either click the wrong section or leave the site entirely. The affected labels correspond to three of the eight user flows documented in Week 2.

---

## Label Corrections Required

| # | Current label (wrong) | Correct label | Affected route |
|---|---|---|---|
| 1 | About | About DRI | `/about/` |
| 2 | Admissions | International Students | `/international-students/` |
| 3 | Erasmus | Erasmus+ | `/erasmus/` |
| 4 | Research | Partnerships | `/partnerships/` |
| 5 | Contact | Contact | `/contact/` ✓ no change needed |

---

## Issue Breakdown

### Issue 1 — "About" should be "About DRI"

**Severity:** Medium  
**Why it matters:** The department is called the *Direction of International Relations* (DRI). A generic "About" label is ambiguous on any site. On an institutional site with multiple sub-units, it fails to communicate what section the user is entering. Users scanning the nav quickly need to read "About DRI" to understand this is the organisation's own introduction page, not a general about page for the university.  
**Required change:** Rename label from `About` to `About DRI`.

---

### Issue 2 — "Admissions" should be "International Students"

**Severity:** Critical  
**Why it matters:** "Admissions" is the wrong term for this audience. DRI does not run a formal admissions process — that is handled by the university's separate admissions office. This section covers incoming international students on degree programmes and should reflect the language those users use when searching. The Week 2 user flow for *International Applicant (Non-EU)* and *International Applicant (EU)* both assume this label reads "International Students." Calling it "Admissions" will cause these users to overlook the correct section or assume they are in the wrong place.  
**Required change:** Rename label from `Admissions` to `International Students`.

---

### Issue 3 — "Erasmus" should be "Erasmus+"

**Severity:** High  
**Why it matters:** The programme's official name is **Erasmus+**, not "Erasmus." The plus sign is part of the brand and is legally significant — it distinguishes the current programme generation from older Erasmus LLP-era programmes. Using the unofficial short form on a university website undermines institutional credibility and may confuse returning users who know the correct name. All route paths, document titles, and internal taxonomy values use `erasmus-plus` or `Erasmus+`. The Navbar should be consistent with these.  
**Required change:** Rename label from `Erasmus` to `Erasmus+`.

---

### Issue 4 — "Research" should be "Partnerships"

**Severity:** Critical  
**Why it matters:** "Research" describes an entirely different function. DRI does not publish research output — it manages institutional partnerships (bilateral agreements, Erasmus Inter-Institutional Agreements, MoUs with foreign universities). The Week 2 user flow for *International Partner Institution* is built around finding this section under the label "Partnerships." A user arriving from a partner university looking for agreement information will read "Research" and skip past it. This mismatch directly breaks the partner institution user journey.  
**Required change:** Rename label from `Research` to `Partnerships`.

---

### No change — "Contact" ✓

**Current label:** Contact  
**Status:** Correct. Matches the approved navigation model and the route `/contact/`. No action needed.

---

## Full Corrected Navbar Label Order

The top-level menu should read exactly as follows, left to right:

1. About DRI
2. Erasmus+
3. International Students
4. Scholarships & Exchanges
5. Partnerships
6. News
7. Contact

> **Note for Role 5:** If `Scholarships & Exchanges` and `News` are not yet implemented in the Navbar, please add placeholder links pointing to `#` for now. These routes are part of the approved navigation model and should appear in the correct position even before their pages are built, so the overall structure is testable.

---

## Implementation Notes

### Where to make the change

File: `frontend/src/organisms/Navbar/Navbar.tsx`

Labels are likely defined as either:
- A hardcoded string in JSX (e.g. `<a href="/about">About</a>`)
- An object/array of nav items (e.g. `{ label: "About", href: "/about" }`)

In either case, only the visible label text needs to change. The `href` values and routing should not be affected.

### Accessibility note

If any `aria-label` attributes in the Navbar component reference the old label text (e.g. `aria-label="Erasmus navigation"`), these must also be updated to match the new labels. Screen readers will read the `aria-label` value, not the visible text, if both are present.

---

## References

- Role 2, Week 2: *User Flows and Navigation Model* — Section 3: Navigation Model, Table 1 (Top-level menu)
- Role 2, Week 2: *User Flows and Navigation Model* — Section 4: UX Improvements, Items 6 and 7 (Navigation label clarity)
- ri.uvt.ro site audit (Week 1) — existing label structure documented for comparison

