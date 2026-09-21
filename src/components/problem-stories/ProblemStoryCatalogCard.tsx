import Image from "next/image";
import Link from "next/link";
import type { ProblemStoryCard } from "@/lib/content/problemStories";

type Props = {
  story: ProblemStoryCard;
  index: number;
  variant?: "catalog" | "band";
};

export default function ProblemStoryCatalogCard({
  story,
  index,
  variant = "catalog",
}: Props) {
  const number = String(index + 1).padStart(2, "0");

  if (variant === "band") {
    return (
      <article
        id={story.anchorId}
        className="scroll-mt-24 border-t border-cd-border pt-10 first:border-t-0 first:pt-0"
      >
        <p className="font-mono text-[10px] uppercase tracking-wide text-cd-shade">
          — {story.eyebrow}
        </p>
        <h3 className="mt-2 font-display text-xl font-bold text-cd-txt md:text-2xl">
          {story.title}
        </h3>
        <p className="studio-body mt-4 max-w-2xl">{story.hook}</p>
        {story.narrative && (
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-cd-shade whitespace-pre-line">
            {story.narrative}
          </p>
        )}
        {story.buildChallenge && (
          <div className="mt-6 max-w-2xl border-l-2 border-cd-cta pl-4">
            <p className="font-mono text-[10px] uppercase tracking-wide text-cd-cta">
              While building
            </p>
            <p className="mt-2 text-sm leading-relaxed text-cd-shade whitespace-pre-line">
              {story.buildChallenge}
            </p>
          </div>
        )}
        {story.outcome && (
          <p className="mt-6 max-w-2xl text-sm font-medium text-cd-txt">
            <span className="font-mono text-[10px] uppercase tracking-wide text-cd-shade">
              Now:{" "}
            </span>
            {story.outcome}
          </p>
        )}
      </article>
    );
  }

  return (
    <Link
      href={story.href}
      className="group relative flex min-h-full flex-col border-l border-cd-border px-4 py-2 first:border-l-0 md:px-6"
    >
      <div className="mx-auto flex w-full max-w-[220px] flex-1 flex-col">
        <div className="relative mx-auto aspect-square w-[min(100%,200px)]">
          <div className="absolute inset-0 rounded-full bg-cd-bck2 shadow-[0_12px_40px_rgba(0,0,0,0.08)] ring-1 ring-cd-border transition group-hover:shadow-[0_16px_48px_rgba(0,0,0,0.1)]">
            {story.cardImageUrl ? (
              <Image
                src={story.cardImageUrl}
                alt={story.cardImageAlt || story.title}
                fill
                className="rounded-full object-cover"
                sizes="200px"
              />
            ) : (
              <div className="flex h-full flex-col items-center justify-center rounded-full bg-gradient-to-br from-cd-bck2 to-white px-6 text-center">
                <span className="font-display text-3xl font-bold text-cd-border">
                  {story.title.slice(0, 1)}
                </span>
              </div>
            )}
          </div>
        </div>
        <p className="mt-8 font-mono text-[10px] uppercase tracking-wide text-cd-shade">
          — {story.eyebrow}
        </p>
        <h3 className="mt-2 font-display text-lg font-bold leading-snug text-cd-txt md:text-xl">
          {story.title}
        </h3>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-cd-shade">
          {story.hook}
        </p>
      </div>
      <div
        className="pointer-events-none absolute bottom-4 right-2 flex items-center gap-2 font-mono text-xs text-cd-shade md:right-4"
        aria-hidden
      >
        <span className="inline-block origin-center rotate-90">{number}</span>
        <span className="h-8 w-px bg-cd-border" />
      </div>
    </Link>
  );
}
