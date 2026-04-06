import React from 'react'
import { BookOpenText, Briefcase, Layers3 } from 'lucide-react'
import SectionContainer from '../components/SectionContainer.jsx'

const strengths = [
  {
    icon: Layers3,
    title: '從需求到上線能獨立推進',
    text: '涵蓋需求分析、流程設計、後端實作到維護，能把流程型系統從想法推進到可實際使用',
  },
  {
    icon: Briefcase,
    title: '擅長把流程整理成系統',
    text: '做過車證、校安、健檢與修繕等系統，熟悉把多角色、多狀態、多資料流的流程落成可維護的功能',
  },
  {
    icon: BookOpenText,
    title: '優先處理穩定性與維護成本',
    text: '曾處理高併發、Deadlock、編號衝突與重構議題，透過交易控制、模組化與 Log 機制提升系統品質',
  },
]

const skills = [
  'C# / ASP.NET Core MVC',
  'Python / Django',
  'JavaScript',
  'MS SQL / IIS / Linux',
  'Git / AWS / EC2',
  'Nginx',
]

export default function About() {
  return (
    <>
      <SectionContainer subtitle="關於我" title="專注流程型系統開發與整合的後端工程師">
        <div className="max-w-4xl space-y-5 text-base leading-8 text-slate-600">
          <p>
            我是許愷佑 Andy，現職後端工程師，具備 3 年系統開發與異質系統整合實務經驗。工作內容以流程型系統為主，包含需求分析、後端開發、資料流規劃與上線後維護
          </p>
          <p>
            我曾參與校務、行政與 MES 相關系統開發，做過車證申請、校安通報、新生健檢、修繕管理與虛擬書架等專案。這些經驗讓我熟悉如何將實際作業流程整理成可追蹤、可維護的系統設計
          </p>
          <p>
            我在意的不只是哪個功能能不能做出來，也包含資料一致性、效能瓶頸，以及系統未來擴充與維護的成本
          </p>
        </div>
      </SectionContainer>

      <SectionContainer subtitle="優勢" title="目前最有代表性的能力與工作方式">
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

      <SectionContainer subtitle="技術能力" title="主要使用的技術與系統工具">
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
