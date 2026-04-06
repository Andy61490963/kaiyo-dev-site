import React from 'react'
import ProjectCard from '../components/ProjectCard.jsx'
import SectionContainer from '../components/SectionContainer.jsx'
import { projects } from '../data/projects.js'

export default function Projects() {
  return (
    <>
      <SectionContainer subtitle="作品集" title="專案列表">
        <div className="max-w-4xl space-y-4 text-base leading-8 text-slate-600">
          <p>
            這一頁整理的是我實際參與開發與落地的專案，重點不是展示功能數量，而是每個系統解決了哪些流程、資料與管理問題
            <br />
            專案多半涉及申請審核、角色權限、附件管理、通知機制、與資料整合，也最能代表我目前在流程型系統開發上的能力
          </p>
          <p>
            受公司資產（著作權屬於公司），無法放置原始碼
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
