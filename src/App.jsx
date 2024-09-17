import { BrowserRouter } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { HeroCanvas, StarsCanvas } from './components/canvas';

const Navbar = lazy(() => import('./components/Navbar'));
const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const Experience = lazy(() => import('./components/Experience'));
const Tech = lazy(() => import('./components/Tech'));
const Works = lazy(() => import('./components/Works'));
const Contact = lazy(() => import('./components/Contact'));


function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Suspense fallback={<h1>Loading...</h1>}>
          <div className=" bg-cover bg-no-repeat bg-center">
            <Navbar />
            <div className="relative border-b-1 border-[#01205a] mb-10">
              <Hero />
              {/* <HeroCanvas /> */}
            </div>
          </div>
        </Suspense>
       <Suspense fallback={<h1>Loading...</h1>}>
          <About />
          <Experience />
        </Suspense>
        <Suspense fallback={<h1>Loading...</h1>}>
          <div className="bg-tech-pattern relative bg-cover bg-no-repeat bg-center ">
            <div className="tech-content">
              <Tech />
            </div>
          </div>
        </Suspense>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Works />
        </Suspense>
         <Suspense fallback={<h1>Loading...</h1>}>
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
