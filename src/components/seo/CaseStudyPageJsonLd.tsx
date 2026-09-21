import { buildCaseStudyArticleJsonLd } from "@/lib/seo/jsonLd";
import JsonLdScript from "./JsonLdScript";

type Props = {
  title: string;
  description: string;
  slug: string;
  imageUrl?: string;
  datePublished?: string;
};

export default function CaseStudyPageJsonLd({
  title,
  description,
  slug,
  imageUrl,
  datePublished,
}: Props) {
  const data = buildCaseStudyArticleJsonLd({
    title,
    description,
    slug,
    imageUrl,
    datePublished,
  });
  return <JsonLdScript data={data} />;
}
