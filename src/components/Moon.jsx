
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from '@react-three/fiber'

export default function Moon(props) {
  const { nodes, materials } = useGLTF("./models/moon.glb");

  useFrame(() => {
    moonRef.current.rotation.y += 0.003
  });
//x droite a gauche y hauteur z profondeur 
  const moonRef = useRef()
  return (
    <group {...props} dispose={null} position={[10,-70,-100]} ref={moonRef}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.moon.geometry}
        material={materials["Material.008"]}
        rotation={[-0.107, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/moon.glb");
