import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Center } from '@react-three/drei';

function Model(props) {
  const { scene } = useGLTF('/qr114.glb');
  return <primitive object={scene} {...props} />;
}

const ModelViewer = () => {
  return (
    <div style={{ width: '100%', height: '450px', borderRadius: '12px', background: '#f9f9f9' }}>
      <Canvas
        camera={{ position: [10, 7, 10], fov: 25 }}
      >
        <Suspense fallback={null}>
          <hemisphereLight intensity={1} isObject3D={true}  />
          {/* [x: number, y: number, z: number] */}
          <directionalLight position={[10, 10, 20]} intensity={0.5} />
          <directionalLight position={[-10, 10, 20]} intensity={0.5} />
          <directionalLight position={[0, -10, 20]} intensity={0.5} />
          <directionalLight position={[0, 20, 0]} intensity={0.5} />
        


          <Center>
            <Model scale={1} />
          </Center>
          <OrbitControls
            makeDefault
            minDistance={5}
            maxDistance={20}
            enablePan={false}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

useGLTF.preload('/qr114.glb');

export default ModelViewer;