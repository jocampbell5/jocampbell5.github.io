import { motion } from 'framer-motion'
import './About.css'

// ---- Edit your bio, skills, and links here ----
const SKILLS = [
  'Unreal Engine 5',
  'C++',
  'Blueprints',
  'Python',
  'VR / OpenXR',
  'Simulation',
  'Digital Twins',
  'Computer Vision',
  'Synthetic Data',
  'AI Integration',
  'MetaHuman',
  'Real-time Graphics',
]

const LINKS = [
  { label: 'Email', href: 'mailto:johncampbell5050@gmail.com' },
  { label: 'GitHub', href: 'https://github.com/jocampbell5/' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/john-campbell-0530b230/' },
]

export default function About({ onClose }) {
  return (
    <motion.div
      className="about scroll-area"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      <button className="about-back" onClick={onClose} aria-label="Back to work">
        <svg width="22" height="10" viewBox="0 0 22 10" fill="none" aria-hidden="true">
          <path d="M22 5H2M6 1L2 5l4 4" stroke="currentColor" strokeWidth="1.4" />
        </svg>
        <span>Back to work</span>
      </button>

      <button className="about-close" onClick={onClose} aria-label="Close about">
        <span>Close</span>
        <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
          <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </button>

      <motion.div
        className="about-inner"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="eyebrow">About</p>

        <h2 className="about-title">
          I build <em>immersive</em> real-time worlds in Unreal Engine.
        </h2>

        <div className="about-cols">
          <div className="about-bio">
            <p>
              I use Unreal Engine as a synthetic-data engine for computer vision —
              generating labelled images and video at scale, auto-exporting the
              annotations, and feeding them straight into model training, so teams
              can build vision models without the cost of hand-collected data.
            </p>
            <p>
              I’m John Campbell, a Senior Software Developer specialising in
              simulations, VR training, digital twins, and computer vision in
              Unreal Engine. I turn complex systems into interactive experiences
              people can step inside, understand, and learn from.
            </p>
            <p>
              Highly skilled in Unreal Engine, C++, and a range of programming
              languages, I’m dedicated to creating innovative software solutions
              and providing technical leadership — and I’m seeking a challenging
              role in a dynamic organization where I can drive software-development
              projects to success.
            </p>
          </div>

          <div className="about-side">
            <img
              className="about-photo"
              src="/about/john.jpg"
              alt="John Campbell"
              loading="lazy"
            />

            <h3 className="about-subhead">Capabilities</h3>
            <ul className="about-skills">
              {SKILLS.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>

            <h3 className="about-subhead">Get in touch</h3>
            <ul className="about-links">
              {LINKS.map((l) => (
                <li key={l.label}>
                  <a href={l.href} target="_blank" rel="noreferrer">
                    {l.label}
                    <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
                      <path
                        d="M3 11L11 3M5 3h6v6"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        fill="none"
                      />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
