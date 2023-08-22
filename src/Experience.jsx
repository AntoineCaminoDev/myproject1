import { shaderMaterial, Center, useTexture, useGLTF, OrbitControls, Stars, PresentationControls, Float } from '@react-three/drei'
import * as THREE from 'three'
import { useFrame, extend, useThree } from '@react-three/fiber'
import { useRef, useState,useEffect } from 'react'
import { gsap } from "gsap";
import { button, useControls } from 'leva'
import portalVertexShader from './shaders/portal/vertex.glsl'
import portalFragmentShader from './shaders/portal/fragment.glsl'



import Scene1 from "./components/Scene1.jsx"
import Level01 from "./components/Level01.jsx"
import Experience2 from "./components/Experience2"
import Level02 from "./components/Modeletest2.jsx"
import Level03 from "./components/Level03.jsx"
import Level04 from "./components/Level04.jsx"
import Connector from "./components/Connector.jsx"
import Earth from './components/Earth.jsx'
import Moon from './components/Moon.jsx'
import TESTTP from './components/testTP';
import Connector2to3 from './components/Connector2-3';
import Connector3to4 from './components/Connector3-4';




export default function Experience(props) {

  const { section } = props;



  const groupRef = useRef()
  const cameraRef = useRef()

  const lv1Ref = useRef()
  const lv2Ref = useRef()

  // Étape 1: Définir l'état pour garder une trace de l'état actuel (activé ou désactivé)
  const[Activated, setActivated]= useState(false)
  const [clickedMesh, setClickedMesh] = useState(null)
  const [zIndexRange, setZIndexRange] = useState([2, 0]);
// Étape 2: Définir une fonction pour basculer l'état lorsque vous cliquez sur l'image

  const basculerActivation = (objectId,zIndexRange) =>
  {
    setClickedMesh(objectId)
    setActivated(!Activated)
    setZIndexRange(zIndexRange)
    
 
};


// useEffect(() => {
//   if (Activated === true && clickedMesh === "ecranLV3") {
//     setZIndexRange([4, 0]);
    
//   } else {
//     setZIndexRange([2, 0]);
    
//   }
// }, [Activated, clickedMesh]);

// console.log("Current zIndexRange:", zIndexRange);







  // Logique d'animation du déplacement du groupe  s1=18 de base  10pour voir le connecteur 1  s2=38

  useFrame(() => {

    if (groupRef.current) {
      let targetX = 0;
      let targetY = 0;


      if (section === 0) {
        targetX = 1;
        targetY = 0;
      } else if (section === 1) {
        targetX = 18;
        targetY = 0;
      } else if (section === 2) {
        targetX = 40;
        targetY = 0;
      } else if (section === 3) {
        targetX = 125;
        targetY = 0;
      }



      const animationDuration = 4; // Durée de l'animation en secondes

      gsap.to(groupRef.current.position, {
        x: targetX,
        y: targetY,
        duration: animationDuration
      });
    }
  });




  if (Activated===true && clickedMesh === "mesh1") {

    useFrame((state) => {


      gsap.to(state.camera.position, {
        x: 2,
        z: -15,


        duration: 1.5,
       
       


      })

      gsap.to(state.camera.rotation, {
        x: 0.6,
        y: -4.2,
        z:0,
        

        duration: 1.5,
        
        
      })

     
      console.log(state.camera.position,state.camera.rotation)

    });

  } else {
    useFrame((state) => {

      gsap.to(state.camera.position, {
        x: 1,
        y: 2,
        z: 6,


        duration: 2,
        ease: 'Power1.easeInOut'
      })

      gsap.to(state.camera.rotation, {
        x: -0.3217505543966423,

        y: 0.1568156853444008,
        z: 0.05201097082184465,

        duration: 2,
        ease: 'Power1.easeInOut'
      })
    })
  }


// TP SUR LA MAP
  if (Activated===true && clickedMesh === "mesh2") {

    useFrame((state) => {


      gsap.to(state.camera.position, {
        x: -2,
        z: -3,


        duration: 0.5,
        ease: 'Power1.easeInOut'


      })

      gsap.to(state.camera.rotation, {
        y: 0,
        x: 0,



        duration: 2,
        ease: 'Power1.easeInOut'
      })





    });

  } else {
    useFrame((state) => {

      gsap.to(state.camera.position, {
        x: 1,
        y: 2,
        z: 6,


        duration: 2
      })

      gsap.to(state.camera.rotation, {
        x: -0.3217505543966423,

        y: 0.1568156853444008,
        z: 0.05201097082184465,



        duration: 2
      })



    })

    


  }


 

  return <>




    <PresentationControls
      global
      polar={[0, 0]}

      //condition si isactive on change l'attirbut azimuth
      // azimuth={[-0.9, 0.8]}


    // {if (Activated===true) {azimuth={[- 1, 0.8]}}}
    azimuth = { (Activated === true) ? [0, 0] : [-1, 0.8] } 
    >




      <ambientLight intensity={3} />

      <group ref={groupRef} position-z={3}>
        {/* <Earth scale={0.10} />
        <Moon scale={0.25} /> */}
        <Level01 scale={0.25} basculerActivation={basculerActivation} />
        <Connector scale={0.25} />
        {/* <Level02 scale={0.25}  basculerActivation={basculerActivation}  /> */}
        <Connector2to3 scale={0.25} />

        <Level03 scale={0.25} basculerActivation={basculerActivation} />
        <Connector3to4 scale={0.25} />
        <Level04 scale={0.25} />

        {/* <Experience2 scale={0.25}/> */}

      </group>


    </PresentationControls>



    //*****test avec orbit controls****** */
    {/* <OrbitControls />

    <group ref={groupRef}>

      <Earth scale={0.10}/>
        <Moon scale={0.25}/>
        <Level01 scale={0.25}  />
        <Connector scale={0.25}/>
        <Level02 scale={0.25}/>
        <Connector2to3 scale={0.25}/>
        <Level03 scale={0.25}/>
        <Connector3to4 scale={0.25}/>
        <Level04 scale={0.25}/>

      <ambientLight intensity={3} />
      

      

    </group>

 */}








  </>
}