import { useEffect, useState } from 'react'
import { info } from '../data/portfolioData'
import './styles/Navbar.css'

const NAV_LINKS = [
  { label: 'About',   id: 'about' },
  { label: 'Work',    id: 'work' },
  { label: 'Career',  id: 'career' },
  { label: 'Contact', id: 'contact' },
]

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
      <a className="navbar__logo" href="#home" onClick={e => { e.preventDefault(); scrollTo('home') }}>
        HT<span>.</span>
      </a>
      <ul className="navbar__links">
        {NAV_LINKS.map(({ label, id }) => (
          <li key={id}>
            <a href={`#${id}`} onClick={e => { e.preventDefault(); scrollTo(id) }}>
              {label}
            </a>
          </li>
        ))}
        <li>
          <a className="navbar__cta" href={`mailto:${info.email}`}>
            Hire Me
          </a>
        </li>
      </ul>
    </nav>
  )
}
