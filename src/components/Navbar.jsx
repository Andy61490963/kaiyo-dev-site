import React, { useEffect, useState } from 'react'
import clsx from 'classnames'
import { Code2, Menu, TerminalSquare, X } from 'lucide-react'
import { NavLink, useLocation } from 'react-router-dom'

const navItems = [
  { to: '/', label: '首頁' },
  { to: '/about', label: '關於我' },
  { to: '/projects', label: '作品集' },
  { to: '/notes', label: '筆記' },
  { to: '/milestones', label: '里程碑' },
  { to: '/contact', label: '聯絡我' },
]

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setIsMobileOpen(false)
  }, [location.pathname])

  return (
    <header className="fixed left-1/2 top-4 z-40 w-[calc(100%-1.25rem)] max-w-6xl -translate-x-1/2">
      <nav className="rounded-[1.15rem] border border-slate-200/90 bg-white/85 px-4 py-3 shadow-[0_12px_30px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:px-6">
        <div className="flex items-center justify-between gap-4">
          <NavLink to="/" className="flex min-w-0 items-center gap-3 text-slate-900">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700">
              <Code2 className="h-5 w-5" />
            </span>
            <span className="min-w-0">
              <span className="mono block text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-slate-500">
                Andy / 個人作品網站
              </span>
              <span className="block truncate text-sm font-semibold text-slate-900 sm:text-base">
                後端工程師 / 系統整合開發者
              </span>
            </span>
          </NavLink>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white p-2 text-slate-700 transition hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 sm:hidden"
            onClick={() => setIsMobileOpen((prev) => !prev)}
            aria-label="切換導覽選單"
            aria-expanded={isMobileOpen}
            aria-controls="primary-navigation"
          >
            {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <ul className="hidden items-center gap-1 text-sm font-medium lg:flex xl:gap-2">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    clsx(
                      'mono inline-flex rounded-full px-3 py-2 transition xl:px-4',
                      isActive
                        ? 'bg-slate-900 text-white'
                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                    )
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-3 hidden items-center gap-2 border-t border-slate-200 pt-3 text-[0.72rem] text-slate-500 lg:flex">
          <TerminalSquare className="h-4 w-4 text-slate-500" />
          <span className="mono">狀態：持續更新中 / 角色：軟體開發者 / 模式：個人作品集</span>
        </div>

        <ul
          id="primary-navigation"
          className={clsx(
            'mt-3 grid gap-2 border-t border-slate-200 pt-3 text-sm font-medium lg:hidden',
            isMobileOpen ? 'grid' : 'hidden'
          )}
        >
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  clsx(
                    'mono block rounded-xl px-4 py-3 transition',
                    isActive
                      ? 'bg-slate-900 text-white'
                      : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                  )
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
