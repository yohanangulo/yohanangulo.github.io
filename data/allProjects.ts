import { defaultAuthors, yohanAuthor } from './authors'
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

  {
    appUrl: 'https://www.sogefacturas.com/',
    images: [
      '/sogefacturas/001.png',
      '/sogefacturas/002.png',
      '/sogefacturas/003.png',
      '/sogefacturas/004.png',
      '/sogefacturas/005.png',
      '/sogefacturas/006.png',
      '/sogefacturas/007.png',
      '/sogefacturas/008.png',
    ],
    authors: [{ name: 'OneSoft', url: 'https://www.instagram.com/onesoftrd/' }, yohanAuthor],
    slug: 'sogefacturas',
    title: 'Soge Facturas',
    description:
      "Billing and invoicing app for OneSoft's financial services. Features customer charge management, sales tracking, client management, and Bluetooth thermal printer integration for instant receipt printing. Built with Clean Architecture and real-time dashboard statistics.",
    tags: ['Clean Architecture', 'Flutter BLoC', 'Retrofit', 'GetIt/Injectable', 'Bluetooth Printing', 'Go Router'],
    categories: ['Android'],
    status: { text: 'Live in their website', color: 'green' },
    metrics: [
      { icon: 'sync_alt', label: 'State Management', value: 'BLoC/Cubit' },
      { icon: 'architecture', label: 'Architecture', value: 'Clean Architecture' },
      { icon: 'api', label: 'Backend', value: 'REST API + Retrofit' },
    ],
    actions: [
      {
        icon: 'smartphone',
        label: 'View App',
        type: 'primary',
        url: 'https://www.sogefacturas.com/',
      },
    ],
  },
]
