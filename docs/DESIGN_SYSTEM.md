# 🎨 Design System: "Retro-Terminal Brutalism"

## 📐 Design Principles

### 1. Hard Boundaries
Everything has a border. Content is contained in clear, defined spaces. We use `border-2 border-black` extensively. There are no soft transitions between sections; they are cut with hard lines.

### 2. "Clickable" Tactility
Interactive elements must *feel* physical.
- **Hover States**: Elements don't just change color; they translate (`translate-x-[2px]`, `translate-y-[2px]`) and their shadows shift, mimicking the mechanical depression of a physical button.
- **Cursors**: We use specific cursor states to enhance the "blueprint/drafting" feel.

### 3. Motion with Purpose
Animations are not decorative; they are mechanical/industrial.
- **Marquees**: Represent data streams or ticker tapes.
- **Slide-ins**: Mimic loading windows or punch cards.
- **Floating**: Represents the "cloud" or automated background processes.

---

## 🖌 Design Kit

### Typography
We use a dual-font system to separate "Marketing" from "Data".

| Use Case | Font Family | Tailwind Class | Description |
| :--- | :--- | :--- | :--- |
| **Headings / UI** | **Space Grotesk** | `font-sans` | Geometric, modern, slightly quirky. Used for big statements. |
| **Data / Metadata** | **JetBrains Mono** | `font-mono` | Technical, developer-focused. Used for skills, tags, and stats. |

### Color Palette

| Color Name | Hex Code | Purpose |
| :--- | :--- | :--- |
| **Pitch Black** | `#000000` | The Frame. Borders, text, deep shadows. |
| **Stark White** | `#FFFFFF` | The Canvas. Backgrounds, text on dark mode. |
| **Brand Teal** | `#319795` | **Action / Success**. Buttons, links, hover states. Represents digital precision. |
| **Brand Amber** | `#FFC107` | **Warning / Highlight**. Marquees, CTA accents. |
| **System Gray** | `#F3F4F6` | **Structure**. Backgrounds for cards or sections to differentiate depth. |

### 🧩 Component Library

#### 1. The "Window" Card
A card component styled like a retro OS window (Windows 95 / MacOS System 7 style).
- **Header Bar**: Black background, white text, window controls (`-`, `□`, `×`).
- **Content**: Image with a grayscale filter that reveals color on hover.
- **Behavior**: Hovering lifts the card and hardens the shadow.

#### 2. The "Brutal" Button
- **Default State**: White background, Black border (2px), Hard shadow (4px offset).
- **Hover State**: Background fills with Teal or Black, Shadow reduces to 2px, Element moves 2px down/right (simulating a press).

#### 3. The Navigation
- **Mobile**: A drawer that slides down, physically pushing content or overlaying with a hard border.
- **Desktop**: Sticky top bar with brutalist separators between links.

#### 4. The Background
- **Grid Pattern**: A CSS gradient grid (`bg-grid`) that resembles graph paper or a blueprint, reinforcing the "Architect" persona.
