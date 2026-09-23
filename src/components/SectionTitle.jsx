export default function SectionTitle({ eyebrow, title, description, align = 'left', icon: Icon }) {
  return (
    <div className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''} animate-in`}>
      {eyebrow && (
        <span className="kicker">
          {Icon && <Icon className="h-3.5 w-3.5" />}
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-[15.5px] leading-relaxed text-ash-500">{description}</p>}
    </div>
  )
}
