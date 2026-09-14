import Section from "@/components/ui/Section";

type Props = {
  techStack?: string[];
  role?: string;
};

export default function TechnologyRoleSection({ techStack, role }: Props) {
  if (!techStack?.length && !role?.trim()) {
    return null;
  }

  return (
    <Section variant="default">
      <p className="studio-eyebrow">Capability</p>
      <h2 className="mt-3 font-display text-2xl font-bold text-cd-txt">
        Technology & role
      </h2>
      {role?.trim() && (
        <p className="mt-4 max-w-2xl text-sm text-cd-shade">{role}</p>
      )}
      {techStack && techStack.length > 0 && (
        <ul className="mt-6 flex flex-wrap gap-2">
          {techStack.map((tool) => (
            <li
              key={tool}
              className="rounded-full border border-cd-border bg-cd-bck px-3 py-1 font-mono text-[11px] text-cd-shade"
            >
              {tool}
            </li>
          ))}
        </ul>
      )}
    </Section>
  );
}
