# Project: About Me Portfolio

## 🏗️ Repository Overview
* **Role**: Static Web Portfolio & Project Showcase
* **Main Branch**: `dev` (where updates and integration occur)
* **Tech Stack**: React 19 + Vite 6 + TypeScript + Tailwind CSS + shadcn/ui
* **Testing**: Playwright
* **Code Formatting**: ESLint + Prettier

---

## 🌿 Git & Branching Workflow
1. **Integration Branch (`dev`)**: All feature branches branch from and merge back into `dev`.
2. **Feature Branches**: Use descriptive branch names prefixed with the task type:
   - `feature/<short-description>`
   - `fix/<short-description>`
   - `chore/<short-description>`
3. **Conventional Commits**: Every commit message must follow the Conventional Commits specification:
   - `feat: <description>` (new features)
   - `fix: <description>` (bug fixes)
   - `refactor: <description>` (code cleanup/restructuring)
   - `test: <description>` (adding or modifying tests)
   - `docs: <description>` (documentation changes)
   - `chore: <description>` (tooling, dependencies, config updates)
4. **Atomic Commits**: Ensure commits are small, logical, and focus on one specific change.

---

## 📜 Development & Coding Rules
1. **Styling**: Always use Tailwind CSS class names. Follow a consistent dark-theme color palette.
2. **Components**: Use shadcn/ui components for interactive and layout elements (buttons, cards, menus, dialogs). Customize them in `components/ui/`.
3. **Readability & Formatting**:
   - ESLint and Prettier are mandatory. Run formatting/linting before committing.
   - Use functional components with TypeScript typings (`React.FC` or standard functions).
   - Use clean naming conventions (PascalCase for components, camelCase for variables/functions).
4. **Testing**:
   - Write Playwright tests for critical features (user biography view, navigation, project card links).
   - Co-locate or organize tests in the `tests/` directory.

---

## ⚙️ Standard Commands
* **Dev Server**: `npm run dev`
* **Build App**: `npm run build`
* **Run Tests (Playwright)**: `npx playwright test`
* **Linting & Formatting**: `npm run lint` & `npm run format`
* **Type Checking**: `npx tsc --noEmit`
