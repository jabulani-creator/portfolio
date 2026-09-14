# Case study — CMS field reference

Quick reference for **`caseStudy`** documents in `/admin`. Public template: `/case-studies/[slug]`.

## Required to publish

| Field | Notes |
|-------|--------|
| Title, Slug, **Published** ✓ | |
| Excerpt or one-line thesis | Card + header |
| Observation → Outcome (spine) | Five narrative fields |
| Category | diagnostic · build · strategy · software |

## Trust (Phase A)

| Field | Public use |
|-------|------------|
| `liveUrl` | “View live site ↗” in header |
| `engagementDuration` | Meta row + work cards |
| `engagementType` | Privacy/composite line when not `client` |
| `outcomeMetrics[]` | Evidence & impact (legacy single metric still works) |
| Hero image **alt** | Accessibility |

## Proof (Phase B)

| Field | Public use |
|-------|------------|
| `contextStats[]` | “At a glance” after The business |
| `evidenceMedia[]` | Images after chosen spine section |
| `scopeNote` | Scope & limits callout |
| `deliverableTeaser` | Download excerpt CTA |

## Depth (Phase C)

| Field | Public use |
|-------|------------|
| `techStack[]` | Footer “Technology & role” (with `role`) |
| `beforeAfter` | Comparison block |
| `closingBridge` | Reader tie-in before project nav |
| Sticky nav | Business · Investigation · Problems · Solutions · Impact |

## Extra blocks (Phase D)

| Field | Public use |
|-------|------------|
| `contentBlocks[]` | Callout or pull quote before **scope**, **quote**, or **end** |

## Story engine (Phase E)

| Field | Public use |
|-------|------------|
| `projectType[]` | Hero tags (Digital Platform, Marketplace, …) |
| `strategicThesis` | Strategy headline (falls back to Decision spine) |
| `problems[]` | Top 3 by priority — “Problems identified” |
| `problemSolutionMaps[]` | Primary maps — “From problems to solutions” |
| `revenueLeaks[]` | Legacy; migrated to problems at read time if `problems[]` empty |

## Context & investigation (Phase F)

| Field | Public use |
|-------|------------|
| `businessContext` | `businessDescription` (+ optional audiences, channels, goals); fallback Observation |
| `investigation` | Sources tags + findings list; merged with Evidence spine |
| `workflows[]` | Up to 2 workflow diagrams after Design / build |

## Evidence layer (Phase G)

| Field | Public use |
|-------|------------|
| `evidenceRecords[]` | Typed proof in Evidence & impact (respects `visibility`) |
| `testimonial` | Structured quote (falls back to `clientQuote`) |
| `importance` / `visibility` | On problems, maps, evidence — primary shown first |

## Editor UX (Phase H)

Sanity field **groups**: Identity, Business context, Investigation, Narrative spine, Problems, Problem→solution maps, Strategy, Outcomes & evidence, Media, Publishing & SEO.

## Editorial (always)

- Prefer **`problems[]` + maps** over legacy leaks-only stories  
- `customerJourney` — optional strip after business context  
- Mark metrics **projected** when not measured  

Full strategy: `docs/12-case-study-data-strategy.md`. **Evidence model:** `docs/14-portfolio-case-study-evidence-model.md`.
