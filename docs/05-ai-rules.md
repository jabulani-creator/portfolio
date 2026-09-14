# 05 AI Rules

**Project:** The Website Guy — Digital Experience Consultant Platform  
**Use:** Paste this at the start of every AI coding session  
**Purpose:** Keep AI work inside the agreed scope, architecture, and learning style

---

## AI RULES — Paste At The Start Of Every Session

You are assisting on a real software project. Your job is to help me implement features within the project's agreed architecture and help me understand everything we build.

This project is being rebuilt around a documented repositioning strategy. The mother diagnostic is frozen at v3. Do not assume missing documents mean freedom to invent. Use the documents below as the source of truth.

---

## Source Of Truth

Use these in priority order:

1. `docs/01-Business_Diagnostic_OS.md` v3 (frozen) — business problem, positioning altitude, productized offer, and strategic reason for the platform.
2. `docs/02-product-scope.md` — current release boundary and scope veto.
3. `docs/03-srs.md` — what the system must do.
4. `docs/04-engineering-design.md` — architecture source of truth. Do not invent outside it.
5. `docs/06-mastery-checklist.md` — build and learning order. Use the current relevant step only.
6. `docs/07-rebuild-roadmap.md` — phased execution order, objectives, and exit gates. Use the current phase only.
7. `README.md` — project setup notes only.
8. Existing codebase — follow current patterns only when they do not conflict with the docs above.

If any document conflicts with another, ask before changing code. Do not silently choose the more ambitious option.

**Important:** Homepage copy, headline language, deliverable framing, and Diagnostic-vs-Audit naming may iterate in implementation without reopening `01-Business_Diagnostic_OS.md`. **Structural IA, homepage section model, and proof presentation** for Phase 10 are governed by `docs/08-portfolio-studio-redesign-brief.md` and must stay aligned with `02`, `03`, and `04`.

---

## Scope Rules

- Do not add features, libraries, folders, schemas, routes, or abstractions that are not in current scope.
- Do not implement multiple roadmap steps at once.
- If something seems missing, flag it and explain why. Do not silently add it.
- Do not suggest changing the tech stack or framework unless I explicitly ask.
- Do not expand the project into a client portal, CRM, or delivery platform unless `docs/02-product-scope.md`, `docs/03-srs.md`, and `docs/04-engineering-design.md` are updated first.
- Do not rebuild this as a freelancer portfolio, agency site, or generic "get a website quote" product unless the scope docs are updated first.
- Do not sell Business Systems Consultant, Business OS, or management consultancy in this release.

Treat these as out of scope unless explicitly re-scoped:

- Business Systems Consultant / Business OS positioning
- Founder Toolkit / framework library pages
- Business Diagnostic OS public walkthrough page
- Diagnostic Library as a separate browsable module
- Authenticated prospect or client accounts
- Proposal builders and contract signing inside the site
- Payments, invoicing, checkout, and receipt flows
- CRM, pipeline management, lead scoring, and sales automation
- Automated booking engines
- Marketing automation and email/WhatsApp/SMS follow-up sequences
- Public self-serve website quotes, theme pickers, and page builders
- Blog/comments/community features
- Native mobile app, offline mode, and multi-consultant team tooling
- Productised SaaS licensing of the Business Diagnostic OS
- Full build-delivery or client-workspace systems beyond explaining the offer on the marketing site

The **Ongoing Care / Retainer** increment is explicitly scoped only for:

- Standing retainer product copy
- Monthly upkeep scope summary: content, SEO basics, review monitoring
- Visible diagnostic → build → retainer progression
- Founder-editable retainer content
- Cross-links from approved surfaces such as Start Here, How I Work, or case studies

Do not expand the retainer increment into billing, ticketing, subscriptions, or service-desk workflows unless the scope/SRS/design docs are updated again.

---

## Architecture Rules

- Use `docs/04-engineering-design.md` as the architecture source of truth.
- Do not invent new route domains, component domains, content schemas, or ownership rules.
- If architecture needs to change, explain the reason and ask before touching code.

Respect system boundaries:

- **Frontend** owns routes, UI rendering, editorial layout, SEO helpers, CTA presentation, and external intake handoff UI.
- **Content layer** owns publishable marketing truth, offer deliverables, proof assets, process copy, publish state, and slug identity.
- **Founder studio** owns founder editing and publish/unpublish workflow.
- UI must not contain content-publish truth or sensitive client visibility logic.
- Frontend presentation order for case studies must follow the approved narrative sequence, but the content fields themselves remain content-owned.

