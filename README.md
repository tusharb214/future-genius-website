# Future Genius English School & Gade Madam Education Point

A premium, frontend-only static education website built with **React + Vite + Tailwind CSS + React Router + Lucide React**.

## Tech stack (no backend, no CMS)
- React.js (JavaScript, not TypeScript)
- Vite
- Tailwind CSS v4
- React Router
- Lucide React icons

## Getting started

```bash
npm install
npm run dev       # start local dev server
npm run build     # production build → dist/
npm run preview   # preview the production build
```

Requires Node.js 18+.

## Project structure

```
src/
  components/   Reusable UI components (Navbar, Footer, Hero, cards, Gallery, etc.)
  pages/        One file per route (Home, School, EducationPoint, Programs, Faculty,
                GalleryPage, Achievements, Events, About, Contact, Admission, NotFound)
  data/         All editable content lives here — schoolData.js, educationPointData.js,
                programsData.js, facultyData.js, galleryData.js, eventsData.js,
                testimonialsData.js. Edit these files to change site content without
                touching any component/page code.
  lib/          Small helpers: useReveal (scroll animations), useSeo (page title/meta
                tags), images.js (central image bank — swap URLs here to replace
                all placeholder photography).
```

## Editing content
Everything a client would want to change — school names, program descriptions,
faculty bios, testimonials, events, announcements, achievement numbers, contact
details — lives in `src/data/*.js` as plain JS objects/arrays. No JSX editing
required for routine content updates.

Placeholder values that MUST be replaced before launch are marked with
`[Placeholder]`, `XXXXX`, or an `EDIT ME` comment:
- Contact details in `Footer.jsx` and `pages/Contact.jsx`
- Achievement statistics (clearly marked as illustrative, not verified)
- Faculty photos/bios in `data/facultyData.js`
- Testimonials in `data/testimonialsData.js`
- All stock imagery in `lib/images.js` (currently Unsplash placeholders)

## Forms
`Contact.jsx` and `Admission.jsx` include fully validated, frontend-only forms
with success states. Both are commented with a `TODO` showing exactly where to
wire in a real API call once a backend is available — no redesign needed.

## Routes
`/`, `/school`, `/education-point`, `/programs`, `/faculty`, `/gallery`,
`/achievements`, `/events`, `/about`, `/contact`, `/admission`, plus a catch-all
404 page.

## Deploying
This is a fully static site. After `npm run build`, upload the contents of
`dist/` to any static host (Netlify, Vercel, GitHub Pages, cPanel, etc.). If
hosting on a service without SPA rewrite support, configure a fallback to
`index.html` so client-side routes resolve correctly.
