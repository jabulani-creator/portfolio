import { PortableText, PortableTextComponents } from "@portabletext/react";
import { PortableTextBlock } from "sanity";

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="mb-4 leading-relaxed text-cd-shade">{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="mb-3 mt-6 text-xl font-semibold text-cd-txt">{children}</h2>
    ),
  },
};

type Props = {
  value: PortableTextBlock[];
};

export default function ProseContent({ value }: Props) {
  return (
    <div className="prose-cd">
      <PortableText value={value} components={components} />
    </div>
  );
}
