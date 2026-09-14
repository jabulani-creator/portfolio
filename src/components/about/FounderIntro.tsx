import Image from "next/image";
import Section from "@/components/ui/Section";
import FounderProfile from "../../../types/FounderProfile";

type Props = {
  profile: FounderProfile;
};

function initials(name?: string): string {
  if (!name) return "TWG";
  return name
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function FounderIntro({ profile }: Props) {
  const name = profile.founderName ?? "Jabulani Charinga";

  return (
    <Section variant="default" className="pt-20 md:pt-28">
      <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-12">
        <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-sm bg-cd-cta md:h-40 md:w-40">
          {profile.portrait ? (
            <Image
              src={profile.portrait}
              alt={name}
              fill
              className="object-cover"
              sizes="160px"
              priority
            />
          ) : (
            <div
              className="flex h-full w-full items-center justify-center font-display text-3xl font-bold text-white"
              aria-hidden
            >
              {initials(name)}
            </div>
          )}
        </div>
        <div>
          <p className="studio-eyebrow">About</p>
          <p className="mt-2 text-sm font-semibold text-cd-shade">{name}</p>
          <h1 className="studio-headline mt-4">{profile.headline}</h1>
        </div>
      </div>
    </Section>
  );
}
