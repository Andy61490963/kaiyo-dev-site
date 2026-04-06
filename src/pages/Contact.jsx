import React from 'react'
import { Github, MapPin, Rocket, UserRound } from 'lucide-react'
import SectionContainer from '../components/SectionContainer.jsx'
import { contact } from '../data/contact.js'

const cards = [
  {
    icon: Github,
    label: 'GitHub',
    value: contact.githubUsername,
    href: `https://github.com/${contact.githubUsername}`,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: contact.location,
    href: null,
  },
  {
    icon: UserRound,
    label: 'Role',
    value: contact.title,
    href: null,
  },
  {
    icon: Rocket,
    label: 'Availability',
    value: 'Open to collaboration and new product ideas',
    href: null,
  },
]

export default function Contact() {
  return (
    <>
      <SectionContainer subtitle="Contact" title="Where to find me and what I am open to building">
        <div className="max-w-3xl space-y-4 text-base leading-8 text-zinc-300">
          <p>{contact.intro}</p>
          <p>{contact.availability}</p>
        </div>
      </SectionContainer>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {cards.map((item) => {
          const content = (
            <div className="glass-card h-full">
              <div className="glass-card__inner">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
                  <item.icon className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-white">{item.label}</p>
                  <p className="break-all text-sm leading-7 text-zinc-300">{item.value}</p>
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
