import { PortableTextBlock } from "sanity";

type FounderProfile = {
  _id: string;
  founderName?: string;
  portrait?: string;
  headline: string;
  investigationAdvantage: string;
  implementationAdvantage: string;
  credibilityCopy: string;
  body?: PortableTextBlock[];
};

export default FounderProfile;
