import { motion } from 'framer-motion'
import { siteContent } from '../data/siteContent'
import ServiceCard from '../components/ServiceCard'

export default function Services() {
  const { services } = siteContent

  return (
    <section id="services" className="py-24 bg-brand-light grid-texture">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 grid lg:grid-cols-2 gap-8 items-end"
        >
          <div>
            <div className="accent-line" />
            <h2 className="section-title">Our Services</h2>
          </div>
          <p className="text-brand-muted leading-relaxed font-body lg:text-right">
            From airport transfers to full-blown Himalayan expeditions — every service is delivered with precision, local expertise, and unbeatable value.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
