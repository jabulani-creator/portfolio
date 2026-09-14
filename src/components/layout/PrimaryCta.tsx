import Link from "next/link";
import { PrimaryCta as PrimaryCtaType } from "../../../types/SiteSettings";

type Props = {
  cta: PrimaryCtaType;
  className?: string;
  variant?: "solid" | "outline" | "inverse";
};

export default function PrimaryCta({
  cta,
  className = "",
  variant = "solid",
}: Props) {
  const styles = {
    solid: "pill-btn",
    outline: "pill-btn-outline",
    inverse: "pill-btn-inverse",
  };

  return (
    <Link href={cta.href} className={`${styles[variant]} ${className}`}>
      {cta.label}
    </Link>
  );
}
