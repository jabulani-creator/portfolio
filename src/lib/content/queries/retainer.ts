import { groq } from "next-sanity";
import { sanityClient } from "../client";
import RetainerOffer from "../../../../types/RetainerOffer";

const retainerProjection = groq`{
  _id,
  title,
  summary,
  priceLabel,
  scopeItems,
  idealClientFit,
  followOnExplanation,
  progressionCopy
}`;

export async function getRetainerOffer(): Promise<RetainerOffer | null> {
  return sanityClient.fetch(
    groq`*[_type == "retainerOffer" && isPublished == true] | order(_updatedAt desc)[0]${retainerProjection}`
  );
}
