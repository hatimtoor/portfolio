import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function CharacterModel() {
  const groupRef = useRef<THREE.Group>(null)
  const headRef = useRef<THREE.Mesh>(null)
  const leftArmRef = useRef<THREE.Mesh>(null)
  const rightArmRef = useRef<THREE.Mesh>(null)
  const leftLegRef = useRef<THREE.Mesh>(null)
  const rightLegRef = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(t * 1.2) * 0.06
      groupRef.current.rotation.y = Math.sin(t * 0.4) * 0.15
    }
    if (headRef.current) {
      headRef.current.rotation.y = Math.sin(t * 0.6) * 0.18
      headRef.current.rotation.z = Math.sin(t * 0.8) * 0.04
    }
    if (leftArmRef.current) {
      leftArmRef.current.rotation.x = Math.sin(t * 1.2 + Math.PI) * 0.25
    }
    if (rightArmRef.current) {
      rightArmRef.current.rotation.x = Math.sin(t * 1.2) * 0.25
    }
    if (leftLegRef.current) {
      leftLegRef.current.rotation.x = Math.sin(t * 1.2) * 0.1
    }
    if (rightLegRef.current) {
      rightLegRef.current.rotation.x = Math.sin(t * 1.2 + Math.PI) * 0.1
    }
  })

  const bodyMat = (
    <meshStandardMaterial
      color="#1a1020"
      roughness={0.3}
      metalness={0.6}
      emissive="#c2a4ff"
      emissiveIntensity={0.04}
    />
  )

  const accentMat = (
    <meshStandardMaterial
      color="#c2a4ff"
      roughness={0.2}
      metalness={0.8}
      emissive="#c2a4ff"
      emissiveIntensity={0.3}
    />
  )

  return (
    <group ref={groupRef} position={[0, -0.5, 0]}>
      {/* Head */}
      <mesh ref={headRef} position={[0, 1.65, 0]} castShadow>
        <boxGeometry args={[0.55, 0.55, 0.55]} />
        {bodyMat}
      </mesh>

      {/* Head visor glow */}
      <mesh position={[0, 1.65, 0.28]}>
        <boxGeometry args={[0.38, 0.14, 0.02]} />
        {accentMat}
      </mesh>

      {/* Neck */}
      <mesh position={[0, 1.32, 0]}>
        <cylinderGeometry args={[0.1, 0.12, 0.18, 8]} />
        {bodyMat}
      </mesh>

      {/* Torso */}
      <mesh position={[0, 0.82, 0]} castShadow>
        <boxGeometry args={[0.72, 0.72, 0.38]} />
        {bodyMat}
      </mesh>

      {/* Chest detail */}
      <mesh position={[0, 0.9, 0.2]}>
        <boxGeometry args={[0.3, 0.18, 0.02]} />
        {accentMat}
      </mesh>

      {/* Pelvis */}
      <mesh position={[0, 0.4, 0]}>
        <boxGeometry args={[0.6, 0.22, 0.34]} />
        {bodyMat}
      </mesh>

      {/* Left Arm */}
      <mesh ref={leftArmRef} position={[-0.5, 0.78, 0]}>
        <cylinderGeometry args={[0.1, 0.09, 0.62, 8]} />
        {bodyMat}
      </mesh>
      {/* Left hand */}
      <mesh position={[-0.5, 0.44, 0]}>
        <boxGeometry args={[0.18, 0.18, 0.14]} />
        {bodyMat}
      </mesh>

      {/* Right Arm */}
      <mesh ref={rightArmRef} position={[0.5, 0.78, 0]}>
        <cylinderGeometry args={[0.1, 0.09, 0.62, 8]} />
        {bodyMat}
      </mesh>
      {/* Right hand */}
      <mesh position={[0.5, 0.44, 0]}>
        <boxGeometry args={[0.18, 0.18, 0.14]} />
        {bodyMat}
      </mesh>

      {/* Left Leg */}
      <mesh ref={leftLegRef} position={[-0.2, -0.06, 0]}>
        <cylinderGeometry args={[0.13, 0.11, 0.72, 8]} />
        {bodyMat}
      </mesh>
      {/* Left foot */}
      <mesh position={[-0.2, -0.46, 0.06]}>
        <boxGeometry args={[0.2, 0.14, 0.32]} />
        {bodyMat}
      </mesh>

      {/* Right Leg */}
      <mesh ref={rightLegRef} position={[0.2, -0.06, 0]}>
        <cylinderGeometry args={[0.13, 0.11, 0.72, 8]} />
        {bodyMat}
      </mesh>
      {/* Right foot */}
      <mesh position={[0.2, -0.46, 0.06]}>
        <boxGeometry args={[0.2, 0.14, 0.32]} />
        {bodyMat}
      </mesh>

      {/* Shoulder pads */}
      <mesh position={[-0.5, 1.08, 0]}>
        <boxGeometry args={[0.24, 0.12, 0.26]} />
        {bodyMat}
      </mesh>
      <mesh position={[0.5, 1.08, 0]}>
        <boxGeometry args={[0.24, 0.12, 0.26]} />
        {bodyMat}
      </mesh>

      {/* Shoulder accent lines */}
      <mesh position={[-0.5, 1.08, 0.14]}>
        <boxGeometry args={[0.2, 0.04, 0.02]} />
        {accentMat}
      </mesh>
      <mesh position={[0.5, 1.08, 0.14]}>
        <boxGeometry args={[0.2, 0.04, 0.02]} />
        {accentMat}
      </mesh>
    </group>
  )
}
