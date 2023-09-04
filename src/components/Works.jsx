import { getProjects } from "../../sanity/schemas/sanity-utils";
import Head from "./Head";
import Image from "next/image";
import Link from "next/link";

const Works = async () => {
  const projects = await getProjects();

  return (
    <div className="w-10/12 md:w-9/12 m-auto h-100 pt-28 " id="works">
      <Head title="My Works" />
      <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-cd-txt">
        {projects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project._id}
            className="border-2 border-gray-500 rounded-lg p-5 bg-cd-sp hover:scale-105 hover:border-cd-cta transition "
          >
            {project.image && (
              <Image
                src={project.image}
                alt={project.name}
                width={750}
                height={300}
                className="object-cover rounded-lg border border-gray-500"
              />
            )}

            <div>
              <h2 className="mt-2 "></h2>
              {project.name}
              <p className="max-w-lg text-justify py-6 leading-8">
                {project.about.substring(0, 100)}
              </p>
              <button className="bg-cd-cta hover:bg-cd-cta w-32 text-white font-bold py-2 px-4 border border-blue-900 rounded">
                Case Study
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Works;
