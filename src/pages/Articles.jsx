import React from 'react'
import { ExternalLink, FileText, Rocket } from 'lucide-react'
import SectionContainer from '../components/SectionContainer.jsx'
import { articles } from '../data/articles.js'

export default function Articles() {
  return (
    <>
      <SectionContainer subtitle="筆記" title="我目前關注的開發主題與實務重點">
        <div className="max-w-4xl space-y-4 text-base leading-8 text-slate-600">
          <p>
            這一區整理的是我目前最常碰到、也最重視的幾類主題，包含流程型系統、資料一致性、整合開發與系統維護。
          </p>
          <p>
            之後會逐步擴充成更完整的案例或技術文章，讓這些經驗不只停留在履歷描述，而是能更清楚呈現思考方式與解法。
          </p>
        </div>
      </SectionContainer>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {articles.map((article) => (
          <article key={article.href} className="glass-card">
            <div className="glass-card__inner">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="mono text-[0.72rem] uppercase tracking-[0.22em] text-slate-500">
                    {article.platform}
                  </p>
                  <h2 className="mt-2 text-xl font-semibold text-slate-900">{article.title}</h2>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700">
                  {article.platform === '作品集' ? (
                    <Rocket className="h-4 w-4" />
                  ) : (
                    <FileText className="h-4 w-4" />
                  )}
                </div>
              </div>

              <div className="inline-flex w-fit rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600">
                {article.category}
              </div>

              <p className="text-sm leading-7 text-slate-600">{article.description}</p>

              {/* <a
                href={article.href}
                target="_blank"
                rel="noopener noreferrer"
                className="terminal-button terminal-button--ghost mt-auto w-fit"
              >
                開啟連結
                <ExternalLink className="h-4 w-4" />
              </a> */}
            </div>
          </article>
        ))}
      </div>
    </>
  )
}
