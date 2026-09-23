import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { programIcons } from '../data/programsData'

export default function ProgramCard({ program, to = '/programs', accent = 'gold' }) {
  const Icon = programIcons[program.id]
  const accentClasses = accent === 'teal'
    ? 'bg-teal-500/10 text-teal-600'
    : 'bg-gold-500/15 text-gold-700'

  return (
    <div className="card-surface group flex h-full flex-col p-7 transition-transform duration-300 hover:-translate-y-1.5">
      <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${accentClasses}`}>
        {Icon && <Icon className="h-6 w-6" strokeWidth={1.8} />}
      </div>
      <h3 className="mt-5 font-display text-lg font-semibold text-ink-900">{program.title}</h3>
      {program.ageGroup && <p className="mt-1 text-[13px] font-medium text-ash-500">{program.ageGroup}</p>}
      <p className="mt-3 text-[14.5px] leading-relaxed text-ash-500">{program.description}</p>
      {program.highlights && (
        <ul className="mt-4 space-y-2">
          {program.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-[13.5px] text-ash-700">
              <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${accent === 'teal' ? 'bg-teal-500' : 'bg-gold-500'}`} />
              {h}
            </li>
          ))}
        </ul>
      )}
      <Link
        to={to}
        className="mt-6 inline-flex items-center gap-1.5 text-[14px] font-semibold text-ink-900 transition-colors group-hover:text-gold-600"
      >
        Learn More
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  )
}
