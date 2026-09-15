/** Home “investigated business” cards — problem-first copy (brief §3). */
export type HomeCaseTeaser = {
  headline: string;
  badge: string;
  question?: string;
  tags?: string;
};

export const HOME_CASE_TEASERS: Record<string, HomeCaseTeaser> = {
  "cross-park": {
    headline: "Three revenue streams. One confusing digital journey.",
    badge: "DIAGNOSTIC",
    tags: "Day visits · Accommodation · Corporate events",
  },
  nikwisa: {
    headline: "A destination business with untapped digital demand.",
    badge: "DIAGNOSTIC",
    question:
      "Why isn't the existing digital presence doing more to turn interest into bookings?",
  },
  "emmasdale-sda-church": {
    headline: "Turning scattered church communication into a digital ecosystem.",
    badge: "DIGITAL PLATFORM",
    tags: "Website · Content · Communication · Operations",
  },
};

export const HOME_CASE_STUDY_ORDER = [
  "cross-park",
  "nikwisa",
  "emmasdale-sda-church",
] as const;

export function getHomeCaseTeaser(slug: string): HomeCaseTeaser | undefined {
  return HOME_CASE_TEASERS[slug];
}
