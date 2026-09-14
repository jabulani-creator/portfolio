# 04 Engineering Design Doc

**Project:** The Website Guy — Digital Experience Consultant Platform  
**Stage:** Architecture  
**Document type:** Engineering Design / Architecture Source of Truth  
**Source documents:** `docs/01-Business_Diagnostic_OS.md` v3 (frozen), `docs/02-product-scope.md`, `docs/03-srs.md`  
**Status:** v3 release architecture plus retainer increment (shipped) and **Phase 10 Portfolio Studio** trajectory in `docs/08-portfolio-studio-redesign-brief.md`

---

## 0. Purpose

This document defines **how the system is shaped**: system boundaries, module ownership, data flow, content contracts, source-of-truth rules, business rules, and page-to-data needs.

This is the implementation control document. If a future AI session proposes a new folder, schema, query, route, or workflow that conflicts with this document, this document wins unless it is intentionally updated first.

The mother diagnostic (`01-Business_Diagnostic_OS.md`) is frozen at v3. Homepage copy, headline language, deliverable framing, and Diagnostic-vs-Audit naming tests may iterate in implementation without reopening the mother document.

---

## 1. Architecture Flags

The SRS and scope contain ambitions beyond the current release. These must not be silently implemented during ordinary coding sessions.

- **Ongoing Care / Retainer:** approved next increment. Surface standing retainer copy and diagnostic → build → retainer progression only.
- **Client portal:** future operations item. Do not add authenticated prospect/client accounts, proposal delivery, or diagnostic workspaces without re-scoping.
- **CRM / intake automation:** future operations item. Do not add pipeline tracking, lead scoring, or automated follow-up without re-scoping.
- **Payments / invoicing:** future operations item. Current release may show offer copy and contact/intake paths only. Do not add checkout, invoices, or payment status without re-scoping.
- **Business Systems Consultant / Business OS positioning:** explicitly out of scope for this release. Do not implement pages, copy systems, or IA that sell management consultancy or broad business systems work.
- **Founder Toolkit / framework library:** out of scope unless explicitly re-scoped. Do not add Gate Framework, Advantage Index, JTBD library pages, or similar.
- **Business Diagnostic OS public walkthrough:** out of scope. The mother document guides internal strategy; it is not the public site IA.
- **Diagnostic Library:** out of scope unless explicitly re-scoped. Do not add a separate browsable library module in this release.
- **Builder-for-hire IA restraint:** do not implement Services / Portfolio / generic Contact as primary navigation.
- **Portfolio gallery restraint (v3):** do not treat undifferentiated image galleries or freelancer-style thumbnail grids as proof. **Phase 10 (`08`):** large, narrative **case-study cards and editorial case pages** are the approved primary proof surface—each must carry business story, not screenshots alone.
- **Agency visual restraint:** no decorative freelancer portfolio tropes (skills grids, logo walls, hash `#works` IA). **Phase 10 (`08`):** subtle hero/card micro-interactions allowed when performance budget is met—no animation-first loading.
- **Implementation rule:** the content layer owns publishable marketing truth; the frontend must not become the source of truth for offer framing, proof structure, publish state, or sensitive client visibility.

---

## 2. System Boundaries

The platform is a **public marketing and proof system** with a **founder-managed content backend**. It is not a client portal, CRM, or delivery workspace in the current release.

### 2.1 Frontend Owns

- Route-level pages and layouts for Home, Digital Experience Diagnostic, Case Studies, How I Work, About, Start Here, and future retainer surfaces.
- Public UI rendering and editorial page composition.
- Mobile-first reading flow, section hierarchy, and CTA presentation.
- Client-side interaction state for navigation, accordions, tabs, and lightweight UI behavior.
- SEO metadata and structured-data helpers per route.
- Presentation-only excerpting, ordering display, grouping, and section layout.
- User-friendly empty, loading, and error states.
- External intake handoff UI for email, phone, WhatsApp, or scheduling links.
- Optional homepage copy variants for Diagnostic vs Audit naming tests.

Frontend must not own:

