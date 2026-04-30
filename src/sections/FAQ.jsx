import { motion } from 'framer-motion'
import { siteContent } from '../data/siteContent'
import FAQAccordion from '../components/FAQAccordion'

export default function FAQ() {
  const { faqs } = siteContent

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <div className="flex justify-center mb-4"><div className="h-1 w-12 bg-brand-yellow" /></div>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="text-brand-muted mt-4 font-body max-w-lg mx-auto">
            Everything you need to know before booking your Kashmir adventure.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQAccordion key={i} faq={faq} index={i} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-brand-muted text-sm mt-10 font-body"
        >
          Still have questions?{' '}
          <a href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="text-brand-yellow font-semibold hover:underline">
            Contact us directly →
          </a>
        </motion.p>
      </div>
    </section>
  )
}
