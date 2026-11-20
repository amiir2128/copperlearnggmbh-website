import LegalLayout from '../components/LegalLayout'
import { Ph } from '../components/ui'
import { SITE } from '../config'

export default function Impressum() {
  return (
    <LegalLayout title="Impressum" intro="Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG)">
      <h2>Anbieter</h2>
      <p>
        <strong>CopperLearn</strong><br />
        IW JUNIOR Schülerfirma am {SITE.school}<br />
        <Ph>Straße und Hausnummer der Schule</Ph><br />
        <Ph>PLZ und Ort</Ph>
      </p>

      <h2>Vertreten durch</h2>
      <p>
        <Ph>Vor- und Nachname, Funktion (z. B. Vorstandsvorsitz / Geschäftsführung)</Ph><br />
        <Ph>Weitere vertretungsberechtigte Person, Funktion</Ph>
      </p>
      <p>Betreuende Lehrkraft: <Ph>Vor- und Nachname</Ph></p>

      <h2>Kontakt</h2>
      <p>
        E-Mail: <a href={`mailto:${SITE.email}`}>{SITE.email}</a><br />
        Telefon: <Ph>Telefonnummer (z. B. Sekretariat oder Schülerfirmen-Handy)</Ph>
      </p>

      <h2>Programm</h2>
      <p>
        CopperLearn ist eine Schülerfirma im Rahmen des Programms IW JUNIOR. Die IW JUNIOR Schülerfirmen werden von der IW JUNIOR gGmbH angeboten (<a href={SITE.iwJuniorUrl} target="_blank" rel="noopener noreferrer">www.iwjunior.de</a>). Schülerfirmen sind pädagogische Projekte und bestehen in der Regel für ein Schuljahr.
      </p>
      <p>CopperLearn ist eine Schülerinitiative und keine offizielle Einrichtung, App oder Website des {SITE.school}s.</p>

      <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
      <p><Ph>Vor- und Nachname, Anschrift wie oben</Ph></p>

      <h2>Verbraucherstreitbeilegung</h2>
      <p>Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>

      <h2>Haftung für Inhalte</h2>
      <p>Wir erstellen die Inhalte dieser Website mit Sorgfalt. Für die Richtigkeit, Vollständigkeit und Aktualität können wir jedoch keine Gewähr übernehmen. Inhalte, die Nutzer:innen in der App einstellen (z. B. Profile, Nachrichten, Bewertungen), stammen von diesen. Sobald wir von rechtswidrigen Inhalten erfahren, entfernen wir sie umgehend.</p>

      <h2>Haftung für Links</h2>
      <p>Unsere Website enthält Links zu externen Websites Dritter (z. B. Instagram, TikTok, IW JUNIOR). Auf deren Inhalte haben wir keinen Einfluss; verantwortlich ist der jeweilige Anbieter. Bei Bekanntwerden von Rechtsverletzungen entfernen wir solche Links umgehend.</p>

      <h2>Urheberrecht</h2>
      <p>Texte, Logo und Gestaltung dieser Website sind urheberrechtlich geschützt. Eine Verwendung außerhalb der gesetzlichen Grenzen bedarf unserer Zustimmung.</p>
    </LegalLayout>
  )
}
