# 🎨 Design System: "Retro-Terminal Brutalism"

## 📐 Design Principles

### 1. Hard Boundaries & High Contrast
Everything has a border. Content is contained in clear, defined spaces. 
- **Light Mode**: White BG, Black Borders.
- **Dark Mode**: Black BG, White Borders.
- **Accents**: Brand Teal `#319795` and Brand Amber `#FFC107` punch through both themes.

### 2. "Clickable" Tactility
Interactive elements must *feel* physical.
- **Hover States**: Elements don't just change color; they translate (`translate-x-[2px]`, `translate-y-[2px]`) and their shadows shift/disappear, mimicking the mechanical depression of a physical button.

### 3. Motion with Purpose
Animations are not decorative; they are mechanical/industrial.
- **Parallax**: Background elements (Grid, Icons) move at different speeds than the foreground content, creating depth without softness.
- **Marquees**: Represent data streams.

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
| **Pitch Black** | `#000000` | The Void. Background in Dark Mode, Text in Light Mode. |
| **Stark White** | `#FFFFFF` | The Paper. Background in Light Mode, Text in Dark Mode. |
| **Brand Teal** | `#319795` | **Action / Success**. Buttons, links, hover states. Represents digital precision. |
| **Brand Amber** | `#FFC107` | **Warning / Highlight**. Marquees, CTA accents. |
| **System Gray** | `#F3F4F6` | **Structure**. Backgrounds for cards or sections to differentiate depth. |
| **Zinc Dark** | `#18181b` | **Structure (Dark)**. Backgrounds for cards in dark mode. |

### 🧩 Component Library

#### 1. The "Window" Card
A card component styled like a retro OS window.
- **Header Bar**: Inverted colors (White text on Black, or Black text on White).
- **Behavior**: Hovering lifts the card and hardens the shadow.

#### 2. The Dark Mode Toggle
A circular button in the nav.
- **Function**: Toggles `dark` class on `<html>` and persists via `localStorage`.
- **Icon**: Sun (Light) / Moon (Dark).

#### 3. The Codex Grid
A masonry-style or grid layout for Knowledge articles.
- **Tags**: Monospaced, small, high-contrast pills.
- **Search**: A prominent input field that filters the grid in real-time.
