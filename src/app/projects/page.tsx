'use client'

import { useState } from 'react'
import projectsData from '@/../data/allProjects.json'
import Navigation from '@/components/Navigation'
import Link from 'next/link'
import Footer from '@/components/Footer'

export default function AllProjects() {
  const [filter] = useState('All')
  const [visibleCount, setVisibleCount] = useState(6)

  // Filter projects based on the selected category
  const filteredProjects = projectsData.filter(project => {
    if (filter === 'All') return true
    return project.categories.includes(filter)
  })

  // Load more projects handler
  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 6)
  }

  return (
    <main>
      <Navigation>
        <Link className="text-slate-300 hover:text-white text-sm font-medium transition-colors" href="/#work">
          Work
        </Link>
      </Navigation>

      {/* Main Content */}
      <div className="flex flex-1 justify-center py-10 px-4 md:px-10">
        <div className="flex flex-col max-w-[1200px] flex-1 gap-8">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h1 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">All Projects</h1>
              <p className="text-text-secondary text-lg font-normal leading-normal max-w-2xl">
                A curated collection of high-performance mobile applications built with Flutter. Exploring advanced state
                management, custom animations, and cross-platform architecture.
              </p>
            </div>
            {/* Filters */}
            {/* <div className="flex gap-3 flex-wrap pb-2">
              {['All', 'iOS', 'Android', 'Packages'].map(item => (
                <button
                  key={item}
                  onClick={() => setFilter(item)}
                  className={`flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg pl-3 pr-5 transition-all ${
                    filter === item ? 'bg-primary active:scale-95' : 'bg-surface-border hover:bg-surface-dark'
                  }`}
                >
                  <span className="material-icons text-white text-[20px]">
                    {item === 'All' ? 'check' : item === 'iOS' ? 'smartphone' : item === 'Android' ? 'android' : 'widgets'}
                  </span>
                  <p className="text-white text-sm font-medium leading-normal">{item}</p>
                </button>
              ))}
            </div> */}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.slice(0, visibleCount).map((project, index) => (
              <article
                key={index}
                className="group relative flex flex-col bg-surface-dark rounded-xl overflow-hidden border border-surface-border hover:border-flutter-blue transition-all duration-300 shadow-lg hover:shadow-flutter-blue/10"
              >
                <div className="absolute top-4 right-4 z-10 bg-surface-dark/90 backdrop-blur-sm p-1.5 rounded-lg border border-surface-border">
                  <svg
                    className="w-6 h-6 text-flutter-blue"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.357L14.314 0zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z"></path>
                  </svg>
                </div>
                <div className="p-6 flex flex-col gap-4 h-full">
                  <div className="flex justify-between items-start pr-10">
                    <h3 className="text-white text-xl font-bold leading-tight tracking-tight group-hover:text-flutter-blue transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed line-clamp-2">{project.description}</p>
                  <div className="grid grid-cols-3 gap-2 my-2">
                    {project.images.map((img, idx) => (
                      <div
                        key={idx}
                        className="relative w-full aspect-9/16 rounded-lg overflow-hidden bg-background-dark border border-surface-border/30"
                      >
                        <div
                          className={`absolute inset-0 bg-cover bg-center opacity-90 group-hover:opacity-100 transition-opacity duration-500 hover:scale-105 transform ${
                            idx === 1 ? 'delay-75' : idx === 2 ? 'delay-150' : ''
                          }`}
                          style={{ backgroundImage: `url("${img}")` }}
                        ></div>
                      </div>
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
                    <div className="pt-3 border-t border-surface-border flex gap-3">
                      <a
                        className="flex flex-1 items-center justify-center gap-2 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white text-sm font-medium transition-colors"
                        href="#"
                      >
                        <span className="material-icons text-[18px]">code</span>
                        View Code
                      </a>
                      <a
                        className="flex flex-1 items-center justify-center gap-2 py-2 rounded-lg bg-flutter-blue hover:bg-flutter-blue/90 text-background-dark text-sm font-bold transition-colors"
                        href="#"
                      >
                        <span className="material-icons text-[18px]">play_arrow</span>
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          {visibleCount < filteredProjects.length && (
            <div className="flex justify-center pt-8 pb-10">
              <button
                onClick={handleLoadMore}
                className="flex items-center gap-2 px-6 py-3 bg-surface-border hover:bg-surface-dark text-white rounded-lg transition-colors font-medium text-sm cursor-pointer"
              >
                <span>Load More Projects</span>
                <span className="material-icons text-sm">expand_more</span>
              </button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </main>
  )
}
