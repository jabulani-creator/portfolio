import { emmasdaleEvidence } from "../../../src/lib/content/caseStudyEvidenceContent";

/**
 * Emmasdale SDA Church — Sanity caseStudy document (text only).
 * Source: client diagnostic (June 2026) + member guide + emmasdalesda.org
 * Images: add hero + evidenceMedia in Studio after seed.
 */

export const EMMASDALE_CASE_STUDY_ID = "caseStudy-emmasdale-sda-church";

export function buildEmmasdaleCaseStudyDocument(options?: {
  isPublished?: boolean;
}) {
  const isPublished = options?.isPublished ?? false;

  return {
    _id: EMMASDALE_CASE_STUDY_ID,
    _type: "caseStudy" as const,
    title: "Emmasdale SDA Church",
    slug: { _type: "slug" as const, current: "emmasdale-sda-church" },
    isPublished,
    showOnWebsite: isPublished,
    featured: true,
    category: "software",
    ...emmasdaleEvidence,
    oneLineThesis:
      "Church on the phone — bulletin and discipleship for members, shared prayer on the wall, and leadership work (reports, forms, care) without paper runs to the office.",
    role: "Strategy · UX · Full-stack development",
    context: "Church digital platform (public site + staff dashboard)",
    period: "2025–2026",
    projectTags: "Digital platform · Ministry operations · Role-based admin",
    clientLabel: "Emmasdale Seventh-day Adventist Church",
    contextSummary: "Faith community · Lusaka",
    excerpt:
      "Emmasdale needed more than a website: leaders submitting quarterly reports from their phones, digital forms instead of WhatsApp lists, a prayer wall where members pray with one another, and an extended church so people stay connected between Sabbaths — not only inside the building.",
    liveUrl: "https://emmasdalesda.org/",
    engagementDuration: "Platform build · ongoing content & ops adoption",
    engagementType: "client",
    contextStats: [
      { label: "Public site", value: "emmasdalesda.org" },
      { label: "Social reach (Facebook)", value: "~5,815 followers" },
      { label: "Platform shape", value: "Public site + staff dashboard" },
    ],
    customerJourney:
      "Discover → Plan a visit → Worship & learn → Pray & request care → Join a ministry",
    observation: `Emmasdale SDA Church has an active congregation, visible ministries, and meaningful online reach (~5,815 Facebook followers). The historical problem was not a lack of ministry — it was the absence of one digital environment connecting public information, spiritual participation, member requests, and leadership administration.

Visitors and members pieced together service times, programmes, sermons, giving, and care from chat threads, posters, and announcements. Leadership carried parallel work on paper forms and personal inboxes, with no shared institutional record when officers changed.`,
    evidence: `June 2026 business diagnostic aligned with the implemented product, original SRS, and operating model: stakeholder interviews, social and WhatsApp workflow review, care-path mapping, SDA/church benchmarks, and audit of live public routes and staff dashboard domains.

Evidence confirmed the product is shaped as church digital operations — content, events, ministries, care, bulletins, forms, quarterly reports, facility scheduling, Camp Meeting, church-document requests, and role-based access — not a static brochure.`,
    decision: `Two connected sides, not a page collection:

Side one — public witness, weekly rhythm, and participation: official service discovery, Plan Your Visit, ministries, events, sermons and articles, digital bulletin with archive, Daily with God, Sabbath School, prayer wall, care and document intake, giving guidance.

Side two — leadership and administration: role-aware dashboard for bulletin publishing, content and event approval, care assignment, digital forms, quarterly departmental reports, facility scheduler, Camp Meeting and pledges, church-document issuance, and scoped ministry administration.

Publishing stays controlled; confidential prayer and counselling remain staff-only.`,
    implementation: `Public layer at emmasdalesda.org: visitor and member journeys, bulletin workflow output, devotionals and Sabbath School surfaces, prayer and care forms, church-family submissions, document requests with reference tracking, and giving instructions.

Staff dashboard: bulletin editor, announcements and sermons, event and ministry management, care inbox, forms and submissions, quarterly reports, facility and resource scheduler, Camp Meeting administration, church-document review and PDF issuance, user and role administration — with permissions that mirror church and ministry structure.`,
    outcome: `The platform already solves substantial parts of the original diagnosis: scattered communication, unclear Sabbath information, spiritual content without a permanent home, requests lost in informal channels, paper-dependent reporting, scheduling collisions, and manual document administration — when leaders adopt it as normal practice.

The next challenge is governance and rhythm: named content owners, care response expectations, scheduler adoption, and honest scope boundaries (finance ledger, payment processing, and financial requisitions remain future modules — dashboard Requisitions are church-document requests).`,
    scopeNote: `Implemented: public site, digital bulletin, Daily with God, Sabbath School surfaces, prayer and care intake, digital forms, quarterly reports, facility scheduler, Camp Meeting and pledges, church-document requests, role-based dashboard. Future scope: full treasury ledger, payment processing, financial requisition chains, membership register, automated WhatsApp broadcasting, broad attendance analytics. Adoption and content ownership remain ongoing.`,
    outcomeHighlight:
      "Paper and office-bound admin → phone-friendly reports, forms, prayer wall, and weekly rhythm on one platform",
    outcomeMetrics: [
      {
        label: "Leadership admin",
        value: "Quarterly reports & forms from a phone",
        isTarget: false,
      },
      {
        label: "Member connection",
        value: "Bulletin, devotionals, prayer wall — extended church",
        isTarget: false,
      },
    ],
    clientQuote:
      "For the first time we can point members and visitors to one place — this Sabbath, prayer, ministries, and how to get help — instead of five different WhatsApp groups.",
    clientQuoteAttribution: "Church leadership (name on request)",
    techStack: [
      "Next.js",
      "Node.js",
      "MongoDB",
      "Role-based admin",
      "Figma",
    ],
    beforeAfter: {
      headline: "Church operations before & after",
      items: [
        {
          label: "Weekly information",
          before:
            "PDF bulletins, WhatsApp posters, and pulpit repeats — easy to contradict or lose.",
          after:
            "One bulletin link with Sabbath School, divine service, announcements, prayer, and archive.",
        },
        {
          label: "Prayer & pastoral care",
          before:
            "Requests scattered across leaders' personal messages.",
          after:
            "Public, anonymous, or confidential modes with leadership queues and follow-up.",
        },
        {
          label: "Institutional memory",
          before:
            "Records in clerks' files, private chats, and officers' phones.",
          after:
            "Bulletins, submissions, approvals, reports, and care queues retained in the platform.",
        },
      ],
    },
    closingBridge:
      "If your organisation still runs on posters and personal inboxes, the friction is structural — a platform can unify public clarity and leadership workflow without replacing human judgment.",
    contentBlocks: [
      {
        blockType: "callout",
        placement: "scope",
        text: "Dashboard “Requisitions” manages official church-document requests — not financial expense approval. Giving pages stay informational until treasury workflows are confirmed.",
      },
    ],
    publishedAt: new Date().toISOString(),
  };
}
