import type CaseStudy from "../../../types/CaseStudy";
import type {
  CaseStudyStoryThread,
  StoryThreadPlacement,
} from "../../../types/CaseStudyV2";

export type ProblemStoryCard = {
  threadKey: string;
  globalKey: string;
  caseStudySlug: string;
  caseStudyTitle: string;
  title: string;
  hook: string;
  narrative?: string;
  buildChallenge?: string;
  outcome?: string;
  eyebrow: string;
  cardImageUrl?: string;
  cardImageAlt?: string;
  priority: number;
  href: string;
  anchorId: string;
};

const DEFAULT_PLACEMENT: StoryThreadPlacement = "archiveOnly";

export function isStoryThreadPublic(thread: CaseStudyStoryThread): boolean {
  const visibility = thread.editorialMeta?.visibility ?? "public";
  return visibility !== "private" && visibility !== "internal";
}

export function resolveThreadKey(
  thread: CaseStudyStoryThread,
  caseSlug: string,
  index: number
): string {
  const key = thread.threadKey?.trim();
  if (key) return key;
  const fromTitle = thread.title
    ?.trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  if (fromTitle) return `${caseSlug}-${fromTitle}`;
  return `${caseSlug}-thread-${index + 1}`;
}

export function threadShowsOnCaseStudyMain(thread: CaseStudyStoryThread): boolean {
  if (!isStoryThreadPublic(thread)) return false;
  const placement = thread.placement ?? DEFAULT_PLACEMENT;
  return placement === "caseStudyMain" || placement === "caseStudyAndHome";
}

export function threadShowsOnHome(thread: CaseStudyStoryThread): boolean {
  if (!isStoryThreadPublic(thread)) return false;
  return (thread.placement ?? DEFAULT_PLACEMENT) === "caseStudyAndHome";
}

function threadHasBandContent(thread: CaseStudyStoryThread): boolean {
  return Boolean(
    thread.description?.trim() ||
      thread.narrative?.trim() ||
      thread.solution?.outcome?.trim()
  );
}

function defaultEyebrow(thread: CaseStudyStoryThread, caseTitle: string): string {
  return thread.cardEyebrow?.trim() || caseTitle;
}

function toCard(
  study: CaseStudy,
  thread: CaseStudyStoryThread,
  index: number
): ProblemStoryCard | null {
  if (!thread.title?.trim()) return null;
  if (!threadHasBandContent(thread)) return null;

  const threadKey = resolveThreadKey(thread, study.slug, index);
  const hook =
    thread.description?.trim() ||
    thread.solution?.decision?.trim() ||
    thread.narrative?.trim()?.slice(0, 160) ||
    "";

  if (!hook) return null;

  return {
    threadKey,
    globalKey: threadKey,
    caseStudySlug: study.slug,
    caseStudyTitle: study.title,
    title: thread.title.trim(),
    hook,
    narrative: thread.narrative?.trim(),
    buildChallenge: thread.buildChallenge?.trim(),
    outcome: thread.solution?.outcome?.trim(),
    eyebrow: defaultEyebrow(thread, study.title),
    cardImageUrl: thread.cardImageUrl,
    cardImageAlt: thread.cardImageAlt?.trim(),
    priority: thread.priority ?? index + 1,
    href: `/case-studies/${study.slug}#problem-${threadKey}`,
    anchorId: `problem-${threadKey}`,
  };
}

export function getCaseStudyProblemStories(study: CaseStudy): ProblemStoryCard[] {
  const threads = study.storyThreads ?? [];
  return threads
    .map((thread, index) =>
      threadShowsOnCaseStudyMain(thread) ? toCard(study, thread, index) : null
    )
    .filter((c): c is ProblemStoryCard => c !== null)
    .sort((a, b) => a.priority - b.priority);
}

const HOME_STORY_LIMIT = 4;

export function getHomeProblemStories(caseStudies: CaseStudy[]): ProblemStoryCard[] {
  const cards: ProblemStoryCard[] = [];

  for (const study of caseStudies) {
    const threads = study.storyThreads ?? [];
    threads.forEach((thread, index) => {
      if (!threadShowsOnHome(thread)) return;
      const card = toCard(study, thread, index);
      if (card) cards.push(card);
    });
  }

  return cards.sort((a, b) => a.priority - b.priority).slice(0, HOME_STORY_LIMIT);
}
