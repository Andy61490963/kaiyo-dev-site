import React from 'react'
import { Github, Mail, MapPin, Phone, UserRound } from 'lucide-react'
import SectionContainer from '../components/SectionContainer.jsx'
import { contact } from '../data/contact.js'

const cards = [
  {
    icon: Mail,
    label: 'Email',
    value: contact.email,
    href: `mailto:${contact.email}`,
  },
  {
    icon: Phone,
    label: '電話',
    value: contact.phone,
    href: null,
  },
  {
    icon: Github,
    label: 'GitHub',
    value: contact.githubUsername,
    href: `https://github.com/${contact.githubUsername}`,
  },
  {
    icon: MapPin,
    label: '地點',
    value: contact.location,
    href: null,
  },
  {
    icon: UserRound,
    label: '角色定位',
    value: contact.title,
    href: null,
  },
]

export default function Contact() {
  return (
    <>
      <SectionContainer subtitle="聯絡我" title="我的聯絡方式與目前職涯方向">
        <div className="max-w-3xl space-y-4 text-base leading-8 text-slate-600">
          <p>{contact.intro}</p>
          <p>{contact.availability}</p>
        </div>
      </SectionContainer>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {cards.map((item) => {
          const content = (
            <div className="glass-card h-full">
              <div className="glass-card__inner">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-slate-700">
                  <item.icon className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="break-all text-sm leading-7 text-slate-600">{item.value}</p>
                </div>
              </div>
            </div>
          )

          if (!item.href) {
            return <div key={item.label}>{content}</div>
          }

          return (
            <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer">
              {content}
            </a>
          )
        })}
      </div>
    </>
  )
}
