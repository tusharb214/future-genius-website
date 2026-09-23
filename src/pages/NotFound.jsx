import { Link } from 'react-router-dom'
import { Home, ArrowRight, Compass } from 'lucide-react'
import useSeo from '../lib/useSeo'

export default function NotFound() {
  useSeo({
    title: 'Page Not Found',
    description: 'The page you are looking for could not be found.',
    robots: 'noindex, follow',
    breadcrumb: false,
  })

  return (
    <div className="section-pad flex min-h-[70vh] items-center">
      <div className="container-page text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-ink-900/[0.06] text-ink-800">
          <Compass className="h-8 w-8" strokeWidth={1.8} />
        </div>
        <p className="mt-6 font-display text-6xl font-semibold text-ink-900">404</p>
        <h1 className="mt-3 text-2xl font-semibold">We couldn't find that page</h1>
        <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-ash-500">
          The page you're looking for may have been moved or no longer exists. Let's get you back on track.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link to="/" className="btn-primary">
            <Home className="h-4 w-4" />
            Back to Home
          </Link>
          <Link to="/admission" className="btn-ghost">
            Admission Enquiry
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
