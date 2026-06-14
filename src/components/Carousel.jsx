import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Media from './Media'
import './Carousel.css'

// How many cards to render on each side of the active one.
const WINDOW = 3

// Three size tiers. Geometry (spacing/depth) scales up with the screen so the
// deck stays proportional; card pixel size is handled in CSS (vw-based).
// Mobile keeps the tighter, gentler layout that works well on small screens.
const MOBILE = { spacing: 150, depth: 240, tilt: 34, skew: 0 }
const DESKTOP = { spacing: 200, depth: 220, tilt: 18, skew: -3 }
const XL = { spacing: 320, depth: 300, tilt: 18, skew: -3 } // large / 4K displays

// Pick the deck config from the current viewport width.
function useDeckConfig() {
  const pick = () => {
    if (typeof window === 'undefined') return DESKTOP
    if (window.matchMedia('(min-width: 2200px)').matches) return XL
    if (window.matchMedia('(min-width: 900px)').matches) return DESKTOP
    return MOBILE
  }
  const [cfg, setCfg] = useState(pick)
  useEffect(() => {
    const onResize = () => setCfg(pick())
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])
  return cfg
}

function transformFor(offset, cfg) {
  const abs = Math.abs(offset)
  return {
    y: offset * cfg.spacing,
    z: -abs * cfg.depth,
    rotateX: cfg.tilt,
    rotateZ: cfg.skew,
    opacity: abs > WINDOW ? 0 : Math.max(0, 1 - abs * 0.26),
  }
}

// Depth dimming for inactive cards, expressed as the opacity of a black overlay
// (a pure compositor operation) instead of a `brightness()` filter — so cards
// never re-rasterize while moving. 0 = active card, up to ~0.65 at the back.
// Grayscale is handled separately as a constant filter on the image (cached).
function dimFor(offset) {
  return offset === 0 ? 0 : 1 - Math.max(0.35, 0.7 - Math.abs(offset) * 0.12)
}

export default function Carousel({ projects, activeIndex, onSelect, onOpen }) {
  const cfg = useDeckConfig()
  return (
    <div className="carousel" aria-roledescription="carousel">
      <div className="carousel-deck">
        {projects.map((project, i) => {
          const offset = i - activeIndex
          if (Math.abs(offset) > WINDOW) return null
          const isActive = offset === 0
          const t = transformFor(offset, cfg)

          return (
            <motion.button
              key={project.id}
              className={`card ${isActive ? 'card--active' : ''}`}
              style={{ zIndex: 100 - Math.abs(offset) }}
              initial={false}
              animate={t}
              transition={{ type: 'spring', stiffness: 140, damping: 22 }}
              onClick={() => (isActive ? onOpen(project.id) : onSelect(i))}
              aria-label={
                isActive
                  ? `Open case study: ${project.title}`
                  : `Go to ${project.title}`
              }
              aria-current={isActive}
            >
              <span className="card-frame">
                <Media
                  project={project}
                  playing={isActive}
                  className={isActive ? '' : 'media--dim'}
                />
                <span
                  className="card-shade"
                  style={{ opacity: dimFor(offset) }}
                  aria-hidden="true"
                />
                {isActive && (
                  <span className="card-open" aria-hidden="true">
                    View case study
                  </span>
                )}
              </span>
            </motion.button>
          )
        })}
      </div>
    </div>
  )
}
