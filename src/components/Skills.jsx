"use client";
import { skills_data } from "@/data";
import Image from "next/image";
import { useState } from "react";

const Skills = () => {
  const [skills] = useState(skills_data);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12 pb-14">
      {skills.map((skill) => (
        <div key={skill._id} className=" flex flex-col items-center">
          <div className="w-24 h-24 rounded-full bg-cd-sk flex justify-center items-center">
            <Image
              src={skill.image}
              alt={skill.name}
              width={90}
              height={90}
              className=" rounded-full"
            />
          </div>

          <h2>{skill.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default Skills;
