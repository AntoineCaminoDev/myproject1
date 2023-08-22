import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function  Connector3to4(props) {
  const { nodes, materials } = useGLTF("./models/connector3-4.glb");
  return (
    <group {...props} dispose={null}>
    <group position={[-203.989, -0.181, 1.197]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube274.geometry}
        material={materials.blanc}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube274_1.geometry}
        material={materials["white light"]}
      />
    </group>
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cube178.geometry}
      material={materials["metal foncé"]}
      position={[-207.226, 4.008, -89.047]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Plane090.geometry}
      material={materials.level00}
      position={[-445.187, 0.339, 1.103]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cube039.geometry}
      material={materials.verre}
      position={[-397.092, -40.032, -120.077]}
    />
    <group
      position={[-326.09, -29.973, -200.877]}
      rotation={[0.046, 0, 0]}
      scale={30.986}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder097.geometry}
        material={materials.Eva02noir}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder097_1.geometry}
        material={materials.eva02Orange}
      />
    </group>
    <group position={[-337.543, 13.182, -194.688]} scale={77.359}>
      <group
        position={[0.144, -0.897, 0.238]}
        rotation={[-0.234, 0, 0]}
        scale={0.401}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder098.geometry}
          material={materials.Eva02rouge}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder098_1.geometry}
          material={materials["DarkBlack.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder098_2.geometry}
          material={materials["Grey.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder098_3.geometry}
          material={materials.eva02Orange}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder098_4.geometry}
          material={materials["Black.003"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.eyes002.geometry}
        material={materials["Material.001"]}
        position={[0.145, 0.024, 0.68]}
        rotation={[0.127, 0, 0]}
        scale={0.252}
      />
      <group
        position={[0.145, 0.024, 0.677]}
        rotation={[0.127, 0, 0]}
        scale={0.252}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder100.geometry}
          material={materials.Eva02rouge}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder100_1.geometry}
          material={materials["White.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder100_2.geometry}
          material={materials.eva02Orange}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder100_3.geometry}
          material={materials["DarkBlack.001"]}
        />
      </group>
      <group position={[0.144, -0.88, -0.354]} scale={0.105}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder101.geometry}
          material={materials.eva02Orange}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder101_1.geometry}
          material={materials.Eva02rouge}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder101_2.geometry}
          material={materials.Eva02grisFoncé}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spine002.geometry}
        material={materials.Eva02grisFoncé}
        position={[0.144, -0.641, -0.018]}
        rotation={[-0.234, 0, 0]}
        scale={0.274}
      />
    </group>
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cube048.geometry}
      material={materials["metal foncé"]}
      position={[-429.836, -23.316, -154.915]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cube050.geometry}
      material={materials["metal foncé"]}
      position={[-224.159, -23.316, -154.915]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Text.geometry}
      material={materials.blanc}
      position={[-459.666, 11.013, -237.938]}
      rotation={[Math.PI / 2, 0, 0]}
      scale={12.542}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Text035.geometry}
      material={materials.blanc}
      position={[-459.781, 31.027, -239.248]}
      rotation={[Math.PI / 2, 0, 0]}
      scale={4.866}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Text037.geometry}
      material={materials.blanc}
      position={[-412.68, 30.149, -236.09]}
      rotation={[Math.PI / 2, 0, 0]}
      scale={16.694}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cube172.geometry}
      material={materials["metal foncé"]}
      position={[-389.247, -21.309, -120.386]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cube173.geometry}
      material={materials["metal foncé"]}
      position={[-324.444, -21.309, -120.386]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cylinder002.geometry}
      material={materials.metal}
      position={[-398.904, -20.044, -122.271]}
      rotation={[Math.PI / 2, 0, 0]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cylinder003.geometry}
      material={materials.metal}
      position={[-258.197, -20.044, -122.271]}
      rotation={[Math.PI / 2, 0, 0]}
    />
  </group>
  );
}

useGLTF.preload("/connector3-4.glb");
