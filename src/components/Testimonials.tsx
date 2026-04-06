import { useState, useEffect, useCallback } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import './styles/Testimonials.css'

const TESTIMONIALS = [
  {
    quote: "Hatim built us an outbound voice agent that dials leads, qualifies them, and logs everything to our CRM — completely hands-free. Our contact rate doubled in the first month. Genuinely one of the best automation engineers I've worked with.",
    name: "Sarah Mitchell",
    role: "Head of Sales",
    company: "GrowthLabs",
  },
  {
    quote: "We needed our email, calendar, and CRM to talk to each other without manual input. Hatim had a working pipeline in days, not weeks. The ROI was immediate — our team reclaimed 20+ hours a week.",
    name: "Daniel Osei",
    role: "Operations Director",
    company: "Nexify",
  },
  {
    quote: "Hatim built a WhatsApp booking agent for our clinic that works 24/7. Patients can book appointments, get reminders, and reschedule — all without our receptionist. It's paid for itself ten times over.",
    name: "Dr. Aisha Rehman",
    role: "Clinic Owner",
    company: "MedPoint",
  },
  {
    quote: "The content automation pipeline Hatim built pumps out short-form video scripts, generates assets, and uploads them across three platforms — fully automated. Our content output went from 5 videos a week to 35.",
    name: "Marcus Bello",
    role: "Founder",
    company: "CreatorOS",
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const [animating, setAnimating] = useState(false)

  const goTo = useCallback((idx: number) => {
    if (animating) return
    setAnimating(true)
    setTimeout(() => {
      setActive(idx)
      setAnimating(false)
    }, 250)
  }, [animating])

  const prev = () => goTo((active - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  const next = useCallback(() => goTo((active + 1) % TESTIMONIALS.length), [active, goTo])

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  const t = TESTIMONIALS[active]

  return (
    <section className="testimonials section">
      <p className="section-label">Testimonials</p>
      <h2 className="section-title">Client Words</h2>

      <div className="testimonials__card-wrap">
        <div className={`testimonials__card${animating ? ' testimonials__card--fade' : ''}`}>
          <div className="testimonials__quote-mark">"</div>
          <p className="testimonials__quote">{t.quote}</p>
          <div className="testimonials__author">
            <div className="testimonials__author-avatar">
              {t.name.charAt(0)}
            </div>
            <div>
              <div className="testimonials__author-name">{t.name}</div>
              <div className="testimonials__author-role">{t.role} · {t.company}</div>
            </div>
          </div>
        </div>

        <div className="testimonials__controls">
          <button className="testimonials__btn" onClick={prev} aria-label="Previous">
            <FiChevronLeft />
          </button>
          <div className="testimonials__dots">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                className={`testimonials__dot${i === active ? ' testimonials__dot--active' : ''}`}
                onClick={() => goTo(i)}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button className="testimonials__btn" onClick={next} aria-label="Next">
            <FiChevronRight />
          </button>
        </div>
      </div>
    </section>
  )
}
