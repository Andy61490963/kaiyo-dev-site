import React, { useEffect, useState } from 'react'
import clsx from 'classnames'
import { motion } from 'framer-motion'
import { Code2, Menu, MoonStar, SunMedium, X } from 'lucide-react'
import { NavLink, useLocation } from 'react-router-dom'

const navItems = [
  { to: '/', label: '首頁' },
  { to: '/about', label: '關於我' },
  { to: '/projects', label: '專案' },
  { to: '/notes', label: '筆記' },
  { to: '/contact', label: '聯絡' },
]

export default function Navbar({ isDarkMode, onToggleTheme }) {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  const themeLabel = isDarkMode ? '切換為淺色模式' : '切換為深色模式'

  useEffect(() => {
    setIsMobileOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 18)

    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed left-1/2 top-4 z-40 w-[calc(100%-1.25rem)] max-w-[1180px] -translate-x-1/2">
      <motion.nav
        animate={{ y: isScrolled ? -2 : 0, scale: isScrolled ? 0.99 : 1 }}
        transition={{ duration: 0.22, ease: 'easeOut' }}
        className={clsx(
          'rounded-[1.35rem] border bg-white/72 px-4 py-3 backdrop-blur-xl sm:px-6',
          isScrolled
            ? 'border-white/80 shadow-[0_18px_45px_rgba(15,23,42,0.12)]'
            : 'border-white/70 shadow-[0_10px_30px_rgba(15,23,42,0.08)]'
        )}
      >
        <div className="flex items-center justify-between gap-4">
          <NavLink to="/" className="flex min-w-0 items-center gap-3 text-slate-900">
            <motion.span
              whileHover={{ rotate: -8, scale: 1.05 }}
              className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200/80 bg-white/85 text-slate-700"
            >
              <Code2 className="h-5 w-5" />
            </motion.span>

            <span className="min-w-0">
              <span className="mono block text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-slate-500">
                Andy Portfolio
              </span>
              <span className="block truncate text-sm font-semibold text-slate-900 sm:text-base">
                後端開發 / 系統整合 / 流程型系統
              </span>
            </span>
          </NavLink>

          <div className="hidden items-center gap-1 text-sm font-medium lg:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  clsx(
                    'mono inline-flex rounded-full px-3 py-2 transition duration-200 xl:px-4',
                    isActive
                      ? 'bg-slate-900 text-white shadow-[0_10px_24px_rgba(15,23,42,0.12)]'
                      : 'text-slate-600 hover:bg-white hover:text-slate-900'
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <div className="relative hidden lg:block">
              <button
                type="button"
                onClick={onToggleTheme}
                className="theme-toggle-button group inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/80 p-2 text-slate-700 transition hover:bg-white"
                aria-label={themeLabel}
              >
                {isDarkMode ? <SunMedium className="h-4 w-4" /> : <MoonStar className="h-4 w-4" />}
                <span className="theme-toggle-tooltip">{themeLabel}</span>
              </button>
            </div>

            <div className="relative lg:hidden">
              <button
                type="button"
                onClick={onToggleTheme}
                className="theme-toggle-button inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/80 p-2 text-slate-700 transition hover:bg-white"
                aria-label={themeLabel}
                title={themeLabel}
              >
                {isDarkMode ? <SunMedium className="h-4 w-4" /> : <MoonStar className="h-4 w-4" />}
              </button>
            </div>

            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/80 p-2 text-slate-700 transition hover:bg-white lg:hidden"
              onClick={() => setIsMobileOpen((prev) => !prev)}
              aria-label="切換選單"
              aria-expanded={isMobileOpen}
              aria-controls="primary-navigation"
            >
              {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <ul
          id="primary-navigation"
          className={clsx(
            'mt-3 grid gap-2 border-t border-slate-200/80 pt-3 text-sm font-medium lg:hidden',
            isMobileOpen ? 'grid' : 'hidden'
          )}
        >
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  clsx(
                    'mono block rounded-xl px-4 py-3 transition duration-200',
                    isActive ? 'bg-slate-900 text-white' : 'bg-white/70 text-slate-700 hover:bg-white'
                  )
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </motion.nav>
    </header>
  )
}