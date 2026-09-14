# 08 Portfolio Studio Redesign Brief

**Project:** The Website Guy — Digital Experience Consultant Platform  
**Stage:** Design / UX trajectory (Rebuild Phase 10)  
**Document type:** Experience architecture, visual direction, and v1/v2 scope  
**Source documents:** `docs/01-Business_Diagnostic_OS.md` v3 (frozen), `docs/02-product-scope.md`, `docs/04-engineering-design.md`, `docs/07-rebuild-roadmap.md`  
**Status:** **Phase 10 v1 implemented in code** (September 2026). See `docs/09-studio-v2-backlog.md` for deferred work.

---

## Purpose

This document is the **governed brief** for the next wave of work: shift the site from a **consulting/service landing page** to a **personal digital studio / body of work**—work-first proof, immersive case studies, and the diagnostic as **methodology**, not a bolt-on funnel.

Implementation must follow `docs/05-ai-rules.md` and `docs/07-rebuild-roadmap.md` **Phase 10**. When code changes, update this doc’s acceptance checkboxes and `07` exit gates—not informal plans outside the repo.

---

## Document chain

| Doc | Role |
|---|---|
| `01` | Why — frozen strategy |
| `02` | What fits — scope veto (amended for Phase 10) |
| `03` | What it must do (amended NFRs for studio UX) |
| `04` | How it is shaped (amended visual/proof flags) |
| `05` | How to build safely in sessions |
| `06` | Mastery checklist (Phase 10 rows) |
| `07` | Phased execution — **Phase 10** is this brief |
| **`08` (this doc)** | **Studio redesign — experience + v1/v2 scope** |

---

## 0. Executive summary

Redesign from a **consulting landing page** to a **personal digital studio**: work-first, story-driven case studies, evidence visible—not services listed first.

