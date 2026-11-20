import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, Instagram, Send } from 'lucide-react'
import { PageHero, Reveal, TikTokIcon } from '../components/ui'
import { SITE } from '../config'

export default function Contact() {
  const [f, setF] = useState({ name: '', topic: 'Allgemeine Frage', message: '' })
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })
  // Kein Server: das Formular öffnet das E-Mail-Programm mit vorausgefüllter Nachricht.
  const submit = (e) => {
    e.preventDefault()
    const s = encodeURIComponent(`[CopperLearn] ${f.topic}`)
    const b = encodeURIComponent(`${f.message}\n\n– ${f.name}`)
    window.location.href = `mailto:${SITE.email}?subject=${s}&body=${b}`
  }
  const input = 'mt-1.5 w-full rounded-2xl border border-line bg-canvas px-4 py-3 text-base outline-none transition focus:border-brand-500 focus:ring-4 focus:ring-brand-400/20'

  return (
    <>
      <PageHero eyebrow="Kontakt" title="Sag hallo.">Fragen, Ideen, Kooperationen oder Interesse an einem Anteilschein? Wir freuen uns auf deine Nachricht.</PageHero>
      <section className="container-x grid gap-6 lg:grid-cols-[1fr_1.3fr]">
        <Reveal className="space-y-4">
          <ContactCard href={`mailto:${SITE.email}`} icon={Mail} title="E-Mail" text={SITE.email} />
          <ContactCard href={SITE.instagram} icon={Instagram} title="Instagram" text="@copperlearn_ggmbh" external />
          <ContactCard href={SITE.tiktok} icon={TikTokIcon} title="TikTok" text="@copperlearn_ggmbh" external />
        </Reveal>
        <Reveal delay={0.1}>
          <form onSubmit={submit} className="card space-y-4">
            <label className="block text-sm font-medium">Name<input required value={f.name} onChange={set('name')} className={input} autoComplete="name" /></label>
            <label className="block text-sm font-medium">Thema
              <select value={f.topic} onChange={set('topic')} className={input}>
                {['Allgemeine Frage', 'Nachhilfe', 'Tutor:in werden', 'Anteilschein', 'Kooperation', 'Problem melden'].map((t) => <option key={t}>{t}</option>)}
              </select>
            </label>
            <label className="block text-sm font-medium">Nachricht<textarea required rows={5} value={f.message} onChange={set('message')} className={input} /></label>
            <p className="text-xs text-muted">Das Formular öffnet dein E-Mail-Programm. Es werden keine Daten auf unserer Website gespeichert. Siehe <Link to="/datenschutz" className="link">Datenschutzerklärung</Link>.</p>
            <button className="btn-primary w-full sm:w-auto"><Send className="h-4 w-4" /> Nachricht schreiben</button>
          </form>
        </Reveal>
      </section>
    </>
  )
}

function ContactCard({ href, icon: Icon, title, text, external }) {
  return (
    <a href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="card flex items-center gap-4 !p-5 transition hover:-translate-y-0.5 hover:border-brand-300">
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-100 text-brand-700 dark:bg-brand-900/60 dark:text-brand-200"><Icon className="h-6 w-6" /></span>
      <span className="min-w-0"><span className="block text-sm text-muted">{title}</span><span className="block break-all font-semibold">{text}</span></span>
    </a>
  )
}
