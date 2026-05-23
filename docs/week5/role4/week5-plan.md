# Role 4 — Week 5 Detailed Plan
**Role:** UI Designer / Frontend Implementer  
**Week:** 5 (19–26 May 2026)  
**Beta deadline:** 02.06.2026

---

## Context

You have a large carry-over backlog from Weeks 3 and 4 (documented in `role4-week4-incomplete-tasks.md`). For this week, **do not try to do all 16 tasks**. The beta is in two weeks. Focus on the 5 tasks below in the order listed. Everything else waits.

---

## Priority order for Week 5

| # | Task | Deadline | Blocks |
|---|------|----------|--------|
| 1 | Resolve color token conflict | Monday 19 May | Visual QA, all styling work |
| 2 | Apply UVT styling to Navbar | Wednesday 21 May | Navigation visual identity |
| 3 | Apply UVT styling to HeroSection | Wednesday 21 May | Homepage visual identity |
| 4 | Apply UVT styling to Card | Friday 23 May | Listing page visual identity |
| 5 | Build `LanguageSwitcher` atom | Friday 23 May | Locale routing (Week 6) |

If you complete all 5 and have time left: produce `design-system-draft.md` (see Group A in carry-over file). Everything else in the carry-over file moves to Week 6.

---

## Task 1 — Color Token Conflict (Monday 19 May)

This must be resolved before you do any styling work. All components are currently built with these token values:

```
uvt-blue:  #005BBB
uvt-navy:  #002147
uvt-gold:  #F2B705
uvt-gray:  #F5F5F5
```

Your `design-system-work-in-progress.md` proposed different values (`#003B71`, `#F2C94C`, `#00A86B`).

**What to do:**

1. Open the live old RI.UVT.RO site.
2. Open browser DevTools → Inspector. Click on the main navigation bar or the primary blue button/header.
3. Read the computed `background-color` or `color` CSS value. Write it down.
4. Repeat for the gold/yellow accent and the dark navy used in footers or backgrounds.
5. Create `docs/week5/role4/styling/color-decision.md` with:

```md
# Color Comparison — Old Site vs Current Tokens

| Element | Old site value (DevTools) | Current token | Match? |
|---------|--------------------------|---------------|--------|
| Primary blue (nav/buttons) | #[value] | #005BBB | Yes / No |
| Dark navy (footer/bg) | #[value] | #002147 | Yes / No |
| Gold/yellow accent | #[value] | #F2B705 | Yes / No |
```

6. Send this file to Role 1 (or commit and notify). **Role 1 makes the final call** on which values to use. Do not change `tailwind.config.js` yourself — wait for Role 1's decision.

---

## Tasks 2–4 — UVT Styling Workflow

Apply UVT styling from the old site to the three target components. Follow this workflow exactly for each component.

### The workflow (same steps for each component)

**Step 1 — Find the equivalent on the old site**

| Component | What to find on old site |
|-----------|--------------------------|
| Navbar | The top navigation bar |
| HeroSection | The homepage banner / hero area (usually at the top with a heading and CTA) |
| Card | Any repeating card or box pattern (programme listing, news item, etc.) |

**Step 2 — Save the HTML**

Navigate to the old site page containing the component. Press `Ctrl+S`. Choose "Webpage, Complete". Save the file somewhere accessible.

**Step 3 — AI prompt 1 (styling analysis)**

Open Claude. Attach or paste the saved HTML. Use this prompt exactly:

> "Analyze the styling of this HTML page. I want to understand the visual design of the [Navbar / hero section / card elements]. Focus on: exact colors, font sizes and weights, spacing (padding/margin values), border radius, box shadows, hover states, and any gradients. Output a markdown file documenting only the visual patterns — not the HTML structure."

Save the markdown output to:
- Navbar → `docs/week5/role4/styling/navbar-uvt-style.md`
- HeroSection → `docs/week5/role4/styling/hero-uvt-style.md`
- Card → `docs/week5/role4/styling/card-uvt-style.md`

**Step 4 — AI prompt 2 (apply to component)**

Open the React component file and the styling markdown. Send both to Claude with this prompt:

> "I have a React component and a styling reference document. Apply the visual style from the markdown to the React component. Rules:
> - Use Tailwind utility classes only — no inline styles, no new CSS files
> - Where a color matches a token, use the token name: `bg-uvt-blue`, `text-uvt-navy`, `bg-uvt-gold`, `bg-uvt-gray`
> - Preserve the component's existing props interface and TypeScript types exactly
> - Preserve the existing layout structure and responsive behavior
> - Add a 'modern twist': subtle hover transitions, slightly softer shadows, clean whitespace — but keep the UVT color palette
> - Output the complete updated component file"