**Do not copy** [Riccardo Zanutta](https://riccardozanutta.com/) literally (logo, colors, copy, layouts).

**Do copy** the **experience architecture**:

```text
Person → Selected work → Deep case studies → (Experiments) → About → Contact
```

**The Website Guy evolution** (beyond Riccardo):

```text
Business → Investigation → Findings → Strategy → Design/Build → Outcome
```

**Signature framework** (site-wide):

```text
Diagnose → Design → Build → Improve
```

The **Digital Experience Diagnostic** remains the **bookable entry product**—embedded as method step **Diagnose**, not removed. `/digital-experience-diagnostic` and `/start-here` stay in scope.

---

## 1. Strategic tension and resolution

| Pull | Portfolio exploration | Commercial v3 goal |
|---|---|---|
| Primary feel | Work is the website | Book scoped diagnostic; change first sales conversation |
| Risk | Beautiful archive, slow “yes” | Prospects need what / when / how much |

**Locked decision — hybrid homepage v1:**

- **Above the fold:** Studio identity + **Selected Work** (large visual cards).
- **Always visible:** Primary CTA **Book a Digital Experience Diagnostic** (header + mobile + footer).
- **Below the fold (shorter than Phase 3 story scroll):** **How I Think** + **What I Build** + compact diagnostic/methodology strip + contact/start.
- **Dedicated pages:** Full offer and intake unchanged in function.

---

## 2. Experience direction (consolidated)

### Core

- Work-first: *“Here is what I investigated and built.”*
- Case studies are the main proof surface—**large imagery**, editorial layout.
- **Business diagnostics** use distinct UI: Revenue Leak, Customer Journey, Friction Point, diagnostic scores where appropriate.
- **About:** problem-solving identity, not CV grid.
- **Start Here / contact:** *“Have a problem worth investigating?”* with intent paths (diagnostic, business problem, software, idea).

### Homepage flow (v1)

```text
HERO (identity + subtle interaction)
        ↓
SELECTED WORK (large visual blocks)
        ↓
HOW I THINK (Diagnose→Design→Build→Improve + customer-first ladder)
        ↓
WHAT I BUILD (capabilities, secondary — not a SERVICES wall)
        ↓
FEATURED DIAGNOSTIC OFFER (compact → full offer page)
        ↓
CONTACT / START CONVERSATION
```

**Deferred on homepage v1:** Experiments grid, category filters, full §28 split bands (Diagnostics / Builds as separate home sections → v1.5 optional).

### Navigation (v1)

Keep minimal. Prefer labels that map to existing routes:

- **Work** → `/case-studies`
- **Diagnostic** → `/digital-experience-diagnostic`
- **About** → `/about`
- **Start Here** → `/start-here` (contact/conversion)

`/how-i-work` may remain as alias or fold into home/About copy. `/ongoing-care` linked as **Improve** in methodology and footer.

### Work categories (CMS)

`diagnostic` · `build` · `strategy` · `software` — experiments category **v2**.

### Case study page (v1 template)

1. Project hero (visual, title, thesis, Role · Context · Period)  
2. The business  
3. The problem (+ journey friction)  
4. Investigation  
5. Key findings (Revenue Leak cards for diagnostics)  
6. Strategy  
7. Design / build  
8. Outcome (label **targets** vs actuals)  
9. Previous / next project  

Map existing narrative fields (`observation` … `outcome`) to this presentation; extend CMS per §6.

### Design rule

> Don't design a site that tells people you are good. Design a site that lets people **see the evidence**.

### What NOT to do

- Literal Riccardo clone  
- Remove bookable diagnostic or hide price/turnaround on offer page  
- Skills grid / tech logo wall as primary proof  
- v1: filters, experiments module, full block CMS, heavy motion  
- Fake results without “target” labels  

---

## 3. v1 vs v2 scope

### v1 — Launch studio + book diagnostic

- Design system (type, color, section variants, CTA)  
- Hybrid homepage (§2)  
- Work index: large image-forward cards  
- Case study template + diagnostic components (minimum on Kwisoko)  
- Offer, Start Here, About, footer restyled; CTA site-wide  
- Sanity: `category`, `featured`, `heroImage`, `role`, `context`, `period`, `oneLineThesis` on case studies  
- 3–4 case studies with real visuals  
- Performance: agree mobile LCP budget (e.g. &lt; 2.5s)

### v2 — After first paid diagnostics

- Experiments section + schema  
- Work filters (All / Diagnostics / Websites / Software / Strategy)  
- Modular case-study block builder  
- Thinking / articles  
- Richer motion; optional dark mode  

---

## 4. CMS direction

**v1 fields:** see §3 on `caseStudy`.

**v1.5 blocks (array):** `text`, `image`, `quote`, `revenueLeak`, `customerJourney`, `stat`, `beforeAfter` — after fixed template ships.

---

## 5. Acceptance criteria (v1)

- [x] Homepage reads as **studio + work** within 5 seconds—not generic agency  
- [x] At least one **diagnostic** case study uses distinct visual components  
- [x] **Book diagnostic** reachable in one click from any page  
- [x] Offer page answers what / when / how much without a call  
- [x] Case study detail is editorial and mobile-readable  
- [x] Prev/next project navigation works  
- [x] Acceptable mobile performance under throttled network (bounded JS; optimized images when provided)  
- [x] Evidence sells; capability list is secondary  

---

## 6. Implementation map (code)

| Area | Typical paths |
|---|---|
| Tokens / globals | `tailwind.config.ts`, `src/app/globals.css` |
| Shell | `src/components/layout/SiteHeader.tsx`, `SiteFooter.tsx`, `PrimaryCta.tsx` |
| Home | `src/components/home/*`, `src/app/(site)/page.tsx` |
| Work | `src/components/case-studies/*`, case study routes |
| Content | `sanity/schemas/case-study-schema.ts`, `src/lib/content/queries/caseStudies.ts` |
| Commercial | `diagnostic-offer/*`, `start-here/*`, offer routes |
| SEO | `src/lib/seo.ts` — OG from hero images; Zambia keyword set in defaults |

Do not move publish rules into components—queries own `isPublished`.

---

## 7. Reference

Experience reference: [riccardozanutta.com](https://riccardozanutta.com/) — philosophy only. Attach founder screenshots (home, Cerasa case study, works overlay) when briefing a designer.

---

## 8. Decision log

| Decision | Choice |
|---|---|
| Homepage model | **Hybrid** — work-first + persistent diagnostic CTA |
| Phase 3 story scroll | **Replaced for Phase 10** — was correct for v3 launch; not the long-term studio IA |
| Mother doc `01` | **Frozen** — methodology framing extends public copy only |
| Nav label | **Work** vs “Case Studies” — finalize at implementation |

---

## Appendix A — Founder brief §1–35 traceability

| § | Topic | Release |
|---|---|---|
| 1–4 | Studio direction, no literal clone, TWG differentiator | v1 |
| 5 | Work categories | v1 enum; experiments v2 |
| 6–14 | Home, hero interaction, nav, selected work, visuals, case structure, diagnostic UI, What I Build, How I Think | v1 (hero interaction light) |
| 15 | Experiments section | v2 |
| 16–17 | About, contact framing | v1 |
| 18 | Footer | v1 shell |
| 19–23 | Visual style, type, color, motion, prev/next | v1 |
| 24 | Filtering | v2 |
| 25–26 | Body of work, TWG arc | v1 |
| 27 | Full site tree | partial v1 |
| 28 | Long homepage bands | **Compressed to hybrid** for v1; split bands v1.5+ |
| 29 | Block CMS | v1.5 |
| 30 | 20+ / 50+ scale | v2 |
| 31–32 | Mobile, performance | v1 |
| 33 | SEO + OG | v1 verify |
| 34–35 | Evidence rule, creative direction | v1 |
| + | Diagnose→Design→Build→Improve | v1 |

---

## Appendix B — Amendment register (other docs)

When this trajectory was adopted, these docs were updated to match:

| Doc | Change |
|---|---|
| `02` | Approved **Portfolio Studio (Phase 10)** increment; visual intent; proof surface |
| `03` | NFRs for work-forward proof and selective rich media |
| `04` | Architecture flags: allow image-forward **evidence** cards; perf-bounded interaction |
| `07` | **Phase 10** added; document chain includes `08` |
| `05` | Phase 10 governed by `08` |
| `06` | Phase 10 checklist rows |

`01` unchanged unless client evidence forces v4.

---

*The Website Guy · Phase 10 trajectory · September 2026*
