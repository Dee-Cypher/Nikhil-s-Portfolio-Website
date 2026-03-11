# Project Knowledge Base: Nikhil's Portfolio Website

> [!NOTE]
> This document is intended as a context file for AI agents to understand the project structure, tech stack, and core philosophy without needing to read every file.

## 1. Project Overview

* **Purpose**: Personal portfolio and knowledge base for **Nikhil Goyal**, a "Legal Engineer".
* **Core Identity**: Merging Legal Practice (IP, Contracts) with Software Engineering (Automation, AI).
* **Key Themes**: "Engineer > Administrator", "Open Source Law", Efficiency via Code.

## 2. Tech Stack

* **Framework**: React 18+ (Vite)
* **Language**: TypeScript
* **Router**: `react-router-dom` v6
* **Styling**: Vanilla CSS / Tailwind (implied by `index.css` usage patterns in typical Vite apps, though config is minimal).
* **Animation**: `framer-motion`
* **Icons**: `lucide-react`

## 3. Project Structure

The project follows a standard React+Vite structure:

* **`src/`** (Implied root for components)
  * **`components/`**: Reusable UI components.
  * **`pages/`**: Top-level route components (`Home.tsx`, `About.tsx`, `Tech.tsx`).
  * **`Linkedin/`**: Dedicated folder for LinkedIn-related assets and drafts (`profile_draft.md`).
  * **`docs/`**: Documentation files.
  * **`constants.ts`**: **CRITICAL FILE**. Acts as the "database" for the static site. Contains all data for Projects, Articles, and Stats.
  * **`types.ts`**: TypeScript definitions for the data models.

## 4. Key Data Models (`types.ts`)

* **`Project`**: Portfolio items. Includes `tools` array and `impact` metrics.
* **`Article`**: Blog/Knowledge base entries. categorized by `Legal Tech`, `No-Code`, etc.
* **`domain`**: Represents the two sides of the persona: `law` and `tech`.

## 5. Development Rules

1. **Content Updates**: Most content changes (adding a project, updating bio) should happen in `constants.ts`.
2. **LinkedIn Sync**: When updating professional persona, check `Linkedin/profile_draft.md` to ensure alignment with the website.
3. **Aesthetics**: Maintain the "Premium" look—dark modes, minimalist UI, and smooth `framer-motion` transitions.

## 6. Persona Guidelines ("The Legal Engineer")

* **Do**: Emphasize *building* systems, *automating* workflows, and *engineering* solutions.
* **Don't**: Describe work as purely manual legal administrative tasks (e.g., "drafting", "filing"). Use verbs like "Architected", "Automated", "Engineered".
