import React from 'react'
import { motion } from 'framer-motion'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Articles from './pages/Articles.jsx'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden font-sans text-slate-900 selection:bg-slate-900 selection:text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{ x: [0, 20, 0], y: [0, -18, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-[-8rem] top-12 h-72 w-72 rounded-full bg-sky-200/50 blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, -18, 0], y: [0, 22, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute right-[-5rem] top-32 h-80 w-80 rounded-full bg-indigo-100/70 blur-[130px]"
        />
        <motion.div
          animate={{ x: [0, 12, 0], y: [0, -14, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-[-6rem] left-1/3 h-80 w-80 rounded-full bg-blue-100/70 blur-[140px]"
        />
        <div className="absolute inset-x-0 top-0 h-[32rem] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.65),transparent_62%)]" />
      </div>

      <Navbar />

      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 pb-16 pt-36 sm:px-8 sm:pt-40 lg:px-12">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/45 px-5 py-8 shadow-[0_30px_80px_rgba(15,23,42,0.08)] backdrop-blur-sm sm:px-8 sm:py-10 lg:px-10">
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
