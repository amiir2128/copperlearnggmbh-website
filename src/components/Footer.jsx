import { Link } from 'react-router-dom'
import { Instagram, Mail } from 'lucide-react'
import { Logo, TikTokIcon } from './ui'
import { SITE } from '../config'

export default function Footer() {
  const reopen = () => window.dispatchEvent(new Event('cl-open-consent'))
  return (
    <footer className="mt-24 border-t border-line bg-surface/60" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
      <div className="container-x grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-2.5">
            <Logo size={36} />
            <span className="text-lg font-bold">Copper<span className="text-brand-600">Learn</span></span>
          </div>
          <p className="mt-3 text-sm text-muted">{SITE.slogan}. Nachhilfe von Schüler:innen für Schüler:innen am {SITE.school}.</p>
          <div className="mt-5 flex gap-2">
            <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" aria-label="CopperLearn auf Instagram"
              className="grid h-10 w-10 place-items-center rounded-full border border-line hover:border-brand-400 hover:text-brand-600"><Instagram className="h-5 w-5" /></a>
            <a href={SITE.tiktok} target="_blank" rel="noopener noreferrer" aria-label="CopperLearn auf TikTok"
              className="grid h-10 w-10 place-items-center rounded-full border border-line hover:border-brand-400 hover:text-brand-600"><TikTokIcon /></a>
            <a href={`mailto:${SITE.email}`} aria-label="E-Mail an CopperLearn"
              className="grid h-10 w-10 place-items-center rounded-full border border-line hover:border-brand-400 hover:text-brand-600"><Mail className="h-5 w-5" /></a>
          </div>
        </div>
        <FooterCol title="Entdecken" links={[['/so-funktionierts', "So funktioniert's"], ['/ueber-uns', 'Über uns'], ['/investieren', 'Anteilscheine'], ['/kontakt', 'Kontakt']]} />
        <FooterCol title="Rechtliches" links={[['/impressum', 'Impressum'], ['/datenschutz', 'Datenschutz'], ['/agb', 'AGB'], ['/widerruf', 'Widerrufsbelehrung']]}>
          <li><button onClick={reopen} className="text-sm text-muted hover:text-brand-600">Cookie-Einstellungen</button></li>
        </FooterCol>
        <div>
          <h3 className="text-sm font-semibold">Kontakt</h3>
          <a href={`mailto:${SITE.email}`} className="mt-3 block break-all text-sm text-muted hover:text-brand-600">{SITE.email}</a>
          <p className="mt-4 text-xs leading-relaxed text-muted">
            CopperLearn ist eine Schülerfirma im Rahmen des Programms <a href={SITE.iwJuniorUrl} target="_blank" rel="noopener noreferrer" className="underline">IW JUNIOR</a> und keine offizielle Einrichtung oder App des {SITE.school}s.
          </p>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="container-x flex flex-col gap-2 py-6 text-xs text-muted sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} CopperLearn · IW JUNIOR Schülerfirma</p>
          <p>Mit Herz gemacht am {SITE.school}.</p>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({ title, links, children }) {
  return (
    <div>
      <h3 className="text-sm font-semibold">{title}</h3>
      <ul className="mt-3 space-y-2">
        {links.map(([to, l]) => <li key={to}><Link to={to} className="text-sm text-muted hover:text-brand-600">{l}</Link></li>)}
        {children}
      </ul>
    </div>
  )
}