Content access must go through `lib/content/queries/` according to `docs/04-engineering-design.md`.

Do not hardcode content-owned offer deliverables, nav, case studies, or price/turnaround data in components as the long-term source of truth.

---

## Frontend Rules

**Stack:** Next.js App Router + TypeScript + Tailwind + headless CMS.

Frontend structure:

- Public pages live under `app/` route files for Home, Digital Experience Diagnostic, Case Studies, How I Work, About, and Start Here.
- Expected offer route: `/digital-experience-diagnostic`
- Expected case study routes: `/case-studies`, `/case-studies/[slug]`
- Founder studio lives at `/admin`.
- Reusable UI lives under `components/` by domain.
- Low-level UI primitives live under `components/ui/`.
- Public content access lives under `lib/content/queries/`.
- Shared response shapes live under `types/`.
- SEO helpers live under `lib/seo.ts` or equivalent shared helper.

Frontend must not:

- Become source of truth for publish state, offer deliverables, turnaround, price, or sensitive client visibility.
- Reintroduce Services / Portfolio / generic Contact as primary navigation.
- Use portfolio gallery cards as the primary proof surface.
- Lead with build output instead of diagnostic offer and case-study proof.
- Position the site as Business Systems Consultant or management consultancy.
- Add framework-library or Business OS pages without re-scoping.
- Fake payment, booking, CRM, or client-portal behavior.
- Scatter query strings directly inside route components when a query module should own the access pattern.
- Add one-off hardcoded offer deliverables or case studies when content-owned data should exist.

Visual rules:

- Default to calm, editorial, evidence-led design.
- Prioritise typography, whitespace, and scannability over decoration and animation.
- Do not default to agency/portfolio styling.
- Support plain, confident writing tone.

---

## Content Layer Rules

**Stack:** Headless CMS with founder studio.

Expected content domains for launch:

- `siteSettings`
- `offer`
- `offerDeliverable` or embedded deliverables array
- `caseStudy`
- `howIWorkContent`
- `founderProfile`

Expected content domain for next increment:

- `retainerOffer`

Explicitly not required for launch:

- `diagnosticStage`
- `frameworkItem`
- `libraryEntry`

Content file rules:

- Schema files express SRS entities and founder-editable fields.
- Query files express public read patterns.
- Public reads return published content only.
- Draft content must never appear on public routes.
- Slug-based detail reads must fail cleanly for missing or unpublished records.

Never put long-term offer, nav, proof, turnaround, or price truth only in frontend JSX if the content layer should own it.

The productized offer must include these deliverables:

1. Customer Journey Audit
2. Website Audit
3. Google Business Profile Audit
4. Review Analysis
5. Competitor Comparison
6. Top Revenue Leaks
7. Prioritized Action Plan
8. 90-Minute Walkthrough Call

Case study narrative fields must support this order:

**Observation → Evidence → Decision → Implementation → Outcome**

Implementation must state what was built. Outcome must state what changed. Diagnosis alone is not enough.

---

## Source-Of-Truth Rules

| Data / Rule | Source Of Truth | Never Duplicate In |
|---|---|---|
| Site positioning and category headline | `siteSettings` + Home content | scattered hero JSX |
| Primary CTA label and target | `siteSettings` / `ctaBlock` | per-page button conventions |
| Public navigation | `navigationItem` / `siteSettings` | hardcoded nav arrays |
| Flagship offer copy | `offer` | footer/home/start-here duplicates |
| Offer deliverables | `offer` / `offerDeliverable` | repeated hardcoded bullet lists |
| Turnaround and price language | `offer` | improvised pricing text in components |
| Walkthrough call explanation | `offer` | vague CTA copy |
| Case study content | `caseStudy` | gallery cards or static markdown |
| Implementation and outcome | `caseStudy` | project screenshots only |
| How I Work process copy | `howIWorkContent` | generic services copy |
| Scope-boundary line | `howIWorkContent` | improvised disclaimers |
| Retainer offer | `retainerOffer` | throwaway footer mentions |
| Founder About copy | `founderProfile` | resume-style About content |
| Diagnostic vs Audit naming test | homepage/siteSettings variant | permanent undocumented rename |
| Publish state | content publish state | frontend-only toggles |
| SEO metadata | route metadata + content fields | repeated per-component strings |
| Sensitive client proof | redacted/published content rules | component guesswork |

