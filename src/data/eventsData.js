import { images } from '../lib/images'

// EDIT ME — upcoming / recent events
export const events = [
  {
    id: 1,
    title: 'Annual Gathering',
    date: '14 December 2026',
    image: images.eventAnnual,
    description: 'A full evening of performances, prize distribution and celebration with families from both Future Genius and Gade Madam Education Point.',
  },
  {
    id: 2,
    title: 'Parents Meeting',
    date: '05 October 2026',
    image: images.eventMeeting,
    description: 'A one-on-one session for parents to discuss progress reports and plan the term ahead with class teachers.',
  },
  {
    id: 3,
    title: 'Educational Activity Day',
    date: '22 October 2026',
    image: images.eventActivity,
    description: 'Hands-on learning stations covering art, craft and early-numeracy games for Playgroup to UKG students.',
  },
  {
    id: 4,
    title: 'Science Activity Fair',
    date: '11 November 2026',
    image: images.eventScience,
    description: 'Std. 6th–10th students present working models and simple experiments as part of practical learning week.',
  },
  {
    id: 5,
    title: 'Cultural Event',
    date: '26 January 2027',
    image: images.eventCultural,
    description: 'A Republic Day cultural programme featuring student performances, recitations and a flag-hoisting ceremony.',
  },
]

// EDIT ME — announcements shown as compact cards
export const announcements = [
  { id: 1, title: 'Admissions Open for 2026–27', category: 'Admission', date: 'Ongoing' },
  { id: 2, title: 'New Batch Starting — Std. 8th CBSE', category: 'Academics', date: '01 Nov 2026' },
  { id: 3, title: 'Parent-Teacher Meeting Scheduled', category: 'School', date: '05 Oct 2026' },
  { id: 4, title: 'Exam Preparation Batch (Std. 10th)', category: 'Academics', date: '15 Nov 2026' },
  { id: 5, title: 'New Spoken English Batch Forming', category: 'Education Point', date: '20 Oct 2026' },
]

export default { events, announcements }
