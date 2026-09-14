# 03 SRS — Software Requirements Specification

**Project:** The Website Guy — Digital Experience Consultant Platform  
**Stage:** Requirements  
**Document type:** Software Requirements Specification  
**Source documents:** `docs/01-Business_Diagnostic_OS.md` v3 (frozen), `docs/02-product-scope.md`  
**Status:** v3 release requirements plus **Phase 10** trajectory in `docs/08-portfolio-studio-redesign-brief.md`

---

## 1. Project Overview

The Website Guy Digital Platform is a public marketing and proof system for a solo **Digital Experience Consultant** based in Lusaka, Zambia. The system must help prospects understand within seconds that this is not another freelance website pitch, see the **productized Digital Experience Diagnostic** as a scoped and priced first engagement, review real case-study proof, understand how the founder works, and book the diagnostic — while giving the founder a manageable way to publish and maintain offer copy, case studies, and proof without re-explaining the diagnostic on every sales call.

This SRS defines what the system must do. It does not define code structure, folder structure, API routes, hosting architecture, or implementation details.

### 1.1 Goals

- Help prospects understand within seconds that the business investigates why a digital presence is not working before recommending a build.
- Give SME owners and small institutional clients a trusted place to see exactly what the diagnostic includes, what they receive, and by when.
- Give the founder a public platform that sells the **Digital Experience Diagnostic** as the flagship product, not the website build.
- Publish the productized offer as a standalone, bookable page with deliverables, timeline, and price.
- Publish the strongest existing proof asset — the Kwisoko diagnostic — as the first public case study.
- Replace builder-for-hire positioning with **Digital Experience Consultant** positioning across navigation, copy, visual language, and calls to action.
- Reduce repeated live re-explanation of what the diagnostic includes on every sales call.
- Preserve a clear boundary between the current marketing-site release and future client portal, CRM, payments, and delivery automation.

### 1.2 Positioning Constraint

The system must **not** position the business as Business Systems Consultant, Business OS, or management consultancy in this release. Those are later-phase positioning on the ladder defined in the mother diagnostic. This release sells a developer with a diagnostic method at the right altitude.

---

## 2. User Types And Needs

### 2.1 Prospect — SME Owner / Operator

Owns a business with real revenue and real customers, but limited visibility into why their website or social presence is not converting inquiries into bookings. Has likely paid a developer before and received a pretty site that changed nothing. Needs to know what they get, by when, and at what price before committing.

### 2.2 Prospect — Small Institutional Client

Represents a small institution such as a school, church, or lodge with a real audience and a messy digital footprint. Has no in-house capacity to diagnose friction independently, but is willing to fix it once shown clearly. Needs proof, process clarity, and a concrete first step rather than a full build quote.

### 2.3 Referral Visitor

Arrives through word-of-mouth or direct outreach. Needs immediate category clarity, fast scanning, proof of method, and a single obvious next step.

### 2.4 Returning Evaluator

Returns after an initial visit or sales touchpoint. Needs stable offer framing, case studies, process explanation, and a consistent CTA to book the diagnostic.

### 2.5 Founder / Publisher

Sole operator and decision-maker. Needs to publish and update homepage copy, the productized offer, case studies, How I Work content, and About content through manageable editorial workflows without depending on a large team.

### 2.6 Future Client

Not in scope for authenticated access in this release. May later need a protected portal for diagnostics, proposals, and delivery tracking, but that is a future phase.

---

## 3. Core System Modules

### 3.1 Public Website

The public website must provide the official market-facing presence of The Website Guy. It must include Home, Digital Experience Diagnostic, Case Studies, How I Work, About, and Start Here pages. It must not present the business primarily as a portfolio gallery or generic freelancer site.

### 3.2 Positioning And Offer System

The system must communicate Digital Experience Consultant positioning consistently. The flagship offer must be the productized **Digital Experience Diagnostic**. The site-wide primary CTA must be "Book a Digital Experience Diagnostic," not "Contact Me," "Get a Quote," or equivalent builder-for-hire language.

### 3.3 Productized Diagnostic Offer Presentation

The system must present the flagship offer as a scoped, priced, bookable product. It must include the deliverables defined in the mother diagnostic:

