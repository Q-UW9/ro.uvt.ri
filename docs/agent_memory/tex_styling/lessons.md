# LaTeX Compilation Lessons — RI.UVT.RO Documents

Lessons captured from compilation errors in `role6-week4-review.tex` and `role6-main-branch-changes.tex`.

---

## 1. Never define `\partial` as a custom macro

**Error:**
```
! LaTeX Error: Command \partial already defined.
```

**Cause:** `\partial` is a reserved LaTeX math symbol (the partial derivative symbol ∂). Attempting to `\newcommand{\partial}{...}` always fails because the command already exists in the math kernel.

**Fix:** Use any other name. In these documents the macro was renamed to `\warn`.

**Rule:** Before defining any `\newcommand`, check that the name is not already used by LaTeX core or a loaded package. Common math-reserved names to avoid: `\partial`, `\alpha`, `\beta`, `\delta`, `\pi`, `\sigma`, `\phi`, `\psi`, `\sum`, `\int`, `\in`, `\to`, `\le`, `\ge`.

---

## 2. `\square` requires `amssymb`

**Error:**
```
! Undefined control sequence.
<recently read> \square
l.385  \item[$\square$]
```

**Cause:** `\square` (the empty square checkbox symbol □) is defined in the `amssymb` package, which is not loaded by default. Using it in `\item[$\square$]` checklists without the package causes an undefined control sequence error on every checklist item.

**Fix:** Add to the preamble:
```latex
\usepackage{amssymb}
```

**Note:** `tcolorbox` with `[most]` loads `amsmath` but not `amssymb`. The two packages are separate and must both be loaded explicitly when needed.

---

## 3. `\headheight` must be at least 24.65pt with two-line headers

**Warning (repeated on every page):**
```
Package fancyhdr Warning: \headheight is too small (12.0pt):
Make it at least 24.64995pt
```

**Cause:** The default `\headheight` is 12pt, which fits one line of text. When `fancyhdr` renders a header that contains a bold or large font (as with the UVT blue headers here), the actual height exceeds 12pt. `fancyhdr` prints a warning but continues — the header content is clipped or overflows into the top margin.

**Fix:** Set the headheight explicitly and compensate the top margin so the text area does not shrink:
```latex
\setlength{\headheight}{24.65pt}
\addtolength{\topmargin}{-12.65pt}
```

These two lines must appear **after** `\usepackage{geometry}` and **before** `\pagestyle{fancy}`. Add them to the standard preamble template so they are never forgotten.

---

## 4. `\paragraph` must not be used as a table label

**Error (overfull hbox, up to 243pt too wide):**
```
Overfull \hbox (243.2841pt too wide) in paragraph at lines 338--348
[] []\T1/lmr/bx/n/12 Calls field group (acf-json/group_calls.json): [] []
```

**Cause:** `\paragraph{...}` is a LaTeX sectioning command. It produces a run-in heading formatted by `titlesec` (or the default style), which places the title inline with the following paragraph. When `titlesec` is active and the heading text is long (e.g. a filename in `\texttt{}`), the formatted heading ignores the text width and overflows the line.

Using `\paragraph` immediately before a `\begin{tabular}` compounds this: the heading tries to run in with the table, producing an extremely wide box.

**Fix:** Replace `\paragraph{Label:}` with `\noindent\textbf{Label:}` followed by `\vspace{0.8em}`. This produces visually similar bold inline text that respects the text width and has no interaction with the table that follows.

```latex
% Wrong:
\paragraph{Calls field group (\texttt{acf-json/group\_calls.json}):}
\begin{tabular}{...}

% Correct:
\vspace{0.8em}
\noindent\textbf{Calls field group (\texttt{acf-json/group\_calls.json}):}
\vspace{0.5em}
\begin{tabular}{...}
```

**Rule:** Only use `\paragraph` and `\subparagraph` for genuine document structure. For visual labels above tables or code blocks, always use `\noindent\textbf{...}` or a `\subsubsection`.

---

## 5. Never use unconstrained `l` columns for multi-word content in tables

**Error (repeated for every row, both tables):**
```
Overfull \hbox (22.73167pt too wide) in alignment at lines 415--420
Overfull \hbox (62.31824pt too wide) in alignment at lines 437--442
```

