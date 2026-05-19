# Role 1 — Week 5 Detailed Plan
**Role:** Project Manager / Frontend Lead  
**Week:** 5 (19–26 May 2026)  
**Beta deadline:** 02.06.2026

---

## Your function this week

You are the unblocking layer and the safety net. Two decisions you are holding are currently stopping other people from working. Make them on Day 1. After that, your job is reviewing and merging output as it arrives, running backup work for Role 4, and keeping the critical path moving.

---

## Day 1 — Monday 19 May

### Decision 1 — Vite vs Next.js (do this first, before anything else)

**File to update:** `docs/agent_memory/main/03_Frontend_Architecture.md`

Open the file. Find the section that specifies Next.js 14. Replace the framework decision sentence with:

> "The project uses **Vite + React + React Router DOM v7** (confirmed Week 5). Next.js is not used. The scaffold was initialized in Week 3 and is too advanced to migrate. All route and locale routing decisions must be made for the Vite/React Router stack."

Save and commit directly to main. This unblocks Role 5's App.tsx wiring immediately.

### Decision 2 — `people` CPT

Communicate the answer to Role 6 by end of Day 1.

- If **yes:** Role 6 adds it to CPTUI this week (1 extra CPT, 1 extra field group, 1 extra API helper for Role 5 in Week 6). Low cost.
- If **no:** Role 6 closes the issue. No further action needed.

### Decision 3 — Locale routing scope for beta

Decide whether `/ro` and `/en` locale routing is required for the June 2 beta, or deferred.

**Recommendation:** Defer to post-beta. Implementing locale routing now would consume Role 5 for 2–3 days and the site content does not yet exist in two languages. Record the decision in `docs/agent_memory/main/03_Frontend_Architecture.md` as one sentence:

> "Locale routing (`/ro`, `/en`) is deferred to post-beta. The Week 5–6 sprint targets a single-language beta at the root path."

---

## Day 1–2 — Merge: Role 5 Navbar fix

Role 5 is fixing the Navbar on Day 1. Once they submit, review against this checklist before merging:

- [ ] `About` → `About DRI`
- [ ] `Admissions` → `International Students`
- [ ] `Erasmus` → `Erasmus+`
- [ ] `Research` → `Partnerships`
- [ ] `Scholarships & Exchanges` added
- [ ] `News` added
- [ ] Nav order: About DRI → Erasmus+ → International Students → Scholarships & Exchanges → Partnerships → News → Contact
- [ ] `/admissions` route removed from `App.tsx`
- [ ] `/research` route removed from `App.tsx`
- [ ] Dev server tested — no console errors

Source document for corrections: `docs/week4/roles/role2/deliverables/NavigationConsistencyFeedback.md`

---

## Day 2 — Merge: Role 5 App.tsx route wiring

Role 5 will have the route stubs wired by Day 2. Review checklist:

- [ ] All 29 routes from `docs/week4/roles/role5/addition/react-route-strategy.md` are present in `App.tsx`
- [ ] Erasmus nested routes correctly placed (6 sub-routes under `/erasmus`)
- [ ] International Students nested routes correctly placed (6 sub-routes)
- [ ] All 4 CPT archive + detail routes present (`/calls`, `/calls/:slug`, etc.)
- [ ] `*` 404 fallback route exists
- [ ] Each route maps to a page file in `src/pages/`
- [ ] Each stub renders without crashing (navigate to 5 random routes and verify no white screen)

---

## Day 3 — Color token conflict: make the call

By Day 3, Role 4 should have analyzed the old UVT site's styling and reported which blue is used. Use that report to decide which token values are canonical.

**If the old site confirms `#005BBB`:** Keep existing tokens. Tell Role 4 to use the existing `tailwind.config.js` values and not change them.

