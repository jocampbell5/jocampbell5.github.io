import { AnimatePresence, motion } from 'framer-motion'
import './HeroInfo.css'

export default function HeroInfo({ project, onOpen }) {
  return (
    <div className="hero-info">
      <AnimatePresence mode="wait">
        <motion.div
          key={project.id}
          className="hero-inner"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -18 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="hero-eyebrow eyebrow">
            <span className="hero-cat">{project.category}</span>
            <span className="hero-dot" />
            <span>{project.year}</span>
          </p>

          <h1 className="hero-title">{project.title}</h1>

          <p className="hero-summary">{project.summary}</p>

          <button className="hero-cta" onClick={onOpen}>
            <span>Open case study</span>
            <svg width="22" height="10" viewBox="0 0 22 10" fill="none" aria-hidden="true">
              <path d="M0 5h20M16 1l4 4-4 4" stroke="currentColor" strokeWidth="1.4" />
            </svg>
          </button>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
