import project from "./project-schema";
import service from "./service_schema";
import skill from "./skills_schema";
import siteSettings from "./site-settings-schema";
import offer from "./offer-schema";
import caseStudy from "./case-study-schema";
import howIWorkContent from "./how-i-work-schema";
import founderProfile from "./founder-profile-schema";
import retainerOffer from "./retainer-offer-schema";

const schemas = [
  // Launch content model (v3)
  siteSettings,
  offer,
  caseStudy,
  howIWorkContent,
  founderProfile,
  retainerOffer,
  // Legacy portfolio model — kept until Phase 5 migration
  project,
  service,
  skill,
];

export default schemas;
