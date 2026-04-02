# Design System Strategy: Tactical Precision

## 1. Overview & Creative North Star: "The Kinetic Console"
This design system moves away from the generic "SaaS Dark Mode" and toward a high-performance, tactical instrument. The Creative North Star is **The Kinetic Console**: an interface that feels like a pressurized, high-reliability tool found in aerospace or specialized field equipment.

We break the "template" look by leaning into **intentional asymmetry** and **tonal depth**. Instead of centering everything, we use a "weighted" layout—heavy on one side to anchor the eye, with high-impact data points floating in open space. We utilize the friction between the utilitarian `Inter` and the aggressive, wide-set `Space Grotesk` to create a hierarchy that feels both urgent and professional.

## 2. Colors: Tonal Layering
The palette is rooted in deep obsidian tones, using color not just for decoration, but as a functional "signal."

*   **Primary (`#c6c6c7`)**: A cold, industrial silver. Used for high-level interaction.
*   **Secondary (`#0abc56`)**: The "Action Green." Reserved strictly for success states and active tactical data.
*   **Tertiary/Error (`#ff716a`)**: The "Alert Red." Used to draw the eye to critical failures or destructive actions.

### The "No-Line" Rule
**Borders are a design failure.** To achieve a premium feel, prohibit 1px solid borders for sectioning. Boundaries must be defined solely through background color shifts. For example, a `surface-container-low` component should sit on a `surface` background to define its shape. If you feel the urge to draw a line, use a 12px gap from the **Spacing Scale** instead.

### Surface Hierarchy & Nesting
Treat the UI as a physical stack of hardware modules.
*   **Base:** `surface` (#070d1f) is your floor.
*   **Sections:** Use `surface-container-low` (#09122b) for large logical groupings.
*   **Interactive Cards:** Use `surface-container` (#0a1839) to "lift" actionable items.
*   **Pop-overs/Modals:** Use `surface-container-highest` (#0a2257) to represent the top-most layer of the stack.

### The "Glass & Gradient" Rule
To prevent the UI from feeling "flat," apply a `backdrop-blur` of 12px to floating elements (like navigation bars or tooltips) using a semi-transparent version of `surface-container`. Use a subtle linear gradient on primary CTAs—from `primary` to `primary_dim`—at a 45-degree angle to give buttons a machined, metallic finish.

## 3. Typography: Tactical Contrast
We employ a "Dual-Engine" typography system to balance readability with high-impact data visualization.

*   **The Data Engine (`Space Grotesk`)**: Used for all `display`, `headline`, and numeric data. Its monospaced-adjacent feel provides the "Tactical" look. 
    *   *Usage:* Large metrics in `display-lg` (3.5rem) should feel like a readout on a cockpit display.
*   **The Utility Engine (`Inter`)**: Used for `body`, `labels`, and `titles`. It is the workhorse that ensures complex utility instructions remain legible at small scales.
    *   *Usage:* Use `label-sm` (0.6875rem) in all-caps with 0.05em tracking for metadata to enhance the "instrument" aesthetic.

## 4. Elevation & Depth
In this system, light is the only indicator of depth.

*   **The Layering Principle:** Stacking is king. Place a `surface-container-lowest` card on a `surface-container-low` background. This creates a "recessed" look, suggesting the card is an integrated screen within a dashboard.
*   **Ambient Shadows:** For elements that must float (Modals, Toast notifications), use a shadow with a 32px blur, 0px offset, and 6% opacity. The shadow color should be `surface_bright` (#082768) to mimic a subtle blue-tinted glow rather than a muddy grey.
*   **The "Ghost Border" Fallback:** If accessibility requires a container edge, use `outline_variant` at 15% opacity. It should be felt, not seen.
*   **Glassmorphism:** Use `surface_variant` with 60% opacity and a `backdrop-filter: blur(10px)` for overlays. This allows the tactical data beneath to remain partially visible, maintaining the user's "situational awareness."

## 5. Components

### Buttons
*   **Primary:** Background `primary`, text `on_primary`. No border. High-impact caps.
*   **Secondary:** Background `secondary_container`, text `on_secondary_container`. Use for "Go/Confirm" actions.
*   **Tertiary:** Transparent background, `outline` ghost border (20% opacity).

### Input Fields
*   **Styling:** Use `surface_container_low` as the field background. No bottom line. Use a 2px left-accent bar in `primary` when the field is focused to indicate "Active" status.

### Cards & Lists
*   **No Dividers:** Forbid the use of `horizontal-rule` elements. Use a `1.5` (0.3rem) or `2` (0.4rem) spacing increment to separate list items. 
*   **Interactive State:** On hover, a list item should shift from `surface` to `surface_container_high`.

### Tactical Chips
*   Used for status filtering. High-contrast background (`secondary` for active) with `label-md` typography. Use the `sm` (0.125rem) roundedness for a sharper, more technical look.

## 6. Do's and Don'ts

### Do:
*   **Embrace Negative Space:** Use the `20` and `24` spacing tokens to let high-impact numbers breathe.
*   **Use Mono-spacing for Numbers:** Ensure `Space Grotesk` tabular num features are on so that data doesn't "jump" when values update.
*   **Color as Signal:** Only use `secondary` (Green) or `tertiary` (Red) when there is a change in status. If everything is colored, nothing is important.

### Don't:
*   **No Rounding Beyond `md`:** Avoid `full` or `xl` roundedness for functional elements. This is a utility tool, not a social media app. Keep edges sharp (`sm` or `md`).
*   **No Pure Black:** Never use `#000000` for backgrounds (unless it's `surface_container_lowest` for deep contrast). Use `surface` (#070d1f) to maintain the "Slate" depth.
*   **No Centered Text in Data Grids:** Numbers should always be right-aligned or left-aligned to a grid to allow for quick vertical scanning.