**If the old site shows a clearly different blue:** Update `tailwind.config.js`:
```js
// frontend/tailwind.config.js — inside the colors block
'uvt-blue': '#003B71',   // or whatever the old site shows
```
All components using `bg-uvt-blue`, `text-uvt-blue` etc. will rerender automatically — no component file changes needed.

Record the decision and the hex values in `docs/week5/role4/styling/color-decision.md` (create this file):
```md
# Color Token Decision
**Date:** [date]
**Decided by:** Role 1

| Token | Old value | New value | Source |
|-------|-----------|-----------|--------|
| uvt-blue | #005BBB | [value] | [old site screenshot or keep] |
```

---

## Day 3–4 — Merge: Role 5 API helpers

Role 5 will have the CPT API helpers ready by Day 3 or 4. Review checklist:

- [ ] `frontend/src/api/wordpress.js` contains all 10 new functions
- [ ] Each function follows the existing pattern (uses `BASE_URL`, handles params)
- [ ] TypeScript types exist in `frontend/src/types/` for each CPT response
- [ ] `acf` key access is typed correctly (responses return ACF fields under `response.acf.*`)
- [ ] Test at least one helper manually: open browser → `http://ro.uvt.ri.test/wp-json/wp/v2/calls` — verify it returns data and that the helper returns the same shape

If Role 6 does not have test entries live yet, approve the structure but flag the untested note in the PR.

---

## Day 3–5 — Role 4 backup plan

Role 4's deadline for Navbar and HeroSection styling is **Wednesday 21 May**. If they have not delivered by end of Wednesday:

1. Run the styling workflow yourself for the missed component. It takes ~30 minutes per component.
2. The workflow (same as Role 4's instructions):
   - Open the old RI.UVT.RO site, navigate to the relevant section, Ctrl+S to save as HTML
   - Feed to Claude: *"Analyze the styling of this HTML page. Focus on: colors, typography, spacing, border radius, shadows, and hover states. Output a markdown file."*
   - Feed the markdown + the component file to Claude: *"Apply this styling using Tailwind utility classes and existing tokens (`uvt-blue: #005BBB`, `uvt-navy: #002147`, `uvt-gold: #F2B705`). Output the updated component."*
   - Replace the component file, test in browser
3. Do not wait past Wednesday evening. Apply the fix Thursday morning at the latest.

Role 4's Card deadline is **Friday 23 May**. Same backup rule applies.

---

## Day 5 — End of week review

By Friday 23 May, the following must be true. Check each:

**Frontend:**
- [ ] App.tsx has 29 wired routes
- [ ] Navbar labels are correct
- [ ] At least `getCalls()`, `getProgrammes()`, `getResources()`, `getStories()` are written
- [ ] At least Navbar and HeroSection have UVT styling applied
- [ ] Homepage renders without crashing

**WordPress:**
- [ ] CPTUI imported (4 CPTs active in WP admin)
- [ ] ACF synced (9 field groups active)
- [ ] At least 2 test entries per CPT published
- [ ] REST endpoints verified (`/wp-json/wp/v2/calls` etc. return ACF fields)

**Planning:**
- [ ] Vite decision recorded
- [ ] Color tokens decided
- [ ] `people` CPT decision communicated to Role 6

If any of the frontend or WordPress items are not done, identify the owner and escalate before end of Friday.

---

## Deliverables you produce this week

| File | Content | Deadline |
|------|---------|----------|
| `docs/agent_memory/main/03_Frontend_Architecture.md` | Vite/Next.js and locale routing decisions | Day 1 |
| `docs/week5/role4/styling/color-decision.md` | Canonical color token values with rationale | Day 3 |
| `docs/agent_memory/main/11_Project_Status.md` | Updated status at end of Week 5 | Day 5 |

---

## Handoff to Week 6

At the end of Week 5, write a short update to `docs/agent_memory/main/11_Project_Status.md` covering:
- What is done vs planned
- Which Week 5 items slipped and why
- Week 6 priorities in order
- Any new blockers discovered

This document is what orients agents and team members at the start of Week 6.
