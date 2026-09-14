import Link from "next/link";
import CaseStudy from "../../../types/CaseStudy";
import WorkCard from "./WorkCard";

type Props = {
  caseStudy: CaseStudy;
};

/** @deprecated Use WorkCard — kept for imports that expect CaseStudyCard */
export default function CaseStudyCard({ caseStudy }: Props) {
  return <WorkCard caseStudy={caseStudy} size="default" />;
}
