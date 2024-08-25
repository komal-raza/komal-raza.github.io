import React from "react";

import { motion } from "framer-motion";
import { services } from "../constants";
import { styles } from "../style";
import { fadeIn, textVariant } from "../utils/motion";
import ServiceCard from "./ServiceCard";
import { SectionWrapper } from "./hoc";

const About = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <div className="flex justify-center items-center">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[34px]"
        >
          I'm skilled software developer with Experience in Javascript,
          expertise in frameworks like React, Node, Three.js and Custom Shopify
          app development. I'm quick learner and collborate closely with clients
          to create effiecient and scalable and user friendly solutions to solve
          real world problems. Let's work together to bring your ideas to Life
        </motion.p>{" "}
      </div>

      <div className="mt-20 flex flex-row flex-wrap gap-10">
        {services?.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