---

## Positioning Rules

This is not a freelance developer portfolio. Implement against these non-negotiables unless docs are updated:

- Positioning: **Digital Experience Consultant**
- Primary CTA: **Book a Digital Experience Diagnostic**
- Primary nav (v3 shipped): **Digital Experience Diagnostic, Case Studies, How I Work, About, Start Here**
- **Phase 10 (`08`):** nav may simplify labels (e.g. Work, Diagnostic, Start Here) if conversion paths and routes in `02`/`04` remain intact
- Homepage must communicate category honestly, not generic web dev service
- Flagship offer is the **productized Digital Experience Diagnostic**, not a website build
- Offer page must answer: what the client gets, by when, and for how much
- Case studies must show observation, evidence, decision, implementation, and outcome
- About must show both investigation and implementation advantage
- How I Work must explain process without overselling broader business systems consulting

Explicitly do not implement in this release:

- Business Systems Consultant category
- Business OS language
- Founder Toolkit / framework library
- Business Diagnostic OS as a public flagship page

If a proposed change makes the site read like "I build websites" or "I am a management consultant," stop and ask.

---

## Implementation Rules

- Before making code edits, explain which files will change and why.
- After making code edits, explain what changed in plain English.
- Prefer simple, readable code over clever abstractions.
- Add comments only where they clarify non-obvious logic.
- Do not delete existing user code unless explicitly asked.
- Do not revert unrelated user changes.
- Do not commit changes unless explicitly asked.
- After substantive edits, check lints for changed files.
- When adding dependencies, use the package manager and explain why the dependency is needed.
- If a request requires changing scope or architecture, stop and ask first.
- Minimize diff scope. Do not refactor unrelated code during feature work.
- Work one mastery-checklist step at a time when using `docs/06-mastery-checklist.md`.

---

## Learning Rules

- Define every new concept in plain English before using it.
- After introducing a new pattern, explain:
  - what it is
  - why it is used here
  - when not to use it
- If there are multiple ways to do something, explain the simplest option first.
- If I ask "why", give the real technical reason, not vague "best practice" language.
- Point me to official documentation for new frameworks, libraries, or concepts where helpful.
- Assume I want to maintain this code myself in 6 months.

---

## Current Stack

- **Frontend:** Next.js App Router, React, TypeScript, Tailwind CSS
- **Content:** Headless CMS with founder studio at `/admin`
- **Content access:** shared query helpers under `lib/content/queries/`
- **Rich text:** Portable Text or equivalent structured content rendering where needed
- **Auth model:** no public user accounts in current release; founder-only publishing through studio
- **Intake model:** external handoff via email, phone, WhatsApp, or scheduling link

---

## Current Release Reminder

**In scope now:**

- Public website repositioning as Digital Experience Consultant
- Home, Digital Experience Diagnostic, Case Studies, How I Work, About, Start Here
- Productized offer with eight deliverables, turnaround, and price language
- Site-wide CTA: Book a Digital Experience Diagnostic
- Editorial, evidence-led visual system
- At least one published real case study — Kwisoko
- Founder publishing for offer, case studies, How I Work, About, and site settings
- Removal of builder-for-hire information architecture

**Approved next focused increment:**

- Ongoing Care / Retainer offer surfacing
- Diagnostic → build → retainer progression copy
- Founder-editable retainer content

**Out of scope now:**

- Business Systems Consultant / Business OS positioning
- Framework library / How I Think pages
- Diagnostic Library module
- Client portal
- CRM and intake automation
- Payments and invoicing
- Proposal builders and contract signing
- Marketing automation
- Blog/comments/community platform
- SaaS licensing of the Business Diagnostic OS
- Full delivery workspace for client diagnostics

**Build priority:**

1. Productized offer page and Start Here
2. Kwisoko case study
3. Home and site-wide CTA
4. Replace builder-for-hire IA
5. Editorial visual system
6. How I Work, About, and founder publishing
7. Ongoing Care / Retainer increment

When in doubt, choose the smaller change and ask.

---

*Derived from `docs/01-Business_Diagnostic_OS.md` v3 (frozen), 02 Product Scope, 03 SRS, and 04 Engineering Design · The Website Guy · July 2026*
