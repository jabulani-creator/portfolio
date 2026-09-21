import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  getAdjacentCaseStudies,
  getCaseStudyBySlug,
} from "@/lib/content/queries/caseStudies";
import { getSiteSettings } from "@/lib/content/queries/site";
import { getDefaultSiteShell } from "@/lib/content/defaults";
import CaseStudyMarketingView from "@/components/case-studies/CaseStudyMarketingView";
import CaseStudyPageJsonLd from "@/components/seo/CaseStudyPageJsonLd";
import PageBreadcrumbs from "@/components/seo/PageBreadcrumbs";
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
      path: `/case-studies/${slug}`,
      robots: { index: false, follow: false },
    });
  }

  const description =
    caseStudy.seoDescription?.trim() ||
    caseStudy.excerpt?.trim() ||
    caseStudy.oneLineThesis?.trim() ||
    "";

  return buildPageMetadata({
    title: caseStudy.seoTitle ?? caseStudy.title,
    description,
    path: `/case-studies/${slug}`,
    image: caseStudy.heroImage,
    openGraphType: "article",
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
  const description =
    caseStudy.seoDescription?.trim() ||
    caseStudy.excerpt?.trim() ||
    caseStudy.oneLineThesis?.trim() ||
    caseStudy.title;

  return (
    <>
      <div className="mx-auto w-full max-w-6xl px-4 pt-6 md:px-6">
        <PageBreadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Case studies", path: "/case-studies" },
            { name: caseStudy.title, path: `/case-studies/${slug}` },
          ]}
        />
      </div>
      <CaseStudyPageJsonLd
        title={caseStudy.title}
        description={description}
        slug={slug}
        imageUrl={caseStudy.heroImage}
        datePublished={caseStudy.publishedAt}
      />
      <CaseStudyMarketingView
      slug={slug}
      caseStudy={caseStudy}
      primaryCta={shell.primaryCta}
      nextCaseStudy={adjacent.next}
    />
    </>
  );
}
