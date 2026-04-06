import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Articles from './pages/Articles.jsx'

function ScrollToTop() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  return null
}

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden font-sans text-slate-900 selection:bg-slate-900 selection:text-white">
      <ScrollToTop />

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{ x: [0, 28, 0], y: [0, -16, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-[-10rem] top-[-2rem] h-[26rem] w-[26rem] rounded-full bg-sky-100/80 blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, -22, 0], y: [0, 24, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute right-[-8rem] top-24 h-[24rem] w-[24rem] rounded-full bg-cyan-100/70 blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, 16, 0], y: [0, -18, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-[-8rem] left-1/3 h-[22rem] w-[22rem] rounded-full bg-indigo-100/75 blur-[120px]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.7),transparent_48%)]" />
      </div>

      <Navbar />

      <main className="mx-auto flex w-full max-w-[1180px] flex-1 flex-col px-4 pb-16 pt-28 sm:px-8 sm:pt-32 lg:px-12">
        <div className="shell-panel relative overflow-hidden rounded-[2rem] px-5 py-8 sm:px-8 sm:py-10 lg:px-10">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/notes" element={<Articles />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </main>

      <Footer />
    </div>
  )
}