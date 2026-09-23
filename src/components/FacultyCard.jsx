export default function FacultyCard({ member }) {
  return (
    <div className="card-surface group overflow-hidden transition-transform duration-300 hover:-translate-y-1.5">
      <div className="relative h-64 overflow-hidden">
        <img
          src={member.photo}
          alt={`Portrait of ${member.name}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-ink-950/50 to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="font-display text-[17px] font-semibold text-ink-900">{member.name}</h3>
        <p className="mt-1 text-[13.5px] font-medium text-gold-600">{member.subject}</p>
        <p className="mt-3 text-[13.5px] text-ash-500">{member.qualification}</p>
        <p className="text-[13.5px] text-ash-500">{member.experience}</p>
        <p className="mt-3 text-[14px] leading-relaxed text-ash-700">{member.bio}</p>
      </div>
    </div>
  )
}
