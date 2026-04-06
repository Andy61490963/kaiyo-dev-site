import React from 'react'
import { ExternalLink } from 'lucide-react'
import SectionContainer from '../components/SectionContainer.jsx'
import { certifications } from '../data/certifications.js'

export default function Certifications() {
  const primaryMilestones = certifications.slice(0, 2)
  const secondaryMilestones = certifications.slice(2)

  return (
    <>
      <SectionContainer subtitle="里程碑" title="目前最能代表我方向的能力與成長主題">
        <div className="max-w-4xl space-y-4 text-base leading-8 text-zinc-300">
          <p>
            這一頁不是傳統的證照頁，而是整理目前最能代表我方向的主題，像是持續交付實用軟體、累積後端能力，以及建立更完整的公開作品形象。
          </p>
          <p>
            這一區比較像是我現在與未來之間的橋樑，讓這個網站不只呈現當下，也能留下後續可以延伸成完整案例的空間。
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
                  查看內容
                </a>
              </div>
            </article>
          ))}
        </div>

        <aside className="space-y-5">
          <div className="glass-card">
            <div className="glass-card__inner">
              <p className="mono text-xs uppercase tracking-[0.22em] text-[#8af7fe]">現在</p>
              <h2 className="text-xl font-semibold text-white">這一版網站正在做的事</h2>
              <p className="text-sm leading-7 text-zinc-300">
                這個作品集目前刻意維持簡潔，先把 GitHub 上的作品整理成更有呈現感的網站，建立之後可以持續擴充的基礎。
              </p>
            </div>
          </div>

          <div className="glass-card">
            <div className="glass-card__inner">
              <p className="mono text-xs uppercase tracking-[0.22em] text-[#8af7fe]">下一步</p>
              <h2 className="text-xl font-semibold text-white">後續可以再補上的內容</h2>
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
