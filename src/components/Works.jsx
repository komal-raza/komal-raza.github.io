import React from "react";
import { SectionWrapper } from "./hoc";
import { motion } from "framer-motion";
import { styles } from "../style";
import { github, live } from "../assets";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

import Tilt from "react-parallax-tilt";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  link,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      whileInView={{ scale: [0, 1] }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{
        duration: 0.95,
      }}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 550,
        }}
        className="bg-tertiary p-5 rounded-2xl xs:w-[360px] w-full overflow-hidden"
      >
        <div className="relative h-[200px] w-full sm:h-[150px] xs:h-[120px]">
          <img
            src={image}
            alt={name}
            loading="lazy"
            className="w-full h-full object-cover rounded-2xl"
          />

          {/* make something appear on top  */}
          <div className="absolute inset-0 flex justify-end gap-3 m-3 card-img_hover">
            {source_code_link && (
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={github}
                  alt="github"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            )}

            {/* Add the live Link for your project */}
            {link && (
              <div
                onClick={() => window.open(link, "_blank")}
                className="black-gradient bg-white-100 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={live}
                  alt="live"
                  className="w-1/2 h-1/2 object-contain "
                />
              </div>
            )}
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold md:text-[24px] sm:text-[12px] xs:text-[9px]">{name}</h3>
          <p className="mt-2 text-secondary text-[11px] md:text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags?.map((tag) => (
            <p key={tag.name} className={`text-[9px] md:text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <div className="w-full flex justify-center items-center">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[12px] md:text-[17px] max-w-3xl leading-[30px]"
        >
          Following Projects showcases my skills and experinece through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. it reflects my
          ability to work with different technologies and manage project
          effectively
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects?.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} index />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "project");
