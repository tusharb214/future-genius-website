import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import ProgramCard from '../components/ProgramCard'
import FacilityCard from '../components/FacilityCard'
import CTASection from '../components/CTASection'
import useReveal from '../lib/useReveal'
import useSeo from '../lib/useSeo'
import { images } from '../lib/images'
import { schoolPrograms } from '../data/schoolData'
import { educationPointPrograms } from '../data/educationPointData'
import { Monitor, Puzzle, BookMarked, Home as HomeIcon, HeartHandshake, ShieldCheck } from 'lucide-react'

const facilities = [
  { icon: Monitor, title: 'Smart Learning Environment', description: 'Well-equipped classrooms that support both traditional and activity-based teaching.' },
  { icon: Puzzle, title: 'Activity-Based Learning', description: 'Regular hands-on sessions that turn abstract concepts into memorable experiences.' },
  { icon: BookMarked, title: 'Reading & Learning Resources', description: 'A steady supply of books, worksheets and practice material for every level.' },
  { icon: HomeIcon, title: 'Comfortable Classrooms', description: 'Clean, well-lit and age-appropriate seating for younger and older students alike.' },
  { icon: HeartHandshake, title: 'Personal Attention', description: 'Small batch sizes so no student is left behind or overlooked.' },
  { icon: ShieldCheck, title: 'Safe Environment', description: 'A secure campus with clear supervision at every stage of the school day.' },
]

export default function Programs() {
  useSeo({
    title: 'Programs | School, Tuition, Abacus & Spoken English',
    description: 'All programs offered across Future Genius English School and Gade Madam Education Point — Playgroup to UKG, and Std. 1st to 10th including CBSE, State Board, NCERT, Abacus and Spoken English.',
    image: images.graduationKids,
  })
  const revealRef = useReveal()

  return (
    <div ref={revealRef}>
      <PageHero
        eyebrow="Programs"
        title="A complete academic path, stage by stage"
        description="Every program is designed around what a child needs at that exact age — from first words to board-exam strategy."
        image={images.graduationKids}
        imageAlt="Students celebrating an academic milestone"
      />

      <section className="section-pad !pt-0">
        <div className="container-page">
          <SectionTitle eyebrow="Future Genius English School" title="Playgroup – UKG" />
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {schoolPrograms.map((p) => (
              <ProgramCard key={p.id} program={p} to="/school" accent="gold" />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-page">
          <SectionTitle eyebrow="Gade Madam Education Point" title="Std. 1st – 10th & Skill Programs" />
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {educationPointPrograms.map((p) => (
              <ProgramCard key={p.id} program={p} to="/education-point" accent="teal" />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <SectionTitle eyebrow="Facilities" title="What supports every classroom" align="center" />
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {facilities.map((f) => (
              <FacilityCard key={f.title} {...f} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
