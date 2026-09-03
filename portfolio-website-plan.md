# Portfolio Website Migration & Implementation Plan (Minimalist Edition)

> ***Purpose:** This document is the single source of truth and implementation guide for an AI developer agent or engineer building the personal portfolio website for **Vishnu Paturu (Senior Software Engineer)**.*  
---

## 1\. System Overview & Core Philosophy

- **Target Persona:** Senior to Staff Software Engineer specializing in Web Platforms, Cloud Microservices, Design Systems, and AI-Native Systems / Autonomous Agentic Tooling.  
- **Core Requirement — Data-Driven Portfolio Content:** `portfolio.json` is the canonical content library, not a requirement to display every field. The UI should curate, prioritize, and selectively reveal content from it. Personal and portfolio facts shown on the site must come from this file, while structural interface copy such as navigation labels, filter controls, and accessibility instructions may remain in components.
- **Zero Hardcoding Policy:**  
  - UI components must never contain hardcoded company names, project descriptions, or technology tags.  
  - Adding, editing, reordering, or changing featured entries in `portfolio.json` must update the relevant UI without code or layout modifications.
- **Portfolio, Not Résumé:** The page must communicate engineering perspective and selected impact rather than reproduce a chronological résumé. Favor concise narratives, representative projects, and a small number of proof points. Keep exhaustive history, complete skill inventories, and detailed bullet lists in the downloadable résumé.
- **Responsive & Accessible:** Fully responsive across mobile, tablet, and desktop viewports, targeting WCAG 2.1 AA compliance and 95+ Lighthouse scores across Performance, Accessibility, Best Practices, and SEO.

---

## 2\. Recommended Tech Stack

## 

| Layer | Technology | Rationale |
| :---- | :---- | :---- |
| **Bundler & Tooling** | **Vite** | Next-generation frontend tooling providing lightning-fast Hot Module Replacement (HMR) and optimized Rollup-based production builds. |
| **Framework** | **React 19** | Component-based UI library matching the version already used by this repository. |
| **Language** | **TypeScript 5+** | Strict typing across data models and component props. |
| **Validation** | **Zod** | Runtime schema validation of `portfolio.json` to catch malformed data early. |
| **Styling** | **Tailwind CSS** | Utility-first styling supporting clean dark-mode-first aesthetic. |
| **Icons** | **Lucide React** | Consistent, modern iconography. |
| **Animations** | **Framer Motion** | Micro-interactions, filter transitions, and smooth entrance effects. |

---

## 3\. Visual & Aesthetic Guidelines (Minimalist Typography-First Style & Dark Mode)

- **Palette:**  
  - Light theme: Clean white background with soft neutral surfaces and a restrained green accent for links, active tabs, focus rings, and hover states.
  - Dark theme: Near-black background with subtly elevated charcoal surfaces and a warm yellow/gold accent for links, active tabs, focus rings, and hover states.
  - All foreground, muted, border, and accent tokens must maintain WCAG 2.1 AA contrast in both themes; avoid using accent color as the only indicator of state.
- **Typography:**  
  - Headings & Body: `Geist Sans` or `Inter` for clean, professional legibility.  
  - Metrics & Tech Tags: `Geist Mono` or `JetBrains Mono` for a distinct developer/infrastructure aesthetic.  
- **Micro-Interactions:**  
  - Cards should feature subtle border illumination on hover (`hover:border-zinc-700` with slight transition).  
  - Filter tabs should animate smoothly using Framer Motion layout transitions.  
  - Dark mode should be the default theme with an elegant toggle in the Navbar.
- **Editorial Restraint:**
  - Use generous whitespace and varied section layouts rather than a uniform stack of résumé-style cards.
  - Avoid dense grids of badges, long bullet lists, proficiency meters, and repeated technology inventories.
  - Each section should answer a distinct question: who Vishnu is, what he builds, how he approaches engineering, and what outcomes he has produced.
  - Prefer links and progressive disclosure only when they add value; do not hide a full résumé inside accordions.

---

## 4\. Data Contract & TypeScript Schema

The data source is `portfolio.json`. The following interfaces document the intended contract:

```ts
export interface SocialLinks {
  github?: string;
  linkedin?: string;
  twitter?: string;
  website?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  headline: string;
  location: string;
  email: string;
  avatarUrl?: string; // e.g. "/avatar.jpg"
  resumeUrl: string;
  socials: SocialLinks;
  bio: string;
}

export type SkillsRecord = Record<string, string[]>;

export interface WorkExperience {
  role: string;
  company: string;
  client?: string;
  location: string;
  employmentType?: string;
  startDate: string; // ISO YYYY-MM
  endDate?: string; // ISO YYYY-MM; omit for current roles
  displayPeriod?: string;
  featured?: boolean;
  summary: string;
  achievements: string[];
  technologies: string[];
}

export interface ProjectLinks {
  demo?: string | null;
  github?: string | null;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  featured: boolean;
  description: string;
  highlights: string[];
  technologies: string[];
  status?: 'public' | 'private' | 'case-study';
  linkLabel?: string;
  links: ProjectLinks;
}

export interface Education {
  degree: string;
  specialization: string;
  institution: string;
  location: string;
  period: string;
  coursework: string[];
  thesisProjects?: string[];
}

export interface PortfolioData {
  personal: PersonalInfo;
  skills: SkillsRecord;
  experience: WorkExperience[];
  projects: Project[];
  education: Education[];
}
```

