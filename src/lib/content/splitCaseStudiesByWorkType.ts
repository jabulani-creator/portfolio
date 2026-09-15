import CaseStudy from "../../../types/CaseStudy";

function splitWork(studies: CaseStudy[]) {
  const investigations = studies.filter(
    (s) => s.category === "diagnostic" || s.category === "strategy"
  );
  const builds = studies.filter(
    (s) => s.category === "build" || s.category === "software"
  );
  const invIds = new Set(investigations.map((s) => s._id));

  if (investigations.length === 0) {
    return { investigations: [] as CaseStudy[], builds: studies };
  }
  if (builds.length === 0) {
    return { investigations: studies, builds: [] as CaseStudy[] };
  }
  return {
    investigations,
    builds: builds.filter((s) => !invIds.has(s._id)),
  };
}

export default splitWork;
