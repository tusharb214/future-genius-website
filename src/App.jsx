import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import BackToTopButton from './components/BackToTopButton'
import Home from './pages/Home'
import School from './pages/School'
import EducationPoint from './pages/EducationPoint'
import Programs from './pages/Programs'
import Faculty from './pages/Faculty'
import GalleryPage from './pages/GalleryPage'
import Achievements from './pages/Achievements'
import Events from './pages/Events'
import About from './pages/About'
import Contact from './pages/Contact'
import Admission from './pages/Admission'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/school" element={<School />} />
          <Route path="/education-point" element={<EducationPoint />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  )
}
