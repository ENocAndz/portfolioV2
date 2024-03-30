import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import CanvasLoader from "../Loader";
import { useGLTF } from "@react-three/drei";

const Computers = () => {
  const computer = useGLTF("./desktop_pc/scene.gltf")
  return (
    <mesh>
      <hemisphereLight intensity={0.75} groundColor='black' />
      <spotLight
        position={[-20, 0.5, 10]}
        angle={10}
        penumbra={1}
        intensity={1000}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive object={computer.scene}
      scale={.75}
      position={[0,-3.25,-1.5]}
      rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

const ComputerCanvas = () => {
  return (
    <Canvas 
    frameloop="demand"
    shadows
    dpr={[1,2]}
    camera={{position:[20,3,5], fov:25}}
    gl={{preserveDrawingBuffer: true}}
    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        />
        <Computers/>
      </Suspense>
      <Preload all/>
    </Canvas>
  )
}

export default ComputerCanvas;