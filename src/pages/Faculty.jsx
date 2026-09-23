import { useState } from 'react'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import FacultyCard from '../components/FacultyCard'
import CTASection from '../components/CTASection'
import useReveal from '../lib/useReveal'
import useSeo from '../lib/useSeo'
import { images } from '../lib/images'
import facultyMembers from '../data/facultyData'

const filters = [
  { id: 'all', label: 'All Faculty' },
  { id: 'school', label: 'Future Genius English School' },
  { id: 'educationPoint', label: 'Gade Madam Education Point' },
]

export default function Faculty() {
  useSeo({
    title: 'Our Faculty | Future Genius English School & Gade Madam Education Point',
    description: 'Meet the experienced educators of Future Genius English School and Gade Madam Education Point — qualified teachers across early-childhood and Std. 1st–10th academics.',
    image: images.teacherStudent,
  })
  const revealRef = useReveal()
  const [filter, setFilter] = useState('all')

  const visible = filter === 'all' ? facultyMembers : facultyMembers.filter((f) => f.branch === filter)

  return (
    <div ref={revealRef}>
      <PageHero
        eyebrow="Our Faculty"
        title="Educators who know every child by name"
        description="Qualified, experienced teachers across early-childhood education and Std. 1st–10th academics."
        image={images.teacherStudent}
        imageAlt="A teacher guiding a student one-on-one"
      />

      <section className="section-pad !pt-0">
        <div className="container-page">
          <div className="flex flex-wrap gap-2.5">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`rounded-full px-5 py-2.5 text-[13.5px] font-medium transition-all duration-200 ${
                  filter === f.id ? 'bg-ink-900 text-white' : 'border border-ink-900/10 bg-white text-ash-700 hover:border-ink-900/25'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((member) => (
              <FacultyCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
