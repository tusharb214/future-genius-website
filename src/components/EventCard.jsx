import { CalendarDays } from 'lucide-react'

export default function EventCard({ event, onViewDetails }) {
  return (
    <div className="card-surface group flex h-full flex-col overflow-hidden transition-transform duration-300 hover:-translate-y-1.5">
      <div className="relative h-48 overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-2 text-[13px] font-medium text-gold-600">
          <CalendarDays className="h-4 w-4" />
          {event.date}
        </div>
        <h3 className="mt-2 font-display text-[17px] font-semibold text-ink-900">{event.title}</h3>
        <p className="mt-2 flex-1 text-[14px] leading-relaxed text-ash-500">{event.description}</p>
        <button
          onClick={() => onViewDetails?.(event)}
          className="mt-5 self-start text-[14px] font-semibold text-ink-900 underline decoration-gold-500 decoration-2 underline-offset-4 transition-colors hover:text-gold-600"
        >
          View Details
        </button>
      </div>
    </div>
  )
}
