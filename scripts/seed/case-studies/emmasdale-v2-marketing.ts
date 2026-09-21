import { MIGRATION_WHAT_BUILT_SEEDS } from "../../case-study-migration-seeds";

/** Sanity-shaped v2 Story + Proof fields for Emmasdale (text only). */
export function buildEmmasdaleV2MarketingFields() {
  const whatBuiltRows = MIGRATION_WHAT_BUILT_SEEDS["emmasdale-sda-church"].map(
    (row) => ({
      _type: "object" as const,
      title: row.title,
      body: row.body,
    })
  );

  return {
    layout: "marketing" as const,
    useMarketingPageLayout: true,
    marketingPage: {
      roleLine:
        "Church digital platform · Strategy · UX · Full-stack development",
      heroContext:
        "Emmasdale SDA needed more than a new website. Information, member communication, and administration were spread across WhatsApp, Facebook, paper, and the church office.",
      opportunity:
        "Create one mobile-friendly platform connecting visitors, members, and leaders.",
    },
    heroSubtitle: "From scattered communication to one digital centre.",
    deliverables: ["Public website", "Member experiences", "Leadership platform"],
    challenge: {
      headline:
        "Information was everywhere — but there was no digital centre.",
      signals: [
        "Facebook",
        "WhatsApp",
        "Paper",
        "Personal phones",
        "Church office",
      ],
    },
    featuresSectionTitle: "One platform. Three experiences.",
    platformColumns: [
      {
        _type: "object" as const,
        label: "Public",
        items: [
          "Services",
          "Ministries",
          "Sermons",
          "Events",
          "Prayer & care",
        ],
      },
      {
        _type: "object" as const,
        label: "Members",
        items: ["Bulletin", "Prayer wall", "Devotions", "Resources", "Forms"],
      },
      {
        _type: "object" as const,
        label: "Leaders",
        items: ["Reports", "Care inbox", "Scheduling", "Administration"],
      },
    ],
    whatBuilt: whatBuiltRows,
    storyBeforeAfter: {
      headline: "Church operations before & after",
      items: [
        {
          _type: "object" as const,
          before: "Paper reports",
          after: "Digital reports",
        },
        {
          _type: "object" as const,
          before: "WhatsApp requests",
          after: "Structured requests",
        },
        {
          _type: "object" as const,
          before: "Scattered bulletins",
          after: "One bulletin",
        },
        {
          _type: "object" as const,
          before: "Private prayer messages",
          after: "Shared prayer wall",
        },
        {
          _type: "object" as const,
          before: "Office-dependent administration",
          after: "Mobile leadership dashboard",
        },
      ],
    },
    approach: {
      intro:
        "The interesting part wasn't building the website — it was figuring out what needed to be built.",
      steps: [
        {
          _type: "object" as const,
          name: "Investigate",
          detail: "Stakeholders · channels · workflows · journeys",
        },
        {
          _type: "object" as const,
          name: "Diagnose",
          detail: "Where information, participation, and admin broke down",
        },
        {
          _type: "object" as const,
          name: "Architect",
          detail: "Public + members + leaders on one platform",
        },
        {
          _type: "object" as const,
          name: "Build",
          detail: "Website · workflows · dashboard",
        },
        {
          _type: "object" as const,
          name: "Ship",
          detail: "Live platform at emmasdalesda.org",
        },
      ],
    },
    storyThreads: [
      {
        _type: "object" as const,
        title: "Quarterly reports",
        threadKey: "emmasdale-quarterly-reports",
        cardEyebrow: "Church admin",
        description:
          "Each quarter the clerk tracked down every departmental head, handed them physical forms, collected paper, and the pastor compiled everything before taking it to conference.",
        narrative: `When report season came around, the workflow was entirely physical. The church clerk had to find each departmental head, hand them paper forms, wait for them to fill in their section, collect the stack, and pass it to the pastor to compile. The pastor then carried the bundle to conference — or sent it through another manual handoff.

We rebuilt that as structured digital forms on the leadership dashboard: each head completes their section on a phone, submissions land in one place, and the pastor can download the full set and email it to conference. The product work was not a generic “reports page” — it was recreating the official forms faithfully enough that conference and church governance still trusted the output.`,
        buildChallenge:
          "Matching the real conference form layout and field order in the product, while keeping permissions tight so only the right leader edits their department’s section.",
        placement: "caseStudyAndHome",
        priority: 1,
        category: "administration",
        editorialMeta: { visibility: "public", importance: "primary" },
        solution: {
          decision:
            "Digitise the existing quarterly report workflow instead of inventing a new template leaders would reject.",
          implementation:
            "Role-based report forms in the dashboard; pastor export/download of the compiled package.",
          outcome:
            "Leaders submit from their phones; the pastor downloads one bundle and emails conference — no paper chase through the church office.",
        },
      },
      {
        _type: "object" as const,
        title: "Prayer wall & pastoral care",
        threadKey: "emmasdale-prayer-wall",
        cardEyebrow: "Pastoral care",
        description:
          "Prayer requests lived in private WhatsApp threads — easy to lose, hard to share appropriately, and risky for sensitive care.",
        narrative: `Members needed a way to ask for prayer without everything disappearing into a leader’s personal inbox. Some requests should be shared so the church can pray together; others must stay confidential between the member and pastoral staff.

We separated those modes in the product: a prayer wall for appropriate community prayer, and staff-only queues for sensitive care — with clear intake paths on the public site so people know what will be shared and what will not.`,
        buildChallenge:
          "Getting the visibility rules right with volunteer leaders — shared wall versus confidential inbox — without making the public forms feel bureaucratic.",
        placement: "caseStudyAndHome",
        priority: 2,
        category: "communication",
        editorialMeta: { visibility: "public", importance: "primary" },
        solution: {
          decision:
            "Two paths: shared prayer where appropriate, confidential care for sensitive cases.",
          implementation:
            "Prayer wall plus care inbox with role-based access on the dashboard.",
          outcome:
            "Members can pray together on the wall while sensitive pastoral work stays protected.",
        },
      },
      {
        _type: "object" as const,
        title: "Weekly bulletin",
        threadKey: "emmasdale-weekly-bulletin",
        cardEyebrow: "Member communication",
        description:
          "Sabbath information was split across PDF bulletins, WhatsApp forwards, and announcements that could contradict each other.",
        narrative: `Before the platform, “what’s happening this Sabbath” depended on which PDF arrived last or which WhatsApp group someone was in. Leaders repeated the same details from the pulpit because there was no single place members trusted mid-week.

The bulletin became the weekly home: one mobile-friendly link with service flow, announcements, and archive — produced through a dashboard workflow so publishing stays controlled.`,
        placement: "caseStudyMain",
        priority: 3,
        category: "communication",
        editorialMeta: { visibility: "public", importance: "primary" },
        solution: {
          decision: "One digital bulletin as the institutional weekly source of truth.",
          implementation:
            "Bulletin editor and approval flow on the dashboard; public bulletin route with archive.",
          outcome:
            "Members return to one link; fewer contradictions between channels.",
        },
      },
      {
        _type: "object" as const,
        title: "Digital forms instead of lists",
        threadKey: "emmasdale-digital-forms",
        cardEyebrow: "Operations",
        description:
          "Registrations and requests arrived as unstructured WhatsApp messages and paper slips with no shared record.",
        narrative: `Camp meeting sign-ups, document requests, and ministry forms often meant someone typing names into a personal chat or keeping a paper list only they could read. When that officer stepped down, the record left with them.

We moved repeatable intakes into structured digital forms with reference numbers and dashboard queues — so the church keeps an institutional record without forcing every conversation through the office in person.`,
        placement: "caseStudyMain",
        priority: 4,
        category: "process",
        editorialMeta: { visibility: "public", importance: "secondary" },
        solution: {
          decision:
            "Replace ad hoc lists with form templates tied to dashboard review queues.",
          implementation:
            "Public form journeys plus staff submission inbox and status handling.",
          outcome:
            "Requests are traceable; leaders hand off without losing context in private chats.",
        },
      },
    ],
    outcomes: [
      {
        _type: "object" as const,
        type: "shift",
        before: "Quarterly reports depended on paper and office visits.",
        after: "Department leaders submit from their phones; pastor exports for conference.",
      },
      {
        _type: "object" as const,
        type: "shift",
        before: "Prayer requests lived in private messages.",
        after:
          "Shared prayer wall where appropriate; confidential care stays staff-only.",
      },
      {
        _type: "object" as const,
        type: "shift",
        before:
          "Weekly information scattered across PDFs, WhatsApp, and announcements.",
        after: "One digital bulletin members can open all week.",
      },
      {
        _type: "object" as const,
        type: "highlight",
        label: "Platform shape",
        value:
          "Public witness + member rhythm + leadership admin on one owned platform",
      },
    ],
  };
}
