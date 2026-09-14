import Image from "next/image";
import Section from "@/components/ui/Section";
import { EvidenceMedia } from "../../../types/CaseStudy";

const kindLabels: Record<string, string> = {
  screenshot: "Screenshot",
  diagram: "Diagram",
  photo: "Photo",
  redacted_report: "Report excerpt",
};

type Props = {
  items: EvidenceMedia[];
};

export default function EvidenceMediaSection({ items }: Props) {
  const valid = items.filter((i) => i.url);
  if (!valid.length) {
    return null;
  }

  return (
    <Section variant="light" className="py-10">
      <p className="studio-eyebrow">Visual evidence</p>
      <ul className="mt-6 grid gap-8 md:grid-cols-2">
        {valid.map((item, index) => (
          <li
            key={`${item.url}-${index}`}
            className="overflow-hidden rounded-xl border border-cd-border bg-white"
          >
            <div className="relative aspect-video w-full bg-cd-bck">
              <Image
                src={item.url!}
                alt={item.alt?.trim() || item.caption || "Case study evidence"}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 560px"
              />
            </div>
            {(item.caption || item.kind) && (
              <div className="border-t border-cd-border p-4">
                {item.kind && (
                  <p className="font-mono text-[10px] uppercase tracking-wide text-cd-shade">
                    {kindLabels[item.kind] ?? item.kind}
                  </p>
                )}
                {item.caption && (
                  <p className="mt-2 text-sm leading-relaxed text-cd-shade">
                    {item.caption}
                  </p>
                )}
              </div>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}
