import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Media from './Media'
import './Carousel.css'

// How many cards to render on each side of the active one.
const WINDOW = 3

// Desktop gets a larger, more dramatically slanted deck; mobile keeps the
// tighter, gentler layout that already works well on small screens.
const DESKTOP = {
  spacing: 200, // vertical gap between cards (px)
  depth: 220, // how far each step recedes (px)
  tilt: 18, // backward perspective tilt (deg) — lower = more face-on to viewer
  skew: -6, // slight 2D rotation so cards read as tilted photos (deg)
}
const MOBILE = { spacing: 150, depth: 240, tilt: 34, skew: 0 }

function useIsDesktop() {
  const query = '(min-width: 721px)'
  const [isDesktop, setIsDesktop] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(query).matches
  )
  useEffect(() => {
    const mq = window.matchMedia(query)
    const onChange = (e) => setIsDesktop(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])
  return isDesktop
}

function transformFor(offset, cfg) {
  const abs = Math.abs(offset)
  return {
    y: offset * cfg.spacing,
    z: -abs * cfg.depth,
    rotateX: cfg.tilt,
    rotateZ: cfg.skew,
    opacity: abs > WINDOW ? 0 : Math.max(0, 1 - abs * 0.26),
    // Active card is full colour; the rest are dimmed + desaturated.
    filter:
      offset === 0
        ? 'grayscale(0) brightness(1)'
        : `grayscale(0.85) brightness(${Math.max(0.35, 0.7 - abs * 0.12)})`,
  }
}

export default function Carousel({ projects, activeIndex, onSelect, onOpen }) {
  const cfg = useIsDesktop() ? DESKTOP : MOBILE
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
                <Media project={project} playing={isActive} />
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
