import { useState } from 'react'
import { X, CalendarDays } from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import EventCard from '../components/EventCard'
import AnnouncementCard from '../components/AnnouncementCard'
import CTASection from '../components/CTASection'
import useReveal from '../lib/useReveal'
import useSeo from '../lib/useSeo'
import { images } from '../lib/images'
import { events, announcements } from '../data/eventsData'

export default function Events() {
  useSeo({
    title: 'Events & Announcements | Future Genius English School',
    description: 'Upcoming and recent events, announcements and activities at Future Genius English School and Gade Madam Education Point.',
    image: images.eventCultural,
  })
  const revealRef = useReveal()
  const [selected, setSelected] = useState(null)

  return (
    <div ref={revealRef}>
      <PageHero
        eyebrow="Events"
        title="Celebrating learning beyond the classroom"
        description="From annual gatherings to science fairs, our calendar keeps students, teachers and parents connected."
        image={images.eventCultural}
        imageAlt="A cultural event with student performances"
      />

      <section className="section-pad !pt-0">
        <div className="container-page">
          <SectionTitle eyebrow="Upcoming & Recent" title="Events Calendar" />
          <div className="mt-10 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <EventCard key={event.id} event={event} onViewDetails={setSelected} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-page">
          <SectionTitle eyebrow="Announcements" title="What's happening right now" />
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {announcements.map((a) => (
              <AnnouncementCard key={a.id} announcement={a} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />

      {selected && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-950/70 p-4 backdrop-blur-sm"
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-3xl bg-white shadow-2xl"
          >
            <div className="relative h-52 overflow-hidden rounded-t-3xl">
              <img src={selected.image} alt={selected.title} className="h-full w-full object-cover" />
              <button
                aria-label="Close"
                onClick={() => setSelected(null)}
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-ink-900"
              >
                <X className="h-4.5 w-4.5" />
              </button>
            </div>
            <div className="p-7">
              <div className="flex items-center gap-2 text-[13px] font-medium text-gold-600">
                <CalendarDays className="h-4 w-4" />
                {selected.date}
              </div>
              <h3 className="mt-2 font-display text-xl font-semibold text-ink-900">{selected.title}</h3>
              <p className="mt-3 text-[14.5px] leading-relaxed text-ash-500">{selected.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
