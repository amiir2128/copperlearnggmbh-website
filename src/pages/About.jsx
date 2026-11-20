import { Link } from 'react-router-dom'
import { ArrowRight, Heart, Lightbulb, Handshake } from 'lucide-react'
import { PageHero, Ph, Reveal } from '../components/ui'
import { SITE } from '../config'

// Team: Namen und Rollen hier eintragen (nur mit Einverständnis der Personen veröffentlichen)
const TEAM = [
  { role: 'Vorstand / Geschäftsführung', name: null },
  { role: 'Finanzen', name: null },
  { role: 'Technik & App', name: null },
  { role: 'Marketing & Social Media', name: null },
]

export default function About() {
  return (
    <>
      <PageHero eyebrow="Über uns" title="Eine Idee aus der Schule, für die Schule.">
        Wir sind Schüler:innen des {SITE.school}s und haben CopperLearn als Schülerfirma im Programm IW JUNIOR gegründet. Unser Ziel: Nachhilfe so einfach machen wie eine Nachricht an Freund:innen.
      </PageHero>

      <section className="container-x grid gap-4 md:grid-cols-3">
        {[
          { icon: Heart, t: 'Unsere Mission', d: 'Jede:r soll Hilfe finden, wenn es in einem Fach hakt, schnell, bezahlbar und auf Augenhöhe.' },
          { icon: Lightbulb, t: 'Unsere Idee', d: 'Ältere Schüler:innen erklären jüngeren, was sie selbst vor Kurzem gelernt haben. Davon profitieren beide Seiten.' },
          { icon: Handshake, t: 'Unser Slogan', d: '„Lernen verbindet“, weil gemeinsames Lernen Menschen über Klassen und Jahrgänge hinweg zusammenbringt.' },
        ].map((x, i) => (
          <Reveal key={x.t} delay={i * 0.08} className="card">
            <x.icon className="h-7 w-7 text-brand-600" />
            <h2 className="mt-4 text-lg font-semibold">{x.t}</h2>
            <p className="mt-2 text-muted">{x.d}</p>
          </Reveal>
        ))}
      </section>

      <section className="container-x mt-20 sm:mt-28">
        <Reveal>
          <p className="eyebrow">IW JUNIOR</p>
          <h2 className="h-display mt-3 text-3xl sm:text-5xl">Eine echte Schülerfirma.</h2>
          <div className="mt-5 max-w-3xl space-y-4 text-lg text-muted">
            <p>CopperLearn nimmt am Programm <a href={SITE.iwJuniorUrl} target="_blank" rel="noopener noreferrer" className="link">IW JUNIOR</a> teil. Die IW JUNIOR Schülerfirmen werden von der IW JUNIOR gGmbH angeboten. Sie sind pädagogische Projekte, in denen Schüler:innen am realen Wirtschaftsleben teilnehmen und ökonomische Themen erleben.</p>
            <p>Eine IW JUNIOR Schülerfirma besteht in der Regel für ein Schuljahr. Bitte beachte deshalb: Gewährleistungsansprüche erlöschen mit dem Ende der Schülerfirma.</p>
            <p>Wichtig ist uns auch: CopperLearn ist eine Schülerinitiative und keine offizielle App oder Einrichtung des {SITE.school}s.</p>
          </div>
        </Reveal>
      </section>

      <section className="container-x mt-20 sm:mt-28">
        <Reveal><h2 className="h-display text-3xl sm:text-4xl">Das Team</h2></Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((m, i) => (
            <Reveal key={m.role} delay={i * 0.06} className="card !p-6">
              <div className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-brand-400 to-brand-700 text-xl font-bold text-white">{m.name ? m.name[0] : '?'}</div>
              <p className="mt-4 font-semibold">{m.name || <Ph>Name</Ph>}</p>
              <p className="text-sm text-muted">{m.role}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-x mt-20 text-center">
        <Reveal>
          <Link to="/investieren" className="btn-primary">Uns unterstützen <ArrowRight className="h-4 w-4" /></Link>
        </Reveal>
      </section>
    </>
  )
}
