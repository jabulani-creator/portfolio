# 12 — Case study data strategy (CMS)

**Purpose:** Decide what every case study document in Sanity must carry so past and future projects (diagnostic, build, hybrid platform) tell one consistent sales story — without admin jargon on the public site.

**Status:** Phases A–D + **E–H (evidence model)** implemented in code; see `docs/14-portfolio-case-study-evidence-model.md`  
**Related:** `types/CaseStudy.ts`, `sanity/schemas/case-study-schema.ts`, `docs/02-product-scope.md`, `docs/10-cms-publishing-checklist.md`

---

## 1. What you are optimizing for

A prospect should leave a case study with four beliefs:

1. **Real engagement** — specific client, verifiable where possible.  
2. **Real process** — investigation before conclusions (not a template skim).  
3. **Real pain** — operational or revenue cost, not vague “UX issues.”  
4. **Low risk** — findings before build; projected vs measured numbers labeled honestly.

The **narrative spine stays** (aligned with product scope):

`Observation → Evidence → Decision → Implementation → Outcome`

Everything new in the CMS should **support that spine or the header/trust layer** — not replace it with a second parallel story.

---

## 2. Project archetypes (one document type, three modes)

Use **one** Sanity type: `caseStudy`. Differentiate with `category` + which optional blocks you fill.

| Archetype | `category` value (proposed) | Primary buyer question | Emphasize on page |
|-----------|----------------------------|------------------------|-------------------|
| **Diagnostic** | `diagnostic` | “Will you actually investigate my business?” | `revenueLeaks`, investigation media, engagement duration, live site link |
| **Build** | `build` | “Can you ship the fix?” | `techStack`, UI gallery, live URL, before/after |
| **Hybrid / platform** | `software` (keep slug) or rename later to `platform` | “Can you handle complex ops + product?” | architecture visual, workflow screenshots, multi-metric outcomes |
| **Strategy-only** | `strategy` | “Do you think in business terms?” | findings + decision; lighter implementation |

**Do not** split into separate Sanity document types per archetype until you have 10+ studies and editors complain — one type with optional sections scales better.

---

## 3. Current model (baseline)

Already in CMS + frontend:

**Identity:** `title`, `slug`, `isPublished`, `featured`, `category`, `oneLineThesis`, `role`, `context`, `period`, `projectTags`, `clientLabel`, `contextSummary`, `excerpt`

**Spine:** `observation`, `evidence`, `decision`, `implementation`, `outcome`

**Diagnostic proof:** `customerJourney`, `revenueLeaks[]` (title, description, frictionQuote, businessImpact, recommendedFix)

**Trust:** `outcomeHighlight`, `outcomeMetric` (single object), `clientQuote`, `clientQuoteAttribution`

**Media / SEO:** `heroImage` (+ alt in Sanity, **not** fetched in GROQ today), `seoTitle`, `seoDescription`, `publishedAt`

**Frontend behavior:** Detail page injects journey after observation, findings after evidence, optional quote + single metric block, prev/next, CTA. Work index uses cards from thesis, excerpt, highlight, tags, hero.

---

## 4. Gaps (from review + Emmasdale depth)

| Gap | Sales job | Recommended CMS response |
|-----|-----------|---------------------------|
| No visual proof of problem/solution | “Show me you looked” | `evidenceMedia[]` (see §5) |
| No live site / product link | Verifiability | `liveUrl` (optional) |
| Diagnostic duration not on page | Backs “~1 week” offer | `engagementDuration` (string, e.g. “5 working days”) |
| `role` / `clientLabel` underused in UI | Credibility | Surface in header meta (frontend), not new fields |
| Single `outcomeMetric` | Multiple wins (ops + engagement) | `outcomeMetrics[]` (array); deprecate single object with migration |
| No “scope limits” | Trust via candor | `scopeNote` (short text, optional) |
| No engagement type label | Real vs illustrative | `engagementType` enum: `client` · `anonymized` · `composite` |
| Plain text only | Longer Emmasdale-style docs | **Defer** Portable Text to v2; use structured blocks first |
| Stakeholder quote weak | Social proof | Editorial rule: name + role in `clientQuoteAttribution` |
| No business context numbers | Forensic feel | `contextStats[]` optional ({ label, value }) — e.g. followers, weekly attendance |
| Build projects | Dev credibility | `techStack[]`, `mediaGallery[]` |
| PDF / deliverable teaser | Tangible deliverable | `deliverableTeaser` object (label + file or external URL) — one per study max |

