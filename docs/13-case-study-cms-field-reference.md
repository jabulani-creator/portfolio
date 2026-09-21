# Case study — CMS field reference (v2)

Quick reference for **`caseStudy`** documents in `/admin`. Public template: `/case-studies/[slug]`.

## Studio tabs (3)

| Tab | What you edit |
|-----|----------------|
| **Overview** | Title, slug, excerpt, category, role, publish flags, SEO, page layout |
| **Story** | Hero image, hero subtitle, deliverables, challenge, platform columns, what I built, **problem stories**, before/after, approach |
| **Proof and deep dive** | Outcomes, proof media, tech stack, scope note, deliverable teaser, optional deep dive |

**Editorial rule:** Platform columns = main scroll index. **What I built** = product screenshots. **Problem stories** = workflow stories (band + optional home). Archive still reads structured `solution.*` on every public thread.

## Problem stories (`storyThreads[]`)

One row per workflow story (e.g. quarterly reports). Write once in Studio.

| Field | Use |
|-------|-----|
| `description` | Card hook — old friction in a few lines (do not paste the full narrative here) |
| `narrative` | Full story on the case study band (portfolio voice, roles, texture) |
| `buildChallenge` | Optional “while building” |
| `solution.outcome` | How it works **now** — one beat, not a repeat of `narrative` |
| `solution.decision` / `implementation` | Archive / Problem → solution section |
| `threadKey` | Globally unique slug (e.g. `emmasdale-quarterly-reports`) for `#problem-{threadKey}` anchors |
| `placement` | **Single control** — see below |
| `editorialMeta.visibility` | `private` or `internal` hides the thread **everywhere**, regardless of placement |
| `priority` | Sort order (1 = first) within case study; home strip uses the same order, max 4 cards |
| `cardEyebrow`, `cardImage` | Home catalog card (optional) |

### `placement` (one enum — no extra booleans)

| Value | Public surfaces |
|-------|-----------------|
| `archiveOnly` | Collapsed archive only (default) |
| `caseStudyMain` | Case study band **Problems I solved** |
| `caseStudyAndHome` | Case study band + home strip (curated; links to case study anchor) |

Phase 2 (not built yet): index page at `/on-the-ground` when enough stories exist.

Copy tone: **portfolio, conversational** (clerk, paper, conference) — not dev-log, not consultant-speak.

## Required to publish

| Field | Notes |
|-------|--------|
| Title, Slug, **Show on public website** | Publish in Studio after edits |
| Excerpt | Cards, SEO, hero context fallback |
| Category | diagnostic · build · strategy · software |

## Story (main page)

| Field | Public use |
|-------|------------|
| `heroImage` + alt | Full-bleed hero |
| `heroSubtitle` | Under title |
| `deliverables[]` | “Delivered” pills |
| `challenge` | Problem band (headline, signals) |
| `platformColumns[]` | Feature columns (any count) |
| `whatBuilt[]` | Main scroll product tour — title, body, optional caption, **screenshot per row**. **Live site reads only this field** (empty = section hidden). Match **story thread** titles (e.g. Prayer wall) for archive depth only. |
| `storyBeforeAfter` | Before/after band |
| `approach` | Method (optional — site uses static 5 steps if empty) |

## Proof

| Field | Public use |
|-------|------------|
| `outcomes[]` | type: metric · shift · highlight · quote |
| `proofMedia[]` | Archive gallery |
| `techStack`, `scopeNote`, `deliverableTeaser` | Footer / trust |
| `deepDive` | “Behind the build” — hide section if empty |

## Legacy v1 fields

Hidden in Studio under **Legacy (v1)**. Still read from the API until documents are patched with `scripts/migrate-case-study-v2.ts`. Do not author new content there.

## Scripts

```bash
npx tsx scripts/audit-case-study-visibility.ts
sanity dataset export <dataset> backup.tar.gz
npx tsx scripts/migrate-case-study-v2.ts --dry-run
npx tsx scripts/migrate-case-study-v2.ts --apply
```

`whatBuilt[]` backfill order during migrate: existing CMS rows → legacy v1 / `marketingPage.buildSections` → optional slug seeds in `scripts/case-study-migration-seeds.ts` (not used at runtime).
