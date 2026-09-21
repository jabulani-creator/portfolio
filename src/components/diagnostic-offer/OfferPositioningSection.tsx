import Section from "@/components/ui/Section";

export default function OfferPositioningSection() {
  return (
    <Section className="bg-white">
      <h2 className="text-2xl font-semibold text-cd-txt">
        Diagnose when it helps. Build what actually fixes the problem.
      </h2>
      <div className="mt-4 space-y-4 leading-relaxed text-cd-shade">
        <p>
          The{" "}
          <strong className="font-medium text-cd-txt">
            Digital Experience Diagnostic
          </strong>{" "}
          is a structured investigation — useful when we need evidence before
          committing budget to the wrong solution.
        </p>
        <p>
          Website builds, booking systems, and automation are{" "}
          <strong className="font-medium text-cd-txt">follow-on work</strong>{" "}
          when the problem calls for it — scoped and quoted from what we learn,
          not from guesswork.
        </p>
        <p>
          For larger projects, discovery and requirements work may be folded into
          the project instead of a standalone diagnostic. We decide that together.
        </p>
      </div>
    </Section>
  );
}