- Customer Journey Audit
- Website Audit
- Google Business Profile Audit
- Review Analysis
- Competitor Comparison
- Top Revenue Leaks
- Prioritized Action Plan
- 90-Minute Walkthrough Call

It must also present turnaround (~1 week, placeholder until confirmed) and price (placeholder until confirmed). The offer page must sell the product, not abstract philosophy.

### 3.4 Case Studies And Proof

The system must present work as case studies, not as a decorative portfolio. Each case study must use the narrative structure: **Observation → Evidence → Decision → Implementation → Outcome**. Each case study must state what was built and what changed — not diagnosis alone.

### 3.5 How I Work

The system must explain the diagnostic process briefly and honestly. It must include the byproduct line that broader business issues sometimes surface but are not the product being sold today. It must present build/implementation as a follow-on path, not the lead message.

### 3.6 About

The system must communicate both halves of the advantage: investigation before build, and evidence-based implementation after diagnosis. It must avoid reducing the page to a generic CV, skills grid, or developer biography.

### 3.7 Start Here / Intake Path

The system must provide one unambiguous conversion page that explains how to book a Digital Experience Diagnostic, what the deliverable is, what the process looks like, what the price and timeline are, and what happens after booking.

### 3.8 Content Management

The system must support founder-editable content for case studies, offer copy, homepage copy, How I Work content, About content, and site settings through an approved editorial workflow.

### 3.9 Ongoing Care / Retainer

Approved next increment. The system must later surface Ongoing Care as a standing recurring offer with a clear diagnostic → build → retainer progression.

---

## 4. Data Entities And Relationships

This section defines the information the system must store or represent. It does not define database tables or implementation structure.

### 4.1 Site Settings

Represents global site configuration including navigation, primary CTA, contact/intake references, footer copy, and default SEO values.

### 4.2 Offer

Represents the productized Digital Experience Diagnostic. Must support offer name, summary, deliverables list, turnaround, price language, process summary, walkthrough call description, and CTA label.

### 4.3 Offer Deliverable

Represents one item in the flagship diagnostic deliverables list. Each deliverable must support title and description readable by non-technical business owners.

### 4.4 Case Study

Represents a proof asset showing the diagnostic method applied to a real or approved example business. Must support client/context summary, excerpt, narrative sections, implementation summary, outcome summary, publication status, and SEO fields.

### 4.5 Case Study Section

Represents a structured part of a case study: Observation, Evidence, Decision, Implementation, or Outcome. Sections must preserve narrative order and may include rich text, highlights, and optional media.

### 4.6 How I Work Content

Represents the process explanation page content, including diagnostic steps, honest scope boundary copy, and build/implementation follow-on explanation.

### 4.7 Founder Profile Content

Represents About page content supporting both investigation and implementation halves of the advantage.

### 4.8 CTA Block

Represents a reusable call-to-action configuration. The primary CTA must point to Start Here / Book a Digital Experience Diagnostic. Secondary CTAs may support case-study reading or process exploration but must not compete with the primary offer.

### 4.9 Navigation Item

Represents a top-level public nav entry. Current release nav must reflect Digital Experience Diagnostic, Case Studies, How I Work, About, and Start Here — not Services, Portfolio, or generic Contact.

### 4.10 Content Revision / Publish State

Represents editorial state for founder-managed content. Content must support draft and published states at minimum.

### 4.11 Retainer Offer

Represents the approved next-increment Ongoing Care product. Must support description, scope summary, ideal client fit, monthly upkeep areas, and how it follows diagnostic or build work.

### 4.12 Contact / Intake Reference

Represents public contact details or intake instructions linked from Start Here, such as email, phone, WhatsApp, or scheduling link. Full automated intake is not required in v1.

### 4.13 Proof Asset

Represents supporting material attached to a case study, such as screenshots, documents, or anonymised figures. Sensitive client material must support redaction or exclusion from public display.

### 4.14 Homepage Content Block

Represents editable homepage sections such as hero copy, problem framing, offer teaser, proof strip, and implementation pairing line.

---

## 5. Functional Requirements

### 5.1 Public Website Requirements

