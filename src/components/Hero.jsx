import { motion } from 'framer-motion'
import { Phone, MessageCircle, ChevronDown } from 'lucide-react'
import { siteContent } from '../data/siteContent'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  const { hero, contact } = siteContent

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center overflow-hidden bg-brand-dark">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80"
          alt="Kashmir mountains"
          className="w-full h-full object-cover opacity-30"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent" />
        {/* Grid texture */}
        <div className="absolute inset-0 grid-texture opacity-20" />
      </div>

      {/* Yellow accent bar - left edge */}
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-brand-yellow" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 grid lg:grid-cols-2 gap-12 items-center w-full">
        <div>
          {/* Label */}
          <motion.div {...fadeUp(0)} className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-brand-yellow" />
            <span className="font-display text-brand-yellow text-xs tracking-[0.25em] uppercase">
              Srinagar · Kashmir · Since 2010
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1 {...fadeUp(0.1)} className="font-display text-6xl sm:text-7xl lg:text-8xl font-bold uppercase leading-none text-white mb-2">
            {hero.headline}
          </motion.h1>
          <motion.p {...fadeUp(0.2)} className="font-display text-xl sm:text-2xl text-brand-yellow font-normal tracking-wide uppercase mb-6">
            {hero.subheadline}
          </motion.p>
          <motion.p {...fadeUp(0.3)} className="text-gray-300 text-lg leading-relaxed mb-10 max-w-xl font-body">
            {hero.body}
          </motion.p>

          {/* CTAs */}
          <motion.div {...fadeUp(0.4)} className="flex flex-wrap gap-4 mb-10">
            <a
              href={`https://wa.me/${contact.whatsapp}?text=Hi%20Aman%2C%20I%20want%20to%20book%20a%20trip`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2"
            >
              <MessageCircle size={16} /> {hero.cta.secondary}
            </a>
            <a href={`tel:${contact.phone}`} className="btn-secondary border-white text-white hover:bg-white hover:text-brand-dark flex items-center gap-2">
              <Phone size={16} /> Call Now
            </a>
          </motion.div>

          {/* Badges */}
          <motion.div {...fadeUp(0.5)} className="flex flex-wrap gap-3">
            {hero.badges.map((badge) => (
              <span key={badge} className="flex items-center gap-2 bg-white/10 border border-white/20 text-white text-xs font-display tracking-wider px-4 py-2">
                <span className="w-1.5 h-1.5 bg-brand-yellow rounded-full inline-block" />
                {badge}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right: Stats card */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:block"
        >
          <div className="bg-white/5 backdrop-blur border border-white/10 p-8">
            <div className="border-b border-white/10 pb-6 mb-6">
              <p className="text-brand-yellow font-display text-xs tracking-widest uppercase mb-2">Quick Contact</p>
              <a href={`tel:${contact.phone}`} className="text-white font-display text-2xl hover:text-brand-yellow transition-colors">
                {contact.phone}
              </a>
              <p className="text-gray-400 text-sm mt-1">{contact.hours}</p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {siteContent.about.stats.map((stat) => (
                <div key={stat.label} className="border-l-2 border-brand-yellow pl-4">
                  <div className="font-display text-3xl font-bold text-brand-yellow">{stat.value}</div>
                  <div className="text-gray-400 text-xs tracking-wider font-display uppercase">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50"
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  )
}
