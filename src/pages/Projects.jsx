import React from 'react'
import ProjectCard from '../components/ProjectCard.jsx'
import SectionContainer from '../components/SectionContainer.jsx'
import { projects } from '../data/projects.js'

export default function Projects() {
  return (
    <>
      <SectionContainer subtitle="作品集" title="根據履歷整理的代表性系統開發專案">
        <div className="max-w-4xl space-y-4 text-base leading-8 text-zinc-300">
          <p>
            這一頁整理的是我履歷中的核心專案經驗，重點放在實際有參與開發、規劃或整合的系統，而不是單純展示練習作品。
          </p>
          <p>
            這些專案多半與校務行政流程、工單流程、資料整合與角色權限管理有關，也最能代表我目前在後端開發與流程系統建置上的能力。
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
