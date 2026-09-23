import { Link } from 'react-router-dom'
import {
  ArrowRight, Users, ShieldCheck, Sparkles, Trophy, HeartHandshake, BookOpenCheck,
  Lightbulb, PencilRuler, Repeat, CheckCircle2, TrendingUp, Star,
} from 'lucide-react'
import Hero from '../components/Hero'
import SectionTitle from '../components/SectionTitle'
import ProgramCard from '../components/ProgramCard'
import CTASection from '../components/CTASection'
import TestimonialSlider from '../components/TestimonialSlider'
import AnnouncementCard from '../components/AnnouncementCard'
import useReveal from '../lib/useReveal'
import useSeo from '../lib/useSeo'
import { images } from '../lib/images'
import { schoolInfo, schoolPrograms } from '../data/schoolData'
import { educationPointInfo, educationPointPrograms } from '../data/educationPointData'
import testimonials from '../data/testimonialsData'
import { announcements } from '../data/eventsData'

const whyChooseUs = [
  { icon: Users, title: 'Experienced Teachers', description: 'A qualified team trained in early-childhood and board-level teaching methods.' },
  { icon: HeartHandshake, title: 'Personal Attention', description: 'Small batches so every child is known, tracked and encouraged individually.' },
  { icon: BookOpenCheck, title: 'Strong Academic Foundation', description: 'Concepts built step by step, from first alphabets to board-exam readiness.' },
  { icon: Sparkles, title: 'Activity-Based Learning', description: 'Learning through doing — art, play, projects and hands-on practice.' },
  { icon: ShieldCheck, title: 'Safe & Supportive Environment', description: 'A secure, respectful campus where every child feels comfortable to learn.' },
  { icon: Trophy, title: 'Overall Student Development', description: 'Academics paired with communication, confidence and life skills.' },
]

const methodology = [
  { icon: Lightbulb, step: 'Understand', description: 'We first assess how each child grasps a concept before teaching it.' },
  { icon: BookOpenCheck, step: 'Learn', description: 'Concepts are introduced with simple explanations and real examples.' },
  { icon: PencilRuler, step: 'Practice', description: 'Guided practice and worksheets reinforce what has been learned.' },
  { icon: CheckCircle2, step: 'Apply', description: 'Students apply concepts to new problems, activities and tests.' },
  { icon: Repeat, step: 'Improve', description: 'Regular feedback and revision close gaps before they grow.' },
]

const achievements = [
  { value: '10+', label: 'Years of Educational Experience' },
  { value: '500+', label: 'Students Guided' },
  { value: '95%+', label: 'Academic Success Rate*' },
  { value: '20+', label: 'Learning Activities Conducted' },
]

