import { getSiteUrl } from "@/lib/seo";
import type { OfferFaqItem } from "../../../types/Offer";

export function buildFaqPageJsonLd(faq: OfferFaqItem[]): object | null {
  const items = faq
    .filter((item) => item.question?.trim() && item.answer?.trim())
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

  if (!items.length) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question.trim(),
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer.trim(),
      },
    })),
  };
}

export type BreadcrumbItem = { name: string; path: string };

export function buildBreadcrumbListJsonLd(items: BreadcrumbItem[]): object {
  const base = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${base}${item.path.startsWith("/") ? item.path : `/${item.path}`}`,
    })),
  };
}

export function buildCaseStudyArticleJsonLd(input: {
  title: string;
  description: string;
  slug: string;
  imageUrl?: string;
  datePublished?: string;
  authorName?: string;
}): object {
  const base = getSiteUrl();
  const url = `${base}/case-studies/${input.slug}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      buildBreadcrumbListJsonLd([
        { name: "Home", path: "/" },
        { name: "Case studies", path: "/case-studies" },
        { name: input.title, path: `/case-studies/${input.slug}` },
      ]),
      {
        "@type": "Article",
        headline: input.title,
        description: input.description,
        url,
        mainEntityOfPage: url,
        ...(input.imageUrl ? { image: [input.imageUrl] } : {}),
        ...(input.datePublished
          ? { datePublished: input.datePublished }
          : {}),
        author: {
          "@type": "Person",
          name: input.authorName ?? "Jabulani Charinga",
        },
        publisher: {
          "@type": "Organization",
          name: "Jabulani",
          url: base,
        },
      },
    ],
  };
}

export function buildWebSiteJsonLd(siteName: string): object {
  const base = getSiteUrl();
  return {
    "@type": "WebSite",
    "@id": `${base}/#website`,
    url: base,
    name: siteName,
    publisher: { "@id": `${base}/#business` },
  };
}
