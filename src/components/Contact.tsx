import { useState } from 'react'
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiSend } from 'react-icons/fi'
import { info } from '../data/portfolioData'
import './styles/Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
    const mailtoLink = `mailto:${info.email}?subject=${subject}&body=${body}`
    const a = document.createElement('a')
    a.href = mailtoLink
    a.click()
    setSent(true)
  }

  return (
    <section id="contact" className="section contact fade-in-section">
      <div className="contact__inner">
        <div className="contact__left">
          <p className="section-label">Get In Touch</p>
          <h2 className="section-title">Let's<br /><span>Work</span><br />Together</h2>
          <p className="contact__sub">
            Open to remote-first roles in AI automation, workflow engineering,
            and intelligent agent development. Let's build something that works while you sleep.
          </p>

          <div className="contact__links">
            <a className="contact__link" href={`mailto:${info.email}`}>
              <FiMail /> {info.email}
            </a>
            <a className="contact__link" href={info.github} target="_blank" rel="noopener noreferrer">
              <FiGithub /> github.com/hatimtoor
            </a>
            <a className="contact__link" href={info.linkedin} target="_blank" rel="noopener noreferrer">
              <FiLinkedin /> linkedin.com/in/hatim-toor
            </a>
            <a className="contact__link" href={`tel:${info.phone}`}>
              <FiPhone /> {info.phone}
            </a>
          </div>
        </div>

        <div className="contact__right">
          {sent ? (
            <div className="contact__thanks">
              <div className="contact__thanks-icon">✓</div>
              <h3>Message ready to send!</h3>
              <p>Your email client should have opened. Hit send and I'll get back to you shortly.</p>
              <button onClick={() => setSent(false)} className="btn-primary" style={{ marginTop: '1.5rem', cursor: 'none' }}>
                Send Another
              </button>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="John Smith"
                  required
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                />
              </div>
              <div className="contact__form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  type="email"
                  placeholder="john@company.com"
                  required
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                />
              </div>
              <div className="contact__form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell me about your project or role..."
                  required
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                />
              </div>
              <button type="submit" className="contact__submit">
                <FiSend /> Send Message
              </button>
            </form>
          )}
        </div>
      </div>

      <footer className="contact__footer">
        <span className="contact__footer-logo">HT<span>.</span></span>
        <span>© {new Date().getFullYear()} Hatim Toor — All rights reserved</span>
        <span>{info.location}</span>
      </footer>
    </section>
  )
}
