import ProjectCard from './ProjectCard'

function CinematicBuild({ kind = 'erp' }) {
  if (kind === 'mine') {
    return (
      <div className="cinematic-build mine-build">
        <div className="build-topline"><span>03.02 / VISION PIPELINE</span><b>LIVE</b></div>
        <div className="mine-scene">
          <div className="scan-grid" />
          <div className="face-frame"><i /><i /><i /><i /><span>FACE / 01</span></div>
          <div className="radar-ring ring-a" /><div className="radar-ring ring-b" />
          <div className="scan-sweep" />
          <div className="mine-node node-a">CAMERA</div>
          <div className="mine-node node-b">MEDIAPIPE</div>
          <div className="mine-node node-c">ALERT</div>
          <div className="build-center">FATIGUE<br/><em>DETECT</em></div>
        </div>
        <div className="build-footer"><span>FRAME 1280 × 720</span><span className="build-online">PIPELINE ONLINE</span></div>
      </div>
    )
  }

  if (kind === 'safelink') {
    return (
      <div className="cinematic-build safe-build">
        <div className="build-topline"><span>03.03 / DEVICE ASSEMBLY</span><b>READY</b></div>
        <div className="safe-scene">
          <div className="assembly-part part-gps">GPS</div>
          <div className="assembly-part part-gsm">GSM</div>
          <div className="assembly-part part-mcu">MCU</div>
          <div className="wrist-device"><div className="device-screen">SOS</div><div className="device-band" /></div>
          <div className="connection c1" /><div className="connection c2" /><div className="connection c3" />
          <div className="safe-caption">SIGNAL → CONTROLLER → ALERT</div>
        </div>
        <div className="build-footer"><span>MODULES 03</span><span className="build-online">SYSTEM READY</span></div>
      </div>
    )
  }

  return (
    <div className="cinematic-build erp-build">
      <div className="build-topline"><span>03.01 / SYSTEM ASSEMBLY</span><b>LIVE</b></div>
      <div className="erp-scene">
        <div className="assembly-line line-a" /><div className="assembly-line line-b" /><div className="assembly-line line-c" />
        <div className="erp-part part-ui">UI</div>
        <div className="erp-part part-api">API</div>
        <div className="erp-part part-auth">JWT</div>
        <div className="erp-part part-db">DB</div>
        <div className="erp-core"><div className="core-glow" /><span>SCHOOL</span><strong>ERP</strong><small>CORE ONLINE</small></div>
        <div className="erp-module module-one">STUDENTS</div>
        <div className="erp-module module-two">ATTENDANCE</div>
        <div className="erp-module module-three">FEES</div>
        <div className="erp-module module-four">REPORTS</div>
      </div>
      <div className="build-footer"><span>FRONTEND → API → SERVICE → DATABASE</span><span className="build-online">SYSTEM ONLINE</span></div>
    </div>
  )
}

const projects = [
  { number:'03.01', title:'School Operations Platform', type:'Full-stack', featured:true, description:'A production-oriented school management platform with secure authentication and backend-driven modules for students, attendance, marks, fees, dashboards and reports. Built to practice real application architecture rather than a simple CRUD demo.', tags:['Java','Spring Boot','REST API','JWT','JPA','PostgreSQL','JavaScript'], githubLink:'https://github.com/Sujitpw/school-erp-frontend', liveLink:'https://school-erp-frontend-9vxmgry9w-sujits-projects-58a531f8.vercel.app/', visual:<CinematicBuild kind="erp"/> },
  { number:'03.02', title:'MineWatch', type:'Hackathon · AI', githubLink:'https://github.com/Sujit4141/BugBytes', liveLink:'https://minewatch12.netlify.app/', description:'A real-time fatigue monitoring prototype combining computer vision and sensor-based signals to detect signs of drowsiness and trigger alerts. Built as a rapid hackathon project with a focus on a working end-to-end prototype.', tags:['Python','OpenCV','MediaPipe','Machine Learning'], visual:<CinematicBuild kind="mine"/> },
  { number:'03.03', title:'SafeLink', type:'IoT', githubLink:'https://github.com/Sujitpw/safelink', description:'A smart safety wristband concept designed around location sharing and emergency communication, combining GPS and GSM modules with an embedded controller.', tags:['Arduino','GPS','GSM','Embedded C'], visual:<CinematicBuild kind="safelink"/> },
]

export default function Projects(){return <section id="projects" className="section"><div className="section-wrap"><div className="section-head"><div><div className="eyebrow">03 / selected work</div><h2 className="section-title">Things I’ve<br/><span className="yellow">built.</span></h2></div><p className="section-desc">Projects where I’ve worked on real functionality, APIs, data flow, hardware and problem solving.</p></div><div className="project-list">{projects.map(p=><ProjectCard key={p.number} {...p}/>)}</div></div></section>}
