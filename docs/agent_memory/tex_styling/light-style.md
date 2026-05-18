# RI.UVT.RO Light Document Style — Specification

This style is a stripped-down variant of the full RI.UVT.RO document standard. It is designed for task lists, checklists, quick references, and single-topic documents that do not need a cover page or table of contents.

---

## When to Use This Style

Use the **light style** for:

- Per-role task lists and checklists
- Weekly to-do documents
- Quick reference cards (token lists, field name tables, endpoint lists)
- Single-page handoff notes

Use the **full style** for:

- Version reports, merge plans, gap reports
- Weekly review and assessment documents
- Architecture or specification documents
- Any document with more than 4 sections or that needs a table of contents

---

## Key Differences from Full Style

| Property | Full style | Light style |
|----------|-----------|-------------|
| Cover page | Dark blue full-page cover | None |
| Table of contents | Yes | None |
| Font size | 12pt | 11pt |
| Margins | 0.85in | 1in |
| Line spacing | 1.15 | 1.1 |
| Section headings | `\Large\bfseries` + yellow rule below | `\large\bfseries` + yellow rule below |
| Subsection headings | `\large\bfseries\color{uvtDarkBlue}` | `\normalsize\bfseries\color{uvtDarkBlue}` |
| Section numbering | Numbered (`1.`, `1.1`) | None (heading text only) |
| Title block | Cover page | Inline centred title + yellow rule |
| Box system | Full (bluebox, yellowbox, darkbox, redbox) | Omit — use italic lead-in text instead |
| Header | Left: project name / Right: document type | Left: project + doc name combined / Right: week |

---

## LaTeX Preamble (Light)

```latex
\documentclass[11pt,a4paper]{article}

% ---------- Encoding ----------
\usepackage[utf8]{inputenc}
\usepackage[T1]{fontenc}

% ---------- Page ----------
\usepackage[margin=1in]{geometry}
\usepackage{setspace}
\setstretch{1.1}

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
\definecolor{ruleLine}{HTML}{E0E6EF}

% ---------- Links ----------
\usepackage{hyperref}
\hypersetup{colorlinks=true, linkcolor=uvtBlue, urlcolor=uvtBlue}

% ---------- Lists ----------
\usepackage{enumitem}
\setlist[itemize]{leftmargin=1.4em, itemsep=0.2em, topsep=0.3em, parsep=0pt}

% ---------- Tables ----------
\usepackage{array}
\usepackage{booktabs}
\usepackage{longtable}
\renewcommand{\arraystretch}{1.25}

% ---------- Checkbox ----------
\usepackage{amssymb}

% ---------- Section Headings ----------
\usepackage{titlesec}
\titleformat{\section}
  {\large\bfseries\color{uvtBlue}}
  {}
  {0em}
  {}
  [\vspace{-0.2em}\textcolor{uvtYellow}{\rule{\linewidth}{1.5pt}}]
\titlespacing{\section}{0pt}{1.4em}{0.6em}

\titleformat{\subsection}
  {\normalsize\bfseries\color{uvtDarkBlue}}
  {}
  {0em}
  {}
\titlespacing{\subsection}{0pt}{0.9em}{0.3em}

% ---------- Header / Footer ----------
\usepackage{fancyhdr}
\setlength{\headheight}{24.65pt}
\addtolength{\topmargin}{-12.65pt}
\pagestyle{fancy}
\fancyhf{}
\lhead{\small\textcolor{uvtBlue}{RI.UVT.RO Redesign \textbf{·} [Document Name]}}
\rhead{\small\textcolor{textGray}{[Week / Date]}}
\cfoot{\small\textcolor{textGray}{\thepage}}
\renewcommand{\headrulewidth}{0.4pt}
\renewcommand{\headrule}{\hbox to\headwidth{\color{uvtYellow}\leaders\hrule height \headrulewidth\hfill}}

% ---------- Thin group separator ----------
\newcommand{\grouprule}{\vspace{0.3em}\textcolor{ruleLine}{\rule{\linewidth}{0.4pt}}\vspace{0.3em}}

\color{textGray}
```