- Publish state truth.
- Case study narrative structure truth beyond rendering approved content fields.
- Offer deliverables, turnaround, price, and CTA truth beyond approved published content.
- Navigation truth in scattered hardcoded arrays.
- Sensitive client material visibility decisions.
- CRM, payment, or booking workflow truth.

### 2.2 Content Layer Owns

- Publishable marketing content and proof assets.
- Draft vs published content state.
- Productized offer content and deliverables list.
- Case study records and structured narrative sections.
- How I Work process content.
- About content.
- Homepage blocks and site settings.
- Retainer offer content in the approved next increment.
- Slug identity for routable proof content.
- Rich text and structured blocks for long-form sections.

Content layer must not own:

- Page layout decisions.
- Visual hierarchy and component composition.
- Route existence.
- Client-side navigation behavior.
- Future CRM, payment, or client-portal workflow truth.

### 2.3 Founder Studio Owns

- Founder editing experience for offer, case studies, How I Work, About, homepage blocks, and site settings.
- Schema-driven forms for proof and offer content.
- Publish and unpublish actions by the founder.

Studio must not own:

- Public route rendering.
- Public CTA behavior beyond stored fields.
- Positioning logic expressed only in frontend components.

### 2.4 Explicitly Out Of Scope In Current Architecture

- Authenticated prospect accounts.
- Proposal builders and contract signing.
- Payment processing and invoicing.
- CRM and pipeline management.
- Automated booking engines.
- Marketing automation.
- Framework library publishing.
- Business Diagnostic OS public product pages.
- Diagnostic Library module.
- Business Systems Consultant category surfaces.
- Full build-delivery or client-workspace systems beyond explaining the offer on the marketing site.

---

## 3. System Modules

The platform is organized around public persuasion modules, founder publishing modules, and one approved next commercial module.

### 3.1 Public Website

Owns:

- Home
- Digital Experience Diagnostic
- Case Studies index and detail
- How I Work
- About
- Start Here

Must not own:

- Freelancer-style single-page hash navigation as the final IA.
- Portfolio gallery framing.
- Generic contact-page conversion logic.
- Management consultancy category framing.

### 3.2 Positioning And Offer System

Owns:

- Digital Experience Consultant framing.
- Productized Digital Experience Diagnostic offer.
- Site-wide primary CTA: Book a Digital Experience Diagnostic.
- Deliverables list, turnaround, price language, and walkthrough-call explanation.
- Commercial clarity: what the client gets, by when, and for how much.

Must not own:

- Business Systems Consultant positioning.
- Business OS or broad operational consulting language as the lead category.
- Website-build quote flows.
- Self-serve pricing calculators.
- Theme picker or page-builder experiences.

### 3.3 Productized Diagnostic Offer Presentation

Owns:

- Customer Journey Audit
- Website Audit
- Google Business Profile Audit
- Review Analysis
- Competitor Comparison
- Top Revenue Leaks
- Prioritized Action Plan
- 90-Minute Walkthrough Call
- Turnaround language (~1 week placeholder until confirmed)
- Price language (KX,XXX placeholder until confirmed)

Must not own:

- Abstract philosophy-only offer pages.
- Internal Business Diagnostic OS stage walkthrough as the public flagship page.
- Technical build scoping as the lead message.

### 3.4 Case Studies And Proof

Owns:

- Case study index.
- Case study detail narrative.
- Proof assets and excerpts.
- Anonymisation-friendly client/context summaries.
- Implementation and outcome emphasis.

Must not own:

- Decorative project galleries.
- Screenshots-first proof presentation.
- Diagnosis-only case studies without implementation and outcome.

### 3.5 How I Work

Owns:

- Diagnostic process explanation.
- Honest scope-boundary copy: broader business issues may surface but are not the product sold today.
- Build/implementation follow-on explanation.

Must not own:

- Framework library content.
- Management consultancy explainer content.
- Resume-style skills showcase.

### 3.6 About

Owns:

- Investigation-before-build advantage.
- Evidence-based implementation advantage.
- Credibility statements grounded in real work.

Must not own:

- Generic CV presentation.
- Skills grid or developer biography patterns.

