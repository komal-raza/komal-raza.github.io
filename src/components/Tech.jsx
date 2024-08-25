import React from "react";
import { technologies } from "../constants";
import { BallCanvas } from "./canvas";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "../utils/motion";

import { SectionWrapper } from "./hoc";
import { textVariant } from "../utils/motion";
import { styles } from "../style";
import Tilt from "react-parallax-tilt";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} tech-text`}>My Skills</p>
        <h2 className={`${styles.sectionHeadText} tech-text`}>Technologies.</h2>
      </motion.div>
      <div className="mt-10 flex flex-row flex-wrap justify-center gap-5">
        {technologies?.map((technology, index) => (
          <div className="w-44 h-full" key={technology?.name}>
            <Tilt
              options={{
                max: 45,
                scale: 1,
                speed: 550,
              }}
            >
              <motion.div
                variants={slideIn("up", "spring", index * 0.02, 0.94)}
                whileInView={{ scale: [0, 1] }}
                whileHover={{ opacity: [1, 0.9] }}
                transition={{
                  duration: 0.25,
                }}
              >
                <div className="font-bold text-white flex flex-col justify-center items-center gap-2">
                  <img
                    src={technology.icon}
                    alt={technology.name}
                    className="h-12 w-12"
                  />
                  <span>{technology.name}</span>
                </div>
              </motion.div>
            </Tilt>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "skills");
