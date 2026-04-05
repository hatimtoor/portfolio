import * as THREE from 'three'
import { useRef, useState, useEffect } from 'react'
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

const TECHS = [
  { name: 'n8n',        abbr: 'n8n',  bg: '#ea4b71' },
  { name: 'Python',     abbr: 'Py',   bg: '#3572a5' },
  { name: 'TypeScript', abbr: 'TS',   bg: '#3178c6' },
  { name: 'React',      abbr: 'Re',   bg: '#1a2535' },
  { name: 'OpenAI',     abbr: 'AI',   bg: '#10a37f' },
  { name: 'Node.js',    abbr: 'Node', bg: '#3d7a3d' },
  { name: 'JavaScript', abbr: 'JS',   bg: '#e8c03a' },
  { name: 'MongoDB',    abbr: 'MDB',  bg: '#023430' },
  { name: 'PostgreSQL', abbr: 'PG',   bg: '#336791' },
  { name: 'Docker',     abbr: 'Dock', bg: '#1d63ed' },
  { name: 'GitHub',     abbr: 'GH',   bg: '#24292f' },
  { name: 'WhatsApp',   abbr: 'WA',   bg: '#25d366' },
  { name: 'VAPI',       abbr: 'VAPI', bg: '#7c3aed' },
  { name: 'Webhooks',   abbr: 'WH',   bg: '#9b6fff' },
]

// Build all textures synchronously at module load — no async, no fetch
function makeTechTexture(tech: typeof TECHS[number]): THREE.CanvasTexture {
  const size = 256
  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size
  const ctx = canvas.getContext('2d')!

  // Background circle with radial gradient
  const grad = ctx.createRadialGradient(size * 0.4, size * 0.35, 0, size / 2, size / 2, size / 2)
  grad.addColorStop(0, lighten(tech.bg, 30))
  grad.addColorStop(1, tech.bg)
  ctx.fillStyle = grad
  ctx.beginPath()
  ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2)
  ctx.fill()

  // Subtle inner ring
  ctx.strokeStyle = 'rgba(255,255,255,0.12)'
  ctx.lineWidth = 3
  ctx.beginPath()
  ctx.arc(size / 2, size / 2, size / 2 - 8, 0, Math.PI * 2)
  ctx.stroke()

  // Abbreviation text
  const isShort = tech.abbr.length <= 2
  const fontSize = isShort ? 100 : tech.abbr.length === 3 ? 78 : 62
  ctx.fillStyle = tech.name === 'JavaScript' ? '#1a1a1a' : '#ffffff'
  ctx.font = `900 ${fontSize}px Arial, sans-serif`
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText(tech.abbr, size / 2, size / 2 - 8)

  // Tech name below
  ctx.font = `500 22px Arial, sans-serif`
  ctx.fillStyle = tech.name === 'JavaScript' ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.55)'
  ctx.fillText(tech.name, size / 2, size / 2 + 52)

  return new THREE.CanvasTexture(canvas)
}

function lighten(hex: string, amount: number): string {
  const num = parseInt(hex.replace('#', ''), 16)
  const r = Math.min(255, (num >> 16) + amount)
  const g = Math.min(255, ((num >> 8) & 0xff) + amount)
  const b = Math.min(255, (num & 0xff) + amount)
  return `rgb(${r},${g},${b})`
}

// Pre-build materials at module level — ready instantly when Canvas mounts
const MATERIALS = TECHS.map(tech => {
  const texture = makeTechTexture(tech)
  return new THREE.MeshPhysicalMaterial({
    map: texture,
    emissive: new THREE.Color(tech.bg),
    emissiveIntensity: 0.15,
    metalness: 0.3,
    roughness: 0.8,
    clearcoat: 0.2,
  })
})

const sphereGeometry = new THREE.SphereGeometry(1, 28, 28)
const spheres = [...Array(36)].map(() => ({
  scale: [0.7, 1, 0.8, 1, 1][Math.floor(Math.random() * 5)] as number,
}))

type SphereProps = {
  vec?: THREE.Vector3
  scale: number
  r?: typeof THREE.MathUtils.randFloatSpread
  material: THREE.MeshPhysicalMaterial
  isActive: boolean
}

function SphereGeo({ vec = new THREE.Vector3(), scale, r = THREE.MathUtils.randFloatSpread, material, isActive }: SphereProps) {
  const api = useRef<RapierRigidBody | null>(null)

  useFrame((_state, delta) => {
    if (!isActive || !api.current) return
    delta = Math.min(0.1, delta)
    const impulse = vec
      .copy(api.current.translation())
      .normalize()
      .multiply(new THREE.Vector3(-50 * delta * scale, -150 * delta * scale, -50 * delta * scale))
    api.current.applyImpulse(impulse, true)
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
      <CylinderCollider rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 1.2 * scale]} args={[0.15 * scale, 0.275 * scale]} />
      <mesh castShadow receiveShadow scale={scale} geometry={sphereGeometry} material={material} />
    </RigidBody>
  )
}

function Pointer({ vec = new THREE.Vector3(), isActive }: { vec?: THREE.Vector3; isActive: boolean }) {
  const ref = useRef<RapierRigidBody>(null)

  useFrame(({ pointer, viewport }) => {
    if (!isActive) return
    const t = vec.lerp(
      new THREE.Vector3((pointer.x * viewport.width) / 2, (pointer.y * viewport.height) / 2, 0),
      0.2
    )
    ref.current?.setNextKinematicTranslation(t)
  })

  return (
    <RigidBody position={[100, 100, 100]} type="kinematicPosition" colliders={false} ref={ref}>
      <BallCollider args={[2]} />
    </RigidBody>
  )
}

export default function TechStack() {
  const [isActive, setIsActive] = useState(false)
  const [inView, setInView] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const mountObserver = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); mountObserver.disconnect() } },
      { rootMargin: '200px' }
    )
    const activeObserver = new IntersectionObserver(
      ([entry]) => setIsActive(entry.isIntersecting),
      { threshold: 0.1 }
    )
    mountObserver.observe(el)
    activeObserver.observe(el)
    return () => { mountObserver.disconnect(); activeObserver.disconnect() }
  }, [])

  return (
    <section ref={sectionRef} className="techstack section">
      <p className="section-label">Tech Stack</p>
      <h2 className="section-title">Tools I Use</h2>

      {!inView && <div className="techstack__placeholder" />}
      {inView && (
        <Canvas
          shadows
          gl={{ alpha: true, stencil: false, depth: false, antialias: false }}
          camera={{ position: [0, 0, 20], fov: 32.5, near: 1, far: 100 }}
          onCreated={state => (state.gl.toneMappingExposure = 1.5)}
          className="techstack__canvas"
        >
          <ambientLight intensity={1} />
          <spotLight position={[20, 20, 25]} penumbra={1} angle={0.2} color="white" castShadow shadow-mapSize={[512, 512]} />
          <directionalLight position={[0, 5, -4]} intensity={2} />
          <Physics gravity={[0, 0, 0]}>
            <Pointer isActive={isActive} />
            {spheres.map((props, i) => (
              <SphereGeo
                key={i}
                {...props}
                material={MATERIALS[i % MATERIALS.length]}
                isActive={isActive}
              />
            ))}
          </Physics>
          <Environment preset="city" environmentIntensity={0.5} />
          <EffectComposer enableNormalPass={false}>
            <N8AO color="#0b080c" aoRadius={2} intensity={1.15} />
          </EffectComposer>
        </Canvas>
      )}
    </section>
  )
}
