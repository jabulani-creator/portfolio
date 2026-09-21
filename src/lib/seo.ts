import type { Metadata } from "next";

const SITE_NAME = "Jabulani";

type PageMetadataInput = {
  title: string;
  description: string;
  image?: string;
};

export function buildPageMetadata({
  title,
  description,
  image,
}: PageMetadataInput): Metadata {
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} — ${SITE_NAME}`;

  return {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      siteName: SITE_NAME,
      type: "website",
      ...(image ? { images: [{ url: image }] } : {}),
    },
  };
}

export function buildSiteMetadata(
  seoDefaults?: { title?: string; description?: string }
): Metadata {
  return buildPageMetadata({
    title:
      seoDefaults?.title ??
      "Digital Experience Consultant",
    description:
      seoDefaults?.description ??
      "Productized digital experience diagnostics for businesses that need clarity before they build.",
  });
}
