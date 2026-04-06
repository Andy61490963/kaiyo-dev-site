import React from 'react'
import { ExternalLink, FileText, Rocket } from 'lucide-react'
import SectionContainer from '../components/SectionContainer.jsx'
import { articles } from '../data/articles.js'

export default function Articles() {
  return (
    <>
      <SectionContainer subtitle="Notes" title="A few ideas that define where I want this portfolio to go next">
        <div className="max-w-4xl space-y-4 text-base leading-8 text-zinc-300">
          <p>
            I am using this section like a lightweight notes shelf. It collects the themes behind my work so the site
            feels more personal than a list of links, even while it is still early.
          </p>
          <p>
            Over time, I can turn these into real write-ups about engineering choices, project lessons, and the way I
            think about building software that earns trust from users and teams.
          </p>
        </div>
      </SectionContainer>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {articles.map((article) => (
          <article key={article.href} className="glass-card">
            <div className="glass-card__inner">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="mono text-[0.72rem] uppercase tracking-[0.22em] text-[#8af7fe]">
                    {article.platform}
                  </p>
                  <h2 className="mt-2 text-xl font-semibold text-white">{article.title}</h2>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#39ff1430] bg-[#39ff1410] text-[#7dff8f]">
                  {article.platform === 'Portfolio' ? (
                    <Rocket className="h-4 w-4" />
                  ) : (
                    <FileText className="h-4 w-4" />
                  )}
                </div>
              </div>

              <div className="inline-flex w-fit rounded-full border border-[#39ff1424] bg-[#39ff1408] px-3 py-1 text-xs font-semibold text-[#b8ffb8]">
                {article.category}
              </div>

              <p className="text-sm leading-7 text-zinc-300">{article.description}</p>

              <a
                href={article.href}
                target="_blank"
                rel="noopener noreferrer"
                className="terminal-button terminal-button--ghost mt-auto w-fit"
              >
                open link
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </>
  )
}
