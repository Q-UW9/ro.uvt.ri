# RI.UVT.RO Redesign — Standard Styling Guide

This document defines the shared styling standard for RI.UVT.RO project documents and frontend design references. It is based on the visual patterns used across the project summary, implementation plan, and timeline/subteam documents.

---

## 1. Visual Identity

The project uses a clean institutional style inspired by UVT / DRI communication: strong blue hierarchy, yellow accent lines, light blue information panels, and structured academic readability.

The visual tone should feel:

- institutional but modern;
- structured and readable;
- trustworthy and academic;
- implementation-focused;
- visually consistent across plans, reports, role documents, and frontend documentation.

Avoid overly playful styling, excessive gradients, decorative fonts, or unrelated color palettes.

---

## 2. Core Color Palette

Use the following palette as the source of truth.

| Token | Hex | Usage |
|---|---:|---|
| `uvtBlue` | `#003B7A` | Main headings, links, borders, important UI accents |
| `uvtDarkBlue` | `#062B57` | Cover backgrounds, dark callout boxes, institutional emphasis |
| `uvtLightBlue` | `#EAF2FF` | Informational box backgrounds, table highlight rows |
| `uvtYellow` | `#FFD200` | Accent color, header rules, warning/highlight boxes |
| `textGray` | `#333333` | Main body text |
| `softGray` | `#F4F6F8` | Code blocks, subtle backgrounds, neutral panels |
| `white` | `#FFFFFF` | Text on dark backgrounds |

### Color usage rules

Use `uvtBlue` for primary titles, navigation emphasis, links, and left borders of informational cards.

Use `uvtDarkBlue` for cover pages, major hero sections, and dark emphasis boxes.

Use `uvtYellow` sparingly. It should act as an accent, not as a dominant background. Good use cases include divider lines, highlight boxes, status accents, and small visual separators.

Use `uvtLightBlue` for calm information sections, role descriptions, phase descriptions, and notes.

Use `softGray` for code blocks, technical examples, and secondary neutral panels.

---

## 3. Typography

### Document typography

LaTeX project documents should use:

```tex
\usepackage{lmodern}
\usepackage{microtype}
\usepackage{setspace}
\setstretch{1.15}
```

Typography should prioritize readability over decoration.

### Frontend typography recommendation

For the React/frontend implementation, use a clean sans-serif stack:

```css
font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
```

If the project needs to stay closer to classic academic documents, `Latin Modern` or a neutral serif can be used for exported PDFs only. For the website UI, prefer sans-serif.

---

## 4. Page Layout

### LaTeX document layout

Use A4 documents with a moderate margin:

```tex
\documentclass[12pt,a4paper]{article}
\usepackage[margin=0.85in]{geometry}
```

Use this layout for:

- weekly plans;
- implementation guides;
- role documents;
- summaries;
- timeline documents;
- project reports.

### Layout principles

Keep documents spacious but compact. Avoid dense walls of text.

Recommended structure:

1. cover page;
2. table of contents;
3. purpose / overview section;
4. strategic or technical sections;
5. execution plan / role breakdown;
6. outputs / deliverables;
7. final checklist or next steps.

---

## 5. Cover Page Standard

Project cover pages should use a dark UVT blue background with white text and one yellow focus box.

### Required cover elements

- Main title: `RI.UVT.RO Redesign`
- Document subtitle: for example `Implementation Plan`, `Timeline Synthesis`, `Project Summary`
- Context line: `Direcția de Relații Internaționale` / `West University of Timișoara`
- Focus box explaining the document purpose
- Technology stack line:
  - `WordPress CMS + REST API + React + Vite + TypeScript`
- Team line:
  - `Team Q-UW9`

### Cover style pattern

```tex
\begin{titlepage}
    \pagecolor{uvtDarkBlue}
    \color{white}

    \vspace*{2cm}

    {\Huge\bfseries RI.UVT.RO Redesign\\[0.25em]
    Document Title\par}

    \vspace{0.8cm}

    {\Large Direcția de Relații Internaționale\\
    West University of Timișoara\par}

    \vspace{1.5cm}

    \begin{yellowbox}
        \color{textGray}
        \textbf{Focus:} Short description of the document purpose.
    \end{yellowbox}

    \vfill

    {\large Technology Stack: WordPress CMS + REST API + React + Vite + TypeScript\\
    Team Q-UW9}

    \vspace{1cm}
\end{titlepage}

\nopagecolor
\color{textGray}
```

---

## 6. Headings

Use strong blue hierarchy.

### LaTeX heading standard

