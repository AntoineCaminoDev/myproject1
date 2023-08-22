import React, { Children, useRef, useState } from "react";
import { useGLTF, useTexture, MeshPortalMaterial, Environment, RoundedBox } from "@react-three/drei";
import * as THREE from "three";

export default function TESTTP(props) {
   
  
    // const [active,setActive]=useState(null)
  
    const map1 = useTexture("./textures/anime_art_style_a_water_based_pokemon_like_environ.jpg")
    // const map2 = useTexture("./textures/anime_art_style_earth_from_space.jpg")
    // const map3 = useTexture("./textures/AdobeStock_226375061.jpeg")
  
    // const vitrineRef = useRef();
    // const boutiqueRef = useRef();
    // const seoRef = useRef();
    const meshRef = useRef();
    const blendref= useRef();
  
    // const handleClick = () => {
    // //   setActive(active===meshRef.current.name?null:meshRef.current.name)
    // console.log(seoRef.current.blending)
    // seoRef.current.blending=0
    // // console.log(active);
    // };

    const handleClick = () => {


        // //   setActive(active===meshRef.current.name?null:meshRef.current.name)
        // console.log(seoRef.current.blending)
        // seoRef.current.blending=0
        // // console.log(active);
        console.log(blendref);
        blendref.current.blend=1

        console.log(blendref);
        
        };
  
  
  
  
  
  
    return (
      <mesh ref={meshRef}  onDoubleClick={() => handleClick()} position={[0,3,0,]} scale={0.25}>

        <planeGeometry args={[2,3]}/>
        <MeshPortalMaterial side={THREE.DoubleSide} ref={blendref}>

        <ambientLight intensity={1} />
        <Environment preset="sunset" />
        
        <mesh>

          <sphereGeometry args={[5, 64, 64]} scale={0.25}/>


          <meshStandardMaterial map={map1} side={THREE.BackSide} />


        </mesh>  
        </MeshPortalMaterial>

        </mesh>
    );
  }
  
  useGLTF.preload("/level02TEST.glb");
  