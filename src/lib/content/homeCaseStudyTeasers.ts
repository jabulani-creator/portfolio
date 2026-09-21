/** Home case study copy — visual proof + selected work sections. */
export type HomeCaseTeaser = {
  visualTitle: string;
  cardLine: string;
  selectedHeadline: string;
  selectedBody: string;
  roleLine: string;
  headline: string;
  badge: string;
};

export const HOME_CASE_TEASERS: Record<string, HomeCaseTeaser> = {
  "emmasdale-sda-church": {
    visualTitle: "Church digital platform",
    cardLine:
      "Public website, member experiences, and leadership workflows in one platform.",
    selectedHeadline: "From scattered communication to one digital centre.",
    selectedBody:
      "Public website, member experiences, and leadership workflows brought into one digital platform.",
    roleLine: "Strategy · UX · Full-stack development",
    headline: "Turning scattered church communication into a digital ecosystem.",
    badge: "PLATFORM",
  },
  nikwisa: {
    visualTitle: "Discovery & marketplace platform",
    cardLine: "Connecting people with places, activities, and businesses.",
    selectedHeadline: "Building discovery infrastructure for Zambia.",
    selectedBody:
      "A platform connecting people with places, activities, and businesses — with clearer paths to enquiry.",
    roleLine: "Product strategy · UX · Full-stack development",
    headline: "A destination business with untapped digital demand.",
    badge: "PLATFORM",
  },
};

export const HOME_CASE_STUDY_ORDER = ["emmasdale-sda-church", "nikwisa"] as const;

export function getHomeCaseTeaser(slug: string): HomeCaseTeaser | undefined {
  return HOME_CASE_TEASERS[slug];
}
