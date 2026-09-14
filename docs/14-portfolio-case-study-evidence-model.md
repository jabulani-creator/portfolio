# 14 — Case study evidence model (portfolio CMS v2 direction)

**Purpose:** Design case studies around **evidence of competence** — business problem → diagnosis → thinking → solution → impact — not “client → features → tech stack.”

**Status:** Implemented (Phases E–H) — builds on Phases A–D in `docs/12-case-study-data-strategy.md`  
**Reference case:** Emmasdale SDA Church (platform + operations; not “a church website”)  
**Companion:** `docs/13-case-study-cms-field-reference.md` (current fields)

---

## 1. What the buyer is really asking

Before they book a diagnostic, a business owner needs to believe:

| Question | Evidence type |
|----------|----------------|
| Do you understand businesses like mine? | Business context, industry language, operating model |
| Can you see what is actually wrong? | Problems (with impact), not buzzwords |
| Did you investigate or just build? | Investigation, sources, findings |
| Can you think in systems? | Strategy, problem→solution maps, workflows |
| Can you ship? | Implementation, demo media, tech (supporting) |
| Is it real? | Live URL, quotes, metrics (honest), scope limits |
| What changes for me? | Before/after, outcomes, closing bridge |

**Portfolio unit of sale:** not the project — the **business problem solved** (one client → several problems → several solutions → evidence).

---

## 2. Design principles (lock these)

1. **CMS richness ≠ public length** — store depth; the frontend tells a **curated story** (primary / secondary / supporting / internal).
2. **Features ≠ value** — every feature maps to a **before/after or problem→solution** line for public copy.
3. **One document type** — `caseStudy` with modular blocks; archetypes via `projectType[]` + `category`, not separate Sanity types.
4. **Keep the spine as editor shorthand** — `observation` … `outcome` remain the **narrative backbone** for writers; new structures **compose** the public page, not duplicate fifteen prose fields.
5. **Problems ≠ only “revenue leaks”** — universal `problems[]` with categories (operations, communication, trust, …); retain hospitality/diagnostic language where relevant.
6. **Problem→solution maps are the hero section** — the main public differentiator vs typical portfolios.
7. **Emmasdale is the template for platform/hybrid** — Nikwisa for marketplace/decide-act; future lodge/school/retailer uses same engine.

---

## 3. Current model → target model (mapping)

What you **already have** (implemented) maps forward like this:

| Shipped today | Role in evidence model | v2 evolution |
|---------------|------------------------|--------------|
| `clientLabel`, `contextSummary`, `contextStats[]` | **Client / business context** | + `businessContext` object (description, audiences, channels, goals) |
| `observation` | **Business context + problem framing** | Split optional; keep as summary for editors |
| `evidence` | **Investigation** | + `investigation` (approach, sources[], findings[]) |
| `revenueLeaks[]` | **Problems** | Rename/generalize → `problems[]` + `category`, `priority`; migrate leaks 1:1 |
| `decision` | **Strategy (partial)** | + `strategy` (thesis, principles, priorities) |
| `implementation` | **Solution + build** | + `solution` (components[], workflows[]) |
| `outcome`, `outcomeMetrics[]` | **Outcomes** | + typed `outcomes[]` (efficiency, trust, …) |
| `beforeAfter` | **Before → after** | Add optional `explanation` per row |
| `clientQuote` | **Testimonial** | + structured `testimonial` (person, role, permission) |
| `evidenceMedia[]` | **Gallery / proof** | Extend `media[]` with category (UI, workflow, hero, …) |
| `techStack[]`, `role` | **Technology + my role** | + `myRole` (responsibilities[], involvement) |
| `scopeNote`, `engagementType` | **Trust / status** | + `status` (live, ongoing, phased) |
| `problemSolutionMaps[]` | **Missing — priority add** | First-class repeatable object (see §5) |
| `keyDecisions[]` | **Missing** | Optional repeatable (title, context, decision, tradeoff) |
| `workflows[]` | **Missing** | Optional; high value for Emmasdale/Nikwisa |
| `evidence[]` | **Missing as layer** | Metrics, quotes, observations as typed records |
| Spine `01–05` + sticky nav | **Orientation** | Re-label sections on public page (see §7) |

**Do not delete the spine in v2.** Use it for seed scripts, migration, and writers who think in Observation→Outcome. Public UI **reorders and elevates** problem→solution maps.

---

## 4. Target CMS modules (universal)

Store all of this on **`caseStudy`** (optional blocks). Required for **publish** stays minimal (§9).

### 4.1 Identity (public header)

- `title`, `slug`, `clientLabel`, `clientLogo?`, `industry`, `location?`
- `projectType[]` (multi: Digital Platform, Business System, Marketplace, …)
- `category` (keep enum for filters; align with projectType)
- `oneLineThesis`, `excerpt`, `summary` (longer — can merge excerpt + thesis over time)
- `liveUrl`, `engagementDuration`, `engagementType`, `status`
- `featured`, `isPublished`, `confidential` (internal)

