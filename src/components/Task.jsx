import Image from "next/image";
import { PortableText } from "@portabletext/react";

const Task = ({ image, text }) => {
  return (
    <div className=" text-cd-txt pt-28">
      <div className="w-11/12 md:w-9/12 m-auto h-auto ">
        <div className="flex flex-col items-center pb-10">
          <h1 className="poppins uppercase font-thin text-2xl md:text-5xl tracking-widest">
            Analysis & Preparation
          </h1>
          <h1 className="text-xl md:text-2xl">Branding</h1>
        </div>

        <div className="flex flex-col md:flex-row ">
          <div className="text-cd-txt items-start w-full md:w-1/2 p-8 ">
            <PortableText blocks={text} value={text} />
          </div>
          <div className="w-full md:w-1/2 h-96 px-1 md:px-40">
            <Image
              src={image}
              alt={text}
              width={1920}
              height={1080}
              className="mt-10 border-2 border-gray-700 object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