The Zod schema in `src/lib/schema.ts` is the runtime source of truth. Export TypeScript types using `z.infer<typeof portfolioSchema>` rather than maintaining a second handwritten contract. The interfaces above document the intended shape and must not be duplicated in production code. Validate ISO date formats and infer whether a role is current from the absence of `endDate`.

---

## 5\. Page Structure & Component Breakdown

### 5.1. Sticky Header & Navigation (`Navbar.tsx`)

- **Left:** Brand logo / Name initials (`VP` or `Vishnu Paturu`).  
- **Center:** Smooth scroll anchor links: `#about`, `#projects`, `#experience`, `#skills`, `#education`, `#contact`.  
  - Resume download button sourced from `portfolio.personal.resumeUrl`.  
  - GitHub & LinkedIn icon shortcuts.  
  - Subtle Sun/Moon theme toggle using Tailwind 'class' strategy and localStorage persistence.
  - Collapse navigation into a keyboard-accessible menu at mobile widths. The menu button must expose its state with `aria-expanded` and reference the menu with `aria-controls`.

### 5.2. Hero Section (`Hero.tsx`)

- **Target Data:** `portfolio.personal`  
- **Anchor:** Use `id="about"` because this section contains both the introduction and professional bio referenced by the About navigation link.
- **Privacy:** Do not include, render, or ship a phone number in `portfolio.json`, page markup, structured data, or the public resume.
- **Elements:**  
  - Clean, typography-led layout focused on narrative flow. (Explicitly removed profile photo/avatar requirements).  
  - Name: Large bold heading (`Vishnu Paturu`).  
  - Title & Location: `Senior Software Engineer • Bellevue, WA`.  
  - Headline: High-impact tagline (`Building scalable web platforms, cloud microservices, and autonomous AI systems`).  
  - Bio: A concise one- or two-sentence point of view about the systems Vishnu builds; avoid opening with a résumé-style year count or employer list.
  - CTAs: Primary "Get in Touch" button (scrolls to contact or opens mailto), Secondary "Explore Work" button (scrolls to projects).  
  - Note: Explicitly omit any employment availability or open-to-work status tags.

### 5.3. Featured Projects & Systems (`ProjectsSection.tsx` & `ProjectCard.tsx`)

- **Target Data:** `portfolio.projects`  
- **Dynamic Filter Tabs:**  
  - Automatically derive distinct categories from all projects: `['All', ...Array.from(new Set(projects.map(p => p.category)))]`.  
  - Toggle between `All`, `AI Developer Tooling`, `Full-Stack & Cloud`, `Frontend Platform`, `Academic AI/ML Research`, etc.  
  - Secondary filter or search bar to filter projects by technology (e.g., clicking a tech tag filters projects utilizing it).  
- **Card Design:**  
  - Category badge \+ "Featured" badge for `featured === true`.  
  - Project Title & summary description.  
  - Show at most two key technical outcomes on the card; reserve additional details for a focused case-study view when one exists.
  - Render only the most relevant technology tags and avoid turning cards into skill inventories.
  - Action buttons: "GitHub Repo" (only rendered if `links.github` exists), "Live Demo" (only if `links.demo` exists). If both are absent, render `linkLabel` when provided or derive a neutral label from the explicit `status`; never infer that a project is enterprise-internal merely because it has no URL.

### 5.4. Work Experience Timeline (`ExperienceSection.tsx` & `ExperienceCard.tsx`)

- **Target Data:** `portfolio.experience`  
- **Layout:** Present a selective engineering journey rather than a full résumé timeline. Give featured or recent roles enough room for a short narrative and collapse older roles into a compact history treatment.
- **Card Content:**  
  - Role title, company name, and client callout badge if present (e.g., `LTM` with a prominent `Client: Microsoft` pill).  
  - Format dates from `startDate` and `endDate`, using `displayPeriod` only when an editorial override is needed. Show a "Current" badge when `endDate` is absent.
  - Location and employment type.  
  - A short role narrative and no more than two representative outcomes for featured roles.
  - Do not render exhaustive achievement lists, expandable résumé bullets, or a technology stack for every role. The résumé download provides that depth.

### 5.5. Engineering Capabilities (`SkillsSection.tsx`)

- **Target Data:** `portfolio.skills`  
- Group skills into a few capability themes that support the site's narrative, such as platform engineering, cloud systems, and AI-native tooling.
- Display a restrained selection from each relevant category. Do not use proficiency bars, rankings, or an exhaustive matrix of every technology in the data.

