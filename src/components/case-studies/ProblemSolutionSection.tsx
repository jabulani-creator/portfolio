"use client";

import { useState } from "react";
import Section from "@/components/ui/Section";
import {
  getPrimaryMaps,
  getSecondaryMaps,
  ProblemSolutionMap,
} from "../../../types/CaseStudy";

type Props = {
  maps: ProblemSolutionMap[];
  sectionId?: string;
};

function MapBlock({ map, index }: { map: ProblemSolutionMap; index: number }) {
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const steps: { label: string; body?: string }[] = [
    { label: "Problem", body: map.problemSummary },
    { label: "Why it mattered", body: map.whyItMattered },
    { label: "Decision", body: map.decision },
    { label: "Solution", body: map.solution },
    { label: "Implementation", body: map.implementation },
    { label: "Outcome", body: map.outcome },
  ].filter((s) => s.body?.trim());

  return (
    <article className="border-t border-cd-border pt-12 first:border-t-0 first:pt-0">
      <p className="font-mono text-xs text-cd-shade">
        {String(index + 1).padStart(2, "0")}
      </p>
      <h3 className="mt-2 font-display text-2xl font-bold text-cd-txt">
        {map.title}
      </h3>
      <dl className="mt-8 space-y-6">
        {steps.map(({ label, body }) => (
          <div key={label}>
            <dt className="font-mono text-[10px] uppercase tracking-wide text-cd-cta">
              {label}
            </dt>
            <dd className="mt-2 text-sm leading-relaxed text-cd-shade whitespace-pre-line">
              {body}
            </dd>
          </div>
        ))}
      </dl>
      {map.features && map.features.length > 0 && (
        <div className="mt-6">
          <button
            type="button"
            onClick={() => setFeaturesOpen((o) => !o)}
            className="font-mono text-xs uppercase tracking-wide text-cd-txt underline-offset-4 hover:underline"
          >
            {featuresOpen ? "Hide" : "Show"} supporting detail
          </button>
          {featuresOpen && (
            <ul className="mt-3 list-inside list-disc text-sm text-cd-shade">
              {map.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </article>
  );
}

export default function ProblemSolutionSection({
  maps,
  sectionId = "cs-solutions",
}: Props) {
  const primary = getPrimaryMaps({ problemSolutionMaps: maps });
  const secondary = getSecondaryMaps({ problemSolutionMaps: maps });
  const allPrimary = primary.length ? primary : maps.filter((m) => m.title || m.solution);

  if (!allPrimary.length && !secondary.length) {
    return null;
  }

  return (
    <Section variant="light" id={sectionId}>
      <p className="studio-eyebrow">The fix</p>
      <h2 className="mt-3 font-display text-3xl font-bold text-cd-txt">
        From diagnosis to build
      </h2>
      <div className="mt-12 space-y-12">
        {allPrimary.map((map, index) => (
          <MapBlock key={map.title ?? index} map={map} index={index} />
        ))}
      </div>
      {secondary.length > 0 && (
        <details className="mt-12 rounded-sm border border-cd-border bg-white p-6">
          <summary className="cursor-pointer font-display text-lg font-bold text-cd-txt">
            More decisions ({secondary.length})
          </summary>
          <div className="mt-8 space-y-12">
            {secondary.map((map, index) => (
              <MapBlock
                key={map.title ?? `sec-${index}`}
                map={map}
                index={index}
              />
            ))}
          </div>
        </details>
      )}
    </Section>
  );
}
