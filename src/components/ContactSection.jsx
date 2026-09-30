import SectionHeading from './SectionHeading'
import ContactLink from './ContactLink'

function ContactSection() {
  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Contact" subtitle="Say hi." />
      <ul className="mt-8 space-y-3">
        <ContactLink label="Email" href="mailto:ingridmae.ontario@cit.edu" text="ingridmae.ontario@cit.edu" />
        <ContactLink label="GitHub" href="https://github.com/ingridmaeontario" text="github.com/ingridmaeontario" />
        <ContactLink label="LinkedIn" href="https://linkedin.com/in/ingridmaeontario" text="linkedin.com/in/ingridmaeontario" />
      </ul>
    </section>
  )
}

export default ContactSection