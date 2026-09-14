import Section from "@/components/ui/Section";
import { ContentBlock } from "../../../types/CaseStudy";

type Props = {
  blocks: ContentBlock[];
};

export default function CaseStudyContentBlocks({ blocks }: Props) {
  if (!blocks.length) {
    return null;
  }

  return (
    <Section variant="default" className="space-y-6 py-10">
      {blocks.map((block, index) => {
        if (block.blockType === "pullQuote") {
          return (
            <blockquote
              key={`quote-${index}`}
              className="studio-card border-l-4 border-cd-txt pl-6"
            >
              <p className="text-lg leading-relaxed text-cd-txt">
                &ldquo;{block.quote}&rdquo;
              </p>
              {block.attribution && (
                <footer className="mt-3 font-mono text-xs text-cd-shade">
                  — {block.attribution}
                </footer>
              )}
            </blockquote>
          );
        }

        return (
          <div
            key={`callout-${index}`}
            className="studio-card border-l-4 border-l-cd-cta bg-white"
          >
            <p className="font-mono text-[10px] uppercase tracking-wide text-cd-shade">
              Note
            </p>
            <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-cd-shade">
              {block.text}
            </p>
          </div>
        );
      })}
    </Section>
  );
}
