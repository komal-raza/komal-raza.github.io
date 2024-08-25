import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

// const ServiceCard = ({ title, icon, tags, index }) => {
//   return (
//     <Tilt className="xs:w-[250px] sm:w-[300px] md:w-[350px] w-full">
//       <motion.div
//         variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
//         className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
//       >
//         <div
//           options={{ max: 45, scale: 1, speed: 450 }}
//           className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col justify-evenly items-center"
//         >
//           <div className="flex flex-col justify-center items-center">
//             <img
//               src={icon}
//               alt={title}
//               className="w-16 h-16 object-container"
//             />
//             <h2 className="text-white text-[20px] font-bold text-center">
//               {title}
//             </h2>
//           </div>
//           <div className="flex flex-wrap justify-center gap-2 mt-4">
//             {tags.map((tag, index) => (
//               <p
//                 key={index}
//                 className="p-1 px-2 font-normal text-[12px] rounded-full bg-white text-black"
//               >
//                 {tag}
//               </p>
//             ))}
//           </div>
//         </div>
//       </motion.div>
//     </Tilt>
//   );
// };

const ServiceCard = ({ title, icon, tags, index }) => {
  return (
    <Tilt className="xs:w-[250px] sm:w-[300px] md:w-[350px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] flex flex-col items-center"
        >
          {/* Image and Title Container */}
          <div
            className="flex flex-col justify-center items-center py-5 px-12"
            style={{ minHeight: "180px" }}
          >
            <img src={icon} alt={title} className="w-16 h-16 object-contain" />
            <h2 className="text-white text-[20px] font-bold text-center mt-4">
              {title}
            </h2>
          </div>
          {/* Tags Container */}
          <div className="flex flex-wrap justify-center gap-2 p-4 w-full">
            {tags.map((tag, index) => (
              <p
                key={index}
                className="p-1 px-2 font-normal text-[12px] rounded-full bg-white text-black"
              >
                {tag}
              </p>
            ))}
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};

// const ServiceCard = ({ title, icon, tags, index }) => {
//   return (
//     <Tilt className="xs:w-[250px] sm:w-[300px] md:w-[350px] w-full">
//       <motion.div
//         variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
//         className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
//       >
//         <div
//           options={{ max: 45, scale: 1, speed: 450 }}
//           className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col justify-evenly items-center"
//         >
//           <img src={icon} alt={title} className="w-16 h-16 object-container" />
//           <h2 className="text-white text-[20px] font-bold text-center">
//             {title}
//           </h2>
//           <div className="flex flex-wrap justify-center gap-2 mt-4">
//             {tags.map((tag, index) => (
//               <p
//                 key={index}
//                 className="p-1 px-2 font-normal text-[12px] rounded-full bg-white text-black"
//               >
//                 {tag}
//               </p>
//             ))}
//           </div>
//         </div>
//       </motion.div>
//     </Tilt>
//   );
// };

export default ServiceCard;
