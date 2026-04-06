import { useEffect, useRef, useState } from 'react'
import './styles/StatsBar.css'

const STATS = [
  { value: 50,    suffix: '+', label: 'AI Projects Built' },
  { value: 3,     suffix: '+', label: 'Years Experience' },
  { value: 10000, suffix: '+', label: 'Hours Automated' },
  { value: 30,    suffix: '%', label: 'Revenue Growth Delivered' },
]

function useCountUp(target: number, active: boolean, duration = 1800) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return
    let start = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [active, target, duration])

  return count
}

function StatItem({ value, suffix, label }: typeof STATS[number] & { active: boolean }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const count = useCountUp(value, (arguments[0] as { active: boolean }).active)
  return (
    <div className="statsbar__item">
      <div className="statsbar__value">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="statsbar__label">{label}</div>
    </div>
  )
}

// Proper component to avoid hooks-in-arguments issue
function StatItemWrapper({ stat, active }: { stat: typeof STATS[number]; active: boolean }) {
  const count = useCountUp(stat.value, active)
  return (
    <div className="statsbar__item">
      <div className="statsbar__value">
        {count.toLocaleString()}{stat.suffix}
      </div>
      <div className="statsbar__label">{stat.label}</div>
    </div>
  )
}

// suppress unused
void StatItem

export default function StatsBar() {
  const [active, setActive] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); observer.disconnect() } },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="statsbar">
      {STATS.map(stat => (
        <StatItemWrapper key={stat.label} stat={stat} active={active} />
      ))}
    </div>
  )
}
