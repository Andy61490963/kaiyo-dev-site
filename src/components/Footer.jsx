import React from 'react'
import { ExternalLink, Terminal } from 'lucide-react'

const footerLinks = [
  {
    label: 'GitHub 個人頁',
    href: 'https://github.com/Andy61490963',
  },
  {
    label: '作品集原始碼',
    href: 'https://github.com/Andy61490963/kaiyo-dev-site',
  },
  {
    label: '參考專案',
    href: 'https://github.com/and910805/eric-s-dev-site',
  },
]

export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-6xl px-4 py-8 text-[0.85rem] text-slate-500 sm:px-8 lg:px-12">
      <div className="flex flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <div className="mono flex items-center gap-2 text-slate-900">
            <Terminal className="h-4 w-4 text-slate-500" />
            Andy 個人作品集
          </div>
          <div>作品集 / 專案整理 / 筆記想法 / 成長紀錄</div>
        </div>

        <ul className="flex flex-wrap gap-3 text-slate-600">
          {footerLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 transition hover:text-slate-900"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
