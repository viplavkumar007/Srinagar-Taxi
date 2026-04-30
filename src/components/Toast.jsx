import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, XCircle, X } from 'lucide-react'

export default function Toast({ message, type = 'success', onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 60, x: '-50%' }}
        animate={{ opacity: 1, y: 0, x: '-50%' }}
        exit={{ opacity: 0, y: 60, x: '-50%' }}
        role="alert"
        aria-live="polite"
        className={`fixed bottom-8 left-1/2 z-[100] flex items-center gap-3 px-6 py-4 shadow-2xl border min-w-[300px] max-w-sm ${
          type === 'success'
            ? 'bg-brand-dark text-white border-brand-yellow'
            : 'bg-red-50 text-red-800 border-red-300'
        }`}
      >
        {type === 'success'
          ? <CheckCircle size={20} className="text-brand-yellow flex-shrink-0" />
          : <XCircle size={20} className="text-red-500 flex-shrink-0" />
        }
        <p className="font-body text-sm flex-1">{message}</p>
        <button onClick={onClose} className="focus:outline-none opacity-60 hover:opacity-100" aria-label="Close notification">
          <X size={16} />
        </button>
      </motion.div>
    </AnimatePresence>
  )
}
