import { info, skills } from '../data/portfolioData'
import './styles/About.css'

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="about__inner">
        <div className="about__left">
          <p className="section-label">About Me</p>
          <div className="about__number">01</div>
          <h2 className="section-title">Who I<br />Am</h2>

          <div className="about__stats">
            <div className="about__stat">
              <div className="about__stat-value">3+</div>
              <div className="about__stat-label">Years Experience</div>
            </div>
            <div className="about__stat">
              <div className="about__stat-value">5+</div>
              <div className="about__stat-label">AI Projects Built</div>
            </div>
            <div className="about__stat">
              <div className="about__stat-value">30%</div>
              <div className="about__stat-label">Revenue Growth Achieved</div>
            </div>
            <div className="about__stat">
              <div className="about__stat-value">24/7</div>
              <div className="about__stat-label">Automation Uptime</div>
            </div>
          </div>
        </div>

        <div className="about__right">
          <p className="about__text">
            I'm <em>Hatim Toor</em>, an AI Automation Engineer and Team Lead based in{' '}
            <em>{info.location}</em>. I specialise in building intelligent systems that work
            around the clock — from voice AI sales agents to multi-platform content pipelines.
          </p>
          <p className="about__text">
            With <em>3+ years of expertise in n8n</em>, LLM integration, and REST API design,
            I've led teams and delivered end-to-end automation solutions that cut manual effort
            and drive real business outcomes. Currently leading engineering at{' '}
            <em>Schmoozzer</em> while pursuing a BS in Robotics & Intelligent Systems.
          </p>
          <p className="about__text">
            My background spans sales operations, dispatch management, and team leadership —
            giving me a business-first perspective that makes my automation work practical,
            not just technical. I build things that <em>actually ship</em>.
          </p>

          <div className="about__skills">
            <p className="about__skills-title">Core Stack</p>
            <ul className="about__skills-list">
              {skills.map(s => (
                <li key={s.label} className="about__skill-tag">
                  {s.label}{s.level ? ` — ${s.level}` : ''}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
