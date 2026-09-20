import { motion } from 'framer-motion'
import { FiArrowUpRight, FiGithub } from 'react-icons/fi'

export default function ProjectCard({ number, title, type, description, tags, githubLink, liveLink, featured, visual }) {
  return <motion.article className={`project-card ${featured ? 'featured' : ''}`} initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.12}} transition={{duration:.5}}>
    <div className="project-card-inner">
      <div className="project-visual"><div className="project-visual-inner">{visual}</div></div>
      <div className="project-content">
        <div className="project-meta"><span className="project-number">{number}</span><span className="project-type">{type}</span></div>
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-tags">{tags.map(tag=><span className="project-tag" key={tag}>{tag}</span>)}</div>
        <div className="project-actions">{githubLink && <a className="project-btn" href={githubLink} target="_blank" rel="noreferrer"><FiGithub/> GitHub</a>}{liveLink && <a className="project-btn primary" href={liveLink} target="_blank" rel="noreferrer">Live demo <FiArrowUpRight/></a>}</div>
      </div>
    </div>
  </motion.article>
}
