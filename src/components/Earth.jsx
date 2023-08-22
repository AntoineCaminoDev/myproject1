import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from '@react-three/fiber'

export default function Model(props) {
  const { nodes, materials } = useGLTF("./models/earth.glb");

  const earthRef = useRef()
//0.01
  useFrame(() => {
    earthRef.current.rotation.y += 0.003
  });

  return (
    <group {...props} dispose={null} position={[30,10,-200]} ref={earthRef}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.terre.geometry}
        material={materials.Material}
        position={[-0.842, 5.906, -6.132]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ocean.geometry}
        material={materials.level01}
        position={[-0.842, 5.904, -6.132]}
      />
    </group>
  );
}

useGLTF.preload("/earth.glb");