### 5.6. Education & Research (`EducationSection.tsx`)

- **Target Data:** `portfolio.education`  
- **Content:**  
  - Degree & Specialization: *Master of Science in Intelligent Systems Engineering (AI/ML)*.  
  - Institution: *Indiana University Bloomington* (Bloomington, IN) & Dates.
  - Keep education visually compact. Do not render a coursework badge list by default.
  - Treat substantial academic or thesis work as projects in the Projects section instead of résumé-style education details.

### 5.7. Contact & Footer (`Footer.tsx`)

- **Target Data:** `portfolio.personal`  
- **Content:**  
  - "Let's Connect" card with one-click email copy button and `mailto:` link.  
  - Social profiles with icon links (GitHub, LinkedIn).  
  - A visually secondary Download Résumé action.  
  - Copyright line and "Designed & built with React, Vite & Tailwind CSS".

---

## 6\. Project Directory Layout

vistej.github.io/  
├── public/  
│   └── resume.pdf  
├── src/  
│   ├── assets/             \# Global styles and images  
│   ├── components/         \# Section components (Navbar, Hero, Projects, etc.)  
│   ├── data/  
│   │   └── portfolio.json  
│   ├── hooks/              \# Custom hooks (e.g., useTheme.ts)  
│   ├── lib/  
│   │   └── schema.ts  
│   ├── types/  
│   │   └── portfolio.ts  
│   ├── App.tsx             \# Main application entry  
│   └── main.tsx            \# React DOM mounting  
├── index.html              \# Entry HTML file  
├── tailwind.config.ts  
├── vite.config.ts  
└── package.json  
---

## 7\. Step-by-Step Implementation Instructions for Coding Agent

When an AI agent is instructed to build this application, it must follow these execution steps in order:

1. **Migrate the Existing Project In Place:**  
   - Do not create a nested project. Replace Create React App and `react-scripts` with Vite while preserving the existing repository, Git history, GitHub Pages URL, and React 19 dependency.
   - Add TypeScript and Vite configuration, rename JavaScript entry files to `.tsx`, move the HTML entry point to the Vite root, and remove CRA-only files after the migration is verified.
   - Install `vite`, `typescript`, `@vitejs/plugin-react`, `lucide-react`, `clsx`, `tailwind-merge`, `framer-motion`, and `zod`. Update package scripts and deployment output from CRA's `build/` to Vite's `dist/`. Keep the existing Tailwind 3/PostCSS setup unless a separate Tailwind upgrade is explicitly requested.
2. **Seed Data:**  
   - Place the full `portfolio.json` file inside `src/data/portfolio.json`.  
3. **Define Type Contract:**  
   - Create `src/lib/schema.ts`, parse and validate `portfolio.json` using Zod, and export inferred types from `src/types/portfolio.ts`. Avatar assets remain optional; render no avatar when `avatarUrl` is absent.
4. **Configure Design System:**  
   - Configure `tailwind.config.ts` with `darkMode: 'class'` and dark theme color tokens (`zinc`/`neutral` palette, font variables, animation keyframes).  
   - Set up custom fonts in `src/index.css` and `index.html`.  
5. **Implement Modular Components:**  
   - Build each section independently in `src/components/`, strictly typing props and ingesting data passed from `src/App.tsx`.  
   - Build the selective experience journey with distinct treatments for featured/recent and compact historical roles.
   - Ensure dynamic rendering is used for featured content, categories, skill sections, and conditional link buttons.
   - Enforce the section-level content limits in this plan so richer JSON data does not create dense résumé-like layouts.
   - Do NOT include any availability status pill or open-to-work badges.  
6. **Polishing & Responsiveness:**  
   - Add micro-animations (e.g., hover scaling, subtle border glow, tab layout transitions).  
   - Test across breakpoints: `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px).  
   - Respect `prefers-reduced-motion`, provide visible keyboard focus states, add a skip-to-content link, and ensure filters, menus, and expandable content work without a pointer.
7. **Verification & Audit:**  
   - Run type checking and `npm run build` to verify zero type errors and a clean Vite SPA build.
   - Run automated tests plus Lighthouse/Axe checks. Interactive controls must have an accessible name; use visible text where available and `aria-label` only for icon-only or otherwise unlabeled controls. Maintain contrast ratio \>= 4.5:1 for normal text.
   - Add a no-flash theme initialization strategy and verify both themes.
8. **SEO & GitHub Pages Deployment:**
   - Add a descriptive title, meta description, canonical URL, Open Graph/Twitter metadata, JSON-LD person/profile data, `robots.txt`, and `sitemap.xml`. Derive personal SEO content from `portfolio.json`.
   - Configure Vite's `base` for the `vistej.github.io` user site and add a GitHub Actions Pages workflow that publishes the Vite `dist/` directory.

