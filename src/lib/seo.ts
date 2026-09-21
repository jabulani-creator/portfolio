import type { Metadata } from "next";

const SITE_NAME = "Jabulani";
const DEFAULT_SITE_URL = "https://jabulani.digital";
/** Default social preview — public/og-image.png (1200×630). */
export const DEFAULT_OG_IMAGE_PATH = "/og-image.png";

export function getSiteUrl(): string {
  const url = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!url) return DEFAULT_SITE_URL;
  return url.replace(/\/$/, "");
}

export function getMetadataBase(): URL {
  return new URL(`${getSiteUrl()}/`);
}

type PageMetadataInput = {
  title: string;
  description: string;
  /** Site path for canonical, e.g. `/about` or `/case-studies/foo`. Omit for `/`. */
  path?: string;
  image?: string;
  openGraphType?: "website" | "article";
  robots?: Metadata["robots"];
};

function resolveOgImages(image?: string): NonNullable<Metadata["openGraph"]>["images"] {
  if (image?.trim()) {
    return [{ url: image.trim() }];
  }
  return [
    {
      url: DEFAULT_OG_IMAGE_PATH,
      width: 1200,
      height: 630,
      alt: "Jabulani — Get found. Get understood. Serve customers better.",
    },
  ];
}

function twitterImageUrls(
  ogImages: NonNullable<Metadata["openGraph"]>["images"]
): string[] | undefined {
  if (!ogImages) return undefined;
  const list = Array.isArray(ogImages) ? ogImages : [ogImages];
  return list
    .map((img) => {
      if (typeof img === "string") return img;
      if (img instanceof URL) return img.toString();
      return img.url;
    })
    .filter((url): url is string => Boolean(url));
}

export function buildPageMetadata({
  title,
  description,
  path = "/",
  image,
  openGraphType = "website",
  robots,
}: PageMetadataInput): Metadata {
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} — ${SITE_NAME}`;
  const canonicalPath = path.startsWith("/") ? path : `/${path}`;
  const ogImages = resolveOgImages(image);
  const trimmedDescription = description.trim().slice(0, 160);

  return {
    title: fullTitle,
    description: trimmedDescription,
    ...(robots ? { robots } : {}),
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: fullTitle,
      description: trimmedDescription,
      siteName: SITE_NAME,
      type: openGraphType,
      url: canonicalPath,
      images: ogImages,
      locale: "en_ZM",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: trimmedDescription,
      images: twitterImageUrls(ogImages),
    },
  };
}

export function buildSiteMetadata(
  seoDefaults?: { title?: string; description?: string }
): Metadata {
  return {
    metadataBase: getMetadataBase(),
    icons: {
      icon: [
        { url: "/favicon.ico" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      ],
      apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    },
    manifest: "/site.webmanifest",
    ...buildPageMetadata({
      title:
        seoDefaults?.title ??
        "Get found. Get understood. Serve customers better",
      description:
        seoDefaults?.description ??
        "Websites, digital systems, and automation for Zambian businesses and organisations — diagnostics, platforms, and customer experience.",
      path: "/",
    }),
  };
}

export { SITE_NAME };
