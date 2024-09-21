import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { circle, github, linkedin, heroimg } from "../assets";

import "../App.css";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      {/* <div id="home" className="app__header app__flex">
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="app__header-img"
        >

          <motion.img
            whileInView={{ scale: [0, 1] }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="overlay_circle"
            src={circle}
            alt="profile_circle"
          />
        </motion.div>
      </div> */}
      <div className="absolute inset-0 top-[100px] lg:top-[100px] max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-5">
        <div className="flex flex-col lg:flex-row justify-start items-start w-full lg:min-h-screen p-8">
          {/* Text of Hero Section */}
          <span className="text-2xl"> 👋</span>
          <div className="lg:w-1/2 flex flex-col justify-center items-center mt-5 ">
            <div className="flex">

              <div className="flex flex-col">
                <motion.h1
                  className="text-5xl lg:text-6xl font-bold text-white"
                  initial={{ x: -200, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r to-[#b1b2b2] from-violet-600">Komal Raza</span>
                </motion.h1>
                <motion.h2
                  className=" mt-4 h-16 text-2xl lg:text-2xl font-semibold mb-4"
                  initial={{ x: -200, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.2 }}
                >
                  <Typewriter
                    words={[
                      "Frontend Developer",
                      "Shopify App Developer",
                      "Node.js Developer ",
                      "MERN Stack Developer",
                    ]}
                    loop={false}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </motion.h2>

                <motion.p
                  className="text-lg lg:text-xl text-white-100 mt-2"
                  initial={{ x: -200, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.3 }}
                >
                  {" "}
                  Transforming Your Ideas into Exceptional Web Solutions.
                </motion.p>

                <div className="mt-6 flex space-x-6">
                
                  <motion.a
                    href="#project"
                    className="relative inline-block px-2 py-2 w-32 md:w-48 md:px-5 md:py-3 text-center bg-transparent cursor-pointer text-white font-semibold text-sm md:text-lg hover:bg-[#121330] transition-colors duration-500"
                    // whileTap={{ scale: 0.95 }}
                    initial={{ x: -200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                  >
                    Explore
                    <span className="absolute inset-0 border-corner before:absolute before:content-[''] before:top-0 before:left-0 before:border-t-[3px] before:border-l-[3px] before:border-[#00ffff] before:w-[20px] before:h-[20px] after:absolute after:content-[''] after:bottom-0 after:right-0 after:border-b-[3px] after:border-r-[3px] after:border-[#00ffff] after:w-[20px] after:h-[20px]">
                      <span className="block absolute top-0 left-0 w-0 h-0 border-t-[3px] border-l-[3px] border-[#00ffff] transition-all duration-500"></span>
                      <span className="block absolute bottom-0 right-0 w-0 h-0 border-b-[3px] border-r-[3px] border-[#00ffff] transition-all duration-500"></span>
                    </span>
                    <style jsx>{`
                      a:hover span span:first-child {
                        width: 100%;
                        height: 100%;
                      }
                      a:hover span span:last-child {
                        width: 100%;
                        height: 100%;
                      }
                    `}</style>
                  </motion.a>

                  <motion.a
                    href="#contact"
                    className="px-2 py-2 w-32 md:w-48 md:px-4 md:py-3 text-center border-[1px] border-[#00ffff] text-white font-semibold text-sm md:text-lg hover:border-[#00ffff] hover:bg-[#121330] hover:text-[#00ffff] transition-colors"
                    initial={{ x: -200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                  >
                    Let's Connect{" "}
                  </motion.a>
                </div>

                <div className="mt-6 flex space-x-4">
                  <ul className="flex justify-between items-center gap-4 md:gap-5">
                    {[
                      {
                        title: github,
                        link: "https://github.com/komal-raza",
                      },
                      {
                        title: linkedin,
                        link: "https://linkedin.com/in/komal-raza",
                      },
                    ].map(({ title, link }, index) => (
                      <li
                        key={index}
                        className="hover:bg-[#141533] hover:rounded-full py-1 px-1"
                      >
                        <Link to={link} className="cursor-pointer">
                          <img className="w-8 h-8 " src={title} alt="img" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side*/}
          <motion.div
            className="lg:w-2/3 w-full lg:flex hidden justify-start items-start"
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img src={heroimg} alt="Developer Girl" className="w-full h-auto" />
          </motion.div>
        </div>
      </div>

      {/* Scroll down animation */}
      <div className="hidden absolute sm:bottom-32 md:bottom-0 bottom-12 w-full md:flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
    // </div>
  );
};

export default Hero;

{
  // <motion.div
  //             variant={scaleVariants}
  //             whileInView={scaleVariants.whileInView}
  //             className="app__header-circles"
  //           >
  //             {[shopify, nodejs, reactjs].map((circle, index) => (
  //               <div className="circle_cmp app__flex" key={`circle-${index}`}>
  //                 <img src={circle} alt="circle" />
  //               </div>
  //             ))}
  //           </motion.div>
  // <section className="relative w-full h-screen mx-auto">
  //   <div
  //     className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
  //   >
  //     {" "}
  //     <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen p-8">
  //       {/*  */}
  //       <div className="flex flex-col justify-center items-center mt-5">
  //         <div className="w-5 h-5 rounded-full bg-[#915eff]" />

  //         <div className="w-1 sm:h-80 h-40 violet-gradient" />
  //       </div>
  //       {/* Text of Hero Section */}
  //       <div>
  //         <motion.h1
  //           className={`${styles.heroHeadText} text-white`}
  //           initial={{ x: -200, opacity: 0 }}
  //           animate={{ x: 0, opacity: 1 }}
  //           transition={{ duration: 1 }}
  //         >
  //           Hi, I'm <span className="text-[#915eff]">Komal Raza</span>
  //         </motion.h1>
  //         <motion.h2
  //           className="text-2xl lg:text-4xl font-semibold mb-4"
  //           initial={{ x: -200, opacity: 0 }}
  //           animate={{ x: 0, opacity: 1 }}
  //           transition={{ duration: 1, delay: 0.2 }}
  //         >
  //           <Typewriter
  //             words={["Software Engineer", "MERN STACK"]}
  //             loop={false}
  //             cursor
  //             cursorStyle="_"
  //             typeSpeed={70}
  //             deleteSpeed={50}
  //             delaySpeed={1000}
  //           />
  //         </motion.h2>
  //         <motion.p
  //           className={`${styles.heroSubText} mt-2 text-white-100`}
  //           initial={{ x: -200, opacity: 0 }}
  //           animate={{ x: 0, opacity: 1 }}
  //           transition={{ duration: 1, delay: 0.4 }}
  //         >
  //           Developer from Pakistan, with hands-on experience in Frontend,
  //           Backend, and Custom Shopify App Development.
  //         </motion.p>
  //       </div>

  //     </div>
  //     {/* Right Side */}
  //     <motion.div
  //       className="lg:w-1/2 w-full lg:flex hidden justify-center items-center"
  //       initial={{ x: 200, opacity: 0 }}
  //       animate={{ x: 0, opacity: 1 }}
  //       transition={{ duration: 1 }}
  //     >
  //       <img src={girl} alt="Developer Girl" className="w-3/4" />
  //     </motion.div>
  //   </div>

  //   {/* Scroll down animation */}

  //   <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
  //     <a href="#about"></a>
  //   </div>
  //   <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
  //     <a href="#about">
  //       <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
  //         <motion.div
  //           animate={{ y: [0, 24, 0] }}
  //           transition={{
  //             duration: 1.5,
  //             repeat: Infinity,
  //             repeatType: "loop",
  //           }}
  //           className="w-3 h-3 rounded-full bg-secondary mb-1"
  //         />
  //       </div>
  //     </a>
  //   </div>
  // </section>
  /* <h1 className={`${styles.heroHeadText} text-white`}>
            {" "}
            Hi, I'm <span className="text-[#915eff]">Komal</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            A full stack developer with hand-on-experience{" "}
            <br className="sm:block hidden" /> in web and Shopify app
            development
          </p> */
  {
    /* Buttons */
  }
}
{
  /* <motion.p
              className="text-lg lg:text-xl text-white-100 mt-2"
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              I am a passionate and dedicated software engineer with a strong
              foundation in both frontend and backend development. My expertise
              lies in creating seamless and efficient web applications using the
              MERN stack. With a keen eye for detail and a commitment to
              delivering high-quality solutions, I thrive in dynamic
              environments where innovation and creativity are key. Join me on a
              journey of transforming ideas into reality, one line of code at a
              time.
            </motion.p> */
}

{
  /* <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              trasition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div> */
}
