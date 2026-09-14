# CMS publishing — replace defaults on the live site

Until documents are **Published** in Sanity (`/admin`), the public site uses fallbacks from `src/lib/content/defaults.ts`.

## Publish these for production truth

1. **Site Settings** — set **Published** ✓  
   - Nav, headline, CTA, contact, `localTrustLine`, `operatingSince`, footer, SEO

2. **Offer** (slug `digital-experience-diagnostic`) — **Published** ✓  
   - `priceLabel`, `priceNote`, summary, deliverables, **FAQ**

3. **Case Studies** — Emmasdale & Nikwisa (seed or hand-enter) — **Published** when ready  
   - Hero image + **alt text**, `featured`, category, narrative fields, `revenueLeaks` / findings where relevant  
   - **Phase A trust fields:** `liveUrl`, `engagementDuration`, `engagementType`, **`outcomeMetrics`** (list; legacy single metric still works)  
   - **Phase B proof fields:** `contextStats`, `scopeNote`, **`evidenceMedia`** (per section), optional **`deliverableTeaser`** (PDF/URL excerpt)  
   - **Phase C depth:** **`techStack`**, **`beforeAfter`**, **`closingBridge`** (UI screenshots still via evidence media on Implementation)  
   - **Phase D extras:** **`contentBlocks`** (callouts / pull quotes)

## Seeding case studies

Full setup (new project, env, CORS): **`docs/11-sanity-fresh-start.md`**

```bash
# .env.local: NEXT_PUBLIC_SANITY_PROJECT_ID + SANITY_API_TOKEN (Editor)
npm run seed:sanity
```

- Script: `scripts/seed-sanity.ts`  
- Emmasdale payload: `scripts/seed/case-studies/emmasdale.ts`  
- Default **`isPublished: false`** — review in Studio, add images, then Publish.  
- `SEED_PUBLISH=true` only when you want docs live immediately.

Second project: **`scripts/seed/case-studies/nikwisa.ts`** (and Emmasdale). Run `npm run seed:sanity` — no Kwisoko fallback in code.

4. **Founder Profile** — **Published** ✓  
   - `founderName`, **portrait** upload, advantages, credibility copy

Adjust **price range** in Offer when you confirm real pricing — defaults use **K12,000 – K18,000** as a visible range until you change it.

---

*The Website Guy · September 2026*
