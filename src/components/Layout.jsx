import { useEffect, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { FaMoon, FaSun } from 'react-icons/fa'
import { applyTheme, getStoredTheme, THEME_DARK, THEME_LIGHT } from '../theme'
import './Layout.css'

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/skills', label: 'Technical Skills' },
  { to: '/experience', label: 'Experience' },
  { to: '/certification', label: 'Certifications' },
  { to: '/education', label: 'Education' },
  { to: '/interest', label: 'Interest' },
  { to: '/contact', label: 'Contact' },
]

export default function Layout() {
  const [theme, setTheme] = useState(getStoredTheme)

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  function toggleTheme() {
    setTheme((current) => (current === THEME_LIGHT ? THEME_DARK : THEME_LIGHT))
  }

  return (
    <>
      <header className="site-header">
        <NavLink to="/" className="logo" aria-label="Home">
          <span className="logo-mark" aria-hidden>AR</span>
          <span className="logo-text">A S M Abdur Rab</span>
        </NavLink>
        <div className="header-end">
          <nav className="site-nav" aria-label="Main">
            {navItems.map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={
              theme === THEME_LIGHT ? 'Switch to dark theme' : 'Switch to light theme'
            }
            title={theme === THEME_LIGHT ? 'Dark mode' : 'Light mode'}
          >
            {theme === THEME_LIGHT ? <FaMoon aria-hidden /> : <FaSun aria-hidden />}
          </button>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="site-footer">
        <p className="footer-copy">
          © {new Date().getFullYear()}{'  '} 
          <a href="https://www.linkedin.com/in/shibly/" className="footer-link">
            A S M Abdur Rab
          </a>
        </p>
        <p className="footer-tagline">Lead Software Developer · Life Sciences & Enterprise Systems</p>
      </footer>
    </>
  )
}
