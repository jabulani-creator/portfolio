import type { CaseStudyWhatBuiltSection } from "../types/CaseStudyV2";

/** Optional starter rows when running migrate — not used on the public site. */
export const MIGRATION_WHAT_BUILT_SEEDS: Record<string, CaseStudyWhatBuiltSection[]> = {
  "emmasdale-sda-church": [
    {
      title: "Digital bulletin",
      body: "Weekly church information in one mobile-friendly bulletin instead of scattered PDFs and WhatsApp forwards.",
    },
    {
      title: "Prayer wall",
      body: "Shared prayer requests where appropriate, while sensitive pastoral care stays in confidential workflows.",
    },
    {
      title: "Daily with God",
      body: "Devotional content members can return to through the week — not only on Sabbath.",
    },
    {
      title: "Member resources & forms",
      body: "Bulletins, resources, and structured forms in one member area instead of ad hoc messages.",
    },
    {
      title: "Quarterly reports",
      body: "Department leaders submit reports from their phones instead of paper and office-only handoffs.",
    },
    {
      title: "Care inbox & leadership workflows",
      body: "Role-based dashboard for care, scheduling, and administration — built for volunteers on mobile.",
    },
    {
      title: "Public visitor hub",
      body: "Services, ministries, events, sermons, and clear paths to visit, contact, and get care.",
    },
  ],
  nikwisa: [
    {
      title: "Hub-first discovery",
      body: "Content and category hubs designed for search and browse — not endless flat lists.",
    },
    {
      title: "Structured place pages",
      body: "PAC, pricing, conditions, and clear next steps on place and activity views.",
    },
    {
      title: "Conversion path",
      body: "WhatsApp enquiry as the primary action — with crawl hygiene and real 404 handling.",
    },
  ],
};
