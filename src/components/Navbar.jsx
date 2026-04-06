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
      <nav className="rounded-[1.15rem] border border-[#39ff1429] bg-[#030a10e3] px-4 py-3 shadow-[0_18px_48px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:px-6">
        <div className="flex items-center justify-between gap-4">
          <NavLink to="/" className="flex min-w-0 items-center gap-3 text-white">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#39ff1430] bg-[#39ff1411] text-[#72ff8f]">
              <Code2 className="h-5 w-5" />
            </span>
            <span className="min-w-0">
              <span className="mono block text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#8af7fe]">
                Andy / 個人作品網站
              </span>
              <span className="block truncate text-sm font-semibold text-zinc-100 sm:text-base">
                全端開發 / 內部工具 / 網站應用
              </span>
            </span>
          </NavLink>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-[#39ff1429] bg-[#39ff140d] p-2 text-[#b8ffb8] transition hover:bg-[#39ff1416] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#39ff14] sm:hidden"
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
                        ? 'bg-[#39ff14] text-[#04110a] shadow-[0_0_22px_rgba(57,255,20,0.22)]'
                        : 'text-zinc-300 hover:bg-[#39ff140f] hover:text-white'
                    )
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-3 hidden items-center gap-2 border-t border-[#39ff1416] pt-3 text-[0.72rem] text-zinc-400 lg:flex">
          <TerminalSquare className="h-4 w-4 text-[#39ff14]" />
          <span className="mono">狀態：持續更新中 / 角色：軟體開發者 / 模式：個人作品集</span>
        </div>

        <ul
          id="primary-navigation"
          className={clsx(
            'mt-3 grid gap-2 border-t border-[#39ff1416] pt-3 text-sm font-medium lg:hidden',
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
                      ? 'bg-[#39ff14] text-[#04110a]'
                      : 'bg-white/[0.02] text-zinc-200 hover:bg-[#39ff140f]'
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
