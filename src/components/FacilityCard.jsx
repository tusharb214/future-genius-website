export default function FacilityCard({ icon: Icon, title, description }) {
  return (
    <div className="card-surface flex items-start gap-4 p-6 transition-transform duration-300 hover:-translate-y-1">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ink-900/[0.06] text-ink-800">
        <Icon className="h-5.5 w-5.5" strokeWidth={1.8} />
      </div>
      <div>
        <h3 className="font-display text-[15.5px] font-semibold text-ink-900">{title}</h3>
        <p className="mt-1.5 text-[14px] leading-relaxed text-ash-500">{description}</p>
      </div>
    </div>
  )
}
