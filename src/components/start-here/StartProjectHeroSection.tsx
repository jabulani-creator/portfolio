import Section from "@/components/ui/Section";

export default function StartProjectHeroSection() {
  return (
    <Section variant="default" className="pt-16 pb-8 md:pt-24 md:pb-10">
      <h1 className="font-display text-3xl font-bold tracking-tight text-cd-txt md:text-4xl">
        Start a project
      </h1>
      <p className="mt-4 max-w-xl text-sm text-cd-shade md:text-base">
        Tell me what you&apos;re trying to achieve — we&apos;ll scope it and quote before
        work begins.
      </p>
    </Section>
  );
}
