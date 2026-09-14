import Section from "@/components/ui/Section";

type Props = {
  text: string;
};

export default function ClosingBridgeSection({ text }: Props) {
  const body = text.trim();
  if (!body) {
    return null;
  }

  return (
    <Section variant="default" className="py-12">
      <p className="max-w-2xl text-lg font-medium leading-relaxed text-cd-txt md:text-xl">
        {body}
      </p>
    </Section>
  );
}
