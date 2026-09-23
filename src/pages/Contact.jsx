import { useState } from 'react'
import { MapPin, Phone, Mail, MessageCircle, Clock, CheckCircle2, Send } from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import useReveal from '../lib/useReveal'
import useSeo from '../lib/useSeo'
import { images } from '../lib/images'
 const contactDetails = [
  {
    icon: MapPin,
    label: 'Location',
    value: 'View our location on Google Maps',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 9764516715 / +91 9764357719',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+91 9764516715',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'tuhsarball0@gmail.com'
  },
  {
    icon: Clock,
    label: 'Office Hours',
    value: 'Mon – Sat, 9:00 AM – 7:00 PM',
  },
]

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Please enter your name.'
  if (!values.phone.trim()) errors.phone = 'Please enter a phone number.'
  else if (!/^[0-9+\-\s()]{7,15}$/.test(values.phone.trim())) errors.phone = 'Enter a valid phone number.'
  if (!values.email.trim()) errors.email = 'Please enter your email address.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errors.email = 'Enter a valid email address.'
  if (!values.message.trim()) errors.message = 'Please tell us how we can help.'
  return errors
}

export default function Contact() {
  useSeo({
    title: 'Contact Us | Future Genius English School & Gade Madam Education Point',
    description: 'Get in touch with Future Genius English School and Gade Madam Education Point — address, phone, WhatsApp, email and office hours.',
    image: images.teacherStudent,
    pageType: 'ContactPage',
  })
  const revealRef = useReveal()

  const [values, setValues] = useState({ name: '', phone: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate(values)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length === 0) {
      // Frontend-only demo: no backend is connected yet.
      // TODO: replace with a real API call, e.g.
      // await fetch('/api/contact', { method: 'POST', body: JSON.stringify(values) })
      console.log('Contact form submitted (not sent to a server):', values)
      setSubmitted(true)
      setValues({ name: '', phone: '', email: '', message: '' })
    }
  }

  return (
    <div ref={revealRef}>
      <PageHero
        eyebrow="Contact Us"
        title="We'd love to hear from you"
        description="Reach out with any question about admissions, programs or a campus visit — our team typically responds within one working day."
      />

       <section className="section-pad !pt-0">
  <div className="container-page">

    {/* TOP: CONTACT DETAILS + FORM */}
    <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[0.9fr_1.1fr]">

      {/* LEFT - CONTACT DETAILS */}
      <div className="animate-in min-w-0 space-y-4">
        {contactDetails.map((d) => (
          <div
            key={d.label}
            className="card-surface flex items-start gap-4 p-5 sm:p-6"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold-500/15 text-gold-700">
              <d.icon className="h-5 w-5" strokeWidth={1.8} />
            </div>

            <div className="min-w-0">
              <p className="text-[13px] font-semibold uppercase tracking-wide text-ash-500">
                {d.label}
              </p>

              <p className="mt-1 break-words text-[14px] text-ink-900 sm:text-[14.5px]">
                {d.value}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* RIGHT - CONTACT FORM */}
      <div
        className="animate-in card-surface self-start p-5 sm:p-7 lg:p-8"
        style={{ transitionDelay: '80ms' }}
      >
        <h2 className="font-display text-xl font-semibold text-ink-900 sm:text-2xl">
          Send us a message
        </h2>

        <p className="mt-2 text-[13.5px] leading-relaxed text-ash-500 sm:text-[14.5px]">
          This form is frontend-only for now and is not connected to a server.
        </p>

        {submitted && (
          <div className="mt-6 flex items-start gap-3 rounded-2xl bg-teal-500/10 p-4 text-teal-700">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
            <p className="text-[14px]">
              Thank you! Your message has been recorded. We'll get back to you shortly.
            </p>
          </div>
        )}

        <form
          className="mt-6 space-y-5"
          onSubmit={handleSubmit}
          noValidate
        >
          <Field
            label="Full Name"
            name="name"
            value={values.name}
            onChange={handleChange}
            error={errors.name}
          />

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field
              label="Phone Number"
              name="phone"
              value={values.phone}
              onChange={handleChange}
              error={errors.phone}
              type="tel"
            />

            <Field
              label="Email Address"
              name="email"
              value={values.email}
              onChange={handleChange}
              error={errors.email}
              type="email"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-1.5 block text-[13.5px] font-medium text-ink-800"
            >
              Message
            </label>

            <textarea
              id="message"
              name="message"
              rows={4}
              value={values.message}
              onChange={handleChange}
              className={`w-full rounded-2xl border bg-white px-4 py-3 text-[14.5px] text-ink-900 outline-none transition-colors focus:border-ink-900/40 ${
                errors.message
                  ? 'border-red-400'
                  : 'border-ink-900/10'
              }`}
              placeholder="How can we help?"
            />

            {errors.message && (
              <p className="mt-1.5 text-[13px] text-red-500">
                {errors.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="btn-primary flex w-full items-center justify-center gap-2 sm:w-auto"
          >
            Send Message
            <Send className="h-4 w-4" />
          </button>
        </form>
      </div>
    </div>

    {/* GOOGLE MAP - FULL WIDTH BELOW BOTH COLUMNS */}
    <div className="mt-8 w-full overflow-hidden rounded-3xl border border-ink-900/[0.06] bg-white">
      <iframe
        title="Future Genius English School and Gade Madam Education Point Location"
        src="https://www.google.com/maps?q=19.196031181078208,77.30871112317733&z=17&output=embed"
        className="block h-[280px] w-full border-0 sm:h-[350px] lg:h-[400px]"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>

  </div>
</section>
    </div>
  )
}

function Field({ label, name, value, onChange, error, type = 'text' }) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-[13.5px] font-medium text-ink-800">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className={`w-full rounded-2xl border bg-white px-4 py-3 text-[14.5px] text-ink-900 outline-none transition-colors focus:border-ink-900/40 ${error ? 'border-red-400' : 'border-ink-900/10'}`}
      />
      {error && <p className="mt-1.5 text-[13px] text-red-500">{error}</p>}
    </div>
  )
}
