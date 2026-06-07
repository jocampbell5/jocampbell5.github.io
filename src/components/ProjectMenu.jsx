import './ProjectMenu.css'

export default function ProjectMenu({ projects, activeIndex, onSelect }) {
  return (
    <nav className="project-menu" aria-label="Projects">
      <ul>
        {projects.map((project, i) => {
          const isActive = i === activeIndex
          return (
            <li key={project.id}>
              <button
                className={`menu-item ${isActive ? 'menu-item--active' : ''}`}
                onClick={() => onSelect(i)}
                aria-current={isActive}
              >
                <span className="menu-label">{project.title}</span>
                <span className="menu-dot" aria-hidden="true" />
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
