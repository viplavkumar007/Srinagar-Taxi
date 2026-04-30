import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import { siteContent } from '../data/siteContent'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const { navLinks, contact, brand } = siteContent

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)

      const sections = navLinks.map(l => l.href.replace('#', ''))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [navLinks])

  const handleNav = (e, href) => {
    e.preventDefault()
    const scrollToSection = () => {
      const el = document.querySelector(href)
      if (!el) return

      const headerOffset = window.innerWidth < 1024 ? 96 : 120
      const y = el.getBoundingClientRect().top + window.scrollY - headerOffset

      window.history.replaceState(null, '', href)
      window.scrollTo({ top: Math.max(y, 0), behavior: 'smooth' })
      setActiveSection(href.replace('#', ''))
    }

    if (mobileOpen) {
      setMobileOpen(false)
      window.setTimeout(scrollToSection, 320)
      return
    }

    scrollToSection()
  }

  return (
    <>
      {/* Top bar */}
      <div className="bg-brand-dark text-white text-sm py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span className="text-brand-border text-xs tracking-widest uppercase font-display">Kashmir's Premier Travel Service</span>
          <div className="flex items-center gap-6">
            <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-brand-yellow hover:text-white transition-colors text-xs font-display tracking-wider">
              <span>💬</span> WhatsApp Us
            </a>
            <a href={`tel:${contact.phone}`} className="flex items-center gap-1.5 text-white hover:text-brand-yellow transition-colors text-xs font-display tracking-wider">
              <Phone size={13} /> {contact.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-brand-border'
            : 'bg-brand-light border-b border-brand-border'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <a href="#home" onClick={(e) => handleNav(e, '#home')} className="flex items-center gap-3 flex-shrink-0">
            <img
              src={brand.logoUrl}
              alt={brand.logoAlt}
              className="h-14 md:h-20 w-auto object-contain"
              loading="eager"
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.nextSibling.style.display = 'flex'
              }}
            />
            <div className="hidden items-center gap-1 bg-brand-yellow px-3 py-1.5" style={{ display: 'none' }}>
              <span className="font-display font-bold text-brand-dark text-sm tracking-wider uppercase">Srinagar Taxi</span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                className={`relative px-4 py-2 font-display text-xs tracking-widest uppercase transition-colors duration-200 group ${
                  activeSection === link.href.replace('#', '')
                    ? 'text-brand-yellow'
                    : 'text-brand-dark hover:text-brand-yellow'
                }`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-4 right-4 h-0.5 bg-brand-yellow transform transition-transform duration-200 ${
                  activeSection === link.href.replace('#', '') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} />
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`https://wa.me/${contact.whatsapp}?text=Hi%20Aman%2C%20I%20want%20to%20book%20a%20trip`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs"
            >
              Book Now
            </a>
          </div>

          {/* Mobile menu btn */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-yellow"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden bg-white border-t border-brand-border"
            >
              <div className="px-4 py-4 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNav(e, link.href)}
                    className="py-3 px-4 font-display text-xs tracking-widest uppercase text-brand-dark hover:bg-brand-yellow hover:text-brand-dark transition-colors border-b border-brand-border"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href={`tel:${contact.phone}`}
                  className="mt-3 btn-primary text-center text-xs"
                >
                  Call {contact.phone}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  )
}
