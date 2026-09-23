export default function PageHero({ eyebrow, title, description, image, imageAlt }) {
  return (
    <section className="section-pad !pb-14">
      <div className="container-page">
        <div className={`grid grid-cols-1 gap-10 ${image ? 'lg:grid-cols-[1.1fr_1fr] lg:items-center' : ''}`}>
          <div className="fade-up">
            {eyebrow && <span className="kicker">{eyebrow}</span>}
            <h1 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">{title}</h1>
            {description && <p className="mt-5 max-w-xl text-[15.5px] leading-relaxed text-ash-500">{description}</p>}
          </div>
          {image && (
            <div className="overflow-hidden rounded-[2rem] shadow-[var(--shadow-lift)] fade-up" style={{ animationDelay: '120ms' }}>
              <img src={image} alt={imageAlt || ''} className="h-72 w-full object-cover sm:h-96" />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
