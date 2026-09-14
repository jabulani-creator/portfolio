# 06 Mastery Checklist

**Project:** The Website Guy — Digital Experience Consultant Platform  
**Stage:** Build  
**Document type:** Mastery-based build and review checklist  
**Status:** Current release build checklist derived from v3 planning documents

---

## How To Use This Checklist

This project is being rebuilt around a documented repositioning strategy. The mother diagnostic is frozen at v3. This checklist is not a generic tutorial. It is a mastery and build plan for implementing the agreed platform in the right order.

For each row:

1. Work on one step only.
2. Read the relevant section of `docs/05-ai-rules.md` and `docs/04-engineering-design.md`.
3. Before coding, explain the files, data flow, business rules, and likely mistakes.
4. After coding or review, prove understanding using the "Proof of Mastery" column.
5. Do not move on until you can explain the step without reading the code.

Checkboxes do not mean mastery. Explanation means mastery.

---

## Current Release Mastery Checklist

| Status | Step | Build Task | What I Must Understand Before Moving On | Proof of Mastery |
|---|---|---|---|---|
| [ ] | 1 | Read the six planning docs in order: mother diagnostic, scope, SRS, engineering design, AI rules, mastery checklist | Difference between frozen strategy, product boundary, requirements, architecture, session rules, and build order | I can explain why each document exists and which one wins when AI suggests extra work |
| [ ] | 2 | Understand the positioning ladder from the mother diagnostic | Why this release sells Digital Experience Consultant, not Business Systems Consultant or Business OS | I can explain what positioning is in scope now and what is explicitly deferred to later phases |
| [ ] | 3 | Map the system modules to business domains | Why Public Website, Positioning/Offer, Productized Diagnostic, Case Studies, How I Work, About, Start Here, and Founder Publishing are separate ownership boundaries | I can say which module owns a new idea and identify when an idea is out of scope |
| [ ] | 4 | Map the frontend folders to responsibilities | Why routes, domain components, content queries, types, SEO helpers, and UI primitives are separated | I can trace where a new public page, query function, reusable section, and typed model should live |
| [ ] | 5 | Define the launch content schemas | Why `siteSettings`, `offer`, `offerDeliverable`, `caseStudy`, `howIWorkContent`, and `founderProfile` exist — and why `frameworkItem`, `diagnosticStage`, and `libraryEntry` do not | I can explain which schema owns nav, offer deliverables, proof, process copy, and About content |
| [ ] | 6 | Trace founder publishing from `/admin` to public routes | How schema fields, publish state, query filtering, and public rendering work together | I can explain why draft content must never appear on public routes |
| [ ] | 7 | Review homepage data dependencies | Which parts are site settings, which come from offer/case study content, and which are presentation-only | I can point to every homepage section and explain its data source |
| [ ] | 8 | Stabilize public category clarity | What a first-time prospect must understand within seconds: category, productized offer, proof, and next step | I can test the site as a prospect and list any missing clarity without proposing out-of-scope modules |
| [ ] | 9 | Build or review the primary CTA system | Why Book a Digital Experience Diagnostic is the only primary commercial action and how it routes to Start Here | I can identify every page-level CTA and explain whether it supports or competes with the flagship offer |
| [ ] | 10 | Review navigation and information architecture | Why primary nav uses Digital Experience Diagnostic, Case Studies, How I Work, About, and Start Here | I can explain why Services, Portfolio, and generic Contact are out of target IA |
| [ ] | 11 | Build or review the productized offer page | How the eight deliverables, turnaround, price, and walkthrough call are presented as a bookable product | I can list all eight deliverables from memory and explain why this page is not a philosophy page |
| [ ] | 12 | Review case study rendering flow | How published case studies are fetched, structured, and rendered in narrative order | I can explain why the frontend must not decide if draft or sensitive content is public |
| [ ] | 13 | Review case study narrative rules | Why proof must follow Observation → Evidence → Decision → Implementation → Outcome | I can explain why implementation and outcome are required, not diagnosis alone |
| [ ] | 14 | Publish the Kwisoko case study | What client permission, anonymisation, and proof structure require before publication | I can explain what was redacted, what was built, and what changed |
| [ ] | 15 | Review How I Work page flow | How process explanation and the honest scope-boundary line work together | I can explain why this page is not a framework library or management consultancy explainer |
| [ ] | 16 | Review About page flow | Difference between investigation + implementation advantage and resume-style biography | I can explain both halves of the advantage without turning About into a CV |
| [ ] | 17 | Review Start Here / intake flow | Difference between offer recap, deliverables, turnaround, price, and external intake handoff | I can explain why Start Here is not a website-quote page |
| [ ] | 18 | Review offer positioning rules | Difference between flagship diagnostic, build/implementation follow-on, and retainer product | I can explain why the diagnostic is the entry product and the website is only a possible follow-on |
| [ ] | 19 | Review content query contract against route files | Which query function owns each public content fetch and why queries should not be scattered in components | I can find the query owner for site settings, offer, deliverables, case studies, How I Work, and About |
| [ ] | 20 | Review schema vs query separation | Difference between founder-editable schema definitions and public read/query logic | I can explain why publish rules and public fetches belong in query access patterns, not JSX |
| [ ] | 21 | Review editorial visual system | Why calm, evidence-led design is the default and how it supports Digital Experience Consultant positioning | I can explain what visual choices would accidentally make the site read like an agency portfolio |
| [ ] | 22 | Review Diagnostic vs Audit copy test allowance | Why homepage/product naming may iterate without reopening the frozen mother diagnostic | I can explain the difference between copy testing and structural repositioning |
| [ ] | 23 | Add or improve focused checks for content visibility rules | Which rules are high risk: publish state, missing slug handling, sensitive proof exclusion | I can explain what bug each check would catch before writing it |
| [ ] | 24 | Add or improve focused checks for critical user journeys | Which journeys matter most: first-visit clarity, offer comprehension, case study reading, Start Here conversion | I can explain the user journey each check protects |
| [ ] | 25 | Audit out-of-scope pressure points | Business Systems Consultant positioning, framework library, Diagnostic Library, client portal, CRM, payments, marketing automation | I can reject a tempting feature request by pointing to the scope and engineering design docs |
| [ ] | 26 | Update docs only when architecture or scope actually changes | Difference between documenting current behavior, copy iteration, and expanding scope | I can explain when to update Product Scope, SRS, Engineering Design, and AI Rules |
| [ ] | 27 | Run a complete "explain the system" review | Public website, productized offer, case studies, How I Work, About, Start Here, queries, source of truth | I can explain the current release architecture to another developer without opening the code |
| [ ] | 28 | Review Ongoing Care / Retainer scope before coding | Difference between standing retainer copy and full billing/service-desk workflow | I can explain why retainer is the approved next increment and what it must not become |
| [ ] | 29 | Plan retainer surfaces and cross-links | Where retainer copy should appear and how diagnostic → build → retainer progression is shown | I can map retainer content to the query functions and pages it needs |
| [ ] | 30 | Simulate a first-time SME owner journey | Referral arrival, homepage clarity, offer comprehension, case study proof, Start Here conversion | I can walk through the journey and explain where the site earns or loses trust |
| [ ] | 31 | Simulate a lodge-owner offer evaluation | "What do I get, by when, and for how much?" without a sales call | I can explain how the productized offer page answers those three questions directly |

