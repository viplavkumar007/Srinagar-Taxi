import { siteContent } from '../data/siteContent'
import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react'

export default function Footer() {
  const { brand, contact, social } = siteContent
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#ede4d6] text-brand-dark border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="lg:col-span-1">
          <img
            src={brand.logoUrl}
            alt={brand.logoAlt}
            className="h-28 w-auto object-contain mb-5"
            loading="lazy"
          />
          <p className="text-brand-muted text-sm leading-relaxed font-body mb-6">
            Kashmir&apos;s most trusted travel partner. Adventure, pilgrimage, honeymoon - we&apos;ve got your journey covered.
          </p>
          <div className="flex gap-3">
            {[
              { href: social.twitter, icon: 'X' },
              { href: social.facebook, icon: 'f' },
              { href: social.instagram, icon: 'ig' },
              { href: social.linkedin, icon: 'in' },
            ].map(({ href, icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-brand-border flex items-center justify-center text-brand-muted hover:border-brand-yellow hover:text-brand-yellow transition-colors text-sm font-display bg-white/40"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-xs tracking-[0.2em] uppercase text-brand-yellow mb-5 pb-3 border-b border-brand-border">Explore Tours</h4>
          <ul className="space-y-3">
            {['Kashmir Holiday Packages', 'Jammu Holiday Packages', 'Ladakh Expedition', 'Vaishno Devi Yatra', 'Honeymoon Packages', 'Pilgrimage Tours'].map((item) => (
              <li key={item}>
                <a href="#contact" className="text-brand-muted hover:text-brand-yellow transition-colors text-sm font-body flex items-center gap-2">
                  <span className="text-brand-yellow text-xs">+</span> {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-xs tracking-[0.2em] uppercase text-brand-yellow mb-5 pb-3 border-b border-brand-border">Destinations</h4>
          <ul className="space-y-3">
            {['Srinagar', 'Pahalgam', 'Sonamarg', 'Gulmarg', 'Dal Lake', 'Aru Valley', 'Betaab Valley', 'Doodhpathri', 'Pangong Lake'].map((item) => (
              <li key={item}>
                <a href="#destinations" className="text-brand-muted hover:text-brand-yellow transition-colors text-sm font-body flex items-center gap-2">
                  <span className="text-brand-yellow text-xs">*</span> {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-xs tracking-[0.2em] uppercase text-brand-yellow mb-5 pb-3 border-b border-brand-border">Support</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <Phone size={15} className="text-brand-yellow mt-0.5 flex-shrink-0" />
              <a href={`tel:${contact.phone}`} className="text-brand-muted hover:text-brand-yellow transition-colors text-sm font-body">{contact.phone}</a>
            </li>
            <li className="flex items-start gap-3">
              <MessageCircle size={15} className="text-brand-yellow mt-0.5 flex-shrink-0" />
              <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-brand-muted hover:text-brand-yellow transition-colors text-sm font-body">WhatsApp Us</a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={15} className="text-brand-yellow mt-0.5 flex-shrink-0" />
              <span className="text-brand-muted text-sm font-body leading-relaxed">{contact.address}</span>
            </li>
            <li className="flex items-start gap-3">
              <Clock size={15} className="text-brand-yellow mt-0.5 flex-shrink-0" />
              <span className="text-brand-muted text-sm font-body">{contact.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-brand-border bg-white/25">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-brand-muted text-xs font-body">
            © {year} Srinagar Taxi Service by Aman. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service'].map((item) => (
              <a key={item} href="#" className="text-brand-muted hover:text-brand-yellow transition-colors text-xs font-display tracking-wider uppercase">{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
