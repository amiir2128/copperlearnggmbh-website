import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { PageHero, Reveal } from '../components/ui'
import Faq from '../components/Faq'
import { SITE } from '../config'

const STUDENT = [
  ['Registrieren', 'Konto mit E-Mail oder Google anlegen und E-Mail-Adresse bestätigen.'],
  ['Tutor:in finden', 'Nach Fach, Klassenstufe, Preis, Bewertung, Format und Verfügbarkeit filtern.'],
  ['Anfrage senden', 'Thema, Wunschtermin und eine kurze Nachricht schicken.'],
  ['Loslegen', 'Nach der Zusage steht der Termin im Kalender, mit eigenem Workspace für Video, Whiteboard und Materialien.'],
]
const TUTOR = [
  ['Profil anlegen', 'Fächer, Klassenstufen, Erfahrung, Format und Verfügbarkeit eintragen.'],
  ['Preis festlegen', 'Kostenlos helfen oder einen eigenen Preis pro Termin bestimmen.'],
  ['Anfragen annehmen', 'Anfragen ansehen, zusagen oder ablehnen, ganz wie es in deinen Plan passt.'],
  ['Begleiten', 'Aufgaben stellen, korrigieren, Feedback geben und Fortschritte sehen.'],
]

export default function HowItWorks() {
  return (
    <>
      <PageHero eyebrow="So funktioniert's" title="In vier Schritten zur passenden Nachhilfe.">
        CopperLearn verbindet Lernende und Erklärende an unserer Schule. Alles läuft über eine App: Suche, Termine, Chat, Video und Aufgaben.
      </PageHero>

      <section className="container-x grid gap-6 lg:grid-cols-2">
        <Steps title="Für Nachhilfeschüler:innen" steps={STUDENT} />
        <Steps title="Für Tutor:innen" steps={TUTOR} delay={0.1} />
      </section>

      <section className="container-x mt-20 sm:mt-28">
        <Reveal>
          <p className="eyebrow">Preise</p>
          <h2 className="h-display mt-3 text-3xl sm:text-5xl">Fair und transparent.</h2>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <Price title="Nachhilfe" price="Preis der Tutor:in" items={['Kostenlos oder bezahlt, je nach Angebot', '10 % Provision an CopperLearn', '90 % gehen an die Tutor:in', 'Beispiel: 8 € → 7,20 € Tutor:in, 0,80 € Provision', 'Auszahlung monatlich ab 5 €']} />
          <Price title="Boost 7 Tage" price="1,99 €" highlight items={['Top-Platzierung in der Suche', '7 Tage Laufzeit', 'Endet automatisch, kein Abo']} />
          <Price title="Boost 30 Tage" price="4,99 €" items={['Top-Platzierung in der Suche', '30 Tage Laufzeit', 'Endet automatisch, kein Abo']} />
        </div>
        <p className="mt-4 text-sm text-muted">Alle Preise in Euro. Bezahlt wird sicher über Stripe. Details in unseren <Link to="/agb" className="link">AGB</Link>.</p>
      </section>

      <section className="container-x mt-20 sm:mt-28">
        <Reveal><h2 className="h-display text-3xl sm:text-4xl">Häufige Fragen</h2></Reveal>
        <Reveal delay={0.1} className="mt-8">
          <Faq items={[
            ['Ist CopperLearn eine offizielle App der Schule?', `Nein. CopperLearn ist eine Schülerinitiative und eine Schülerfirma im Rahmen von IW JUNIOR. Wir sind Schüler:innen des ${SITE.school}s, aber keine offizielle Einrichtung der Schulleitung.`],
            ['Wer kann Nachhilfe geben?', 'Alle registrierten Schüler:innen, die ein Tutor-Profil anlegen. Bewertungen nach jedem Termin helfen, gute Tutor:innen zu finden.'],
            ['Ich bin unter 18. Darf ich mitmachen?', 'Ja. Für bezahlte Leistungen brauchst du aber die Zustimmung deiner Eltern bzw. Erziehungsberechtigten. Unter 16 Jahren muss auch der Verarbeitung deiner Daten ein Elternteil zustimmen.'],
            ['Wie werden meine Daten geschützt?', 'Telefonnummern und E-Mail-Adressen erscheinen nie auf öffentlichen Profilen. Mehr dazu in unserer Datenschutzerklärung.'],
            ['Was passiert, wenn ich absagen muss?', 'Bis 2 Stunden vor Beginn bekommst du dein Geld zurück, abzüglich 5 % Stornogebühr. Danach wird nichts erstattet. Sagt die Tutor:in ab, bekommst du alles zurück.'],
            ['Wie kann ich etwas melden?', 'Über die Melde-Funktion an Profilen und Terminen, oder per E-Mail an ' + SITE.email + '.'],
          ]} />
        </Reveal>
      </section>

      <section className="container-x mt-20 text-center">
        <Reveal>
          <a href={SITE.appUrl} className="btn-primary">Jetzt starten <ArrowUpRight className="h-4 w-4" /></a>
        </Reveal>
      </section>
    </>
  )
}

function Steps({ title, steps, delay = 0 }) {
  return (
    <Reveal delay={delay} className="card">
      <h2 className="text-xl font-bold sm:text-2xl">{title}</h2>
      <ol className="mt-6 space-y-6">
        {steps.map(([t, d], i) => (
          <li key={t} className="flex gap-4">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand-600 text-sm font-bold text-white">{i + 1}</span>
            <div><h3 className="font-semibold">{t}</h3><p className="mt-1 text-muted">{d}</p></div>
          </li>
        ))}
      </ol>
    </Reveal>
  )
}

function Price({ title, price, items, highlight }) {
  return (
    <Reveal className={`card h-full ${highlight ? 'ring-2 ring-brand-500' : ''}`}>
      <h3 className="font-semibold text-muted">{title}</h3>
      <p className="h-display mt-2 text-3xl">{price}</p>
      <ul className="mt-5 space-y-2 text-sm text-muted">{items.map((x) => <li key={x}>• {x}</li>)}</ul>
    </Reveal>
  )
}
