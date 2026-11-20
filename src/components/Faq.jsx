import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'

export default function Faq({ items }) {
  const [open, setOpen] = useState(null)
  return (
    <div className="divide-y divide-line rounded-3xl border border-line bg-surface">
      {items.map(([q, a], i) => (
        <div key={q}>
          <button onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}
            className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left font-semibold sm:px-7">
            {q}
            <Plus className={`h-5 w-5 shrink-0 text-brand-600 transition-transform duration-300 ${open === i ? 'rotate-45' : ''}`} />
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden">
                <p className="px-5 pb-5 text-muted sm:px-7">{a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}
