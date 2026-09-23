import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import TestimonialCard from './TestimonialCard'

export default function TestimonialSlider({ testimonials }) {
  const [index, setIndex] = useState(0)
  const [perView, setPerView] = useState(1)

  useEffect(() => {
    const compute = () => setPerView(window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1)
    compute()
    window.addEventListener('resize', compute)
    return () => window.removeEventListener('resize', compute)
  }, [])

  const maxIndex = Math.max(0, testimonials.length - perView)

  useEffect(() => {
    if (index > maxIndex) setIndex(maxIndex)
  }, [maxIndex, index])

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i >= maxIndex ? 0 : i + 1))
    }, 5500)
    return () => clearInterval(t)
  }, [maxIndex])

  return (
    <div>
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * (100 / perView)}%)` }}
        >
          {testimonials.map((t) => (
            <div key={t.id} className="shrink-0 px-3" style={{ width: `${100 / perView}%` }}>
              <TestimonialCard testimonial={t} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          type="button"
          aria-label="Previous testimonials"
          onClick={() => setIndex((i) => Math.max(0, i - 1))}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-900/10 bg-white text-ink-900 transition-colors hover:bg-ink-900 hover:text-white"
        >
          <ChevronLeft className="h-4.5 w-4.5" />
        </button>
        <div className="flex gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? 'w-6 bg-gold-500' : 'w-2 bg-ink-900/15'
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          aria-label="Next testimonials"
          onClick={() => setIndex((i) => Math.min(maxIndex, i + 1))}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-900/10 bg-white text-ink-900 transition-colors hover:bg-ink-900 hover:text-white"
        >
          <ChevronRight className="h-4.5 w-4.5" />
        </button>
      </div>
    </div>
  )
}
