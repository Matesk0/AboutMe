# Project Configuration (AGENTS.md) - Web About Me

This file guides development inside the **`web-about-me`** repository.

---

## 🏗️ Repository Overview
* **Role**: Static Web Portfolio & Project Showcase
* **Main Branch**: `main` (with active development on `dev`)
* **Tech Stack**: React 19 + Vite + TypeScript + Tailwind CSS
* **Hosting**: GitHub Pages / Vercel (Static)
* **Code Formatting**: ESLint + Prettier

---

## 🌿 Git & Branching Workflow
1. **Integration Branch (`dev`)**: All feature branches branch from and merge back into `dev`. Once stable, `dev` is merged into `main`.
2. **Feature Branches**: Use descriptive branch names prefixed with the task type:
   - `feature/<short-description>`
   - `fix/<short-description>`
   - `chore/<short-description>`
3. **Conventional Commits**: Every commit message must follow the Conventional Commits specification.
4. **Atomic Commits**: Ensure commits are small, logical, and focus on one specific change.
5. **Pre-commit Checks**: **ALWAYS** run `npm run lint` and `npm run build` to test the code before making any git commits. Commits must never break the build.

---

## 📜 Development & Coding Rules
1. **Purely Static**: No user authentication, database connections, or changeable states are allowed in this project. Safe for static hosting.
2. **Styling (Tailwind CSS)**: Use Tailwind CSS for styling. Maintain a strict, minimalist monochromatic (black, grey, white) aesthetic. Avoid bright colors, generic UI, or loud gradients. Emulate high-end, premium design.
3. **Responsive Design**: Ensure layouts stack beautifully on mobile viewports.
4. **Icons**: Use `lucide-react` for standard vector iconography.
5. **Readability & Formatting**:
   - ESLint and Prettier are mandatory.
   - Use clean naming conventions (PascalCase for React components, camelCase for variables/functions).

---

## 📂 Directories & Content
* `src/screens/home/index.tsx` - Primary static layout detailing biography and sections describing projects.
* `src/components/ui/` - Reusable UI components (buttons, cards, etc.).
* `src/providers/` - React contexts (e.g., ThemeProvider).
* `src/index.css` - Global CSS layout rules and Tailwind configuration.
* `src/App.tsx` - Root frame for routing and providers.

---

## ⚙️ Standard Commands
* **Dev Server**: `npm run dev`
* **Build App**: `npm run build`
* **Linting**: `npm run lint`
