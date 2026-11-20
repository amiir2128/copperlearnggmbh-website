# CopperLearn – Website

„Lernen verbindet." Website der IW JUNIOR Schülerfirma CopperLearn am Copernicus-Gymnasium.

## Technik
React 18 + Vite, Tailwind CSS, framer-motion, lucide-react, react-router.

```bash
npm install
npm run dev      # lokale Vorschau auf http://localhost:5173
npm run build    # fertige Website in dist/
```

## Wichtige Dateien
- `src/config.js` – E-Mail, Social-Links, App-Link, AdSense-ID
- `src/index.css` – Farben (Design-Tokens)
- `index.html` – AdSense-Code + Google Consent Mode
- `public/ads.txt` – AdSense-Verifizierung
- `src/pages/Impressum.jsx`, `Datenschutz.jsx`, `AGB.jsx`, `Widerruf.jsx` – Rechtstexte
- Gelb markierte `[PLATZHALTER: …]` vor Veröffentlichung ausfüllen (Suche nach `<Ph>`).

## Veröffentlichen
Vercel oder Netlify: Repo verbinden, Build-Befehl `npm run build`, Ausgabeordner `dist`.
`vercel.json` bzw. `public/_redirects` sorgen dafür, dass Unterseiten direkt aufrufbar sind.
