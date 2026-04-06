import React from 'react'
import { ExternalLink } from 'lucide-react'
import SectionContainer from '../components/SectionContainer.jsx'
import { certifications } from '../data/certifications.js'

export default function Certifications() {
  const primaryMilestones = certifications.slice(0, 2)
  const secondaryMilestones = certifications.slice(2)

  return (
    <>
      <SectionContainer subtitle="Milestones" title="Signals that describe the direction of my work">
        <div className="max-w-4xl space-y-4 text-base leading-8 text-zinc-300">
          <p>
            Instead of formal certificates, this page highlights the themes and milestones that feel most representative
            of my current path: shipping useful software, improving backend structure, and building a stronger public presence.
          </p>
          <p>
            It works as a bridge between who I am now and the fuller set of case studies I want this portfolio to contain later.
          </p>
        </div>
      </SectionContainer>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)]">
        <div className="grid gap-5">
          {primaryMilestones.map((item) => (
            <article key={item.title} className="glass-card">
              <div className="glass-card__inner">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="mono text-xs uppercase tracking-[0.22em] text-[#8af7fe]">{item.issuer}</p>
                    <h2 className="mt-2 text-2xl font-semibold text-white">{item.title}</h2>
                  </div>
                  <span className="rounded-full border border-[#39ff1424] bg-[#39ff1408] px-3 py-1 text-xs font-semibold text-[#b8ffb8]">
                    {item.type}
                  </span>
                </div>

                <p className="text-sm leading-7 text-zinc-300">{item.summary}</p>

                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="terminal-button terminal-button--primary w-fit"
                >
                  <ExternalLink className="h-4 w-4" />
                  open reference
                </a>
              </div>
            </article>
          ))}
        </div>

        <aside className="space-y-5">
          <div className="glass-card">
            <div className="glass-card__inner">
              <p className="mono text-xs uppercase tracking-[0.22em] text-[#8af7fe]">Now</p>
              <h2 className="text-xl font-semibold text-white">What this version is doing</h2>
              <p className="text-sm leading-7 text-zinc-300">
                This portfolio is intentionally simple: connect GitHub work, give it a stronger presentation, and create a base I can keep expanding.
              </p>
            </div>
          </div>

          <div className="glass-card">
            <div className="glass-card__inner">
              <p className="mono text-xs uppercase tracking-[0.22em] text-[#8af7fe]">Next</p>
              <h2 className="text-xl font-semibold text-white">What I can add later</h2>
              <ul className="space-y-3">
                {secondaryMilestones.map((item) => (
                  <li key={item.title} className="rounded-2xl border border-[#39ff1420] bg-[#39ff1406] p-4">
                    <p className="font-semibold text-white">{item.title}</p>
                    <p className="mt-2 text-sm leading-6 text-zinc-400">{item.summary}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </>
  )
}
