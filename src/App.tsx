import { useState, useCallback } from 'react'
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

  const handleLoadComplete = useCallback(() => {
    setLoaded(true)
  }, [])

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
    </>
  )
}
