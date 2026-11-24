import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Cookie } from 'lucide-react'

const KEY = 'cl-consent'
const read = () => { try { return JSON.parse(localStorage.getItem(KEY) || 'null') } catch { return null } }

function apply(ads) {
  const v = ads ? 'granted' : 'denied'
  window.gtag?.('consent', 'update', { ad_storage: v, ad_user_data: v, ad_personalization: v })
  if (window.adsbygoogle) window.adsbygoogle.requestNonPersonalizedAds = ads ? 0 : 1
}

export default function CookieBanner() {
  const [open, setOpen] = useState(false)
  const [details, setDetails] = useState(false)
  const [ads, setAds] = useState(false)

  useEffect(() => {
    const c = read()
    if (!c) setOpen(true); else setAds(!!c.ads)
    const reopen = () => { setDetails(true); setOpen(true) }
    window.addEventListener('cl-open-consent', reopen)
    return () => window.removeEventListener('cl-open-consent', reopen)
  }, [])

  const save = (value) => {
    try { localStorage.setItem(KEY, JSON.stringify({ ads: value, ts: new Date().toISOString(), v: 1 })) } catch {}
    setAds(value); apply(value); setOpen(false); setDetails(false)
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div role="dialog" aria-modal="false" aria-labelledby="cc-title"
          initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 40, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-3 bottom-3 z-[60] mx-auto max-w-xl rounded-3xl border border-line bg-surface p-5 shadow-2xl sm:bottom-6 sm:p-6"
          style={{ marginBottom: 'env(safe-area-inset-bottom)' }}>
          <div className="flex items-start gap-3">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-100 text-brand-700 dark:bg-brand-900/60 dark:text-brand-200"><Cookie className="h-5 w-5" /></div>
            <div>
              <h2 id="cc-title" className="font-semibold">Cookies & Werbung</h2>
              <p className="mt-1 text-[13px] leading-relaxed text-muted sm:text-sm">
                Notwendige Speicher halten die Seite am Laufen. Mit deiner Einwilligung setzt Google AdSense Cookies für personalisierte Werbung, die unsere Schülerfirma mitfinanziert. Ohne Einwilligung gibt es höchstens nicht personalisierte Anzeigen. Änderbar jederzeit im Footer. Mehr in der <Link to="/datenschutz" className="link">Datenschutzerklärung</Link>.
              </p>
            </div>
          </div>

          {details && (
            <div className="mt-4 space-y-3 rounded-2xl bg-canvas p-4">
              <Row title="Notwendig" text="Speichert deine Cookie-Auswahl. Immer aktiv." checked disabled />
              <Row title="Werbung (Google AdSense)" text="Personalisierte Anzeigen und Messung durch Google Ireland Ltd." checked={ads} onChange={setAds} />
            </div>
          )}

          <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3">
            <button onClick={() => save(false)} className="btn-ghost !py-2.5 !text-sm">Nur notwendige</button>
            {details
              ? <button onClick={() => save(ads)} className="btn-ghost !py-2.5 !text-sm">Auswahl speichern</button>
              : <button onClick={() => setDetails(true)} className="btn-ghost !py-2.5 !text-sm">Einstellungen</button>}
            <button onClick={() => save(true)} className="btn-primary col-span-2 !py-2.5 !text-sm !shadow-none sm:col-span-1">Alle akzeptieren</button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function Row({ title, text, checked, onChange, disabled }) {
  return (
    <label className={`flex items-center justify-between gap-4 ${disabled ? 'opacity-70' : 'cursor-pointer'}`}>
      <span><span className="block text-sm font-semibold">{title}</span><span className="block text-xs text-muted">{text}</span></span>
      <span className="relative inline-flex">
        <input type="checkbox" className="peer sr-only" checked={checked} disabled={disabled} onChange={(e) => onChange?.(e.target.checked)} />
        <span className="h-7 w-12 rounded-full bg-line transition-colors peer-checked:bg-brand-600 peer-focus-visible:ring-4 peer-focus-visible:ring-brand-400/40" />
        <span className="absolute left-1 top-1 h-5 w-5 rounded-full bg-white shadow transition-transform peer-checked:translate-x-5" />
      </span>
    </label>
  )
}
