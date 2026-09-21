import Link from "next/link";
import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import PrimaryCta from "@/components/layout/PrimaryCta";
import { getSiteSettings } from "@/lib/content/queries/site";
import { getDefaultSiteShell } from "@/lib/content/defaults";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Page not found",
  description: "That page does not exist on jabulani.digital.",
  path: "/404",
});

export default async function NotFound() {
  const siteSettings = await getSiteSettings();
  const shell = siteSettings ?? getDefaultSiteShell();

  return (
    <Section className="pt-20 md:pt-28">
      <p className="text-sm font-semibold uppercase tracking-wide text-cd-cta">
        404
      </p>
      <h1 className="mt-3 text-3xl font-bold text-cd-txt">Page not found</h1>
      <p className="mt-4 leading-relaxed text-cd-shade">
        That page does not exist. Check the URL or head back to the home page.
      </p>
      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
        <PrimaryCta cta={shell.primaryCta} />
        <Link
          href="/"
          className="text-sm font-medium text-cd-cta underline-offset-2 hover:underline"
        >
          Back to home →
        </Link>
      </div>
    </Section>
  );
}
