import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  getAdjacentCaseStudies,
  getCaseStudyBySlug,
} from "@/lib/content/queries/caseStudies";
import { getSiteSettings } from "@/lib/content/queries/site";
import { getDefaultSiteShell } from "@/lib/content/defaults";
import CaseStudyMarketingView from "@/components/case-studies/CaseStudyMarketingView";
import { buildPageMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = await getCaseStudyBySlug(slug);

  if (!caseStudy) {
    return buildPageMetadata({
      title: "Case Study Not Found",
      description: "This case study is not available.",
    });
  }

  return buildPageMetadata({
    title: caseStudy.seoTitle ?? caseStudy.title,
    description: caseStudy.seoDescription ?? caseStudy.excerpt,
    image: caseStudy.heroImage,
  });
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params;

  const [caseStudy, siteSettings, adjacent] = await Promise.all([
    getCaseStudyBySlug(slug),
    getSiteSettings(),
    getAdjacentCaseStudies(slug),
  ]);

  if (!caseStudy) {
    notFound();
  }

  const shell = siteSettings ?? getDefaultSiteShell();

  return (
    <CaseStudyMarketingView
      slug={slug}
      caseStudy={caseStudy}
      primaryCta={shell.primaryCta}
      nextCaseStudy={adjacent.next}
    />
  );
}
