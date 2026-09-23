import { Link } from 'react-router-dom'
import { GraduationCap, MapPin, Phone, Mail, MessageCircle } from 'lucide-react'

// lucide-react no longer ships branded social-media marks, so these are
// small inline outlines kept purely for the footer's social row.
const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <path d="M14 9h2V6h-2c-1.7 0-3 1.3-3 3v2H9v3h2v6h3v-6h2.2l.8-3H14v-1.5c0-.3.2-.5.5-.5Z" strokeLinejoin="round" />
  </svg>
)
const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <rect x="4" y="4" width="16" height="16" rx="4.5" />
    <circle cx="12" cy="12" r="3.3" />
    <circle cx="16.6" cy="7.4" r="0.6" fill="currentColor" stroke="none" />
  </svg>
)
const YoutubeIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <rect x="3" y="6.5" width="18" height="11" rx="3.5" />
    <path d="M10.5 9.8v4.4l4-2.2-4-2.2Z" fill="currentColor" stroke="none" />
  </svg>
)

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink-950 text-ink-100">
      <div className="container-page grid grid-cols-1 gap-12 py-16 sm:py-20 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Link to="/" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gold-500 text-ink-950">
              <GraduationCap className="h-6 w-6" />
            </span>
            <span className="leading-tight">
              <span className="block font-display text-lg font-semibold text-white">Future Genius</span>
              <span className="block text-[11px] tracking-wide text-ink-300">English School</span>
            </span>
          </Link>
          <p className="mt-5 max-w-sm text-[14.5px] leading-relaxed text-ink-300">
            Future Genius English School (Playgroup–UKG) and Gade Madam Education Point (Std. 1st–10th)
            are sister institutions committed to strong foundations, concept clarity and complete
            student development.
          </p>
          <div className="mt-6 flex gap-3">
            {[FacebookIcon, InstagramIcon, YoutubeIcon].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social media link"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-ink-200 transition-colors hover:border-gold-500 hover:text-gold-400"
              >
                <Icon className="h-4.5 w-4.5" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-[15px] font-semibold text-white">Quick Links</h3>
          <ul className="mt-5 space-y-3 text-[14.5px] text-ink-300">
            {[
              ['Home', '/'],
              ['About Us', '/about'],
              ['Faculty', '/faculty'],
              ['Gallery', '/gallery'],
              ['Achievements', '/achievements'],
              ['Events', '/events'],
            ].map(([label, to]) => (
              <li key={to}>
                <Link to={to} className="transition-colors hover:text-gold-400">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-[15px] font-semibold text-white">Programs</h3>
          <ul className="mt-5 space-y-3 text-[14.5px] text-ink-300">
            {[
              ['Playgroup – UKG', '/school'],
              ['Std. 1st – 10th', '/education-point'],
              ['Competitive Exams', '/programs'],
              ['Abacus', '/programs'],
              ['Spoken English', '/programs'],
              ['Admission Enquiry', '/admission'],
            ].map(([label, to], i) => (
              <li key={i}>
                <Link to={to} className="transition-colors hover:text-gold-400">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-[15px] font-semibold text-white">Contact Information</h3>
          <ul className="mt-5 space-y-4 text-[14.5px] text-ink-300">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4.5 w-4.5 shrink-0 text-gold-500" />
              <span> Vithal Rukmini Nagar, Near-Sandeepani, Taroda(bk), Nanded, Maharashtra – 431605</span>
            </li>
            <li className="flex gap-3">
              <Phone className="h-4.5 w-4.5 shrink-0 text-gold-500" />
              <span>+91 97643 57719</span>
            </li>
            <li className="flex gap-3">
              <MessageCircle className="h-4.5 w-4.5 shrink-0 text-gold-500" />
              <span>WhatsApp: +91 97645 16715 </span>
            </li>
            <li className="flex gap-3">
              <Mail className="h-4.5 w-4.5 shrink-0 text-gold-500" />
              <span>gade@madameducationpoint.in</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-[13px] text-ink-300 sm:flex-row">
          <p>© {year} Future Genius English School &amp; Gade Madam Education Point. All rights reserved.</p>
          <p>Placeholder contact details — update before launch.</p>
        </div>
      </div>
    </footer>
  )
}
