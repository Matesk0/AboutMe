# About Me: Web Portfolio Design Specification

This document outlines the specific design, layout, and aesthetic rules implemented in the `web-about-me` static portfolio.

## Core Aesthetic & Technology
* **General Vibe**: A premium developer feel that is highly readable but features striking micro-interactions, smooth animations, and terminal-like blocks.

## Layout Structure
**Overall Structure**: 
* A simple, centralized, single-column main layout wrapper (`max-w-3xl` centered on the screen).
* Excellent spacing and typography to ensure readability.

## Sections & Components

### 1. Navigation
* **Floating Header**: A fixed, frosted-glass "pill" navigation bar at the top center of the screen (`backdrop-blur-md`).
* **Links**: Smooth scrolling to sections (About, Projects, Skills, Experience, Contact).

### 2. Hero Section
* **Content**: Name, title ("Full Stack Developer"), and a brief intro.
* **Animations**: Smooth fade-in and slide-up animations on page load.
* **Call to Action**: Prominent "Get In Touch" button.
* **Usage Block**: A dark, sleek, macOS-terminal-styled code block demonstrating the usage of `create-modern-react`.

### 3. About Me ("Want to know me")
* **Layout**: A two-part grid section.
* **Left**: A stylized emoji/image container card with a subtle gradient hover effect.
* **Right**: Bio text and a small grid of quick stats ("Years Exp", "Projects").

### 4. Projects Section ("Selected Works")
* **Categorization**: Split into two subgenres: **Websites** and **Applications**.
* **Card Layout**: Clean, vertically stacked blocks.
  * **Visuals**: Lucide React icons (`Globe`, `Smartphone`) on the left with a scale-up hover animation.
  * **Details**: Title, description, and links on the right.
  * **Tags**: A flex-wrap list of small outline badges for the tech stack.

### 5. Skills & Expertise
* **Structure**: Categorized blocks (Languages, Frameworks & Libraries) marked with Lucide icons (`Code2`, `Layout`).
* **Visuals**: Displayed as a collection of dark cards with monospaced text.

### 6. Work Experience
* **Structure**: A vertical timeline layout.
* **Visuals**: A thin vertical line down the left side with glowing dots marking each role. Cards on the right contain the job title, company, dates, and a description.

### 7. Contact ("Get In Touch")
* **Visuals**: A prominent call-to-action area at the bottom.
* **Interactions**: A glowing green "Copy Email Address" button with a `Terminal` icon.
