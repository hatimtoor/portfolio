import { services } from '../data/portfolioData'
import './styles/WhatIDo.css'

export default function WhatIDo() {
  return (
    <section className="section whatido">
      <div className="whatido__header">
        <p className="section-label">What I Do</p>
        <h2 className="section-title">My Services</h2>
      </div>

      <div className="whatido__grid">
        {services.map((s, i) => (
          <div key={s.title} className="whatido__card">
            <p className="whatido__card-number">0{i + 1}</p>
            <h3 className="whatido__card-title">{s.title}</h3>
            <p className="whatido__card-desc">{s.description}</p>
            <div className="whatido__tags">
              {s.tags.map(t => (
                <span key={t} className="whatido__tag">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
