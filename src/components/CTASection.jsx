import { Link } from 'react-router-dom'
import { ArrowRight, PhoneCall } from 'lucide-react'
import { images } from '../lib/images'

export default function CTASection() {
  return (
    <section className="section-pad">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-ink-950">
          <img
            src={images.ctaChildren}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/95 to-ink-950/60" />
          <div className="relative grid grid-cols-1 gap-10 px-8 py-16 sm:px-14 sm:py-20 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div className="animate-in">
              <span className="kicker bg-white/10 text-gold-300">Admissions Open</span>
              <h2 className="mt-5 max-w-xl text-3xl font-semibold leading-tight text-white sm:text-4xl">
                Give Your Child the Right Foundation for a Bright Future
              </h2>
              <p className="mt-4 max-w-lg text-[15.5px] leading-relaxed text-ink-100">
                Seats are limited for the upcoming academic year across Playgroup–UKG and Std. 1st–10th
                batches. Book a visit or send an enquiry and our team will guide you through the process.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
              <Link to="/admission" className="btn-gold w-full">
                Enquire Now
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="btn-ghost w-full !bg-white/5 !text-white !border-white/20 hover:!bg-white/10">
                Contact Us
                <PhoneCall className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
