import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import projects from './data/projects'
import Header from './components/Header'
import Carousel from './components/Carousel'
import HeroInfo from './components/HeroInfo'
import ProjectMenu from './components/ProjectMenu'
import ScrollHint from './components/ScrollHint'
import CaseStudy from './components/CaseStudy'
import About from './components/About'
import Design from './components/Design'
import './App.css'

// Map the current view to a URL path. Carousel position is intentionally
// ignored so scrolling the deck doesn't flood the history / analytics.
function pathForView({ openId, designOpen, aboutOpen }) {
  if (openId) return `/work/${openId}`
  if (designOpen) return '/design'
  if (aboutOpen) return '/about'
  return '/'
}

export default function App() {
  // Which project is centered / active in the carousel.
  const [activeIndex, setActiveIndex] = useState(0)
  // id of the project whose case study is open, or null.
  const [openId, setOpenId] = useState(null)
  // Whether the About / Design panels are open.
  const [aboutOpen, setAboutOpen] = useState(false)
  const [designOpen, setDesignOpen] = useState(false)
  // True once the initial URL has been read into state; gates URL writes.
  const [routed, setRouted] = useState(false)

  // Lock so one scroll gesture / key press = one step.
  const lock = useRef(false)
  const overlayOpen = openId !== null || aboutOpen || designOpen

  const clamp = (i) => Math.max(0, Math.min(projects.length - 1, i))

  const step = useCallback((dir) => {
    setActiveIndex((i) => clamp(i + dir))
  }, [])

  const goTo = useCallback((i) => setActiveIndex(clamp(i)), [])

  // --- Routing: keep the URL in sync with the open view, so each section is
  // its own analytics page view and Back/Forward closes overlays. ---
  const applyPath = useCallback((path) => {
    const work = path.match(/^\/work\/(.+)$/)
    if (work) {
      const id = decodeURIComponent(work[1])
      const idx = projects.findIndex((p) => p.id === id)
      if (idx !== -1) {
        setActiveIndex(idx)
        setOpenId(id)
        setAboutOpen(false)
        setDesignOpen(false)
        return
      }
    }
    setOpenId(null)
    setAboutOpen(path === '/about')
    setDesignOpen(path === '/design')
  }, [])

  // Restore the view from the URL on load, then follow Back/Forward.
  useEffect(() => {
    applyPath(window.location.pathname)
    setRouted(true)
    const onPop = () => applyPath(window.location.pathname)
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [applyPath])

  // Reflect the current view in the URL. Cloudflare auto-records pushState.
  useEffect(() => {
    if (!routed) return
    const path = pathForView({ openId, designOpen, aboutOpen })
    if (window.location.pathname !== path) {
      window.history.pushState(null, '', path)
    }
  }, [routed, openId, designOpen, aboutOpen])

  // --- Wheel navigation (one step per gesture) ---
  useEffect(() => {
    const onWheel = (e) => {
      if (overlayOpen) return
      if (Math.abs(e.deltaY) < 8) return
      if (lock.current) return
      lock.current = true
      step(e.deltaY > 0 ? 1 : -1)
      setTimeout(() => (lock.current = false), 650)
    }
    window.addEventListener('wheel', onWheel, { passive: true })
    return () => window.removeEventListener('wheel', onWheel)
  }, [overlayOpen, step])

  // --- Keyboard navigation ---
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpenId(null)
        setAboutOpen(false)
        setDesignOpen(false)
        return
      }
      if (overlayOpen) return
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') step(-1)
      if (e.key === 'Enter') setOpenId(projects[activeIndex].id)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [overlayOpen, step, activeIndex])

  // --- Touch swipe navigation (mobile) ---
  useEffect(() => {
    let startY = null
    const onStart = (e) => (startY = e.touches[0].clientY)
    const onEnd = (e) => {
      if (startY === null || overlayOpen) return
      const dy = startY - e.changedTouches[0].clientY
      if (Math.abs(dy) > 40) step(dy > 0 ? 1 : -1)
      startY = null
    }
    window.addEventListener('touchstart', onStart, { passive: true })
    window.addEventListener('touchend', onEnd, { passive: true })
    return () => {
      window.removeEventListener('touchstart', onStart)
      window.removeEventListener('touchend', onEnd)
    }
  }, [overlayOpen, step])

  const active = projects[activeIndex]
  const openProject = projects.find((p) => p.id === openId) || null

  return (
    <div className="stage" style={{ '--proj-accent': active.accent }}>
      <Header
        onAbout={() => setAboutOpen(true)}
        onDesign={() => setDesignOpen(true)}
        onHome={() => {
          setOpenId(null)
          setAboutOpen(false)
          setDesignOpen(false)
        }}
      />

      <main className="experience">
        <HeroInfo project={active} onOpen={() => setOpenId(active.id)} />

        <Carousel
          projects={projects}
          activeIndex={activeIndex}
          onSelect={goTo}
          onOpen={(id) => setOpenId(id)}
        />

        <ProjectMenu
          projects={projects}
          activeIndex={activeIndex}
          onSelect={goTo}
        />
      </main>

      <ScrollHint
        index={activeIndex}
        total={projects.length}
        hidden={overlayOpen}
      />

      <AnimatePresence>
        {openProject && (
          <CaseStudy
            key={openProject.id}
            project={openProject}
            onClose={() => setOpenId(null)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {aboutOpen && <About onClose={() => setAboutOpen(false)} />}
      </AnimatePresence>

      <AnimatePresence>
        {designOpen && <Design onClose={() => setDesignOpen(false)} />}
      </AnimatePresence>
    </div>
  )
}
