import { useState, useCallback, lazy, Suspense } from 'react'
import Cursor from './components/Cursor'
import Loading from './components/Loading'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import About from './components/About'
import WhatIDo from './components/WhatIDo'
import Work from './components/Work'
import Career from './components/Career'
import Contact from './components/Contact'
import './index.css'

const TechStack = lazy(() => import('./components/TechStack'))

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
            <About />
            <WhatIDo />
            <Suspense fallback={<div style={{ height: '700px' }} />}>
              <TechStack />
            </Suspense>
            <Work />
            <Career />
            <Contact />
          </main>
        </>
      )}
    </>
  )
}
