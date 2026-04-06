import React from 'react'
import { motion } from 'framer-motion'

export default function SectionContainer({ title, subtitle, children, align = 'left' }) {
  const isCenter = align === 'center'

  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45 }}
      className="mb-20"
    >
      <header className={isCenter ? 'mx-auto mb-10 max-w-3xl text-center' : 'mb-10 max-w-3xl'}>
        {subtitle && (
          <div className="section-kicker">
            <span className="section-kicker__dot" />
            {subtitle}
          </div>
        )}
        <h2 className="section-title">{title}</h2>
      </header>
      {children}
    </motion.section>
  )
}