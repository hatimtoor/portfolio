import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi'
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
          <a
            className="btn-primary"
            href="#work"
            onClick={e => { e.preventDefault(); document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' }) }}
          >
            View My Work
          </a>
          <a className="btn-ghost" href="/Hatim_Toor_CV.docx" download>
            <FiDownload /> Download CV
          </a>
        </div>

        <div className="landing__socials">
          <div className="landing__socials-divider" />
          <a href={info.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FiGithub /></a>
          <a href={info.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
          <a href={`mailto:${info.email}`} aria-label="Email"><FiMail /></a>
        </div>
      </div>

      {/* Photo side */}
      <div className="landing__photo-wrap">
        <div className="landing__photo-glow" />
        <div className="landing__photo-frame">
          <img src="/images/hatim.webp" alt="Hatim Toor" className="landing__photo" loading="eager" fetchPriority="high" />
        </div>
        <div className="landing__tag landing__tag--1">n8n</div>
        <div className="landing__tag landing__tag--2">OpenAI</div>
        <div className="landing__tag landing__tag--3">Voice AI</div>
        <div className="landing__tag landing__tag--4">Python</div>
        <div className="landing__tag landing__tag--5">LLM Agents</div>
        <div className="landing__tag landing__tag--6">REST APIs</div>
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
