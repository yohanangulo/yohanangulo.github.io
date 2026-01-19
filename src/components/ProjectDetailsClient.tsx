'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, Variants } from 'motion/react'

import { messages, type Project } from '@/../data'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ImageLightbox from '@/components/ImageLightbox'

interface ProjectDetailsClientProps {
  project: Project
}

export default function ProjectDetailsClient({ project }: ProjectDetailsClientProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const getStatusColor = (color: string) => {
    switch (color) {
      case 'green':
        return 'bg-green-500/10 text-green-500 ring-green-500/20'
      case 'blue':
        return 'bg-blue-500/10 text-blue-500 ring-blue-500/20'
      case 'red':
        return 'bg-red-500/10 text-red-500 ring-red-500/20'
      case 'orange':
        return 'bg-orange-500/10 text-orange-500 ring-orange-500/20'
      default:
        return 'bg-gray-500/10 text-gray-500 ring-gray-500/20'
    }
  }

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { delay: i * 0.05, duration: 0.3, ease: 'easeOut' },
    }),
  }

  return (
    <main className="min-h-screen">
      <Navigation>
        <Link className="text-slate-300 hover:text-white text-sm font-medium transition-colors" href="/#work">
          {messages.nav_link_work}
        </Link>
      </Navigation>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Link */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors"
        >
          <span className="material-icons text-[20px]">arrow_back</span>
          Back to projects
        </Link>

        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <h1 className="text-4xl md:text-5xl font-black text-white">{project.title}</h1>
            {project.status && (
              <span
                className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ring-1 ring-inset ${getStatusColor(project.status.color)}`}
              >
                {project.status.text}
              </span>
            )}
          </div>

          {/* Authors */}
          {project.authors && project.authors.length > 0 && (
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm text-slate-500">with</span>
              <div className="flex flex-wrap gap-2">
                {project.authors.map((author, idx) =>
                  author.url ? (
                    <a
                      key={idx}
                      href={author.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-border-dark/50 text-sm text-slate-300 hover:text-white hover:bg-primary transition-colors"
                    >
                      <span className="material-icons text-[14px]">person</span>
                      {author.name}
                    </a>
                  ) : (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-800/50 text-sm text-slate-400"
                    >
                      <span className="material-icons text-[14px]">person</span>
                      {author.name}
                    </span>
                  ),
                )}
              </div>
            </div>
          )}

          <p className="text-lg text-slate-400 leading-relaxed max-w-4xl">{project.description}</p>
        </div>

        {/* Metrics Grid */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {project.metrics.map((metric, index) => (
              <div key={index} className="p-4 rounded-xl bg-surface-dark border border-border-dark">
                <div className="flex items-center gap-2 mb-2 text-slate-500 text-xs font-semibold uppercase tracking-wider">
                  <span className="material-icons text-[16px]">{metric.icon}</span>
                  {metric.label}
                </div>
                <div className="text-base md:text-lg font-bold text-white wrap-break-word">{metric.value}</div>
              </div>
            ))}
          </div>
        )}

        {/* Tech Stack */}
        {project.tags && project.tags.length > 0 && (
          <div className="mb-12">
            <h2 className="text-xl font-bold text-white mb-4">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tech, index) => (
                <span
                  key={index}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium border ${
                    tech === 'Flutter'
                      ? 'bg-primary/10 text-primary border-primary/20'
                      : 'bg-border-dark/50 text-slate-300 border-border-dark'
                  }`}
                >
                  {tech === 'Flutter' && <span className="material-icons text-[16px]">flutter_dash</span>}
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Actions */}
        {project.actions && project.actions.length > 0 && (
          <div className="flex flex-wrap gap-4 mb-12">
            {project.actions.map((action, index) => (
              <a
                key={index}
                href={action.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors ${
                  action.type === 'primary'
                    ? 'bg-primary text-black hover:bg-primary/90'
                    : 'bg-surface-dark border border-border-dark text-white hover:border-primary/40'
                }`}
              >
                <span className="material-icons text-[20px]">{action.icon}</span>
                {action.label}
              </a>
            ))}
          </div>
        )}

        {/* Gallery Section */}
        {project.images && project.images.length > 0 && (
          <div>
            <h2 className="text-xl font-bold text-white mb-6">Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {project.images.map((image, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={imageVariants}
                  initial="hidden"
                  animate="visible"
                  onClick={() => setSelectedImage(image)}
                  className="relative aspect-9/19.5 rounded-xl overflow-hidden bg-surface-dark border border-border-dark cursor-pointer group"
                >
                  {image.endsWith('.gif') ||
                  image.endsWith('.png') ||
                  image.endsWith('.jpg') ||
                  image.endsWith('.jpeg') ||
                  image.endsWith('.webp') ? (
                    <Image
                      src={image}
                      alt={`${project.title} screenshot ${index + 1}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : image.endsWith('.mp4') ? (
                    <video src={image} autoPlay muted loop playsInline className="w-full h-full object-cover" />
                  ) : (
                    <div
                      className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                      style={{ backgroundImage: `url("${image}")` }}
                    />
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <span className="material-icons text-white text-4xl opacity-0 group-hover:opacity-100 transition-opacity">
                      zoom_in
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>

      <ImageLightbox selectedImage={selectedImage} onClose={() => setSelectedImage(null)} />
      <Footer />
    </main>
  )
}
