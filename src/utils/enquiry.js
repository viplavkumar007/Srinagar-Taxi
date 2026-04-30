import { siteContent } from '../data/siteContent'

export function scrollToContact() {
  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
}

export function openServiceEnquiry(serviceTitle) {
  window.dispatchEvent(
    new CustomEvent('prefill-enquiry', {
      detail: {
        destination: serviceTitle.includes('Ladakh') ? 'Ladakh' : '',
        message: `Hi Aman, I want to enquire about ${serviceTitle}. Please share the details and price.`,
      },
    })
  )

  scrollToContact()
}

export function openDestinationEnquiry(destinationName) {
  window.dispatchEvent(
    new CustomEvent('prefill-enquiry', {
      detail: {
        destination: destinationName,
        message: `Hi Aman, I want to plan a trip to ${destinationName}. Please share the itinerary and pricing.`,
      },
    })
  )

  scrollToContact()
}

export function buildEnquiryMessage(form) {
  const destinationLine = form.destination ? `Destination: ${form.destination}` : 'Destination: Not specified'

  return [
    `Hi Aman, I want to send an enquiry from the website.`,
    `Name: ${form.name}`,
    `Email: ${form.email}`,
    `Phone: ${form.phone}`,
    destinationLine,
    `Requirement: ${form.message}`,
  ].join('\n')
}

export function buildWhatsAppUrl(form) {
  const { contact } = siteContent
  return `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(buildEnquiryMessage(form))}`
}

export function buildMailtoUrl(form) {
  const { contact } = siteContent
  const subject = form.destination
    ? `Trip enquiry for ${form.destination}`
    : 'Trip enquiry from website'

  return `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(buildEnquiryMessage(form))}`
}
