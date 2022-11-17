import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Box from "./components/Box";
import BoxNormalMaterial from "./components/BoxNormalMaterial";
import { OrbitControls } from "@react-three/drei";
import AnimatedSphere from "./components/AnimatedSphere";

function App() {
  return (
    <div style={{ background: "#131313", height: "auto" }}>
      <Canvas className="canvas" style={{ height: "500px" }}>
        <OrbitControls />
        <Suspense fallback={null}>
          <Box />
        </Suspense>
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
      </Canvas>
      <Canvas className="canvas" style={{ height: "500px" }}>
        <OrbitControls />
        <Suspense fallback={null}>
          <BoxNormalMaterial />
        </Suspense>
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
      </Canvas>
      <Canvas className="canvas" style={{ height: "500px" }}>
        <OrbitControls />
        <Suspense fallback={null}>
          <AnimatedSphere />
        </Suspense>
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
      </Canvas>
    </div>
  );
}

export default App;
