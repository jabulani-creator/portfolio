import Head from "./Head";
import me from "../../assets/me.jpg";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div className="w-11/12 md:w-9/12 m-auto pt-28 h-auto" id="about">
      <Head title="About" />
      <div className="flex flex-col md:flex-row ">
        <div className=" w-full md:w-1/2 h-96 px-1 md:px-40">
          <Image
            src={me}
            alt="me"
            width={300}
            height={300}
            className="object-cover w-96 h-96"
          />
        </div>
        <div className=" text-cd-txt items-start w-full md:w-1/2 p-8 ">
          <p className="max-w-lg text-justify py-6 leading-8">
            i love and enjoy working with teams helping build solutions to
            humanities most complex problems. if you would like us to build
            innovations for the future as a team? Do not hesitate, contact me
            alreadyi love and enjoy working with teams helping build solutions
            to humanities most complex problems. if you would like us to build
            innovations.
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
      </div>
    </div>
  );
};

export default About;
