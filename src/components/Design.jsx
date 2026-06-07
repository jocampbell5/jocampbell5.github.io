import { useState } from 'react'
import { motion } from 'framer-motion'
import designs from '../data/designs'
import './Design.css'

export default function Design({ onClose }) {
  // src of the image shown enlarged in the lightbox, or null.
  const [lightbox, setLightbox] = useState(null)

  return (
    <motion.div
      className="design scroll-area"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      <div className="design-bar">
        <p className="eyebrow design-eyebrow">Design · 2D &amp; UI/UX</p>
        <button className="design-close" onClick={onClose} aria-label="Close design gallery">
          <span>Close</span>
          <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
            <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>
      </div>

      <div className="design-inner">
        <h2 className="design-title">Design &amp; UI/UX</h2>
        <p className="design-lead">
          Interface design, UX flows, storyboards, and concept art for training
          applications and games.
        </p>

        {designs.map((collection) => (
          <section className="design-collection" key={collection.id}>
            <h3 className="design-coll-title">{collection.title}</h3>
            {collection.blurb && <p className="design-coll-blurb">{collection.blurb}</p>}

            <div
              className={`design-grid ${
                collection.layout === 'uniform' ? 'design-grid--uniform' : ''
              }`}
            >
              {collection.images.map((img) => (
                <figure className="design-figure" key={img.src}>
                  <button
                    className="design-thumb"
                    onClick={() => setLightbox(img.full || img.src)}
                    aria-label={`Enlarge: ${img.caption}`}
                  >
                    <img src={img.src} alt={img.caption} loading="lazy" />
                  </button>
                  {img.caption && <figcaption>{img.caption}</figcaption>}
                </figure>
              ))}
            </div>
          </section>
        ))}
      </div>

      {lightbox && (
        <div
          className="design-lightbox"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
        >
          <button className="lightbox-close" aria-label="Close image">
            <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
              <path d="M3 3l16 16M19 3L3 19" stroke="currentColor" strokeWidth="1.6" />
            </svg>
          </button>
          <img src={lightbox} alt="" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </motion.div>
  )
}
