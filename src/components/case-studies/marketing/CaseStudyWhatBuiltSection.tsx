import Image from "next/image";
import type CaseStudy from "../../../../types/CaseStudy";
import type { CaseStudyPageModel } from "../../../../types/CaseStudyV2";
import { CaseStudyMarketingSection } from "./caseStudyMarketingSection";

type Props = {
  caseStudy: CaseStudy;
  marketing: CaseStudyPageModel;
};

export default function CaseStudyWhatBuiltSection({ caseStudy, marketing }: Props) {
  const blocks = marketing.whatBuilt.filter((b) => b.title?.trim() && b.body?.trim());

  if (!blocks.length) {
    return null;
  }

  return (
    <CaseStudyMarketingSection
      id="cs-built"
      eyebrow="Product"
      title="What I built"
      intro="Selected product surfaces — how each part of the platform works in practice."
      variant="light"
    >
      <div className="space-y-16">
        {blocks.map((block, index) => {
          const imageSrc = block.imageUrl ?? (index === 0 ? caseStudy.heroImage : undefined);
          const imageAlt =
            block.imageAlt?.trim() ||
            block.caption?.trim() ||
            `${block.title} — ${caseStudy.title}`;
          return (
            <article
              key={`${block.title}-${index}`}
              className="grid gap-8 lg:grid-cols-2 lg:items-center"
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <h3 className="font-display text-xl font-bold text-cd-txt md:text-2xl">
                  {block.title}
                </h3>
                <p className="studio-body mt-4">{block.body}</p>
              </div>
              <figure
                className={`m-0 ${index % 2 === 1 ? "lg:order-1" : ""}`}
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-cd-border bg-cd-bck2">
                  {imageSrc ? (
                    <Image
                      src={imageSrc}
                      alt={imageAlt}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 100vw, 560px"
                    />
                  ) : (
                    <div className="flex h-full flex-col items-center justify-center gap-2 px-6 text-center text-xs text-cd-shade">
                      <span>Screenshot placeholder</span>
                      <span className="max-w-xs text-[11px] leading-relaxed">
                        In Studio: Story → What I built → this row → Screenshot
                      </span>
                    </div>
                  )}
                </div>
                {(block.caption?.trim()) && (
                  <figcaption className="mt-3 text-center text-xs text-cd-shade lg:text-left">
                    {block.caption.trim()}
                  </figcaption>
                )}
              </figure>
            </article>
          );
        })}
      </div>
    </CaseStudyMarketingSection>
  );
}
