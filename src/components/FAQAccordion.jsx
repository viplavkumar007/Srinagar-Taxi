import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function FAQAccordion({ faq, index }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className={`border ${open ? 'border-brand-yellow bg-brand-yellow/5' : 'border-brand-border bg-white'} transition-colors duration-300`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left group focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:ring-inset"
        aria-expanded={open}
      >
        <span className="font-display text-sm md:text-base font-semibold uppercase tracking-wide text-brand-dark pr-4 group-hover:text-brand-yellow transition-colors">
          {faq.q}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 text-brand-yellow"
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 text-brand-muted leading-relaxed font-body text-sm md:text-base border-t border-brand-border/50 pt-4">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