### 3.7 Start Here / Intake Path

Owns:

- Conversion page for booking a Digital Experience Diagnostic.
- Deliverables recap.
- Turnaround and price recap.
- Process and post-booking expectations.
- Approved contact/intake references.

Must not own:

- Embedded payment capture.
- Authenticated onboarding.
- CRM record creation in v1.

### 3.8 Founder Publishing

Owns:

- Offer create/edit/publish.
- Case study create/edit/publish.
- How I Work, About, and homepage copy maintenance.
- Site settings for nav, CTA, contact, and SEO defaults.

Must not own:

- Full agency content-ops workflows.
- Multi-user editorial governance beyond solo-founder use.

### 3.9 Ongoing Care / Retainer

Approved next increment. Owns:

- Standing retainer offer copy.
- Monthly upkeep scope summary.
- Diagnostic → build → retainer progression messaging.
- Cross-links from case studies and Start Here.

Must not own:

- Billing systems.
- Service-desk workflows.
- Ticket or subscription management.

---

## 4. Application Structure

The implementation should separate route surfaces, UI composition, content access, and typed domain models.

### 4.1 `app/`

Owns route-level pages and route layouts.

Rules:

- One primary route per top-level page in the SRS IA.
- Route files fetch data through shared content-access helpers.
- Route files compose domain components; they do not become long-term copy repositories.
- Shared public layout owns metadata defaults, header, footer, and global CTA behavior.

Expected public routes:

- `/`
- `/digital-experience-diagnostic`
- `/case-studies`
- `/case-studies/[slug]`
- `/how-i-work`
- `/about`
- `/start-here`

Approved next increment:

- Retainer offer may live as `/ongoing-care`, `/retainer`, or a dedicated section on Start Here / How I Work — choose one surface and document it before implementation.

Founder studio route:

- `/admin`

### 4.2 `components/`

Owns reusable UI and page sections.

Recommended organization:

```text
components/
  layout/              SiteHeader, SiteFooter, PrimaryCta, SectionShell
  home/                category hero, problem framing, offer teaser, proof strip
  diagnostic-offer/    deliverables list, turnaround, price, walkthrough call
  case-studies/        cards, detail narrative blocks
  how-i-work/          process steps, scope boundary, build follow-on
  about/               investigation + implementation advantage
  start-here/          offer recap, process, intake blocks
  retainer/            approved next increment
  ui/                  Button, Prose, Container, Badge, PageHeader, DeliverableList
```

Rules:

- Domain folders map to SRS modules.
- `ui/` is for primitives only.
- Section components receive typed data props.
- Components must not own publish-state or offer truth.

### 4.3 `lib/content/`

Owns all public content access.

Recommended organization:

```text
lib/content/
  client.ts
  fetch.ts
  queries/
    site.ts
    offer.ts
    caseStudies.ts
    howIWork.ts
    about.ts
    retainer.ts
  portableText.tsx
```

Rules:

- One query module per SRS content domain.
- Public queries return published content only.
- Slug lookups return `null` for missing/unpublished records so routes can fail cleanly.
- No page component should embed ad hoc query strings as the long-term pattern.

### 4.4 `content/schemas/`

Owns founder-editable schema definitions.

Expected schemas for launch:

- `siteSettings`
- `offer`
- `offerDeliverable` or deliverables array embedded in `offer`
- `caseStudy`
- `howIWorkContent`
- `founderProfile`

Expected schemas for next increment:

- `retainerOffer`

Explicitly not required for launch:

- `diagnosticStage`
- `frameworkItem`
- `libraryEntry`

Rules:

- Schemas express SRS entities, not page implementation details.
- Query logic does not live inside schema files.

### 4.5 `types/`

Owns typed representations of content query results.

Expected types:

- `SiteSettings`
- `Offer`
- `OfferDeliverable`
- `CaseStudy`
- `HowIWorkContent`
- `FounderProfile`
- `RetainerOffer`
- `CtaBlock`
- `NavigationItem`
- `HomepageContentBlock`

---

## 5. Data Flow Maps

### 5.1 Public Page Rendering Flow

