import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Center } from '@react-three/drei';

function Model(props) {
  // CORRECTED PATH: Load the model from the public folder.
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
          <hemisphereLight intensity={1} isObject3D={true} groundColor="black" />
          <directionalLight position={[10, 10, 5]} intensity={2} />
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

// CORRECTED PATH: Preload from the public folder.
useGLTF.preload('/qr114.glb');

export default ModelViewer;