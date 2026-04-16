import { FiGithub } from 'react-icons/fi'
import { projects } from '../data/portfolioData'
import './styles/Work.css'

export default function Work() {
  return (
    <section id="work" className="section work fade-in-section">
      <div className="work__header">
        <div>
          <p className="section-label">Selected Work</p>
          <h2 className="section-title">Projects</h2>
        </div>
        <p className="work__count">{projects.length} Projects</p>
      </div>

      <ul className="work__list">
        {projects.map((p, i) => (
          <li key={p.title} className="work__item">
            <span className="work__item-num">0{i + 1}</span>

            <div className="work__item-body">
              <p className="work__item-tech">{p.tech}</p>
              <h3 className="work__item-title">{p.title}</h3>
              <p className="work__item-desc">{p.description}</p>
              <p className="work__item-outcome">{p.outcome}</p>
              <div className="work__item-tags">
                {p.tags.map(t => (
                  <span key={t} className="work__tag">{t}</span>
                ))}
              </div>
            </div>

            {p.github ? (
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="work__item-github"
                aria-label={`View ${p.title} on GitHub`}
              >
                <FiGithub />
                <span>View on GitHub</span>
              </a>
            ) : (
              <span className="work__item-label">Private</span>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}
