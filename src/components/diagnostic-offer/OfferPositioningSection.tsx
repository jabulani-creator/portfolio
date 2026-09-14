import Section from "@/components/ui/Section";

export default function OfferPositioningSection() {
  return (
    <Section className="bg-white">
      <h2 className="text-2xl font-semibold text-cd-txt">
        Diagnostic first. Build only if needed.
      </h2>
      <div className="mt-4 space-y-4 leading-relaxed text-cd-shade">
        <p>
          The <strong className="font-medium text-cd-txt">Digital Experience Diagnostic</strong> is
          the entry product. It is designed to be booked first — scoped, priced,
          and delivered in about a week.
        </p>
        <p>
          Website builds, booking systems, and automation are{" "}
          <strong className="font-medium text-cd-txt">follow-on work</strong> —
          priced per scope, and only recommended when the diagnostic shows they
          are the right fix.
        </p>
        <p>
          If you only need clarity on where customers get stuck, you do not need
          to commit to a full build to get value from this engagement.
        </p>
      </div>
    </Section>
  );
}
