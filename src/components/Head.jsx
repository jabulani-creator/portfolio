import { Lato, Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

const Head = ({ title }) => {
  return (
    <div className=" flex flex-col items-center py-12">
      <div className="border-t border-gray-600 w-24"></div>
      <div className=" text-cd-txt text-3xl py-2">
        <h1 className={poppins.className}>{title}</h1>
      </div>
    </div>
  );
};

export default Head;
