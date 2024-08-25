
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
import { HeroCanvas } from "./components/canvas";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  About,
  Contact,
  Navbar,
  Tech,
  StarsCanvas,
  Feedbacks,
  Hero,
  Works,
  Experience,
} from "./components";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className=" bg-cover bg-no-repeat bg-center">
            <Navbar />
          <div className="relative border-b-1 border-[#070d1c] mb-10">
            <Hero />
            <HeroCanvas/>
          </div>
        </div>

        <About />
        <Experience />
        <div className="bg-tech-pattern relative bg-cover bg-no-repeat bg-center ">
          <div className="tech-content">
            <Tech />
          </div>
        </div>
        <Works />
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
