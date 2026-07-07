# Project Configuration (AGENTS.md) - Web About Me

This file guides development inside the **`web-about-me`** repository.

---

## 🏗️ Repository Overview
* **Name**: `web-about-me`
* **Role**: Static Web Portfolio & Project Showcase
* **Tech Stack**: React 19 + Vite 6 + TypeScript + Vanilla CSS
* **Hosting**: GitHub Pages / Vercel (Static)

---

## 📜 Development Rules
1. **Purely Static**: No user authentication, database connections, or changeable states are allowed in this project.
2. **Styling**: Use Vanilla CSS variables, flexbox, and grid layouts. Avoid TailwindCSS unless explicitly requested. Maintain a sleek, modern space-dark theme.
3. **Responsive Design**: Ensure layouts stack beautifully on mobile viewports.
4. **Icons**: Use `lucide-react` for standard vector iconography.

---

## 📂 Directories & Content
* `src/assets/` - Images, developer photo, project graphics.
* `src/components/` - Button and card UI layouts.
* `src/pages/Portfolio.tsx` - Biography details and sections describing each of the mobile applications with links/instructions.
* `src/index.css` - Space-Dark CSS rules and keyframe animations.
* `src/App.tsx` - App frame.
