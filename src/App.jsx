import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Skills from './pages/Skills'
import Experience from './pages/Experience'
import Education from './pages/Education'
import Certification from './pages/Certification'
import Interest from './pages/Interest'
import Contact from './pages/Contact'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/certification" element={<Certification />} />
        <Route path="/education" element={<Education />} />
        <Route path="/interest" element={<Interest />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}
