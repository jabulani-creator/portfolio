import Section from "@/components/ui/Section";

type Props = {
  title: string;
  body: string;
};

export default function AdvantageBlock({ title, body }: Props) {
  return (
    <div className="rounded border border-cd-shade/30 p-6">
      <h2 className="text-xl font-semibold text-cd-txt">{title}</h2>
      <p className="mt-4 leading-relaxed text-cd-shade">{body}</p>
    </div>
  );
}
