# Project Configuration (AGENTS.md) - Web About Me

This file guides development inside the **`web-about-me`** repository.

---

## 🏗️ Repository Overview
* **Role**: Static Web Portfolio & Project Showcase
* **Main Branch**: `dev` (where updates and integration occur)
* **Tech Stack**: React 19 + Vite 6 + TypeScript + Vanilla CSS
* **Hosting**: GitHub Pages / Vercel (Static)
* **Code Formatting**: ESLint + Prettier

---

## 🌿 Git & Branching Workflow
1. **Integration Branch (`dev`)**: All feature branches branch from and merge back into `dev`.
2. **Feature Branches**: Use descriptive branch names prefixed with the task type:
   - `feature/<short-description>`
   - `fix/<short-description>`
   - `chore/<short-description>`
3. **Conventional Commits**: Every commit message must follow the Conventional Commits specification.
4. **Atomic Commits**: Ensure commits are small, logical, and focus on one specific change.
5. **Pre-commit Checks**: **ALWAYS** run build and test the code before making any git commits. Commits must never break the build.

---

## 📜 Development & Coding Rules
1. **Purely Static**: No user authentication, database connections, or changeable states are allowed in this project. Safe for static hosting.
2. **Styling**: Use Vanilla CSS variables, flexbox, and grid layouts. Avoid TailwindCSS unless explicitly requested. Maintain a sleek, modern space-dark theme.
3. **Responsive Design**: Ensure layouts stack beautifully on mobile viewports.
4. **Icons**: Use `lucide-react` for standard vector iconography.
5. **Readability & Formatting**:
   - ESLint and Prettier are mandatory.
   - Use clean naming conventions (PascalCase for components, camelCase for variables/functions).

---

## 📂 Directories & Content
* `src/assets/` - Images, developer photo, project graphics.
* `src/components/` - Clean UI items (CV download button, project cards).
* `src/pages/Portfolio.tsx` - Primary static layout detailing biography and sections describing projects (categorized into "Websites" and "Applications" subgenres) with links/instructions.
* `src/index.css` - Vanilla CSS layout, space-dark rules, and keyframe animations.
* `src/App.tsx` - Root frame.

---

## ⚙️ Standard Commands
* **Dev Server**: `npm run dev` (or `pnpm dev`)
* **Build App**: `npm run build` (or `pnpm build`)
* **Linting**: `npm run lint` (or `pnpm lint`)
