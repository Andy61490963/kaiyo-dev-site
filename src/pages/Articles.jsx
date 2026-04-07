import React, { useState } from 'react'
import { FileText } from 'lucide-react'
import ArticleModal from '../components/ArticleModal.jsx'
import SectionContainer from '../components/SectionContainer.jsx'
import { articles } from '../data/articles.js'

export default function Articles() {
  const [selectedArticle, setSelectedArticle] = useState(null)

  return (
    <>
      <SectionContainer subtitle="筆記" title="我目前關注的開發主題與實務重點">
        <div className="max-w-4xl space-y-4 text-base leading-8 text-slate-600">
          <p>
            這一區整理的是我目前最常碰到、也最重視的幾類主題，包含流程型系統、資料一致性、整合開發與系統維護
          </p>
          <p>
            之後會逐步擴充成更完整的案例或技術文章，讓這些經驗不只停留在描述，而是能更清楚呈現思考方式與解法
          </p>
        </div>
      </SectionContainer>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {articles.map((article) => (
          <article key={article.id} className="glass-card">
            <div className="glass-card__inner">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="mono text-[0.72rem] uppercase tracking-[0.22em] text-slate-500">
                    {article.platform}
                  </p>
                  <h2 className="mt-2 text-xl font-semibold text-slate-900">{article.title}</h2>
                </div>
                <button
                  type="button"
                  aria-label={`查看 ${article.title} 內容`}
                  onClick={() => setSelectedArticle(article)}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700 transition hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-200 focus:ring-offset-2"
                >
                  <FileText className="h-4 w-4" />
                </button>
              </div>

              <div className="inline-flex w-fit rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600">
                {article.category}
              </div>

              <p className="text-sm leading-7 text-slate-600">{article.summary}</p>
            </div>
          </article>
        ))}
      </div>

      <ArticleModal article={selectedArticle} onClose={() => setSelectedArticle(null)} />
    </>
  )
}
