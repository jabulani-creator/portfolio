type Metric = {
  label: string;
  value: string;
  isTarget?: boolean;
};

type Props = {
  title?: string;
  badge?: string;
  metrics?: Metric[];
  tags?: string[];
  tagsLabel?: string;
  caveat?: string;
};

export default function ProjectedImpactPanel({
  title = "Projected impact",
  badge = "Modeled from journey audit",
  metrics = [],
  tags = [],
  tagsLabel = "Friction points removed",
  caveat = "Figures shown are projections from the audit unless marked as measured results.",
}: Props) {
  return (
    <div className="studio-card shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-sm font-bold uppercase tracking-wide">{title}</h3>
        <span className="rounded-full border border-cd-border px-3 py-1 font-mono text-[10px] uppercase tracking-wide text-cd-shade">
          {badge}
        </span>
      </div>
      {metrics.length > 0 && (
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {metrics.map((m) => (
            <div key={`${m.label}-${m.value}`}>
              <p className="font-mono text-[10px] uppercase tracking-wider text-cd-shade">
                {m.isTarget ? "Projected" : "Measured"} · {m.label}
              </p>
              <p className="mt-2 text-3xl font-bold tracking-tight">{m.value}</p>
            </div>
          ))}
        </div>
      )}
      {tags.length > 0 && (
        <div className="mt-8 border-t border-cd-border pt-6">
          <p className="font-mono text-[10px] uppercase tracking-wider text-cd-shade">
            {tagsLabel}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-cd-border bg-cd-bck2 px-3 py-1 text-xs text-cd-shade"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
      <p className="mt-6 font-mono text-[10px] leading-relaxed text-cd-shade">
        {caveat}
      </p>
    </div>
  );
}
