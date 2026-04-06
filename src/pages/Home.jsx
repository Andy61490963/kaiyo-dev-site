import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Github, Radar, Rocket, Workflow } from 'lucide-react'
import { Link } from 'react-router-dom'
import { contact } from '../data/contact.js'
import { certifications } from '../data/certifications.js'

const coreAreas = [
  {
    icon: Workflow,
    title: '把流程變成可落地的系統',
    text: '擅長整理校務、行政與產線流程，將原本仰賴人工協作的作業轉成可追蹤、可維護的系統流程',
  },
  {
    icon: Rocket,
    title: '從需求到上線能獨立推進',
    text: '涵蓋需求分析、流程設計、後端實作到後期維護，能獨立完成流程型系統開發並持續優化',
  },
  {
    icon: Radar,
    title: '處理真實系統問題',
    text: '曾解決高併發、編號衝突、Deadlock 與系統耦合問題，透過交易控制、模組化與 Log 機制提升穩定性',
  },
]

const stats = [
  { value: '3 年', label: '開發經驗', detail: '系統開發與異質系統整合實務經驗' },
  { value: '5+', label: '專案實績', detail: '校務、行政、工單、健檢與內容管理系統' },
  { value: '2026', label: '現職角色', detail: '威友科技後端工程師' },
]

export default function Home() {
  const featuredMilestones = certifications.slice(0, 3)
  const profileImage = `${import.meta.env.BASE_URL}5B609B4A-6DFD-4FE8-8C64-0F5BC0B996F1.jpg`

  return (
    <section className="space-y-16 sm:space-y-20">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="space-y-6"
        >
          <div className="terminal-label">
            <span className="terminal-dot" />
            履歷網站 / 持續更新中
          </div>

          <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_220px] lg:items-center">
            <div className="space-y-5">
            <h1 className="section-title max-w-4xl">
              Andy
              <span className="mt-3 block text-slate-500">
                系統開發異質系統整合工程師
              </span>
            </h1>

            <p className="max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              具備三年系統開發實務經驗，把複雜流程整理成可落地的系統
            </p>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="mx-auto w-full max-w-[220px]"
            >
              <div className="overflow-hidden rounded-[1.75rem] border border-white/80 bg-white/70 p-2 shadow-[0_18px_40px_rgba(15,23,42,0.12)] backdrop-blur-sm">
                <img
                  src={profileImage}
                  alt="Andy"
                  className="h-[260px] w-full rounded-[1.15rem] object-cover object-center"
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
            className="grid gap-3 sm:grid-cols-2"
          >
            <div className="terminal-outline rounded-2xl px-4 py-3">
              <div className="mono text-[0.72rem] uppercase tracking-[0.22em] text-slate-500">角色定位</div>
              <div className="mt-2 text-sm text-slate-900">{contact.title}</div>
            </div>

            <div className="terminal-outline rounded-2xl px-4 py-3">
              <div className="mono text-[0.72rem] uppercase tracking-[0.22em] text-slate-500">Email</div>
              <a
                href={`mailto:${contact.email}`}
                className="mt-2 inline-flex items-center gap-2 text-sm text-slate-900 hover:text-slate-700"
              >
                {contact.email}
              </a>
            </div>

            <div className="terminal-outline rounded-2xl px-4 py-3 sm:col-span-2">
              <div className="mono text-[0.72rem] uppercase tracking-[0.22em] text-slate-500">GitHub</div>
              <a
                href={`https://github.com/${contact.githubUsername}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-2 text-sm text-slate-900 hover:text-slate-700"
              >
                <Github className="h-4 w-4 text-slate-500" />
                {contact.githubUsername}
              </a>
            </div>

            <div className="terminal-outline rounded-2xl px-4 py-3 sm:col-span-2">
              <div className="mono text-[0.72rem] uppercase tracking-[0.22em] text-slate-500">我擅長解決的問題</div>
              <div className="mt-3 grid gap-2 text-sm leading-6 text-slate-700">
                <p>將混亂或仰賴人工的流程，整理成可追蹤、可維護、自動化的系統流程</p>
                <p>分析公司、客戶的需求，將痛點一一擊破</p>
                <p>在既有系統中導入模組化與責任分離，降低維護與擴充成本</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-card"
        >
          <div className="glass-card__inner">
            <div className="flex items-center gap-2 text-slate-500">
              <Rocket className="h-4 w-4" />
              <span className="mono text-[0.72rem] uppercase tracking-[0.22em]">履歷重點</span>
            </div>
            <h2 className="text-2xl font-semibold text-slate-900">提供複雜場景的解決方案</h2>
            {/* <p className="text-sm leading-7 text-slate-600">
              不走一般作品集的路線，而是把專案的問題拆分，解釋解決了什麼問題
            </p> */}

            <ul className="space-y-3">
              {featuredMilestones.map((item) => (
                <li key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="mono text-xs uppercase tracking-[0.2em] text-slate-500">{item.issuer}</p>
                      <p className="mt-1 font-semibold text-slate-900">{item.title}</p>
                    </div>
                    <span className="rounded-full border border-slate-200 bg-white px-2 py-1 text-[0.7rem] text-slate-600">
                      {item.type}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.summary}</p>
                </li>
              ))}
            </ul>
          </div>
        </motion.aside>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
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
        {coreAreas.map((item) => (
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
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700 transition group-hover:border-sky-200 group-hover:bg-sky-50 group-hover:text-sky-700">
                <item.icon className="h-5 w-5" />
              </div>
              <h2 className="text-xl font-semibold text-slate-900">{item.title}</h2>
              <p className="text-sm leading-7 text-slate-600">{item.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
