import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import designs from '../data/designs'
import './Design.css'

export default function Design({ onClose }) {
  // Lightbox state: which collection's images and the active index, or null.
  const [lightbox, setLightbox] = useState(null)
  const boxRef = useRef(null)

  const open = (images, index) => setLightbox({ images, index })
  const close = () => setLightbox(null)
  const nav = (dir) =>
    setLightbox((lb) =>
      lb ? { ...lb, index: (lb.index + dir + lb.images.length) % lb.images.length } : lb
    )

  // Keyboard: arrows navigate, Escape closes the lightbox. Capture phase +
  // stopPropagation so this runs before (and instead of) the app's global
  // Escape handler while the lightbox is open.
  useEffect(() => {
    const onKey = (e) => {
      if (!lightbox) return
      if (e.key === 'Escape') {
        e.stopPropagation()
        close()
      } else if (e.key === 'ArrowRight') {
        e.stopPropagation()
        nav(1)
      } else if (e.key === 'ArrowLeft') {
        e.stopPropagation()
        nav(-1)
      }
    }
    window.addEventListener('keydown', onKey, true)
    return () => window.removeEventListener('keydown', onKey, true)
  }, [lightbox])

  // Scroll back to the top when the active image changes (tall storyboards).
  useEffect(() => {
    if (boxRef.current) boxRef.current.scrollTop = 0
  }, [lightbox?.index])

  const current = lightbox ? lightbox.images[lightbox.index] : null

  return (
    <motion.div
      className="design scroll-area"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      <div className="design-bar">
        <button className="design-back" onClick={onClose} aria-label="Back to work">
          <svg width="22" height="10" viewBox="0 0 22 10" fill="none" aria-hidden="true">
            <path d="M22 5H2M6 1L2 5l4 4" stroke="currentColor" strokeWidth="1.4" />
          </svg>
          <span>Back to work</span>
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
              {collection.images.map((image, i) => (
                <figure className="design-figure" key={image.src}>
                  <button
                    className="design-thumb"
                    onClick={() => open(collection.images, i)}
                    aria-label={`Enlarge: ${image.caption}`}
                  >
                    <img src={image.src} alt={image.caption} loading="lazy" />
                  </button>
                  {image.caption && <figcaption>{image.caption}</figcaption>}
                </figure>
              ))}
            </div>
          </section>
        ))}
      </div>

      {current && (
        <div className="design-lightbox" role="dialog" aria-modal="true">
          {/* Scrolling image layer (kept separate so the controls below can
              stay pinned to the viewport rather than scrolling with the image) */}
          <div className="lightbox-scroll" ref={boxRef} onClick={close}>
            <figure className="lightbox-figure" onClick={(e) => e.stopPropagation()}>
              <img src={current.full || current.src} alt={current.caption} />
            </figure>
          </div>

          <button className="lightbox-back" onClick={close} aria-label="Back to gallery">
            <svg width="22" height="10" viewBox="0 0 22 10" fill="none" aria-hidden="true">
              <path d="M22 5H2M6 1L2 5l4 4" stroke="currentColor" strokeWidth="1.4" />
            </svg>
            <span>Back</span>
          </button>

          {lightbox.images.length > 1 && (
            <>
              <button className="lightbox-btn lightbox-prev" onClick={() => nav(-1)} aria-label="Previous image">
                <svg width="26" height="26" viewBox="0 0 26 26" aria-hidden="true">
                  <path d="M16 4L7 13l9 9" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </button>
              <button className="lightbox-btn lightbox-next" onClick={() => nav(1)} aria-label="Next image">
                <svg width="26" height="26" viewBox="0 0 26 26" aria-hidden="true">
                  <path d="M10 4l9 9-9 9" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </button>
            </>
          )}

          <div className="lightbox-caption">
            <span>{current.caption}</span>
            {lightbox.images.length > 1 && (
              <span className="lightbox-count">
                {lightbox.index + 1} / {lightbox.images.length}
              </span>
            )}
          </div>
        </div>
      )}
    </motion.div>
  )
}
