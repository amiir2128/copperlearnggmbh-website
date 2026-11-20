import { PageHero } from './ui'

export const STAND = '20. November 2026'

export default function LegalLayout({ title, intro, children }) {
  return (
    <>
      <PageHero eyebrow="Rechtliches" title={title}>{intro}</PageHero>
      <section className="container-x">
        <div className="legal card max-w-3xl">{children}<p className="mt-10 text-sm">Stand: {STAND}</p></div>
      </section>
    </>
  )
}
