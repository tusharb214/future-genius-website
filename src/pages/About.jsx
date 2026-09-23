import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import CTASection from '../components/CTASection'
import useReveal from '../lib/useReveal'
import useSeo from '../lib/useSeo'
import { images } from '../lib/images'
import { Compass, Eye, Target, HeartHandshake, BookOpenCheck, Users, ShieldCheck, Sparkles } from 'lucide-react'

const values = [
  { icon: HeartHandshake, title: 'Care', description: 'Every child and student is treated as an individual, not a number in a batch.' },
  { icon: BookOpenCheck, title: 'Clarity', description: 'We simplify concepts until they are genuinely understood, not just memorised.' },
  { icon: ShieldCheck, title: 'Integrity', description: 'Honest communication with parents about progress, strengths and areas to improve.' },
  { icon: Sparkles, title: 'Growth', description: 'A belief that every learner can improve with the right guidance and effort.' },
]

const whyParents = [
  'Two connected institutions covering Playgroup through Std. 10th',
  'Small batch sizes for genuine personal attention',
  'Teachers experienced in both CBSE and State Board curricula',
  'Regular parent communication on progress and attendance',
  'A safe, disciplined and activity-rich daily environment',
]

export default function About() {
  useSeo({
    title: 'About Us | Future Genius English School & Gade Madam Education Point',
    description: 'The story, vision, mission and values behind Future Genius English School and Gade Madam Education Point.',
    image: images.aboutStory,
  })
  const revealRef = useReveal()

  return (
    <div ref={revealRef}>
      <PageHero
        eyebrow="About Us"
        title="Two institutions, one commitment to every child"
        description="Future Genius English School and Gade Madam Education Point were founded to give students in our community a complete academic journey — from their very first classroom to board-exam success."
        image={images.aboutStory}
        imageAlt="A teacher and students in a warm classroom setting"
      />

      <section className="section-pad !pt-0">
        <div className="container-page">
          <SectionTitle eyebrow="Our Story" title="How it began" />
          <p className="mt-6 max-w-3xl text-[15.5px] leading-relaxed text-ash-500">
            [Placeholder] Gade Madam Education Point began as a small tuition batch run out of a single
            classroom, focused on helping local students strengthen their fundamentals in Mathematics and
            Science. As demand grew, Future Genius English School was founded to serve the same families
            from their children's very first years of schooling — Playgroup through UKG — before they moved
            on to Std. 1st. Today, the two institutions work as connected stages of one academic journey.
            Replace this section with your school's real founding story.
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-page grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div className="animate-in card-surface p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ink-900/[0.06] text-ink-800">
              <Eye className="h-6 w-6" strokeWidth={1.8} />
            </div>
            <h3 className="mt-5 font-display text-xl font-semibold text-ink-900">Our Vision</h3>
            <p className="mt-3 text-[14.5px] leading-relaxed text-ash-500">
              To be the most trusted name in our community for early childhood education and academic
              tuition — a place where every child's potential is recognised and developed.
            </p>
          </div>
          <div className="animate-in card-surface p-8" style={{ transitionDelay: '80ms' }}>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ink-900/[0.06] text-ink-800">
              <Target className="h-6 w-6" strokeWidth={1.8} />
            </div>
            <h3 className="mt-5 font-display text-xl font-semibold text-ink-900">Our Mission</h3>
            <p className="mt-3 text-[14.5px] leading-relaxed text-ash-500">
              To provide activity-based early education and concept-focused academic support that builds
              confident, capable, well-rounded students — from Playgroup to Std. 10th.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <SectionTitle eyebrow="Our Values" title="What guides every classroom decision" align="center" icon={Compass} />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="animate-in rounded-3xl border border-ink-900/[0.06] bg-white p-7 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-500/15 text-gold-700">
                  <v.icon className="h-6 w-6" strokeWidth={1.8} />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink-900">{v.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-ash-500">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-page grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-center">
          <div className="animate-in overflow-hidden rounded-[2rem] shadow-[var(--shadow-lift)]">
            <img src={images.library} alt="A well-stocked reading and learning resource area" className="h-96 w-full object-cover" />
          </div>
          <div className="animate-in">
            <span className="kicker"><Users className="h-3.5 w-3.5 text-gold-600" /> Why Parents Choose Us</span>
            <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">Trusted by families for over a decade</h2>
            <ul className="mt-8 space-y-4">
              {whyParents.map((point) => (
                <li key={point} className="flex items-start gap-3 text-[14.5px] text-ash-700">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
