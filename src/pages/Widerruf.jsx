import { useState } from 'react'
import LegalLayout from '../components/LegalLayout'
import { Ph } from '../components/ui'
import { SITE } from '../config'

export default function Widerruf() {
  const [show, setShow] = useState(false)
  const [f, setF] = useState({ name: '', email: '', contract: '', date: '' })
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })
  const submit = (e) => {
    e.preventDefault()
    const s = encodeURIComponent('Widerruf – Vertrag widerrufen')
    const b = encodeURIComponent(`Hiermit widerrufe ich den von mir abgeschlossenen Vertrag über folgende Dienstleistung:\n${f.contract}\n\nBestellt am: ${f.date}\nName: ${f.name}\nE-Mail: ${f.email}\n\nBitte bestätigt mir den Eingang dieses Widerrufs.`)
    window.location.href = `mailto:${SITE.email}?subject=${s}&body=${b}`
  }
  const input = 'mt-1.5 w-full rounded-2xl border border-line bg-canvas px-4 py-3 text-base outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-400/20'

  return (
    <LegalLayout title="Widerrufsbelehrung" intro="Für Verbraucher:innen, die bei CopperLearn bezahlte Leistungen buchen (Nachhilfetermine, Profil-Boost).">
      <h2>Widerrufsrecht</h2>
      <p>Du hast das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsabschlusses.</p>
      <p>Um dein Widerrufsrecht auszuüben, musst du uns (CopperLearn, IW JUNIOR Schülerfirma am {SITE.school}, <Ph>Straße, PLZ, Ort</Ph>, E-Mail: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>) mittels einer eindeutigen Erklärung (z. B. per E-Mail oder Brief) über deinen Entschluss, diesen Vertrag zu widerrufen, informieren. Du kannst dafür die Widerrufsfunktion unten oder das Muster-Widerrufsformular verwenden, das jedoch nicht vorgeschrieben ist.</p>
      <p>Zur Wahrung der Widerrufsfrist reicht es aus, dass du die Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absendest.</p>

      <h2>Folgen des Widerrufs</h2>
      <p>Wenn du diesen Vertrag widerrufst, haben wir dir alle Zahlungen, die wir von dir erhalten haben, unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über deinen Widerruf bei uns eingegangen ist. Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das du bei der ursprünglichen Transaktion eingesetzt hast, es sei denn, mit dir wurde ausdrücklich etwas anderes vereinbart; in keinem Fall werden dir wegen dieser Rückzahlung Entgelte berechnet.</p>
      <p>Hast du verlangt, dass die Dienstleistung während der Widerrufsfrist beginnen soll, so hast du uns einen angemessenen Betrag zu zahlen, der dem Anteil der bis zu dem Zeitpunkt, zu dem du uns von der Ausübung des Widerrufsrechts hinsichtlich dieses Vertrags unterrichtest, bereits erbrachten Dienstleistungen im Vergleich zum Gesamtumfang der im Vertrag vorgesehenen Dienstleistungen entspricht.</p>

      <h2>Vorzeitiges Erlöschen</h2>
      <p>Das Widerrufsrecht erlischt bei einem Vertrag über Dienstleistungen, wenn die Dienstleistung vollständig erbracht wurde und mit der Ausführung erst begonnen wurde, nachdem du dazu deine ausdrückliche Zustimmung gegeben und gleichzeitig bestätigt hast, dass du weißt, dass du dein Widerrufsrecht bei vollständiger Vertragserfüllung verlierst. Das betrifft z. B. einen Nachhilfetermin, der bereits stattgefunden hat, oder einen Boost, der vollständig abgelaufen ist.</p>

      <h2>Vertrag widerrufen</h2>
      {!show ? (
        <button onClick={() => setShow(true)} className="btn-primary">Vertrag widerrufen</button>
      ) : (
        <form onSubmit={submit} className="mt-4 space-y-4 rounded-3xl border border-line bg-canvas p-5">
          <label className="block text-sm font-medium text-ink">Name<input required value={f.name} onChange={set('name')} className={input} /></label>
          <label className="block text-sm font-medium text-ink">E-Mail-Adresse für die Bestätigung<input required type="email" value={f.email} onChange={set('email')} className={input} /></label>
          <label className="block text-sm font-medium text-ink">Welchen Vertrag möchtest du widerrufen? (z. B. Termin, Datum, Boost)<input required value={f.contract} onChange={set('contract')} className={input} /></label>
          <label className="block text-sm font-medium text-ink">Bestellt am<input type="date" value={f.date} onChange={set('date')} className={input} /></label>
          <button className="btn-primary">Widerruf bestätigen</button>
          <p className="text-xs">Es öffnet sich dein E-Mail-Programm mit dem fertigen Widerruf. Wir bestätigen den Eingang per E-Mail.</p>
        </form>
      )}

      <h2>Muster-Widerrufsformular</h2>
      <p>(Wenn du den Vertrag widerrufen willst, dann fülle bitte dieses Formular aus und sende es zurück.)</p>
      <div className="rounded-2xl border border-line bg-canvas p-5 text-sm">
        <p>An: CopperLearn, IW JUNIOR Schülerfirma am {SITE.school}, <Ph>Straße, PLZ, Ort</Ph>, {SITE.email}</p>
        <p>Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag über die Erbringung der folgenden Dienstleistung (*)</p>
        <p>Bestellt am (*) / erhalten am (*)</p>
        <p>Name des/der Verbraucher(s)</p>
        <p>Anschrift des/der Verbraucher(s)</p>
        <p>Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier)</p>
        <p>Datum</p>
        <p>(*) Unzutreffendes streichen.</p>
      </div>
    </LegalLayout>
  )
}
