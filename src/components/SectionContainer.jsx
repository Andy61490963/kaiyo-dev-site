import React from 'react'

export default function SectionContainer({ title, subtitle, children, align = 'left' }) {
  const isCenter = align === 'center'

  return (
    <section className="mb-16 sm:mb-20">
      <header className={isCenter ? 'mx-auto mb-8 max-w-3xl text-center' : 'mb-8 max-w-3xl'}>
        {subtitle && (
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-cyan-100">
            <span className="h-2 w-2 rounded-full bg-cyan-300" />
            {subtitle}
          </div>
        )}
        <h2 className="section-title">{title}</h2>
      </header>
      {children}
    </section>
  )
}
