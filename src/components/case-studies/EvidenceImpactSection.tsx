import Section from "@/components/ui/Section";
import {
  EvidenceRecord,
  getPublicEvidenceRecords,
  OutcomeMetric,
} from "../../../types/CaseStudy";
import CaseStudy from "../../../types/CaseStudy";

type Props = {
  caseStudy: Pick<CaseStudy, "evidenceRecords">;
  metrics: OutcomeMetric[];
  sectionId?: string;
};

function EvidenceRecordItem({ record }: { record: EvidenceRecord }) {
  return (
    <div className="rounded-sm border border-cd-border bg-white p-6">
      {record.type && (
        <p className="font-mono text-[10px] uppercase tracking-wide text-cd-shade">
          {record.type}
        </p>
      )}
      {record.title && (
        <h3 className="mt-2 font-display text-lg font-bold text-cd-txt">
          {record.title}
        </h3>
      )}
      {record.value && (
        <p className="mt-2 font-display text-xl text-cd-cta">{record.value}</p>
      )}
      {record.description && (
        <p className="mt-2 text-sm text-cd-shade">{record.description}</p>
      )}
      {(record.source || record.date) && (
        <p className="mt-3 font-mono text-[10px] text-cd-shade">
          {[record.source, record.date].filter(Boolean).join(" · ")}
        </p>
      )}
    </div>
  );
}

export default function EvidenceImpactSection({
  caseStudy,
  metrics,
  sectionId = "cs-impact",
}: Props) {
  const records = getPublicEvidenceRecords(caseStudy).filter(
    (r) => (r.importance ?? "primary") === "primary"
  );
  const secondaryRecords = getPublicEvidenceRecords(caseStudy).filter(
    (r) => r.importance === "secondary"
  );

  if (!metrics.length && !records.length && !secondaryRecords.length) {
    return null;
  }

  return (
    <Section variant="light" id={sectionId}>
      <p className="studio-eyebrow">Proof</p>
      <h2 className="mt-3 font-display text-3xl font-bold text-cd-txt">
        Evidence & impact
      </h2>
      {metrics.length > 0 && (
        <dl className="mt-10 grid gap-6 sm:grid-cols-2">
          {metrics.map((m) => (
            <div key={`${m.label}-${m.value}`} className="border-l-2 border-cd-cta pl-4">
              <dt className="font-mono text-[10px] uppercase tracking-wide text-cd-shade">
                {m.label}
                {m.isTarget ? " (target)" : ""}
              </dt>
              <dd className="mt-1 font-display text-xl font-bold text-cd-txt">
                {m.value}
              </dd>
            </div>
          ))}
        </dl>
      )}
      {records.length > 0 && (
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {records.map((record) => (
            <EvidenceRecordItem key={record.title ?? record.value} record={record} />
          ))}
        </div>
      )}
      {secondaryRecords.length > 0 && (
        <ul className="mt-8 space-y-2 text-sm text-cd-shade">
          {secondaryRecords.map((r) => (
            <li key={r.title ?? r.description}>
              {r.title && <span className="font-semibold text-cd-txt">{r.title}: </span>}
              {r.description ?? r.value}
            </li>
          ))}
        </ul>
      )}
    </Section>
  );
}