---

## Phase 10 — Portfolio Studio (`docs/08-portfolio-studio-redesign-brief.md`)

Complete after Phases 0–9 are understood. Do not start Phase 10 until retainer/progression (R1–R5) is clear if those routes are already in code.

| Status | Step | Build Task | What I Must Understand Before Moving On | Proof of Mastery |
|---|---|---|---|---|
| [ ] | 32 | Read `08` and amended `02`/`04` flags | Why Phase 10 replaces Phase 3 **homepage intent** but not offer/Start Here | I can explain hybrid home vs pure portfolio vs old story scroll |
| [ ] | 33 | Design tokens + shell | Why one accent and one primary CTA style protect conversion | I can point to where `siteSettings.primaryCta` flows to the header |
| [ ] | 34 | Hybrid homepage + selected work | Why work-first still requires persistent Book Diagnostic | I can trace home data: featured case studies + offer teaser queries |
| [ ] | 35 | Editorial case study + diagnostic components | Why diagnostic category needs different UI than a build case | I can show Revenue Leak / journey components on Kwisoko |
| [ ] | 36 | Phase 10 exit gate | `08` acceptance criteria + performance on mobile | I can demo one-click diagnostic CTA and one editorial case study |

---

## Approved Next Increment Checklist

Use these only after the current release checklist is genuinely understood.

