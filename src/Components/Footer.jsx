import { FiArrowUp } from 'react-icons/fi'
export default function Footer(){return <footer className="footer"><div className="section-wrap footer-inner"><span>© {new Date().getFullYear()} Sujit Kumar · Built with React</span><button onClick={()=>window.scrollTo({top:0,behavior:'smooth'})}>Back to top <FiArrowUp style={{verticalAlign:'-2px',marginLeft:4}}/></button></div></footer>}