```tex
\usepackage{titlesec}

\titleformat{\section}
{\Large\bfseries\color{uvtBlue}}
{\thesection.}
{0.5em}
{}

\titleformat{\subsection}
{\large\bfseries\color{uvtDarkBlue}}
{\thesubsection}
{0.5em}
{}

\titleformat{\subsubsection}
{\normalsize\bfseries\color{uvtBlue}}
{\thesubsubsection}
{0.5em}
{}
```

### Heading usage

Use `section` for major document areas.

Use `subsection` for role breakdowns, phases, architecture layers, or specific workstreams.

Use `subsubsection` only when the document becomes technically detailed. Do not over-nest sections.

---

## 7. Header and Footer

Documents should use a simple institutional header and centered page number.

```tex
\usepackage{fancyhdr}
\pagestyle{fancy}
\fancyhf{}
\lhead{\textcolor{uvtBlue}{DRI Website Redesign}}
\rhead{\textcolor{uvtBlue}{Document Type}}
\cfoot{\thepage}
\renewcommand{\headrulewidth}{0.4pt}
\renewcommand{\headrule}{\hbox to\headwidth{\color{uvtYellow}\leaders\hrule height \headrulewidth\hfill}}
```

The right header should describe the document, for example:

- `Project Summary`
- `Implementation Plan`
- `Timeline Synthesis`
- `Role 4 Tasks`
- `Week 5 Plan`

---

## 8. Boxes and Callouts

The project uses three standard callout types.

### Global box setup

```tex
\usepackage[most]{tcolorbox}

\tcbset{
    sharp corners=south,
    boxrule=0pt,
    left=10pt,
    right=10pt,
    top=8pt,
    bottom=8pt
}
```

### Information box

Use for explanations, goals, notes, phase descriptions, and normal emphasis.

```tex
\newtcolorbox{bluebox}{
    colback=uvtLightBlue,
    colframe=uvtBlue,
    borderline west={4pt}{0pt}{uvtBlue}
}
```

### Highlight box

Use for focus statements, warnings, important summaries, or cover-page focus areas.

```tex
\newtcolorbox{yellowbox}{
    colback=uvtYellow!16,
    colframe=uvtYellow,
    borderline west={4pt}{0pt}{uvtYellow}
}
```

### Dark emphasis box

Use for core rules, principles, strategic decisions, and high-importance statements.

```tex
\newtcolorbox{darkbox}{
    colback=uvtDarkBlue,
    coltext=white,
    colframe=uvtDarkBlue
}
```

### Role box

Use for role-specific responsibility sections.

```tex
\newtcolorbox{rolebox}[1]{
    colback=uvtLightBlue,
    colframe=uvtBlue,
    borderline west={4pt}{0pt}{uvtBlue},
    title=\textbf{#1}
}
```

---

## 9. Lists

Lists should be compact, readable, and consistently indented.

```tex
\usepackage{enumitem}
\setlist[itemize]{
    leftmargin=1.4em,
    itemsep=0.25em,
    topsep=0.35em
}
\setlist[enumerate]{
    leftmargin=1.6em,
    itemsep=0.25em,
    topsep=0.35em
}
```

### List writing rules

Use bullet lists for groups of actions, outputs, or responsibilities.

Use numbered lists for phases, sequences, workflows, priorities, or ordered implementation steps.

Bold the key term at the start of a list item when the item contains a definition:

```md
- **Audit:** Review current routes, content quality, and usability barriers.
- **Architecture:** Define sitemap, content types, and navigation logic.
- **Implementation:** Build reusable React views connected to WordPress data.
```

---

## 10. Tables

Tables should be used for timelines, role assignments, deliverable matrices, and phase planning.

### LaTeX table setup

```tex
\usepackage{array}
\usepackage{tabularx}
\usepackage{booktabs}
\renewcommand{\arraystretch}{1.3}
```

For longer timeline tables, use:

```tex
\usepackage{longtable}
\usepackage{ragged2e}
\usepackage[table]{xcolor}
```

### Table styling rules

- Use `booktabs` for clean horizontal rules.
- Avoid heavy grid borders.
- Use `uvtLightBlue` as a header or grouping row background.
- Keep table text concise.
- Use role names, week numbers, and deliverables in separate columns.

Example:

```tex
\rowcolor{uvtLightBlue}
\textbf{Week} & \textbf{Focus} & \textbf{Main Outputs} \\
```

---

## 11. Code Blocks

Technical documents should use soft gray code blocks.

```tex
\usepackage{listings}
\lstset{
    basicstyle=\ttfamily\small,
    backgroundcolor=\color{softGray},
    frame=single,
    rulecolor=\color{softGray},
    breaklines=true,
    columns=fullflexible
}
```

Use code blocks for:

