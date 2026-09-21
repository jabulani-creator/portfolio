import { groq } from "next-sanity";
import { sanityClient } from "../client";
import CaseStudy from "../../../../types/CaseStudy";
import { getDefaultCaseStudies } from "../defaults";
import {
  filterPublicCaseStudies,
  isPublicCaseStudySlug,
} from "../caseStudyVisibility";
import {
  getDeliverableTeaserHref,
  getOutcomeMetrics,
  getProblems,
} from "../../../../types/CaseStudy";
import { mergeV2OntoCaseStudy } from "../toCaseStudyPageModel";

const caseStudyV2Projection = groq`
  layout,
  heroSubtitle,
  deliverables,
  challenge,
  featuresSectionTitle,
  platformColumns,
  whatBuilt[]{
    title,
    body,
    caption,
    "imageUrl": image.asset->url,
    "imageAlt": image.alt
  },
  storyBeforeAfter,
  approach,
  storyThreads[]{
    title,
    threadKey,
    description,
    narrative,
    buildChallenge,
    placement,
    cardEyebrow,
    category,
    priority,
    editorialMeta,
    "cardImageUrl": cardImage.asset->url,
    "cardImageAlt": cardImage.alt,
    solution{
      decision,
      implementation,
      features,
      outcome
    }
  },
  proofMedia[]{
    caption,
    kind,
    "url": image.asset->url,
    "alt": image.alt
  },
  outcomes,
  deepDive
`;

const caseStudyProjection = groq`{
  _id,
  title,
  "slug": slug.current,
  clientLabel,
  contextSummary,
  excerpt,
  observation,
  evidence,
  decision,
  implementation,
  outcome,
  showOnWebsite,
  isPublished,
  featured,
  category,
  oneLineThesis,
  role,
  context,
  period,
  projectTags,
  customerJourney,
  projectType,
  strategicThesis,
  problems,
  problemSolutionMaps,
  businessContext,
  investigation,
  workflows,
  evidenceRecords,
  testimonial,
  revenueLeaks,
  outcomeHighlight,
  outcomeMetrics,
  outcomeMetric,
  clientQuote,
  clientQuoteAttribution,
  liveUrl,
  engagementDuration,
  engagementType,
  contextStats,
  scopeNote,
  evidenceMedia[]{
    caption,
    sectionAnchor,
    kind,
    "url": image.asset->url,
    "alt": image.alt
  },
  deliverableTeaser{
    label,
    description,
    externalUrl,
    "fileUrl": file.asset->url
  },
  techStack,
  beforeAfter{
    headline,
    items[]{
      label,
      before,
      after
    }
  },
  closingBridge,
  contentBlocks[]{
    blockType,
    placement,
    text,
    quote,
    attribution
  },
  "heroImage": heroImage.asset->url,
  "heroImageAlt": heroImage.alt,
  seoTitle,
  seoDescription,
  publishedAt,
  useMarketingPageLayout,
  marketingPage{
    heroSubtitle,
    roleLine,
    heroContext,
    deliverables,
    problemTitle,
    problemSignals,
    opportunity,
    featuresSectionTitle,
    features[]{
      label,
      items
    },
    buildSections[]{
      title,
      body,
      "imageUrl": image.asset->url,
      "imageAlt": image.alt
    },
    beforeItems,
    afterItems,
    outcomeShifts[]{
      before,
      after
    },
    approachIntro,
    approachSteps[]{
      name,
      detail
    }
  },
  ${caseStudyV2Projection}
}`;

function normalizeCaseStudy(study: CaseStudy): CaseStudy {
  const outcomeMetrics = getOutcomeMetrics(study);
  const teaserHref = getDeliverableTeaserHref(study.deliverableTeaser);
  const deliverableTeaser =
    study.deliverableTeaser && teaserHref
      ? {
          label: study.deliverableTeaser.label,
          description: study.deliverableTeaser.description,
          href: teaserHref,
        }
      : undefined;

  const problemsNormalized = getProblems(study);

  const merged = mergeV2OntoCaseStudy({
    ...study,
    problems: problemsNormalized.length ? problemsNormalized : undefined,
    outcomeMetrics: outcomeMetrics.length ? outcomeMetrics : undefined,
    deliverableTeaser,
    outcomeHighlight:
      study.outcomeHighlight ||
      study.outcomes?.find((o) => o.type === "highlight")?.value,
  });

  return merged;
}

function normalizeList(studies: CaseStudy[]): CaseStudy[] {
  return studies.map(normalizeCaseStudy);
}

export async function getCaseStudies(): Promise<CaseStudy[]> {
  const fromCms: CaseStudy[] = await sanityClient.fetch(
    groq`*[_type == "caseStudy" && (showOnWebsite == true || isPublished == true)] | order(featured desc, publishedAt desc)${caseStudyProjection}`
  );
  if (fromCms.length > 0) {
    return normalizeList(filterPublicCaseStudies(fromCms));
  }
  return normalizeList(filterPublicCaseStudies(getDefaultCaseStudies()));
}

export async function getFeaturedCaseStudies(): Promise<CaseStudy[]> {
  const all = await getCaseStudies();
  const featured = all.filter((s) => s.featured);
  if (featured.length > 0) {
    return featured;
  }
  return all.slice(0, 4);
}

export async function getCaseStudyBySlug(
  slug: string
): Promise<CaseStudy | null> {
  if (!isPublicCaseStudySlug(slug)) {
    return null;
  }
  const fromCms = await sanityClient.fetch(
    groq`*[_type == "caseStudy" && (showOnWebsite == true || isPublished == true) && slug.current == $slug][0]${caseStudyProjection}`,
    { slug }
  );
  if (fromCms) {
    return normalizeCaseStudy(fromCms);
  }
  const fallback = getDefaultCaseStudies().find((s) => s.slug === slug);
  return fallback ? normalizeCaseStudy(fallback) : null;
}

export async function getAdjacentCaseStudies(
  slug: string
): Promise<{ previous: CaseStudy | null; next: CaseStudy | null }> {
  const studies = await getCaseStudies();
  const index = studies.findIndex((s) => s.slug === slug);
  if (index === -1) {
    return { previous: null, next: null };
  }
  return {
    previous: index > 0 ? studies[index - 1] : null,
    next: index < studies.length - 1 ? studies[index + 1] : null,
  };
}
