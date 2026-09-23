import PageHero from '../components/PageHero'
import Gallery from '../components/Gallery'
import CTASection from '../components/CTASection'
import useReveal from '../lib/useReveal'
import useSeo from '../lib/useSeo'
import { images } from '../lib/images'
import galleryImages from '../data/galleryData'

export default function GalleryPage() {
  useSeo({
    title: 'Photo Gallery | Future Genius English School & Gade Madam Education Point',
    description: 'Photo gallery of Future Genius English School and Gade Madam Education Point — classrooms, activities and events.',
    image: images.readingCircle,
  })
  const revealRef = useReveal()

  return (
    <div ref={revealRef}>
      <PageHero
        eyebrow="Gallery"
        title="A glimpse into everyday learning"
        description="Browse moments from our classrooms, activities and events. Filter by category or click any photo to view it larger."
        image={images.readingCircle}
        imageAlt="A reading circle activity with young children"
      />

      <section className="section-pad !pt-0">
        <div className="container-page">
          <Gallery images={galleryImages} />
        </div>
      </section>

      <CTASection />
    </div>
  )
}
