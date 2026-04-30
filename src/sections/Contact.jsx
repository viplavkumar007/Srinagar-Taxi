import { motion } from 'framer-motion'
import { Phone, MessageCircle, MapPin, Clock, Mail } from 'lucide-react'
import { siteContent } from '../data/siteContent'
import ContactForm from '../components/ContactForm'

export default function Contact({ showToast }) {
  const { contact } = siteContent

  const infoItems = [
    { icon: Phone, label: 'Call Us', value: contact.phone, href: `tel:${contact.phone}` },
    { icon: MessageCircle, label: 'WhatsApp', value: 'Chat with Aman', href: `https://wa.me/${contact.whatsapp}?text=Hi%20Aman%2C%20I%20want%20to%20book%20a%20trip`, external: true },
    { icon: Mail, label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
    { icon: MapPin, label: 'Address', value: contact.address, href: contact.mapUrl, external: true },
    { icon: Clock, label: 'Hours', value: contact.hours },
  ]

  return (
    <section id="contact" className="py-24 bg-[#f3ede2] text-brand-dark grid-texture">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-brand-yellow" />
            <span className="text-brand-yellow font-display text-xs tracking-[0.25em] uppercase">Get In Touch</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase leading-tight text-brand-dark mb-6">
            Plan Your<br />Perfect Trip
          </h2>
          <p className="text-brand-muted leading-relaxed mb-10 font-body">
            Fill out the form and Aman will personally reach out to craft your ideal Kashmir itinerary. Response guaranteed within 2 hours.
          </p>

          <div className="space-y-5">
            {infoItems.map(({ icon: Icon, label, value, href, external }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white/70 border border-brand-yellow/30 flex items-center justify-center flex-shrink-0">
                  <Icon size={16} className="text-brand-yellow" />
                </div>
                <div>
                  <p className="font-display text-xs tracking-widest uppercase text-brand-muted mb-0.5">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      target={external ? '_blank' : undefined}
                      rel={external ? 'noopener noreferrer' : undefined}
                      className="text-brand-dark hover:text-brand-yellow transition-colors text-sm font-body"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-brand-dark text-sm font-body">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <a
            href={`https://wa.me/${contact.whatsapp}?text=Hi%20Aman%2C%20I%20want%20to%20book%20a%20Kashmir%20trip`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-10 bg-[#25D366] text-white font-display font-semibold tracking-wider uppercase px-6 py-3 text-sm hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
          >
            <MessageCircle size={18} /> Chat on WhatsApp
          </a>
        </motion.div>

        {/* Right: Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <ContactForm showToast={showToast} />
        </motion.div>
      </div>
    </section>
  )
}
