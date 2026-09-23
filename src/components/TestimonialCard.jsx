import { Star, Quote } from 'lucide-react'

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="card-surface flex h-full flex-col p-8">
      <Quote className="h-7 w-7 text-gold-400" />
      <p className="mt-4 flex-1 text-[15px] leading-relaxed text-ash-700">“{testimonial.text}”</p>
      <div className="mt-6 flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${i < testimonial.rating ? 'fill-gold-500 text-gold-500' : 'text-ink-100'}`}
          />
        ))}
      </div>
      <div className="mt-3">
        <p className="font-display text-[15px] font-semibold text-ink-900">{testimonial.name}</p>
        <p className="text-[13px] text-ash-500">{testimonial.role}</p>
      </div>
    </div>
  )
}
