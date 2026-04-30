import { motion } from 'framer-motion'
import { siteContent } from '../data/siteContent'
import { openDestinationEnquiry } from '../utils/enquiry'

const fallbackImage = (name, region) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600">
      <defs>
        <linearGradient id="sky" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#16333f" />
          <stop offset="100%" stop-color="#517f92" />
        </linearGradient>
        <linearGradient id="ground" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#7c9b66" />
          <stop offset="100%" stop-color="#486046" />
        </linearGradient>
      </defs>
      <rect width="800" height="600" fill="url(#sky)" />
      <path d="M0 420 L150 250 L260 360 L390 190 L530 360 L650 220 L800 420 V600 H0 Z" fill="#f4f2ea" opacity="0.95" />
      <path d="M0 460 L180 320 L320 430 L500 260 L670 430 L800 350 V600 H0 Z" fill="#183039" opacity="0.55" />
      <path d="M0 500 Q160 430 320 500 T640 500 T800 500 V600 H0 Z" fill="url(#ground)" />
      <text x="50%" y="78%" text-anchor="middle" font-family="Arial, sans-serif" font-size="52" font-weight="700" fill="#ffffff">${name}</text>
      <text x="50%" y="86%" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" letter-spacing="4" fill="#ffd166">${region.toUpperCase()}</text>
    </svg>
  `)}`

export default function Destinations() {
  const { destinations } = siteContent

  return (
    <section id="destinations" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="accent-line" />
          <h2 className="section-title">Popular Destinations</h2>
          <p className="text-brand-muted mt-4 max-w-xl font-body">
            From snow-capped peaks to sacred shrines, explore India&apos;s most spectacular landscapes.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {destinations.map((dest, i) => (
            <motion.button
              key={dest.name}
              type="button"
              onClick={() => openDestinationEnquiry(dest.name)}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ scale: 1.02 }}
              className="relative overflow-hidden group cursor-pointer block text-left"
              style={{ aspectRatio: i === 0 ? '16/10' : '4/3' }}
            >
              <img
                src={dest.img}
                alt={dest.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.onerror = null
                  e.currentTarget.src = fallbackImage(dest.name, dest.region)
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between">
                <div>
                  <p className="text-brand-yellow text-xs font-display tracking-widest uppercase">{dest.region}</p>
                  <h3 className="text-white font-display text-xl font-bold uppercase tracking-tight">{dest.name}</h3>
                </div>
                <span className="text-white/60 group-hover:text-brand-yellow transition-colors font-display text-xs tracking-wider uppercase">Explore {'->'}</span>
              </div>

              <div className="absolute inset-0 border-2 border-transparent group-hover:border-brand-yellow transition-colors duration-300" />
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  )
}
