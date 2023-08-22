import React, { useRef, useState } from "react";
import { useGLTF, Html } from "@react-three/drei";
import { useFrame } from '@react-three/fiber'
import Pages from "./pages"
import { ScrollManager } from "./ScrollManager";
import { NoBlending } from "three";
import { gsap } from "gsap";

export default function Level03({ basculerActivation }, objectId, props) {
  const { nodes, materials } = useGLTF("./models/Level03.glb");


  const planeRef = useRef()

  const porteNordRef = useRef()
  const porteSudRef = useRef()
  const vaisseauRef = useRef()
  const iframeRef= useRef()

  const [zIndexRange, setZIndexRange] = useState([2, 0]);
  const [activated, setActivated] = useState(false);

  const buttonClick = (objectId, zIndexRange) => {
    setActivated((prevActivated) => !prevActivated);
    basculerActivation(objectId, zIndexRange)
    setZIndexRange(zIndexRange)



  }

  //ouverture des portes

  useFrame((state) => {

    if (activated) {


      gsap.to(porteNordRef.current.position, {


        z: -45,


        duration: 2
      })


      gsap.to(porteSudRef.current.position, {

        z: -13,


        duration: 2


      })

      


    } else {



      gsap.to(porteNordRef.current.position, {


        z: -27.839,


        duration: 2
      })


      gsap.to(porteSudRef.current.position, {

        z: -27.839,


        duration: 2


      })

    }

  });







  /*MACHINE*/
  const [Cliked, setCliked] = useState(false)
  const [clickedButton, setclickedButton] = useState(null)

  const activerMachine = (objectClicked) => {

    setCliked(!Cliked)
    setclickedButton(objectClicked)

    console.log(objectClicked);
    console.log('machine');

  };






  // passer de 2  à 4 

  return (
    <group {...props} dispose={null} scale={0.25}>
    <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube185.geometry}
        material={materials.Eva02noir}
        position={[-118.592, 2.1, -59.127]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube200.geometry}
        material={materials.metal}
        position={[-180.212, 6.543, -57.161]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube248.geometry}
        material={materials.metal}
        position={[-122.579, 6.543, -57.161]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube250.geometry}
        material={materials["orange light"]}
        position={[-180.212, 6.543, -57.161]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube251.geometry}
        material={materials["orange light"]}
        position={[-122.579, 6.543, -57.161]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube249.geometry}
        material={materials.metal}
        position={[-152.064, 1.966, 1.175]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text034.geometry}
        material={nodes.Text034.material}
        position={[-184.983, 7.091, -14.822]}
        rotation={[Math.PI / 2, 0, -1.566]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube356.geometry}
        material={materials["metal foncé"]}
        position={[-117.566, 8.319, -31.33]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube357.geometry}
        material={materials["metal foncé"]}
        position={[-117.733, 11.982, -19.691]}
        rotation={[-3.141, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube293.geometry}
        material={materials["white light"]}
        position={[-117.566, 8.319, -31.33]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube358.geometry}
        material={materials["white light"]}
        position={[-117.566, 11.975, -19.706]}
        rotation={[3.137, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube190.geometry}
        material={materials.jaune}
        position={[-184.456, 0.822, -0.597]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane073.geometry}
        material={materials.Material}
        position={[-160.489, 0.894, -5.359]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane075.geometry}
        material={materials.Material}
        position={[-141.649, 0.894, -5.359]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane076.geometry}
        material={materials["Material.002"]}
        position={[-151.08, 0.894, -5.359]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text026.geometry}
        material={materials.blanc}
        position={[-184.415, 5.401, -15.503]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text028.geometry}
        material={materials.blanc}
        position={[-184.386, 5.592, -16.623]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text029.geometry}
        material={materials.blanc}
        position={[-184.387, 5.554, -17.756]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text030.geometry}
        material={materials.blanc}
        position={[-184.309, 5.364, -20.004]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text031.geometry}
        material={materials.blanc}
        position={[-184.417, 5.558, -19.012]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text032.geometry}
        material={materials.blanc}
        position={[-184.372, 3.799, -15.51]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text018.geometry}
        material={materials.blanc}
        position={[-184.414, 3.663, -16.614]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube054.geometry}
        material={materials.level3}
        position={[-184.302, 5.624, -16.699]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube187.geometry}
        material={materials.metal}
        position={[-152.982, 2.108, -11.027]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube049.geometry}
        material={materials.metal}
        position={[-151.136, 4.037, 0.802]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bouton_ON.geometry}
        material={materials.level3}
        position={[-152.972, 2.58, 2.133]}
        rotation={[1.071, 0.006, -0.011]}
        onClick={() =>{{ console.log('ici'),buttonClick("ecranLV3", activated ? [2, 0]  : [4, 0])}  }}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ecran_.geometry}
        material={materials.blanc}
        position={[-151.136, 4.037, 0.802]}
      >
         <Html wrapperClass="htmlScreen" prepend zIndexRange={zIndexRange} width={2000} height={1000} transform occlude={NoBlending} distanceFactor={5} position={[-0.2, 0, 0]} ref={planeRef} >
          <div>
            <Pages activerMachine={activerMachine} />
          </div>
        </Html>
       </mesh> 
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube186.geometry}
        material={materials["metal foncé"]}
        position={[-147.819, 0.55, 2.182]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.baselv2.geometry}
        material={materials.blanc}
        position={[-137.997, 3.937, -29.839]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert042.geometry}
        material={materials.metal}
        position={[-173.299, 2.737, -10.902]}
        rotation={[1.573, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert043.geometry}
        material={materials.metal}
        position={[-177.797, 2.737, -10.902]}
        rotation={[1.573, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert044.geometry}
        material={materials.metal}
        position={[-182.273, 2.737, -10.902]}
        rotation={[1.573, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube181.geometry}
        material={materials.metal}
        position={[-152.982, 2.456, -39.962]}
        scale={1.009}
      />
      <group position={[-118.826, 6.778, -45.54]} rotation={[0, 0, 1.447]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane044.geometry}
          material={materials.metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane044_1.geometry}
          material={materials["white light"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.porteSud.geometry}
        material={materials.metal}
        position={[-139.92, -3.876, -27.839]}
        ref={porteSudRef}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.porteNord.geometry}
        material={materials.metal}
        position={[-139.92, -3.876, -27.839]}
        ref={porteNordRef}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.vaisseauxLv2.geometry}
        material={materials.Eva02grisFoncé}
        position={[-151.392, -14.283, -25.579]}
        rotation={[0, 0, -Math.PI / 2]}
        ref={vaisseauRef}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube270.geometry}
        material={materials.Eva02rouge}
        position={[-182.424, 5.569, -47.608]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube271.geometry}
        material={materials.blanc}
        position={[-182.424, 2.767, -47.608]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube272.geometry}
        material={materials["metal orange"]}
        position={[-182.424, 5.544, -47.608]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube273.geometry}
        material={materials.Eva02rouge}
        position={[-179.604, 5.569, -47.608]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube274.geometry}
        material={materials.blanc}
        position={[-179.604, 2.767, -47.608]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube275.geometry}
        material={materials["metal orange"]}
        position={[-179.604, 5.544, -47.608]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube276.geometry}
        material={materials.Eva02rouge}
        position={[-179.604, 5.569, -44.465]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube277.geometry}
        material={materials.blanc}
        position={[-179.604, 2.767, -44.465]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube278.geometry}
        material={materials["metal orange"]}
        position={[-179.604, 5.544, -44.465]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube279.geometry}
        material={materials.Eva02rouge}
        position={[-182.389, 5.569, -44.465]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube280.geometry}
        material={materials.blanc}
        position={[-182.389, 2.767, -44.465]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube281.geometry}
        material={materials["metal orange"]}
        position={[-182.389, 5.544, -44.465]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert048.geometry}
        material={materials.metal}
        position={[-159.817, 2.737, -10.902]}
        rotation={[1.573, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert049.geometry}
        material={materials.metal}
        position={[-164.315, 2.737, -10.902]}
        rotation={[1.573, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert050.geometry}
        material={materials.metal}
        position={[-168.792, 2.737, -10.902]}
        rotation={[1.573, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert051.geometry}
        material={materials.metal}
        position={[-146.493, 2.737, -10.902]}
        rotation={[1.573, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert052.geometry}
        material={materials.metal}
        position={[-150.991, 2.737, -10.902]}
        rotation={[1.573, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert053.geometry}
        material={materials.metal}
        position={[-155.468, 2.737, -10.902]}
        rotation={[1.573, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert054.geometry}
        material={materials.metal}
        position={[-132.965, 2.737, -10.902]}
        rotation={[1.573, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert055.geometry}
        material={materials.metal}
        position={[-137.463, 2.737, -10.902]}
        rotation={[1.573, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert056.geometry}
        material={materials.metal}
        position={[-141.94, 2.737, -10.902]}
        rotation={[1.573, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert057.geometry}
        material={materials.metal}
        position={[-119.757, 2.737, -10.902]}
        rotation={[1.573, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert058.geometry}
        material={materials.metal}
        position={[-124.254, 2.737, -10.902]}
        rotation={[1.573, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert059.geometry}
        material={materials.metal}
        position={[-128.731, 2.737, -10.902]}
        rotation={[1.573, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.iscreen.geometry}
        material={materials["metal foncé"]}
        position={[-153.196, -13.927, -17.855]}
        scale={[1, 4.415, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.iframe.geometry}
        material={materials.blanc}
        position={[-153.196, -13.927, -17.855]}
        scale={[1, 4.415, 1]}
      />
      <group position={[-122.266, 6.605, -61.557]} rotation={[0, -0.002, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube263_1.geometry}
          material={materials["metal orange"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube263_2.geometry}
          material={materials["Material.006"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube254.geometry}
        material={materials.Eva02rouge}
        position={[-182.424, 11.483, -47.608]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube255.geometry}
        material={materials.blanc}
        position={[-182.424, 8.681, -47.608]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube256.geometry}
        material={materials["metal orange"]}
        position={[-182.424, 11.459, -47.608]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube257.geometry}
        material={materials.Eva02rouge}
        position={[-179.604, 11.483, -47.608]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube258.geometry}
        material={materials.blanc}
        position={[-179.604, 8.681, -47.608]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube259.geometry}
        material={materials["metal orange"]}
        position={[-179.604, 11.459, -47.608]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube260.geometry}
        material={materials.Eva02rouge}
        position={[-179.604, 11.483, -44.465]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube261.geometry}
        material={materials.blanc}
        position={[-179.604, 8.681, -44.465]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube262.geometry}
        material={materials["metal orange"]}
        position={[-179.604, 11.459, -44.465]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube263.geometry}
        material={materials.Eva02rouge}
        position={[-182.389, 11.483, -44.465]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube264.geometry}
        material={materials.blanc}
        position={[-182.389, 8.681, -44.465]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube265.geometry}
        material={materials["metal orange"]}
        position={[-182.389, 11.459, -44.465]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube266.geometry}
        material={materials.Eva02rouge}
        position={[-176.758, 5.586, -47.608]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube267.geometry}
        material={materials.blanc}
        position={[-176.758, 2.784, -47.608]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube268.geometry}
        material={materials["metal orange"]}
        position={[-176.758, 5.562, -47.608]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube269.geometry}
        material={materials.Eva02rouge}
        position={[-173.938, 5.586, -47.608]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube282.geometry}
        material={materials.blanc}
        position={[-173.938, 2.784, -47.608]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube283.geometry}
        material={materials["metal orange"]}
        position={[-173.938, 5.562, -47.608]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube284.geometry}
        material={materials.Eva02rouge}
        position={[-173.938, 5.586, -44.465]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube285.geometry}
        material={materials.blanc}
        position={[-173.938, 2.784, -44.465]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube286.geometry}
        material={materials["metal orange"]}
        position={[-173.938, 5.562, -44.465]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube287.geometry}
        material={materials.Eva02rouge}
        position={[-176.724, 5.586, -44.465]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube288.geometry}
        material={materials.blanc}
        position={[-176.724, 2.784, -44.465]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube289.geometry}
        material={materials["metal orange"]}
        position={[-176.724, 5.562, -44.465]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bouton_ON002.geometry}
        material={materials.level3}
        position={[-151.204, 2.58, 2.133]}
        rotation={[1.071, 0.006, -0.011]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.boutonSpaceship.geometry}
        material={materials.level00}
        position={[-149.292, 2.58, 2.133]}
        rotation={[1.071, 0.006, -0.011]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube252.geometry}
        material={materials.level3}
        position={[-117.474, 5.624, -62.258]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube253.geometry}
        material={materials.jaune}
        position={[-118.645, 1.693, -40.528]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube290.geometry}
        material={materials.jaune}
        position={[-118.645, 1.693, -10.842]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube291.geometry}
        material={materials.level3}
        position={[-117.474, 5.651, -32.184]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube201.geometry}
        material={materials["metal foncé"]}
        position={[-147.819, 1.174, -44.838]}
      />
  </group>


  );
}


const container = ({ ...props }) => {


  return (

    <main className="level02Back">
      <div>
        <button>exit</button>
      </div>
      <div>
        <h3>Projet React</h3>
        <div>
          <div>projet 1</div>
          <div>projet 2</div>
          <div>projet 3</div>
        </div>
      </div>
    </main>

  );
};


useGLTF.preload("/Level03.glb");


// onClick={() =>{{ console.log('ici'),buttonClick("ecranLV3", activated ? [2, 0]  : [4, 0])}  }}

// {Cliked === true && clickedButton === "projet1" ? (

//   <mesh position={[38, 0, 2]} scale={0.25}>
//     <boxGeometry />
//     <meshStandardMaterial color="mediumpurple" />
//   </mesh>
// ) : null}





{/* <mesh
castShadow
receiveShadow
geometry={nodes.ecran_de_selection_lv3.geometry}
material={materials.metal}
position={[-143.393, 4.46, 1.605]}
onClick={() =>{ buttonClick("ecranLV3", activated ? [2, 0]  : [4, 0]) }}
> 
<Html   wrapperClass="htmlScreen"  prepend  zIndexRange={zIndexRange}  width={2000} height={1000} transform occlude={NoBlending} distanceFactor={5} position={[-0.2,0,0]}  ref={planeRef } >
    <div>
    <Pages  activerMachine={ activerMachine}/> 
    </div>
</Html>


</mesh>
 */}
