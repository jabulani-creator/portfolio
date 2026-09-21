import Section from "@/components/ui/Section";

export default function OfferExampleFindingSection() {
  return (
    <Section variant="default" className="py-12 md:py-16">
      <h2 className="text-xl font-bold text-cd-txt md:text-2xl">
        What a finding looks like
      </h2>
      <div className="studio-card mt-8 max-w-3xl space-y-6 text-sm">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-wide text-cd-shade">
            Finding
          </p>
          <p className="mt-2 leading-relaxed text-cd-txt">
            Customers are asked to WhatsApp for information already available elsewhere
            — adding friction before enquiry.
          </p>
        </div>
        <div>
          <p className="font-mono text-[10px] uppercase tracking-wide text-cd-shade">
            Evidence
          </p>
          <p className="mt-2 font-mono text-xs text-cd-shade">
            Website → Facebook → Google → WhatsApp
          </p>
        </div>
        <div>
          <p className="font-mono text-[10px] uppercase tracking-wide text-cd-shade">
            Recommendation
          </p>
          <p className="mt-2 leading-relaxed text-cd-txt">
            Centralise essential information and create a clearer enquiry path.
          </p>
        </div>
        <div>
          <p className="font-mono text-[10px] uppercase tracking-wide text-cd-shade">
            Potential solution
          </p>
          <p className="mt-2 leading-relaxed text-cd-txt">
            Site information architecture + WhatsApp handoff — not necessarily a full
            rebuild.
          </p>
        </div>
      </div>
    </Section>
  );
}
