import Section from "@/components/ui/Section";
import { RetainerScopeItem } from "../../../types/RetainerOffer";

type Props = {
  items: RetainerScopeItem[];
};

export default function RetainerScopeList({ items }: Props) {
  const sorted = [...items].sort((a, b) => a.order - b.order);

  return (
    <ol className="space-y-5">
      {sorted.map((item, index) => (
        <li key={item.title} className="border-l-2 border-cd-cta pl-4">
          <p className="font-semibold text-cd-txt">
            {index + 1}. {item.title}
          </p>
          <p className="mt-1 text-sm leading-relaxed text-cd-shade">
            {item.description}
          </p>
        </li>
      ))}
    </ol>
  );
}
