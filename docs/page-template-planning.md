# Page Template Planning

**File:** `docs/page-template-planning.md`  
**Author:** Role 5 — React Developer  
**Week:** 4
**Status:** Awaiting Role 2 review (`page-template-alignment-feedback.md`) before building

---

## Overview

Two page templates cover all routes in the sitemap:

| Template | Used by |
|----------|---------|
| `HomePageTemplate` | `/` only |
| `InnerPageTemplate` | Every other route |

Templates live in `src/components/templates/`. They receive all data as props
and do not fetch anything themselves. Data fetching is the responsibility of
the page file in `src/pages/` that mounts the template.

---

## HomePageTemplate

**File:** `src/components/templates/HomePageTemplate/HomePageTemplate.tsx`

### Organisms composed

| Organism | Purpose |
|----------|---------|
| `Navbar` | Global navigation (via `PageLayout`) |
| `HeroSection` | Full-width animated hero with title, subtitle, and CTA buttons |
| `SectionRenderer` | Renders the hero block from `homePageData` |
| `ContentGrid` + `Card` | 3-column grid of audience shortcut cards |
| `NewsSection` | Latest announcements strip |
| `Footer` | Global footer (via `PageLayout`) |

### Data required

```ts
interface HomePageTemplateProps {
  heroData: {
    title: string
    subtitle: string
    primaryButtonText?: string
    primaryButtonLink?: string
    secondaryButtonText?: string
    secondaryButtonLink?: string
  }
  cards: Array<{
    id: number
    title: string
    description: string
    buttonText?: string
    route?: string
  }>
  news: Array<{
    id: number
    title: string
    date: string
    excerpt: string
    slug: string
  }>
}
```

- `heroData` — static content from the WP homepage page entry (or hardcoded
  until CPT API helpers are available)
- `cards` — currently sourced from `src/data/homeSections.ts`; will be replaced
  with dynamic CPT entries (featured calls or programmes) once Role 6 delivers
  `rest-api-exposure-checklist.md`
- `news` — currently sourced from `src/data/announcements.ts`; will be replaced
  with WP Posts via `getPosts()` in `api/wordpress.js`

### Layout

```
<PageTransition>
  <PageLayout>               ← Navbar + Footer wrapper
    <SectionRenderer />      ← renders hero
    <section>                ← audience cards
      <Container>
        <SectionHeader />
        <ContentGrid columns={3}>
          {cards.map(card => <Card />)}
        </ContentGrid>
      </Container>
    </section>
    <NewsSection />          ← latest news
  </PageLayout>
</PageTransition>
```

Full-width hero (no container), then all subsequent sections inside `Container`
(`max-w-[1280px] px-6 mx-auto`).

---

## InnerPageTemplate

**File:** `src/components/templates/InnerPageTemplate/InnerPageTemplate.tsx`

### Organisms composed

| Organism | Required | Purpose |
|----------|----------|---------|
| `Navbar` | Always | Global navigation (via `PageLayout`) |
| `SectionHeader` | Always | Page title and optional subtitle |
| `children` | Always | Main content area — WP page body or CPT entry content |
| `AccordionSection` | Optional | FAQ sections or expandable content blocks |
| `DocumentDownloadList` | Optional | Download links on call and resource detail pages |
| `Footer` | Always | Global footer (via `PageLayout`) |

### Data required

```ts
interface InnerPageTemplateProps {
  title: string
  subtitle?: string
  children: ReactNode           // rendered WP page content
  accordion?: Array<{
    question: string
    answer: string
  }>
  documents?: Array<{
    label: string
    url: string
    fileType?: string
  }>
}
```

- **Static pages** (e.g. `/about`, `/contact`): `title` + `subtitle` from WP Page,
  `children` from rendered WP `content.rendered` field
- **CPT detail pages** (e.g. `/calls/:slug`): same shape, with `documents` populated
  from the `documents` ACF field on the `call` CPT (pending Role 6)
- `accordion` and `documents` are both optional — the template renders them only
  when the prop is provided and non-empty

### Layout

```
<PageTransition>
  <PageLayout>                      ← Navbar + Footer wrapper
    <Container>
      <SectionHeader                ← page title + subtitle + gold underline
        title={title}
        subtitle={subtitle}
      />
      <main>
        {children}                  ← WP content
      </main>
      {accordion?.length > 0 && (
        <AccordionSection items={accordion} />
      )}
      {documents?.length > 0 && (
        <DocumentDownloadList documents={documents} />
      )}
    </Container>
  </PageLayout>
</PageTransition>
```

All content inside `Container` (`max-w-[1280px] px-6 mx-auto`), consistent side
margins on all screen sizes.

---

## Build Prerequisites

Before building either template, the following must be in place:

1. This document reviewed by Role 2 (`page-template-alignment-feedback.md`)
2. `react-route-strategy.md` reviewed by Role 1 (Vite vs Next.js decision recorded)
3. `DocumentDownloadList` updated to match the props interface above
   (`label`/`url`/`fileType` — not `title`/`fileUrl`)

CPT data connections (calls, resources, programmes) are gated on Role 6 delivering
`rest-api-exposure-checklist.md` and confirming ACF field names. Templates will
accept static/mock data until then.

---

## What Stays Out of Templates

- No `useEffect` or `fetch` calls inside templates
- No `useParams` — templates do not know their route
- No hardcoded page titles or content — everything comes in as props
- No layout decisions below the `Container` level — content layout inside
  `children` is the responsibility of the page file or WP content
