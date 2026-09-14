export type OfferDeliverable = {
  title: string;
  description: string;
  order: number;
};

export type OfferFaqItem = {
  question: string;
  answer: string;
  order?: number;
};

type Offer = {
  _id: string;
  title: string;
  slug: string;
  summary: string;
  turnaround: string;
  priceLabel: string;
  priceNote?: string;
  walkthroughCallDescription: string;
  processSummary?: string;
  ctaLabel: string;
  deliverables: OfferDeliverable[];
  faq?: OfferFaqItem[];
  seoTitle?: string;
  seoDescription?: string;
};

export default Offer;
