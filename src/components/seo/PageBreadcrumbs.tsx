import Link from "next/link";
import type { BreadcrumbItem } from "@/lib/seo/jsonLd";

type Props = {
  items: BreadcrumbItem[];
};

export default function PageBreadcrumbs({ items }: Props) {
  if (items.length < 2) return null;

  return (
    <nav aria-label="Breadcrumb" className="mb-6 text-sm text-cd-shade">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-2">
              {index > 0 && (
                <span className="text-cd-border" aria-hidden>
                  /
                </span>
              )}
              {isLast ? (
                <span className="font-medium text-cd-txt" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.path}
                  className="hover:text-cd-txt hover:underline underline-offset-2"
                >
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
