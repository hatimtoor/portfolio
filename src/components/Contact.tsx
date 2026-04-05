import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi'
import { info } from '../data/portfolioData'
import './styles/Contact.css'

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <p className="section-label">Get In Touch</p>

      <h2 className="contact__big">
        Let's<br /><span>Work</span><br />Together
      </h2>

      <p className="contact__sub">
        Open to remote-first opportunities in AI automation, workflow engineering,
        and intelligent agent development. Let's build something that works while you sleep.
      </p>

      <a className="contact__email" href={`mailto:${info.email}`}>
        <FiMail />
        {info.email}
      </a>

      <div className="contact__links">
        <a className="contact__link" href={info.github} target="_blank" rel="noopener noreferrer">
          <FiGithub /> GitHub
        </a>
        <a className="contact__link" href={info.linkedin} target="_blank" rel="noopener noreferrer">
          <FiLinkedin /> LinkedIn
        </a>
        <a className="contact__link" href={`tel:${info.phone}`}>
          <FiPhone /> {info.phone}
        </a>
      </div>

      <footer className="contact__footer">
        <span className="contact__footer-logo">HT<span>.</span></span>
        <span>© {new Date().getFullYear()} Hatim Toor — All rights reserved</span>
        <span>{info.location}</span>
      </footer>
    </section>
  )
}