| Status | Step | Build Task | What I Must Understand Before Moving On | Proof of Mastery |
|---|---|---|---|---|
| [ ] | R1 | Add `retainerOffer` schema and types | Why retainer is separate from the flagship diagnostic offer | I can explain what retainer owns and what it does not own |
| [ ] | R2 | Build retainer surface or section | Why retainer must be visible as a standing product, not a buried mention | I can explain where retainer appears and why that placement was chosen |
| [ ] | R3 | Add diagnostic → build → retainer progression copy | Why progression messaging matters commercially | I can explain the client journey from first engagement to ongoing care |
| [ ] | R4 | Add founder publishing for retainer copy | Why retainer must be editable without code changes | I can explain how the founder updates retainer scope language safely |
| [ ] | R5 | Cross-link retainer from approved surfaces | Why cross-links must not invent billing or subscription flows | I can list every retainer cross-link and what action it does and does not trigger |

---

## Prompt For Implementing One Checklist Step

Paste this into an AI session when working through one row:

```text
Here are my project rules:
[paste docs/05-ai-rules.md]

Here is the relevant Engineering Design section:
[paste only the relevant section from docs/04-engineering-design.md]

Current checklist step:
[paste one row from docs/06-mastery-checklist.md]

Before writing any code:
1. Tell me which files you will change and why those files own this responsibility.
2. Describe the data flow through this step in plain English.
3. Tell me what business rules this step must enforce.
4. Tell me what mistakes are easy to make here.

Then implement ONLY this step, not the next one.

After the code:
1. Walk me through each section of the code and explain what it does.
2. Explain any new concept or pattern you used.
3. Tell me what would break if I changed the most important part.
4. Ask me one question to check I understood it.
```

---

## Mastery Standard

You are not done with a step when the code works. You are done when you can answer:

1. What problem does this solve?
2. Which file owns it and why?
3. What data enters and leaves?
4. What business rule is protected?
5. What is deliberately not included?
6. What would break if this were changed carelessly?

If you cannot answer those questions, leave the checkbox empty.

---

## Phased Build Order

For phase-level objectives, execution steps, exit gates, and keep-vs-replace guidance, use `docs/07-rebuild-roadmap.md`. This checklist provides step-level detail within each phase.

## Suggested Build Order

If you are unsure which checklist step to do next, follow this order:

1. Steps 1–6 — understand docs, positioning ladder, modules, folders, schemas, publishing flow
2. Steps 7–10 — homepage clarity, CTA system, and navigation
3. Steps 11–14 — productized offer page and Kwisoko case study
4. Steps 15–17 — How I Work, About, and Start Here
5. Steps 18–22 — offer rules, query contract, schema separation, visual system, copy-test allowance
6. Steps 23–27 — checks, out-of-scope audit, and full system explanation
7. Steps 28–31 and R1–R5 — Ongoing Care / Retainer increment and journey simulations

---

## Commercial Success Check

Before calling the current release "done," you should be able to say yes to all of the following:

- A prospect can understand the category within seconds on mobile.
- A prospect can answer what they get, by when, and for how much without a sales call.
- The flagship offer page lists all eight deliverables clearly.
- At least one real case study is public and includes implementation and outcome.
- The site does not read like a freelance portfolio or management consultancy.
- The founder can update offer and case study content without rebuilding templates.

---

*Derived from `docs/01-Business_Diagnostic_OS.md` v3 (frozen), 02 Product Scope, 03 SRS, 04 Engineering Design, and 05 AI Rules · The Website Guy · July 2026*