1. Prospect opens a public route such as `/`, `/digital-experience-diagnostic`, `/case-studies/[slug]`, or `/start-here`.
2. Route calls the relevant `lib/content/queries/*` function.
3. Content layer returns published, typed data.
4. Route composes domain components and metadata.
5. Frontend renders editorial layout, CTA blocks, and empty/error states.
6. Frontend does not decide whether draft or unpublished content is public.

### 5.2 Home / Category Framing Flow

1. Prospect opens `/`.
2. Route fetches homepage blocks, site settings, flagship offer teaser, and featured proof.
3. Home communicates category within seconds on mobile.
4. Home may lead with customer problem framing before naming the product.
5. Primary CTA routes to `/start-here`.
6. Home introduces offer and proof without leading with build output.

### 5.3 Digital Experience Diagnostic Offer Flow

1. Prospect opens `/digital-experience-diagnostic`.
2. Route fetches the productized `offer` record and deliverables.
3. Page presents all eight deliverables in plain language.
4. Page presents turnaround and price language, even if placeholder.
5. Page explains that the walkthrough call is delivered live.
6. Page CTA routes to `/start-here`.
7. Page sells a bookable product, not abstract philosophy.

### 5.4 Case Study Proof Flow

1. Prospect opens `/case-studies` or `/case-studies/[slug]`.
2. Route fetches published case studies or one case study by slug.
3. Detail page renders Observation → Evidence → Decision → Implementation → Outcome.
4. Implementation states what was built.
5. Outcome states what changed.
6. Sensitive client material remains omitted or anonymised according to publish rules.

### 5.5 How I Work Flow

1. Prospect opens `/how-i-work`.
2. Route fetches process content and optional intro copy.
3. Page explains the diagnostic process briefly and honestly.
4. Page includes the scope-boundary line about broader issues not being the sold product.
5. Page presents build/implementation as follow-on, not lead offer.

### 5.6 About Flow

1. Prospect opens `/about`.
2. Route fetches founder profile / About content.
3. Page communicates investigation and implementation as paired advantages.
4. Page avoids CV/skills-grid framing.

### 5.7 Start Here / Intake Flow

1. Prospect opens `/start-here`.
2. Route fetches offer and intake content.
3. Page restates deliverables, turnaround, and price.
4. Page explains what happens after a prospect expresses interest.
5. Prospect follows approved external intake path: email, phone, WhatsApp, or scheduling link.
6. No payment, account creation, or CRM record is created in this release.

### 5.8 Founder Publishing Flow

1. Founder opens `/admin`.
2. Founder edits offer, case study, How I Work, About, or site settings content.
3. Founder publishes approved content.
4. Public routes reflect published content on next fetch/build.
5. Draft content never appears on public routes.

### 5.9 Ongoing Care / Retainer Flow

Approved next increment:

1. Prospect encounters retainer copy from an approved surface.
2. Route or section fetches `retainerOffer` content.
3. Copy explains monthly upkeep at a high level.
4. Copy shows progression: diagnostic → build/implementation → ongoing care.
5. No billing or service-desk workflow is created.

---

## 6. Content Access Contract

There is no public REST API in the current release. The contract below is the allowed public content-access surface.

| Query Function | Purpose | Domain Entity | Consumer |
|---|---|---|---|
| `getSiteSettings()` | nav, CTA, contact, SEO defaults | `siteSettings` | layout, header, footer |
| `getHomePageContent()` | hero, problem framing, offer teaser, proof strip | `siteSettings`, `offer`, `caseStudy` | `/` |
| `getOffer()` | productized Digital Experience Diagnostic | `offer` | `/digital-experience-diagnostic`, `/start-here`, CTAs |
| `getOfferDeliverables()` | eight flagship deliverables | `offer` / `offerDeliverable` | `/digital-experience-diagnostic`, `/start-here` |
| `getCaseStudies()` | published case study index | `caseStudy` | `/case-studies`, home proof strip |
| `getCaseStudyBySlug(slug)` | case study detail | `caseStudy` | `/case-studies/[slug]` |
| `getHowIWorkContent()` | process and scope-boundary copy | `howIWorkContent` | `/how-i-work` |
| `getAboutContent()` | investigation + implementation About copy | `founderProfile` | `/about` |
| `getStartHereContent()` | intake path copy and offer recap | `offer`, `siteSettings` | `/start-here` |
| `getRetainerOffer()` | standing Ongoing Care product copy | `retainerOffer` | approved next-increment surfaces |

