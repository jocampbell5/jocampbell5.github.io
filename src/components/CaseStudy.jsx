import { motion } from 'framer-motion'
import Media from './Media'
import './CaseStudy.css'

export default function CaseStudy({ project, onClose }) {
  const paragraphs = project.overview.split('\n\n')

  return (
    <motion.div
      className="case-study scroll-area"
      style={{ '--proj-accent': project.accent }}
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      exit={{ y: '100%' }}
      transition={{ type: 'spring', stiffness: 120, damping: 24 }}
    >
      <button className="case-close" onClick={onClose} aria-label="Close case study">
        <span>Close</span>
        <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
          <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </button>

      <header className="case-intro">
        <p className="eyebrow case-eyebrow">
          <span style={{ color: project.accent }}>{project.category}</span>
          <span className="hero-dot" /> {project.year}
        </p>
        <h2 className="case-title">{project.title}</h2>
        <p className="case-role">{project.role}</p>
      </header>

      {/* The video is the star of the page — large and playable. */}
      <div className="case-player">
        {project.video ? (
          <video
            className="case-video"
            src={project.video}
            poster={project.poster}
            controls
            autoPlay
            muted
            loop
            playsInline
          />
        ) : (
          <div className="case-video case-video--empty">
            <Media project={project} playing showCaption={false} />
            <span className="case-video-hint">
              ▶ Project video goes here — add <code>video: '/media/{project.id}.mp4'</code> in projects.js
            </span>
          </div>
        )}
      </div>

      <div className="case-body">
        <div className="case-main">
          <p className="case-lead">{project.summary}</p>
          {paragraphs.map((p, i) => (
            <p key={i} className="case-para">
              {p}
            </p>
          ))}

          {project.highlights?.length > 0 && (
            <>
              <h3 className="case-subhead">Highlights</h3>
              <ul className="case-highlights">
                {project.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </>
          )}
        </div>

        <aside className="case-aside">
          <div className="case-meta">
            <span className="case-meta-k">Role</span>
            <span className="case-meta-v">{project.role}</span>
          </div>
          <div className="case-meta">
            <span className="case-meta-k">Year</span>
            <span className="case-meta-v">{project.year}</span>
          </div>
          <div className="case-meta">
            <span className="case-meta-k">Stack</span>
            <span className="case-tags">
              {project.tech.map((t) => (
                <span className="case-tag" key={t}>
                  {t}
                </span>
              ))}
            </span>
          </div>
        </aside>
      </div>

      {project.gallery?.length > 0 && (
        <div className="case-gallery">
          {project.gallery.map((src, i) => (
            <img key={i} src={src} alt={`${project.title} screenshot ${i + 1}`} loading="lazy" />
          ))}
        </div>
      )}

      <footer className="case-footer">
        <button className="case-back" onClick={onClose}>
          ← Back to work
        </button>
      </footer>
    </motion.div>
  )
}
