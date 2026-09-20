import { motion } from 'framer-motion'
import { FaJava, FaReact, FaGitAlt, FaGithub, FaHtml5 } from 'react-icons/fa'
import { SiSpringboot, SiPostgresql, SiJavascript, SiHibernate, SiPostman, SiVercel } from 'react-icons/si'

const skills = [['Java',FaJava],['Spring Boot',SiSpringboot],['REST APIs',null],['JWT Auth',null],['PostgreSQL',SiPostgresql],['JPA / Hibernate',SiHibernate],['React',FaReact],['JavaScript',SiJavascript],['HTML / CSS',FaHtml5],['Git',FaGitAlt],['GitHub',FaGithub],['Postman',SiPostman],['Vercel',SiVercel]]
const groups = [
  ['01','Backend','Java, Spring Boot, REST APIs, JWT authentication and Maven'],
  ['02','Frontend','React.js, JavaScript, HTML5, CSS3 and responsive interfaces'],
  ['03','Data & Tools','PostgreSQL, MySQL, JPA/Hibernate, Git, GitHub, Postman, Vercel and Render'],
]

export default function Skill() {
  return <section id="skills" className="section section-dark"><div className="section-wrap">
    <div className="section-head"><div><div className="eyebrow">02 / toolbox</div><h2 className="section-title">The stack behind<br/><span className="yellow">the work.</span></h2></div><p className="section-desc">A practical stack centered around backend development, APIs, databases and clean web interfaces.</p></div>
    <div className="skill-groups">{groups.map(([n,t,p])=><motion.div key={t} className="skill-group" initial={{opacity:0,y:15}} whileInView={{opacity:1,y:0}} viewport={{once:true}}><span className="skill-index">{n}</span><h3>{t}</h3><p>{p}</p></motion.div>)}</div>
    <div className="skill-pills">{skills.map(([name,Icon])=><span className="skill-pill" key={name}>{Icon ? <Icon style={{verticalAlign:'-2px',marginRight:6}}/> : null}{name}</span>)}</div>
    <div className="skill-ticker" aria-hidden="true">
      <div className="skill-ticker-track">{[...skills.map(([name])=>name.toUpperCase()), ...skills.map(([name])=>name.toUpperCase())].map((name,i)=><span key={`${name}-${i}`}><b>✦</b>{name}</span>)}</div>
    </div>
  </div></section>
}
