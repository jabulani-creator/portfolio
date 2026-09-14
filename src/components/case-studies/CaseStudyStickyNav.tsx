"use client";

import { useEffect, useState } from "react";

export type StickySection = {
  id: string;
  step: number;
  label: string;
};

type Props = {
  sections: StickySection[];
};

export default function CaseStudyStickyNav({ sections }: Props) {
  const [active, setActive] = useState(sections[0]?.id);

  useEffect(() => {
    if (sections.length < 3) {
      return;
    }

    const elements = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!elements.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-40% 0px -45% 0px", threshold: [0, 0.25, 0.5] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sections]);

  if (sections.length < 3) {
    return null;
  }

  return (
    <nav
      className="sticky top-[4.25rem] z-40 border-b border-cd-border bg-cd-bck2/95 backdrop-blur"
      aria-label="Case study sections"
    >
      <div className="mx-auto flex w-11/12 max-w-6xl gap-1 overflow-x-auto py-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {sections.map(({ id, step, label }) => {
          const isActive = active === id;
          return (
            <a
              key={id}
              href={`#${id}`}
              className={`shrink-0 rounded-full px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-wide transition md:px-3 ${
                isActive
                  ? "bg-cd-txt text-white"
                  : "text-cd-shade hover:bg-cd-bck hover:text-cd-txt"
              }`}
            >
              <span className="md:hidden">{String(step).padStart(2, "0")}</span>
              <span className="hidden md:inline">
                {String(step).padStart(2, "0")} · {label}
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
