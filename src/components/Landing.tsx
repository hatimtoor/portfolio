import { Suspense, lazy } from 'react'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { info } from '../data/portfolioData'
import './styles/Landing.css'

const BallsScene = lazy(() => import('./Character/BallsScene'))
const Scene = lazy(() => import('./Character/Scene'))

export default function Landing() {
  return (
    <section id="home" className="landing">
      {/* Physics balls — full background */}
      <div className="landing__balls">
        <Suspense fallback={null}>
          <BallsScene />
        </Suspense>
      </div>

      <div className="landing__content">
        <p className="landing__greeting">Available for Remote Work</p>

        <h1 className="landing__name">
          Hatim<br />Toor
        </h1>

        <p className="landing__title">
          <strong>AI Automation Engineer</strong> &amp; Workflow Specialist
        </p>

        <div className="landing__actions">
          <a className="btn-primary" href="#work" onClick={e => { e.preventDefault(); document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' }) }}>
            View My Work
          </a>
          <a className="btn-ghost" href={`mailto:${info.email}`}>
            Get in Touch →
          </a>
        </div>

        <div className="landing__socials">
          <div className="landing__socials-divider" />
          <a href={info.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FiGithub />
          </a>
          <a href={info.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FiLinkedin />
          </a>
          <a href={`mailto:${info.email}`} aria-label="Email">
            <FiMail />
          </a>
        </div>
      </div>

      <div className="landing__canvas">
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
        <div className="landing__canvas-badge">
          <strong>3+</strong>
          Years of Experience
        </div>
      </div>

      <div className="landing__scroll-hint">
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
        Scroll
      </div>
    </section>
  )
}
