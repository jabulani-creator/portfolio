import Section from "@/components/ui/Section";

type Props = {
  line: string;
};

export default function ScopeBoundary({ line }: Props) {
  return (
    <Section>
      <h2 className="text-2xl font-semibold text-cd-txt">Honest scope</h2>
      <blockquote className="mt-6 border-l-4 border-cd-cta pl-4 text-lg leading-relaxed text-cd-shade">
        {line}
      </blockquote>
    </Section>
  );
}
