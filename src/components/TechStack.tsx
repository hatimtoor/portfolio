import './styles/TechStack.css'

const ROW1 = [
  { name: 'n8n',        svg: '/images/n8n.svg',         bg: '#ea4b71' },
  { name: 'Python',     svg: '/images/python.svg',       bg: '#3572a5' },
  { name: 'OpenAI',     svg: '/images/openai.svg',       bg: '#10a37f' },
  { name: 'TypeScript', svg: '/images/typescript.svg',   bg: '#3178c6' },
  { name: 'React',      svg: '/images/react.svg',        bg: '#1a2535' },
  { name: 'Node.js',    svg: '/images/nodejs.svg',       bg: '#3d7a3d' },
  { name: 'VAPI',       svg: null,                       bg: '#7c3aed' },
  { name: 'Docker',     svg: '/images/docker.svg',       bg: '#1d63ed' },
]

const ROW2 = [
  { name: 'JavaScript', svg: '/images/javascript.svg',  bg: '#b8960a' },
  { name: 'MongoDB',    svg: '/images/mongodb.svg',      bg: '#1a5c3a' },
  { name: 'PostgreSQL', svg: '/images/postgresql.svg',   bg: '#336791' },
  { name: 'WhatsApp',   svg: '/images/whatsapp.svg',     bg: '#25d366' },
  { name: 'GitHub',     svg: '/images/github.svg',       bg: '#24292f' },
  { name: 'REST API',   svg: null,                       bg: '#9b6fff' },
  { name: 'Webhooks',   svg: null,                       bg: '#6d28d9' },
  { name: 'Google',     svg: null,                       bg: '#4285f4' },
]

interface Tech {
  name: string
  svg: string | null
  bg: string
}

function TechBadge({ tech }: { tech: Tech }) {
  return (
    <div className="ts-badge" style={{ '--badge-bg': tech.bg } as React.CSSProperties}>
      {tech.svg && (
        <img src={tech.svg} alt={tech.name} className="ts-badge__icon" />
      )}
      <span className="ts-badge__name">{tech.name}</span>
    </div>
  )
}

function MarqueeRow({ items, reverse = false }: { items: Tech[]; reverse?: boolean }) {
  // Duplicate for seamless loop
  const doubled = [...items, ...items]
  return (
    <div className={`ts-marquee-track${reverse ? ' ts-marquee-track--reverse' : ''}`}>
      <div className="ts-marquee-inner">
        {doubled.map((t, i) => <TechBadge key={i} tech={t} />)}
      </div>
    </div>
  )
}

export default function TechStack() {
  return (
    <section className="techstack section">
      <p className="section-label">Tech Stack</p>
      <h2 className="section-title">Tools I Use</h2>

      <div className="ts-marquee-wrap">
        <MarqueeRow items={ROW1} />
        <MarqueeRow items={ROW2} reverse />
        <div className="ts-marquee-fade ts-marquee-fade--left" />
        <div className="ts-marquee-fade ts-marquee-fade--right" />
      </div>
    </section>
  )
}
