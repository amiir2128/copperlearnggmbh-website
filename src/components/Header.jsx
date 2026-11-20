import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { Logo } from './ui'
import { SITE } from '../config'

const NAV = [
  { to: '/', label: 'Start' },
  { to: '/so-funktionierts', label: "So funktioniert's" },
  { to: '/ueber-uns', label: 'Über uns' },
  { to: '/investieren', label: 'Investieren' },
  { to: '/kontakt', label: 'Kontakt' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  const onDark = pathname === '/' && !scrolled && !open

  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8)
    on(); window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : '' }, [open])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled || open ? 'border-b border-line/70 bg-canvas/75 backdrop-blur-xl backdrop-saturate-150' : 'border-b border-transparent'}`}
      style={{ paddingTop: 'env(safe-area-inset-top)' }}>
      <div className="container-x flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5" aria-label="CopperLearn Startseite">
          <Logo size={34} />
          <span className={`text-lg font-bold tracking-tight transition-colors ${onDark ? 'text-white' : ''}`}>Copper<span className={onDark ? 'text-brand-300' : 'text-brand-600'}>Learn</span></span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Hauptnavigation">
          {NAV.map((n) => (
            <NavLink key={n.to} to={n.to} end
              className={({ isActive }) => `rounded-full px-4 py-2 text-[14px] font-medium transition-colors ${onDark ? (isActive ? 'bg-white/15 text-white' : 'text-white/75 hover:text-white') : isActive ? 'bg-brand-100 text-brand-700 dark:bg-brand-900/60 dark:text-brand-200' : 'text-muted hover:text-ink'}`}>
              {n.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href={SITE.appUrl} className="btn-primary hidden !px-5 !py-2.5 !text-sm sm:inline-flex">
            Zur App <ArrowUpRight className="h-4 w-4" />
          </a>
          <button onClick={() => setOpen((o) => !o)} className={`grid h-10 w-10 place-items-center rounded-full ${onDark ? 'text-white' : 'text-ink'} hover:bg-brand-100 dark:hover:bg-brand-900/50 lg:hidden`}
            aria-label={open ? 'Menü schließen' : 'Menü öffnen'} aria-expanded={open}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: '100dvh' }} exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden lg:hidden" aria-label="Mobile Navigation">
            <ul className="container-x flex flex-col gap-1 pt-4">
              {NAV.map((n, i) => (
                <motion.li key={n.to} initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 * i + 0.1 }}>
                  <NavLink to={n.to} end className={({ isActive }) => `block border-b border-line py-4 text-2xl font-semibold ${isActive ? 'text-brand-600' : ''}`}>{n.label}</NavLink>
                </motion.li>
              ))}
              <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="pt-6">
                <a href={SITE.appUrl} className="btn-primary w-full">Zur App <ArrowUpRight className="h-4 w-4" /></a>
              </motion.li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
