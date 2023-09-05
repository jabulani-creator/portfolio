"use client";
import Skills from "./Skills";
import Head from "./Head";
import Education from "./Education";
import { useState } from "react";

const Expertise = () => {
  const [showSkills, setshowSkills] = useState(true);
  const [showEducation, setshowEducation] = useState(false);

  const skillshandler = () => {
    setshowSkills(true);
    setshowEducation(false);
  };
  const educationhandler = () => {
    setshowEducation(true);
    setshowSkills(false);
  };
  return (
    <div
      className="w-11/12 md:w-9/12 m-auto pt-28 h-auto text-cd-txt"
      id="skills"
    >
      <Head title="My Areas of Expertise" />
      <div className="flex flex-col md:flex-row md:items-center items-stretch">
        <div className="md:w-1/2 w-100 ">
          <h1 className="md:w-96 w-auto pb-4 text-2xl">
            Change Maker | Self-taught Software Engineer | Entrepreneur |
            Founder | Developer Advocate
          </h1>
          <p className=" pb-4 max-w-xl text-justify ">
            i love and enjoy working with teams helping build solutions to
            humanities most complex problems. if you would like us to build
            innovations for the future as a team? Do not hesitate, contact me
            alreadyi love and enjoy working with teams helping build solutions
            to humanities most complex problems. if you would like us to build
            innovations for the future as a team? Do not hesitate, contact me
            alreadyworking with teams helping build solutions to humanities most
            complex problems. if you would like us to build innovations for the
            future as a team? Do not hesitate, contact me already
          </p>
          <button className="bg-cd-cta hover:bg-cd-cta w-32 text-white font-bold py-2 px-4 border border-blue-900 rounded">
            <a
              href="https://docs.google.com/document/d/1MoF7yVM_P4HtIGR338ZFX_4GOEuauRrOsbnT3iw3w28/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              My Resume
            </a>
          </button>
        </div>
        <div className="md:w-1/2 w-100 ">
          <div className="flex justify-between">
            <button
              className=" mt-8 bg-transparent hover:bg-cd-cta text-cd-cta  hover:text-white py-2 px-4 border border-cd-cta hover:border-transparent rounded w-32"
              onClick={skillshandler}
            >
              Skills
            </button>
            {/* <button className=" mt-8 bg-transparent hover:bg-cd-cta text-cd-cta  hover:text-white py-2 px-4 border border-cd-cta hover:border-transparent rounded w-32">
              Experience
            </button> */}

            <button
              className=" mt-8 bg-transparent hover:bg-cd-cta text-cd-cta  hover:text-white py-2 px-4 border border-cd-cta hover:border-transparent rounded w-32"
              onClick={educationhandler}
            >
              Education
            </button>
          </div>
          {showSkills && <Skills />}
          {showEducation && <Education />}
        </div>
      </div>
    </div>
  );
};

export default Expertise;
