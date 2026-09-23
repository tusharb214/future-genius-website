import { Link } from 'react-router-dom'
import { ArrowRight, ClipboardList, Sparkles } from 'lucide-react'
import { images } from '../lib/images'

const trustPoints = [
  'Holistic Learning',
  'Experienced Faculty',
  'Child-Centered Education',
  'Academic Excellence',
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-6 sm:pt-10">
      <div className="container-page grid grid-cols-1 items-center gap-14 pb-16 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:pb-24">
        <div className="fade-up">
          <span className="kicker">
            <Sparkles className="h-3.5 w-3.5 text-gold-600" />
            Playgroup to Std. 10th, Under One Roof
          </span>
          <h1 className="mt-6 text-[2.6rem] font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]">
            Future Genius
            <br />
            English School
          </h1>
          <p className="mt-5 max-w-lg text-lg font-medium text-ink-700">
            Building Strong Foundations for a Bright Future
          </p>
          <p className="mt-4 max-w-md text-[15.5px] leading-relaxed text-ash-500">
            From a child's very first day of Playgroup to board-exam readiness in Std. 10th at Gade Madam
            Education Point, we combine activity-based learning with genuine personal attention.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link to="/programs" className="btn-primary">
              Explore Our Programs
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/admission" className="btn-ghost">
              Admission Enquiry
              <ClipboardList className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-ink-900/[0.08] pt-8 sm:grid-cols-4">
            {trustPoints.map((point) => (
              <div key={point} className="text-[13.5px] font-medium text-ash-700">
                <span className="mb-2 block h-1 w-8 rounded-full bg-gold-500" />
                {point}
              </div>
            ))}
          </div>
        </div>

        <div className="relative fade-up" style={{ animationDelay: '120ms' }}>
          <div className="absolute -inset-4 -z-10 rounded-[2.5rem] border border-gold-400/40 sm:-inset-6" />
          <div className="overflow-hidden rounded-[2rem] shadow-[var(--shadow-lift)]">
            <img
              src={images.heroChildren}
              alt="Young students engaged in an activity-based classroom session"
              className="h-[420px] w-full object-cover sm:h-[480px] lg:h-[520px]"
            />
          </div>
          <div className="absolute -bottom-6 left-1/2 w-[85%] -translate-x-1/2 rounded-2xl bg-white p-5 shadow-[var(--shadow-lift)] sm:left-6 sm:w-64 sm:translate-x-0">
            <p className="font-display text-2xl font-semibold text-ink-900">10+ Years</p>
            <p className="text-[13px] text-ash-500">of nurturing young learners and board-exam achievers</p>
          </div>
        </div>
      </div>
    </section>
  )
}
