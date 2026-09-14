import { groq } from "next-sanity";
import { sanityClient } from "../client";
import FounderProfile from "../../../../types/FounderProfile";

const founderProfileProjection = groq`{
  _id,
  founderName,
  "portrait": portrait.asset->url,
  headline,
  investigationAdvantage,
  implementationAdvantage,
  credibilityCopy,
  body
}`;

export async function getAboutContent(): Promise<FounderProfile | null> {
  return sanityClient.fetch(
    groq`*[_type == "founderProfile" && isPublished == true] | order(_updatedAt desc)[0]${founderProfileProjection}`
  );
}
