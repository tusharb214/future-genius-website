import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles } from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import ProgramCard from '../components/ProgramCard'
import CTASection from '../components/CTASection'
import useReveal from '../lib/useReveal'
import useSeo from '../lib/useSeo'
import { images } from '../lib/images'
import { schoolInfo, schoolPrograms, schoolValues } from '../data/schoolData'

export default function School() {
  useSeo({
    title: 'Future Genius English School | Playgroup to UKG',
    description: 'Playgroup, Nursery, LKG and UKG programs at Future Genius English School — activity-based early childhood education in a safe environment.',
    image: images.heroChildren2,
    schema: [
      {
        '@type': ['School', 'EducationalOrganization'],
        name: schoolInfo.name,
        description: schoolInfo.description,
        url: `${window.location.origin}/school`,
      },
    ],
  })
  const revealRef = useReveal()

  return (
    <div ref={revealRef}>
      <PageHero
        eyebrow="Future Genius English School"
        title="Early years shape a lifetime of learning"
        description={schoolInfo.description}
        image={images.heroChildren2}
        imageAlt="Children engaged in a classroom activity at Future Genius English School"
      />

      <section className="section-pad !pt-0">
        <div className="container-page">
          <SectionTitle eyebrow="Our Programs" title="Playgroup to UKG" description="A structured, age-appropriate path for every young learner." />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {schoolPrograms.map((p) => (
              <ProgramCard key={p.id} program={p} to="/admission" accent="gold" />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-page">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-center">
            <div className="animate-in overflow-hidden rounded-[2rem] shadow-[var(--shadow-lift)]">
              <img src={images.classroomKids} alt="Young students in an activity-based classroom" className="h-96 w-full object-cover" />
            </div>
            <div className="animate-in">
              <span className="kicker"><Sparkles className="h-3.5 w-3.5 text-gold-600" /> What Makes Us Different</span>
              <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">A foundation built on care, structure and play</h2>
              <div className="mt-8 space-y-6">
                {schoolValues.map((v) => (
                  <div key={v.title} className="border-l-2 border-gold-400 pl-5">
                    <h3 className="font-display text-[16px] font-semibold text-ink-900">{v.title}</h3>
                    <p className="mt-1.5 text-[14.5px] leading-relaxed text-ash-500">{v.description}</p>
                  </div>
                ))}
              </div>
              <Link to="/admission" className="btn-primary mt-9">
                Admission Enquiry
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
