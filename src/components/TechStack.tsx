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

// Tech stack — core skills + Bidsquire project stack
const TECHS = [
  { name: 'n8n',        svg: '/images/n8n.svg',         bg: '#ea4b71' },
  { name: 'Python',     svg: '/images/python.svg',       bg: '#3572a5' },
  { name: 'TypeScript', svg: '/images/typescript.svg',   bg: '#3178c6' },
  { name: 'React',      svg: '/images/react.svg',        bg: '#222c3a' },
  { name: 'OpenAI',     svg: '/images/openai.svg',       bg: '#10a37f' },
  { name: 'Node.js',    svg: '/images/nodejs.svg',       bg: '#215732' },
  { name: 'JavaScript', svg: '/images/javascript.svg',   bg: '#323330' },
  { name: 'MongoDB',    svg: '/images/mongodb.svg',      bg: '#023430' },
  { name: 'PostgreSQL', svg: '/images/postgresql.svg',   bg: '#336791' },
  { name: 'Docker',     svg: '/images/docker.svg',       bg: '#1d63ed' },
  { name: 'GitHub',     svg: '/images/github.svg',       bg: '#24292f' },
  { name: 'WhatsApp',   svg: '/images/whatsapp.svg',     bg: '#25d366' },
]

function loadSvgTexture(svgPath: string, bg: string): Promise<THREE.CanvasTexture> {
  return new Promise(resolve => {
    const size = 256
    const canvas = document.createElement('canvas')
    canvas.width = size
    canvas.height = size
    const ctx = canvas.getContext('2d')!

    const drawBackground = () => {
      ctx.fillStyle = bg
      ctx.beginPath()
      ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2)
      ctx.fill()
    }

    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.onload = () => {
      drawBackground()
      const pad = size * 0.22
      ctx.drawImage(img, pad, pad, size - pad * 2, size - pad * 2)
      resolve(new THREE.CanvasTexture(canvas))
    }
    img.onerror = () => {
      // fallback — just background circle
      drawBackground()
      resolve(new THREE.CanvasTexture(canvas))
    }
    img.src = svgPath
  })
}

const sphereGeometry = new THREE.SphereGeometry(1, 28, 28)
const spheres = [...Array(36)].map(() => ({
  scale: [0.7, 1, 0.8, 1, 1][Math.floor(Math.random() * 5)],
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
  const [materials, setMaterials] = useState<THREE.MeshPhysicalMaterial[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  // Only mount the Canvas when the section enters the viewport
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect() } },
      { rootMargin: '200px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // Activate physics when the techstack section itself enters view
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => setIsActive(entry.isIntersecting),
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!inView) return
    Promise.all(TECHS.map(t => loadSvgTexture(t.svg, t.bg))).then(textures => {
      setMaterials(textures.map(texture =>
        new THREE.MeshPhysicalMaterial({
          map: texture,
          emissive: '#ffffff',
          emissiveMap: texture,
          emissiveIntensity: 0.25,
          metalness: 0.4,
          roughness: 1,
          clearcoat: 0.1,
        })
      ))
    })
  }, [])

  const fallbackMaterials = useMemo(() =>
    TECHS.map(t => new THREE.MeshPhysicalMaterial({ color: t.bg, roughness: 1, metalness: 0.4 }))
  , [])

  const activeMaterials = materials.length > 0 ? materials : fallbackMaterials

  return (
    <section ref={sectionRef} className="techstack section">
      <p className="section-label">Tech Stack</p>
      <h2 className="section-title">Tools I Use</h2>

      {!inView && <div className="techstack__placeholder" />}
      {inView && <Canvas
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
              material={activeMaterials[i % activeMaterials.length]}
              isActive={isActive}
            />
          ))}
        </Physics>
        <Environment preset="city" environmentIntensity={0.5} />
        <EffectComposer enableNormalPass={false}>
          <N8AO color="#0b080c" aoRadius={2} intensity={1.15} />
        </EffectComposer>
      </Canvas>}
    </section>
  )
}
