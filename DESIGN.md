---
name: AJITH V Portfolio
colors:
  surface: '#0e1417'
  surface-dim: '#0e1417'
  surface-bright: '#333a3d'
  surface-container-lowest: '#090f12'
  surface-container-low: '#161d1f'
  surface-container: '#1a2123'
  surface-container-high: '#242b2e'
  surface-container-highest: '#2f3639'
  on-surface: '#dde3e7'
  on-surface-variant: '#bbc9cf'
  inverse-surface: '#dde3e7'
  inverse-on-surface: '#2b3134'
  outline: '#859399'
  outline-variant: '#3c494e'
  surface-tint: '#47d6ff'
  primary: '#a5e7ff'
  on-primary: '#003543'
  primary-container: '#00d2ff'
  on-primary-container: '#00566a'
  inverse-primary: '#00677f'
  secondary: '#edb1ff'
  on-secondary: '#520070'
  secondary-container: '#6e208c'
  on-secondary-container: '#e498ff'
  tertiary: '#ffd79f'
  on-tertiary: '#442b00'
  tertiary-container: '#ffb229'
  on-tertiary-container: '#6c4700'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#b6ebff'
  primary-fixed-dim: '#47d6ff'
  on-primary-fixed: '#001f28'
  on-primary-fixed-variant: '#004e60'
  secondary-fixed: '#f9d8ff'
  secondary-fixed-dim: '#edb1ff'
  on-secondary-fixed: '#320046'
  on-secondary-fixed-variant: '#6e208c'
  tertiary-fixed: '#ffddb1'
  tertiary-fixed-dim: '#ffba4a'
  on-tertiary-fixed: '#291800'
  on-tertiary-fixed-variant: '#624000'
  background: '#0e1417'
  on-background: '#dde3e7'
  surface-variant: '#2f3639'
typography:
  h1:
    fontFamily: Space Grotesk
    fontSize: 80px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  h2:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h3:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  label-caps:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.2em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 24px
  margin-page: 64px
  stack-sm: 16px
  stack-md: 32px
  stack-lg: 80px
---

## Brand & Style

The design system is engineered to evoke the precision and forward-thinking aesthetic of a high-end AI startup. It prioritizes a futuristic, "interface-as-art" philosophy, blending technical rigor with cinematic atmosphere. The personality is confident, innovative, and meticulously polished.

The visual style is **Glassmorphism**, leveraging deep atmospheric layers. The interface relies on the interplay of light and shadow—specifically neon light refraction through semi-transparent surfaces—to create a sense of three-dimensional space within a digital environment. High-contrast typography cuts through the soft glows to ensure the developer's technical authority remains the focal point.

## Colors

The palette is anchored by a void-black background (#050505) to provide maximum contrast for neon accents. 

- **Primary Accent:** Neon Blue (#00d2ff) represents logic, clarity, and the "core" of the AI.
- **Secondary Accent:** Purple (#9d50bb) adds depth and a creative, sophisticated edge.
- **Gradients:** Use a linear 135-degree blend from Neon Blue to Purple for primary actions and highlights.
- **Neutrals:** White is reserved for high-contrast text, while various opacities of white (3% to 10%) define the glass surfaces.

Avoid solid gray backgrounds; use transparency and backdrop blurs to achieve depth instead.

## Typography

This design system utilizes a dual-font strategy to balance technical character with readability.

- **Headlines & Labels:** **Space Grotesk** is used for its geometric, futuristic terminals. High-impact headings should use tight letter spacing to feel "locked" and engineered.
- **Body & Content:** **Inter** provides a neutral, utilitarian foundation that ensures long-form descriptions of projects remain highly legible against dark, blurred backgrounds.
- **Labels:** Small labels use uppercase Space Grotesk with wide tracking (letter spacing) to mimic technical readouts found in high-end dashboards.

## Layout & Spacing

The design system employs a **Fixed Grid** model for desktop, centered within the viewport to maintain a sense of focus and exclusivity. 

- **Grid:** A 12-column grid with 24px gutters. Content blocks usually span 4, 6, or 12 columns.
- **Rhythm:** An 8px linear scale governs all padding and margins. 
- **Breathing Room:** Significant vertical spacing (stack-lg) between sections is required to prevent the glass elements from feeling cluttered. The "AI Startup" vibe depends on the luxury of whitespace.

## Elevation & Depth

Depth is not achieved through shadows, but through **refraction and layering**.

1.  **Background Layer:** Deep #050505 with subtle, large-scale radial blurs of blue and purple (20% opacity) floating in the distance.
2.  **Surface Layer (The Glass):** Cards use a background of `rgba(255, 255, 255, 0.03)` with a `backdrop-filter: blur(20px)`.
3.  **Edge Definition:** Each glass element must have a 1px solid border of `rgba(255, 255, 255, 0.1)`. This simulates the "catch-light" on the edge of a glass pane.
4.  **Active State Elevation:** When an element is focused or hovered, increase the border opacity to 0.3 and add a subtle outer glow (0px 0px 20px) using the primary neon blue at low opacity.

## Shapes

The design system uses **Rounded** geometry (0.5rem base) to soften the "tech" aesthetic, making it feel more approachable and modern. 

- **Cards & Containers:** Use `rounded-xl` (1.5rem) to create a soft, friendly silhouette for complex data or project previews.
- **Buttons:** Use `rounded-lg` (1rem) to differentiate interactive elements from structural cards.
- **Accents:** Use perfectly circular shapes for decorative glow blobs in the background.

## Components

### Buttons
- **Primary:** Gradient background (Blue to Purple), white text, no border. On hover, add a 10px spread glow of the same gradient.
- **Ghost:** 1px border `rgba(255, 255, 255, 0.2)`, transparent background. On hover, background becomes `rgba(255, 255, 255, 0.05)`.

### Cards (Project/Service)
- Semi-transparent glass background with `backdrop-filter: blur(20px)`.
- Internal padding of 32px.
- Use a "glow-header" effect: a subtle 2px tall gradient line at the very top of the card.

### Inputs & Text Fields
- Dark, recessed background (`rgba(0, 0, 0, 0.3)`).
- 1px border that illuminates into a Neon Blue gradient when focused.
- Placeholder text in `rgba(255, 255, 255, 0.4)`.

### Chips & Tags
- Small, pills with `rgba(0, 210, 255, 0.1)` background and Neon Blue text.
- No border, used for listing tech stacks or skills.

### Tech Indicator (Unique Component)
- A small animated pulse dot (Neon Blue) next to "Available for Work" or status labels to reinforce the "Live AI" feel.