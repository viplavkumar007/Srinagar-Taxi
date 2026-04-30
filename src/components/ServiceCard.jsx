import { motion } from 'framer-motion'
import { openServiceEnquiry } from '../utils/enquiry'

export default function ServiceCard({ service, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="bg-white border border-brand-border group relative overflow-hidden transition-shadow duration-300 hover:shadow-xl"
    >
      <div className="h-1 bg-brand-yellow w-0 group-hover:w-full transition-all duration-500" />

      <div className="p-8">
        <div className="text-4xl mb-5">{service.icon}</div>
        <h3 className="font-display text-xl font-bold uppercase tracking-tight text-brand-dark mb-3">
          {service.title}
        </h3>
        <p className="text-brand-muted text-sm leading-relaxed mb-5 font-body">
          {service.desc}
        </p>
        <div className="flex items-center justify-between gap-3">
          <span className="font-display text-brand-yellow text-sm font-semibold tracking-wider">
            {service.highlight}
          </span>
          <button
            type="button"
            onClick={() => openServiceEnquiry(service.title)}
            className="font-display text-xs tracking-widest uppercase text-brand-muted group-hover:text-brand-dark transition-colors"
          >
            Enquire {'->'}
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 w-6 h-6 border-t border-l border-brand-border" />
    </motion.div>
  )
}
