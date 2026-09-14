# 11 UI Direction — Premium Monochrome

**Status:** Applied in code (Phase 10 visual refresh)  
**Inspiration:** Off-white / near-black mockups with monospace accents — **not** a pixel clone.

## Principles

- **Palette:** `#f0f0eb` background, `#0a0a0a` text, `#d4d4ce` borders. No teal/orange crutch.
- **Type:** DM Sans body; JetBrains Mono for `~/`, `[ 01 ]`, terminal, footer `//`, metrics labels.
- **Buttons:** Compact **pills** — solid black primary, outline secondary, white on dark bands.
- **Evidence UI:** Findings in cards with **honest labels** — “Projected impact / modeled from journey audit,” never “Solved” without measured data.
- **Hero:** Terminal panel = one bold developer moment (`diagnostic.sh`).
- **Methodology:** `[ 01 ] Diagnose` … `[ 04 ] Improve` in bordered cards.
- **Footer:** Single quiet line: `// Built by a developer, for businesses that want to convert.`

## Apply everywhere

New pages/components should use: `studio-card`, `pill-btn`, `pill-btn-outline`, `studio-eyebrow`, `mono-index`, `section-rule` — see `src/app/globals.css`.

## Pricing & metrics

- **Currency:** Offer `priceLabel` in Sanity (defaults: **K12,000 – K18,000**). Do not show USD unless set in CMS.
- **Metrics:** `outcomeMetric.isTarget` → always “Projected” in UI.

---

*The Website Guy · September 2026*