---

## Title Block

Replace the full cover page with this inline block at the top of the document body:

```latex
\begin{center}
    {\Large\bfseries\color{uvtBlue} [Document Title]}\\[0.4em]
    {\small [Role or author] \textbf{·} Team Q-UW9 \textbf{·} [Week / Date]}
\end{center}

\vspace{0.3em}
\textcolor{uvtYellow}{\rule{\linewidth}{2pt}}
\vspace{0.8em}
```

---

## Section Structure

Sections use unnumbered headings. Remove `\thesection` from `\titleformat`:

```latex
\titleformat{\section}{\large\bfseries\color{uvtBlue}}{}{0em}{}
  [\vspace{-0.2em}\textcolor{uvtYellow}{\rule{\linewidth}{1.5pt}}]
```

Group separators within a section (between sub-checklists) use `\grouprule` — a thin light-gray horizontal rule — rather than a full subsection heading:

```latex
\newcommand{\grouprule}{%
  \vspace{0.3em}\textcolor{ruleLine}{\rule{\linewidth}{0.4pt}}\vspace{0.3em}%
}
```

---

## Boxes

The full tcolorbox system is not used in the light style. Instead:

- **Context / note before a section:** italic lead-in text directly below the section heading
- **Warnings or blockers:** bold inline text with no box

```latex
% Context note (replaces bluebox):
\textit{Requires Group 2 complete.}

% Blocker warning (replaces redbox/darkbox):
\textbf{Do not start until field names are agreed with Role 5.}
```

If a true visual callout is needed in an otherwise light document, a single `yellowbox` (from the full preamble) may be used — add `\usepackage[most]{tcolorbox}` and define only that one box type.

---

## Checklists

Use `\item[$\square$]` for all task items. Requires `\usepackage{amssymb}`.

```latex
\begin{itemize}
    \item[$\square$] First task
    \item[$\square$] Second task
\end{itemize}
```

For sub-group labels within a checklist (e.g. fixing a specific field group), use `\noindent\textbf{Label:}` on its own line followed by a `\grouprule` and the itemize block.

---

## Tables

Same rules as the full style:

- All columns use `p{width}` — never bare `l` for multi-word content
- Column widths must sum within `\textwidth` (474.65pt for A4 with 1in margins = 451.69pt — slightly less than the 0.85in margin variant)
- Use `\rowcolor{uvtLightBlue}` on header rows
- Use `longtable` for anything that may span a page break

**Textwidth reference for 1in margins:** `\textwidth` = 451.69pt ≈ 15.93cm

Typical three-column layout for this margin:
```latex
\begin{longtable}{@{}p{3cm}p{7cm}p{3.5cm}@{}}
```
3 + 7 + 3.5 = 13.5cm — fits safely within 15.93cm.

---

## Closing Line

End the document with the yellow accent rule and a brief status note:

```latex
\vspace{1.2em}
\textcolor{uvtYellow}{\rule{\linewidth}{1.5pt}}
{\small\textit{[Closing note — e.g. PR is ready when all items above are complete.]}}
```

---

## Naming Convention

Light-style documents use the same lowercase hyphen convention as full documents:

```
role6-final-tasks.tex
role5-route-strategy-checklist.tex
week4-handoff-notes.tex
api-field-name-agreement.tex
```

---

## Compilation Lessons (apply to both styles)

All lessons from `lessons.md` apply equally to the light style. Key reminders:

- `\usepackage{amssymb}` — required for `\square`
- `\setlength{\headheight}{24.65pt}` + `\addtolength{\topmargin}{-12.65pt}` — always set
- No `\paragraph{}` before tables
- No bare `l` columns for multi-word content
- No `\texttt{}` strings longer than ~40 characters on one line — break with `\\` or use `\path{}`
