import { Megaphone } from 'lucide-react'

export default function AnnouncementCard({ announcement }) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-ink-900/[0.06] bg-white p-5 transition-shadow duration-300 hover:shadow-[var(--shadow-soft)]">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold-500/15 text-gold-700">
        <Megaphone className="h-5 w-5" />
      </div>
      <div>
        <div className="flex flex-wrap items-center gap-2 text-[12px]">
          <span className="rounded-full bg-ink-900/[0.06] px-2.5 py-1 font-semibold text-ink-700">
            {announcement.category}
          </span>
          <span className="text-ash-500">{announcement.date}</span>
        </div>
        <p className="mt-2 text-[14.5px] font-medium text-ink-900">{announcement.title}</p>
      </div>
    </div>
  )
}
