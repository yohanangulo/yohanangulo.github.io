'use client'

import { useState } from 'react'
import { allProjects, messages } from '@/../data'
import Navigation from '@/components/Navigation'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { motion, Variants } from 'motion/react'
import ImageLightbox from '@/components/ImageLightbox'

export default function AllProjects() {
  const [filter] = useState('All')
  const [visibleCount, setVisibleCount] = useState(6)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const cardVariants: Variants = {
    hidden: (i: number) => ({
      filter: 'blur(5px)',
      opacity: 0,
      x: i % 2 === 0 ? -60 : 60,
      y: 80,
      scale: 1.1,
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

  // Filter projects based on the selected category
  const filteredProjects = allProjects.filter(project => {
    if (filter === 'All') return true
    return project.categories?.includes(filter) || false
  })

  // Load more projects handler
  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 6)
  }

  return (
    <main>
      <Navigation>
        <Link className="text-slate-300 hover:text-white text-sm font-medium transition-colors" href="/#work">
          {messages.nav_link_work}
        </Link>
      </Navigation>

      {/* Main Content */}
      <div className="flex flex-1 justify-center py-10 px-4 md:px-10">
        <div className="flex flex-col max-w-300 flex-1 gap-8">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h1 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
                {messages.projects_title}
              </h1>
              <p className="text-text-secondary text-lg font-normal leading-normal max-w-2xl">
                {messages.projects_description}
              </p>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.slice(0, visibleCount).map((project, index) => (
              <motion.article
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-200px' }}
                className="group relative flex flex-col bg-surface-dark rounded-xl overflow-hidden border border-surface-border hover:border-flutter-blue shadow-lg hover:shadow-flutter-blue/10"
              >
                {/* Invisible link overlay for SEO and accessibility */}
                {project.slug && (
                  <Link
                    href={`/projects/${project.slug}`}
                    className="absolute inset-0 z-10"
                    aria-label={`Ver detalles de ${project.title}`}
                  />
                )}
                <div className="absolute top-4 right-4 z-20 bg-surface-dark/90 backdrop-blur-sm p-1.5 rounded-lg border border-surface-border pointer-events-none">
                  <svg
                    className="w-6 h-6 text-flutter-blue"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.357L14.314 0zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z"></path>
                  </svg>
                </div>
                <div className="relative z-20 p-6 flex flex-col gap-4 h-full pointer-events-none">
                  <div className="flex justify-between items-start pr-10">
                    <h3
                      className={`text-white text-xl font-bold leading-tight tracking-tight ${project.slug ? 'group-hover:text-flutter-blue transition-colors' : ''}`}
                    >
                      {project.title}
                    </h3>
                  </div>
                  {/* Authors */}
                  {project.authors && project.authors.length > 0 && (
                    <div className="flex items-center gap-2 -mt-2">
                      <span className="text-[11px] text-text-secondary">with</span>
                      <div className="flex flex-wrap gap-1">
                        {project.authors.map((author, idx) =>
                          author.url ? (
                            <a
                              key={idx}
                              href={author.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={e => e.stopPropagation()}
                              className="pointer-events-auto inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-surface-border/40 text-[10px] text-text-secondary hover:text-flutter-blue transition-colors"
                            >
                              {author.name}
                            </a>
                          ) : (
                            <span
                              key={idx}
                              className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-surface-border/40 text-[10px] text-text-secondary"
                            >
                              {author.name}
                            </span>
                          ),
                        )}
                      </div>
                    </div>
                  )}
                  <p className="text-text-secondary text-sm leading-relaxed line-clamp-2">{project.description}</p>
                  <div className="grid grid-cols-3 gap-2 my-2">
                    {project.images?.slice(0, 3).map((img, idx) => (
                      <motion.div
                        key={`${img}`}
                        custom={{ i: idx, isLeft: index % 2 !== 0 }}
                        variants={cardVariants}
                        initial="imgHidden"
                        whileInView="imgVisible"
                        viewport={{ once: true, margin: '-50px' }}
                        onClick={e => {
                          e.preventDefault()
                          e.stopPropagation()
                          setSelectedImage(img)
                        }}
                        className="cursor-pointer pointer-events-auto"
                      >
                        <div
                          key={idx}
                          className="relative w-full aspect-9/19.5 rounded-lg overflow-hidden bg-background-dark border border-surface-border/30"
                        >
                          {img.endsWith('.mp4') ? (
                            <video
                              src={img}
                              autoPlay
                              muted
                              loop
                              playsInline
                              className="absolute inset-0 w-full h-full object-cover opacity-100 hover:opacity-90"
                            />
                          ) : (
                            <div
                              className="absolute inset-0 bg-cover bg-center opacity-100 hover:opacity-90 transition-transform duration-500 hover:scale-105 transform"
                              style={{ backgroundImage: `url("${img}")` }}
                            />
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <div className="flex flex-col gap-3 mt-auto">
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map(tag => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-full bg-surface-border/40 text-[11px] font-semibold text-text-secondary uppercase tracking-wide border border-surface-border"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {(project.codeUrl || project.appUrl) && (
                      <div className="pt-3 border-t border-surface-border flex gap-3">
                        {project.codeUrl && (
                          <a
                            className="pointer-events-auto flex flex-1 items-center justify-center gap-2 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white text-sm font-medium transition-colors"
                            href={project.codeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={e => e.stopPropagation()}
                          >
                            <span className="material-icons text-[18px]">code</span>
                            {messages.projects_view_code}
                          </a>
                        )}
                        {project.appUrl && (
                          <a
                            className="pointer-events-auto flex flex-1 items-center justify-center gap-2 py-2 rounded-lg bg-flutter-blue hover:bg-flutter-blue/90 text-background-dark text-sm font-bold transition-colors"
                            href={project.appUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={e => e.stopPropagation()}
                          >
                            <span className="material-icons text-[18px]">smartphone</span>
                            {messages.projects_view_app}
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Load More Button */}
          {visibleCount < filteredProjects.length && (
            <div className="flex justify-center pt-8 pb-10">
              <button
                onClick={handleLoadMore}
                className="flex items-center gap-2 px-6 py-3 bg-surface-border hover:bg-surface-dark text-white rounded-lg transition-colors font-medium text-sm cursor-pointer"
              >
                <span>{messages.projects_load_more}</span>
                <span className="material-icons text-sm">expand_more</span>
              </button>
            </div>
          )}
        </div>
      </div>

      <ImageLightbox selectedImage={selectedImage} onClose={() => setSelectedImage(null)} />

      <Footer />
    </main>
  )
}
