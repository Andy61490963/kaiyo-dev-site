import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Github, Radar, Rocket, Workflow } from 'lucide-react'
import { Link } from 'react-router-dom'
import { contact } from '../data/contact.js'
import { certifications } from '../data/certifications.js'

const coreAreas = [
  {
    icon: Workflow,
    title: 'Internal tools that solve real work',
    text: 'I enjoy building software that takes a repetitive process and turns it into something cleaner, faster, and easier for people to trust.',
  },
  {
    icon: Rocket,
    title: 'Steady shipping over perfect planning',
    text: 'My preference is to get working versions into the open, learn from them quickly, and keep improving based on what the product actually needs.',
  },
  {
    icon: Radar,
    title: 'Full-stack thinking',
    text: 'I care about backend structure, operational reliability, and interface quality together because strong products usually need all three working in sync.',
  },
]

const stats = [
  { value: '5+', label: 'Public repos', detail: 'Projects that show different slices of my work' },
  { value: '3', label: 'Core themes', detail: 'API, automation, and product-facing web delivery' },
  { value: '2026', label: 'Current focus', detail: 'Turning experiments into a polished public portfolio' },
]

export default function Home() {
  const featuredMilestones = certifications.slice(0, 3)

  return (
    <section className="space-y-16 sm:space-y-20">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="space-y-6"
        >
          <div className="terminal-label">
            <span className="terminal-dot" />
            portfolio / active build
          </div>

          <div className="space-y-5">
            <h1 className="section-title max-w-4xl">
              Andy
              <span className="mt-3 block bg-[linear-gradient(90deg,#39ff14_0%,#3df2ff_55%,#effff5_100%)] bg-clip-text text-transparent">
                Building practical software with a product mindset
              </span>
            </h1>

            <p className="max-w-3xl text-base leading-8 text-zinc-300 sm:text-lg">
              This site is the start of my public developer presence. I am using it to collect the projects,
              ideas, and working style that best represent how I build software and where I want to grow next.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Link to="/projects" className="terminal-button terminal-button--primary">
              explore projects
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link to="/about" className="terminal-button terminal-button--ghost">
              read about me
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="terminal-outline rounded-2xl px-4 py-3">
              <div className="mono text-[0.72rem] uppercase tracking-[0.22em] text-[#88f8d4]">focus</div>
              <div className="mt-2 text-sm text-zinc-100">{contact.title}</div>
            </div>

            <div className="terminal-outline rounded-2xl px-4 py-3">
              <div className="mono text-[0.72rem] uppercase tracking-[0.22em] text-[#88f8d4]">github</div>
              <a
                href={`https://github.com/${contact.githubUsername}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-2 text-sm text-zinc-100 hover:text-[#b8ffb8]"
              >
                <Github className="h-4 w-4 text-[#39ff14]" />
                {contact.githubUsername}
              </a>
            </div>
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-card"
        >
          <div className="glass-card__inner">
            <div className="flex items-center gap-2 text-[#7df48d]">
              <Rocket className="h-4 w-4" />
              <span className="mono text-[0.72rem] uppercase tracking-[0.22em]">current direction</span>
            </div>
            <h2 className="text-2xl font-semibold text-white">From working repos to a sharper developer identity</h2>
            <p className="text-sm leading-7 text-zinc-300">
              I already have public work on GitHub. This portfolio turns those scattered repos into a story that
              explains what I build, what I care about, and how I can contribute.
            </p>

            <ul className="space-y-3">
              {featuredMilestones.map((item) => (
                <li key={item.title} className="rounded-2xl border border-[#39ff1424] bg-[#39ff1408] p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="mono text-xs uppercase tracking-[0.2em] text-[#8af7fe]">{item.issuer}</p>
                      <p className="mt-1 font-semibold text-white">{item.title}</p>
                    </div>
                    <span className="rounded-full border border-[#39ff1424] px-2 py-1 text-[0.7rem] text-[#b8ffb8]">
                      {item.type}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-zinc-300">{item.summary}</p>
                </li>
              ))}
            </ul>
          </div>
        </motion.aside>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {stats.map((item) => (
          <div key={item.label} className="glass-card">
            <div className="glass-card__inner">
              <div className="mono text-[0.72rem] uppercase tracking-[0.22em] text-[#8af7fe]">{item.label}</div>
              <div className="text-4xl font-semibold text-[#d7ffd8]">{item.value}</div>
              <div className="text-sm leading-6 text-zinc-400">{item.detail}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {coreAreas.map((item) => (
          <div key={item.title} className="glass-card">
            <div className="glass-card__inner">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#39ff1430] bg-[#39ff1410] text-[#7dff8f]">
                <item.icon className="h-5 w-5" />
              </div>
              <h2 className="text-xl font-semibold text-white">{item.title}</h2>
              <p className="text-sm leading-7 text-zinc-300">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