### 4.2 Business context

- `businessDescription`, `businessModel?`, `audiences[]`, `operatingContext?`
- `existingChannels[]`, `businessGoals[]`
- **`contextStats[]`** (already shipped) — “at a glance” band

### 4.3 Investigation

- `investigationApproach`, `investigationSources[]`, `investigationFindings[]`
- Maps from current **`evidence`** prose until migrated

### 4.4 Problems (`problems[]`)

Replace **`revenueLeaks[]`** over time (same shape + extensions):

| Field | Notes |
|-------|--------|
| `title`, `description` | |
| `category` | Revenue · Operations · Communication · CX · Trust · Admin · Technology · Growth · … |
| `evidence?` | How you know |
| `businessImpact` | Sales language |
| `priority?` | 1–3 or P0/P1 |
| `frictionQuote?` | Optional (hospitality) |

**Public:** show top **3 by priority** (`displayPriority` or sort).

### 4.5 Problem → solution maps (`problemSolutionMaps[]`) — **hero**

Each map (one row in CMS = one public story block):

| Field | Public |
|-------|--------|
| `title` | Section heading |
| `problemRef` or inline `problem` | Link to `problems[]` or embed title |
| `whyItMattered` | Yes |
| `decision` | Yes |
| `solution` | Yes — **business outcome language** |
| `implementation` | Yes — what was built (short) |
| `outcome` | Yes |
| `features[]?` | Supporting only (optional collapse) |
| `evidenceRef?` | Link to evidence record |
| `importance` | `primary` \| `secondary` \| `supporting` |

**Emmasdale examples:** No owned front door · Bulletin fatigue · Care in inboxes · Schedule collisions.

**Nikwisa examples:** Directory mental model · Data before content · Crawl trust · Awareness without action.

### 4.6 Strategy

- `strategicThesis` (e.g. “Make worship easy. Make administration easy.”)
- `approach`, `principles[]`, `priorities[]`, `tradeoffs[]?`
- Overlaps current **`decision`** — migrate narrative into here + keep `decision` as fallback

### 4.7 Solution (system built)

- `solutionDescription`, `components[]`, `workflows[]`, `userRoles[]`, `integrations[]?`
- **Not the page headline** — appears after maps + strategy

### 4.8 Key decisions (`decisions[]`)

- `title`, `context`, `decision`, `reasoning`, `tradeoff?`
- Public: 2–4 **secondary** items (WhatsApp vs checkout, editorial Hidden Gems, etc.)

### 4.9 Implementation (your work)

- `myWork`, `deliverables[]`, `constraints[]`, `architectureNotes?` (internal/supporting)
- Current **`implementation`** field

### 4.10 Outcomes (`outcomes[]`)

- `title`, `description`, `type` (efficiency, trust, conversion, …), `metric?`, `before?`, `after?`, `isTarget`
- **`outcomeMetrics[]`** remains shorthand; merge into `outcomes[]` later

### 4.11 Evidence (`evidenceRecords[]`)

Typed proof (separate from **`evidenceMedia`** images):

- `type`: metric · quote · observation · screenshot · analytics · demo
- `title`, `description`, `value?`, `source?`, `date?`, `media?`

### 4.12 Testimonial, media, technology, role

- **`testimonial`** object (extends quote fields)
- **`media[]`** — unify `heroImage` + `evidenceMedia[]` with `category`, `caption`, `alt`, `sectionAnchor?`
- **`techStack[]`**, **`myRole`** — footer of public page

### 4.13 Display metadata (per block)

On maps, problems, outcomes, evidence:

- `visibility`: `public` \| `private` \| `internal`
- `importance`: `primary` \| `secondary` \| `supporting`

Frontend defaults: render **primary** only above fold; **secondary** below; hide **internal**.

---

## 5. Public page template (generated story)

Order for **platform / hybrid** (Emmasdale-class):

1. **Hero** — title, project types, thesis, live link, meta (role, duration, location)
2. **At a glance** — `contextStats[]`
3. **The business** — business context (from observation + businessContext)
4. **Investigation** — how you knew (investigation + short evidence prose)
5. **Problems** — 3 headline problems (cards)
6. **From problems to solutions** — **`problemSolutionMaps[]` (primary)** — the main scroll
7. **Strategy** — thesis + principles (1 screen)
8. **The system** — components + 1–2 workflows (optional diagram/media)
9. **Key decisions** — collapsible or compact list
10. **Before & after** — table/cards
11. **Evidence & impact** — metrics + testimonial + evidence records
12. **Scope & limits** — `scopeNote`
13. **Technology & my role** — de-emphasized
14. **Closing bridge** + book diagnostic CTA

