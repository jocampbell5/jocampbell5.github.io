import './Header.css'

export default function Header({ onAbout }) {
  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="John Campbell — home">
        <span className="brand-name">John Campbell</span>
        <span className="brand-role">Unreal Developer</span>
      </a>

      <button className="about-link" onClick={onAbout}>
        About
      </button>
    </header>
  )
}
