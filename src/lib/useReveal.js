import { useEffect, useRef } from 'react'

/**
 * Adds the `is-visible` class to an element once it scrolls into view.
 * Pairs with the `.animate-in` utility class defined in index.css.
 */
export default function useReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const targets = node.classList?.contains('animate-in')
      ? [node]
      : Array.from(node.querySelectorAll('.animate-in'))

    if (targets.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px', ...options }
    )

    targets.forEach((t) => observer.observe(t))
    return () => observer.disconnect()
  }, [])

  return ref
}
