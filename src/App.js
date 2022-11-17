import React, { Suspense } from "react";

import { Canvas } from "@react-three/fiber";
import Box from "./components/Box";
import { OrbitControls } from "@react-three/drei";

function App() {
  return (
    <div style={{ background: "#131313", height: "100vh" }}>
      <Canvas className="canvas">
        <OrbitControls />
        <Suspense>
          <Box />
        </Suspense>
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
      </Canvas>
    </div>
  );
}

export default App;
