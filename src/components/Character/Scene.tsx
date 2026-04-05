import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei'
import CharacterModel from './CharacterModel'

export default function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 0.5, 3.2], fov: 45 }}
      style={{ width: '100%', height: '100%', background: 'transparent' }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[2, 4, 3]} intensity={1.2} color="#ffffff" castShadow />
      <pointLight position={[-2, 2, -1]} intensity={0.6} color="#c2a4ff" />
      <pointLight position={[0, -1, 2]} intensity={0.3} color="#9b6fff" />

      <Suspense fallback={null}>
        <Environment preset="city" />
        <CharacterModel />
        <ContactShadows
          position={[0, -1.28, 0]}
          opacity={0.35}
          scale={3}
          blur={2}
          color="#c2a4ff"
        />
      </Suspense>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.8}
        autoRotate={false}
      />
    </Canvas>
  )
}
