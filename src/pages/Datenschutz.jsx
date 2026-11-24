import LegalLayout from '../components/LegalLayout'
import { Ph } from '../components/ui'
import { SITE } from '../config'

export default function Datenschutz() {
  const reopen = () => window.dispatchEvent(new Event('cl-open-consent'))
  return (
    <LegalLayout title="Datenschutzerklärung" intro="Wir nehmen den Schutz deiner Daten ernst. Hier erklären wir verständlich, welche Daten wir verarbeiten, warum und welche Rechte du hast.">
      <h2>1. Verantwortlicher</h2>
      <p>
        CopperLearn, IW JUNIOR Schülerfirma am {SITE.school}<br />
        {SITE.street}, {SITE.city}<br />
        Vertreten durch: <Ph>Vor- und Nachname(n)</Ph><br />
        E-Mail: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
      </p>
      <p>Eine:n Datenschutzbeauftragte:n müssen wir nicht benennen. Bei Fragen zum Datenschutz erreichst du uns unter der oben genannten E-Mail-Adresse.</p>

      <h2>2. Überblick</h2>
      <ul>
        <li><strong>Website:</strong> technische Zugriffsdaten (Server-Logs), deine Cookie-Auswahl und, wenn du zustimmst, Werbe-Cookies von Google AdSense.</li>
        <li><strong>Kontakt:</strong> die Daten, die du uns per E-Mail schickst.</li>
        <li><strong>App (Nachhilfe-Plattform):</strong> Kontodaten, Profile, Anfragen, Termine, Nachrichten, Aufgaben, Materialien, Bewertungen, Meldungen und Zahlungsdaten.</li>
        <li><strong>Anteilscheine:</strong> Name, E-Mail-Adresse, Ort und Datum der fördernden Person.</li>
      </ul>

      <h2>3. Hosting und Server-Logfiles</h2>
      <p>Diese Website wird bei <Ph>Hosting-Anbieter, z. B. Vercel Inc. oder Netlify Inc., mit Anschrift</Ph> gehostet. Beim Aufruf werden automatisch Daten erfasst, die dein Browser übermittelt: IP-Adresse, Datum und Uhrzeit, aufgerufene Seite, Referrer-URL, Browser und Betriebssystem. Das ist nötig, um die Website sicher und stabil auszuliefern (Art. 6 Abs. 1 lit. f DSGVO). Die Logs werden nach spätestens <Ph>Anzahl</Ph> Tagen gelöscht. Mit dem Anbieter besteht ein Vertrag zur Auftragsverarbeitung. Soweit Daten in die USA übermittelt werden, erfolgt dies auf Grundlage des EU-US Data Privacy Framework bzw. von Standardvertragsklauseln.</p>
      <p>Die Verbindung ist per TLS (HTTPS) verschlüsselt. Wir binden keine externen Schriftarten ein.</p>

      <h2>4. Cookies und Einwilligung</h2>
      <p>Beim ersten Besuch fragen wir in einem Banner, ob du Werbe-Cookies erlaubst. Deine Auswahl speichern wir im lokalen Speicher deines Browsers (Schlüssel „cl-consent“). Das ist technisch notwendig (§ 25 Abs. 2 Nr. 2 TDDDG). Alle nicht notwendigen Cookies setzen wir nur mit deiner Einwilligung (§ 25 Abs. 1 TDDDG, Art. 6 Abs. 1 lit. a DSGVO). Du kannst deine Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen: <button onClick={reopen} className="link">Cookie-Einstellungen öffnen</button>.</p>

      <h2>5. Google AdSense</h2>
      <p>Wir finanzieren unsere Schülerfirma teilweise über Werbung von Google AdSense. Anbieter ist die Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.</p>
      <p>Wir nutzen den Google Consent Mode. Ohne deine Einwilligung werden keine Werbe-Cookies gesetzt; Google kann dann höchstens nicht personalisierte Anzeigen ausspielen und dabei technisch notwendige Daten (z. B. IP-Adresse, Browserinformationen) verarbeiten. Mit deiner Einwilligung setzt Google Cookies und ähnliche Technologien, um Anzeigen zu personalisieren und ihre Wirkung zu messen. Dabei können Daten an Google LLC in den USA übermittelt werden; Google ist unter dem EU-US Data Privacy Framework zertifiziert.</p>
      <p>Rechtsgrundlage ist deine Einwilligung (Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TDDDG). Mehr Informationen: <a href="https://policies.google.com/technologies/ads?hl=de" target="_blank" rel="noopener noreferrer">So verwendet Google Cookies in der Werbung</a> und <a href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noopener noreferrer">Datenschutzerklärung von Google</a>. Personalisierte Werbung kannst du außerdem unter <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">adssettings.google.com</a> verwalten.</p>

      <h2>6. Kontakt per E-Mail</h2>
      <p>Wenn du uns schreibst (auch über das Kontaktformular, das nur dein E-Mail-Programm öffnet), verarbeiten wir deine Angaben, um die Anfrage zu beantworten (Art. 6 Abs. 1 lit. b bzw. f DSGVO). Unser Postfach wird bei Google (Gmail) betrieben. Wir löschen die Nachrichten, wenn die Anfrage erledigt ist und keine Aufbewahrungspflichten bestehen.</p>

      <h2>7. Die CopperLearn-App</h2>
      <h3>Nutzerkonto</h3>
      <p>Für die Nutzung der Nachhilfe-Plattform brauchst du ein Konto. Wir verarbeiten Name, E-Mail-Adresse, Passwort (verschlüsselt), Klassenstufe und Rolle (Schüler:in / Tutor:in). Die E-Mail-Adresse bestätigen wir per Einmalcode. Optional kannst du dich mit deinem Google-Konto anmelden; dann erhalten wir von Google Name, E-Mail-Adresse und ggf. Profilbild. Rechtsgrundlage ist die Erfüllung des Nutzungsvertrags (Art. 6 Abs. 1 lit. b DSGVO).</p>
      <p>Die App wird betrieben bei <Ph>App-/Backend-Anbieter, z. B. Base44 oder Supabase, mit Anschrift und Serverstandort</Ph>. Mit dem Anbieter besteht ein Vertrag zur Auftragsverarbeitung.</p>
      <h3>Profile, Anfragen, Termine und Lerninhalte</h3>
      <p>Wir verarbeiten die Inhalte, die du in der App einstellst: Tutor-Profile (Fächer, Klassenstufen, Preise, Verfügbarkeit, Beschreibung, Profilbild), Nachhilfe-Anfragen, Termine, Chat-Nachrichten, Aufgaben, Abgaben, Materialien (Datei-Uploads), Notizen, Bewertungen und Benachrichtigungen. Öffentliche Profile zeigen <strong>niemals</strong> Telefonnummern oder E-Mail-Adressen. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO.</p>
      <h3>Meldungen und Sicherheit</h3>
      <p>Wenn du ein Profil oder einen Termin meldest, verarbeiten wir die Meldung, um Missbrauch zu verhindern und die Sicherheit der Nutzer:innen zu schützen (Art. 6 Abs. 1 lit. f DSGVO).</p>
      <h3>Video-Meetings (Jitsi Meet)</h3>
      <p>Für Online-Nachhilfe nutzen wir Jitsi Meet. Anbieter ist <Ph>8x8 Inc. (meet.jit.si) oder eigener Jitsi-Server mit Anbieter und Standort</Ph>. Während eines Meetings werden Bild, Ton, Anzeigename und technische Verbindungsdaten (z. B. IP-Adresse) verarbeitet. Meetings werden nicht von uns aufgezeichnet. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO. Bei Nutzung von meet.jit.si kann eine Übermittlung in die USA erfolgen.</p>
      <h3>Zahlungen (Stripe)</h3>
      <p>Bezahlte Termine und Profil-Boosts werden über Stripe abgewickelt. Anbieter ist die Stripe Payments Europe, Ltd., 1 Grand Canal Street Lower, Grand Canal Dock, Dublin, Irland. Deine Zahlungsdaten (z. B. Kartennummer) gibst du direkt bei Stripe ein; wir erhalten sie nicht. Wir speichern Betrag, Gebühr, Status und Transaktions-ID. Stripe kann Daten an Stripe, Inc. in den USA übermitteln (EU-US Data Privacy Framework, Standardvertragsklauseln). Rechtsgrundlage: Art. 6 Abs. 1 lit. b und c DSGVO. Mehr: <a href="https://stripe.com/de/privacy" target="_blank" rel="noopener noreferrer">stripe.com/de/privacy</a>.</p>

      <h2>8. Anteilscheine</h2>
      <p>Für den Verkauf von Anteilscheinen verarbeiten wir Name, E-Mail-Adresse, Ort und Datum der fördernden Person, um den Anteilschein auszustellen, den Beleg zu dokumentieren und dich ggf. zur Abschlussversammlung einzuladen (Art. 6 Abs. 1 lit. b DSGVO). Die Daten werden nach Auflösung der Schülerfirma gelöscht, sofern keine Aufbewahrungspflichten bestehen.</p>

      <h2>9. Social Media</h2>
      <p>Wir verlinken auf unsere Profile bei Instagram und TikTok. Es handelt sich um einfache Links; beim Besuch unserer Website werden keine Daten an diese Netzwerke übertragen. Erst wenn du einen Link anklickst, gelten die Datenschutzbestimmungen des jeweiligen Anbieters.</p>

      <h2>10. Minderjährige</h2>
      <p>CopperLearn richtet sich an Schüler:innen. Wer jünger als 16 Jahre ist, braucht für Einwilligungen (z. B. Werbe-Cookies) und für die Registrierung die Zustimmung eines Elternteils bzw. Erziehungsberechtigten.</p>

      <h2>11. Speicherdauer</h2>
      <p>Wir speichern Daten nur so lange, wie es für den jeweiligen Zweck nötig ist. Kontodaten löschen wir, wenn du dein Konto löschst, spätestens mit Auflösung der Schülerfirma. Zahlungs- und Buchungsbelege bewahren wir auf, solange gesetzliche Aufbewahrungspflichten bestehen.</p>

      <h2>12. Deine Rechte</h2>
      <ul>
        <li>Auskunft über deine Daten (Art. 15 DSGVO)</li>
        <li>Berichtigung (Art. 16 DSGVO) und Löschung (Art. 17 DSGVO)</li>
        <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
        <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
        <li>Widerspruch gegen Verarbeitungen auf Grundlage berechtigter Interessen (Art. 21 DSGVO)</li>
        <li>Widerruf erteilter Einwilligungen jederzeit mit Wirkung für die Zukunft (Art. 7 Abs. 3 DSGVO)</li>
        <li>Beschwerde bei einer Datenschutz-Aufsichtsbehörde (Art. 77 DSGVO), für uns zuständig ist das Unabhängige Landeszentrum für Datenschutz Schleswig-Holstein (ULD), Holstenstraße 98, 24103 Kiel, <a href="https://www.datenschutzzentrum.de" target="_blank" rel="noopener noreferrer">www.datenschutzzentrum.de</a></li>
      </ul>
      <p>Schreib uns dafür einfach an <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.</p>

      <h2>13. Keine automatisierte Entscheidungsfindung</h2>
      <p>Wir treffen keine Entscheidungen, die ausschließlich auf automatisierter Verarbeitung beruhen. Die Sortierung der Suchergebnisse (Boost, Relevanz, Bewertung, Preis, Erfahrung) hat keine rechtliche Wirkung für dich.</p>
    </LegalLayout>
  )
}