- API endpoint examples;
- Git commands;
- React folder structures;
- WordPress configuration snippets;
- JSON response examples;
- `.env` examples.

Do not use code blocks for normal prose.

---

## 12. Links

Links should use the main UVT blue.

```tex
\usepackage{hyperref}
\hypersetup{
    colorlinks=true,
    linkcolor=uvtBlue,
    urlcolor=uvtBlue,
    citecolor=uvtBlue
}
```

Use links only where they support implementation or documentation. Avoid filling planning documents with unnecessary raw URLs.

---

## 13. Icons

The documents may use FontAwesome icons, but they should remain secondary.

```tex
\usepackage{fontawesome5}
```

Recommended use cases:

- role responsibility labels;
- key deliverables;
- warning or focus markers;
- summary cards.

Do not overuse icons. The project style is institutional, not decorative.

---

## 14. Frontend Design Tokens

The same identity can be translated into CSS variables for the React/Vite frontend.

```css
:root {
  --color-uvt-blue: #003b7a;
  --color-uvt-dark-blue: #062b57;
  --color-uvt-light-blue: #eaf2ff;
  --color-uvt-yellow: #ffd200;
  --color-text-gray: #333333;
  --color-soft-gray: #f4f6f8;
  --color-white: #ffffff;

  --font-ui: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;

  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2rem;
  --space-2xl: 3rem;

  --radius-sm: 0.375rem;
  --radius-md: 0.75rem;
  --radius-lg: 1rem;

  --shadow-soft: 0 8px 24px rgba(6, 43, 87, 0.08);
}
```

---

## 15. Frontend Component Styling Guidelines

### Page shell

Use a consistent page shell across public pages:

```txt
Page
├── Header / Navbar
├── Hero or PageHeader
├── MainContent
│   ├── Section
│   ├── Cards / Lists / Content Blocks
│   └── CTA / Useful Links
└── Footer
```

### Cards

Cards should use white or light blue backgrounds with subtle borders and strong spacing.

```css
.card {
  background: var(--color-white);
  border: 1px solid rgba(0, 59, 122, 0.12);
  border-left: 4px solid var(--color-uvt-blue);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-soft);
  padding: var(--space-lg);
}
```

### Information panels

```css
.info-panel {
  background: var(--color-uvt-light-blue);
  border-left: 4px solid var(--color-uvt-blue);
  border-radius: var(--radius-md);
  padding: var(--space-lg);
}
```

### Warning / focus panels

```css
.focus-panel {
  background: rgba(255, 210, 0, 0.16);
  border-left: 4px solid var(--color-uvt-yellow);
  border-radius: var(--radius-md);
  padding: var(--space-lg);
}
```

### Dark panels

```css
.dark-panel {
  background: var(--color-uvt-dark-blue);
  color: var(--color-white);
  border-radius: var(--radius-md);
  padding: var(--space-xl);
}
```

---

## 16. Content Voice

The project writing style should be direct, practical, and structured.

Preferred wording:

- `Goal:`
- `Focus:`
- `Main outputs:`
- `Responsibility:`
- `Implementation principle:`
- `Concrete deliverables:`
- `Validation checklist:`

Avoid vague wording like:

- `make it better`;
- `improve stuff`;
- `nice design`;
- `some pages`;
- `etc.` when deliverables should be explicit.

Use strong implementation language:

```md
The team must create reusable React routes connected to structured WordPress content.
```

Instead of weak language:

```md
The team should maybe make pages and connect things.
```

---

## 17. Standard Document Skeleton

Use this structure for future RI.UVT.RO planning documents.

```md
# RI.UVT.RO Redesign — [Document Name]

## Document Purpose

Short explanation of what this document does.

## Context

Project background and relevant constraints.

## Core Principle

One strong guiding rule or implementation principle.

## Work Breakdown

Sections by phase, role, component, route, or deliverable.

## Concrete Outputs

List of files, pages, components, documents, or decisions that should exist.

## Collaboration Notes

Who works with whom and where dependencies exist.

## Validation Checklist

Final check before the work is considered done.
```

---

## 18. Standard LaTeX Preamble

Use this as the reusable base for future project documents.

