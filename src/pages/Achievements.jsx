import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import TestimonialSlider from '../components/TestimonialSlider'
import CTASection from '../components/CTASection'
import useReveal from '../lib/useReveal'
import useSeo from '../lib/useSeo'
import { images } from '../lib/images'
import testimonials from '../data/testimonialsData'
import { Award, Users, TrendingUp, Activity, Star } from 'lucide-react'

const stats = [
  { icon: TrendingUp, value: '10+', label: 'Years of Educational Experience' },
  { icon: Users, value: '500+', label: 'Students Guided' },
  { icon: Award, value: '95%+', label: 'Academic Success Rate*' },
  { icon: Activity, value: '20+', label: 'Learning Activities Conducted' },
]

const milestones = [
  { year: '2011', text: 'Gade Madam Education Point founded with a single batch for Std. 5th–7th students.' },
  { year: '2014', text: 'Future Genius English School established to serve Playgroup through UKG learners.' },
  { year: '2018', text: 'Introduced Abacus and Spoken English batches alongside core academic tuition.' },
  { year: '2023', text: 'Expanded facilities and faculty to support growing Std. 8th–10th board batches.' },
]

export default function Achievements() {
  useSeo({
    title: 'Achievements & Milestones | Future Genius English School & Gade Madam Education Point',
    description: 'Milestones, statistics and testimonials from Future Genius English School and Gade Madam Education Point.',
    image: images.graduationKids,
  })
  const revealRef = useReveal()

  return (
    <div ref={revealRef}>
      <PageHero
        eyebrow="Achievements"
        title="A journey shaped by our students' progress"
        description="Illustrative milestones and figures that reflect our ongoing commitment to every learner — to be updated with verified results each year."
        image={images.graduationKids}
        imageAlt="Students celebrating academic success"
      />

      <section className="section-pad !pt-0">
        <div className="container-page">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="animate-in card-surface p-8 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-500/15 text-gold-700">
                  <s.icon className="h-6 w-6" strokeWidth={1.8} />
                </div>
                <p className="mt-4 font-display text-3xl font-semibold text-ink-900">{s.value}</p>
                <p className="mt-1.5 text-[13px] leading-snug text-ash-500">{s.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-[12px] text-ash-500">*Illustrative figures — replace with verified data before publishing.</p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-page">
          <SectionTitle eyebrow="Our Timeline" title="Key milestones over the years" />
          <div className="mt-12 space-y-8 border-l-2 border-ink-900/10 pl-8">
            {milestones.map((m) => (
              <div key={m.year} className="animate-in relative">
                <span className="absolute -left-[2.55rem] top-1 flex h-5 w-5 items-center justify-center rounded-full bg-gold-500 ring-4 ring-white" />
                <p className="font-display text-lg font-semibold text-ink-900">{m.year}</p>
                <p className="mt-1 text-[14.5px] leading-relaxed text-ash-500">{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <SectionTitle eyebrow="In Their Words" title="Parent & student testimonials" align="center" icon={Star} />
          <div className="mt-14">
            <TestimonialSlider testimonials={testimonials} />
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
