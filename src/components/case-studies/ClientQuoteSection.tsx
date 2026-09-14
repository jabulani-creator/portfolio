import Section from "@/components/ui/Section";

type Props = {
  quote: string;
  attribution?: string;
};

export default function ClientQuoteSection({ quote, attribution }: Props) {
  return (
    <Section variant="light" className="section-rule">
      <blockquote className="studio-card max-w-3xl border-l-4 border-cd-txt pl-8">
        <p className="text-xl font-medium leading-snug md:text-2xl">
          &ldquo;{quote}&rdquo;
        </p>
        {attribution && (
          <footer className="mt-6 font-mono text-xs text-cd-shade">
            — {attribution}
          </footer>
        )}
      </blockquote>
    </Section>
  );
}
