import { images } from '../lib/images'

// EDIT ME — Future Genius English School core content
export const schoolInfo = {
  name: 'Future Genius English School',
  tagline: 'Building Strong Foundations for a Bright Future',
  short: 'Pre-primary',
  established: '2014',
  description:
    'A warm, English-medium pre-primary school for children from Playgroup to UKG, where early learning is playful, structured and rooted in real developmental milestones.',
}

export const schoolPrograms = [
  {
    id: 'playgroup',
    title: 'Playgroup',
    ageGroup: 'Age 1.5 – 2.5 years',
    description:
      'A gentle first step away from home — sensory play, rhymes and free movement build comfort, trust and early social skills.',
    highlights: ['Sensory & motor play', 'Rhymes and storytelling', 'Toilet & self-help training'],
  },
  {
    id: 'nursery',
    title: 'Nursery',
    ageGroup: 'Age 2.5 – 3.5 years',
    description:
      'Structured play-based learning introduces shapes, colours and sounds while nurturing curiosity and independence.',
    highlights: ['Pre-writing readiness', 'Colours, shapes & sorting', 'Group activities'],
  },
  {
    id: 'lkg',
    title: 'LKG',
    ageGroup: 'Age 3.5 – 4.5 years',
    description:
      'Lower Kindergarten builds phonics, number sense and fine motor control through activity-based classroom routines.',
    highlights: ['Phonics & early reading', 'Number recognition 1–50', 'Art, craft & music'],
  },
  {
    id: 'ukg',
    title: 'UKG',
    ageGroup: 'Age 4.5 – 5.5 years',
    description:
      'Upper Kindergarten prepares every child for Std. 1st with confident reading, writing and classroom discipline.',
    highlights: ['Reading & sentence writing', 'Basic arithmetic', 'School-readiness skills'],
  },
]

export const schoolValues = [
  {
    title: 'Early Childhood Education',
    description: 'A curriculum designed around how young children actually learn — through play, repetition and discovery.',
  },
  {
    title: 'Safe Environment',
    description: 'A secure, nurturing campus with trained caregivers and childproofed classrooms at every stage.',
  },
  {
    title: 'Activity-Based Learning',
    description: 'Concepts are introduced through hands-on activities, not rote memorisation.',
  },
  {
    title: 'Personality Development',
    description: 'Daily routines build confidence, courtesy and communication from the very first year.',
  },
]

export const schoolGallery = [
  { src: images.gallerySchool1, alt: 'Children in a Future Genius classroom activity', category: 'School' },
  { src: images.gallerySchool2, alt: 'Teacher guiding young students at Future Genius', category: 'School' },
]

export default { schoolInfo, schoolPrograms, schoolValues, schoolGallery }
