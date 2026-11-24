import { Link } from 'react-router-dom'
import LegalLayout from '../components/LegalLayout'
import { SITE } from '../config'

export default function AGB() {
  return (
    <LegalLayout title="Allgemeine Geschäftsbedingungen" intro="Die Regeln für die Nutzung von CopperLearn, verständlich zusammengefasst.">
      <h2>§ 1 Geltungsbereich und Anbieter</h2>
      <p>Diese AGB gelten für die Nutzung der Website und der Nachhilfe-Plattform CopperLearn. Anbieter ist CopperLearn, eine IW JUNIOR Schülerfirma am {SITE.school}, vertreten durch {SITE.representatives.map((r) => `${r.name} (${r.role})`).join(', ')} (weitere Angaben im <Link to="/impressum">Impressum</Link>). CopperLearn ist eine Schülerinitiative und keine Einrichtung der Schule.</p>

      <h2>§ 2 Leistungen von CopperLearn</h2>
      <p>CopperLearn stellt eine Plattform bereit, über die Schüler:innen Nachhilfe suchen (Nachhilfeschüler:innen) und anbieten (Tutor:innen) können. Dazu gehören Suche und Filter, Anfragen, Termine, Kalender, Chat, ein Workspace mit Video-Meeting, Whiteboard, Materialien und Notizen, Aufgaben mit Feedback, Bewertungen, ein Melde-System und der Profil-Boost.</p>
      <p>Die Nachhilfe selbst wird von den Tutor:innen erbracht. Der Nachhilfevertrag kommt zwischen Nachhilfeschüler:in und Tutor:in zustande. CopperLearn vermittelt und wickelt die Zahlung ab, schuldet aber keinen bestimmten Lernerfolg.</p>

      <h2>§ 3 Registrierung und Nutzerkonto</h2>
      <ol>
        <li>Die Nutzung der App erfordert ein Konto. Die Angaben müssen wahrheitsgemäß sein.</li>
        <li>Minderjährige brauchen für die Registrierung und für bezahlte Leistungen die Zustimmung ihrer Erziehungsberechtigten.</li>
        <li>Zugangsdaten sind geheim zu halten. Jede Person darf nur ein Konto führen.</li>
        <li>Du kannst dein Konto jederzeit löschen.</li>
      </ol>

      <h2>§ 4 Verhaltensregeln</h2>
      <ul>
        <li>Respektvoller Umgang; keine Beleidigungen, Belästigung, Diskriminierung oder rechtswidrigen Inhalte.</li>
        <li>Keine Telefonnummern, E-Mail-Adressen oder andere sensible Daten in öffentlichen Profilen.</li>
        <li>Keine falschen Angaben zu Fächern, Noten oder Erfahrung.</li>
        <li>Hochgeladene Materialien dürfen keine Rechte Dritter (z. B. Urheberrechte) verletzen.</li>
        <li>Nachhilfe ist keine Hausaufgaben- oder Prüfungserledigung für andere.</li>
      </ul>
      <p>Bei Verstößen können wir Inhalte entfernen und Konten vorübergehend oder dauerhaft sperren. Verstöße können über die Melde-Funktion oder per E-Mail gemeldet werden.</p>

      <h2>§ 5 Preise und Zahlung</h2>
      <ol>
        <li>Tutor:innen legen fest, ob ihre Nachhilfe kostenlos oder bezahlt ist und zu welchem Preis. Der Preis wird vor der Buchung angezeigt. Alle Preise sind Endpreise in Euro.</li>
        <li>Für bezahlte Termine erhält CopperLearn eine Vermittlungsgebühr (Provision) von 10 % des Preises; 90 % stehen der Tutor:in zu.</li>
        <li>Bezahlte Termine werden bei der Buchung, also vor der Nachhilfe, bezahlt. Die Zahlung erfolgt über den Zahlungsdienstleister Stripe; es gelten ergänzend dessen Bedingungen. Bei Minderjährigen erfolgt die Zahlung durch oder mit Zustimmung der Erziehungsberechtigten.</li>
        <li>Die Auszahlung an Tutor:innen erfolgt gesammelt einmal im Monat, sobald das Guthaben mindestens 5 € beträgt. Kleinere Beträge werden in den Folgemonat übertragen und spätestens mit Auflösung der Schülerfirma ausgezahlt.</li>
      </ol>

      <h2>§ 6 Absage und Erstattung</h2>
      <ol>
        <li>Termine können bis 2 Stunden vor Beginn kostenlos abgesagt werden. Der gezahlte Betrag wird vollständig erstattet.</li>
        <li>Sagt die Tutor:in ab oder erscheint sie nicht, wird ein bereits gezahlter Betrag vollständig erstattet.</li>
        <li>Bei Absagen erhält CopperLearn keine Provision. CopperLearn tritt nur als Vermittler auf; die Provision nach § 5 fällt ausschließlich für tatsächlich durchgeführte Termine an.</li>
        <li>Bei einer späteren Absage (weniger als 2 Stunden vor Beginn) oder Nichterscheinen der Nachhilfeschüler:in werden 50 % des Preises als Ausfallentschädigung für die Tutor:in einbehalten, die übrigen 50 % werden erstattet. Der Nachhilfeschüler:in bleibt der Nachweis gestattet, dass kein oder ein geringerer Schaden entstanden ist.</li>
        <li>Das gesetzliche Widerrufsrecht bleibt unberührt. Wird ein Vertrag wirksam widerrufen, gelten die Regeln der <Link to="/widerruf">Widerrufsbelehrung</Link>.</li>
      </ol>

      <h2>§ 7 Profil-Boost</h2>
      <p>Tutor:innen können ihr Profil gegen Entgelt in der Suche hervorheben lassen: 1,99 € für 7 Tage oder 4,99 € für 30 Tage. Der Boost beginnt mit der Zahlung und endet automatisch; es entsteht kein Abonnement. Ein Boost garantiert keine Anfragen.</p>

      <h2>§ 8 Bewertungen</h2>
      <p>Nach einem abgeschlossenen Termin können Nachhilfeschüler:innen eine Bewertung abgeben. Bewertungen müssen ehrlich und sachlich sein. Wir prüfen nicht jede Bewertung vorab, entfernen aber unzulässige Bewertungen, sobald wir davon erfahren.</p>

      <h2>§ 9 Laufzeit der Schülerfirma und Gewährleistung</h2>
      <p><strong>CopperLearn ist eine IW JUNIOR Schülerfirma und besteht in der Regel für ein Schuljahr. Gewährleistungsansprüche erlöschen mit Beendigung der Schülerfirma.</strong> Bis dahin gelten die gesetzlichen Regeln. Vor der Auflösung informieren wir alle Nutzer:innen rechtzeitig.</p>

      <h2>§ 10 Haftung</h2>
      <p>Wir haften unbeschränkt bei Vorsatz und grober Fahrlässigkeit sowie bei Verletzung von Leben, Körper oder Gesundheit. Bei leichter Fahrlässigkeit haften wir nur bei Verletzung wesentlicher Vertragspflichten und begrenzt auf den vorhersehbaren, typischen Schaden. Für die Inhalte der Nachhilfe und für Inhalte, die Nutzer:innen einstellen, sind die jeweiligen Nutzer:innen verantwortlich. Wir bemühen uns um eine ständige Verfügbarkeit der App, können diese aber nicht garantieren.</p>

      <h2>§ 11 Widerrufsrecht</h2>
      <p>Verbraucher:innen haben ein gesetzliches Widerrufsrecht. Einzelheiten stehen in der <Link to="/widerruf">Widerrufsbelehrung</Link>.</p>

      <h2>§ 12 Datenschutz</h2>
      <p>Informationen zur Verarbeitung personenbezogener Daten findest du in der <Link to="/datenschutz">Datenschutzerklärung</Link>.</p>

      <h2>§ 13 Änderungen</h2>
      <p>Wir können diese AGB ändern, wenn dafür ein sachlicher Grund besteht (z. B. neue Funktionen oder geänderte Rechtslage). Über Änderungen informieren wir registrierte Nutzer:innen mindestens zwei Wochen vorher. Widersprichst du nicht innerhalb dieser Frist, gelten die Änderungen als angenommen; darauf weisen wir in der Mitteilung hin.</p>

      <h2>§ 14 Schlussbestimmungen</h2>
      <p>Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts. Gegenüber Verbraucher:innen gilt diese Rechtswahl nur, soweit dadurch nicht zwingende Schutzvorschriften des Staates ihres gewöhnlichen Aufenthalts entzogen werden. Sollte eine Bestimmung unwirksam sein, bleibt der Rest wirksam.</p>
    </LegalLayout>
  )
}
