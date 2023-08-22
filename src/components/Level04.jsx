import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Level04(props) {
  const { nodes, materials } = useGLTF("./models/Level04.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube208.geometry}
        material={materials["metal foncé"]}
        position={[-489.372, 3.98, -29.787]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text036.geometry}
        material={materials.blanc}
        position={[-482.842, 4.966, -15.334]}
        rotation={[1.284, -0.223, 0.732]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube210.geometry}
        material={materials.level3}
        position={[-480.858, 4.785, -14.313]}
        rotation={[-0.063, 0.792, -0.352]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text041.geometry}
        material={materials.blanc}
        position={[-480.876, 6.921, -14.649]}
        rotation={[1.214, -0.275, 0.745]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube213.geometry}
        material={materials["metal foncé"]}
        position={[-499.413, 0.598, 1.429]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube214.geometry}
        material={materials["metal foncé"]}
        position={[-500.614, -0.238, -21.019]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube215.geometry}
        material={materials["metal foncé"]}
        position={[-499.413, 0.598, -40.873]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube216.geometry}
        material={materials.metal}
        position={[-539.008, 9.723, -13.498]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube217.geometry}
        material={materials.metal}
        position={[-539.008, 9.723, -45.565]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane079.geometry}
        material={materials.Material}
        position={[-513.745, 0.952, -4.78]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane080.geometry}
        material={materials.Material}
        position={[-494.905, 0.952, -4.78]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane081.geometry}
        material={materials["Material.002"]}
        position={[-504.336, 0.952, -4.78]}
      />
      <group
        position={[-476.731, 3.601, -17.435]}
        rotation={[Math.PI, -0.671, Math.PI]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube240.geometry}
          material={materials["metal orange"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube240_1.geometry}
          material={materials["Material.006"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube211.geometry}
        material={materials["white light"]}
        position={[-504.576, 1.345, -13.459]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube212.geometry}
        material={materials["white light"]}
        position={[-504.576, 1.345, -34.271]}
      />
      <group position={[-476.731, 4.438, -50.527]} rotation={[0, -0.487, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube249.geometry}
          material={materials["metal orange"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube249_1.geometry}
          material={materials["Material.006"]}
        />
      </group>
      <group position={[-475.386, 4.438, -40.334]} rotation={[0, -0.487, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube250.geometry}
          material={materials["metal orange"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube250_1.geometry}
          material={materials["Material.006"]}
        />
      </group>
      <group position={[-483.051, 4.15, -44.044]} rotation={[0, -0.487, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube251.geometry}
          material={materials["metal orange"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube251_1.geometry}
          material={materials["Material.006"]}
        />
      </group>
      <group position={[-477.782, 11.768, -47.004]} rotation={[0, -0.487, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube252.geometry}
          material={materials["metal orange"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube252_1.geometry}
          material={materials["Material.006"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane082.geometry}
        material={materials["Material.008"]}
        position={[-534.283, 0.964, -22.043]}
        rotation={[0, 1.567, 0]}
      />
    </group>
  );
}

useGLTF.preload("/Level04.glb");