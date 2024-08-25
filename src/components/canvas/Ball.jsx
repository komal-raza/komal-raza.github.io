import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";
const Ball = (props) => {
  const [decal] = useTexture([props?.text]);
  return (
    <Float speed={1.76} rotationIntensity={2} floatIntensity={2}>
      <ambientLight intensity={0.9} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.8}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          map={decal}
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ name }) => {
  return (
    <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball text={name} />
        {/* <p>{name}</p> */}
      </Suspense>
      <Preload all />
    </Canvas>
  );
};
export default BallCanvas;
