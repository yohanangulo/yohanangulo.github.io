'use client'

import { legacyAnimations } from '@/utils/legacy-animations'
import { motion } from 'motion/react'
import { messages } from '../../data'

const skills = [
  { icon: 'phone_android', name: 'Flutter' },
  { icon: 'code', name: 'Dart' },
  { icon: 'whatshot', name: 'Firebase' },
  { icon: 'waves', name: 'Riverpod' },
  { icon: 'layers', name: 'BLoC' },
  { icon: 'device_hub', name: 'GraphQL' },
  { icon: 'build', name: 'CI/CD' },
  { icon: 'terminal', name: 'Native Channels' },
  { icon: 'palette', name: 'Figma' },
  { icon: 'http', name: 'REST APIs' },
]

export default function Skills() {
  return (
    <motion.section
      {...legacyAnimations.fadeInAnimation}
      className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 scroll-mt-20 border-b border-border-dark/30 mx-auto"
      id="skills"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-2">{messages.skills_title}</h2>
          <p className="text-slate-400 max-w-lg">{messages.skills_description}</p>
        </div>
        <a className="text-primary text-sm font-bold hover:underline flex items-center gap-1" href="#">
          {messages.skills_view_full_stack}
          <span className="material-icons text-sm">arrow_forward</span>
        </a>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 justify-center">
        {skills.map(skill => (
          <div
            key={skill.name}
            className="flex items-center gap-3 p-4 rounded-lg border border-border-dark bg-surface-dark hover:border-primary/50 hover:bg-surface-dark/80 transition-all group cursor-default"
          >
            <span className="material-icons text-slate-400 group-hover:text-primary transition-colors">{skill.icon}</span>
            <span className="text-sm font-bold text-white">{skill.name}</span>
          </div>
        ))}
      </div>
    </motion.section>
  )
}
