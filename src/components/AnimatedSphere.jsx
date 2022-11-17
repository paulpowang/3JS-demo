import React from "react";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";

function AnimatedSphere() {
  return (
    <Sphere visible args={[2, 100, 200]}>
      <MeshDistortMaterial
        color={"#5a89ce"}
        attach="material"
        distort={0.3}
        speed={2}
      />
    </Sphere>
  );
}

export default AnimatedSphere;
