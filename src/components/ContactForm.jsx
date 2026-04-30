import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Loader2 } from 'lucide-react'
import { buildMailtoUrl, buildWhatsAppUrl } from '../utils/enquiry'

const initialForm = { name: '', email: '', phone: '', destination: '', message: '' }

function Field({ name, label, type = 'text', textarea = false, value, error, onChange }) {
  return (
    <div className="relative">
      {textarea ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          rows={4}
          placeholder=" "
          className={`peer w-full bg-[#fffaf2] border ${error ? 'border-red-400' : 'border-brand-border'} px-4 pt-6 pb-3 text-brand-dark focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition-colors resize-none text-sm font-body`}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder=" "
          className={`peer w-full bg-[#fffaf2] border ${error ? 'border-red-400' : 'border-brand-border'} px-4 pt-6 pb-3 text-brand-dark focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition-colors text-sm font-body`}
        />
      )}
      <label
        htmlFor={name}
        className="absolute left-4 top-1.5 text-xs font-display tracking-wider uppercase text-brand-muted peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-brand-yellow transition-all pointer-events-none"
      >
        {label}
      </label>
      {error && <p className="text-red-500 text-xs mt-1 font-body">{error}</p>}
    </div>
  )
}

export default function ContactForm({ showToast }) {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const handlePrefill = (event) => {
      const detail = event.detail || {}

      setForm((current) => ({
        ...current,
        destination: detail.destination || current.destination,
        message: detail.message || current.message,
      }))
    }

    window.addEventListener('prefill-enquiry', handlePrefill)
    return () => window.removeEventListener('prefill-enquiry', handlePrefill)
  }, [])

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required'
    if (!form.phone.trim() || !/^[0-9+\-\s]{8,15}$/.test(form.phone)) e.phone = 'Valid phone number required'
    if (!form.message.trim()) e.message = 'Please describe your requirement'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target

    setForm((current) => ({ ...current, [name]: value }))
    if (errors[name]) setErrors((current) => ({ ...current, [name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }

    setLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 600))

    window.open(buildWhatsAppUrl(form), '_blank', 'noopener,noreferrer')
    window.location.href = buildMailtoUrl(form)

    setLoading(false)
    setSubmitted(true)
    showToast('Enquiry ready in WhatsApp and your email app.', 'success')
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-16 px-8 bg-[#fbf7f0] border border-brand-border"
      >
        <div className="text-5xl mb-4">OK</div>
        <h3 className="font-display text-2xl font-bold uppercase text-brand-dark mb-3">Enquiry Opened</h3>
        <p className="text-brand-muted mb-6">WhatsApp and your email app have been prepared with your enquiry details.</p>
        <button
          type="button"
          onClick={() => { setSubmitted(false); setForm(initialForm) }}
          className="btn-primary text-xs"
        >
          Send Another Enquiry
        </button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4 bg-[#fbf7f0] p-8 border border-brand-border shadow-[0_10px_30px_rgba(26,26,26,0.06)]">
      <div className="grid sm:grid-cols-2 gap-4">
        <Field name="name" label="Full Name" value={form.name} error={errors.name} onChange={handleChange} />
        <Field name="email" label="Email Address" type="email" value={form.email} error={errors.email} onChange={handleChange} />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <Field name="phone" label="Phone Number" type="tel" value={form.phone} error={errors.phone} onChange={handleChange} />
        <div className="relative">
          <select
            id="destination"
            name="destination"
            value={form.destination}
            onChange={handleChange}
            className="w-full bg-[#fffaf2] border border-brand-border px-4 pt-6 pb-3 text-brand-dark focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition-colors text-sm font-body appearance-none"
          >
            <option value="">Select destination</option>
            <option>Kashmir</option>
            <option>Ladakh</option>
            <option>Jammu / Vaishno Devi</option>
            <option>Gulmarg</option>
            <option>Pahalgam</option>
            <option>Sonamarg</option>
            <option>Srinagar</option>
            <option>Other</option>
          </select>
          <label className="absolute left-4 top-1.5 text-xs font-display tracking-wider uppercase text-brand-muted pointer-events-none">Destination</label>
        </div>
      </div>
      <Field name="message" label="Your Requirement" textarea value={form.message} error={errors.message} onChange={handleChange} />

      <button
        type="submit"
        disabled={loading}
        className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {loading ? (
          <><Loader2 size={16} className="animate-spin" /> Opening...</>
        ) : (
          <><Send size={16} /> Send Enquiry</>
        )}
      </button>
    </form>
  )
}
