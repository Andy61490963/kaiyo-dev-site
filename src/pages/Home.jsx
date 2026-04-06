import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Github, Layers3, Radar, Rocket, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { contact } from '../data/contact.js'
import { projects } from '../data/projects.js'

const highlights = [
  {
    icon: Layers3,
    title: '瘚?頧頂蝯?,
    text: '???砌趕鞈港犖撌亙?雿?瘚?嚗???航蕭頩扎蝬剛風?頂蝯梯身閮?,
  },
  {
    icon: Radar,
    title: '閫?捱?祕??',
    text: '??擃蔥?潦????湔扼???蝔??瑟?蝬剛風?蝑祕??憿?,
  },
  {
    icon: Rocket,
    title: '?賜蝡??,
    text: '敺?瘙???蝡臬祕雿銝?敺雁霅瘀??賜帘摰??畾菟??潭?蝔?,
  },
]

const stats = [
  { value: '3 撟?, label: '?蝬?', detail: '蝟餌絞???祕?? },
  { value: '6+', label: '隞?”撠?', detail: '?∪????踴極?株?鞈??游?' },
  { value: 'C# / .NET', label: '?詨??銵?, detail: '敺垢???蝔頂蝯勗遣蝵? },
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
            ?犖雿?蝬脩? / ???湔銝?          </div>

          <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_260px] lg:items-start">
            <div className="space-y-5">
              <div className="space-y-3">
                <div className="hero-eyebrow">Backend Engineer 繚 System Integration</div>
                <h1 className="section-title max-w-4xl">Andy</h1>
              </div>

              <p className="max-w-3xl text-lg leading-9 text-slate-600 sm:text-[1.1rem]">
                ?瑕?銝僑蝟餌絞?撖血?蝬?嚗?銴?瘚??渡???賢?頂蝯?              </p>

              <p className="inline-flex w-fit whitespace-nowrap rounded-full border border-slate-200/80 bg-white/80 px-4 py-2 text-sm font-medium tracking-[0.08em] text-slate-500 sm:text-base">
                蝟餌絞?&?游?撌亦?撣?              </p>
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
              ?亦?撠?蝬?
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link to="/about" className="terminal-button terminal-button--ghost">
              ?亦??犖?
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            <div className="terminal-outline rounded-[1.5rem] px-5 py-4">
              <div className="mono text-[0.72rem] uppercase tracking-[0.22em] text-slate-500">閫摰?</div>
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
              <div className="mono text-[0.72rem] uppercase tracking-[0.22em] text-slate-500">???瑁圾瘙箇???</div>
              <div className="mt-3 grid gap-2 text-sm leading-7 text-slate-700">
                <p>撠毽鈭?隞啗陷鈭箏極??蝔??渡??餈質馱?蝬剛風????頂蝯望?蝔?/p>
                <p>???砍?蝙?刻?瘙??圾??銝西???瑁????質身閮?/p>
                <p>?冽?頂蝯曹葉撠璅∠???鞎砌遙?嚗?雿雁霅瑁??游??</p>
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
              <span className="mono text-[0.72rem] uppercase tracking-[0.22em]">????</span>
            </div>

            <h2 className="text-2xl font-semibold leading-snug text-slate-900">
              ?典?蝡航?瘚?閮剛?嚗??祕?湔銝剔?銴????渡?皜?
            </h2>

            <p className="text-sm leading-7 text-slate-600">
              Focus?潭?蝔?蝟餌絞?鞈芰頂蝯望???舐雁霅瑞?敺垢?嗆?嚗?暺??芸?摰?嚗??蝛拙??扼?????蝥????            </p>

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
              <div className="mono text-[0.72rem] uppercase tracking-[0.22em] text-slate-500">?桀??</div>
              <ul className="space-y-2 text-sm leading-7 text-slate-600">
                <li>瘚??頂蝯梯身閮???</li>
                <li>鞈?瘚??閫甈??抒恣</li>
                <li>?舐雁霅瑞?敺垢?蝯?</li>
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
            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-900">隞?”撠?</h2>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-slate-900"
          >
            ?亦?摰撠??”
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