import me from "../../assets/m4.jpg";
import circle from "../../assets/circle.svg";
import Image from "next/image";

const Hero = () => {
  return (
    <div id="hero" className="pt-28 ">
      <div className="w-11/12 md:w-9/12 m-auto  flex flex-col md:flex-row h-auto items-center justify-around">
        <Image
          src={circle}
          alt="circle"
          className="absolute  bottom-0  h-28 w-28 right-0 z-0 "
        />
        <div className=" hidden md:flex justify-center items-center w-96 h-96  rounded-full overflow-hidden">
          <Image
            src={me}
            alt="me"
            width={500}
            height={500}
            className="object-cover"
          />
        </div>

        <div className="flex flex-col justify-between  text-cd-txt ">
          <span className="text-7xl py-3">👋</span>
          <p className="text-2xl leading-8">Hello, I am Jabulani Charinga</p>
          <h1 className="text-4xl max-w-xl py-3">
            FullStack Developer & UI/UX Designer
          </h1>
          <Image
            src={circle}
            alt="circle"
            className="absolute  bottom-50  h-28 w-32 left-2 z-0 "
          />
          <Image
            src={circle}
            alt="circle"
            className="absolute  bottom-50  h-80 w-32 left-2 z-0 hidden"
          />
          <p className="max-w-xl text-justify py-3">
            I'm a passion driven software developer and change-maker, with a
            practical approach to building viable innovations that have a
            positive impact on the lives of the people, and the future.
          </p>
          <Image
            src={circle}
            alt="circle"
            className="absolute  top-22  h-8 left-1 z-0 "
          />
          <Image
            src={circle}
            alt="circle"
            className="absolute  top-44  h-96 w-44 right-96 z-0 hidden md:block"
          />
          <Image
            src={circle}
            alt="circle"
            className="absolute  top-3  h-96 w-96 right-96 z-0 md:block "
          />
          <button className="bg-cd-cta hover:bg-cd-cta w-32 text-white font-bold py-2 px-4 border border-blue-900 rounded">
            <a href="#about">About Me</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
