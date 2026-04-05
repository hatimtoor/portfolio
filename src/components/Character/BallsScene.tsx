import { useRef, Suspense } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Physics, RigidBody, CuboidCollider, RapierRigidBody } from '@react-three/rapier'
import { Environment } from '@react-three/drei'
import * as THREE from 'three'

const BALL_COLORS = [
  '#c2a4ff', '#9b6fff', '#d4bcff', '#7c3aed',
  '#e0ccff', '#a78bfa', '#6d28d9', '#ede9fe',
]

const BALL_COUNT = 18

interface BallProps {
  position: [number, number, number]
  radius: number
  color: string
}

function Ball({ position, radius, color }: BallProps) {
  const rigidBodyRef = useRef<RapierRigidBody>(null)
  const meshRef = useRef<THREE.Mesh>(null)
  const { pointer } = useThree()

  useFrame(() => {
    if (!rigidBodyRef.current) return
    const pos = rigidBodyRef.current.translation()
    // repel from mouse position in world space
    const mx = pointer.x * 3
    const my = pointer.y * 2
    const dx = pos.x - mx
    const dy = pos.y - my
    const dist = Math.sqrt(dx * dx + dy * dy)
    if (dist < 1.5) {
      const force = (1.5 - dist) * 0.8
      rigidBodyRef.current.applyImpulse(
        { x: (dx / dist) * force, y: (dy / dist) * force, z: 0 },
        true
      )
    }
  })

  return (
    <RigidBody
      ref={rigidBodyRef}
      position={position}
      colliders="ball"
      restitution={0.7}
      friction={0.1}
      linearDamping={0.4}
      angularDamping={0.4}
    >
      <mesh ref={meshRef} castShadow>
        <sphereGeometry args={[radius, 32, 32]} />
        <meshStandardMaterial
          color={color}
          roughness={0.1}
          metalness={0.5}
          emissive={color}
          emissiveIntensity={0.15}
        />
      </mesh>
    </RigidBody>
  )
}

function Walls() {
  return (
    <>
      {/* Floor */}
      <CuboidCollider position={[0, -4, 0]} args={[8, 0.2, 4]} />
      {/* Ceiling */}
      <CuboidCollider position={[0, 5, 0]} args={[8, 0.2, 4]} />
      {/* Left wall */}
      <CuboidCollider position={[-5, 0, 0]} args={[0.2, 10, 4]} />
      {/* Right wall */}
      <CuboidCollider position={[5, 0, 0]} args={[0.2, 10, 4]} />
      {/* Back wall */}
      <CuboidCollider position={[0, 0, -2]} args={[8, 10, 0.2]} />
      {/* Front wall */}
      <CuboidCollider position={[0, 0, 2]} args={[8, 10, 0.2]} />
    </>
  )
}

const balls = Array.from({ length: BALL_COUNT }, (_, i) => ({
  position: [
    (Math.random() - 0.5) * 6,
    2 + Math.random() * 6,
    (Math.random() - 0.5) * 1.5,
  ] as [number, number, number],
  radius: 0.22 + Math.random() * 0.28,
  color: BALL_COLORS[i % BALL_COLORS.length],
}))

function Scene() {
  return (
    <Physics gravity={[0, -4, 0]}>
      <Walls />
      {balls.map((b, i) => (
        <Ball key={i} {...b} />
      ))}
    </Physics>
  )
}

export default function BallsScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 50 }}
      style={{ width: '100%', height: '100%', background: 'transparent' }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 8, 5]} intensity={1} castShadow />
      <pointLight position={[0, 3, 3]} intensity={1.5} color="#c2a4ff" />
      <Suspense fallback={null}>
        <Environment preset="city" />
        <Scene />
      </Suspense>
    </Canvas>
  )
}