- The system must display a public homepage that communicates category honestly, not generic web development service.
- The homepage must include a headline equivalent in intent to: "I investigate why your digital presence isn't working, then build the fix."
- The homepage must present one primary CTA: Book a Digital Experience Diagnostic.
- The homepage must help a first-time prospect understand the offer, proof, process, and next step within seconds on mobile.
- The system must provide a Digital Experience Diagnostic page that sells the productized offer.
- The system must provide a Case Studies section with an index and detail view.
- The system must provide a How I Work page explaining the process and honest scope boundary.
- The system must provide an About page focused on both investigation and implementation advantage.
- The system must provide a Start Here page as the main conversion destination.
- The system must remove builder-for-hire information architecture patterns such as Services / Portfolio / generic Contact as primary navigation labels.
- Public users must be able to consume the site without logging in.

### 5.2 Positioning And Offer Requirements

- The system must present the Digital Experience Diagnostic as the flagship offer.
- The system must present all eight flagship deliverables clearly on the offer page and/or Start Here.
- The system must present turnaround and price, even if placeholder values are used until commercial validation is complete.
- The system must explain that build/implementation is a follow-on path, not the default first step.
- The system must avoid language that positions the founder primarily as a freelance web developer.
- The system must avoid Business Systems Consultant, Business OS, or management consultancy as the primary category.
- The system must make process, scope, deliverables, and next-step expectations visible before the prospect books or contacts the founder.
- The system must support offer copy that can be updated by the founder without code changes where practical.
- The system may support copy testing of "Digital Experience Diagnostic" vs "Digital Experience Audit" on the homepage without requiring document changes.

### 5.3 Digital Experience Diagnostic Page Requirements

- The page must sell the productized offer, not serve as a philosophy or internal framework page.
- The page must list all deliverables in plain language understandable by SME owners and institutional decision-makers.
- The page must state turnaround expectations.
- The page must state price or placeholder pricing language.
- The page must explain that the walkthrough call is delivered live, not only as a PDF.
- The page must include a CTA to Start Here / Book a Digital Experience Diagnostic.
- The page must be scannable on mobile with clear headings and section hierarchy.
- The page must frame outcomes where appropriate — e.g. what the client will know after one week — without reopening the frozen mother diagnostic for copy tweaks.

### 5.4 Case Study Requirements

- Public users must be able to browse published case studies.
- Public users must be able to open a case study detail page.
- A case study must present Observation, Evidence, Decision, Implementation, and Outcome in that narrative order.
- Implementation must describe what was actually built.
- Outcome must describe what changed — not diagnosis alone.
- Build or website work must not be the first or dominant frame of the case study.
- The system must support at least one published real case study — Kwisoko — in the current release.
- Sensitive client details must be anonymised or omitted where permission or privacy requires it.
- Case studies must be publishable and updatable through the founder content workflow.
- Unpublished or draft case studies must not appear publicly.

### 5.5 How I Work Requirements

- The page must explain the diagnostic process in plain language.
- The page must include the honest byproduct line that broader business issues sometimes surface but are not the product being sold today.
- The page must present build/implementation as a legitimate follow-on service, not the lead offer.
- The page must not become a framework library or management consultancy explainer.
- The page must reinforce Digital Experience Consultant positioning.
- The page must include a path to Start Here or the flagship offer.

### 5.6 About Requirements

- The About page must communicate both investigation and implementation advantage.
- The About page must support a message equivalent to: "I don't just build websites. I investigate why your current digital presence isn't working, then build the solution based on evidence rather than assumptions."
- The About page must avoid becoming a generic CV, skills grid, or developer portfolio biography.
- The About page must support credibility claims grounded in real experience and proof assets.
- The About page must include a path to Start Here or contact/intake details.

### 5.7 Start Here / Intake Requirements

- The system must provide one unambiguous conversion page for booking a Digital Experience Diagnostic.
- The page must restate or summarise deliverables, turnaround, and price.
- The page must explain what happens after a prospect expresses interest.
- The page must describe the expected decision point after the diagnostic.
- The page must not default to "request a website quote" language.
- The page must expose approved contact or intake methods such as email, phone, WhatsApp, or scheduling link.
- The current release does not require embedded payments, contracts, or authenticated prospect accounts.

### 5.8 Content Management Requirements

- The founder must be able to create, edit, publish, and unpublish case studies through an approved editorial workflow.
- The founder must be able to update homepage copy, offer copy, How I Work content, and About content without rebuilding page templates for each change.
- Published content must be distinguishable from draft content.
- The system should support rich text or structured content blocks for long-form proof and process pages.
- Media used in case studies should support references and optimised display rather than requiring heavy unmanaged uploads wherever possible.

