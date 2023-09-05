import { PortableText } from "@portabletext/react";
import { getServices } from "../../sanity/schemas/sanity-utils";
import Head from "./Head";
import Image from "next/image";

const Services = async () => {
  const services = await getServices();
  return (
    <div className="w-11/12 md:w-9/12 m-auto pt-28  h-auto" id="services">
      <Head title="Services" />
      <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-cd-txt ">
        {services.map((service) => (
          <div
            key={service._id}
            className=" rounded-lg p-5 bg-cd-sp hover:scale-105 hover:border-cd-cta transition justify-self-center"
          >
            {service.image && (
              <Image
                src={service.image}
                alt={service.name}
                width={750}
                height={300}
                className="object-cover rounded-lg "
              />
            )}

            <div>
              <h2 className="mt-2 "> {service.name}</h2>

              <div className="max-w-lg text-justify py-6 leading-8">
                <PortableText value={service.desc} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
