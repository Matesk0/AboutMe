# About Me: Web Portfolio Design Specification

This document outlines the specific design, layout, and aesthetic rules for building the `web-about-me` static portfolio. It combines specific features from various design inspirations into a unified, high-end technical portfolio.

## Core Aesthetic & Technology
* **Tech Stack**: React 19 + Vite 6 + TypeScript + Vanilla CSS (No Tailwind allowed).
* **Color Palette (Kuchizu-inspired)**: 
  * Background: Pure blacks (`#000000`, `#0a0a0a`) and deep grays.
  * Text: High contrast white/off-white (`#fafafa`) and muted grays for secondary text (`#a1a1aa`).
  * Accents: Vibrant, glowing, hacker-esque colors (e.g., neon red, orange, or green) specifically used for interactive elements, status dots, and live data accents.
* **General Vibe**: A premium, "dashboard-like" developer feel that is highly readable but features striking micro-interactions and smooth animations.

## Layout Structure
**Overall Structure (Nader-inspired)**: 
* A simple, centralized, single-column main layout wrapper (e.g., `max-w-3xl` or `max-w-4xl` centered on the screen).
* Excellent spacing and typography to ensure readability.

## Sections & Components

### 1. Navigation (Abhay-inspired)
* **Floating Header**: A fixed, frosted-glass "pill" navigation bar at the top center of the screen (`backdrop-filter: blur()`).
* **Links**: Smooth scrolling to sections (About, Projects, Skills, Experience, Contact).

### 2. Hero Section
* **Content**: Name, title ("Software Engineer" / "Full Stack Developer"), and a brief intro.
* **Animations (Abhay-inspired)**: Smooth fade-in and slide-up animations on page load.
* **Live Features (Kuchizu-inspired)**: Include small, dynamic-looking metrics (e.g., a flashing "online" status badge, local time, or static placeholders that look like system metrics).

### 3. About Me ("Want to know me") (Abhay-inspired)
* **Layout**: A two-part section.
* **Left**: A stylized image container (potentially a small carousel or a card with a subtle glowing background blob).
* **Right**: Bio text and a small grid of quick stats (e.g., "Years Experience", "Projects Built").

### 4. Projects Section
* **Categorization**: Must be split into two subgenres: **Websites** and **Applications**.
* **Card Layout (Nader-inspired)**: Clean, vertically stacked blocks (meaning a single column list of projects).
  * **Visuals**: Icon or small image on the left.
  * **Details**: Title, description, and links on the right.
  * **Tags**: A flex-wrap list of small pill badges for the tech stack at the bottom of the details.

### 5. Skills & Expertise (Abhay-inspired)
* **Structure**: Categorized blocks (e.g., Languages, Frameworks, Tools).
* **Visuals**: Displayed as a collection of small glassmorphism cards or badges containing a tiny icon and the text. 

### 6. Experience (Abhay-inspired)
* **Structure**: A vertical timeline layout.
* **Visuals**: A thin vertical line down the left side with glowing dots marking each role. Cards on the right contain the job title, company, dates, and bullet points.

### 7. Contact ("Get in touch") (Abhay-inspired)
* **Visuals**: A prominent call-to-action area at the bottom.
* **Interactions**: Glow effects on hover and a "copy to clipboard" button for the email address.
