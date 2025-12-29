'use client'

import { legacyAnimations } from '@/utils/legacy-animations'
import { motion } from 'motion/react'
import React from 'react'
import { messages } from '../../data'

const features = [
  { icon: 'speed', name: messages.about_feature_performance },
  { icon: 'devices', name: messages.about_feature_responsive },
  { icon: 'account_balance', name: messages.about_feature_clean_arch },
]

export default function About() {
  return (
    <section className="w-full bg-surface-dark/30 border-y border-border-dark/30 py-16 md:py-24" id="about">
      <motion.div {...legacyAnimations.fadeInAnimation} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-primary font-bold text-sm tracking-widest uppercase mb-4 block">{messages.about_me_title}</span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{messages.about_heading}</h2>
        <p className="text-lg text-slate-400 leading-relaxed mb-10">
          {messages.about_description}
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {features.map(feature => (
            <div key={feature.name} className="flex flex-col items-center gap-2 p-4 min-w-[140px]">
              <div className="size-12 rounded-full bg-surface-dark border border-border-dark flex items-center justify-center text-white">
                <span className="material-icons">{feature.icon}</span>
              </div>
              <span className="text-white font-bold">{feature.name}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
