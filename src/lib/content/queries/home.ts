import SiteSettings from "../../../../types/SiteSettings";
import Offer from "../../../../types/Offer";
import CaseStudy from "../../../../types/CaseStudy";
import { getSiteSettings } from "./site";
import { getOffer } from "./offer";
import { getCaseStudies, getFeaturedCaseStudies } from "./caseStudies";

export type HomePageContent = {
  siteSettings: SiteSettings | null;
  offer: Offer | null;
  featuredCaseStudy: CaseStudy | null;
  caseStudies: CaseStudy[];
};

export async function getHomePageContent(): Promise<HomePageContent> {
  const [siteSettings, offer, caseStudies, featuredCaseStudies] =
    await Promise.all([
      getSiteSettings(),
      getOffer(),
      getCaseStudies(),
      getFeaturedCaseStudies(),
    ]);

  return {
    siteSettings,
    offer,
    featuredCaseStudy: featuredCaseStudies[0] ?? null,
    caseStudies: featuredCaseStudies.length > 0 ? featuredCaseStudies : caseStudies,
  };
}
