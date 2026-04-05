import { useEffect, useState } from 'react'
import { info } from '../data/portfolioData'
import './styles/Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <a className="navbar__logo" href="#home">
        HT<span>.</span>
      </a>
      <ul className="navbar__links">
        <li><a href="#about" onClick={e => { e.preventDefault(); scrollTo('about') }}>About</a></li>
        <li><a href="#work" onClick={e => { e.preventDefault(); scrollTo('work') }}>Work</a></li>
        <li><a href="#career" onClick={e => { e.preventDefault(); scrollTo('career') }}>Career</a></li>
        <li>
          <a
            className="navbar__cta"
            href={`mailto:${info.email}`}
          >
            Hire Me
          </a>
        </li>
      </ul>
    </nav>
  )
}
