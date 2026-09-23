import { images } from '../lib/images'

// EDIT ME — gallery images. `category` powers the filter buttons.
export const galleryCategories = ['All', 'School', 'Classroom', 'Activities', 'Events', 'Education Point']

export const galleryImages = [
  { id: 1, src: images.gallerySchool1, alt: 'Teacher with pre-primary students', category: 'School' },
  { id: 2, src: images.gallerySchool2, alt: 'Children arriving at Future Genius English School', category: 'School' },
  { id: 3, src: images.galleryClassroom1, alt: 'A bright, well-equipped classroom', category: 'Classroom' },
  { id: 4, src: images.galleryClassroom2, alt: 'Students seated during a tuition class', category: 'Classroom' },
  { id: 5, src: images.galleryActivity1, alt: 'Children painting during an activity session', category: 'Activities' },
  { id: 6, src: images.galleryActivity2, alt: 'Toddlers playing with building blocks', category: 'Activities' },
  { id: 7, src: images.galleryEvent1, alt: 'Annual day gathering on stage', category: 'Events' },
  { id: 8, src: images.galleryEvent2, alt: 'Students taking part in a school activity', category: 'Events' },
  { id: 9, src: images.galleryEdu1, alt: 'Students in a group study session', category: 'Education Point' },
  { id: 10, src: images.galleryEdu2, alt: 'A student practising writing at the education point', category: 'Education Point' },
  { id: 11, src: images.readingCircle, alt: 'A reading circle activity for young children', category: 'Activities' },
  { id: 12, src: images.scienceLab, alt: 'Students during a science activity', category: 'Events' },
]

export default galleryImages
