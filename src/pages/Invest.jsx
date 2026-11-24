import { Link } from 'react-router-dom'
import { Mail, Check, Info } from 'lucide-react'
import { PageHero, Reveal } from '../components/ui'
import { SITE } from '../config'

const subject = encodeURIComponent('Anteilschein CopperLearn')
const body = encodeURIComponent('Hallo CopperLearn-Team,\n\nich möchte einen Anteilschein über ___ € (5 € oder 10 €) erwerben.\n\nName:\nE-Mail:\n\nViele Grüße')

export default function Invest() {
  return (
    <>
      <PageHero eyebrow="Anteilscheine" title="Investiere in Lernen.">
        Mit einem Anteilschein unterstützt du CopperLearn mit einem Fördergeld von 5 € oder 10 €. So hilfst du einer echten Schülerfirma beim Start und machst Nachhilfe an unserer Schule einfacher.
      </PageHero>

      <section className="container-x grid gap-4 md:grid-cols-2">
        {SITE.shares.prices.map((p, i) => (
          <Reveal key={p} delay={i * 0.1} className={`card text-center ${i === 1 ? 'bg-brand-900 text-white ring-0 dark:bg-brand-800' : ''}`}>
            <p className={`text-sm font-semibold uppercase tracking-[0.14em] ${i === 1 ? 'text-brand-200' : 'text-brand-600'}`}>Anteilschein</p>
            <p className="h-display mt-3 text-6xl">{p} €</p>
            <p className={`mt-3 ${i === 1 ? 'text-brand-100/80' : 'text-muted'}`}>Fördergeld für den Betrieb von CopperLearn</p>
            <a href={`mailto:${SITE.email}?subject=${subject}&body=${body}`} className={`${i === 1 ? 'btn-light' : 'btn-primary'} mt-7`}>
              <Mail className="h-4 w-4" /> Anteilschein anfragen
            </a>
          </Reveal>
        ))}
      </section>

      <section className="container-x mt-20 grid gap-10 lg:grid-cols-2">
        <Reveal>
          <h2 className="h-display text-3xl sm:text-4xl">So funktioniert's</h2>
          <ol className="mt-6 space-y-5">
            {[
              ['Anfragen', `Schreib uns an ${SITE.email} oder sprich uns in der Schule an.`],
              ['Anteilschein ausfüllen', 'Du erhältst den offiziellen IW JUNIOR Anteilschein mit Name, E-Mail-Adresse, Ort und Datum.'],
              ['Fördergeld zahlen', 'Du zahlst 5 € oder 10 € und bekommst deinen Beleg für die IW JUNIOR Schülerfirma.'],
            ].map(([t, d], i) => (
              <li key={t} className="flex gap-4">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand-600 text-sm font-bold text-white">{i + 1}</span>
                <div><h3 className="font-semibold">{t}</h3><p className="mt-1 text-muted">{d}</p></div>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={0.1} className="card">
          <h2 className="text-xl font-bold">Gut zu wissen</h2>
          <ul className="mt-5 space-y-3 text-muted">
            {[
              `Jede IW JUNIOR Schülerfirma erhält ${SITE.shares.total} Anteilscheine.`,
              'Jedes Mitglied der Schülerfirma erwirbt einen Anteilschein. Die übrigen werden an Privatpersonen, Institutionen oder Unternehmen verkauft.',
              'Jede Person, Institution oder jedes Unternehmen darf nur einen Anteil erwerben.',
              'Die Zahlung des Fördergeldes ist freiwillig. Ansprüche gegenüber der Schülerfirma oder der IW JUNIOR gGmbH entstehen dadurch nicht.',
              'Mit dem Erwerb erklärst du dich mit unserer Geschäftsidee einverstanden.',
              'Der Anteilschein ist keine Spendenbescheinigung und kann nicht steuerlich geltend gemacht werden.',
            ].map((x) => <li key={x} className="flex gap-3"><Check className="mt-0.5 h-5 w-5 shrink-0 text-mint" /><span>{x}</span></li>)}
          </ul>
        </Reveal>
      </section>

      <section className="container-x mt-10">
        <Reveal className="card flex gap-4 !p-6">
          <Info className="mt-0.5 h-6 w-6 shrink-0 text-brand-600" />
          <div>
            <h2 className="font-semibold">Was passiert am Ende des Schuljahres mit dem Kapital?</h2>
            <p className="mt-2 text-muted">
              Wenn CopperLearn am Ende des Projekts aufgelöst wird, spenden wir das verbleibende Kapital über die IW JUNIOR gGmbH für einen gemeinnützigen Zweck. Eine Auszahlung an die Fördernden erfolgt nicht. Für das Fördergeld gibt es keine Spendenquittung, und es ist nicht steuerlich absetzbar.
            </p>
            <p className="mt-3 text-sm text-muted">Mehr Informationen zum Programm findest du auf <a href={SITE.iwJuniorUrl} target="_blank" rel="noopener noreferrer" className="link">iwjunior.de</a>. Fragen? <Link to="/kontakt" className="link">Schreib uns.</Link></p>
          </div>
        </Reveal>
      </section>
    </>
  )
}
