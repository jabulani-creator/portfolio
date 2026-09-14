"use client";

import PrimaryCta from "./PrimaryCta";
import { PrimaryCta as PrimaryCtaType } from "../../../types/SiteSettings";

type Props = {
  primaryCta: PrimaryCtaType;
};

export default function MobileBookBar({ primaryCta }: Props) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-cd-border bg-cd-bck2/95 p-3 backdrop-blur md:hidden">
      <PrimaryCta cta={primaryCta} className="w-full" variant="solid" />
    </div>
  );
}
