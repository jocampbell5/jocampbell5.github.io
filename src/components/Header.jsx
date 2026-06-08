import './Header.css'

export default function Header({ onAbout, onHome, onDesign }) {
  return (
    <header className="site-header">
      <button className="brand" onClick={onHome} aria-label="John Campbell — home">
        <span className="brand-name">John Campbell</span>
        <span className="brand-role">Senior Software Engineer</span>
      </button>

      <nav className="header-nav">
        <button className="nav-link" onClick={onHome}>
          Work
        </button>
        <button className="nav-link" onClick={onDesign}>
          Design
        </button>
        <button className="nav-link" onClick={onAbout}>
          About
        </button>
      </nav>
    </header>
  )
}
