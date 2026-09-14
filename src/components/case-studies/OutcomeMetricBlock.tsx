import Section from "@/components/ui/Section";
import { OutcomeMetric } from "../../../types/CaseStudy";
import ProjectedImpactPanel from "@/components/ui/ProjectedImpactPanel";

type Props = {
  metrics: OutcomeMetric[];
  tags?: string[];
};

function panelTitle(metrics: OutcomeMetric[]): string {
  const measured = metrics.filter((m) => m.isTarget === false);
  const projected = metrics.filter((m) => m.isTarget !== false);
  if (projected.length && measured.length) {
    return "Impact";
  }
  if (measured.length) {
    return "Measured outcomes";
  }
  return "Projected impact";
}

function panelBadge(metrics: OutcomeMetric[]): string {
  const measured = metrics.some((m) => m.isTarget === false);
  return measured ? "Post-implementation & projections" : "From journey audit";
}

export default function OutcomeMetricBlock({ metrics, tags }: Props) {
  const valid = metrics.filter((m) => m.label || m.value);
  if (!valid.length) {
    return null;
  }

  return (
    <Section variant="light" className="py-12">
      <ProjectedImpactPanel
        title={panelTitle(valid)}
        badge={panelBadge(valid)}
        metrics={valid.map((m) => ({
          label: m.label ?? "Metric",
          value: m.value ?? "—",
          isTarget: m.isTarget !== false,
        }))}
        tags={tags}
      />
    </Section>
  );
}
