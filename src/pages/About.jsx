import React from 'react'
import { BookOpenText, Briefcase, Layers3 } from 'lucide-react'
import SectionContainer from '../components/SectionContainer.jsx'

const strengths = [
  {
    icon: Layers3,
    title: 'System-minded implementation',
    text: 'I like understanding how the moving pieces connect so the code I ship is useful not only today, but also maintainable when the project grows.',
  },
  {
    icon: Briefcase,
    title: 'Workflow-first thinking',
    text: 'A lot of my motivation comes from building around real operational needs instead of making features that look good but do not reduce actual friction.',
  },
  {
    icon: BookOpenText,
    title: 'Learning in public',
    text: 'Publishing repos and building this site are part of the same habit: turning progress into something visible, reviewable, and easier to improve over time.',
  },
]

const skills = [
  'C# and service-oriented backend work',
  '.NET API design and data flow handling',
  'Frontend delivery with React, Vite, and Tailwind CSS',
  'Internal tool development for repeatable operations',
  'Workflow automation and utility-driven software',
  'Shipping public repos as a record of growth',
]

export default function About() {
  return (
    <>
      <SectionContainer subtitle="About" title="A builder focused on practical software and steady growth">
        <div className="max-w-4xl space-y-5 text-base leading-8 text-zinc-300">
          <p>
            I am shaping this portfolio around the type of work I want to be known for: software that is useful,
            dependable, and grounded in real problems. My GitHub already shows pieces of that story, and this site
            gives those projects a clearer frame.
          </p>
          <p>
            The projects I am drawn to usually sit between product and operations. I like backend structure, data
            movement, and the kind of web interfaces that help teams get things done with less confusion.
          </p>
          <p>
            Right now, this portfolio is version one. That is intentional. I prefer to ship something honest,
            then keep refining it as my work becomes sharper and more representative.
          </p>
        </div>
      </SectionContainer>

      <SectionContainer subtitle="Strengths" title="How I tend to approach engineering work">
        <div className="grid gap-5 md:grid-cols-3">
          {strengths.map((item) => (
            <article key={item.title} className="glass-card">
              <div className="glass-card__inner">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="text-sm leading-7 text-zinc-300">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer subtitle="Stack" title="Tools and themes that show up often in my work">
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <li key={skill} className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-sm leading-7 text-zinc-200">
              {skill}
            </li>
          ))}
        </ul>
      </SectionContainer>
    </>
  )
}
