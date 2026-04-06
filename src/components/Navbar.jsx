import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const handleLinkClick = () => setOpen(false)

  return (
    <div className="nav-wrapper">
      <nav>
        <div className="container nav-inner">
          <span className="nav-name">GM</span>

          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Work</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          <button
            className="hamburger"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span className={`ham-line ${open ? 'open' : ''}`} />
            <span className={`ham-line ${open ? 'open' : ''}`} />
            <span className={`ham-line ${open ? 'open' : ''}`} />
          </button>
        </div>

        <div className={`mobile-menu ${open ? 'mobile-menu--open' : ''}`}>
          <ul className="mobile-links">
            <li><a href="#about" onClick={handleLinkClick}>About</a></li>
            <li><a href="#experience" onClick={handleLinkClick}>Work</a></li>
            <li><a href="#skills" onClick={handleLinkClick}>Skills</a></li>
            <li><a href="#education" onClick={handleLinkClick}>Education</a></li>
            <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}