import { GraduationCap, BookOpenCheck, Sparkles, Users, Calculator, Mic2, Palette, School } from 'lucide-react'
import { schoolPrograms } from './schoolData'
import { educationPointPrograms } from './educationPointData'

// EDIT ME — icon mapping used on the Programs page & home page program cards
export const programIcons = {
  playgroup: Sparkles,
  nursery: Palette,
  lkg: BookOpenCheck,
  ukg: GraduationCap,
  primary: BookOpenCheck,
  middle: Users,
  secondary: GraduationCap,
  boards: School,
  medium: Users,
  competitive: GraduationCap,
  abacus: Calculator,
  'spoken-english': Mic2,
}

export const allPrograms = {
  school: schoolPrograms,
  educationPoint: educationPointPrograms,
}

export default allPrograms
