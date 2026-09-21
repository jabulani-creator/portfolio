import Section from "@/components/ui/Section";

export default function ScopingReassuranceSection() {
  return (
    <Section variant="default">
      <h2 className="font-display text-2xl font-bold text-cd-txt md:text-3xl">
        First step: a short conversation
      </h2>
      <p className="studio-body mt-6 max-w-2xl">
        This is not a hard sales call or an instant website quote. We clarify
        what you&apos;re trying to achieve, whether a diagnostic, discovery work,
        or a direct build makes sense — usually in 15–20 minutes by phone or
        WhatsApp.
      </p>
      <ol className="mt-8 max-w-2xl space-y-4 text-sm text-cd-shade">
        <li className="flex gap-3">
          <span className="font-bold text-cd-cta">1.</span>
          You reach out with the situation closest to yours.
        </li>
        <li className="flex gap-3">
          <span className="font-bold text-cd-cta">2.</span>
          We agree scope, access, and next steps — with a written quotation when
          work is involved.
        </li>
        <li className="flex gap-3">
          <span className="font-bold text-cd-cta">3.</span>
          Investigation or build runs from that plan — not from guesswork.
        </li>
      </ol>
    </Section>
  );
}
