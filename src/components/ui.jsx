import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1]

// Sanftes Einblenden beim Scrollen (Apple-artig)
export function Reveal({ children, delay = 0, y = 24, className = '', as = 'div' }) {
  const M = motion[as]
  return (
    <M
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, ease, delay }}
    >
      {children}
    </M>
  )
}

// Deutlich markierter Platzhalter für fehlende Pflichtangaben
export function Ph({ children }) {
  return (
    <mark className="rounded-md bg-amber-200/80 px-1.5 py-0.5 font-medium text-amber-950 ring-1 ring-amber-400">
      [PLATZHALTER: {children}]
    </mark>
  )
}

export function Logo({ size = 36, className = '' }) {
  return <img src="/icon-192.png" width={size} height={size} alt="" className={`rounded-full ${className}`} />
}

export function TikTokIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19.6 6.7a4.8 4.8 0 0 1-3.8-4.2V2h-3.4v13.4a2.9 2.9 0 1 1-2-2.7V9.2a6.3 6.3 0 1 0 5.4 6.2V8.6a8.1 8.1 0 0 0 3.8 1.2V6.7Z" />
    </svg>
  )
}

export function PageHero({ eyebrow, title, children }) {
  return (
    <section className="relative overflow-hidden pb-10 pt-32 sm:pt-40">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] bg-gradient-to-b from-brand-100/70 to-transparent dark:from-brand-900/40" />
      <div className="container-x">
        <Reveal>
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1 className="h-display mt-3 max-w-3xl text-4xl sm:text-5xl lg:text-6xl">{title}</h1>
          {children && <div className="mt-5 max-w-2xl text-lg text-muted sm:text-xl">{children}</div>}
        </Reveal>
      </div>
    </section>
  )
}