### 5.9 Ongoing Care / Retainer Requirements

Approved next increment:

- The system must present Ongoing Care / Retainer as a visible standing offer.
- The retainer offer must explain monthly upkeep at a high level: content, SEO basics, review monitoring.
- The retainer offer must clarify how it follows diagnostic and build engagements.
- The system must show a repeat-engagement path: diagnostic → build/implementation → ongoing care.
- Full retainer billing, ticketing, and service-desk workflows are not required in this increment.

### 5.10 Legacy Portfolio Decommission Requirements

- The current release must not treat project gallery cards as the primary proof surface.
- Legacy portfolio/project pages from the old freelancer structure must be removed, redirected, or reframed into case-study structure.
- The system must not preserve old navigation or CTAs that reintroduce builder-for-hire positioning.

### 5.11 Explicitly Excluded Functional Areas

Unless re-scoped, the system must not include:

- Business Diagnostic OS public walkthrough as a product page
- Founder Toolkit / framework library pages
- Diagnostic Library as a separate browsable module
- Business Systems Consultant positioning surfaces
- CRM, client portal, payments, or automated booking

---

## 6. Non-Functional Requirements

### 6.1 Mobile And Readability

- The public website must prioritise mobile users.
- Public pages must be readable and scannable on small screens.
- Critical value proposition, offer clarity, CTA, and page structure must be understandable within seconds on mobile.
- The site must favour text clarity and information hierarchy over gratuitous motion.
- **Phase 10 (`08`):** home and case-study routes may use **large, optimized proof imagery** and bounded micro-interactions; narrative text remains required on every case study.

### 6.2 Visual Identity

- The site must use a calm, editorial, evidence-led visual language.
- Typography, spacing, and layout must align with Digital Experience Consultant positioning—not undifferentiated freelancer or SaaS agency templates.
- Visual design must not contradict an evidence-led diagnostic message.
- **Phase 10 (`08`):** primary UX direction is portfolio-studio / work-first proof (see `08` §0–2). Stripe Docs, Linear, and Notion remain tone references only.
- Tone reference includes 37signals-style plain, confident writing.

### 6.3 Accessibility

- Text must have clear visual hierarchy.
- Navigation must be simple and predictable.
- Important actions must be understandable without specialist knowledge.
- Forms or intake elements must provide clear labels and validation messages where used.

### 6.4 Performance

- Public pages must load quickly enough for low-friction first evaluation.
- The site must avoid unnecessary heavy media that slows first impression on mobile or lower-bandwidth connections.
- Case-study and process pages should remain readable; media supports evidence, not decoration alone. **Phase 10:** hero images and OG assets per case study are in scope (`08`).

### 6.5 Security And Privacy

- No public user accounts are required in this release.
- Sensitive client material in case studies must not be published without approval and anonymisation where needed.
- Founder studio access must be protected, but detailed admin requirements are outside public-user scope except where publish controls affect public visibility.

### 6.6 SEO And Discoverability

- Public pages must support discoverability for searches related to digital experience diagnostics, website audits, conversion problems, local consultancy, and founder identity where relevant.
- Each primary page must communicate page purpose clearly through titles, headings, and metadata.
- Case studies and the offer page must be indexable public proof and conversion surfaces.

### 6.7 Maintainability Of Content

- A solo founder must be able to maintain routine public content without a large engineering or content team.
- Adding a new case study must not require a full site rebuild.
- Offer copy, price language, and turnaround text must be editable without code changes where practical.

### 6.8 Commercial Clarity

- The site must reduce the need for the founder to re-explain what the diagnostic includes on every call.
- The primary commercial action must remain consistent across pages.
- Offer, proof, and process pages must work together as a single persuasion system rather than isolated content pages.
- A prospect must be able to answer "What do I get, by when, and for how much?" from the site alone.

---

## 7. Content Requirements

The system requires the following content to operate effectively:

