import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Github, Layers3, Radar, Rocket, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { contact } from '../data/contact.js'
import { projects } from '../data/projects.js'

const highlights = [
  {
    icon: Layers3,
    title: '流程轉系統',
    text: '把原本仰賴人工協作的流程，整理成可追蹤、可維護的系統設計',
  },
  {
    icon: Radar,
    title: '解決真實問題',
    text: '處理高併發、資料一致性、權限流程與長期維護成本等實務問題',
  },
  {
    icon: Rocket,
    title: '能獨立推進',
    text: '從需求分析、後端實作到上線後維護，能穩定完成整段開發流程',
  },
]

const stats = [
  { value: '3 年', label: '開發經驗', detail: '系統開發與整合實務' },
  { value: '6+', label: '代表專案', detail: '校務、行政、工單與資料整合' },
  { value: 'C# / .NET', label: '核心技術', detail: '後端開發與流程系統建置' },
]

export default function Home() {
  const profileImage = `${import.meta.env.BASE_URL}5B609B4A-6DFD-4FE8-8C64-0F5BC0B996F1.jpg`
  const featuredProjects = projects.slice(0, 2)

  return (
    <section className="space-y-20">
      <div className="grid gap-10 xl:grid-cols-[minmax(0,1fr)_340px] xl:items-start">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="space-y-8"
        >
          <div className="hero-ribbon">
            <span className="hero-ribbon__dot" />
            個人作品網站 / 持續更新中
          </div>

          <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_260px] lg:items-start">
            <div className="space-y-5">
              <div className="space-y-3">
                <div className="hero-eyebrow">Backend Engineer · System Integration</div>
                <h1 className="section-title max-w-4xl">Andy</h1>
              </div>

              <p className="max-w-3xl text-lg leading-9 text-slate-600 sm:text-[1.1rem]">
                具備三年系統開發實務經驗，把複雜流程整理成可落地的系統
              </p>

              <p className="inline-flex w-fit whitespace-nowrap rounded-full border border-slate-200/80 bg-white/80 px-4 py-2 text-sm font-medium tracking-[0.08em] text-slate-500 sm:text-base">
                系統開發異質系統整合工程師
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="mx-auto w-full max-w-[260px]"
            >
              <div className="portrait-frame">
                <img
                  src={profileImage}
                  alt="Andy"
                  className="h-[320px] w-full rounded-[1.55rem] object-cover object-center"
                />
              </div>
            </motion.div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Link to="/projects" className="terminal-button terminal-button--primary">
              查看專案經驗
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link to="/about" className="terminal-button terminal-button--ghost">
              查看個人背景
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            <div className="terminal-outline rounded-[1.5rem] px-5 py-4">
              <div className="mono text-[0.72rem] uppercase tracking-[0.22em] text-slate-500">角色定位</div>
              <div className="mt-2 text-sm text-slate-900">{contact.title}</div>
            </div>

            <div className="terminal-outline rounded-[1.5rem] px-5 py-4">
              <div className="mono text-[0.72rem] uppercase tracking-[0.22em] text-slate-500">Email</div>
              <a
                href={`mailto:${contact.email}`}
                className="mt-2 inline-flex items-center gap-2 text-sm text-slate-900 hover:text-slate-700"
              >
                {contact.email}
              </a>
            </div>

            <div className="terminal-outline rounded-[1.5rem] px-5 py-4 sm:col-span-2">
              <div className="mono text-[0.72rem] uppercase tracking-[0.22em] text-slate-500">我擅長解決的問題</div>
              <div className="mt-3 grid gap-2 text-sm leading-7 text-slate-700">
                <p>將混亂或仰賴人工的流程，整理成可追蹤、可維護、自動化的系統流程</p>
                <p>分析公司與使用者需求，拆解痛點並轉成可執行的功能設計</p>
                <p>在既有系統中導入模組化與責任分離，降低維護與擴充成本</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-card premium-aside"
        >
          <div className="glass-card__inner">
            <div className="flex items-center gap-2 text-slate-500">
              <Sparkles className="h-4 w-4" />
              <span className="mono text-[0.72rem] uppercase tracking-[0.22em]">重點摘要</span>
            </div>

            <h2 className="text-2xl font-semibold leading-snug text-slate-900">
              用後端與流程設計，把真實場景中的複雜問題整理清楚
            </h2>

            <p className="text-sm leading-7 text-slate-600">
              Focus 於流程型系統、異質系統整合與可維護的後端架構，重點不只在功能完成，也包含穩定性、資料流與後續擴充成本
            </p>

            <div className="space-y-3 rounded-[1.5rem] border border-slate-200/80 bg-slate-50/80 p-4">
              <div className="mono text-[0.72rem] uppercase tracking-[0.22em] text-slate-500">GitHub</div>
              <a
                href={`https://github.com/${contact.githubUsername}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 hover:text-slate-700"
              >
                <Github className="h-4 w-4 text-slate-500" />
                {contact.githubUsername}
              </a>
            </div>

            <div className="space-y-3 rounded-[1.5rem] border border-slate-200/80 bg-white/80 p-4">
              <div className="mono text-[0.72rem] uppercase tracking-[0.22em] text-slate-500">目前聚焦</div>
              <ul className="space-y-2 text-sm leading-7 text-slate-600">
                <li>流程型系統設計與重構</li>
                <li>資料流整理與角色權限控管</li>
                <li>可維護的後端開發結構</li>
              </ul>
            </div>
          </div>
        </motion.aside>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {stats.map((item) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.3 }}
            className="glass-card"
          >
            <div className="glass-card__inner">
              <div className="mono text-[0.72rem] uppercase tracking-[0.22em] text-slate-500">{item.label}</div>
              <div className="text-4xl font-semibold text-slate-900">{item.value}</div>
              <div className="text-sm leading-6 text-slate-500">{item.detail}</div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {highlights.map((item) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35 }}
            className="glass-card group"
          >
            <div className="glass-card__inner">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-slate-700 transition group-hover:border-sky-200 group-hover:bg-sky-50 group-hover:text-sky-700">
                <item.icon className="h-5 w-5" />
              </div>
              <h2 className="text-xl font-semibold text-slate-900">{item.title}</h2>
              <p className="text-sm leading-7 text-slate-600">{item.text}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="space-y-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-2">
            <div className="hero-eyebrow">Selected Projects</div>
            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-900">代表專案</h2>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-slate-900"
          >
            查看完整專案列表
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {featuredProjects.map((project) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35 }}
              className="glass-card"
            >
              <div className="glass-card__inner">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="mono text-[0.72rem] uppercase tracking-[0.22em] text-slate-500">
                      {project.category}
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-slate-900">{project.title}</h2>
                  </div>
                  <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-500">
                    {project.year}
                  </span>
                </div>

                <p className="text-sm leading-7 text-slate-600">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tag) => (
                    <span key={tag} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-600">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}