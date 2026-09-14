export type RetainerScopeItem = {
  title: string;
  description: string;
  order: number;
};

type RetainerOffer = {
  _id: string;
  title: string;
  summary: string;
  priceLabel?: string;
  scopeItems: RetainerScopeItem[];
  idealClientFit: string;
  followOnExplanation: string;
  progressionCopy?: string;
};

export default RetainerOffer;
