import { motion } from 'framer-motion'

export default function Milestone() {
  return (
    <section id="milestones" className="section section-dark milestone-section">
      <div className="section-wrap">
        <div className="section-head milestone-head">
          <div>
            <div className="eyebrow">03 / engineering milestone</div>
            <h2 className="section-title">Proof of<br/><span className="yellow">problem solving.</span></h2>
          </div>
          <p className="section-desc">A recent competitive programming and aptitude milestone from the TCS NQT IT assessment.</p>
        </div>

        <motion.div
          className="milestone-card"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
        >
          <div className="milestone-corner milestone-corner-tl" />
          <div className="milestone-corner milestone-corner-br" />

          <div className="milestone-topline">
            <span>TCS NQT IT · 2026</span>
            <span className="milestone-live"><i /> ASSESSMENT COMPLETED</span>
          </div>

          <div className="milestone-grid">
            <div className="milestone-main">
              <div className="milestone-label">CODING SCORE</div>
              <div className="milestone-score">80<span>%</span></div>
              <div className="milestone-bar"><span style={{ width: '80%' }} /></div>
              <p>Performance in the Coding section of the TCS NQT IT assessment.</p>
            </div>

            <div className="milestone-secondary">
              <div className="milestone-label">COMBINED SCORE</div>
              <div className="milestone-score small">65<span>%</span></div>
              <div className="milestone-bar"><span style={{ width: '65%' }} /></div>
              <p>Aptitude · Logical Reasoning · Verbal Ability</p>
            </div>
          </div>

          <div className="milestone-footer">
            <span>STATUS // DOCUMENTED RESULT</span>
            <span>80% CODING <b>·</b> 65% COMBINED</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
