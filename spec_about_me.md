# Spec: About Me Web Portfolio (`web-about-me`)

This repository contains the standalone **About Me Portfolio** web application. It is designed as a fast, responsive, purely static showcase.

---

## 🛠️ Tech Stack & Dependencies
* **Framework**: React 19 (Vite 6)
* **Language**: TypeScript 5+
* **Styling**: Vanilla CSS (Space-Dark theme)
* **Icons**: `lucide-react`
* **Static Hosting**: GitHub Pages, Vercel, or Netlify

---

## 📂 Folder Structure
```text
about-me/
├── src/
│   ├── assets/             # Bio pictures, project graphics
│   ├── components/         # Clean UI items (CV download button, cards)
│   ├── pages/
│   │   └── Portfolio.tsx   # Primary static layout
│   ├── App.tsx             # Root frame
│   ├── index.css           # Vanilla CSS layout and animations
│   └── main.tsx            # Root mounting
├── index.html              # HTML shell
├── package.json            # Vite scripts & dependencies
└── tsconfig.json           # TypeScript configuration
```

---

## ⚙️ App Requirements (Purely Static)
1. **Developer Biography**:
   - Clean profile display showing developer background, target specialties, and CV download link.
2. **Project Showcase**:
   - Graphic tiles detailing your React Native applications:
     - **Hobbies**: D&D character rolling & movie reviews.
     - **Games & Casino**: Minimax AI Arcade & slots.
     - **Notes**: Obsidian devlog wiki.
     - **Gym**: Workout sets & SVG muscle recovery mapping.
   - Includes links or instructions to access each app.
3. **No Dynamic User State**:
   - No login, no chatbot, and no dynamic inputs.
   - Safe for static hosting.

---

## 🔌 Backend Integration
* **None**: This repository is serverless and static. It does not write or read from any database.
