import React from "react";

import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import texture from "../images/rocky_texture.jpg";

function Box() {
  const colorMap = useLoader(TextureLoader, texture);
  return (
    <mesh rotation={[90, 0, 20]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial map={colorMap} />
    </mesh>
  );
}

export default Box;
