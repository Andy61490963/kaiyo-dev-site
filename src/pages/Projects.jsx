import React from 'react'
import ProjectCard from '../components/ProjectCard.jsx'
import SectionContainer from '../components/SectionContainer.jsx'
import { projects } from '../data/projects.js'

export default function Projects() {
  return (
    <>
      <SectionContainer subtitle="作品集" title="從公開 GitHub 專案整理出的代表性作品">
        <div className="max-w-4xl space-y-4 text-base leading-8 text-zinc-300">
          <p>
            目前這一版作品集，是以我現有的公開 GitHub repo 為基礎整理而成。這樣做的好處是可以先從真實作品出發，之後再逐步補強成更完整的專案案例介紹。
          </p>
          <p>
            現在有些描述還是偏高層次，因為這個網站目前主要定位仍然是自我介紹。後續我還可以再補上架構說明、畫面截圖，以及每個專案更深入的內容拆解。
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
