import { groq } from "next-sanity";
import { sanityClient } from "../client";
import HowIWorkContent from "../../../../types/HowIWork";

const howIWorkProjection = groq`{
  _id,
  intro,
  processSteps,
  scopeBoundaryLine,
  buildFollowOnSummary
}`;

export async function getHowIWorkContent(): Promise<HowIWorkContent | null> {
  return sanityClient.fetch(
    groq`*[_type == "howIWorkContent" && isPublished == true] | order(_updatedAt desc)[0]${howIWorkProjection}`
  );
}
