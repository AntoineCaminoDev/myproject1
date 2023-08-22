
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import { Scroll, ScrollControls, Stars } from '@react-three/drei'
import { Interface } from './components/interface.jsx'
import { ScrollManager } from './components/ScrollManager.jsx'
import { useState,useRef } from 'react'
import { useControls } from 'leva'

import './style.css'


//126
// 026 a test aussi


function App() {
    
    const [section, setSection] = useState(0);
     // passez le fov a 50 peux régler le probleme de caméra trop proche 

    // const camRef=useRef()


    //  console.log(camRef.current.rotation);
    
    return( <>
    
    <Canvas
            flat
            camera={{
                fov: 50,
                near: 0.1,
                far: 200,
                position: [1, 2, 6]
                //x y z
                
            }}
            // ref={camRef}
            className='Moncanvas'
        >
            
            <Stars radius={20} depth={60} count={5000} factor={4} saturation={0} fade speed={3} />
            <ScrollControls pages={4} damping={0.1} >
                <ScrollManager className="managerScrool" section={section} onSectionChange={setSection}/>
                
                <Experience section={section} className="XP" />
                
                <Scroll html  >
                        
                     <Interface className="interface"/> 
                </Scroll>
            </ScrollControls >
            
        </Canvas>
    
    
    </>





)}

export default App;

    
    
        
    
//*****test avec orbit controls****** */
    {/* <OrbitControls/>

    <group ref={groupRef}>

    <Level01 scale={0.25}/>
    <Level02 scale={0.25}/>
    <ambientLight intensity={3}/>

    </group> */}

    
    
    {/* <Portal/> */}


 


