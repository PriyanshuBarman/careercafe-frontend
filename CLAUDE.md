# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

CareerCafe frontend — Next.js (App Router, React 19, React Compiler) marketing site plus product surfaces (questions dashboard, a timed "DashCart" case-study challenge). TypeScript, Tailwind CSS v4, shadcn/ui (Base UI + Radix primitives), Hugeicons.

This repo is currently on branch `redesign/v3.2-design-system`. Two docs in `docs/` are load-bearing for any visual work:

- `docs/CAREERCAFE_DESIGN_SYSTEM_v3.2.md` — **frozen** design spec: typography, light/dark tokens, spacing, component geometry, the 12-section landing page structure, and explicit visual non-goals (no gradients, glassmorphism, mascots, all-pill UI, fake screenshots). Do not reopen frozen decisions without a concrete usability/accessibility/conversion reason.
- `docs/CURRENT_SITE_AUDIT.md` — gap list between the live site and the v3.2 spec, with a prioritized (P0–P4) order of work.

Read both before making landing-page or theming changes; they define the intended end state, not just style preference.

## Commands

Package manager is **pnpm** (see `pnpm-workspace.yaml`; npm/yarn are not used).

```bash
pnpm dev            # dev server with Turbopack
pnpm build           # production build
pnpm start           # run production build
pnpm lint            # eslint
pnpm lint:fix        # eslint --fix .
pnpm check-types     # tsc --noEmit
pnpm format          # prettier --write
pnpm format:check    # prettier --check
```

There is no test runner configured in this repo.

### Git hooks (Husky)

- `pre-commit` runs `pnpm lint:staged` (lint-staged: eslint --fix + prettier on staged `.ts/.tsx`, prettier on `.md/.mdx`) then `pnpm check-types`.
- `commit-msg` runs commitlint against `@commitlint/config-conventional` — commits must be Conventional Commits (`feat:`, `fix:`, `refactor:`, `chore:`, `docs:`, `style:`, optionally scoped).

## Architecture

### Route groups (`src/app`)

- `(root)/` — marketing landing page and `analyst-tracks`. Has its own `layout.tsx` wrapping children in `Navbar` / `Footer` / `ScrollToTop`.
- `(questions-dashboard)/questions/` — question bank dashboard (`page.tsx`) and dynamic question detail (`[slug]/page.tsx`), with its own `layout.tsx`.
- `(challenge)/` — the DashCart timed challenge: `start-challenge/`, `challenges/dashcart-expansion/`, `challenges/success/`.

Route groups intentionally get separate layouts; do not merge them into the top-level layout.

### Feature-first organization

Business logic lives under `src/features/<feature>/`, not colocated with routes. Each feature typically has its own `components/`, `constants/`, `types/`, `utils/`, and sometimes `schemas/`, `store/`, `data/`. Route files in `src/app/` stay thin and import from `src/features/*`.

Current features: `dashcart-challenge`, `questions-dashboard`, `start-challenge`.

- `dashcart-challenge`: a multi-step timed form challenge. State is in a Zustand store with `persist` middleware (`store/challenge-store.ts`, localStorage key `dashcart_challenge_store`) tracking step progress, a deadline timestamp, and a draft of `ChallengeFormData` (validated via a Zod schema in `schemas/form-schema.ts`). Steps live under `components/steps/step-N/` as paired `fields.tsx` (inputs) / `info.tsx` (contextual copy) files.
- `questions-dashboard`: filter/search/pagination state is derived from and synced to URL search params rather than kept in a store — see `utils/get-initial-state-from-params.ts` and `utils/create-url-params.ts`. Filtering logic (`utils/filter-questions.ts`, `utils/get-available-topics.ts`, `utils/get-related-questions.ts`) is pure and takes the question dataset (`data/questions.ts`) plus the derived filter state.

`src/components/` holds cross-feature shared components: `layouts/` (Navbar, Footer, NavMenu, NavigationSheet), `landing/` (marketing sections, most under `landing/sections/`), `analyst-tracks/`, and `ui/` (shadcn primitives — see below).

