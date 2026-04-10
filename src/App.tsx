import { useState, useCallback, useEffect } from 'react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { useFadeIn } from './hooks/useFadeIn'
import Cursor from './components/Cursor'
import Loading from './components/Loading'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import StatsBar from './components/StatsBar'
import About from './components/About'
import WhatIDo from './components/WhatIDo'
import TechStack from './components/TechStack'
import Work from './components/Work'
import Career from './components/Career'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import ChatBot from './components/ChatBot'
import './index.css'

export default function App() {
  const [loaded, setLoaded] = useState(false)
  useFadeIn()

  const handleLoadComplete = useCallback(() => {
    setLoaded(true)
  }, [])

  // Re-run fade-in after content loads
  useEffect(() => {
    if (!loaded) return
    setTimeout(() => {
      document.querySelectorAll('.fade-in-section').forEach(el => {
        const observer = new IntersectionObserver(
          ([entry]) => { if (entry.isIntersecting) { el.classList.add('is-visible'); observer.disconnect() } },
          { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
        )
        observer.observe(el)
      })
    }, 100)
  }, [loaded])

  return (
    <>
      <Cursor />
      <Loading onComplete={handleLoadComplete} />
      {loaded && (
        <>
          <Navbar />
          <main>
            <Landing />
            <StatsBar />
            <About />
            <WhatIDo />
            <TechStack />
            <Work />
            <Career />
            <Testimonials />
            <Contact />
          </main>
          <ChatBot />
        </>
      )}
      <SpeedInsights />
    </>
  )
}
