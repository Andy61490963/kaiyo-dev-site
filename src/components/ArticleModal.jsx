import React, { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FileText, X } from 'lucide-react'
import { createPortal } from 'react-dom'

export default function ArticleModal({ article, onClose }) {
  useEffect(() => {
    if (!article) {
      return undefined
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    const previousOverflow = document.body.style.overflow

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [article, onClose])

  if (typeof document === 'undefined') {
    return null
  }

  return createPortal(
    <AnimatePresence>
      {article ? (
        <motion.div
          key={article.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 grid place-items-center p-4 sm:p-6"
        >
          <motion.button
            type="button"
            aria-label="關閉文章視窗"
            className="absolute inset-0 bg-slate-950/45 backdrop-blur-[3px]"
            onClick={onClose}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="article-modal-title"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.98 }}
            transition={{ duration: 0.24, ease: 'easeOut' }}
            className="glass-card relative z-10 flex max-h-[85vh] w-full max-w-3xl flex-col self-center overflow-hidden"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="glass-card__inner min-h-0 gap-0">
              <div className="flex items-start justify-between gap-4 border-b border-slate-200/80 pb-5">
                <div className="space-y-3">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-slate-700">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div className="space-y-2">
                    <p className="mono text-[0.72rem] uppercase tracking-[0.22em] text-slate-500">
                      {article.platform}
                    </p>
                    <h2 id="article-modal-title" className="text-2xl font-semibold leading-tight text-slate-900">
                      {article.title}
                    </h2>
                  </div>
                </div>

                <button
                  type="button"
                  aria-label="關閉"
                  onClick={onClose}
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white/80 text-slate-600 transition hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="mt-6 min-h-0 flex-1 space-y-6 overflow-y-auto pr-1">
                <div className="inline-flex w-fit rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600">
                  {article.category}
                </div>

                <section className="space-y-2">
                  <p className="mono text-[0.7rem] uppercase tracking-[0.22em] text-slate-400">主題摘要</p>
                  <p className="text-sm leading-7 text-slate-600">{article.summary}</p>
                </section>

                <section className="space-y-3">
                  <p className="mono text-[0.7rem] uppercase tracking-[0.22em] text-slate-400">完整內容</p>
                  <div className="space-y-4 text-sm leading-8 text-slate-600">
                    {article.content.map((paragraph, index) => (
                      <p key={`${article.id}-paragraph-${index}`}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body
  )
}
