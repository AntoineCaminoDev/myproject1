

import React, { useRef, useState } from "react";
import { useTexture, useGLTF, Environment, MeshPortalMaterial, Stars, shaderMaterial, PresentationControls } from '@react-three/drei'
import { useFrame, extend } from '@react-three/fiber'
import * as THREE from "three";
import { gsap } from "gsap";

import portalVertexShader from '../shaders/portal/vertex.glsl'
import portalFragmentShader from '../shaders/portal/fragment.glsl'






useGLTF.preload("/Level01.glb");


export default function Level01({ basculerActivation }, objectId, props) {

  const  {nodes} = useGLTF("./models/Level01.glb");
  

  const texture1 = useTexture("./textures/Lv0Baked.jpg");

 

  texture1.flipY = false


  const group = useRef();



  const buttonClick = (objectId) => {

    basculerActivation(objectId)
  }


  return <>
    



      <mesh
        geometry={nodes.baked.geometry}
        scale={0.25}
        position={[1,0,-2]}
        // position={nodes.baked.position}
       
        // rotation-y={1.6}
       

      >
        <meshBasicMaterial map={texture1} />
      </mesh>
   
  </>




}