---

## 7. Source Of Truth

| Data / Rule | Source Of Truth | Never Duplicate In |
|---|---|---|
| Site positioning and category headline | `siteSettings` + Home content | scattered hero JSX |
| Primary CTA label and target | `siteSettings` / `ctaBlock` | per-page button conventions |
| Public navigation labels and hrefs | `navigationItem` / `siteSettings` | hardcoded nav arrays |
| Flagship offer name and summary | `offer` | footer, Start Here, and homepage duplicates |
| Offer deliverables list | `offer` / `offerDeliverable` | hardcoded bullet lists in multiple pages |
| Turnaround and price language | `offer` | scattered pricing copy |
| Walkthrough call explanation | `offer` | ad hoc CTA copy |
| Case study narrative sections | `caseStudy` + fixed render order | gallery cards or screenshot-first layouts |
| Implementation summary | `caseStudy.implementation` | project gallery descriptions |
| Outcome summary | `caseStudy.outcome` | vanity metrics without context |
| Case study publish state | content publish state | frontend-only visibility toggles |
| How I Work process copy | `howIWorkContent` | generic services page copy |
| Scope-boundary line | `howIWorkContent` | improvised disclaimers in components |
| Retainer offer copy | `retainerOffer` | throwaway footer mentions |
| Founder About copy | `founderProfile` | resume-style About content |
| Contact/intake references | `siteSettings` / `contactIntakeReference` | inconsistent page-level contact blocks |
| Diagnostic vs Audit naming test | `siteSettings` or homepage variant field | permanent hardcoded product rename |
| SEO title and description | route metadata + content fields | repeated per-component strings |
| Sensitive client proof visibility | publish rules + redacted content fields | component-level guesswork |
| Slug routing identity | content slug field | frontend slug inference |
| Proof asset attachments | `proofAsset` linked to case study | unmanaged public uploads |

---

## 8. Business Rules Enforced In Code

### 8.1 Public Content Visibility

- Public queries must return published content only.
- Draft content must never render on public routes.
- Missing slug lookups must fail cleanly rather than render empty proof pages.
- Sensitive or unpublished client proof must remain excluded from public queries.

### 8.2 Positioning And CTA

- The homepage must communicate category honestly, not generic web development service.
- The homepage headline must support a message equivalent to: "I investigate why your digital presence isn't working, then build the fix."
- The primary site CTA must be Book a Digital Experience Diagnostic.
- Builder-for-hire CTAs such as Contact Me, Get a Quote, My Works, and request-a-website-quote must not be primary actions.
- Business Systems Consultant, Business OS, and management consultancy must not be the primary category.
- A prospect must be able to answer "What do I get, by when, and for how much?" from the public site.

### 8.3 Navigation / Information Architecture

- Primary nav must use Digital Experience Diagnostic, Case Studies, How I Work, About, and Start Here.
- Services, Portfolio, and generic Contact must not be primary nav labels.
- The site must function as a multi-page persuasion system, not a freelancer scroll template.

### 8.4 Digital Experience Diagnostic Offer Page

- `/digital-experience-diagnostic` must present all eight deliverables.
- The page must present turnaround and price language.
- The page must explain the live 90-minute walkthrough call.
- The page must sell the productized offer, not abstract philosophy.
- The page must CTA to `/start-here`.

### 8.5 Case Studies

- Case study detail must render sections in this order: Observation → Evidence → Decision → Implementation → Outcome.
- Implementation must describe what was built.
- Outcome must describe what changed.
- Build or website work must not be the first or dominant frame.
- At least one published real case study — Kwisoko — is required for launch acceptance.
- Case study index must not behave like a decorative portfolio gallery.

