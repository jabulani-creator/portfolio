import Section from "@/components/ui/Section";
import { DeliverableTeaser } from "../../../types/CaseStudy";

type Props = {
  teaser: DeliverableTeaser;
};

export default function DeliverableTeaserSection({ teaser }: Props) {
  if (!teaser.href) {
    return null;
  }

  return (
    <Section variant="light" className="py-12">
      <div className="studio-card flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-wide text-cd-shade">
            From the deliverable
          </p>
          <p className="mt-2 font-semibold text-cd-txt">
            {teaser.label ?? "Download excerpt"}
          </p>
          {teaser.description && (
            <p className="mt-1 text-sm text-cd-shade">{teaser.description}</p>
          )}
        </div>
        <a
          href={teaser.href}
          target="_blank"
          rel="noopener noreferrer"
          className="pill-btn shrink-0 text-center"
        >
          {teaser.label ?? "Download excerpt"}
        </a>
      </div>
    </Section>
  );
}