- Business name, positioning statement, and category-defining homepage headline.
- Productized offer copy for the Digital Experience Diagnostic, including all eight deliverables.
- Turnaround language (~1 week placeholder until confirmed).
- Price language (KX,XXX placeholder until confirmed).
- How I Work process copy and honest scope-boundary line.
- About copy covering investigation and implementation advantage.
- Start Here copy covering intake method, expectations, deliverables, and next steps.
- At least one approved public case study — Kwisoko — with client permission handled.
- Proof excerpts or supporting assets for the first case study, anonymised where required.
- Contact/intake details such as email, phone, WhatsApp, or scheduling link.
- Optional homepage copy variants for Diagnostic vs Audit naming test.
- Ongoing Care / Retainer offer copy for the approved next increment.
- SEO titles and descriptions for Home, Digital Experience Diagnostic, Case Studies, How I Work, About, and Start Here.
- Redirection or replacement plan for legacy portfolio/project content from the old site.

---

## 8. Roadmap Phases

### 8.1 Current Release

The current release includes the public website repositioning as Digital Experience Consultant, the productized Digital Experience Diagnostic offer page, Case Studies index and first published Kwisoko case study, How I Work page, About page, Start Here conversion page, editorial visual system, CMS-backed publishing for offer and proof content, and removal of freelancer-style information architecture.

### 8.2 Next Validation Phase

The next phase includes the approved Ongoing Care / Retainer increment and must validate unresolved commercial and content rules before deeper tooling is built:

- Final diagnostic price and confirmed turnaround time.
- Client permission status for Kwisoko and any future case studies.
- Which contact/intake method is primary: email, WhatsApp, form, or scheduling link.
- Whether Diagnostic vs Audit naming test results should change public offer language.
- Retainer offer scope and public wording.
- Whether additional past projects will be converted into case studies.
- Analytics and success measurement baseline for the 90-day target: one paid diagnostic sold through the new offer.
- Whether payments, proposals, or CRM intake should be added immediately after the first paid diagnostic.

### 8.3 Future Operations Phase

Future phases may include:

- Movement up the positioning ladder toward broader systems consulting only after repeated client evidence supports it.
- Authenticated client portal for diagnostics, proposals, and delivery status.
- CRM, pipeline tracking, and intake automation.
- Embedded scheduling, payments, invoicing, and contract signing.
- Proposal builder and diagnostic delivery workspace.
- Diagnostic Library or framework publishing if explicitly re-scoped.
- Productised SaaS version of the Business Diagnostic OS for other consultants.
- Advanced analytics, newsletter/content engine, and multi-consultant team support.
- Automated follow-up sequences and sales automation.

---

## 9. Success Metrics

The system is working correctly when:

- A first-time prospect can understand the category, flagship offer, deliverables, and next step within seconds on mobile.
- The homepage no longer reads like a freelance web developer portfolio.
- The primary CTA across the site is Book a Digital Experience Diagnostic.
- A prospect can answer "What do I get, by when, and for how much?" without booking a call first.
- The Digital Experience Diagnostic page presents all eight deliverables, turnaround, and price language.
- At least one real case study is publicly available and structured as Observation → Evidence → Decision → Implementation → Outcome.
- The case study states what was built and what changed.
- How I Work explains the process without overselling broader business systems consulting.
- About communicates both investigation and implementation advantage.
- The founder can publish or update a case study or offer copy without rebuilding the site.
- Legacy Services / Portfolio framing no longer defines the public experience.
- Sensitive client material remains anonymised or unpublished where required.
- Prospects can reach Start Here and understand the diagnostic deliverable clearly.
- The approved Ongoing Care increment can surface retainer as a standing next-step product.
- The project does not expand into CRM, client portal, Business Systems Consultant positioning, or payment systems without re-scoping.

---

## 10. Explicit Non-Requirements For This SRS

This SRS does not define:

- Folder structure.
- API endpoint design.
- Database schema implementation.
- Hosting architecture.
- Framework-specific component structure.
- CMS schema implementation details.
- Deployment scripts.
- Visual design comps or brand asset production.
- Final homepage copy beyond the intent-level requirements above.
- Reopening or revising `01-Business_Diagnostic_OS.md` v3 for copy-level iteration.

Those belong in later technical architecture, design, and implementation documents.

---

*Derived from `docs/01-Business_Diagnostic_OS.md` v3 (frozen) and `docs/02-product-scope.md` · The Website Guy · July 2026*
