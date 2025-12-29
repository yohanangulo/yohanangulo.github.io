'use client'

import Image from 'next/image'
import Link from 'next/link'

import projects from '@/../data/featuredProjects.json'
import { Variants } from 'motion'
import { motion } from 'motion/react'

export default function FeaturedWork() {
  const cardVariants: Variants = {
    hidden: (i: number) => ({
      filter: 'blur(5px)',
      opacity: 0,
      x: i % 2 === 0 ? -60 : 60,
      y: 80,
      scale: 1.2,
    }),

    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        delay: (i % 2) * 0.1,
        duration: 0.4,
        ease: 'backOut',
      },
    }),

    imgHidden: ({ isLeft }: { isLeft: boolean }) => ({
      filter: 'blur(5px)',
      opacity: 0,
      x: isLeft ? 60 : -60,
      y: 80,
      scale: 1.1,
    }),

    imgVisible: () => {
      return {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        filter: 'blur(0px)',
        transition: {
          duration: 0.4,
          ease: 'backOut',
        },
      }
    },
  }
  const getStatusColor = (color: string) => {
    switch (color) {
      case 'green':
        return 'bg-green-500/10 text-green-500 ring-green-500/20'
      case 'blue':
        return 'bg-blue-500/10 text-blue-500 ring-blue-500/20'
      default:
        return 'bg-gray-500/10 text-gray-500 ring-gray-500/20'
    }
  }

  return (
    <section className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 border-b border-border-dark/30 mx-auto" id="work">
      <div className="space-y-6 mb-12">
        <div className="flex flex-col gap-4 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.1] text-white">
            Featured <span className="text-primary">Work</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-400 leading-relaxed">
            Engineering seamless mobile experiences with Flutter. Focused on high-performance architectures, complex state
            management, and scalable design systems.
          </p>
        </div>
        <div className="h-px w-full bg-linear-to-r from-border-dark/50 to-transparent"></div>
      </div>

      <div className="flex flex-col gap-12">
        {projects.map((project, index) => (
          <motion.article
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-200px' }}
            key={project.id}
            className="group relative flex flex-col md:flex-row gap-8 p-6 md:p-8 rounded-2xl bg-surface-dark border border-border-dark hover:border-primary/40 shadow-sm hover:shadow-xl hover:shadow-primary/5"
          >
            {/* Content Side */}
            <div className="flex-1 flex flex-col gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">{project.title}</h3>
                  {project.status && (
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${getStatusColor(
                        project.status.color,
                      )}`}
                    >
                      {project.status.text}
                    </span>
                  )}
                </div>
                <p className="text-base text-slate-400 leading-relaxed">{project.description}</p>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-4">
                {project.metrics.map((metric, index) => (
                  <div key={index} className="p-3 rounded-lg bg-black/20 border border-border-dark">
                    <div className="flex items-center gap-2 mb-1 text-slate-500 text-xs font-semibold uppercase tracking-wider">
                      <span className="material-icons text-[16px]">{metric.icon}</span>
                      {metric.label}
                    </div>
                    <div className="text-lg font-bold text-white">{metric.value}</div>
                  </div>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium border ${
                      tech === 'Flutter'
                        ? 'bg-primary/10 text-primary border-primary/20'
                        : 'bg-border-dark/50 text-slate-300 border-border-dark'
                    }`}
                  >
                    {tech === 'Flutter' && <span className="material-icons text-[14px]">flutter_dash</span>}
                    {tech}
                  </span>
                ))}
              </div>

              <div className="grow"></div>

              {/* Actions */}
              <div className="flex items-center gap-4 mt-2">
                {project.actions.map((action, index) => (
                  <a
                    key={index}
                    className={`flex items-center gap-2 text-sm font-semibold transition-colors ${
                      action.type === 'primary' ? 'text-white hover:text-primary' : 'text-slate-400 hover:text-white'
                    }`}
                    href="#"
                  >
                    <span className="material-icons text-[20px]">{action.icon}</span>
                    {action.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Visual Side (Mockup) */}
            <motion.div
              className="w-full md:w-[320px] shrink-0 flex items-center justify-center bg-black/20 rounded-xl p-8 border border-border-dark overflow-hidden group-hover:bg-black/30 transition-colors"
              custom={{ i: index, isLeft: index % 2 !== 0 }}
              variants={cardVariants}
              initial="imgHidden"
              whileInView="imgVisible"
              viewport={{ once: true, margin: '-150px' }}
            >
              {/* Phone Frame Simulation */}
              <div className="relative w-[200px] aspect-9/19 rounded-[2.5rem] bg-slate-900 ring-8 ring-slate-800 shadow-2xl group-hover:scale-[1.02] group-hover:-translate-y-2 transition-transform duration-500 ease-out">
                {/* Notch */}
                <div
                  className={`absolute top-0 left-1/2 -translate-x-1/2 h-[18px] w-[80px] bg-black rounded-b-xl z-20 ${
                    project.id === 2 ? 'hidden' : ''
                  }`}
                ></div>
                {/* Android hole punch for project 2 */}
                {project.id === 2 && (
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 h-3 w-3 bg-black rounded-full z-20"></div>
                )}
                {/* Screen */}
                <div
                  className={`absolute inset-[2px] rounded-[2.3rem] overflow-hidden ${
                    project.id === 2 ? 'bg-white' : project.id === 3 ? 'bg-[#e5e5e5]' : 'bg-[#0d131a]'
                  }`}
                >
                  <Image
                    alt={`${project.title} UI`}
                    src={project.image}
                    width={196}
                    height={392}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay Gradient for depth */}
                  {project.id === 1 && (
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>
                  )}
                  {/* Status Bar Overlay for project 2 */}
                  {project.id === 2 && <div className="absolute top-0 w-full h-8 bg-black/10 backdrop-blur-[2px]"></div>}
                </div>
              </div>
            </motion.div>
          </motion.article>
        ))}
      </div>

      {/* View All Projects Link */}
      <div className="mt-12 text-center">
        <Link
          className="inline-flex items-center gap-2 px-6 py-3 border border-border-dark text-white rounded-lg hover:bg-surface-dark transition-colors font-medium"
          href="/projects"
        >
          <span className="material-icons">hub</span>
          View All Projects
        </Link>
      </div>
    </section>
  )
}
