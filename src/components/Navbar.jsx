import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { styles } from "../style";
import { logo, menu, close, github, linkedin } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 transition-all duration-300 hover:border-b-2 hover:border-[#151030] ${
        scrolled
          ? "bg-tertiary bg-opacity-30 backdrop-blur-lg shadow-lg"
          : "bg-primary border-b-[#071022] shadow-md"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-32 h-8 object-contain" />
          <p className="text-white flex text-[18px] font-bold cursor-pointer">
            {" "}
            {/* <span className="sm:block hidden">| Frontend Developer</span> */}
          </p>
        </Link>
      

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks?.map((link) => (
            <li
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white hover:border-t-2 hover:border-text-secondary text-[18px] font-medium cursor-pointer`}
              key={link.id}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`} >{link.title}</a>{" "}
            </li>
          ))}
        </ul>

        {/* Navigation menu for small devices */}

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-4 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex flex-col justify-end items-start gap-4">
              {navLinks?.map((link) => (
                <li
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-poppins text-[16px] font-medium cursor-pointer  hover:text-white hover:border-b-2 hover:border-text-secondary `}
                  key={link.id}
                  onClick={() => {
                    setActive(link.title);
                    setToggle(!toggle);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>{" "}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
