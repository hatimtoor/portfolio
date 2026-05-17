import { useState, useCallback, useEffect } from 'react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { Analytics } from '@vercel/analytics/react'
import Cursor from './components/Cursor'
import Loading from './components/Loading'
import StatusBar from './components/StatusBar'
import Hero from './components/Hero'
import About from './components/About'
import Pipeline from './components/Pipeline'
import Work from './components/Work'
import Career from './components/Career'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import SysInfo from './components/SysInfo'
import ChatBot from './components/ChatBot'
import './index.css'

export default function App() {
  const [loaded, setLoaded] = useState(false)

  const handleLoadComplete = useCallback(() => {
    setLoaded(true)
  }, [])

  // Fade-in for source components (.fade-in → .visible)
  useEffect(() => {
    if (!loaded) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )
    document.querySelectorAll('.fade-in').forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [loaded])

  // Fade-in for kept components (.fade-in-section → .is-visible)
  useEffect(() => {
    if (!loaded) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    )
    document.querySelectorAll('.fade-in-section').forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [loaded])

  return (
    <>
      <Cursor />
      <Loading onComplete={handleLoadComplete} />
      {loaded && (
        <>
          <StatusBar />
          <main>
            <Hero />
            <div className="fade-in"><About /></div>
            <div className="fade-in"><Pipeline /></div>
            <div className="fade-in"><Work /></div>
            <div className="fade-in"><Career /></div>
            <Testimonials />
            <div className="fade-in"><Contact /></div>
          </main>
          <SysInfo />
          <ChatBot />
        </>
      )}
      <SpeedInsights />
      <Analytics />
    </>
  )
}
