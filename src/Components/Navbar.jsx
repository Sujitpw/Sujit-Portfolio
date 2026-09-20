import { useEffect, useState } from 'react'
import { FiArrowUpRight, FiMenu, FiX, FiHome, FiUser, FiZap, FiFolder, FiMail, FiGithub } from 'react-icons/fi'

const links = [
  ['Home', '__home', FiHome],
  ['About', 'about', FiUser],
  ['Skills', 'skills', FiZap],
  ['Projects', 'projects', FiFolder],
  ['Contact', 'contact', FiMail],
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (id) => {
    if (id === '__home') window.scrollTo({ top: 0, behavior: 'smooth' })
    else document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <nav className={`main-nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="section-wrap nav-inner">
        <button className="brand" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="brand-bar" aria-hidden="true" />
          <span className="brand-copy">
            <span className="brand-name">SUJIT KUMAR</span>
            <span className="brand-tagline">BUILD · DEVELOP · SOLVE</span>
          </span>
          <span className="brand-code">/ DEV</span>
        </button>

        <div className="nav-links">
          {links.map(([label, id, Icon], index) => (
            <button key={id} className={`nav-link ${index === 0 ? 'active' : ''}`} onClick={() => go(id)}>
              <Icon aria-hidden="true" />
              <span>{label}</span>
            </button>
          ))}
        </div>

        <div className="nav-system-status">
          <span className="nav-live-dot" />
          <div>
            <strong>SYSTEM ONLINE</strong>
            <span>JAVA · SPRING BOOT · FULL STACK</span>
          </div>
        </div>

        <a className="nav-github" href="https://github.com/Sujitpw" target="_blank" rel="noreferrer">
          <FiGithub /> <span>GitHub</span> <FiArrowUpRight />
        </a>

        <button className="menu-btn" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>
      {open && (
        <div className="mobile-menu">
          <div className="section-wrap mobile-menu-inner">
            {links.map(([label, id, Icon]) => (
              <button key={id} className="nav-link" onClick={() => go(id)}><Icon /> {label}</button>
            ))}
            <a className="nav-github" href="https://github.com/Sujitpw" target="_blank" rel="noreferrer"><FiGithub /> GitHub <FiArrowUpRight /></a>
          </div>
        </div>
      )}
    </nav>
  )
}
