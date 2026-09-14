import { redirect } from "next/navigation";
import { getCaseStudyBySlug } from "@/lib/content/queries/caseStudies";

type Props = {
  params: Promise<{ project: string }>;
};

/**
 * Legacy /projects/* URLs redirect into the case study system.
 */
export default async function LegacyProjectRedirect({ params }: Props) {
  const { project: slug } = await params;
  const caseStudy = await getCaseStudyBySlug(slug);

  if (caseStudy) {
    redirect(`/case-studies/${slug}`);
  }

  redirect("/case-studies");
}
