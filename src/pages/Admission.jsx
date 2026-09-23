import { useState } from 'react'
import { CheckCircle2, Send, PhoneCall } from 'lucide-react'
import PageHero from '../components/PageHero'
import useReveal from '../lib/useReveal'
import useSeo from '../lib/useSeo'
import { images } from '../lib/images'

const classOptions = ['Playgroup', 'Nursery', 'LKG', 'UKG', 'Std. 1st', 'Std. 2nd', 'Std. 3rd', 'Std. 4th', 'Std. 5th', 'Std. 6th', 'Std. 7th', 'Std. 8th', 'Std. 9th', 'Std. 10th']
const programOptions = ['Regular Academics', 'Competitive Exam Preparation', 'Abacus', 'Spoken English']
const boardOptions = ['CBSE', 'State Board', 'NCERT', 'Not Applicable (Pre-Primary)']
const mediumOptions = ['Semi-English Medium', 'Marathi Medium', 'English Medium (Pre-Primary)']

const initialState = {
  parentName: '', studentName: '', phone: '', email: '',
  studentClass: '', program: '', board: '', medium: '', message: '',
}

function validate(values) {
  const errors = {}
  if (!values.parentName.trim()) errors.parentName = "Please enter the parent's name."
  if (!values.studentName.trim()) errors.studentName = "Please enter the student's name."
  if (!values.phone.trim()) errors.phone = 'Please enter a phone number.'
  else if (!/^[0-9+\-\s()]{7,15}$/.test(values.phone.trim())) errors.phone = 'Enter a valid phone number.'
  if (!values.email.trim()) errors.email = 'Please enter an email address.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errors.email = 'Enter a valid email address.'
  if (!values.studentClass) errors.studentClass = 'Please select a class.'
  if (!values.program) errors.program = 'Please select a program.'
  return errors
}

export default function Admission() {
  useSeo({
    title: 'Admission Enquiry | Future Genius English School & Gade Madam Education Point',
    description: 'Submit an admission enquiry for Future Genius English School (Playgroup–UKG) or Gade Madam Education Point (Std. 1st–10th).',
    image: images.heroChildren2,
  })
  const revealRef = useReveal()

  const [values, setValues] = useState(initialState)
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
      // TODO: replace with a real API call once a backend is available, e.g.
      // await fetch('/api/admission-enquiry', { method: 'POST', body: JSON.stringify(values) })
      console.log('Admission enquiry submitted (not sent to a server):', values)
      setSubmitted(true)
      setValues(initialState)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  if (submitted) {
    return (
      <div className="section-pad">
        <div className="container-page">
          <div className="mx-auto max-w-lg animate-in card-surface p-10 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-teal-500/10 text-teal-600">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h1 className="mt-6 font-display text-2xl font-semibold text-ink-900">Enquiry Received</h1>
            <p className="mt-3 text-[14.5px] leading-relaxed text-ash-500">
              Thank you for your interest in Future Genius English School and Gade Madam Education Point.
              Our admissions team will contact you shortly with the next steps.
            </p>
            <button onClick={() => setSubmitted(false)} className="btn-primary mt-8">
              Submit Another Enquiry
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div ref={revealRef}>
      <PageHero
        eyebrow="Admission Enquiry"
        title="Give your child the right foundation for a bright future"
        description="Fill in the details below and our admissions team will get in touch to guide you through the process — from Playgroup to Std. 10th."
        image={images.heroChildren2}
        imageAlt="A child during an admission visit"
      />

      <section className="section-pad !pt-0">
        <div className="container-page">
          <div className="mx-auto max-w-3xl animate-in card-surface p-8 sm:p-10">
            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <Field label="Parent Name" name="parentName" value={values.parentName} onChange={handleChange} error={errors.parentName} />
                <Field label="Student Name" name="studentName" value={values.studentName} onChange={handleChange} error={errors.studentName} />
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <Field label="Phone Number" name="phone" type="tel" value={values.phone} onChange={handleChange} error={errors.phone} />
                <Field label="Email Address" name="email" type="email" value={values.email} onChange={handleChange} error={errors.email} />
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <Select label="Student Class" name="studentClass" value={values.studentClass} onChange={handleChange} error={errors.studentClass} options={classOptions} />
                <Select label="Program" name="program" value={values.program} onChange={handleChange} error={errors.program} options={programOptions} />
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <Select label="Board (if applicable)" name="board" value={values.board} onChange={handleChange} options={boardOptions} optional />
                <Select label="Medium" name="medium" value={values.medium} onChange={handleChange} options={mediumOptions} optional />
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-[13.5px] font-medium text-ink-800">
                  Message <span className="text-ash-500">(optional)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={values.message}
                  onChange={handleChange}
                  placeholder="Any questions or specific requirements?"
                  className="w-full rounded-2xl border border-ink-900/10 bg-white px-4 py-3 text-[14.5px] text-ink-900 outline-none transition-colors focus:border-ink-900/40"
                />
              </div>

              <div className="flex flex-col gap-4 pt-2 sm:flex-row">
                <button type="submit" className="btn-gold w-full sm:w-auto">
                  Submit Enquiry
                  <Send className="h-4 w-4" />
                </button>
                <a href="tel:+91XXXXXXXXXX" className="btn-ghost w-full sm:w-auto">
                  Call Us Instead
                  <PhoneCall className="h-4 w-4" />
                </a>
              </div>
              <p className="text-[12.5px] text-ash-500">
                This is a static demo form — submissions are not sent to a server yet. It is structured and
                validated so a real API can be connected later without redesigning the form.
              </p>
            </form>
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

function Select({ label, name, value, onChange, error, options, optional }) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-[13.5px] font-medium text-ink-800">
        {label} {optional && <span className="text-ash-500">(optional)</span>}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full rounded-2xl border bg-white px-4 py-3 text-[14.5px] text-ink-900 outline-none transition-colors focus:border-ink-900/40 ${error ? 'border-red-400' : 'border-ink-900/10'}`}
      >
        <option value="">Select {label.toLowerCase()}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
      {error && <p className="mt-1.5 text-[13px] text-red-500">{error}</p>}
    </div>
  )
}
