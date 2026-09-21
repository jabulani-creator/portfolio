import { buildFaqPageJsonLd } from "@/lib/seo/jsonLd";
import type { OfferFaqItem } from "../../../types/Offer";
import JsonLdScript from "./JsonLdScript";

type Props = { faq: OfferFaqItem[] };

export default function FaqPageJsonLd({ faq }: Props) {
  return <JsonLdScript data={buildFaqPageJsonLd(faq) as object | null} />;
}
