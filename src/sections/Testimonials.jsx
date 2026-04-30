import { motion } from 'framer-motion'
import { siteContent } from '../data/siteContent'

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-brand-yellow text-base">★</span>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const { testimonials } = siteContent

  return (
    <section id="testimonials" className="py-24 bg-brand-light grid-texture">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <div className="flex justify-center mb-4">
            <div className="h-1 w-12 bg-brand-yellow" />
          </div>
          <h2 className="section-title">What Our Travellers Say</h2>
          <p className="text-brand-muted mt-4 max-w-xl mx-auto font-body">
            Over 5,000 happy travellers can't be wrong. Here's what a few of them had to say.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white border border-brand-border p-8 relative group hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Large quote mark */}
              <div className="absolute top-5 right-6 font-accent text-6xl text-brand-yellow/20 leading-none select-none">"</div>
              
              <StarRating count={t.rating} />
              <blockquote className="mt-4 mb-6 text-brand-dark leading-relaxed font-body text-sm relative">
                "{t.text}"
              </blockquote>
              
              <div className="flex items-center gap-4 pt-4 border-t border-brand-border">
                <div className="w-10 h-10 bg-brand-yellow flex items-center justify-center font-display font-bold text-brand-dark text-sm flex-shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-display font-semibold text-sm uppercase tracking-wide text-brand-dark">{t.name}</p>
                  <p className="text-brand-muted text-xs font-body">{t.city} · {t.trip}</p>
                </div>
              </div>

              {/* Accent line on hover */}
              <div className="absolute bottom-0 left-0 h-0.5 bg-brand-yellow w-0 group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex flex-wrap justify-center gap-6 items-center"
        >
          {['5000+ Happy Travellers', '4.9★ Average Rating', 'Google Verified Business', '14+ Years in Service'].map(badge => (
            <div key={badge} className="flex items-center gap-2 bg-white border border-brand-border px-5 py-2.5">
              <span className="w-2 h-2 bg-brand-yellow rounded-full" />
              <span className="font-display text-xs tracking-widest uppercase text-brand-dark">{badge}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
