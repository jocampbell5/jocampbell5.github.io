import { motion } from 'framer-motion'
import Media from './Media'
import './Carousel.css'

// How many cards to render on each side of the active one.
const WINDOW = 3
// Vertical distance (px) between neighbouring cards in the stack.
const SPACING = 150
// How far each step recedes into the screen (px).
const DEPTH = 240
// Constant backward tilt that gives the 3D "deck" look.
const TILT = 34

function transformFor(offset) {
  const abs = Math.abs(offset)
  return {
    y: offset * SPACING,
    z: -abs * DEPTH,
    rotateX: TILT,
    opacity: abs > WINDOW ? 0 : Math.max(0, 1 - abs * 0.26),
    // Active card is full colour; the rest are dimmed + desaturated.
    filter:
      offset === 0
        ? 'grayscale(0) brightness(1)'
        : `grayscale(0.85) brightness(${Math.max(0.35, 0.7 - abs * 0.12)})`,
  }
}

export default function Carousel({ projects, activeIndex, onSelect, onOpen }) {
  return (
    <div className="carousel" aria-roledescription="carousel">
      <div className="carousel-deck">
        {projects.map((project, i) => {
          const offset = i - activeIndex
          if (Math.abs(offset) > WINDOW) return null
          const isActive = offset === 0
          const t = transformFor(offset)

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
