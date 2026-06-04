# Frontend Architecture

> **Decision (Week 5):** Project uses Vite + React Router. Next.js is not used.
> This is the final architecture choice. Locale routing uses React Router nested routes.

## Stack
- Vite + React Router DOM v7 (confirmed — not Next.js)
- TypeScript
- Tailwind CSS
- Storybook
- Jest
- Playwright

## Architecture
- Atomic design
- Locale-aware routing
- Shared layout shells
- API-driven rendering

## Main Route Groups
- /(locale)/about/*
- /(locale)/erasmus/*
- /(locale)/international-students/*
- /(locale)/partnerships/*
