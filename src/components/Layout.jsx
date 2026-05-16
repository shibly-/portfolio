import { NavLink, Outlet } from 'react-router-dom'
import './Layout.css'

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/skills', label: 'Technical Skills' },
  { to: '/experience', label: 'Experience' },
  { to: '/education', label: 'Education' },
  { to: '/interest', label: 'Interest' },
  { to: '/contact', label: 'Contact' },
]

export default function Layout() {
  return (
    <>
      <header className="site-header">
        <NavLink to="/" className="logo">
          Portfolio
        </NavLink>
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
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Your Name. Built with React & Vite.</p>
      </footer>
    </>
  )
}
