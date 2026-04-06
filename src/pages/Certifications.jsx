import React from 'react'
import { ExternalLink } from 'lucide-react'
import SectionContainer from '../components/SectionContainer.jsx'
import { certifications } from '../data/certifications.js'

export default function Certifications() {
  const primaryMilestones = certifications.slice(0, 2)
  const secondaryMilestones = certifications.slice(2)

  return (
    <>
      <SectionContainer subtitle="里程碑" title="最能代表我能力累積的幾個階段">
        <div className="max-w-4xl space-y-4 text-base leading-8 text-slate-600">
          <p>
            這一頁不是傳統證照列表，而是整理我目前能力累積最有代表性的幾個階段，包含學歷、系統開發經驗與實際落地成果。
          </p>
          <p>
            這些內容對我來說不只是履歷節點，也代表我目前在哪些領域累積了可延伸成更完整案例的實務基礎。
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
                    <p className="mono text-xs uppercase tracking-[0.22em] text-slate-500">{item.issuer}</p>
                    <h2 className="mt-2 text-2xl font-semibold text-slate-900">{item.title}</h2>
                  </div>
                  <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600">
                    {item.type}
                  </span>
                </div>

                <p className="text-sm leading-7 text-slate-600">{item.summary}</p>

                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="terminal-button terminal-button--primary w-fit"
                >
                  <ExternalLink className="h-4 w-4" />
                  查看內容
                </a>
              </div>
            </article>
          ))}
        </div>

        <aside className="space-y-5">
          <div className="glass-card">
            <div className="glass-card__inner">
              <p className="mono text-xs uppercase tracking-[0.22em] text-slate-500">現在</p>
              <h2 className="text-xl font-semibold text-slate-900">這一版網站的定位</h2>
              <p className="text-sm leading-7 text-slate-600">
                這個網站目前先聚焦在清楚呈現我的技術背景、代表專案與問題解決能力，讓面試官能快速理解我的工作價值。
              </p>
            </div>
          </div>

          <div className="glass-card">
            <div className="glass-card__inner">
              <p className="mono text-xs uppercase tracking-[0.22em] text-slate-500">下一步</p>
              <h2 className="text-xl font-semibold text-slate-900">後續持續補強的方向</h2>
              <ul className="space-y-3">
                {secondaryMilestones.map((item) => (
                  <li key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4">
                    <p className="font-semibold text-slate-900">{item.title}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-500">{item.summary}</p>
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
