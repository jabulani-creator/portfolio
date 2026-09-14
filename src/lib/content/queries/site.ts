import { groq } from "next-sanity";
import { sanityClient } from "../client";
import SiteSettings from "../../../../types/SiteSettings";

const siteSettingsProjection = groq`{
  _id,
  siteTitle,
  categoryHeadline,
  homepageVariant,
  navigation,
  primaryCta,
  contact,
  footerCopy,
  localTrustLine,
  operatingSince,
  seoDefaults
}`;

export async function getSiteSettings(): Promise<SiteSettings | null> {
  return sanityClient.fetch(
    groq`*[_type == "siteSettings" && isPublished == true] | order(_updatedAt desc)[0]${siteSettingsProjection}`
  );
}
