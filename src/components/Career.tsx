import { experience, education } from '../data/portfolioData'
import './styles/Career.css'

export default function Career() {
  return (
    <section id="career" className="section career">
      <div className="career__inner">
        <div className="career__left">
          <p className="section-label">Experience</p>
          <div className="career__number">03</div>
          <h2 className="section-title">My<br />Career</h2>

          <nav className="career__tabs">
            {experience.map(e => (
              <button key={e.company} className="career__tab">
                {e.company}
              </button>
            ))}
          </nav>
        </div>

        <div className="career__right">
          <ul className="career__timeline">
            {experience.map(e => (
              <li key={e.company} className="career__entry">
                <p className="career__entry-period">{e.period}</p>
                <h3 className="career__entry-role">{e.role}</h3>
                <p className="career__entry-company">{e.company}</p>
                <ul className="career__entry-bullets">
                  {e.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
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
