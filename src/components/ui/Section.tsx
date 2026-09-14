import { ReactNode } from "react";

type Variant = "default" | "light" | "dark" | "wide";

const variantClasses: Record<Variant, string> = {
  default: "bg-cd-bck2 text-cd-txt",
  light: "bg-white text-cd-txt",
  dark: "bg-cd-txt text-white",
  wide: "bg-cd-bck2 text-cd-txt",
};

const containerClasses: Record<Variant, string> = {
  default: "mx-auto w-11/12 max-w-6xl",
  light: "mx-auto w-11/12 max-w-6xl",
  dark: "mx-auto w-11/12 max-w-6xl",
  wide: "mx-auto w-11/12 max-w-6xl",
};

type Props = {
  children: ReactNode;
  className?: string;
  id?: string;
  variant?: Variant;
  bleed?: boolean;
};

export default function Section({
  children,
  className = "",
  id,
  variant = "default",
  bleed = false,
}: Props) {
  const padding = bleed ? "py-0" : "py-16 md:py-24";
  return (
    <section
      id={id}
      className={`${padding} ${variantClasses[variant]} ${className}`}
    >
      <div className={bleed ? "w-full" : containerClasses[variant]}>
        {children}
      </div>
    </section>
  );
}
