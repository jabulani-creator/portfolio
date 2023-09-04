import Project from "../../types/Projects";
import clientConfig from "../config/client-config";
import { createClient, groq } from "next-sanity";

// export async function getProjects(): Promise<Project[]> {
//   try {
//     const projects = await createClient(clientConfig).fetch(
//       groq`*[_type == "project"]{
//                 _id,
//                 _createdAt,
//                 name,
//                 "slug": slug.current,
//                 "hero": hero.asset->url,
//                 "image": image.asset->url,
//                 url,
//                 role,
//                 context,
//                 period,
//                 about,
//                 task,
//                 colors,
//                 fonts
//               }`
//     );

//     return projects;
//   } catch (error) {
//     // Handle the error, log it, or return a default value as needed.
//     console.error("Error fetching projects from Sanity:", error);
//     return [];
//   }
// }

export async function getProjects(): Promise<Project[]> {
  return createClient(clientConfig).fetch(
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
  return createClient(clientConfig).fetch(
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
