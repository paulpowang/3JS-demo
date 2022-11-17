import React from "react";

function BoxNormalMaterial() {
  return (
    <mesh rotation={[90, 0, 20]}>
      <boxGeometry args={[1, 1, 1]} />

      <meshNormalMaterial attach="material" />
    </mesh>
  );
}

export default BoxNormalMaterial;
