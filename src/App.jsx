import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Header from './components/Header'
import Footer from './components/Footer'
import CookieBanner from './components/CookieBanner'
import Home from './pages/Home'
import HowItWorks from './pages/HowItWorks'
import About from './pages/About'
import Invest from './pages/Invest'
import Contact from './pages/Contact'
import Impressum from './pages/Impressum'
import Datenschutz from './pages/Datenschutz'
import AGB from './pages/AGB'
import Widerruf from './pages/Widerruf'
import NotFound from './pages/NotFound'

const TITLES = {
  '/': 'CopperLearn – Lernen verbindet',
  '/so-funktionierts': "So funktioniert's · CopperLearn",
  '/ueber-uns': 'Über uns · CopperLearn',
  '/investieren': 'Anteilscheine · CopperLearn',
  '/kontakt': 'Kontakt · CopperLearn',
  '/impressum': 'Impressum · CopperLearn',
  '/datenschutz': 'Datenschutzerklärung · CopperLearn',
  '/agb': 'AGB · CopperLearn',
  '/widerruf': 'Widerrufsbelehrung · CopperLearn',
}

export default function App() {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = TITLES[location.pathname] || 'CopperLearn'
  }, [location.pathname])

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-brand-600 focus:px-4 focus:py-2 focus:text-white">Zum Inhalt springen</a>
      <Header />
      <AnimatePresence mode="wait">
        <motion.main id="main" key={location.pathname} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/so-funktionierts" element={<HowItWorks />} />
            <Route path="/ueber-uns" element={<About />} />
            <Route path="/investieren" element={<Invest />} />
            <Route path="/kontakt" element={<Contact />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
            <Route path="/agb" element={<AGB />} />
            <Route path="/widerruf" element={<Widerruf />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </motion.main>
      </AnimatePresence>
      <Footer />
      <CookieBanner />
    </>
  )
}
