import React from 'react'
import { ExternalLink, Terminal } from 'lucide-react'

const footerLinks = [
  {
    label: 'GitHub',
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
    <footer className="mx-auto w-full max-w-[1180px] px-4 py-8 text-[0.85rem] text-slate-500 sm:px-8 lg:px-12">
      <div className="rounded-[1.75rem] border border-white/75 bg-white/55 px-5 py-6 shadow-[0_20px_45px_rgba(15,23,42,0.06)] backdrop-blur-sm">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <div className="mono flex items-center gap-2 text-slate-900">
              <Terminal className="h-4 w-4 text-slate-500" />
              Andy 個人作品集
            </div>
            <div className="footer-subtitle">後端開發 / 系統整合 / 流程型系統設計</div>
          </div>

          <ul className="flex flex-wrap gap-3 text-slate-600">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-white/70 px-3 py-2 transition hover:border-slate-300 hover:text-slate-900"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}