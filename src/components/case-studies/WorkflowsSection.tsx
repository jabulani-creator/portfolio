import Section from "@/components/ui/Section";
import { Workflow } from "../../../types/CaseStudy";

type Props = {
  workflows?: Workflow[];
};

export default function WorkflowsSection({ workflows }: Props) {
  const items = workflows?.filter((w) => w.title && w.steps?.length);
  if (!items?.length) {
    return null;
  }

  return (
    <Section variant="default">
      <p className="studio-eyebrow">How it works</p>
      <h2 className="mt-3 font-display text-2xl font-bold text-cd-txt">
        Workflows
      </h2>
      <div className="mt-10 grid gap-8 md:grid-cols-2">
        {items.slice(0, 2).map((workflow) => (
          <div key={workflow.title} className="rounded-sm border border-cd-border bg-white p-6">
            <h3 className="font-display text-lg font-bold text-cd-txt">
              {workflow.title}
            </h3>
            <ol className="mt-4 space-y-2">
              {workflow.steps?.map((step, i) => (
                <li key={step} className="flex gap-3 text-sm text-cd-shade">
                  <span className="font-mono text-xs text-cd-cta">
                    {i + 1}.
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </Section>
  );
}
