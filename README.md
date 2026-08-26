# CareerCafe Landing Page

The landing page repository for **CareerCafe**, built with Next.js, TypeScript, Tailwind CSS, shadcn/ui, and Hugeicons.

---

## 🚀 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router, React 19, React Compiler)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/) (powered by [Base UI](https://base-ui.com/) & Radix UI primitives)
- **Icons:** [Hugeicons React](https://hugeicons.com/) (`@hugeicons/react`, `@hugeicons/core-free-icons`)
- **Animation:** [Motion](https://motion.dev/)
- **Theming:** [next-themes](https://github.com/pacocoursey/next-themes) (Dark/Light mode support)
- **Package Manager:** [pnpm](https://pnpm.io/)
- **Code Quality & Git Hooks:**
  - [ESLint](https://eslint.org/) (Flat Config)
  - [Prettier](https://prettier.io/) (with Tailwind & import sorting plugins)
  - [Husky](https://typicode.github.io/husky/) (Git hooks)
  - [lint-staged](https://github.com/lint-staged/lint-staged) (staged files linter & formatter)
  - [Commitlint](https://commitlint.js.org/) (Conventional Commits)

---

## 📁 Project Structure

```text
├── .husky/                  # Git hook configurations (pre-commit, commit-msg)
├── public/                  # Static assets (images, icons, fonts)
├── src/
│   ├── app/                 # Next.js App Router (pages, layouts, routes)
│   │   ├── (root)/          # Main landing page route group
│   │   │   ├── analyst-tracks/ # Analyst tracks pages & sections
│   │   │   ├── layout.tsx   # Root group layout (navbar, footer wrapper)
│   │   │   └── page.tsx     # Home / Landing page entry
│   │   ├── favicon.ico      # Favicon
│   │   ├── globals.css      # Global styles and Tailwind theme variables
│   │   ├── layout.tsx       # Top-level root layout & providers
│   │   └── not-found.tsx    # 404 error page
│   ├── components/          # React components
│   │   ├── analyst-tracks/  # Components specific to the Analyst Tracks page
│   │   ├── landing/         # Landing page components & feature cards
│   │   │   └── sections/    # Specific landing page sections (Hero, Programmes, Testimonials, etc.)
│   │   ├── layouts/         # Layout components (Navbar, Footer, NavMenu, NavigationSheet)
│   │   ├── ui/              # Reusable shadcn / Base UI components (Button, Dialog, Sheet, etc.)
│   │   ├── theme-provider.tsx # Theme context provider wrapper
│   │   └── theme-toggle.tsx # Dark/Light mode toggle component
│   ├── constants/           # Static constants, site config, and navigation links
│   ├── hooks/               # Custom React hooks
│   └── lib/                 # Utility functions and class merging helpers (`cn`)
├── .lintstagedrc.mjs        # lint-staged configuration
├── .prettierrc              # Prettier code formatting configuration
├── commitlint.config.js     # Commit message linting rules (Conventional Commits)
├── components.json          # shadcn/ui CLI configuration
├── eslint.config.mjs        # ESLint flat config
├── next.config.ts           # Next.js configuration
├── package.json             # Dependencies and npm scripts
├── pnpm-lock.yaml           # pnpm lockfile
└── tsconfig.json            # TypeScript configuration
```

---

## 🛠️ Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- **Node.js**: `18.18+` or `20+` recommended
- **pnpm**: `9+` (or run `corepack enable pnpm`)

### Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd careercafe-frontend
   ```

2. **Install dependencies:**

   ```bash
   pnpm install
   ```

3. **Run the development server:**
   ```bash
   pnpm dev
   ```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 📜 Available Scripts

| Command             | Description                                                         |
| ------------------- | ------------------------------------------------------------------- |
| `pnpm dev`          | Starts the Next.js development server with Turbopack                |
| `pnpm build`        | Builds the production bundle                                        |
| `pnpm start`        | Runs the built production server                                    |
| `pnpm lint`         | Runs ESLint to check for code quality issues                        |
| `pnpm lint:fix`     | Automatically fixes autofixable ESLint errors                       |
| `pnpm check-types`  | Runs the TypeScript compiler to verify types without emitting files |
| `pnpm format`       | Formats codebase using Prettier                                     |
| `pnpm format:check` | Checks if codebase adheres to Prettier formatting                   |

---

## 🏷️ Commit Convention

This repository enforces **Conventional Commits** using **Husky** and **Commitlint** with `@commitlint/config-conventional`.

Commit messages must follow the format:

```text
<type>(<optional scope>): <description>
```

**Common Types:**

- `feat`: A new feature
- `fix`: A bug fix
- `refactor`: Code changes that neither fix a bug nor add a feature
- `chore`: Build process or tooling changes (dependencies, config, etc.)
- `docs`: Documentation updates
- `style`: Code style changes (formatting, missing semi-colons, etc.)

_`lint-staged` automatically lints and formats staged files before commits._
