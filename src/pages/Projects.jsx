import React from 'react'
import ProjectCard from '../components/ProjectCard.jsx'
import SectionContainer from '../components/SectionContainer.jsx'
import { projects } from '../data/projects.js'

export default function Projects() {
  return (
    <>
      <SectionContainer subtitle="Projects" title="Selected work pulled from my public GitHub footprint">
        <div className="max-w-4xl space-y-4 text-base leading-8 text-zinc-300">
          <p>
            This first version of the portfolio uses my existing public repositories as the source material. It is a
            practical way to start with real work, then gradually expand each project into clearer case studies.
          </p>
          <p>
            Some descriptions are intentionally high-level because this site is an introduction page first. As I keep
            iterating, I can add architecture notes, screenshots, and deeper breakdowns for each project.
          </p>
        </div>
      </SectionContainer>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </>
  )
}
