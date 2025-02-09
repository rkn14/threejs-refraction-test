import React, { useRef } from 'react';
import { useLoader } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { TextureLoader } from 'three';

function Scene() {

  const sphereRef = useRef<THREE.Mesh | null>(null);

  const normalTexture = useLoader(TextureLoader, 'textures/normalmap.jpg')


  const physicalMaterial = new THREE.MeshPhysicalMaterial({
    transmission:1, 
    thickness:0.4, 
    roughness:0.01, 
    metalness: 0.1,
    ior: 4,
    normalMap: normalTexture,
    normalScale: new THREE.Vector2(1, 1),
  });


  return (
    <>    

          <Environment
              files="textures/background.jpg" 
              background  backgroundBlurriness={0.0} environmentIntensity={1} backgroundIntensity={0.95}
            />
  
          <perspectiveCamera position={[0,0,0]} />

          <mesh ref={sphereRef} scale={2} material={physicalMaterial} >
            <sphereGeometry />
          </mesh>

          <ambientLight />
          <directionalLight position={[15, 15, 15]} />

        <OrbitControls/>
          
    </>
  );
}

export default Scene;