**Step 5 — Apply and test**

Replace the component file with the output. Open the dev server:
```
cd frontend
npm run dev
```
Navigate to the page showing the component. Check:
- [ ] Component renders without errors
- [ ] Colors match the UVT palette (or are close with a modern feel)
- [ ] No layout breakage at desktop width (1280px)
- [ ] No layout breakage at mobile width (375px — use DevTools device toggle)
- [ ] Hover states work on interactive elements

Fix any obvious errors before committing. If something looks wrong but you are not sure how to fix it, commit it anyway and note the issue in a comment at the top of the file — Role 1 will handle it.

**Step 6 — Commit**

Commit the component file and the styling markdown file together with a clear message:
```
style: apply UVT styling to Navbar
```

---

### Component-specific notes

#### Navbar (`frontend/src/components/organisms/Navbar/Navbar.tsx`)
- The Navbar already has the correct labels (Role 5 fixes them Day 1) — do not change the labels, only styling
- Key things to style: background color, link color and hover state, the logo area, the sticky behavior
- The UVT Navbar on the old site is typically dark blue — use `bg-uvt-navy` or `bg-uvt-blue`

#### HeroSection (`frontend/src/components/organisms/HeroSection/HeroSection.tsx`)
- Key things to style: background (may be an image overlay, gradient, or solid), heading typography, button styles
- Primary button should use `bg-uvt-blue` → `hover:bg-uvt-navy`
- If the old site uses a background image, add a dark overlay: `bg-uvt-navy/80` or similar

#### Card (`frontend/src/components/molecules/Card/Card.tsx`)
- Key things to style: border, shadow, background, title color, button color
- Cards on the old site are typically white with a subtle shadow and a blue accent
- The gold bar (`bg-uvt-gold`) can be used as a left border or top accent on hover

---

## Task 5 — LanguageSwitcher Atom (Friday 23 May)

The `LanguageSwitcher` component needs to be built. It renders two buttons: RO and EN. It does not handle routing itself — it accepts props.

**File:** `frontend/src/components/atoms/LanguageSwitcher/LanguageSwitcher.tsx`

**Requirements from carry-over file:**
- Props: `currentLocale: 'ro' | 'en'`, `onLocaleChange: (locale: 'ro' | 'en') => void`
- Do not import from react-router — no routing logic inside the component
- Active locale: visually distinct (bold or underlined)
- Both buttons keyboard accessible (native `<button>`)

**Example implementation:**

```tsx
interface LanguageSwitcherProps {
  currentLocale: 'ro' | 'en'
  onLocaleChange: (locale: 'ro' | 'en') => void
}

export function LanguageSwitcher({ currentLocale, onLocaleChange }: LanguageSwitcherProps) {
  return (
    <div className="flex gap-1 text-sm font-medium">
      {(['ro', 'en'] as const).map(locale => (
        <button
          key={locale}
          onClick={() => onLocaleChange(locale)}
          className={`px-2 py-1 uppercase tracking-wide transition-colors
            ${currentLocale === locale
              ? 'text-uvt-gold border-b-2 border-uvt-gold'
              : 'text-white hover:text-uvt-gold'
            }`}
          aria-current={currentLocale === locale ? 'true' : undefined}
        >
          {locale.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
```

Adjust the styling to match whatever UVT look you applied to the Navbar in Tasks 2–4.

---

## Deliverables summary

| File | Deadline |
|------|----------|
| `docs/week5/role4/styling/color-decision.md` | Monday 19 May |
| `docs/week5/role4/styling/navbar-uvt-style.md` + updated Navbar component | Wednesday 21 May |
| `docs/week5/role4/styling/hero-uvt-style.md` + updated HeroSection component | Wednesday 21 May |
| `docs/week5/role4/styling/card-uvt-style.md` + updated Card component | Friday 23 May |
| `frontend/src/components/atoms/LanguageSwitcher/LanguageSwitcher.tsx` | Friday 23 May |

---

## What happens if you miss a deadline

Role 1 will apply the fix on the following morning using the same workflow. This is already planned for. Missing a deadline does not stop the project — but it does mean someone else does your work. The three components (Navbar, HeroSection, Card) are the minimum needed for the beta visual identity.
