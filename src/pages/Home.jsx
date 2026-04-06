import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Github, Radar, Rocket, Workflow } from 'lucide-react'
import { Link } from 'react-router-dom'
import { contact } from '../data/contact.js'
import { certifications } from '../data/certifications.js'

const coreAreas = [
  {
    icon: Workflow,
    title: '打造能解決真實流程問題的工具',
    text: '我喜歡把重複、繁瑣的工作流程整理成更乾淨、更有效率，也更容易讓人信任的軟體工具。',
  },
  {
    icon: Rocket,
    title: '先做出來，再持續優化',
    text: '比起花很多時間停留在規劃，我更傾向先做出能運作的版本，再根據真正的需求持續調整與改進。',
  },
  {
    icon: Radar,
    title: '全端視角思考產品',
    text: '我在意後端結構、系統穩定性與介面品質，因為一個好的產品通常需要這三者一起配合。',
  },
]

const stats = [
  { value: '5+', label: '公開專案', detail: '目前已經整理出的公開作品數量' },
  { value: '3', label: '核心方向', detail: 'API、自動化、面向產品的網站開發' },
  { value: '2026', label: '目前目標', detail: '把零散作品整理成更完整的個人作品集' },
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
            作品集 / 持續更新中
          </div>

          <div className="space-y-5">
            <h1 className="section-title max-w-4xl">
              Andy
              <span className="mt-3 block bg-[linear-gradient(90deg,#39ff14_0%,#3df2ff_55%,#effff5_100%)] bg-clip-text text-transparent">
                用產品思維打造實用的軟體與網站
              </span>
            </h1>

            <p className="max-w-3xl text-base leading-8 text-zinc-300 sm:text-lg">
              這個網站是我建立個人開發者形象的起點。我希望把自己的專案、想法，以及做軟體的方式整理在這裡，慢慢累積成更完整的作品集。
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Link to="/projects" className="terminal-button terminal-button--primary">
              查看作品
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link to="/about" className="terminal-button terminal-button--ghost">
              認識我
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="terminal-outline rounded-2xl px-4 py-3">
              <div className="mono text-[0.72rem] uppercase tracking-[0.22em] text-[#88f8d4]">定位</div>
              <div className="mt-2 text-sm text-zinc-100">{contact.title}</div>
            </div>

            <div className="terminal-outline rounded-2xl px-4 py-3">
              <div className="mono text-[0.72rem] uppercase tracking-[0.22em] text-[#88f8d4]">GitHub</div>
              <a
                href={`https://github.com/${contact.githubUsername}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-2 text-sm text-zinc-100 hover:text-[#b8ffb8]"
              >
                <Github className="h-4 w-4 text-[#39ff14]" />
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
            <div className="flex items-center gap-2 text-[#7df48d]">
              <Rocket className="h-4 w-4" />
              <span className="mono text-[0.72rem] uppercase tracking-[0.22em]">目前方向</span>
            </div>
            <h2 className="text-2xl font-semibold text-white">把零散的 repo 整理成更清楚的開發者形象</h2>
            <p className="text-sm leading-7 text-zinc-300">
              我已經有一些公開作品放在 GitHub 上，而這個網站的目的，就是把那些分散的內容整理成更有脈絡的故事，讓人更容易理解我會做什麼、重視什麼，以及我能怎麼貢獻。
            </p>

            <ul className="space-y-3">
              {featuredMilestones.map((item) => (
                <li key={item.title} className="rounded-2xl border border-[#39ff1424] bg-[#39ff1408] p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="mono text-xs uppercase tracking-[0.2em] text-[#8af7fe]">{item.issuer}</p>
                      <p className="mt-1 font-semibold text-white">{item.title}</p>
                    </div>
                    <span className="rounded-full border border-[#39ff1424] px-2 py-1 text-[0.7rem] text-[#b8ffb8]">
                      {item.type}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-zinc-300">{item.summary}</p>
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
              <div className="mono text-[0.72rem] uppercase tracking-[0.22em] text-[#8af7fe]">{item.label}</div>
              <div className="text-4xl font-semibold text-[#d7ffd8]">{item.value}</div>
              <div className="text-sm leading-6 text-zinc-400">{item.detail}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {coreAreas.map((item) => (
          <div key={item.title} className="glass-card">
            <div className="glass-card__inner">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#39ff1430] bg-[#39ff1410] text-[#7dff8f]">
                <item.icon className="h-5 w-5" />
              </div>
              <h2 className="text-xl font-semibold text-white">{item.title}</h2>
              <p className="text-sm leading-7 text-zinc-300">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
