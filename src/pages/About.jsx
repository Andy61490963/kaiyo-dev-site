import React from 'react'
import { BookOpenText, Briefcase, Layers3 } from 'lucide-react'
import SectionContainer from '../components/SectionContainer.jsx'

const strengths = [
  {
    icon: Layers3,
    title: '具備完整系統開發流程經驗',
    text: '從需求訪談、流程分析、系統設計到後期維護，我都具備實務經驗，也能獨立完成專案開發工作。',
  },
  {
    icon: Briefcase,
    title: '擅長流程型系統建置',
    text: '我參與過車證、校安、新生健檢、修繕管理等系統，熟悉從實際作業流程抽出需求並轉成系統設計。',
  },
  {
    icon: BookOpenText,
    title: '持續優化系統品質',
    text: '我曾處理高併發、Deadlock、模組化重構等問題，也會透過設計模式、責任分離與 Log 機制提升系統可維護性。',
  },
]

const skills = [
  'C# / ASP.NET Core MVC',
  'Python / Django',
  'JavaScript',
  'MS SQL / IIS / Linux',
  'Git / AWS / EC2',
  'Nginx / Gunicorn / ELB / TLS',
]

export default function About() {
  return (
    <>
      <SectionContainer subtitle="關於我" title="專注於後端開發、流程系統與系統整合的工程師">
        <div className="max-w-4xl space-y-5 text-base leading-8 text-slate-600">
          <p>
            我是許愷佑，英文名 Andy，畢業於國立臺東大學資訊工程學系。目前在威友科技擔任後端工程師，持續投入系統開發、MES 流程導入與異質系統整合工作。
          </p>
          <p>
            在此之前，我曾於國立臺東大學系統發展組參與校務與行政系統開發，負責需求分析、流程設計、系統實作與自動化解決方案。這段經歷讓我累積了不少流程型系統與實際使用者需求的開發經驗。
          </p>
          <p>
            我特別重視實用性與可維護性，除了能快速完成系統功能，也會關注資料流、權限管理、效能問題，以及系統長期擴充與重構的可能性。
          </p>
        </div>
      </SectionContainer>

      <SectionContainer subtitle="優勢" title="我目前最有代表性的能力與工作方式">
        <div className="grid gap-5 md:grid-cols-3">
          {strengths.map((item) => (
            <article key={item.title} className="glass-card">
              <div className="glass-card__inner">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-slate-700">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                <p className="text-sm leading-7 text-slate-600">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer subtitle="技術能力" title="履歷中主要使用的技術與系統工具">
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <li key={skill} className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-4 text-sm leading-7 text-slate-700">
              {skill}
            </li>
          ))}
        </ul>
      </SectionContainer>
    </>
  )
}
