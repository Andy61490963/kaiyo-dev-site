import React from 'react'

export default function SectionContainer({ title, subtitle, children, align = 'left' }) {
  const isCenter = align === 'center'

  return (
    <section className="mb-16 sm:mb-20">
      <header className={isCenter ? 'mx-auto mb-8 max-w-3xl text-center' : 'mb-8 max-w-3xl'}>
        {subtitle && (
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-slate-600">
            <span className="h-2 w-2 rounded-full bg-blue-500" />
            {subtitle}
          </div>
        )}
        <h2 className="section-title">{title}</h2>
      </header>
      {children}
    </section>
  )
}
