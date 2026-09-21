import Navbar from './Components/Navbar'
import Header from './Components/Header'
import Skill from './Components/Skill'
import Milestone from './Components/Milestone'
import Projects from './Components/Projects'
import About from './Components/About'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    const root = document.documentElement
    const onMove = (event) => {
      root.style.setProperty('--mx', `${event.clientX}px`)
      root.style.setProperty('--my', `${event.clientY}px`)
    }
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      const progress = max > 0 ? window.scrollY / max : 0
      root.style.setProperty('--scroll-progress', `${progress * 100}%`)
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <div className="site-shell">
      <div className="global-spotlight" aria-hidden="true" />
      <div className="global-progress" aria-hidden="true" />
      <Navbar />
      <main>
        <Header />
        <Skill />
        <Milestone />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
