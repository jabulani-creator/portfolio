import Section from "@/components/ui/Section";

type Props = {
  localTrustLine?: string;
};

export default function StartProjectTrustFooter({ localTrustLine }: Props) {
  return (
    <Section variant="dark" className="py-14 md:py-16">
      <p className="max-w-2xl text-lg font-semibold leading-snug text-white">
        Built for organisations that need clarity before they build.
      </p>
      {localTrustLine ? (
        <p className="mt-4 max-w-2xl text-sm text-white/70">{localTrustLine}</p>
      ) : null}
    </Section>
  );
}
