export type CaseStudyAtAGlance = {
  headline: string;
  problem: string;
  built: string;
  roleLine?: string;
  columns?: { label: string; items: string }[];
};

export const CASE_STUDY_AT_A_GLANCE: Record<string, CaseStudyAtAGlance> = {
  "emmasdale-sda-church": {
    headline: "From scattered communication to one digital centre.",
    problem:
      "Information and administration were spread across WhatsApp, paper, Facebook, and the church office.",
    built:
      "A digital platform connecting public information, member experiences, and leadership workflows.",
    roleLine: "Strategy · UX · Full-stack development",
    columns: [
      { label: "Public", items: "Website · services · ministries · prayer" },
      { label: "Members", items: "Bulletin · forms · care · Sabbath School" },
      { label: "Leaders", items: "Reports · scheduling · administration" },
    ],
  },
  nikwisa: {
    headline: "From directory to decide-and-act platform.",
    problem:
      "Thin place data and unclear paths from discovery to enquiry weakened trust and conversion.",
    built:
      "Hub-first discovery, structured place pages, and clearer paths to WhatsApp enquiry.",
    roleLine: "Product strategy · SEO architecture · Development",
    columns: [
      { label: "Discover", items: "Content · hubs · search" },
      { label: "Evaluate", items: "PAC · price · conditions" },
      { label: "Act", items: "View place · WhatsApp enquire" },
    ],
  },
};

export function getCaseStudyAtAGlance(slug: string): CaseStudyAtAGlance | undefined {
  return CASE_STUDY_AT_A_GLANCE[slug];
}
