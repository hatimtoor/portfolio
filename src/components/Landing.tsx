import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { info } from '../data/portfolioData'
import './styles/Landing.css'

export default function Landing() {
  return (
    <section id="home" className="landing">
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

      <div className="landing__hero-right">
        <div className="landing__tag">AI Automation</div>
        <div className="landing__tag">n8n Expert</div>
        <div className="landing__tag">LLM Agents</div>
        <div className="landing__tag">Voice AI</div>
        <div className="landing__tag">REST APIs</div>
        <div className="landing__tag">Workflow Design</div>
        <div className="landing__badge">
          <strong>3+</strong>
          <span>Years of<br />Experience</span>
        </div>
        <div className="landing__badge landing__badge--alt">
          <strong>5+</strong>
          <span>AI Projects<br />Shipped</span>
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
