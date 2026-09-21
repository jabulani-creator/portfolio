import Section from "@/components/ui/Section";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function FullDiagnosticArchive({ children }: Props) {
  return (
    <Section variant="light" id="cs-full-diagnostic" className="section-rule border-t border-cd-border">
      <details className="group">
        <summary className="cursor-pointer list-none">
          <p className="studio-eyebrow">Behind the build</p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
            Want to see how the decisions were made?
          </h2>
          <p className="mt-3 max-w-xl text-sm text-cd-shade">
            Full investigation — context, journeys, evidence, diagnosis, and
            implementation detail for readers who want the forensic version.
          </p>
          <span className="mt-4 inline-block font-mono text-xs uppercase tracking-wide text-cd-txt underline-offset-4 group-open:hidden">
            View full investigation ↓
          </span>
          <span className="mt-4 hidden font-mono text-xs uppercase tracking-wide text-cd-shade group-open:inline-block">
            Collapse ↑
          </span>
        </summary>
        <div className="mt-12 border-t border-cd-border pt-8">{children}</div>
      </details>
    </Section>
  );
}
