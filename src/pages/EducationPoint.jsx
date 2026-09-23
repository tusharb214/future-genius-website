import { Link } from 'react-router-dom'
import { ArrowRight, Target } from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import ProgramCard from '../components/ProgramCard'
import CTASection from '../components/CTASection'
import useReveal from '../lib/useReveal'
import useSeo from '../lib/useSeo'
import { images } from '../lib/images'
import { educationPointInfo, educationPointPrograms, educationPointValues } from '../data/educationPointData'

export default function EducationPoint() {
  useSeo({
    title: 'Gade Madam Education Point | Std. 1st to 10th Tuition Classes',
    description: 'Std. 1st to 10th tuition classes at Gade Madam Education Point — CBSE, State Board, NCERT, Semi-English & Marathi medium, competitive exams, Abacus and Spoken English.',
    image: images.groupStudy,
    schema: [
      {
        '@type': 'EducationalOrganization',
        name: educationPointInfo.name,
        description: educationPointInfo.description,
        url: `${window.location.origin}/education-point`,
      },
    ],
  })
  const revealRef = useReveal()

  return (
    <div ref={revealRef}>
      <PageHero
        eyebrow="Gade Madam Education Point"
        title="Academic support that builds real understanding"
        description={educationPointInfo.description}
        image={images.groupStudy}
        imageAlt="Students studying together at Gade Madam Education Point"
      />

      <section className="section-pad !pt-0">
        <div className="container-page">
          <SectionTitle eyebrow="Our Programs" title="Std. 1st to 10th & Beyond" description="Board-aligned academic support alongside Abacus and Spoken English batches." />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {educationPointPrograms.map((p) => (
              <ProgramCard key={p.id} program={p} to="/admission" accent="teal" />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-page">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-center">
            <div className="animate-in order-2 lg:order-1">
              <span className="kicker"><Target className="h-3.5 w-3.5 text-teal-600" /> Our Approach</span>
              <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">Concept clarity, personal attention, exam results</h2>
              <div className="mt-8 space-y-6">
                {educationPointValues.map((v) => (
                  <div key={v.title} className="border-l-2 border-teal-500 pl-5">
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
            <div className="animate-in order-1 overflow-hidden rounded-[2rem] shadow-[var(--shadow-lift)] lg:order-2">
              <img src={images.studentsWriting} alt="A student practising writing during a tuition class" className="h-96 w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
