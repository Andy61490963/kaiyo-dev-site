import React from 'react'
import { ExternalLink, FileText, Rocket } from 'lucide-react'
import SectionContainer from '../components/SectionContainer.jsx'
import { articles } from '../data/articles.js'

export default function Articles() {
  return (
    <>
      <SectionContainer subtitle="筆記" title="整理我目前開發方向與想法的幾個主題">
        <div className="max-w-4xl space-y-4 text-base leading-8 text-slate-600">
          <p>
            我把這一區當成比較輕量的想法整理區，讓這個網站不只是放連結而已，也能慢慢把我在開發上重視的主題記錄下來。
          </p>
          <p>
            之後我也可以把這些內容擴充成真正的文章，像是技術選擇、專案心得，或是我怎麼思考一個值得信任的產品該如何被打造出來。
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

              <a
                href={article.href}
                target="_blank"
                rel="noopener noreferrer"
                className="terminal-button terminal-button--ghost mt-auto w-fit"
              >
                開啟連結
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </>
  )
}
