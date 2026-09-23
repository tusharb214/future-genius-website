/**
 * Centralised image bank — swap any URL here to update imagery sitewide.
 * Using hosted stock photography as placeholders; replace with real
 * campus photography before going live.
 */
const u = (id, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`

export const images = {
  heroChildren: u('photo-1503676260728-1c00da094a0b', 1400),
  heroChildren2: u('photo-1544717305-2782549b5136', 1400),
  classroomKids: u('photo-1509062522246-3755977927d7', 1200),
  playgroupPaint: u('photo-1543269664-56d93c1b41a6', 1200),
  toddlerBlocks: u('photo-1587616211892-b6cb490bc0c1', 1200),
  readingCircle: u('photo-1567057419565-4349c49d8a04', 1200),
  teacherStudent: u('photo-1580582932707-520aed937b7b', 1200),
  tuitionClass: u('photo-1571260899304-425eee4c7efc', 1200),
  studentsWriting: u('photo-1523240795612-9a054b0db644', 1200),
  groupStudy: u('photo-1522202176988-66273c2fd55f', 1200),
  scienceLab: u('photo-1532094349884-543bc11b234d', 1200),
  library: u('photo-1521587760476-6c12a4b040da', 1200),
  graduationKids: u('photo-1594608661623-aa0bd3a69799', 1200),
  teacherPortraitF1: u('photo-1580489944761-15a19d654956', 600),
  teacherPortraitF2: u('photo-1573496359142-b8d87734a5a2', 600),
  teacherPortraitM1: u('photo-1519085360753-af0119f7cbe7', 600),
  teacherPortraitF3: u('photo-1524504388940-b1c1722653e1', 600),
  teacherPortraitM2: u('photo-1500648767791-00dcc994a43e', 600),
  teacherPortraitF4: u('photo-1487412720507-e7ab37603c6f', 600),
  eventAnnual: u('photo-1541339907198-e08756dedf3f', 1200),
  eventMeeting: u('photo-1577896851231-70ef18881754', 1200),
  eventActivity: u('photo-1587653263995-422546a7a569', 1200),
  eventScience: u('photo-1567168539593-59673ababb95', 1200),
  eventCultural: u('photo-1508700115892-45ecd05ae2ad', 1200),
  gallerySchool1: u('photo-1580582932707-520aed937b7b', 900),
  gallerySchool2: u('photo-1503676260728-1c00da094a0b', 900),
  galleryClassroom1: u('photo-1509062522246-3755977927d7', 900),
  galleryClassroom2: u('photo-1571260899304-425eee4c7efc', 900),
  galleryActivity1: u('photo-1543269664-56d93c1b41a6', 900),
  galleryActivity2: u('photo-1587616211892-b6cb490bc0c1', 900),
  galleryEvent1: u('photo-1541339907198-e08756dedf3f', 900),
  galleryEvent2: u('photo-1587653263995-422546a7a569', 900),
  galleryEdu1: u('photo-1522202176988-66273c2fd55f', 900),
  galleryEdu2: u('photo-1523240795612-9a054b0db644', 900),
  aboutStory: u('photo-1588072432836-e10032774350', 1200),
  ctaChildren: u('photo-1560785496-3c9d27877182', 1400),
}
