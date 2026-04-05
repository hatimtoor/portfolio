import { useEffect, useRef, useState } from 'react'
import './styles/Loading.css'

interface Props {
  onComplete: () => void
}

export default function Loading({ onComplete }: Props) {
  const [progress, setProgress] = useState(0)
  const [hidden, setHidden] = useState(false)
  const raf = useRef<number>(0)

  useEffect(() => {
    let current = 0
    const target = 100
    const speed = 1.2

    const tick = () => {
      current = Math.min(current + speed * Math.random() * 2, target)
      setProgress(Math.floor(current))
      if (current < target) {
        raf.current = requestAnimationFrame(tick)
      } else {
        setTimeout(() => {
          setHidden(true)
          setTimeout(onComplete, 650)
        }, 300)
      }
    }

    raf.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf.current)
  }, [onComplete])

  return (
    <div className={`loading${hidden ? ' hidden' : ''}`}>
      <div className="loading__name">
        Hatim <span>Toor</span>
      </div>
      <div className="loading__bar-track">
        <div className="loading__bar-fill" style={{ width: `${progress}%` }} />
      </div>
    </div>
  )
}
