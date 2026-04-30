import { motion } from 'framer-motion'
import { Phone, MessageCircle } from 'lucide-react'
import { siteContent } from '../data/siteContent'

export default function CTAStrip() {
  const { contact } = siteContent

  return (
    <section className="relative overflow-hidden bg-brand-yellow py-16">
      {/* Animated pulse background */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div className="w-[600px] h-[600px] bg-white rounded-full" />
      </motion.div>

      {/* Grid texture */}
      <div className="absolute inset-0 grid-texture opacity-30" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-display text-brand-dark/60 text-xs tracking-[0.3em] uppercase mb-3">Ready to Explore Kashmir?</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase text-brand-dark mb-6 leading-tight">
            Your Dream Trip Starts<br />With One Message
          </h2>
          <p className="text-brand-dark/70 mb-10 text-lg max-w-xl mx-auto font-body">
            Get a personalized itinerary and quote within 2 hours. No commitment required.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={`https://wa.me/${contact.whatsapp}?text=Hi%20Aman%2C%20I%20want%20to%20plan%20a%20trip`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-brand-dark text-white font-display font-semibold tracking-wider uppercase px-8 py-4 text-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-dark focus:ring-offset-2"
            >
              <MessageCircle size={18} /> WhatsApp: {contact.phone}
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="flex items-center gap-2 bg-white/30 border-2 border-brand-dark text-brand-dark font-display font-semibold tracking-wider uppercase px-8 py-4 text-sm hover:bg-brand-dark hover:text-brand-yellow hover:-translate-y-1 transition-all duration-200"
            >
              <Phone size={18} /> Send Enquiry
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