### 8.6 How I Work

- The page must explain the diagnostic process in plain language.
- The page must include the honest scope-boundary line.
- The page must not become a framework library or management consultancy explainer.
- Build/implementation must appear as follow-on, not lead offer.

### 8.7 About

- About must communicate both investigation and implementation advantage.
- About must not degrade into a generic CV, skills grid, or developer biography.

### 8.8 Start Here / Intake

- `/start-here` must restate deliverables, turnaround, and price.
- The page must explain process, expectations, and next step.
- The page must not default to website-quote language.
- Intake may hand off to external contact methods but must not impersonate a payment or booking backend.

### 8.9 Founder Publishing

- The founder must be able to publish or update offer and case study content without rebuilding page templates.
- Published and draft states must be distinguishable in the studio workflow.
- Homepage, offer, How I Work, and About copy must be maintainable without code changes where practical.

### 8.10 Ongoing Care / Retainer

Approved next increment:

- Retainer must be visible as a standing product.
- Retainer copy must explain monthly upkeep at a high level.
- Retainer must show diagnostic → build → ongoing care progression.
- Full billing or service-desk workflow is not part of this increment.

### 8.11 Visual System

- Default visual language must be calm, editorial, and evidence-led.
- Typography and whitespace must take precedence over gratuitous decoration.
- Visual design must align with Digital Experience Consultant positioning—not generic freelancer or SaaS agency templates.
- **Phase 10 (`08`):** work-forward imagery on home and `/case-studies` is in scope; case study detail uses alternating editorial bands and diagnostic components where category is `diagnostic`.
- Tone should support plain, confident writing.
- Performance and accessibility override motion; see `08` acceptance criteria.

### 8.12 Explicit Exclusions

Unless re-scoped, do not implement:

- `diagnosticStage` public pages
- `frameworkItem` public pages
- `libraryEntry` module
- Business Systems Consultant category surfaces
- CRM, portal, or payment routes

---

## 9. Page-To-Data Map

| Page / Route | Data Required | Data Source |
|---|---|---|
| `/` | category headline, problem framing, primary CTA, offer teaser, featured case study, proof strip, implementation pairing line, contact/footer defaults | `getHomePageContent()`, `getSiteSettings()`, `getCaseStudies()`, `getOffer()` |
| `/` **Phase 10 (`08`)** | studio hero, selected/featured work list, how I think / what I build blocks, diagnostic strip, contact — same query owners; homepage **composition** changes | same as above + featured/filter by `category` when CMS fields exist |
| `/digital-experience-diagnostic` | offer summary, eight deliverables, turnaround, price, walkthrough call explanation, CTA | `getOffer()`, `getOfferDeliverables()`, `getSiteSettings()` |
| `/case-studies` | published case study index | `getCaseStudies()` |
| `/case-studies/[slug]` | observation, evidence, decision, implementation, outcome, context summary, SEO fields | `getCaseStudyBySlug()` |
| `/how-i-work` | process steps, scope-boundary line, build follow-on explanation | `getHowIWorkContent()`, `getSiteSettings()` |
| `/about` | investigation advantage, implementation advantage, credibility statements, CTA/contact path | `getAboutContent()`, `getSiteSettings()` |
| `/start-here` | offer recap, deliverables, turnaround, price, process, intake methods, expectations | `getStartHereContent()`, `getOffer()`, `getOfferDeliverables()` |
| `/admin` | founder studio schemas and publish workflow | content schemas and studio config |
| Retainer surface (next increment) | retainer scope, ideal fit, progression copy | `getRetainerOffer()` |

---

## 10. Domain Schema Summary

| Schema / Entity | Purpose | Required For |
|---|---|---|
| `siteSettings` | nav, CTA, contact, SEO defaults, footer copy, optional homepage variant | launch |
| `offer` | productized Digital Experience Diagnostic | launch |
| `offerDeliverable` | one item in the eight-deliverable list | launch |
| `caseStudy` | proof assets | launch |
| `howIWorkContent` | process and scope-boundary page | launch |
| `founderProfile` | About content | launch |
| `retainerOffer` | standing Ongoing Care product | next increment |

