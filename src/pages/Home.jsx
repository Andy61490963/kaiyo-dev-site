import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Github, Radar, Rocket, Workflow } from 'lucide-react'
import { Link } from 'react-router-dom'
import { contact } from '../data/contact.js'
import { certifications } from '../data/certifications.js'

const coreAreas = [
  {
    icon: Workflow,
    title: '系統開發與異質系統整合',
    text: '我具備兩年系統開發與異質系統整合經驗，能從需求訪談、流程分析一路做到系統設計與後期維護。',
  },
  {
    icon: Rocket,
    title: '流程系統與後端實作',
    text: '我熟悉校務、行政、MES 等流程型系統建置，擅長把真實作業流程整理成可落地的系統功能。',
  },
  {
    icon: Radar,
    title: '重構與問題解決能力',
    text: '我曾處理高併發、Deadlock、Race Condition 等問題，也能透過設計模式、模組化與 Log 機制提升系統品質。',
  },
]

const stats = [
  { value: '2 年', label: '開發經驗', detail: '系統開發與異質系統整合實務經驗' },
  { value: '5+', label: '專案實績', detail: '校務、行政、工單、健檢與內容管理系統' },
  { value: '2025', label: '現職角色', detail: '威友科技後端工程師' },
]

export default function Home() {
  const featuredMilestones = certifications.slice(0, 3)

  return (
    <section className="space-y-16 sm:space-y-20">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
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

          <div className="space-y-5">
            <h1 className="section-title max-w-4xl">
              Andy
              <span className="mt-3 block text-slate-500">
                專注於後端開發、流程系統與系統整合
              </span>
            </h1>

            <p className="max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              您好，我是 Andy，擁有兩年系統開發與異質系統整合經驗。從需求訪談、系統設計到後期維護皆有實務經驗，具備獨立完成專案的能力。
            </p>
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

          <div className="grid gap-3 sm:grid-cols-2">
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
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-card"
        >
          <div className="glass-card__inner">
            <div className="flex items-center gap-2 text-slate-500">
              <Rocket className="h-4 w-4" />
              <span className="mono text-[0.72rem] uppercase tracking-[0.22em]">履歷重點</span>
            </div>
            <h2 className="text-2xl font-semibold text-slate-900">從校務系統到 MES 流程，持續累積後端實務能力</h2>
            <p className="text-sm leading-7 text-slate-600">
              目前我在威友科技擔任後端工程師，負責產線流程分析、MES 作業流程導入、資料流規劃與系統重構；在此之前，曾於國立臺東大學系統發展組參與多項校務與行政系統開發。
            </p>

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
          <div key={item.label} className="glass-card">
            <div className="glass-card__inner">
              <div className="mono text-[0.72rem] uppercase tracking-[0.22em] text-slate-500">{item.label}</div>
              <div className="text-4xl font-semibold text-slate-900">{item.value}</div>
              <div className="text-sm leading-6 text-slate-500">{item.detail}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {coreAreas.map((item) => (
          <div key={item.title} className="glass-card">
            <div className="glass-card__inner">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700">
                <item.icon className="h-5 w-5" />
              </div>
              <h2 className="text-xl font-semibold text-slate-900">{item.title}</h2>
              <p className="text-sm leading-7 text-slate-600">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
