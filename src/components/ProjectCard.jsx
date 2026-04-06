import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

export default function ProjectCard({ project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.35 }}
      className="glass-card group h-full"
    >
      <div className="glass-card__inner h-full">
        <div className="space-y-3">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                {project.category}
              </p>
              <h3 className="mt-2 text-xl font-semibold leading-snug text-slate-900">
                {project.title}
              </h3>
            </div>
            {project.year && (
              <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-500 transition group-hover:border-sky-200 group-hover:bg-sky-50 group-hover:text-sky-700">
                {project.year}
              </span>
            )}
          </div>
          <p className="text-sm leading-7 text-slate-600">{project.description}</p>
        </div>

        <ul className="flex flex-wrap gap-2 text-xs text-slate-600">
          {project.tech.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 transition group-hover:border-slate-300 group-hover:bg-white"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-3 pt-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-900 bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              <Github className="h-4 w-4" />
              原始碼
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              <ExternalLink className="h-4 w-4" />
              查看內容
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}