```tex
\documentclass[12pt,a4paper]{article}

% ---------- Encoding ----------
\usepackage[utf8]{inputenc}
\usepackage[T1]{fontenc}

% ---------- Page ----------
\usepackage[margin=0.85in]{geometry}
\usepackage{setspace}
\setstretch{1.15}

% ---------- Fonts / Style ----------
\usepackage{lmodern}
\usepackage{microtype}

% ---------- Colors ----------
\usepackage[table]{xcolor}
\definecolor{uvtBlue}{HTML}{003B7A}
\definecolor{uvtDarkBlue}{HTML}{062B57}
\definecolor{uvtLightBlue}{HTML}{EAF2FF}
\definecolor{uvtYellow}{HTML}{FFD200}
\definecolor{textGray}{HTML}{333333}
\definecolor{softGray}{HTML}{F4F6F8}

% ---------- Links ----------
\usepackage{hyperref}
\hypersetup{
    colorlinks=true,
    linkcolor=uvtBlue,
    urlcolor=uvtBlue,
    citecolor=uvtBlue
}

% ---------- Lists ----------
\usepackage{enumitem}
\setlist[itemize]{leftmargin=1.4em,itemsep=0.25em,topsep=0.35em}
\setlist[enumerate]{leftmargin=1.6em,itemsep=0.25em,topsep=0.35em}

% ---------- Tables ----------
\usepackage{array}
\usepackage{tabularx}
\usepackage{booktabs}
\usepackage{longtable}
\usepackage{ragged2e}
\renewcommand{\arraystretch}{1.3}

% ---------- Icons ----------
\usepackage{fontawesome5}

% ---------- Boxes ----------
\usepackage[most]{tcolorbox}
\tcbset{
    sharp corners=south,
    boxrule=0pt,
    left=10pt,
    right=10pt,
    top=8pt,
    bottom=8pt
}

\newtcolorbox{bluebox}{
    colback=uvtLightBlue,
    colframe=uvtBlue,
    borderline west={4pt}{0pt}{uvtBlue}
}

\newtcolorbox{yellowbox}{
    colback=uvtYellow!16,
    colframe=uvtYellow,
    borderline west={4pt}{0pt}{uvtYellow}
}

\newtcolorbox{darkbox}{
    colback=uvtDarkBlue,
    coltext=white,
    colframe=uvtDarkBlue
}

\newtcolorbox{rolebox}[1]{
    colback=uvtLightBlue,
    colframe=uvtBlue,
    borderline west={4pt}{0pt}{uvtBlue},
    title=\textbf{#1}
}

% ---------- Section Headings ----------
\usepackage{titlesec}
\titleformat{\section}{\Large\bfseries\color{uvtBlue}}{\thesection.}{0.5em}{}
\titleformat{\subsection}{\large\bfseries\color{uvtDarkBlue}}{\thesubsection}{0.5em}{}
\titleformat{\subsubsection}{\normalsize\bfseries\color{uvtBlue}}{\thesubsubsection}{0.5em}{}

% ---------- Header / Footer ----------
\usepackage{fancyhdr}
\pagestyle{fancy}
\fancyhf{}
\lhead{\textcolor{uvtBlue}{DRI Website Redesign}}
\rhead{\textcolor{uvtBlue}{Document Type}}
\cfoot{\thepage}
\renewcommand{\headrulewidth}{0.4pt}
\renewcommand{\headrule}{\hbox to\headwidth{\color{uvtYellow}\leaders\hrule height \headrulewidth\hfill}}

% ---------- Code ----------
\usepackage{listings}
\lstset{
    basicstyle=\ttfamily\small,
    backgroundcolor=\color{softGray},
    frame=single,
    rulecolor=\color{softGray},
    breaklines=true,
    columns=fullflexible
}
```

---

## 19. Consistency Checklist

Before finalizing any RI.UVT.RO document, verify that:

- the UVT color tokens are used exactly;
- headings use `uvtBlue` and `uvtDarkBlue`;
- the cover page uses `uvtDarkBlue`;
- the accent rule uses `uvtYellow`;
- callout boxes follow the blue/yellow/dark system;
- body text uses `textGray`;
- lists are compact and readable;
- tables use clean spacing and no heavy borders;
- technical examples use `softGray` code blocks;
- the document title clearly states its purpose;
- deliverables are concrete, not vague;
- role and phase documents use the same structure and vocabulary.

---

## 20. Naming Standard

Use clear filenames in lowercase with hyphens or underscores.

Recommended examples:

```txt
ri-uvt-style-guide.md
week-5-plan.tex
role-4-week-3-tasks.md
frontend-component-structure.md
wordpress-api-structure.md
timeline-subteams.tex
```

Avoid unclear names like:

```txt
final.docx
newplan.tex
thing.md
updated2.pdf
```

---

## 21. Summary

The RI.UVT.RO style system is built around a simple institutional identity:

- dark blue for authority;
- UVT blue for structure and navigation;
- yellow for accent and attention;
- light blue for information;
- gray for readability and technical neutrality.

Every document and frontend component should feel like part of one coordinated digital product, not a separate visual experiment.
