import { getProject } from "../../../../../sanity/schemas/sanity-utils";

import { Poppins } from "next/font/google";
import { Fonts, Task, MiniNav } from "@/components";

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

type Props = {
  params: { project: string };
};

export default async function Project({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);

  const containerStyle = {
    backgroundImage: ` linear-gradient( rgba(8, 8, 131, 0.3),
    rgba(8, 49, 131, 0.3)), url("${project.hero}")`,
    backgroundSize: "cover",
  };

  return (
    <>
      <MiniNav />
      <div style={containerStyle} className="h-screen bg-cd-bck2 relative">
        <div className="absolute inset-0 bg-black opacity-5"></div>
        <div className="text-white flex justify-center flex-col items-center h-full">
          <div className="w-10/12 m-auto md:w-1/2 text-center">
            <h1 className="text-3xl mb-6  md:text-6xl font-extrabold">
              {project.name}
            </h1>
            <p>{project.about.substring(0, 100)}</p>
          </div>

          <div className="flex flex-col justify-around w-10/12 mr-auto ml-auto mb-32 md:flex-row text-center ">
            <h1 className="uppercase font-bold">
              <span className="text-cd-cta font-bold uppercase pr-2">Role</span>
              {project.role}
            </h1>
            <h1 className="uppercase font-bold">
              <span className="text-cd-cta font-bold uppercase pr-2">
                context
              </span>
              {project.context}
            </h1>
            <h1 className="uppercase font-bold">
              <span className="text-cd-cta font-bold uppercase pr-2">
                Period
              </span>
              2023-01-03
            </h1>
          </div>
        </div>
      </div>
      <div className="bg-black h-auto ">
        <div className="w-10/12 m-auto text-center pt-28 pb-28">
          <h1 className="text-5xl text-white pb-6">The Project</h1>
          <p className="max-w-3xl mr-auto ml-auto ">{project.about}</p>
          <button className=" mt-8 bg-transparent hover:bg-cd-cta text-white  hover:text-white py-2 px-4 border border-white hover:border-transparent rounded w-32">
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              Visit Website
            </a>
          </button>
        </div>
      </div>
      <div className="bg-cd-bck2">
        <Task text={project.task} image={project.image} />
        <Fonts fonts={project.fonts} colors={project.colors} />
      </div>
    </>
  );
}