**Explore/product (Nikwisa-class):** same engine; emphasize decide→act maps, WhatsApp action, SEO/crawl evidence; lighter on “pastoral care” language.

**Diagnostic-only (future):** heavy investigation + problems; implementation = deliverables not code; maps may end at “recommended fix” without build outcome.

Sticky nav should anchor: **Business · Investigation · Problems · Solutions · Impact** (not only 01–05 spine labels).

---

## 6. CMS ≠ public page (rules)

| Store in CMS | Typical public use |
|--------------|-------------------|
| All problems | Top 3 by priority |
| All maps | Primary maps full; secondary collapsed |
| All decisions | 2–4 visible |
| Full investigation notes | Summary + sources list |
| Workflows (6+) | 1–2 diagrams |
| Technical architecture notes | Internal or footer link |
| `confidential`, draft metrics | Never |
| Features list | Only inside maps, never standalone hero |

**Editor workflow:** write spine first (fast) → add problems → **build maps from Emmasdale diagnostic sections** → mark importance → seed/publish.

---

## 7. Relationship to `docs/02` product scope

Product scope still requires case studies to state **what was built and what changed**. The evidence model ** satisfies that** via problem→solution **implementation + outcome** rows — not a separate “features” page.

Diagnostic offer proof on the portfolio: show **investigation + problems + maps** even when build is phased (scope note honest).

---

## 8. Implementation phases (recommended)

### Phase E — Story engine (highest ROI)

**Schema + UI**

- Add `problems[]` (migrate from `revenueLeaks` in GROQ normalize)
- Add `problemSolutionMaps[]`
- Add `strategicThesis` (+ optional `strategy` object)
- Public section **“From problems to solutions”** above old findings grid
- Rename public labels: “Revenue leaks” → **“Problems identified”** (category badge)

**Content**

- Re-seed Emmasdale + Nikwisa with 3–4 maps each (from existing seed + diagnostic)

### Phase F — Context & investigation

- `businessContext` object, `investigation` object
- Public “Investigation” band; sources as tags
- Optional `workflows[]` (title + steps text)

### Phase G — Evidence layer & display rules

- `evidenceRecords[]`, structured `testimonial`
- `importance` / `visibility` on blocks
- Public template picks primary only; work card shows thesis + one outcome line

### Phase H — CMS UX (Sanity)

- Preview “public vs internal”
- Field groups matching §4 modules
- `projectType[]` multi-select

### Defer

- Full Portable Text everywhere
- Separate Sanity types per industry
- Nikwisa Score-style product fields as portfolio CMS

---

## 9. Minimum publish bar (v2)

**Any published case study**

- Identity + thesis + live URL or honest “private”
- Business context (stats or paragraph)
- ≥3 **problems** OR ≥2 **problem→solution maps**
- ≥1 **primary** map with full chain (problem → outcome)
- Scope note when work is phased
- Quote **or** evidence metric (with `isTarget` when projected)
- Hero image + alt

**Platform (Emmasdale-class)**

- ≥3 primary maps, before/after, workflow or component list, tech + role

---

## 10. Emmasdale → maps (starter content)

| Map title | Problem (short) | Outcome (short) |
|-----------|-----------------|-----------------|
| No owned front door | FB/WhatsApp fragmentation | One authoritative public source |
| Bulletin fatigue | PDF/posters lost | Weekly bulletin + archive + share |
| Care in inboxes | Untracked prayer/pastoral | Intake, privacy modes, queues |
| Schedule collisions | Parallel WhatsApp planning | Facility scheduling + approval (phased honesty) |

Use **feature bullets only inside** `implementation` on each map ( prayer modes, assignment, status — as means, not headline).

---

## 11. Decisions to confirm before Phase E code

| # | Decision | Recommendation |
|---|----------|----------------|
| 1 | Rename `revenueLeaks` in Sanity | Add `problems[]`; migrate reads; deprecate leaks label in UI |
| 2 | Keep spine fields | Yes — editor + seed compatibility |
| 3 | Maps required for publish? | ≥2 primary maps for platform; 1 for diagnostic |
| 4 | `projectType[]` vs `category` only | Both — category for filter; projectType for hero tags |
| 5 | Public nav | Shift to Business / Investigation / Problems / **Solutions** / Impact |
| 6 | Re-seed after E | Yes — extend `scripts/seed/case-studies/*.ts` |

---

## 12. What not to do

- Rebuild the case study page as a **feature grid** or tech-first template.
- Show all 12 problems from a diagnostic on the public site.
- Drop honesty (`scopeNote`, `engagementType`, projected metrics).
- Split into multiple Sanity document types per client vertical.
- Big-bang schema before Emmasdale page validates **problem→solution** section in browser.

---

*When Phase E is approved, implement schema + `ProblemSolutionSection` + migrate Emmasdale/Nikwisa seeds first.*

*Previous field reference: `docs/13-case-study-cms-field-reference.md` (Phases A–D).*