**Not in codebase (likely screenshot confusion):** floating “N” on mobile is the sticky book CTA / dev chrome, not case study PDF controls. Narrative sections use `01`–`05` mono indices only — no PDF icons in case study components today.

---

## 5. Target field groups (recommended)

### A. Keep unchanged (required for any published study)

- `title`, `slug`, `isPublished`, `excerpt` (or `oneLineThesis` as minimum hook)
- Full spine: all five narrative fields for **hybrid/build**; diagnostic may omit heavy `implementation` if no build yet — but product scope says state what changed; use outcome for “deliverables delivered” when no code shipped

### B. Header & trust (add / extend)

| Field | Type | Notes |
|-------|------|--------|
| `liveUrl` | url | “View site” in header; optional |
| `engagementDuration` | string | Shown near `period`; e.g. “Diagnostic: 6 days” |
| `engagementType` | enum | `client` \| `anonymized` \| `composite` — one line under title when not `client` |
| `contextStats` | array `{ label, value }` | 2–4 bullets max in observation band |
| `techStack` | array of string | Tags on build/platform studies |
| `scopeNote` | text | “What this engagement did not include” (optional) |

### C. Investigation & proof media (new)

Prefer **structured blocks** over one big gallery blob:

```text
evidenceMedia[] {
  image (required)
  alt (required)
  caption (optional)
  sectionAnchor: observation | evidence | decision | implementation | outcome
  kind: screenshot | diagram | photo | redacted_report
}
```

- Renders **after** the narrative section matching `sectionAnchor` (default `evidence`).  
- Annotated screenshots = caption text + image; no custom hotspot editor in v1.

Optional later:

- `architectureDiagram` (single image) — shortcut for platform cases if you don’t want it in the array.

### D. Outcomes & quotes (extend)

| Field | Type | Notes |
|-------|------|--------|
| `outcomeMetrics[]` | `{ label, value, isTarget }` | Replace single `outcomeMetric`; UI already supports array in `ProjectedImpactPanel` |
| `beforeAfter` | optional object | `{ beforeSummary, afterSummary }` or array of `{ label, before, after }` for card-style compare — **Phase B** |
| `clientQuote`, `clientQuoteAttribution` | keep | Style guide: “Firstname S., Role — Organization” |

### E. Deliverable teaser (optional, one)

```text
deliverableTeaser {
  label          // e.g. "Sample finding (PDF)"
  file | url      // Sanity file asset or external link
  description    // one line
}
```

Public copy: “Download excerpt” — not “admin upload.”

### F. SEO & a11y (fix, not strategy)

- GROQ: fetch `heroImage` URL **and** `alt`.  
- Gallery items: require `alt` in validation.

---

## 6. What we are **not** adopting (from generic templates)

- **Renaming categories** to `software_build` / `hybrid_platform` without a migration plan — keep current four values; add display labels only.  
- **`beforeState` array duplicating `revenueLeaks`** — merge into findings or use `contextStats` + prose in `observation`.  
- **`deliverablePdfUrl` on every document** — use optional `deliverableTeaser`; diagnostics only.  
- **Full Portable Text in v1** — increases layout complexity; add in v2 if bullet-heavy cases become common.  
- **Mandatory architecture diagram** — optional via `evidenceMedia` or single diagram field.  
- **Executive summary as separate required field** — `oneLineThesis` + `outcomeHighlight` + first metric cover this.

---

## 7. Page template (public) — target order

