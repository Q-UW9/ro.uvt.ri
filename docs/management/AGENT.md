# RI.UVT.RO — Project Context (Agent Reference)

## 1. Project Overview

This project is a **full rebuild** of the DRI (International Relations) website using a **Headless CMS architecture**.

### Core Stack

* **Backend:** WordPress (Headless CMS)
* **API:** WordPress REST API (`/wp-json`)
* **Frontend:** React + Vite + TypeScript
* **Styling:** Tailwind CSS (assumed)
* **Environment:** Laragon (primary), Docker wp-env (optional)

---

## 2. Core Architecture

```
WordPress (CMS)
    ↓
REST API (JSON)
    ↓
React SPA (Frontend)
```

### Responsibilities

| Layer     | Responsibility                      |
| --------- | ----------------------------------- |
| WordPress | Content storage, editing, structure |
| REST API  | Data delivery                       |
| React     | UI, routing, UX                     |
| Vite      | Dev/build system                    |

---

## 3. Project Philosophy

This is **NOT a visual redesign**, but a:

* Content architecture rebuild
* UX/navigation restructuring
* Scalable system design
* Maintainable frontend-backend separation

### Principles

* Reusable systems > one-off solutions
* Content-driven UI
* Clear user journeys
* Continuous QA (not final-stage only)
* Real implementation by all roles (no theory-only roles)

---

## 4. Main Problems Identified

* Broken links and legacy routes
* Duplicate Erasmus structures
* Weak navigation hierarchy
* Over-reliance on PDFs/DOCX
* Poor internal linking
* Mixed RO/EN structures
* No structured content types

---

## 5. Proposed Solution

### 5.1 Information Architecture

Main sections:

* About DRI
* Erasmus
* International Students
* Programmes
* Partnerships
* News
* Contact

### 5.2 Replace Document-Based UX

Old:

```
User → PDF → Confusion
```

New:

```
Overview → Eligibility → Documents → Deadlines → Steps → Contact
```

---

## 6. Content Model (WordPress)

### Content Types

| Type              | Purpose                                |
| ----------------- | -------------------------------------- |
| Pages             | Static institutional content           |
| Posts             | News / announcements                   |
| Custom Post Types | Programmes, Opportunities, Staff, etc. |
| Custom Fields     | Metadata (deadlines, contacts, PDFs)   |

### Example API Endpoints

```
/wp-json/wp/v2/pages
/wp-json/wp/v2/posts
/wp-json/wp/v2/programmes
```

---

## 7. React Frontend Responsibilities

### Must Implement

* Routing system
* Layout system (Header, Footer, Shell)
* Reusable components:

  * Cards
  * Accordions
  * Filters
  * Search blocks
  * CTA sections
* Dynamic API fetching
* Responsive + accessible UI

---

## 8. Timeline (8 Weeks)

### Weeks 1–2 → Definition

* Audit current site
* Identify issues
* Define user groups
* Create sitemap

### Weeks 3–4 → System Building

* Design system
* React architecture
* WordPress setup
* API connection

### Weeks 5–6 → Content + Dynamic Build

* Custom post types
* Content population
* Dynamic frontend pages

### Weeks 7–8 → QA + Finalization

* Testing (devices, browsers)
* Accessibility checks
* Performance optimization
* Documentation

---

## 9. Team Structure

### Team A — Strategy & Structure

* Roles: 1, 2, 3
* Output: sitemap, flows, architecture

### Team B — Frontend System

* Roles: 4, 5, 1
* Output: design system, React components

### Team C — Backend & Content

* Roles: 6, 7, 3
* Output: WP structure, API data

### Team D — QA & Optimization

* Roles: 8 (+ all)
* Output: testing, fixes, performance

---

## 10. Roles Summary

| Role | Responsibility         |
| ---- | ---------------------- |
| 1    | PM + Frontend Lead     |
| 2    | UX + Navigation        |
| 3    | WordPress Architecture |
| 4    | UI Design + Styling    |
| 5    | React Development      |
| 6    | WP API + Content Types |
| 7    | Content Strategy       |
| 8    | QA + Accessibility     |

---

## 11. Local Development Workflow

### Setup

```
git clone <repo>
cd ro.uvt.ri
```

### WordPress (Laragon)

* Place project in:
  `C:\laragon\www\ro.uvt.ri`
* Start Laragon
* Create DB: `ro_uvt_ri`
* Open:
  `http://ro.uvt.ri.test/wp-admin`

### Frontend

```
cd frontend
npm install
npm run dev
```

### Environment Variable

```
VITE_WP_API_URL=http://ro.uvt.ri.test/wp-json
```

---

## 12. Git Workflow

### Rule: NEVER commit directly to `main`

```
git checkout -b feature/feature-name
git add .
git commit -m "feat: description"
git push origin feature/feature-name
```

Then open Pull Request.

---

## 13. Key Constraints

* WordPress is NOT version-controlled locally
* Each dev runs their own WP instance
* `.env.local` is NOT tracked
* Backend and frontend MUST stay synchronized

---

## 14. Security Considerations

* HTTPS everywhere
* Restricted API exposure
* Auth for protected actions
* CORS configuration
* Input validation
* Server hardening

---

## 15. Final Deliverables

* Audit report
* Sitemap
* Design system
* WordPress CMS structure
* React frontend
* API-connected pages
* Structured content
* QA + accessibility validation
* Documentation

---

## 16. Mental Model for Agents

Think of the project as:

> A **content engine (WordPress)** powering a **UI system (React)** through a **data contract (REST API)**

NOT:

> Static pages or templates

---

## 17. Suggested Agent Behavior

When generating solutions:

* Prefer reusable components
* Always consider API-driven data
* Respect content structure
* Avoid hardcoded content
* Keep UX journey clarity
* Align with headless architecture

---

## END OF CONTEXT
