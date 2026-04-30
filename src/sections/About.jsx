import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { siteContent } from '../data/siteContent'

const aboutFallbackImage = `data:image/svg+xml;utf8,${encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800">
    <defs>
      <linearGradient id="sky" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#173845" />
        <stop offset="100%" stop-color="#7398ab" />
      </linearGradient>
      <linearGradient id="land" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#6d8d60" />
        <stop offset="100%" stop-color="#3f5b43" />
      </linearGradient>
    </defs>
    <rect width="1200" height="800" fill="url(#sky)" />
    <path d="M0 520 L180 280 L360 450 L550 220 L760 470 L930 250 L1200 520 V800 H0 Z" fill="#f1f0ea" opacity="0.95" />
    <path d="M0 570 L210 360 L420 520 L680 310 L930 540 L1200 420 V800 H0 Z" fill="#1c3a44" opacity="0.58" />
    <path d="M0 630 Q220 540 430 620 T860 610 T1200 625 V800 H0 Z" fill="url(#land)" />
    <text x="50%" y="74%" text-anchor="middle" font-family="Arial, sans-serif" font-size="74" font-weight="700" fill="#ffffff">Kashmir Valley</text>
    <text x="50%" y="82%" text-anchor="middle" font-family="Arial, sans-serif" font-size="28" letter-spacing="6" fill="#ffd166">ABOUT US</text>
  </svg>
`)}`

export default function About() {
  const { about } = siteContent

  return (
    <section id="about" className="py-24 bg-brand-dark text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Image + stats */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative">
            <img
              src={about.image}
              alt="Kashmir valley"
              className="w-full object-cover"
              style={{ height: '480px', objectPosition: 'center 18%' }}
              loading="lazy"
              onError={(e) => {
                e.currentTarget.onerror = null
                e.currentTarget.src = aboutFallbackImage
              }}
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-dark/70 via-brand-dark/15 to-transparent px-6 py-5">
              <p className="text-white font-display text-2xl md:text-3xl font-bold uppercase tracking-[0.12em]">
                Kashmir Valley
              </p>
            </div>
            {/* Yellow frame offset */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-brand-yellow -z-10" />
          </div>

          {/* Floating stats */}
          <div className="absolute -bottom-8 left-6 right-12 grid grid-cols-2 gap-px bg-brand-yellow">
            {about.stats.map((stat) => (
              <div key={stat.label} className="bg-brand-dark px-5 py-4 text-center">
                <div className="font-display text-3xl font-bold text-brand-yellow">{stat.value}</div>
                <div className="text-gray-400 text-xs font-display tracking-widest uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="pt-16 lg:pt-0"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-brand-yellow" />
            <span className="text-brand-yellow font-display text-xs tracking-[0.25em] uppercase">About Us</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase leading-tight text-white mb-6">
            {about.heading}
          </h2>
          <p className="text-gray-300 leading-relaxed mb-5 font-body">{about.body1}</p>
          <p className="text-gray-400 leading-relaxed mb-8 font-body">{about.body2}</p>

          {/* Trust points */}
          <ul className="space-y-3 mb-10">
            {about.trustPoints.map((point) => (
              <li key={point} className="flex items-center gap-3">
                <CheckCircle2 size={18} className="text-brand-yellow flex-shrink-0" />
                <span className="text-gray-300 text-sm font-body">{point}</span>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="inline-flex btn-primary"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  )
}
