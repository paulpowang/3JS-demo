import React from "react";

function Box() {
  return (
    <mesh rotation={[90, 0, 20]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  );
}

export default Box;
