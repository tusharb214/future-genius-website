import { images } from '../lib/images'

// EDIT ME — Gade Madam Education Point core content
export const educationPointInfo = {
  name: 'Gade Madam Education Point',
  tagline: 'Academic Support That Builds Real Understanding',
  short: 'Std. 1st – 10th Tuition',
  established: '2011',
  description:
    'A dedicated tuition centre for Std. 1st to 10th offering CBSE, State Board and NCERT support in Semi-English and Marathi medium, along with Abacus and Spoken English batches.',
}

export const educationPointPrograms = [
  {
    id: 'primary',
    title: 'Std. 1st – 4th',
    description: 'Foundation-building classes focused on reading fluency, number sense and consistent homework support.',
    highlights: ['Concept clarity', 'Daily practice sheets', 'Parent progress updates'],
  },
  {
    id: 'middle',
    title: 'Std. 5th – 7th',
    description: 'Subject-wise teaching across CBSE, State Board and NCERT syllabi with regular concept tests.',
    highlights: ['Subject-wise experts', 'Weekly tests', 'Doubt-solving sessions'],
  },
  {
    id: 'secondary',
    title: 'Std. 8th – 10th',
    description: 'Intensive board-exam preparation with structured revision, model papers and personal mentoring.',
    highlights: ['Board exam strategy', 'Model question papers', 'One-on-one mentoring'],
  },
  {
    id: 'boards',
    title: 'CBSE / State Board / NCERT',
    description: 'Curriculum-matched teaching across all major boards, so every child gets syllabus-accurate guidance.',
    highlights: ['Board-specific material', 'Updated syllabus tracking', 'Sample paper practice'],
  },
  {
    id: 'medium',
    title: 'Semi-English & Marathi Medium',
    description: 'Instruction available in Semi-English and Marathi medium so every child learns in their strongest language.',
    highlights: ['Bilingual explanations', 'Medium-matched notes', 'Vocabulary building'],
  },
  {
    id: 'competitive',
    title: 'Competitive Exam Preparation',
    description: 'Early groundwork for scholarship and competitive exams through logical reasoning and speed practice.',
    highlights: ['Reasoning & aptitude', 'Timed mock tests', 'Scholarship exam prep'],
  },
  {
    id: 'abacus',
    title: 'Abacus',
    description: 'Abacus training to sharpen mental arithmetic, concentration and calculation speed.',
    highlights: ['Mental maths', 'Concentration building', 'Level-wise certification'],
  },
  {
    id: 'spoken-english',
    title: 'Spoken English',
    description: 'Confidence-building spoken English sessions covering vocabulary, grammar and everyday conversation.',
    highlights: ['Conversation practice', 'Grammar fundamentals', 'Public speaking confidence'],
  },
]

export const educationPointValues = [
  {
    title: 'Academic Support',
    description: 'Structured, syllabus-aligned teaching that complements what children learn in school.',
  },
  {
    title: 'Concept Clarity',
    description: 'Every topic is broken down until the fundamentals are genuinely understood, not memorised.',
  },
  {
    title: 'Personal Attention',
    description: 'Small batches mean every student is tracked, questioned and encouraged individually.',
  },
  {
    title: 'Exam & Board Preparation',
    description: 'Focused revision plans, mock tests and past-paper practice for board and school exams.',
  },
]

export const educationPointGallery = [
  { src: images.galleryEdu1, alt: 'Students studying together at Gade Madam Education Point', category: 'Education Point' },
  { src: images.galleryEdu2, alt: 'A student writing in class at the education point', category: 'Education Point' },
]

export default { educationPointInfo, educationPointPrograms, educationPointValues, educationPointGallery }
