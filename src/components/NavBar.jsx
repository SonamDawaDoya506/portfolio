import { useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'Experience', to: '/experience' },
  { label: 'Contact', to: '/contact' },
  { label: 'Certificates', to: '/certificates' },
]

export default function Navbar() {
  const dialogRef = useRef(null)

  const toggleDrawer = () => {
    if (dialogRef.current) {
      if (dialogRef.current.open) {
        dialogRef.current.close()
      } else {
        dialogRef.current.showModal()
      }
    }
  }

  const linkClass = ({ isActive }) =>
    `nav-link text-sm transition-colors ${
      isActive ? 'active accent font-semibold' : 'muted hover:opacity-100'
    }`

  return (
    <nav
      className="navbar lg:navbar-expand bg-1 fg-2 sticky top-0 z-50 border-b backdrop-blur-xl"
      style={{
        background: 'color-mix(in srgb, var(--bg) 90%, transparent)',
        borderColor: 'var(--border)',
      }}
    >
      <div className="container-fluid container-page flex h-[72px] items-center justify-between">
        <Link to="/" className="navbar-brand text-lg font-bold tracking-tight">
          <span className="accent">Portfolio</span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden items-center gap-8 md:flex">
          <ul className="navbar-nav flex flex-row gap-6">
            {links.map((link) => (
              <li key={link.to} className="nav-item">
                <NavLink to={link.to} end={link.to === '/'} className={linkClass}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="btn-icon navbar-toggler rounded-xl border p-2.5 md:hidden"
          type="button"
          onClick={toggleDrawer}
          aria-label="Toggle navigation"
          style={{ borderColor: 'var(--border)' }}
        >
          {/* Using Lucide icons or falling back to CSS icon */}
          <Menu size={18} />
        </button>

        {/* Mobile Drawer */}
        <dialog
          ref={dialogRef}
          className="drawer drawer-end"
          id="navbarNavMenu"
        >
          <div className="drawer-header flex items-center justify-between p-4">
            <h5 className="drawer-title font-bold" id="navbarNavMenuLabel">Menu</h5>
            <button
              type="button"
              className="btn-close"
              onClick={toggleDrawer}
              aria-label="Close"
            >
              <X size={18} />
            </button>
          </div>
          <div className="drawer-body p-4">
            <ul className="navbar-nav flex flex-col gap-4">
              {links.map((link) => (
                <li key={link.to} className="nav-item">
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    onClick={toggleDrawer}
                    className={linkClass}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </dialog>
      </div>
    </nav>
  )
}