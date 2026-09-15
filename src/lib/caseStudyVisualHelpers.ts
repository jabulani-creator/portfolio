import CaseStudy, {
  getPrimaryMaps,
  getProblemCategoryLabel,
  getProblems,
  Problem,
  ProblemSolutionMap,
} from "../../types/CaseStudy";

export function getLeaksForDisplay(
  study: Pick<CaseStudy, "problems" | "revenueLeaks">,
  limit = 5
): Problem[] {
  const all = getProblems(study).filter(
    (p) => p.visibility !== "internal" && p.visibility !== "private"
  );
  return [...all]
    .sort((a, b) => (a.priority ?? 99) - (b.priority ?? 99))
    .slice(0, limit);
}

export function parseJourneySteps(journey: string): string[] {
  return journey
    .split("→")
    .map((s) => s.trim())
    .filter(Boolean);
}

/** Map problem priority to a 4–10 friction score for meters. */
export function frictionScore(problem: Problem, index: number): number {
  if (problem.priority === 1) return 9;
  if (problem.priority === 2) return 7;
  if (problem.priority === 3) return 5;
  return Math.max(4, 8 - index);
}

export function frictionMeterLabel(problem: Problem): string {
  if (problem.category) {
    return getProblemCategoryLabel(problem.category);
  }
  const title = problem.title?.trim();
  if (!title) return "Friction";
  return title.length > 28 ? `${title.slice(0, 26)}…` : title;
}

export function getPrimaryOpportunity(
  study: Pick<
    CaseStudy,
    "problemSolutionMaps" | "outcomeHighlight" | "strategicThesis" | "decision"
  >
): string | undefined {
  const map = getPrimaryMaps(study)[0];
  return (
    map?.decision?.trim() ||
    map?.solution?.trim() ||
    study.outcomeHighlight?.trim() ||
    study.strategicThesis?.trim() ||
    study.decision?.split("\n\n")[0]?.trim()
  );
}

export function getFixBullets(
  study: Pick<CaseStudy, "problems" | "revenueLeaks" | "problemSolutionMaps">
): string[] {
  const fromProblems = getLeaksForDisplay(study, 5)
    .map((p) => p.recommendedFix?.trim())
    .filter(Boolean) as string[];
  if (fromProblems.length) return fromProblems;

  const fromMaps = getPrimaryMaps(study)
    .map((m) => m.solution?.trim())
    .filter(Boolean) as string[];
  return fromMaps.slice(0, 4);
}

export function getProblemTriad(problems: Problem[]): {
  find?: Problem;
  understand?: Problem;
  act?: Problem;
} {
  const sorted = [...problems].sort(
    (a, b) => (a.priority ?? 99) - (b.priority ?? 99)
  );
  return {
    find: sorted[0],
    understand: sorted[1],
    act: sorted[2],
  };
}

export function parseFlowLines(text?: string): string[] {
  if (!text?.trim()) return [];
  const normalized = text.replace(/\r\n/g, "\n");
  if (normalized.includes("↓")) {
    return normalized
      .split(/\n|→/)
      .map((line) => line.replace(/↓/g, "").trim())
      .filter(Boolean);
  }
  if (normalized.includes("→")) {
    return normalized.split("→").map((s) => s.trim()).filter(Boolean);
  }
  return normalized
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean);
}

export function summarizeMapsForFix(maps: ProblemSolutionMap[]): string | undefined {
  const primary = maps.find((m) => m.solution?.trim());
  return primary?.solution?.trim();
}