`src/constants/` holds static/site-wide data (site config, nav links, programme/testimonial/company copy) that isn't feature-specific.

### Theming

- `next-themes` (`ThemeProvider` in `src/components/theme-provider.tsx`) drives class-based dark mode (`attribute="class"`), default `light`, `enableSystem`. The design spec requires a three-state System/Light/Dark selector (no binary toggle) and no flash of unstyled theme on first paint — see spec Section 3 before touching theme UI.
- `useMetaColor` (`src/hooks/use-meata-color.ts`) syncs the `<meta name="theme-color">` tag to `META_THEME_COLORS` from `src/constants/site.ts` based on `resolvedTheme`.
- Design tokens: Tailwind v4 CSS variables in `src/app/globals.css`, both the shadcn base tokens (`--background`, `--primary`, etc., defined under `@theme inline` and `:root`) and CareerCafe-specific tokens prefixed `--cc-*` (`--cc-orange`, `--cc-sage-*`, `--cc-charcoal`, etc.) mapped into Tailwind as `--color-cc-*`. The full canonical `--cc-*` token set (including light/dark pairs not yet all wired into `globals.css`) is defined in the CSS appendix (Section 15) of the v3.2 design doc — treat that as the source of truth when tokens diverge.

### UI components (shadcn)

`components.json`: style `base-nova`, Base UI (`@base-ui/react`) as the underlying primitive library (not pure Radix — some primitives are Radix-based, e.g. `@radix-ui/react-visually-hidden`), icon library `hugeicons`, base color `neutral`, no class prefix. Aliases: `@/components`, `@/components/ui`, `@/lib`, `@/hooks`.

Detailed component conventions are documented in `.agents/skills/shadcn/rules/` — read the relevant file before writing UI code:

- `styling.md` — semantic color tokens only (no raw Tailwind colors like `bg-blue-500`), built-in variants before custom `className` overrides, `gap-*` not `space-x-*/space-y-*`, `size-*` over `w-* h-*`, no manual `dark:` overrides, no manual `z-index` on overlay components.
- `composition.md` — items always inside their `*Group` component (`SelectItem` in `SelectGroup`, etc.), `Alert` for callouts, `Empty` for empty states, `Dialog`/`Sheet`/`Drawer` always need a Title, full `Card` composition (`CardHeader`/`CardContent`/`CardFooter`), no `isPending`/`isLoading` prop on `Button` (compose with `Spinner` instead).
- `forms.md` — `FieldGroup` + `Field` instead of raw `div` + spacing utilities; `InputGroup` + `InputGroupInput`/`InputGroupAddon` for inputs with adornments; `ToggleGroup` for 2–7 option choices instead of manually looped buttons.
- `icons.md` — icons from `@hugeicons/react`/`@hugeicons/core-free-icons` (per configured `iconLibrary`), not `lucide-react`; use `data-icon="inline-start"|"inline-end"` on icons inside `Button` rather than margin/sizing classes; pass icon components directly, not string keys through a lookup map.
- `base-vs-radix.md` — API differences that matter since this project mixes Base UI and Radix primitives: `render` prop (Base UI) vs `asChild` (Radix) for composition, `nativeButton={false}` when `render`-ing a non-button element, `Select`'s `items` prop requirement in Base UI, `ToggleGroup`'s `multiple` boolean (Base UI) vs `type="single"|"multiple"` (Radix), array vs scalar `defaultValue` differences for `Slider`/`Accordion`.

### Imports and formatting

Prettier (`@ianvs/prettier-plugin-sort-imports` + `prettier-plugin-tailwindcss`) enforces import order: React → Next → third-party → blank line → `types` → `@/types` → `@/config` → `@/lib` → `@/data` → `@/hooks` → `@/components/ui` → `@/components` → `@/*` → relative. Don't hand-order imports; run `pnpm format` if unsure.

ESLint additionally enforces: `no-console` (only `console.error` allowed), unused imports/vars as errors/warnings (prefix with `_` to intentionally ignore), and type-only imports must use inline `import { type Foo }` style (`consistent-type-imports`).