1. **Header** — category, title, thesis, meta row (`role` · `context` · `period` · `engagementDuration`), optional `liveUrl`, hero image  
2. **Optional context stats** — under observation or in header  
3. **Spine sections 01–05** — existing labels; inject journey + findings as today  
4. **Evidence media** — per section anchors (especially evidence + implementation)  
5. **Scope note** — small callout before outcome or after findings  
6. **Quote**  
7. **Outcome metrics panel** — multiple metrics, projected/measured  
8. **Deliverable teaser** — if set  
9. **Bridge line** (could be CMS `closingBridge` string in Phase B) — “If your … looks like this …”  
10. **Prev/next + book diagnostic CTA**

**Phase B UI:** sticky section tracker (01–05) on long pages.

---

## 8. Editorial rules (same for all projects)

Write in **client industry language** (ranch, church ops, hospitality) not generic UX jargon in headings.

Every published study must declare:

- **Engagement type** if not a fully named client.  
- **Metric honesty** — `isTarget: true` for projections and estimates; never imply measured results.  
- **At least one verifiable anchor** when possible: `liveUrl`, named quote, or dated `period`.  
- **Process hint in evidence** — who you talked to, what you reviewed, what you benchmarked (prose in `evidence` until `investigationSteps[]` is needed).

Pull **risk reversal** to a visible callout (reuse `scopeNote` or short `decision` pull-quote): findings approved before build scope.

---

## 9. Phased implementation

### Phase A — Trust + verification (small schema + UI) ✅ Shipped

- `liveUrl`, `engagementDuration`, `engagementType`  
- GROQ hero `alt`  
- Header UI: role, clientLabel, links, duration  
- `outcomeMetrics[]` with backward-compatible read of legacy `outcomeMetric`

### Phase B — Proof media ✅ Shipped

- `evidenceMedia[]` + section renderer  
- `contextStats[]`  
- `scopeNote`  
- Optional `deliverableTeaser`

### Phase C — Build / platform depth ✅ Shipped

- `techStack[]`  
- `beforeAfter` compare block  
- Sticky 01–05 nav (desktop, 3+ sections)  
- `closingBridge`

### Phase D — Content model v2 ✅ Shipped (structured)

- **`contentBlocks[]`** — callout · pull quote, placed before scope / quote / end  
- Portable Text deferred until structured fields are limiting

---

## 10. Migration checklist

1. Update Sanity schema + `types/CaseStudy.ts` + GROQ projection.  
2. Map existing `outcomeMetric` → `outcomeMetrics[0]` in query layer.  
3. Re-enter Kwisoko: live URL, duration, quote attribution, 2–3 context stats, 1–2 evidence screenshots.  
4. Emmasdale: platform category, tech stack, metrics array (ops + engagement), architecture screenshot in evidence media.  
5. Update `docs/10-cms-publishing-checklist.md` with required vs optional per archetype.  
6. Refresh `getDefaultCaseStudies()` only as last-resort fallbacks — **published Sanity docs are source of truth**.

---

## 11. Decisions to confirm (you)

| # | Question | Recommendation |
|---|----------|----------------|
| 1 | One metric vs many? | **Many** (`outcomeMetrics[]`) |
| 2 | Rich text in 2026? | **No** — structured fields first |
| 3 | Rename `software` category to `platform`? | **Later** — display label “Software / Platform” now |
| 4 | Require `liveUrl` for all client engagements? | **Strongly encouraged**, not required |
| 5 | Show `engagementType: composite` on site? | **Yes**, one subtle line — protects trust |
| 6 | PDF excerpts public? | **Opt-in per study** via `deliverableTeaser` |

---

## 12. Minimum viable case study (launch bar)

**Diagnostic (Kwisoko-class):**

- Title, slug, category, thesis, period, engagement duration  
- All five spine fields (implementation = deliverables + walkthrough if no code)  
- ≥3 `revenueLeaks`, `customerJourney`  
- ≥1 `evidenceMedia` or honest “screenshots withheld” note in evidence prose  
- `liveUrl` if client agrees  
- Quote with name/role  
- ≥1 `outcomeMetrics` entry with correct `isTarget`  
- `engagementType: client`

**Build / platform:**

- Above + `techStack`, ≥3 UI screenshots on implementation, `liveUrl` when live

---

*Phases A–D shipped. Field cheat sheet: `docs/13-case-study-cms-field-reference.md`.*