export default function Home() {
  useSeo({
    rawTitle: 'Future Genius English School & Gade Madam Education Point | Quality Education',
    description: 'Future Genius English School offers Playgroup to UKG education, while Gade Madam Education Point supports Std. 1st to 10th students with CBSE, State Board, NCERT, Abacus and Spoken English.',
    image: images.heroChildren,
    schema: [
      {
        '@type': 'EducationalOrganization',
        name: schoolInfo.name,
        alternateName: 'Future Genius English School',
        description: schoolInfo.description,
        url: `${window.location.origin}/school`,
      },
      {
        '@type': 'EducationalOrganization',
        name: educationPointInfo.name,
        alternateName: 'Gade Madam Education Point',
        description: educationPointInfo.description,
        url: `${window.location.origin}/education-point`,
      },
    ],
  })
  const revealRef = useReveal()

  return (
    <div ref={revealRef}>
      <Hero />

      {/* Brand introduction */}
      <section className="section-pad !pt-0">
        <div className="container-page">
          <SectionTitle
            eyebrow="Two Institutions, One Mission"
            title="Choose the right stage of your child's learning journey"
            description="Future Genius English School nurtures the earliest years, while Gade Madam Education Point carries that foundation through to board-exam success."
          />

          <div className="mt-12 grid grid-cols-1 gap-7 lg:grid-cols-2">
            <div className="animate-in card-surface group overflow-hidden">
              <div className="relative h-56 overflow-hidden">
                <img src={images.playgroupPaint} alt="Children in a Future Genius pre-primary classroom" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 to-transparent" />
                <span className="absolute bottom-4 left-6 rounded-full bg-white/95 px-4 py-1.5 text-[13px] font-semibold text-ink-900">Playgroup – UKG</span>
              </div>
              <div className="p-8">
                <h3 className="font-display text-2xl font-semibold text-ink-900">{schoolInfo.name}</h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-ash-500">{schoolInfo.description}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {schoolPrograms.map((p) => (
                    <li key={p.id} className="rounded-full bg-gold-500/10 px-3.5 py-1.5 text-[13px] font-medium text-gold-700">{p.title}</li>
                  ))}
                </ul>
                <Link to="/school" className="btn-primary mt-7">
                  Explore School
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="animate-in card-surface group overflow-hidden" style={{ transitionDelay: '100ms' }}>
              <div className="relative h-56 overflow-hidden">
                <img src={images.tuitionClass} alt="Students in a Gade Madam Education Point tuition class" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 to-transparent" />
                <span className="absolute bottom-4 left-6 rounded-full bg-white/95 px-4 py-1.5 text-[13px] font-semibold text-ink-900">Std. 1st – 10th</span>
              </div>
              <div className="p-8">
                <h3 className="font-display text-2xl font-semibold text-ink-900">{educationPointInfo.name}</h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-ash-500">{educationPointInfo.description}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {['Std. 1st–10th', 'CBSE', 'State Board', 'NCERT', 'Competitive Exams', 'Abacus', 'Spoken English'].map((tag) => (
                    <li key={tag} className="rounded-full bg-teal-500/10 px-3.5 py-1.5 text-[13px] font-medium text-teal-700">{tag}</li>
                  ))}
                </ul>
                <Link to="/education-point" className="btn-primary mt-7">
                  Explore Education Point
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <SectionTitle
            eyebrow="Why Families Choose Us"
            title="Every detail is designed around your child's growth"
            align="center"
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item, i) => (
              <div key={item.title} className="animate-in rounded-3xl border border-ink-900/[0.06] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-soft)]" style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ink-900/[0.06] text-ink-800">
                  <item.icon className="h-6 w-6" strokeWidth={1.8} />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-ink-900">{item.title}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-ash-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs preview */}
      <section className="section-pad">
        <div className="container-page">
          <SectionTitle
            eyebrow="Programs"
            title="From first steps to board exams"
            description="A clear academic path — every stage designed to prepare a child for the next."
          />
          <div className="mt-12">
            <p className="text-[13px] font-semibold uppercase tracking-wide text-ash-500">Future Genius English School</p>
            <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {schoolPrograms.map((p) => (
                <ProgramCard key={p.id} program={p} to="/school" accent="gold" />
              ))}
            </div>
          </div>
          <div className="mt-14">
            <p className="text-[13px] font-semibold uppercase tracking-wide text-ash-500">Gade Madam Education Point</p>
            <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {educationPointPrograms.slice(0, 4).map((p) => (
                <ProgramCard key={p.id} program={p} to="/education-point" accent="teal" />
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link to="/programs" className="btn-ghost">
                View All Programs
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="section-pad bg-ink-950 text-white">
        <div className="container-page">
          <SectionTitle
            eyebrow="Our Teaching Methodology"
            title="A simple, proven five-step approach"
            description="The same rhythm guides every subject and every stage, from Playgroup activities to Std. 10th board revision."
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {methodology.map((step, i) => (
              <div key={step.step} className="animate-in relative rounded-3xl border border-white/10 bg-white/[0.03] p-6" style={{ transitionDelay: `${i * 70}ms` }}>
                <span className="font-display text-3xl font-semibold text-gold-400">{String(i + 1).padStart(2, '0')}</span>
                <div className="mt-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                  <step.icon className="h-5.5 w-5.5 text-gold-300" strokeWidth={1.8} />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-white">{step.step}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-ink-200">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section-pad">
        <div className="container-page">
          <SectionTitle eyebrow="Our Journey So Far" title="Numbers that reflect our commitment" align="center" />
          <div className="mt-14 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {achievements.map((a, i) => (
              <div key={a.label} className="animate-in rounded-3xl bg-white p-8 text-center shadow-[var(--shadow-soft)]" style={{ transitionDelay: `${i * 70}ms` }}>
                <p className="font-display text-4xl font-semibold text-ink-900">{a.value}</p>
                <p className="mt-2 text-[13.5px] leading-snug text-ash-500">{a.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-center text-[12px] text-ash-500">*Illustrative figures — replace with verified data before publishing.</p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <SectionTitle eyebrow="Parent & Student Voices" title="What our school families say" align="center" icon={Star} />
          <div className="mt-14">
            <TestimonialSlider testimonials={testimonials} />
          </div>
        </div>
      </section>

      {/* Announcements */}
      <section className="section-pad">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionTitle eyebrow="Stay Updated" title="Latest Announcements" icon={TrendingUp} />
            <Link to="/events" className="btn-ghost">
              View All Events
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {announcements.map((a) => (
              <AnnouncementCard key={a.id} announcement={a} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
