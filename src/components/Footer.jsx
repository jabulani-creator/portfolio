import React from "react";

const Footer = () => {
  return (
    <div className="bg-black  text-white ">
      <div className="w-10/12 m-auto flex items-center justify-between flex-col">
        <div className="flex flex-col md:flex-row pt-16 pb-14 m-auto justify-between">
          <div className=" w-full md:w-1/2 mr-0 md:mr-96">
            <h1 className="capitalize text-3xl pt-6 pb-3">
              Lets Work Together
            </h1>
            <p className="max-w-3xl leading-7">
              i love and enjoy working with teams helping build solutions to
              humanities most complex problems. if you would like us to build
              innovations for the future as a team? Do not hesitate, contact me
              already
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <h1 className="capitalize text-3xl pt-6 pb-8">Connect With Me</h1>
            <div className="flex items-center justify-between">
              <button className="bg-cd-cta hover:bg-cd-cta w-32 text-white font-bold py-2 px-4 border border-blue-900 rounded">
                Linkedin
              </button>
              <button className="bg-cd-cta hover:bg-cd-cta w-32 text-white font-bold py-2 px-4 border border-blue-900 rounded">
                Github
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-left justify-between w-full md:w-11/12 flex-col md:flex-row ">
          <div className="flex justify-between">
            <p className="pt-3 text-sm mr-0 md:mr-24">Phone: +260977862033</p>
            <p className="pt-3 text-sm">Email: charinga@gmail.com</p>
          </div>

          <p className="pt-3 text-sm">
            @2023 Jabulani Charinga All Rights Reserves
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
