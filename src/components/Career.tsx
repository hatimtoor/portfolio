import { useState } from 'react'
import { experience, education } from '../data/portfolioData'
import './styles/Career.css'

export default function Career() {
  const [active, setActive] = useState(0)

  return (
    <section id="career" className="section career fade-in-section">
      <div className="career__inner">
        <div className="career__left">
          <p className="section-label">Experience</p>
          <div className="career__number">03</div>
          <h2 className="section-title">My<br />Career</h2>

          <nav className="career__tabs">
            {experience.map((e, i) => (
              <button
                key={e.company}
                className={`career__tab${i === active ? ' active' : ''}`}
                onClick={() => setActive(i)}
              >
                {e.company}
              </button>
            ))}
          </nav>
        </div>

        <div className="career__right">
          <ul className="career__timeline">
            {experience.map((e, i) => (
              <li
                key={e.company}
                className={`career__entry${i === active ? ' career__entry--active' : ''}`}
                onClick={() => setActive(i)}
              >
                <p className="career__entry-period">{e.period}</p>
                <h3 className="career__entry-role">{e.role}</h3>
                <p className="career__entry-company">{e.company}</p>
                <ul className="career__entry-bullets">
                  {e.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>

          <div className="career__edu">
            <p className="career__edu-title">Education</p>
            <ul className="career__edu-list">
              {education.map(ed => (
                <li key={ed.degree} className="career__edu-item">
                  <p className="career__edu-degree">{ed.degree}</p>
                  <p className="career__edu-inst">{ed.institution}</p>
                  <p className="career__edu-period">{ed.period}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
