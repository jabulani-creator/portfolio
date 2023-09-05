"use client";
import { education } from "@/data";
import { useState } from "react";

const Education = () => {
  const [schools] = useState(education);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-12 pb-14">
      {schools.map((school) => (
        <div key={school._id} className=" flex flex-col ">
          <h1 className="text-cd-txt2">{school.duration}</h1>
          <h2>{school.institution}</h2>
          <div className="border-t border-gray-600 w-24 mt-1 mb-1"></div>
          <h3 className="font-bold">{school.certification}</h3>
        </div>
      ))}
    </div>
  );
};

export default Education;
