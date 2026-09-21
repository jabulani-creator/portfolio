# CMS publishing — replace defaults on the live site

Until documents are **Published** in Sanity (`/admin`), the public site uses fallbacks from `src/lib/content/defaults.ts`.

## Publish these for production truth

1. **Site Settings** — set **Published** ✓  
   - Nav, headline, CTA, contact, `localTrustLine`, `operatingSince`, footer, SEO

2. **Offer** (slug `digital-experience-diagnostic`) — **Published** ✓  
   - `priceLabel`, `priceNote`, summary, deliverables, **FAQ**

3. **Case Studies** — use **Overview / Story / Proof** tabs (see `docs/13-case-study-cms-field-reference.md`)  
   - **Show on public website** + Studio **Publish**  
   - Story: hero, challenge, **platform columns**, what I built  
   - Proof: **outcomes[]**, optional **deep dive**  
   - Migrate v1 docs: `npx tsx scripts/migrate-case-study-v2.ts --dry-run` then `--apply` after `sanity dataset export`

## Seeding case studies

Full setup (new project, env, CORS): **`docs/11-sanity-fresh-start.md`**

```bash
# .env.local: NEXT_PUBLIC_SANITY_PROJECT_ID + SANITY_API_TOKEN (Editor)
npm run seed:sanity
```

- Script: `scripts/seed-sanity.ts`  
- Emmasdale payload: `scripts/seed/case-studies/emmasdale.ts` + v2 marketing copy in `emmasdale-v2-marketing.ts` (platform columns, what I built text, **4 problem stories**, outcomes).  
- After seed, add manually in Studio: **hero**, **What I built screenshots**, optional **problem story card images**, **proof media**, SEO, quote name.  
- Default **`isPublished: false`** — review in Studio, then Publish.  
- `SEED_PUBLISH=true` only when you want docs live immediately.

Second project: **`scripts/seed/case-studies/nikwisa.ts`** (and Emmasdale). Run `npm run seed:sanity` — no Kwisoko fallback in code.

4. **Founder Profile** — **Published** ✓  
   - `founderName`, **portrait** upload, advantages, credibility copy

Adjust **price range** in Offer when you confirm real pricing — defaults use **K12,000 – K18,000** as a visible range until you change it.

---

*The Website Guy · September 2026*
