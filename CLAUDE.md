# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # start dev server at http://localhost:3000
npm run build    # production build
npm run lint     # ESLint (v9 flat config)
```

There is no test runner configured.

## Architecture

Single-page Next.js app with no client-side routing. The entire experience is a multi-step form driven by React state inside one component.

**State flow:**
`Questionnaire` (`app/components/Questionnaire.tsx`) owns all state:
- `step` — integer: `0` = intro, `1–8` = sections, `9` = summary
- `form` — `FormState` object (defined in `lib/types.ts` alongside `defaultFormState`)

Each `Section1`–`Section8` component receives `{ form, onChange }` and is purely presentational — no local state. `SummaryPage` receives the completed `form` and an `onReset` callback.

**Component layers:**
- `app/components/` — page-level components: `Questionnaire`, `Section1`–`Section8`, `SummaryPage`
- `lib/components/` — reusable primitives exported from `lib/components/index.ts`: `OptionCard`, `MultiSelect`, `TextArea`, `ScaleSelector`, `SectionHeader`, `ProgressBar`, `NavigationButtons`, `QuestionLabel`, `SummaryCard`
- `lib/types.ts` — single source of truth for the form data shape

**CSS approach — important:** Tailwind v4 is present for base/reset only. Component JSX uses **BEM-style class names** (e.g. `option-card`, `option-card--selected`, `question-block`), all defined in `app/globals.css` using CSS custom properties. Do not add Tailwind utility classes in JSX; add new CSS classes to `globals.css` following the existing token and naming conventions.

**Path alias:** `@/` resolves to the project root (e.g. `@/lib/types`, `@/lib/components`).

## Version warnings

This project uses **Next.js 16** and **React 19** — both have breaking API changes from common training-data versions. Before using any Next.js API, check `node_modules/next/dist/docs/`. **Tailwind v4** also has a completely different configuration model from v3 (no `tailwind.config.js`; configured via `postcss.config.mjs`).

