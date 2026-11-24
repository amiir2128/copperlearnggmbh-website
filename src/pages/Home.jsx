import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, ArrowUpRight, Search, CalendarCheck, Video, ClipboardCheck, MessageCircle, Star, ShieldCheck, Euro, GraduationCap, Users, Rocket, Instagram } from 'lucide-react'
import { Reveal, TikTokIcon } from '../components/ui'
import { SITE } from '../config'

const FEATURES = [
  { icon: Search, title: 'Finden statt suchen', text: 'Filter nach Fach, Klassenstufe, Preis, Bewertung, Format und Verfügbarkeit.' },
  { icon: CalendarCheck, title: 'Anfragen & Termine', text: 'Anfrage senden, Tutor:in bestätigt, Termin steht im Kalender.' },
  { icon: Video, title: 'Eigener Workspace', text: 'Video-Meeting, Whiteboard, Materialien und Notizen für jeden Termin.' },
  { icon: ClipboardCheck, title: 'Aufgaben & Feedback', text: 'Übungen stellen, abgeben, korrigieren und den Lernfortschritt sehen.' },
  { icon: MessageCircle, title: 'Chat', text: 'Direkt und unkompliziert absprechen, ohne private Nummern zu teilen.' },
  { icon: Star, title: 'Ehrliche Bewertungen', text: 'Sterne und Kommentare nach jedem abgeschlossenen Termin.' },
]

