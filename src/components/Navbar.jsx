import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { Menu, X, GraduationCap, ChevronRight } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/school', label: 'School' },
  { to: '/education-point', label: 'Education Point' },
  { to: '/programs', label: 'Programs' },
  { to: '/faculty', label: 'Faculty' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-paper/90 backdrop-blur-md shadow-[0_1px_0_rgba(15,42,82,0.08)]' : 'bg-paper/60 backdrop-blur-sm'
      }`}
    >
      <nav className="container-page flex h-20 items-center justify-between">
        <Link to="/" className="group flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-ink-900 text-gold-400 transition-transform duration-300 group-hover:-rotate-6">
            <GraduationCap className="h-6 w-6" strokeWidth={2} />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-[17px] font-semibold text-ink-900">Future Genius</span>
            <span className="block text-[11px] font-medium tracking-wide text-ash-500">English School</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-[14.5px] font-medium transition-colors duration-200 ${
                  isActive ? 'bg-ink-900/[0.06] text-ink-900' : 'text-ash-700 hover:text-ink-900'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:block">
          <Link to="/admission" className="btn-gold">
            Admission Enquiry
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-ink-900/10 bg-white text-ink-900 lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div
        className={`fixed inset-0 top-20 z-40 bg-ink-950/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      <div
        className={`fixed inset-x-0 top-20 z-40 origin-top overflow-hidden bg-paper shadow-xl transition-all duration-300 ease-out lg:hidden ${
          open ? 'max-h-[calc(100vh-5rem)] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container-page flex flex-col gap-1 py-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `flex items-center justify-between rounded-2xl px-4 py-3.5 text-base font-medium transition-colors ${
                  isActive ? 'bg-ink-900/[0.06] text-ink-900' : 'text-ash-700'
                }`
              }
            >
              {link.label}
              <ChevronRight className="h-4 w-4 opacity-40" />
            </NavLink>
          ))}
          <Link to="/admission" className="btn-gold mt-3 w-full">
            Admission Enquiry
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </header>
  )
}
