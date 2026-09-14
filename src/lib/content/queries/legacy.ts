import Project from "../../../../types/Projects";
import Service from "../../../../types/Services";
import Skill from "../../../../types/Skills";
import { groq } from "next-sanity";
import { sanityClient } from "../client";

/**
 * Legacy portfolio queries — kept until Phase 5 migration.
 * Old pages import these via sanity/schemas/sanity-utils.ts.
 */
export async function getProjects(): Promise<Project[]> {
  return sanityClient.fetch(
    groq`*[_type == "project"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "hero": hero.asset->url,
      "image": image.asset->url,
      url,
      role,
      context,
      period,
      about,
      task,
      colors,
      fonts
    }`
  );
}

export async function getProject(slug: string): Promise<Project> {
  return sanityClient.fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "hero": hero.asset->url,
      "image": image.asset->url,
      url,
      role,
      context,
      period,
      about,
      task,
      colors,
      fonts
    }`,
    { slug }
  );
}

export async function getServices(): Promise<Service[]> {
  try {
    return await sanityClient.fetch(
      groq`*[_type == "service"]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        desc,
      }`
    );
  } catch (error) {
    console.error("Error fetching services from Sanity:", error);
    return [];
  }
}

export async function getSkills(): Promise<Skill[]> {
  try {
    return await sanityClient.fetch(
      groq`*[_type == "skill"]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
      }`
    );
  } catch (error) {
    console.error("Error fetching skills from Sanity:", error);
    return [];
  }
}
