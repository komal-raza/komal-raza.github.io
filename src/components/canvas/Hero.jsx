import React, { Suspense, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

import {
  Points,
  PointMaterial,
  OrbitControls,
  Preload,
} from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";


const Hero = (props) => {
  const ref = useRef();

  const sphere = random.inSphere(new Float32Array(5000), { radius: 1.2 });

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} frustumCulled {...props} stride={3} positions={sphere}>
        <PointMaterial
          transparent
          color="#f2b872"
          size={0.003}
          sizeAttenuation={true}
        //   depthWrite={false}
        />
      </Points>
    </group>
  );

};

const HeroCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas
        shadows
        // frameloop="demand"
        gl={{ preserveDrawingBuffer: true }}
        camera={{ position: [0, 0, 1] }}
      >
        <Suspense fallback={null}>
          <Hero />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default HeroCanvas;
