import * as THREE from 'three'
import { useRef, useMemo, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import { EffectComposer, N8AO } from '@react-three/postprocessing'
import {
  BallCollider,
  Physics,
  RigidBody,
  CylinderCollider,
  RapierRigidBody,
} from '@react-three/rapier'
import './styles/TechStack.css'

const TECHS: { label: string; abbr: string; bg: string; fg: string }[] = [
  { label: 'n8n',        abbr: 'n8n',   bg: '#ea4b71', fg: '#fff' },
  { label: 'VAPI',       abbr: 'VAPI',  bg: '#7c3aed', fg: '#fff' },
  { label: 'OpenAI',     abbr: 'AI',    bg: '#10a37f', fg: '#fff' },
  { label: 'Python',     abbr: 'Py',    bg: '#3572a5', fg: '#ffd343' },
  { label: 'REST API',   abbr: 'API',   bg: '#c2a4ff', fg: '#0b080c' },
  { label: 'WhatsApp',   abbr: 'WA',    bg: '#25d366', fg: '#fff' },
  { label: 'TypeScript', abbr: 'TS',    bg: '#3178c6', fg: '#fff' },
  { label: 'React',      abbr: 'Re',    bg: '#61dafb', fg: '#0b080c' },
  { label: 'Webhooks',   abbr: 'WH',    bg: '#9b6fff', fg: '#fff' },
  { label: 'Google',     abbr: 'G',     bg: '#4285f4', fg: '#fff' },
]

function makeTexture(abbr: string, bg: string, fg: string): THREE.CanvasTexture {
  const size = 256
  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size
  const ctx = canvas.getContext('2d')!

  // Background circle
  const grad = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2)
  grad.addColorStop(0, bg)
  grad.addColorStop(1, shadeColor(bg, -30))
  ctx.fillStyle = grad
  ctx.beginPath()
  ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2)
  ctx.fill()

  // Text
  const fontSize = abbr.length > 3 ? 64 : 80
  ctx.fillStyle = fg
  ctx.font = `900 ${fontSize}px Inter, Arial, sans-serif`
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText(abbr, size / 2, size / 2)

  return new THREE.CanvasTexture(canvas)
}

function shadeColor(hex: string, amount: number): string {
  const num = parseInt(hex.replace('#', ''), 16)
  const r = Math.max(0, Math.min(255, (num >> 16) + amount))
  const g = Math.max(0, Math.min(255, ((num >> 8) & 0xff) + amount))
  const b = Math.max(0, Math.min(255, (num & 0xff) + amount))
  return `rgb(${r},${g},${b})`
}

const sphereGeometry = new THREE.SphereGeometry(1, 28, 28)

const spheres = [...Array(30)].map(() => ({
  scale: [0.7, 1, 0.8, 1, 1][Math.floor(Math.random() * 5)],
}))

type SphereProps = {
  vec?: THREE.Vector3
  scale: number
  r?: typeof THREE.MathUtils.randFloatSpread
  material: THREE.MeshPhysicalMaterial
  isActive: boolean
}

function SphereGeo({
  vec = new THREE.Vector3(),
  scale,
  r = THREE.MathUtils.randFloatSpread,
  material,
  isActive,
}: SphereProps) {
  const api = useRef<RapierRigidBody | null>(null)

  useFrame((_state, delta) => {
    if (!isActive) return
    delta = Math.min(0.1, delta)
    const impulse = vec
      .copy(api.current!.translation())
      .normalize()
      .multiply(
        new THREE.Vector3(
          -50 * delta * scale,
          -150 * delta * scale,
          -50 * delta * scale
        )
      )
    api.current?.applyImpulse(impulse, true)
  })

  return (
    <RigidBody
      linearDamping={0.75}
      angularDamping={0.15}
      friction={0.2}
      position={[r(20), r(20) - 25, r(20) - 10]}
      ref={api}
      colliders={false}
    >
      <BallCollider args={[scale]} />
      <CylinderCollider
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, 0, 1.2 * scale]}
        args={[0.15 * scale, 0.275 * scale]}
      />
      <mesh
        castShadow
        receiveShadow
        scale={scale}
        geometry={sphereGeometry}
        material={material}
        rotation={[0.3, 1, 1]}
      />
    </RigidBody>
  )
}

type PointerProps = {
  vec?: THREE.Vector3
  isActive: boolean
}

function Pointer({ vec = new THREE.Vector3(), isActive }: PointerProps) {
  const ref = useRef<RapierRigidBody>(null)

  useFrame(({ pointer, viewport }) => {
    if (!isActive) return
    const targetVec = vec.lerp(
      new THREE.Vector3(
        (pointer.x * viewport.width) / 2,
        (pointer.y * viewport.height) / 2,
        0
      ),
      0.2
    )
    ref.current?.setNextKinematicTranslation(targetVec)
  })

  return (
    <RigidBody
      position={[100, 100, 100]}
      type="kinematicPosition"
      colliders={false}
      ref={ref}
    >
      <BallCollider args={[2]} />
    </RigidBody>
  )
}

export default function TechStack() {
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const workEl = document.getElementById('work')
      if (!workEl) return
      const threshold = workEl.getBoundingClientRect().top
      setIsActive(threshold < window.innerHeight)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const materials = useMemo(() => {
    return TECHS.map(({ abbr, bg, fg }) => {
      const texture = makeTexture(abbr, bg, fg)
      return new THREE.MeshPhysicalMaterial({
        map: texture,
        emissive: '#ffffff',
        emissiveMap: texture,
        emissiveIntensity: 0.3,
        metalness: 0.5,
        roughness: 1,
        clearcoat: 0.1,
      })
    })
  }, [])

  return (
    <section className="techstack section">
      <p className="section-label">Tech Stack</p>
      <h2 className="section-title">Tools I Use</h2>

      <Canvas
        shadows
        gl={{ alpha: true, stencil: false, depth: false, antialias: false }}
        camera={{ position: [0, 0, 20], fov: 32.5, near: 1, far: 100 }}
        onCreated={state => (state.gl.toneMappingExposure = 1.5)}
        className="techstack__canvas"
      >
        <ambientLight intensity={1} />
        <spotLight
          position={[20, 20, 25]}
          penumbra={1}
          angle={0.2}
          color="white"
          castShadow
          shadow-mapSize={[512, 512]}
        />
        <directionalLight position={[0, 5, -4]} intensity={2} />
        <Physics gravity={[0, 0, 0]}>
          <Pointer isActive={isActive} />
          {spheres.map((props, i) => (
            <SphereGeo
              key={i}
              {...props}
              material={materials[i % materials.length]}
              isActive={isActive}
            />
          ))}
        </Physics>
        <Environment preset="city" environmentIntensity={0.5} />
        <EffectComposer enableNormalPass={false}>
          <N8AO color="#0b080c" aoRadius={2} intensity={1.15} />
        </EffectComposer>
      </Canvas>
    </section>
  )
}
