import { groq } from "next-sanity";
import { sanityClient } from "../client";
import Offer, { OfferDeliverable } from "../../../../types/Offer";

const offerProjection = groq`{
  _id,
  title,
  "slug": slug.current,
  summary,
  turnaround,
  priceLabel,
  priceNote,
  walkthroughCallDescription,
  processSummary,
  ctaLabel,
  deliverables,
  faq,
  seoTitle,
  seoDescription
}`;

export async function getOffer(
  slug = "digital-experience-diagnostic"
): Promise<Offer | null> {
  return sanityClient.fetch(
    groq`*[_type == "offer" && isPublished == true && slug.current == $slug][0]${offerProjection}`,
    { slug }
  );
}

export async function getOfferDeliverables(
  slug = "digital-experience-diagnostic"
): Promise<OfferDeliverable[]> {
  const offer = await getOffer(slug);
  if (!offer?.deliverables?.length) return [];

  return [...offer.deliverables].sort((a, b) => a.order - b.order);
}
