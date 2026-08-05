# Design System

## Concept Direction
- Discovered, not browsed.
- Archival institution: ceremonial enough to feel cinematic, structured enough to stay usable.
- Ancient memory meets future intelligence.
- Mysterious but understandable.
- Dark, luminous, editorial, and original.

## Visual Constraints
- Avoid generic SaaS card-grid aesthetics.
- Avoid cyberpunk cliches and random glow stacking.
- Avoid galaxy wallpaper backgrounds.
- Avoid glass-heavy translucency and low-contrast mystical text.

## Implementation Tokens
All values live in `app/globals.css` and are consumed via semantic variables.

### Palette
- `--color-bg`: primary deep backdrop.
- `--color-bg-elevated`: elevated background blend for shell elements.
- `--color-surface`, `--color-panel`, `--color-panel-soft`: layered surfaces.
- `--color-text`: primary foreground.
- `--color-muted`, `--color-muted-strong`: supporting text hierarchy.
- `--color-border`: structural strokes and separators.
- `--color-focus`: keyboard focus and active accent anchor.
- `--color-accent`, `--color-accent-warm`: chamber accents.

### Typography
- Display: `Cormorant Garamond` via `--font-display`.
- Body/UI: `Manrope` via `--font-body`.
- Eyebrow format: uppercase, extended letter-spacing (`.editorial-eyebrow`).
- Heading style: editorial scale with compact leading.

### Spacing
- Rhythm tokens: `--space-1` through `--space-6`.
- Major section cadence: `.section-rule` with top border and consistent top padding.

### Container Rules
- Shared container class: `.container-shell`.
- Max width: `--container-max` (`74rem`) with responsive side padding.

### Surfaces and Borders
- Major shell plates: `.surface-plate`.
- Secondary utility panels: `.surface-panel`.
- Chamber framing overlay: `.chamber-frame`.
- Border language: cool slate with subtle accent mixing, never pure white strokes.

### Motion
- Timing tokens: `--motion-fast`, `--motion-base`, `--motion-slow`.
- Easing token: `--motion-ease`.
- Intro animation: `.animate-rise`.
- Hover response: `.focus-ring` lift and border shift.
- Reduced motion: `prefers-reduced-motion` forces near-zero duration and disables hover lift transform.

## Portal Identity System
- Shared card class: `.portal-tint`.
- Per-portal tint overlays via `data-portal` attributes:
	- archive: warm manuscript brass.
	- laboratory: tempered cyan.
	- observatory: cool slate-blue.
	- resonance: warm harmonic brass.
	- gallery: cyan-slate blend.
	- oracle: sealed indigo.

## Media Treatment
- Generated motif overlays use `.media-motif` with `public/media/inscription-grid.svg`.
- Media remains atmospheric and structural, not illustrative clutter.

## Icon Treatment
- Symbol marks stay lightweight and integrated with textual labels.
- Header mark uses a contained sigil circle for recognition without logo lockup dependency.

## Core Reusable Components
- `SiteHeader`
- `MobileNav`
- `SiteFooter`
- `PortalGrid`
- `StatusMarker`
- `SectionHeading`
- `PortalPage`
- `LaboratoryConsole`
- `GalleryViewer`
- `ResonanceStatePanel`
