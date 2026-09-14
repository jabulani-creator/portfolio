import Section from "@/components/ui/Section";
import { ContextStat } from "../../../types/CaseStudy";

type Props = {
  stats: ContextStat[];
};

export default function ContextStatsSection({ stats }: Props) {
  const items = stats.filter((s) => s.label && s.value);
  if (!items.length) {
    return null;
  }

  return (
    <Section variant="light" className="py-10">
      <p className="studio-eyebrow">At a glance</p>
      <dl className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((stat) => (
          <div
            key={`${stat.label}-${stat.value}`}
            className="studio-card py-4"
          >
            <dt className="font-mono text-[10px] uppercase tracking-wide text-cd-shade">
              {stat.label}
            </dt>
            <dd className="mt-2 text-lg font-bold tracking-tight">
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
