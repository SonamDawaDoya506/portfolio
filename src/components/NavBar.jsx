
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const links = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'Experience', to: '/experience' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `text-sm transition-colors ${
      isActive ? 'accent font-semibold' : 'muted hover:opacity-100'
    }`

  return (
    <header
      className="sticky top-0 z-50 border-b backdrop-blur-xl"
      style={{
        background: 'color-mix(in srgb, var(--bg) 88%, transparent)',
        borderColor: 'var(--border)',
      }}
    >
      <nav className="container-page flex h-[72px] items-center justify-between">
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="text-lg font-bold tracking-tight"
        >
          Portfolio<span className="accent">.</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={linkClass}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title="Toggle colour theme"
            className="rounded-xl border p-2.5 transition-colors"
            style={{ borderColor: 'var(--border)' }}
          >
            {theme === 'dark'
              ? <Sun size={18} />
              : <Moon size={18} />}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="rounded-xl border p-2.5 md:hidden"
            style={{ borderColor: 'var(--border)' }}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div
          className="container-page flex flex-col gap-5 border-t py-5 md:hidden"
          style={{ borderColor: 'var(--border)' }}
        >
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={() => setMenuOpen(false)}
              className={linkClass}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  )
}
