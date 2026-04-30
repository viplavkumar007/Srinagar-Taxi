import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './sections/Services'
import Destinations from './sections/Destinations'
import About from './sections/About'
import Testimonials from './sections/Testimonials'
import FAQ from './sections/FAQ'
import Contact from './sections/Contact'
import CTAStrip from './components/CTA'
import Footer from './components/Footer'
import Toast from './components/Toast'

export default function App() {
  const [toast, setToast] = useState(null)

  const showToast = (msg, type = 'success') => {
    setToast({ msg, type })
    setTimeout(() => setToast(null), 4000)
  }

  return (
    <div className="min-h-screen bg-brand-light">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Destinations />
        <About />
        <CTAStrip />
        <Testimonials />
        <FAQ />
        <Contact showToast={showToast} />
      </main>
      <Footer />
      {toast && <Toast message={toast.msg} type={toast.type} onClose={() => setToast(null)} />}
    </div>
  )
}
