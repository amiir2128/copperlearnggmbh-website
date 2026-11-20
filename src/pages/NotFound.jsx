import { Link } from 'react-router-dom'
import { PageHero } from '../components/ui'
export default function NotFound() {
  return (
    <PageHero eyebrow="404" title="Diese Seite gibt es nicht.">
      <Link to="/" className="btn-primary mt-2">Zur Startseite</Link>
    </PageHero>
  )
}
