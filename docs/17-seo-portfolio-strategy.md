# Portfolio SEO strategy (jabulani.digital)

Adapted from the [Nikwisa marketplace playbook](https://github.com/) — **same discipline, different objects**. Hubs and inventory tiers apply to Nikwisa; this site uses **intent tiers** and **proof URLs**.

## North star

**Build pages that deserve to rank** — useful without Google. For this site, content is **offer clarity, case proof, and workflow stories**, not keyword-stuffed landing forks.

## URL tiers

| Tier | Paths | Sitemap | Effort |
|------|--------|---------|--------|
| **A** | `/`, `/start-a-project`, `/digital-experience-diagnostic` | Yes, highest priority | CMS SEO defaults, FAQ schema on diagnostic, CTAs |
| **B** | `/case-studies`, `/case-studies/{slug}` | Yes if excerpt/SEO ≥ 40 chars | Hero alt, seoTitle/seoDescription, Article + breadcrumb schema |
| **C** | `/how-i-work`, `/about` | Yes, lower priority | Solid metadata |
| **D** | `/ongoing-care`, legacy redirects | **Not in sitemap** (still indexable if linked) | Maintain, don’t promote |

Implementation: [`src/lib/seo/portfolioTiers.ts`](../src/lib/seo/portfolioTiers.ts), [`src/app/sitemap.ts`](../src/app/sitemap.ts).

## Engineering checklist (portfolio)

### Phase 0 — Crawl hygiene
- Real **404** (`not-found.tsx`), not soft shells
- **`/admin`** and **`/projects/*`** disallowed in robots (legacy `/projects/*` → redirect or case study)
- **Self-canonical** on every indexable page ([`src/lib/seo.ts`](../src/lib/seo.ts))
- **Sitemap** = Tier A–C + worthy case studies only

### Phase 1 — Structured data
- Site-wide: `WebSite`, `Person`, `ProfessionalService` ([`SiteJsonLd`](../src/components/seo/SiteJsonLd.tsx))
- Diagnostic: `FAQPage` from CMS offer FAQ ([`FaqPageJsonLd`](../src/components/seo/FaqPageJsonLd.tsx))
- Case study: `Article` + `BreadcrumbList` ([`CaseStudyPageJsonLd`](../src/components/seo/CaseStudyPageJsonLd.tsx))

### Phase 2 — On-page
- One **H1** per page aligned with title intent
- **Title + meta description** from CMS where possible
- **Internal links**: nav, breadcrumbs on case study + diagnostic, CTAs to `/start-a-project`
- **Do not** create duplicate URLs for the same intent (e.g. extra “best web designer Lusaka” landings)

### Phase 3 — Off-site
- Google Business / LinkedIn → **https://jabulani.digital**
- Partners link to **home, diagnostic, or case studies**, not thin anchors
- Consistent NAP with Site Settings contact fields

## What we ignore (scanner noise)

- Meta **keywords** for ranking
- React/Vite on **`/admin`** (Studio)
- Indexing every possible URL
- Chasing Tier **D** “Discovered – not indexed” in GSC

## GSC watchlist

- Impressions on **/**, **/digital-experience-diagnostic**, **/start-a-project**
- Case study URLs in sitemap match indexed set
- Soft 404 count stays flat after deploys
- Rich results: FAQ (diagnostic), organization/person (home)

## Related docs

- Publishing: [`10-cms-publishing-checklist.md`](./10-cms-publishing-checklist.md)
- Deploy + `NEXT_PUBLIC_SITE_URL`: [`16-deploy-hetzner-portfolio.md`](./16-deploy-hetzner-portfolio.md)
- Nikwisa implementation detail: `nikwisa_v2/docs/SEO_OPPORTUNITY_MAP.md` (separate repo)
