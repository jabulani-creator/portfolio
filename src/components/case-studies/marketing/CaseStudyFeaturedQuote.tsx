import Section from "@/components/ui/Section";

type Props = {
  quote: string;
  attribution?: string;
};

export default function CaseStudyFeaturedQuote({ quote, attribution }: Props) {
  return (
    <Section variant="default" className="section-rule !py-14 md:!py-20">
      <blockquote className="max-w-3xl rounded-xl border border-cd-border border-l-4 border-l-cd-txt bg-white p-8 md:p-10">
        <p className="text-lg leading-relaxed text-cd-txt md:text-xl">
          &ldquo;{quote}&rdquo;
        </p>
        {attribution && (
          <footer className="mt-6 text-sm text-cd-shade">— {attribution}</footer>
        )}
      </blockquote>
    </Section>
  );
}