**Cause:** The `l` column specifier in `tabular` and `longtable` is an unconstrained left-aligned column — it expands to fit its widest cell without wrapping. When a cell contains a long phrase like "Route hierarchy corrections, page-template alignment feedback" or a long `\texttt{}` path, the column grows beyond the available `\textwidth`, producing an overfull hbox for every row in that column.

This is especially common in dependency tables with format `{@{}llp{5.5cm}@{}}`: the first two `l` columns compete for space with no width budget, and any moderately long cell content overflows.

**Fix:** Replace all `l` columns that will contain multi-word content with `p{width}` columns whose widths sum to `\textwidth` (474.65pt for A4 with 0.85in margins, accounting for `@{}` suppressing column padding):

```latex
% Wrong — unconstrained l columns overflow:
\begin{longtable}{@{}llp{5.5cm}@{}}

% Correct — fixed p{} columns sum to textwidth:
\begin{longtable}{@{}p{2cm}p{6.5cm}p{3.8cm}@{}}
```

The widths 2cm + 6.5cm + 3.8cm = 12.3cm ≈ 349pt, which fits comfortably within 474pt and leaves room for inter-column spacing.

**Rule:** Use `l` only for very short, single-word, or numeric cells (e.g. a tick/cross column, a version number). Use `p{width}` for any column that will contain sentences, file paths, or multi-word phrases. Always verify that the sum of column widths does not exceed `\textwidth`.

---

## 6. Long `\texttt{}` strings in list items can overflow the line

**Error:**
```
Overfull \hbox (6.04855pt too wide) in paragraph at lines 369--370
Overfull \hbox (40.5512pt too wide) in paragraph at lines 402--403
```

**Cause:** Monospaced `\texttt{}` content (file paths, component names, long identifiers) is treated as a single unbreakable token by TeX. When a list item contains a long `\texttt{}` string that does not fit on one line — for example `\texttt{components/atoms/LanguageSwitcher/LanguageSwitcher.tsx}` — TeX cannot break it and overflows the margin.

**Fix options (use whichever fits the context):**

1. **Break at a natural point with `\\`** — put the path on its own line after the bold label:
```latex
% Instead of:
\noindent\textbf{LanguageSwitcher atom} (\texttt{components/atoms/LanguageSwitcher/LanguageSwitcher.tsx})

% Use:
\noindent\textbf{LanguageSwitcher atom}\\
(\texttt{components/atoms/LanguageSwitcher/LanguageSwitcher.tsx})
```

2. **Split the sentence** — move the long path to a separate bullet point or shorten the label inline.

3. **Use `\path{}` from the `url` package** — `\path{}` allows line-breaking at `/` and `_` characters, which is ideal for file paths. Add `\usepackage{url}` to the preamble and use `\path{components/atoms/...}` in monospace contexts where breaking is acceptable.

**Rule:** Any `\texttt{}` string longer than approximately 40 characters should be placed on its own line, shortened, or replaced with `\path{}` if it is a file path.

---

## Standard Preamble Additions

Add these lines to every future document that uses `fancyhdr`, checklist items, and file paths:

```latex
\usepackage{amssymb}                          % for \square in checklists
\usepackage{url}                              % for \path{} with breakable file paths

\setlength{\headheight}{24.65pt}              % fancyhdr requirement
\addtolength{\topmargin}{-12.65pt}            % compensate so text area is unchanged
```

Place them in the preamble after `geometry` and before `\pagestyle{fancy}`.

---

## Quick Checklist Before Compiling

- [ ] No custom `\newcommand` uses a math-reserved name (`\partial`, `\alpha`, etc.)
- [ ] `\usepackage{amssymb}` present if `\square`, `\blacksquare`, or `\checkmark` are used
- [ ] `\usepackage{url}` present if file paths appear in list items or prose
- [ ] `\headheight` set to at least `24.65pt` when using `fancyhdr` with any non-trivial header content
- [ ] No `\paragraph{...}` immediately before a `tabular`, `longtable`, or `lstlisting` environment
- [ ] No `l` column specifier for cells containing multi-word content --- use `p{width}` instead
- [ ] All `p{width}` column widths verified to sum within `\textwidth` (474.65pt for A4 with 0.85in margins)
- [ ] No `\texttt{}` string longer than ~40 characters on a single line --- break or use `\path{}`
