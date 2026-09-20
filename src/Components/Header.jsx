import { motion } from 'framer-motion'
import { FiArrowDown, FiArrowUpRight, FiGithub, FiLinkedin, FiActivity, FiDatabase, FiLock, FiCode } from 'react-icons/fi'

const resumeUrl = 'https://drive.google.com/file/d/1jAqUTn6hLLclO4KQNU5Ap_n9nZJ2qlqc/view?usp=drive_link'
const stack = ['JAVA', 'SPRING BOOT', 'REST API', 'JWT', 'POSTGRESQL', 'JPA / HIBERNATE', 'REACT', 'JAVASCRIPT', 'GIT', 'POSTMAN']

const systems = [
  ['API', 'Spring Boot', 'READY', FiActivity],
  ['DATA', 'PostgreSQL', 'LIVE', FiDatabase],
  ['AUTH', 'JWT / RBAC', 'SECURE', FiLock],
]

export default function Header() {
  return (
    <section className="hero" id="home">
      <div className="grid-bg" />
      <div className="noise" />
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />
      <div className="scan-line" />
      <div className="cinematic-beam cinematic-beam-one" />
      <div className="cinematic-beam cinematic-beam-two" />
      <div className="hero-vignette" />
      <div className="hud-cross hud-cross-left" aria-hidden="true" />
      <div className="hud-cross hud-cross-right" aria-hidden="true" />

      <div className="hero-side-rail hero-side-left" aria-hidden="true">
        <div className="rail-label">TECH STACK / 01</div>
        <div className="rail-items">
          <span>JAVA</span><span>SPRING BOOT</span><span>REST API</span><span>POSTGRESQL</span><span>JPA</span><span>REACT</span>
        </div>
        <div className="rail-line" />
      </div>
      <div className="hero-side-rail hero-side-right" aria-hidden="true">
        <div className="rail-label">SYSTEMS / 02</div>
        <div className="rail-items">
          <span>JWT / RBAC</span><span>GIT / GITHUB</span><span>AI / ML</span><span>OPENCV</span><span>JAVASCRIPT</span><span>POSTMAN</span>
        </div>
        <div className="rail-line" />
      </div>

      <div className="hero-wrap hero-content">
        <div className="hero-bootbar" aria-label="Engineering build status">
          <div className="boot-id"><span className="boot-pulse" /> SUJIT / ENGINEERING LAB <b>v2.06</b></div>
          <div className="boot-sequence">
            <span className="boot-step active"><i>01</i> INIT</span>
            <span className="boot-connector" />
            <span className="boot-step active"><i>02</i> API</span>
            <span className="boot-connector" />
            <span className="boot-step active"><i>03</i> DATA</span>
            <span className="boot-connector" />
            <span className="boot-step live"><i>04</i> SHIP</span>
          </div>
          <div className="boot-readout">BUILD <b>2026</b> / STATUS <b>ONLINE</b></div>
        </div>

        <div className="hero-topline">
          <div className="hero-status"><span className="status-dot" /> open to software roles</div>
          <div className="hero-line" />
          <span className="hero-code">SYS / 001 — SOFTWARE ENGINEERING / JAVA</span>
        </div>

        <div className="hero-grid">
          <motion.div className="hero-main" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65 }}>
            <div className="hero-kicker"><span>01</span> / JAVA · SPRING BOOT · FULL STACK</div>
            <h1 className="hero-title" aria-label="I build real software">
              <motion.span initial={{opacity:0, y:70}} animate={{opacity:1, y:0}} transition={{duration:.72, delay:.12, ease:[.16,1,.3,1]}}>I BUILD</motion.span>
              <motion.span className="accent" initial={{opacity:0, y:70}} animate={{opacity:1, y:0}} transition={{duration:.72, delay:.22, ease:[.16,1,.3,1]}}>REAL</motion.span>
              <motion.span initial={{opacity:0, y:70}} animate={{opacity:1, y:0}} transition={{duration:.78, delay:.32, ease:[.16,1,.3,1]}}>SOFTWARE.</motion.span>
            </h1>
            <p className="hero-copy">I’m <strong>Sujit Kumar</strong>, a B.Tech ECE student focused on backend engineering and full-stack development. I build APIs, data-driven applications and systems that solve practical problems.</p>
            <div className="hero-actions">
              <a className="btn-main" href="#projects">Explore projects <FiArrowUpRight /></a>
              <a className="btn-ghost" href={resumeUrl} target="_blank" rel="noreferrer">View resume <FiArrowUpRight /></a>
            </div>
            <div className="hero-socials">
              <span className="hero-cinematic-label">01 / BUILD MODE</span>
              <a href="https://github.com/Sujitpw" target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub size={18}/></a>
              <a href="https://www.linkedin.com/in/sujit-kumar-931447291/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin size={18}/></a>
              <span className="social-rule" />
              <span className="stack-line">Java · Spring Boot · PostgreSQL · React</span>
            </div>
          </motion.div>

          <motion.div className="hero-system" initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .7, delay: .08 }}>
            <div className="system-head">
              <div className="system-dots"><i/><i/><i/></div>
              <span>SUJIT / DEV SYSTEM <b className="system-id">v2.06</b></span>
              <span className="system-live"><b /> LIVE</span>
            </div>
            <div className="system-body">
              <div className="system-kicker">CURRENT BUILD / 2026</div>
              <div className="system-title">BACKEND<br/><span>ENGINEERING</span></div>

              <div className="system-terminal">
                <div><span className="terminal-muted">$</span> whoami</div>
                <div className="terminal-value">sujit@developer</div>
                <div><span className="terminal-muted">$</span> focus --now</div>
                <div className="terminal-value">production-minded full-stack systems</div>
              </div>

              <div className="system-status-list">
                {systems.map(([label, value, status, Icon]) => <div className="system-line" key={label}><span><Icon /> {label}</span><strong>{value}</strong><b>{status}</b></div>)}
              </div>

              <div className="system-metrics">
                <div><span>DSA</span><strong>300+</strong><small>solved</small></div>
                <div><span>PROJECTS</span><strong>04+</strong><small>built</small></div>
                <div><span>STACK</span><strong>JAVA</strong><small>primary</small></div>
              </div>

              <div className="system-meter"><span>BUILD PROGRESS</span><b>FULL STACK</b><div><i /></div></div>
              <div className="system-foot"><span>ACTIVE PROJECT</span><strong>SCHOOL OPERATIONS PLATFORM <em>↗</em></strong></div>
            </div>
          </motion.div>
        </div>

        <div className="hero-bottom">
          <div className="hero-scroll"><span>SCROLL TO EXPLORE</span><FiArrowDown /></div>
          <div className="hero-bottom-center"><FiCode /> SYSTEMS · APIS · DATABASES · INTERFACES</div>
          <div className="hero-index">01 — 06</div>
        </div>
      </div>

      <div className="stack-marquee" aria-label="Technology stack">
        <div className="marquee-track">
          {[...stack, ...stack].map((item, index) => <span key={`${item}-${index}`}><b>✦</b>{item}</span>)}
        </div>
      </div>
    </section>
  )
}
