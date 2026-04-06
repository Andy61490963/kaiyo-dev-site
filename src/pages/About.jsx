import React from 'react'
import { BookOpenText, Briefcase, Layers3 } from 'lucide-react'
import SectionContainer from '../components/SectionContainer.jsx'

const strengths = [
  {
    icon: Layers3,
    title: '重視整體結構的實作方式',
    text: '我會先理解系統中各個部分如何互相配合，這樣寫出來的程式不只現在能用，也比較容易在專案變大後持續維護。',
  },
  {
    icon: Briefcase,
    title: '以流程問題為出發點',
    text: '我很常從真實工作流程出發思考需求，而不是只做看起來漂亮、但其實沒有減少摩擦成本的功能。',
  },
  {
    icon: BookOpenText,
    title: '把學習與成長公開整理',
    text: '公開 repo 和建立這個網站，對我來說都是同一件事的一部分：把自己的進步變得可見、可回顧，也更容易持續優化。',
  },
]

const skills = [
  'C# 與服務型後端開發',
  '.NET API 設計與資料流程處理',
  'React、Vite、Tailwind CSS 前端實作',
  '內部工具與流程型系統開發',
  '自動化工具與實用型軟體設計',
  '透過公開 repo 累積作品與成長紀錄',
]

export default function About() {
  return (
    <>
      <SectionContainer subtitle="關於我" title="專注於實用軟體與持續成長的開發者">
        <div className="max-w-4xl space-y-5 text-base leading-8 text-zinc-300">
          <p>
            我希望把這個作品集慢慢整理成代表自己的樣子，也就是那些真正有用途、能穩定運作，並且建立在真實問題上的軟體作品。GitHub 上已經有一些這樣的內容，而這個網站讓它們有了更清楚的呈現方式。
          </p>
          <p>
            我特別容易被那些介於產品與實務流程之間的專案吸引。我喜歡處理後端架構、資料流，以及能幫助團隊更順利完成工作的網站介面。
          </p>
          <p>
            現在這個網站還是第一版，但這是我刻意的選擇。我更喜歡先做出一個真實可用的版本，再隨著作品與方向變得更清楚，一步一步把它打磨完整。
          </p>
        </div>
      </SectionContainer>

      <SectionContainer subtitle="優勢" title="我通常怎麼思考與處理工程問題">
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

      <SectionContainer subtitle="技術方向" title="目前作品中比較常出現的工具與主題">
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
