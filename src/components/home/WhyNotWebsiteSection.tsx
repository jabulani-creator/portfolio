import Section from "@/components/ui/Section";

export default function WhyNotWebsiteSection() {
  return (
    <Section>
      <h2 className="text-2xl font-semibold text-cd-txt md:text-3xl">
        Why not just ask for a website?
      </h2>
      <div className="mt-6 space-y-4 leading-relaxed text-cd-shade">
        <p>
          Because a new website does not fix a problem you have not diagnosed
          yet. Most businesses that contact a developer already have a site —
          they just do not know why it is not working.
        </p>
        <p>
          The diagnostic answers a different question first:{" "}
          <strong className="font-medium text-cd-txt">
            where are customers getting stuck, and what should you fix before
            spending money on a build?
          </strong>
        </p>
        <p>
          If you need a new website after that, we build it based on evidence.
          If you do not, you have saved time and money — and you still have a
          clear action plan.
        </p>
      </div>
    </Section>
  );
}