export default function Home() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const logoY = useTransform(scrollYProgress, [0, 1], [0, 120])
  const logoScale = useTransform(scrollYProgress, [0, 1], [1, 0.85])
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <>
      {/* HERO */}
      <section ref={ref} className="relative isolate overflow-hidden bg-brand-950 pb-20 pt-32 text-white sm:pb-28 sm:pt-40">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_30%,rgb(var(--brand-600)/0.55),transparent_70%)]" />
        <div className="absolute -left-40 top-40 -z-10 h-96 w-96 rounded-full bg-brand-500/20 blur-3xl" />
        <div className="absolute -right-32 bottom-0 -z-10 h-96 w-96 rounded-full bg-brand-400/15 blur-3xl" />
        <motion.div style={{ opacity: fade }} className="container-x flex flex-col items-center text-center">
          <motion.img src="/logo.png" alt="CopperLearn Logo" width={176} height={176}
            style={{ y: logoY, scale: logoScale }}
            initial={{ opacity: 0, scale: 0.8, filter: 'blur(12px)' }} animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="h-32 w-32 drop-shadow-[0_0_60px_rgba(150,120,240,0.65)] sm:h-44 sm:w-44" />
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-8 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-brand-100 backdrop-blur">
            Schülerfirma am {SITE.school}
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="h-display mt-6 text-5xl leading-[1.05] sm:text-7xl lg:text-8xl">
            Lernen <span className="bg-gradient-to-r from-brand-200 via-brand-300 to-white bg-clip-text text-transparent">verbindet.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55, duration: 0.9 }}
            className="mt-6 max-w-2xl text-lg text-brand-100/85 sm:text-xl">
            CopperLearn bringt Schüler:innen zusammen, die Nachhilfe suchen, und die, die sie geben. Einfach, schnell und direkt an unserer Schule.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.9 }}
            className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a href={SITE.appUrl} className="btn-light">Nachhilfe finden <ArrowUpRight className="h-4 w-4" /></a>
            <a href={SITE.appUrl} className="btn border border-white/25 text-white hover:bg-white/10">Nachhilfe geben</a>
          </motion.div>
        </motion.div>
      </section>

      {/* INTRO */}
      <section className="container-x py-20 sm:py-28">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Von Schüler:innen für Schüler:innen</p>
          <h2 className="h-display mt-3 text-3xl sm:text-5xl">Nachhilfe, die sich anfühlt wie Lernen mit Freund:innen.</h2>
          <p className="mt-5 text-lg text-muted">Wer weiß besser, wie der Stoff in Klasse 7 erklärt wird, als jemand, der ihn letztes Jahr selbst gelernt hat? Bei CopperLearn helfen ältere Schüler:innen jüngeren, auf Augenhöhe und zu fairen Preisen.</p>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.06}>
              <motion.div whileHover={{ y: -4 }} transition={{ type: 'spring', stiffness: 300, damping: 22 }} className="card h-full">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-100 text-brand-700 dark:bg-brand-900/60 dark:text-brand-200"><f.icon className="h-6 w-6" /></div>
                <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-muted">{f.text}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ZWEI ROLLEN */}
      <section className="container-x grid gap-4 lg:grid-cols-2">
        <Reveal>
          <div className="card h-full bg-gradient-to-br from-brand-50 to-surface dark:from-brand-900/40">
            <GraduationCap className="h-9 w-9 text-brand-600" />
            <h3 className="h-display mt-5 text-2xl sm:text-3xl">Du brauchst Hilfe?</h3>
            <ul className="mt-4 space-y-2 text-muted">
              <li>• Passende Tutor:innen nach Fach und Klasse finden</li>
              <li>• Online per Video oder vor Ort in der Schule</li>
              <li>• Kostenlose und bezahlte Angebote</li>
              <li>• Aufgaben, Materialien und Fortschritt an einem Ort</li>
            </ul>
            <a href={SITE.appUrl} className="btn-primary mt-7">Tutor:in finden <ArrowRight className="h-4 w-4" /></a>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="card h-full bg-brand-900 text-white dark:bg-brand-800">
            <Users className="h-9 w-9 text-brand-200" />
            <h3 className="h-display mt-5 text-2xl sm:text-3xl">Du kannst etwas gut erklären?</h3>
            <ul className="mt-4 space-y-2 text-brand-100/85">
              <li>• Profil anlegen, Fächer und Klassenstufen wählen</li>
              <li>• Preis selbst festlegen oder kostenlos helfen</li>
              <li>• 90 % des Preises gehen an dich</li>
              <li>• Erfahrung sammeln, die sich in jedem Lebenslauf gut macht</li>
            </ul>
            <a href={SITE.appUrl} className="btn-light mt-7">Tutor:in werden <ArrowRight className="h-4 w-4" /></a>
          </div>
        </Reveal>
      </section>

      {/* SICHER & FAIR */}
      <section className="container-x py-20 sm:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Sicher & fair</p>
            <h2 className="h-display mt-3 text-3xl sm:text-5xl">Gebaut für unsere Schule.</h2>
            <p className="mt-5 text-lg text-muted">Keine Telefonnummern oder E-Mail-Adressen auf öffentlichen Profilen. Ein Melde-System für unangemessene Inhalte. Und transparente Preise, bei denen du vorher weißt, was ein Termin kostet.</p>
            <Link to="/so-funktionierts" className="btn-ghost mt-8">So funktioniert's <ArrowRight className="h-4 w-4" /></Link>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: ShieldCheck, t: 'Privatsphäre', d: 'Kontaktdaten bleiben privat. Kommunikation läuft über den Chat.' },
              { icon: Euro, t: 'Transparent', d: '10 % Provision pro bezahltem Termin, sonst nichts.' },
              { icon: Rocket, t: 'Profil-Boost', d: '1,99 € für 7 Tage oder 4,99 € für 30 Tage ganz oben in der Suche.' },
              { icon: Star, t: 'Qualität', d: 'Bewertungen nach jedem Termin zeigen, wer wirklich gut erklärt.' },
            ].map((x, i) => (
              <Reveal key={x.t} delay={i * 0.08}>
                <div className="card h-full !p-6">
                  <x.icon className="h-6 w-6 text-brand-600" />
                  <h3 className="mt-3 font-semibold">{x.t}</h3>
                  <p className="mt-1 text-sm text-muted">{x.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INVESTIEREN TEASER */}
      <section className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-4xl bg-gradient-to-br from-brand-700 via-brand-800 to-brand-950 px-6 py-14 text-white sm:px-14 sm:py-20">
            <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brand-400/30 blur-3xl" />
            <div className="relative grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-200">Anteilscheine</p>
                <h2 className="h-display mt-3 text-3xl sm:text-5xl">Werde Teil von CopperLearn.</h2>
                <p className="mt-4 max-w-xl text-lg text-brand-100/85">Mit einem Anteilschein für 5 € oder 10 € unterstützt du unsere IW JUNIOR Schülerfirma und hilfst, Nachhilfe an unserer Schule einfacher zu machen.</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-end">
                <Link to="/investieren" className="btn-light">Mehr erfahren <ArrowRight className="h-4 w-4" /></Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* SOCIAL */}
      <section className="container-x py-20 text-center sm:py-28">
        <Reveal>
          <h2 className="h-display text-3xl sm:text-4xl">Folge uns.</h2>
          <p className="mx-auto mt-3 max-w-lg text-muted">Neuigkeiten, Lerntipps und Einblicke hinter die Kulissen unserer Schülerfirma.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="btn-ghost"><Instagram className="h-5 w-5" /> @copperlearn_ggmbh</a>
            <a href={SITE.tiktok} target="_blank" rel="noopener noreferrer" className="btn-ghost"><TikTokIcon /> @copperlearn_ggmbh</a>
          </div>
        </Reveal>
      </section>
    </>
  )
}
