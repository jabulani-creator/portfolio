import classNames from "classnames";

// Define a function to generate font classes based on the font name
function getFontClass(fontName) {
  return classNames({
    "font-lato": fontName === "Lato",
    "font-playfair": fontName === "Playfair Display",
    "font-poppins": fontName === "Poppins",
    // Add more font classes for other fonts as needed
  });
}

const Fonts = ({ fonts, colors }) => {
  return (
    <div className=" text-cd-txt pt-28">
      <ul className="w-11/12 md:w-9/12 m-auto  flex  justify-between mb-14 md:flex-row flex-col">
        {colors.map((color, index) => (
          <li key={index}>
            <div className="flex flex-col items-center">
              <div
                style={{
                  backgroundColor: color,
                  width: "10rem",
                  height: "10rem",
                  borderRadius: "50%",
                }}
              ></div>
              <h3 className="mt-3 mb-5">{color}</h3>
            </div>
          </li>
        ))}
      </ul>
      <ul className="w-11/12 md:w-9/12 m-auto  flex flex-col md:flex-row justify-between">
        {fonts.map((font, index) => {
          const fontClass = getFontClass(font);

          return (
            <li key={index} className="mb-10">
              <h2>{font}</h2>
              <h4 className={`${fontClass} tracking-widest md:w-full text-2xl`}>
                a b c d e f g h i j k l m n o p q r s t u v w x y z <br /> 1 2 3
                4 5 6 7 8 9
              </h4>
              <h2 className="font-bold mt-5">{font} Bold</h2>
              <h4
                className={`${fontClass} tracking-widest md:w-full font-bold text-2xl`}
              >
                a b c d e f g h i j k l m n o p q r s t u v w x y z <br /> 1 2 3
                4 5 6 7 8 9
              </h4>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Fonts;

// import { Poppins, Lato, Playfair_Display } from "next/font/google";
// import classNames from "classnames"; // Import the classNames library

// const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });
// const lato = Lato({ subsets: ["latin"], weight: ["400"] });
// const Playfair = Playfair_Display({ subsets: ["latin"], weight: ["400"] });

// const Fonts = ({ fonts, colors }) => {
//   return (
//     <div className="bg-cd-bck2 text-cd-txt pt-28">
//       <ul className="w-11/12 md:w-9/12 m-auto  flex  justify-between mb-14">
//         {colors.map((color, index) => (
//           <li key={index}>
//             <div
//               style={{
//                 backgroundColor: color,
//                 width: "10rem",
//                 height: "10rem",
//                 borderRadius: "50%",
//               }}
//             ></div>
//           </li>
//         ))}
//       </ul>
//       <ul className="w-11/12 md:w-9/12 m-auto  flex flex-col md:flex-row justify-between">
//         {fonts.map((font, index) => {
//           // Define CSS classes based on the font name
//           const fontClass = classNames({
//             "font-poppins": font === "Poppins",
//             "font-lato": font === "Lato",
//             "font-playfair": font === "Playfair_Display",
//             // Add more font classes for other fonts as needed
//           });

//           return (
//             <li key={index} className="mb-10">
//               <h2>{font}</h2>
//               <h4 className={`${fontClass} tracking-widest md:w-full`}>
//                 a b c d e f g h i j k l m n o p q r s t u v w x y z <br /> 1 2 3
//                 4 5 6 7 8 9
//               </h4>
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// };

// export default Fonts;
