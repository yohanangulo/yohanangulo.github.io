import { defaultAuthors } from './authors'
import { featuredProjectsToProject } from './featuredProjects'
import type { Project } from './types'

export const allProjects: Project[] = [
  // featuredProjects,
  ...featuredProjectsToProject(),

  // Rest of the projects
  {
    images: [
      '/incontext/001.png',
      '/incontext/002.png',
      '/incontext/003.png',
      '/incontext/004.png',
      '/incontext/005.png',
      '/incontext/006.png',
      '/incontext/007.png',
      '/incontext/008.png',
    ],
    authors: defaultAuthors,
    slug: 'incontext',
    title: 'InContext',
    description:
      'AI-powered thought management app that captures text and audio ideas, transcribes them via Google Cloud Speech-to-Text, and uses Google Gemini to refine scattered thoughts into coherent context. Features real-time Firestore sync, custom prompt templates, and intelligent output generation.',
    tags: ['Clean Architecture', 'Riverpod', 'Firebase', 'Google Gemini AI', 'Cloud Functions', 'Speech-to-Text'],
    categories: ['iOS', 'Android'],
    status: { text: 'In Development', color: 'orange' },
    metrics: [
      { icon: 'sync_alt', label: 'State Management', value: 'Riverpod' },
      { icon: 'architecture', label: 'Architecture', value: 'Clean (Feature-First)' },
      { icon: 'cloud_sync', label: 'Backend', value: 'Firebase + Cloud Functions' },
    ],
    codeUrl: 'https://github.com/makers-ai/in-context',
    actions: [
      {
        icon: 'code',
        label: 'View Code',
        type: 'secondary',
        url: 'https://github.com/makers-ai/in-context',
      },
    ],
  },
]
