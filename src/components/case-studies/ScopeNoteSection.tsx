import Section from "@/components/ui/Section";

type Props = {
  note: string;
};

export default function ScopeNoteSection({ note }: Props) {
  const text = note.trim();
  if (!text) {
    return null;
  }

  return (
    <Section variant="default" className="py-12">
      <div className="studio-card border-l-4 border-l-cd-shade bg-cd-bck2">
        <p className="font-mono text-[10px] uppercase tracking-wide text-cd-shade">
          Scope & limits
        </p>
        <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-cd-shade">
          {text}
        </p>
      </div>
    </Section>
  );
}
