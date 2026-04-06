import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Certifications from './pages/Certifications.jsx'
import Articles from './pages/Articles.jsx'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden font-sans text-zinc-100 selection:bg-[#39ff1455] selection:text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-8rem] top-12 h-72 w-72 rounded-full bg-[#39ff1410] blur-[120px]" />
        <div className="absolute right-[-5rem] top-32 h-80 w-80 rounded-full bg-[#3df2ff10] blur-[130px]" />
        <div className="absolute bottom-[-6rem] left-1/3 h-80 w-80 rounded-full bg-[#39ff140e] blur-[140px]" />
      </div>

      <Navbar />

      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 pb-16 pt-40 sm:px-8 sm:pt-44 lg:px-12">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/notes" element={<Articles />} />
          <Route path="/milestones" element={<Certifications />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}