### `offer` minimum fields

- `title`
- `slug`
- `summary`
- `turnaround`
- `priceLabel` or `pricingLanguage`
- `walkthroughCallDescription`
- `processSummary`
- `ctaLabel`
- `deliverables[]`
- `seoTitle`
- `seoDescription`

### `offerDeliverable` minimum fields

- `title`
- `description`
- `order`

### `caseStudy` minimum fields

- `title`
- `slug`
- `clientLabel` or `contextSummary`
- `excerpt`
- `observation`
- `evidence`
- `decision`
- `implementation`
- `outcome`
- `heroImage` (optional)
- `proofAssets` (optional)
- `seoTitle`
- `seoDescription`
- `publishedAt`

### `howIWorkContent` minimum fields

- `intro`
- `processSteps[]`
- `scopeBoundaryLine`
- `buildFollowOnSummary`

### `founderProfile` minimum fields

- `headline`
- `investigationAdvantage`
- `implementationAdvantage`
- `credibilityCopy`
- `body` (optional rich text)

### `retainerOffer` minimum fields

- `title`
- `summary`
- `scopeItems[]`
- `idealClientFit`
- `followOnExplanation`

---

## 11. Folder Rules Summary

### Routes

- New public page → one route file per SRS top-level page.
- Shared public layout owns header, footer, metadata defaults, and global CTA placement.
- Founder studio route remains separate from public marketing layout.
- Do not add CRM, portal, payment, framework-library, or Business OS routes without scope updates.

### Components

- New reusable section → domain folder matching SRS module.
- Primitive UI → `components/ui/`.
- Components receive typed data; they do not own publish or offer truth.

### Content Access

- New public content domain → new query module in `lib/content/queries/`.
- Public reads filter to published content only.
- Shared fetch and typing logic stay out of route files.

### Schemas And Types

- New founder-editable domain → new schema and matching TypeScript type.
- Schema files express entities; query files express access patterns.
- Do not add `frameworkItem`, `diagnosticStage`, or `libraryEntry` for launch unless docs are updated.

---

## 12. Architecture Decisions To Revisit Later

These are intentionally deferred:

- Whether intake should post to an API route, email provider, form service, or remain external-link only.
- Whether preview/draft rendering is needed before publish.
- Whether retainer gets its own route or shared section placement.
- Whether `siteSettings` should be one singleton or multiple documents.
- Whether static generation, ISR, or tag-based revalidation should be used for proof pages.
- Whether Diagnostic vs Audit naming test results should change canonical product naming.
- CRM, client portal, payment, proposal, and diagnostic delivery workspace ownership.
- Diagnostic Library or framework publishing if explicitly re-scoped.
- Movement up the positioning ladder toward Business Systems Consultant only after repeated client evidence.
- Analytics and conversion attribution model.
- Multi-consultant or multi-brand site structure.
- Productised SaaS licensing of the Business Diagnostic OS.

No implementation work should begin on these until Product Scope and SRS are updated.

---

## 13. Build Priority Inside The Architecture

This is the preferred implementation order aligned with `docs/02-product-scope.md`:

1. Define `offer`, `offerDeliverable`, and `caseStudy` schemas and query modules.
2. Build `/digital-experience-diagnostic` and `/start-here` with full deliverables, turnaround, and price language.
3. Publish Kwisoko as the first `/case-studies/[slug]` proof asset.
4. Rebuild `/` with honest category framing and site-wide CTA.
5. Replace builder-for-hire IA with Digital Experience Diagnostic / Case Studies / How I Work / About / Start Here.
6. Ship editorial visual system across all public routes.
7. Launch `/how-i-work`, `/about`, and founder publishing workflow.
8. Surface Ongoing Care / Retainer in approved next-increment locations.
9. Validate final price, turnaround, intake method, and analytics before CRM, portal, or payment modules.

---

*Derived from `docs/01-Business_Diagnostic_OS.md` v3 (frozen), `docs/02-product-scope.md`, and `docs/03-srs.md` · The Website Guy · July 2026*
