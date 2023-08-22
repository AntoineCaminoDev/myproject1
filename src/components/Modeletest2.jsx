

import React, { Children, useRef, useState, useEffect } from "react";

import { useGLTF, MeshPortalMaterial, RoundedBox, Environment, useTexture, Text } from '@react-three/drei'
import * as THREE from "three";
import { easing, geometry, three } from 'maath'
import { useFrame } from "@react-three/fiber";

export default function Level02({ basculerActivation }, props) {
  const { nodes, materials } = useGLTF("./models/Level02.glb");



  const map1 = useTexture("./textures/anime_art_style_a_water_based_pokemon_like_environ.jpg")
  const map2 = useTexture("./textures/anime_art_style_earth_from_space.jpg")
  const map3 = useTexture("./textures/AdobeStock_226375061.jpeg")

  const vitrineRef = useRef();
  const boutiqueRef = useRef();
  const seoRef = useRef();
  const meshRef = useRef();
  const blendref = useRef();



  // const [activated, setActivated] = useState(false);
  // const [objectid, setObjectid] = useState(null);


  // useEffect(() => {
  //   blendref.current.blend = 0; // Initialize blend to 0
  // }, []);


  // const Blendclick = (objectid) => {

  //   setActivated(!activated)
  //   setObjectid(objectid);


  // }


  // useEffect(() => {
  //   console.log("----------------");
  //   console.log("Activated:", activated);
  //   console.log("Object ID:", objectid);
  //   if (objectid === "test" && activated) {
  //     blendref.current.blend = 1;
  //   } else {
  //     blendref.current.blend = 0;
  //   }
  //   console.log("Updated Blend:", blendref.current.blend);
  // }, [objectid, activated]);


  const [active, setActive] = useState(null)
  const MaterialRef = useRef()





  return <>






    <ambientLight intensity={0.5} />



    <MonsterStage
      position={[0, 2, 0]}
      name="Site Vitrine"
      color={"#0260f7"}
      texture={"./textures/anime_art_style_a_water_based_pokemon_like_environ.jpg"}
      active={active}
      setActive={setActive}

    >

      <mesh>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh>

    </MonsterStage>










    <group {...props} dispose={null} scale={0.25}>
      <group position={[-76.998, 0.312, -19.713]}>








        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008_1.geometry}
          material={materials["Material.008"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008_2.geometry}
          material={materials.level01}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text002.geometry}
        material={materials.blanc}
        position={[-83.139, 3.519, -28.598]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text014.geometry}
        material={materials.blanc}
        position={[-84.41, 5.018, -28.527]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text021.geometry}
        material={materials.blanc}
        position={[-83.319, 5.2, -28.546]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text022.geometry}
        material={materials.blanc}
        position={[-82.249, 5.173, -28.559]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text023.geometry}
        material={materials.blanc}
        position={[-80.242, 5.018, -28.527]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text024.geometry}
        material={materials.blanc}
        position={[-81.129, 5.2, -28.546]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text025.geometry}
        material={materials.blanc}
        position={[-84.338, 3.383, -28.549]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube010.geometry}
        material={materials.blanc}
        position={[-83.736, 12.602, -28.545]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube018.geometry}
        material={materials.blanc}
        position={[-80.602, 11.165, -28.524]}
        rotation={[0.005, 0.045, -1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.portail_B.geometry}
        material={materials.metal}
        position={[-68.784, 1.456, -22.731]}
        rotation={[0, -0.015, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.portail_A.geometry}
        material={materials.metal}
        position={[-81.359, 1.576, -11.18]}
        rotation={[0, 1.316, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.portail_C.geometry}
        material={materials.metal}
        position={[-52.828, 1.659, -19.373]}
        rotation={[0, -0.827, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.portailVitrine.geometry}
        material={nodes.portailVitrine.material}
        position={[-81.359, 1.576, -11.18]}
        rotation={[0, 1.316, 0]}
      >
        <MeshPortalMaterial ref={vitrineRef}

          side={THREE.DoubleSide}

        >
          <ambientLight intensity={1} />
          <Environment preset="sunset" />

          <mesh>

            <sphereGeometry args={[10, 64, 64]} />


            <meshStandardMaterial map={map1} side={THREE.BackSide} />


          </mesh>


        </MeshPortalMaterial>


      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.portailBoutique.geometry}
        material={nodes.portailBoutique.material}
        position={[-68.784, 1.456, -22.731]}
        rotation={[0, -0.015, 0]}
      >
        <MeshPortalMaterial ref={boutiqueRef}
          side={THREE.DoubleSide}


        >

          <ambientLight intensity={1} />
          <Environment preset="sunset" />

          <mesh>

            <sphereGeometry args={[10, 64, 64]} />


            <meshStandardMaterial map={map1} side={THREE.BackSide} />


          </mesh>


        </MeshPortalMaterial>


      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.portailSEO.geometry}
        material={nodes.portailSEO.material}
        position={[-52.828, 1.659, -19.373]}
        rotation={[0, -0.827, 0]}
      // onClick={() => { { console.log('ici'), Blendclick("SEO", activated ? blend = 0 : blend = 1) } }}

      >

        <MeshPortalMaterial ref={seoRef}
          side={THREE.DoubleSide}
          name="seo"
        >
          <ambientLight intensity={1} />
          <Environment preset="sunset" />

          <mesh>

            <sphereGeometry args={[10, 64, 64]} />


            <meshStandardMaterial map={map1} side={THREE.BackSide} />


          </mesh>


        </MeshPortalMaterial>


      </mesh>

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube035.geometry}
        material={materials["blue light"]}
        position={[-67.397, 3.593, -53.077]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube036.geometry}
        material={materials.metal}
        position={[-67.375, 6.424, -53.048]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube037.geometry}
        material={materials.metal}
        position={[-67.375, 3.514, -53.048]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube038.geometry}
        material={materials.metal}
        position={[-67.375, 9.376, -53.048]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text027.geometry}
        material={materials.blanc}
        position={[-81.162, 7.042, -28.469]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials.blanc}
        position={[-83.7, 9.254, -28.864]}
        rotation={[1.526, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube072.geometry}
        material={materials["Material.008"]}
        position={[-76.405, 0.096, -11.597]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube073.geometry}
        material={materials["Material.008"]}
        position={[-67.489, 0.444, -10.639]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube074.geometry}
        material={materials["Material.008"]}
        position={[-80.245, 0.444, 1.551]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube075.geometry}
        material={materials.metal}
        position={[-73.624, 0.629, 6.157]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube076.geometry}
        material={materials["Material.008"]}
        position={[-67.489, 0.444, -10.639]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube027.geometry}
        material={materials.metal}
        position={[-61.677, 1.638, -17.46]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube030.geometry}
        material={materials["Material.009"]}
        position={[-61.677, 1.638, -17.46]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube031.geometry}
        material={materials["blue light"]}
        position={[-62.463, 3.593, -53.077]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube032.geometry}
        material={materials.metal}
        position={[-62.442, 6.424, -53.048]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube081.geometry}
        material={materials.metal}
        position={[-62.442, 3.514, -53.048]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube086.geometry}
        material={materials.metal}
        position={[-62.442, 9.376, -53.048]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube087.geometry}
        material={materials["blue light"]}
        position={[-57.225, 3.593, -53.077]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube088.geometry}
        material={materials.metal}
        position={[-57.203, 6.424, -53.048]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube089.geometry}
        material={materials.metal}
        position={[-57.203, 3.514, -53.048]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube090.geometry}
        material={materials.metal}
        position={[-57.203, 9.376, -53.048]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube091.geometry}
        material={materials["blue light"]}
        position={[-52.176, 3.593, -53.077]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube092.geometry}
        material={materials.metal}
        position={[-52.154, 6.424, -53.048]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube093.geometry}
        material={materials.metal}
        position={[-52.154, 3.514, -53.048]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube094.geometry}
        material={materials.metal}
        position={[-52.154, 9.376, -53.048]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere001.geometry}
        material={materials.verre}
        position={[-58.674, 8.428, -39.959]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube022.geometry}
        material={materials.blanc}
        position={[-58.568, 11.79, -39.546]}
        rotation={[0, 0, 3.138]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube020.geometry}
        material={materials.blanc}
        position={[-58.634, 5.065, -39.939]}
        rotation={[0, 0, 0.009]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube026.geometry}
        material={materials.metal}
        position={[-74.793, 3.775, -28.554]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube028.geometry}
        material={materials.metal}
        position={[-67.238, 0.945, -12.201]}
        rotation={[0, -0.462, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert.geometry}
        material={materials.level3}
        position={[-65.809, 0.919, -11.541]}
        rotation={[0, -0.46, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert012.geometry}
        material={materials.level3}
        position={[-75.325, 3.087, -28.181]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder041.geometry}
        material={materials["metal orange"]}
        position={[-67.043, 0.93, -10.881]}
        rotation={[1.554, -0.02, 0.475]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder042.geometry}
        material={materials["metal orange"]}
        position={[-67.508, 0.918, -11.104]}
        rotation={[1.554, -0.02, 0.475]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder043.geometry}
        material={materials["metal orange"]}
        position={[-68.043, 0.904, -11.361]}
        rotation={[1.554, -0.02, 0.475]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder044.geometry}
        material={materials["metal orange"]}
        position={[-68.593, 0.886, -11.644]}
        rotation={[1.554, -0.02, 0.475]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert014.geometry}
        material={materials.orange}
        position={[-75.333, 4.282, -28.18]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert015.geometry}
        material={materials["vert électrique"]}
        position={[-74.275, 3.067, -28.18]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert002.geometry}
        material={materials.level00}
        position={[-74.262, 4.286, -28.181]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder046.geometry}
        material={materials["metal orange"]}
        position={[-66.044, 0.963, -12.848]}
        rotation={[1.554, -0.02, 0.475]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder047.geometry}
        material={materials["metal orange"]}
        position={[-66.509, 0.951, -13.07]}
        rotation={[1.554, -0.02, 0.475]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder048.geometry}
        material={materials["metal orange"]}
        position={[-67.044, 0.937, -13.328]}
        rotation={[1.554, -0.02, 0.475]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder049.geometry}
        material={materials["metal orange"]}
        position={[-67.594, 0.918, -13.611]}
        rotation={[1.554, -0.02, 0.475]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder050.geometry}
        material={materials["Material.008"]}
        position={[-68.308, 0.924, -13.231]}
        rotation={[1.55, 0.017, -1.075]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder051.geometry}
        material={materials["Material.008"]}
        position={[-68.478, 0.909, -12.897]}
        rotation={[1.55, 0.017, -1.075]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder053.geometry}
        material={materials["metal orange"]}
        position={[-52.749, 0.933, -13.464]}
        rotation={[1.595, 0.011, -3.124]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder055.geometry}
        material={materials["metal orange"]}
        position={[-54.444, 1.274, -8.057]}
        rotation={[1.581, -0.025, 1.575]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder056.geometry}
        material={materials["metal orange"]}
        position={[-54.444, 1.254, -10.496]}
        rotation={[1.581, -0.025, 1.575]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder054.geometry}
        material={materials["metal orange"]}
        position={[-54.444, 1.254, -11.915]}
        rotation={[1.581, -0.025, 1.575]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder052.geometry}
        material={materials["metal orange"]}
        position={[-79.436, 1.285, -10.603]}
        rotation={[1.554, 0.021, -1.275]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder057.geometry}
        material={materials["metal orange"]}
        position={[-68.742, 1.368, -20.677]}
        rotation={[1.547, -0.011, 0.033]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder058.geometry}
        material={materials["metal orange"]}
        position={[-54.323, 1.495, -17.961]}
        rotation={[1.561, -0.025, 0.811]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane064.geometry}
        material={materials.level01}
        position={[-72.437, 12.826, -28.954]}
        rotation={[1.512, 0.716, 0.039]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube095.geometry}
        material={materials.metal}
        position={[-50.554, 5.108, -11.418]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube096.geometry}
        material={materials["white light"]}
        position={[-63.655, 2.192, -16.146]}
        rotation={[0.719, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube097.geometry}
        material={materials["white light"]}
        position={[-63.654, 2.323, -16.326]}
        rotation={[0.719, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube098.geometry}
        material={materials["white light"]}
        position={[-63.446, 2.323, -16.326]}
        rotation={[0.719, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube099.geometry}
        material={materials["white light"]}
        position={[-63.447, 2.192, -16.146]}
        rotation={[0.719, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube100.geometry}
        material={materials["white light"]}
        position={[-63.245, 2.323, -16.326]}
        rotation={[0.719, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube101.geometry}
        material={materials["white light"]}
        position={[-63.242, 2.192, -16.146]}
        rotation={[0.719, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube102.geometry}
        material={materials["metal orange"]}
        position={[-60.073, 2.246, -16.252]}
        rotation={[0.707, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder045.geometry}
        material={materials.level3}
        position={[-60.07, 2.302, -16.207]}
        rotation={[0.707, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube103.geometry}
        material={materials["white light"]}
        position={[-62.708, 2.192, -16.146]}
        rotation={[0.719, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube104.geometry}
        material={materials["white light"]}
        position={[-62.708, 2.323, -16.326]}
        rotation={[0.719, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube105.geometry}
        material={materials["white light"]}
        position={[-62.5, 2.323, -16.326]}
        rotation={[0.719, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube106.geometry}
        material={materials["white light"]}
        position={[-62.501, 2.192, -16.146]}
        rotation={[0.719, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube107.geometry}
        material={materials["white light"]}
        position={[-62.299, 2.323, -16.326]}
        rotation={[0.719, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube108.geometry}
        material={materials["white light"]}
        position={[-62.296, 2.192, -16.146]}
        rotation={[0.719, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube109.geometry}
        material={materials["white light"]}
        position={[-62.075, 2.192, -16.146]}
        rotation={[0.719, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube110.geometry}
        material={materials["white light"]}
        position={[-62.075, 2.323, -16.326]}
        rotation={[0.719, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube111.geometry}
        material={materials["white light"]}
        position={[-61.867, 2.323, -16.326]}
        rotation={[0.719, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube112.geometry}
        material={materials["white light"]}
        position={[-61.868, 2.192, -16.146]}
        rotation={[0.719, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube113.geometry}
        material={materials["white light"]}
        position={[-61.666, 2.323, -16.326]}
        rotation={[0.719, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube114.geometry}
        material={materials["white light"]}
        position={[-61.663, 2.192, -16.146]}
        rotation={[0.719, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube115.geometry}
        material={materials["white light"]}
        position={[-61.452, 2.192, -16.146]}
        rotation={[0.719, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube116.geometry}
        material={materials["white light"]}
        position={[-61.451, 2.323, -16.326]}
        rotation={[0.719, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube117.geometry}
        material={materials["white light"]}
        position={[-61.243, 2.323, -16.326]}
        rotation={[0.719, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube118.geometry}
        material={materials["white light"]}
        position={[-61.245, 2.192, -16.146]}
        rotation={[0.719, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube119.geometry}
        material={materials["white light"]}
        position={[-61.043, 2.323, -16.326]}
        rotation={[0.719, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube120.geometry}
        material={materials["white light"]}
        position={[-61.04, 2.192, -16.146]}
        rotation={[0.719, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert001.geometry}
        material={materials.level00}
        position={[-67.512, 0.89, -13.706]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert018.geometry}
        material={materials["vert électrique"]}
        position={[-66.979, 0.94, -13.433]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert019.geometry}
        material={materials.orange}
        position={[-66.443, 0.954, -13.174]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert020.geometry}
        material={materials.level3}
        position={[-65.971, 0.981, -12.948]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert006.geometry}
        material={materials.level01}
        position={[-59.277, 0.918, -17.672]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert007.geometry}
        material={materials.level00}
        position={[-54.756, 1.298, -4.72]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube124.geometry}
        material={materials["green light"]}
        position={[-54.756, 3.59, -30.197]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert009.geometry}
        material={materials.level00}
        position={[-54.646, 1.271, -11.907]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert010.geometry}
        material={materials.level00}
        position={[-54.646, 1.274, -8.379]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube122.geometry}
        material={materials["white light"]}
        position={[-53.512, 3.486, -12.714]}
        rotation={[1.547, -0.699, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube123.geometry}
        material={materials["white light"]}
        position={[-53.512, 3.486, -12.489]}
        rotation={[1.547, -0.699, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube125.geometry}
        material={materials["white light"]}
        position={[-53.512, 3.486, -12.265]}
        rotation={[1.547, -0.699, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube126.geometry}
        material={materials["white light"]}
        position={[-53.666, 3.334, -12.702]}
        rotation={[1.547, -0.699, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube127.geometry}
        material={materials["white light"]}
        position={[-53.666, 3.334, -12.476]}
        rotation={[1.547, -0.699, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube128.geometry}
        material={materials["white light"]}
        position={[-53.666, 3.334, -12.252]}
        rotation={[1.547, -0.699, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube129.geometry}
        material={materials["white light"]}
        position={[-53.813, 3.161, -12.7]}
        rotation={[1.547, -0.699, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube130.geometry}
        material={materials["white light"]}
        position={[-53.813, 3.161, -12.475]}
        rotation={[1.547, -0.699, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube131.geometry}
        material={materials["white light"]}
        position={[-53.813, 3.161, -12.251]}
        rotation={[1.547, -0.699, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube132.geometry}
        material={materials["white light"]}
        position={[-53.971, 2.976, -12.698]}
        rotation={[1.547, -0.699, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube133.geometry}
        material={materials["white light"]}
        position={[-53.971, 2.976, -12.472]}
        rotation={[1.547, -0.699, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube134.geometry}
        material={materials["white light"]}
        position={[-53.971, 2.976, -12.248]}
        rotation={[1.547, -0.699, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube135.geometry}
        material={materials["red light"]}
        position={[-54.107, 2.819, -12.693]}
        rotation={[1.547, -0.699, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube136.geometry}
        material={materials["green light"]}
        position={[-54.102, 2.81, -12.236]}
        rotation={[1.547, -0.699, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube138.geometry}
        material={materials["white light"]}
        position={[-53.512, 3.486, -11.481]}
        rotation={[1.547, -0.699, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube139.geometry}
        material={materials["white light"]}
        position={[-53.512, 3.486, -11.255]}
        rotation={[1.547, -0.699, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube140.geometry}
        material={materials["white light"]}
        position={[-53.512, 3.486, -11.031]}
        rotation={[1.547, -0.699, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube141.geometry}
        material={materials["white light"]}
        position={[-53.666, 3.334, -11.468]}
        rotation={[1.547, -0.699, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube142.geometry}
        material={materials["white light"]}
        position={[-53.666, 3.334, -11.243]}
        rotation={[1.547, -0.699, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube143.geometry}
        material={materials["white light"]}
        position={[-53.666, 3.334, -11.019]}
        rotation={[1.547, -0.699, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube144.geometry}
        material={materials["white light"]}
        position={[-53.813, 3.161, -11.467]}
        rotation={[1.547, -0.699, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube145.geometry}
        material={materials["white light"]}
        position={[-53.813, 3.161, -11.241]}
        rotation={[1.547, -0.699, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube146.geometry}
        material={materials["white light"]}
        position={[-53.813, 3.161, -11.017]}
        rotation={[1.547, -0.699, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube147.geometry}
        material={materials["white light"]}
        position={[-53.512, 3.486, -10.799]}
        rotation={[1.547, -0.699, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube148.geometry}
        material={materials["white light"]}
        position={[-53.512, 3.486, -10.573]}
        rotation={[1.547, -0.699, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube149.geometry}
        material={materials["white light"]}
        position={[-53.512, 3.486, -10.349]}
        rotation={[1.547, -0.699, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube150.geometry}
        material={materials["white light"]}
        position={[-53.666, 3.334, -10.786]}
        rotation={[1.547, -0.699, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube151.geometry}
        material={materials["white light"]}
        position={[-53.666, 3.334, -10.561]}
        rotation={[1.547, -0.699, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube152.geometry}
        material={materials["white light"]}
        position={[-53.666, 3.334, -10.337]}
        rotation={[1.547, -0.699, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube153.geometry}
        material={materials["white light"]}
        position={[-53.813, 3.161, -10.785]}
        rotation={[1.547, -0.699, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube154.geometry}
        material={materials["white light"]}
        position={[-53.813, 3.161, -10.559]}
        rotation={[1.547, -0.699, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube155.geometry}
        material={materials["white light"]}
        position={[-53.813, 3.161, -10.335]}
        rotation={[1.547, -0.699, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube156.geometry}
        material={materials["white light"]}
        position={[-53.512, 3.486, -10.118]}
        rotation={[1.547, -0.699, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube157.geometry}
        material={materials["white light"]}
        position={[-53.512, 3.486, -9.892]}
        rotation={[1.547, -0.699, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube158.geometry}
        material={materials["white light"]}
        position={[-53.512, 3.486, -9.668]}
        rotation={[1.547, -0.699, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube159.geometry}
        material={materials["white light"]}
        position={[-53.666, 3.334, -10.105]}
        rotation={[1.547, -0.699, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube160.geometry}
        material={materials["white light"]}
        position={[-53.666, 3.334, -9.88]}
        rotation={[1.547, -0.699, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube161.geometry}
        material={materials["white light"]}
        position={[-53.666, 3.334, -9.656]}
        rotation={[1.547, -0.699, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube162.geometry}
        material={materials["white light"]}
        position={[-53.813, 3.161, -10.104]}
        rotation={[1.547, -0.699, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube163.geometry}
        material={materials["white light"]}
        position={[-53.813, 3.161, -9.878]}
        rotation={[1.547, -0.699, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube164.geometry}
        material={materials["white light"]}
        position={[-53.813, 3.161, -9.654]}
        rotation={[1.547, -0.699, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube165.geometry}
        material={materials["white light"]}
        position={[-53.957, 3.012, -11.468]}
        rotation={[1.547, -0.699, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube166.geometry}
        material={materials["white light"]}
        position={[-53.957, 3.012, -11.242]}
        rotation={[1.547, -0.699, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube167.geometry}
        material={materials["white light"]}
        position={[-53.957, 3.012, -11.018]}
        rotation={[1.547, -0.699, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube168.geometry}
        material={materials["white light"]}
        position={[-53.962, 3.003, -10.786]}
        rotation={[1.547, -0.699, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube169.geometry}
        material={materials["white light"]}
        position={[-53.957, 3.012, -10.106]}
        rotation={[1.547, -0.699, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube170.geometry}
        material={materials["white light"]}
        position={[-53.957, 3.012, -9.881]}
        rotation={[1.547, -0.699, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mur_déco002.geometry}
        material={materials.level01}
        position={[-86.025, 4.293, -3.598]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mur_déco003.geometry}
        material={materials.level01}
        position={[-49.492, 3.359, -3.598]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube029.geometry}
        material={materials["green light"]}
        position={[-54.756, 3.59, -48.842]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube121.geometry}
        material={materials["Material.008"]}
        position={[-53.649, 3.02, -12.481]}
        rotation={[0, 0, -0.731]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube137.geometry}
        material={materials["Material.008"]}
        position={[-53.649, 3.02, -11.266]}
        rotation={[0, 0, -0.731]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle017.geometry}
        material={materials["green light"]}
        position={[-82.48, 5.902, -24.176]}
        rotation={[Math.PI / 2, 0, -1.549]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle023.geometry}
        material={materials.metal}
        position={[-86.487, 5.901, -7.857]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle030.geometry}
        material={materials.metal}
        position={[-86.487, 8.138, -3.752]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle019.geometry}
        material={materials.metal}
        position={[-86.487, 8.138, -12.023]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle020.geometry}
        material={materials.metal}
        position={[-86.487, 8.138, -20.16]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle021.geometry}
        material={materials.metal}
        position={[-86.487, 5.901, -16.072]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle022.geometry}
        material={materials.metal}
        position={[-86.487, 5.901, -24.212]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle031.geometry}
        material={materials["green light"]}
        position={[-82.48, 5.902, -16.026]}
        rotation={[Math.PI / 2, 0, -1.549]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle032.geometry}
        material={materials["green light"]}
        position={[-82.48, 5.902, -7.906]}
        rotation={[Math.PI / 2, 0, -1.549]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle033.geometry}
        material={materials["green light"]}
        position={[-82.48, 8.129, -3.565]}
        rotation={[-Math.PI / 2, 0, -1.593]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle034.geometry}
        material={materials["green light"]}
        position={[-82.48, 8.129, -11.788]}
        rotation={[-Math.PI / 2, 0, -1.593]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle035.geometry}
        material={materials["green light"]}
        position={[-82.48, 8.129, -19.957]}
        rotation={[-Math.PI / 2, 0, -1.593]}
      />
    </group>

  </>
}

useGLTF.preload("/Level02.glb");







const MonsterStage = ({ children, texture, name, color, active, setActive, ...props }) => {

  const map = useTexture(texture);

  const portalMaterial = useRef();

  useFrame((_state, delta) => {
    const worldOpen = active === name;
    easing.damp(portalMaterial.current, "blend", worldOpen ? 1 : 0, 0.2, delta);
  });

  return (
    <group {...props}>

      <Text font="fonts/ethnocentric rg.ttf" fontSize={0.2} position={[0, -1.3, 0.051]} anchorY={"bottom"}>
        {name}
        <meshBasicMaterial color={color} toneMapped={false} />
      </Text>

      <RoundedBox args={[2, 3, 0.1]}
        onDoubleClick={() => {
          setActive(active === name ? null : name);
          console.log(name);
        }}>

        <MeshPortalMaterial
          side={THREE.DoubleSide}

          ref={portalMaterial}

        >

          <ambientLight intensity={1} />
          <Environment preset="sunset" />
          {children}
          <mesh position={[0, 1, 0]}>

            <sphereGeometry args={[8, 32, 32]} />
            <meshStandardMaterial map={map} side={THREE.BackSide} />
          </mesh>


        </MeshPortalMaterial>


      </RoundedBox>


    </group>
  )
}

