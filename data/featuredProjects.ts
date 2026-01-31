import { defaultAuthors, yohanAuthor } from './authors'
import type { FeaturedProject, Project } from './types'

export const featuredProjects: FeaturedProject[] = [
  {
    id: 1,
    slug: 'kairos',
    title: 'Kairos',
    authors: defaultAuthors,
    status: {
      text: 'Live on Store',
      color: 'green',
    },
    description:
      'A personal journaling and mindfulness app featuring multi-modal entries (text, audio, images) with AI-powered insights. Includes audio transcription, image analysis, and intelligent response generation via Firebase Cloud Functions with Genkit. Features streak tracking with GitHub-style heatmap calendar, achievement milestones, 6 insight categories (Mindset, Productivity, Relationships, Career, Health, Purpose), and multi-language support (English/Spanish). Implements Clean Architecture with Riverpod state management, offline-first data sync using Isar, and comprehensive Firebase integration.',
    metrics: [
      { icon: 'sync_alt', label: 'State Management', value: 'Riverpod' },
      { icon: 'architecture', label: 'Architecture', value: 'Clean (Feature-First)' },
      { icon: 'psychology', label: 'AI Features', value: 'Transcription/Analysis/Insights' },
      { icon: 'cloud_sync', label: 'Backend', value: 'Firebase + Cloud Functions' },
    ],
    techStack: [
      'Flutter',
      'Riverpod',
      'Firebase Auth',
      'Cloud Firestore',
      'Firebase Storage',
      'Cloud Functions',
      'Isar',
      'Dio',
      'GoRouter',
      'Google Sign-In',
      'FL Chart',
      'Audio Recording',
      'Clean Arch',
    ],
    actions: [
      {
        icon: 'smartphone',
        label: 'View App',
        type: 'primary',
        url: 'https://apps.apple.com/us/app/kairos-moment/id6755447258',
      },
      {
        icon: 'code',
        label: 'Source Code',
        type: 'secondary',
        url: 'https://github.com/cristianmgm7/kairos',
      },
    ],
    image: '/kairos/Kairos SS - 1.png',
    gallery: [
      '/kairos/Kairos SS - 1.png',
      '/kairos/Kairos SS - 2.png',
      '/kairos/Kairos SS - 3.png',
      '/kairos/Kairos SS - 4.png',
      '/kairos/Kairos SS - 5.png',
      '/kairos/Kairos SS - 6.png',
      '/kairos/Kairos SS - 7.png',
      '/kairos/Kairos SS - 8.png',
    ],
  },
  {
    id: 2,
    slug: 'venley',
    title: 'Venley',
    status: { text: 'Live on Store', color: 'green' },
    authors: [yohanAuthor, { name: 'Venley Team', url: 'https://www.venley.ai/' }],
    description:
      'A legal research and document management platform for Venezuelan lawyers and law students. Features unified search across legal acts, court judgments, and official gazettes with advanced filtering (date ranges, chambers, gazette types). Includes personalized collections for saving documents, subscription-based access with multiple payment methods, and TOTP-based two-factor authentication. Built with Clean Architecture BLoC for state management, multi-version REST API integration with HTTP caching, and comprehensive Firebase integration. Supports iOS, Android, and Web with multi-flavor configuration',
    metrics: [
      { icon: 'sync_alt', label: 'State Management', value: 'BLoC/Cubit' },
      { icon: 'architecture', label: 'Architecture', value: 'Clean (Feature-First)' },
      { icon: 'gavel', label: 'Domain', value: 'LegalTech' },
      { icon: 'cloud_sync', label: 'Backend', value: 'REST API + Firebase' },
    ],
    techStack: [
      'Flutter',
      'BLoC',
      'Firebase',
      'Retrofit',
      'Dio',
      'GoRouter',
      'Freezed',
      'GetIt',
      'Injectable',
      'Clean Arch',
    ],
    actions: [
      {
        icon: 'smartphone',
        label: 'View App',
        type: 'primary',
        url: 'https://play.google.com/store/apps/details?id=io.venley.app',
      },
    ],
    image: '/venley/demo.mp4',
    gallery: [
      '/venley/demo.mp4',
      '/venley/demo2.mp4',
      '/venley/demo3.mp4',
      '/venley/001.png',
      '/venley/002.png',
      '/venley/003.png',
      '/venley/004.png',
      '/venley/005.png',
    ],
  },
  {
    id: 3,
    slug: 'spendingpal',
    title: 'SpendingPal',
    status: { text: 'In Development', color: 'orange' },
    description:
      'A personal expense tracking application for managing daily spending. Features transaction management with categories, dashboard analytics, speech-to-text input, multi-language support (English/Spanish), and offline-first architecture with cloud sync. Implements clean architecture with BLoC state management.',
    metrics: [
      { icon: 'sync_alt', label: 'State Management', value: 'BLoC/Cubit' },
      { icon: 'architecture', label: 'Architecture', value: 'Clean (Feature-First)' },
      { icon: 'cloud_sync', label: 'Backend', value: 'Firebase + REST API' },
      { icon: 'paid', label: 'Domain', value: 'FinTech' },
    ],
    techStack: ['Flutter', 'BLoC', 'Firebase', 'Drift', 'Go Router', 'Freezed', 'Clean Arch'],
    actions: [
      {
        icon: 'code',
        label: 'Source Code',
        type: 'secondary',
        url: 'https://github.com/yohanangulo/spending-pal',
      },
    ],
    image: '/spendingpal/video_demo.mp4',
    gallery: [
      '/spendingpal/video_demo.mp4',
      '/spendingpal/demo3.mp4',
      '/spendingpal/demo2.mp4',
      '/spendingpal/001.png',
      '/spendingpal/002.png',
      '/spendingpal/003.png',
      '/spendingpal/004.png',
      '/spendingpal/005.png',
    ],
  },

  {
    id: 4,
    slug: 'the-circle-club',
    title: 'The Circle Club',
    authors: [yohanAuthor, { name: 'Kiwi Company', url: 'https://www.kiwicompany.io/' }],
    status: { text: 'Live on Store', color: 'green' },
    description:
      'A multi-role influencer-client collaboration management platform. Features role-based authentication (Admin, Influencer, Client), collaboration workflow management, content upload and approval system, push   notifications, Google Maps integration for location services, and multi-language support (Spanish). Implements Clean Architecture with BLoC state management and comprehensive Firebase integration for analytics and crash       reporting.',
    metrics: [
      { icon: 'sync_alt', label: 'State Management', value: 'BLoC/Cubit' },
      { icon: 'architecture', label: 'Architecture', value: 'Clean (Feature-First)' },
      { icon: 'people', label: 'User Roles', value: 'Admin/Influencer/Client' },
      { icon: 'cloud_sync', label: 'Backend', value: 'Supabase + REST API' },
    ],
    techStack: [
      'Flutter',
      'BLoC',
      'Supabase',
      'Firebase',
      'Dio/Retrofit',
      'Go Router',
      'Freezed',
      'Get_it/Injectable',
      'Google Maps',
      'Clean Arch',
    ],
    actions: [
      {
        icon: 'smartphone',
        label: 'View App',
        type: 'primary',
        url: 'https://apps.apple.com/ve/app/the-circle-club/id6746809046?l=en-GB',
      },
    ],
    image: '/tcc/video_demo.mp4',
    gallery: ['/tcc/video_demo.mp4', '/tcc/001.png', '/tcc/002.png', '/tcc/003.png', '/tcc/004.png', '/tcc/005.png'],
  },
]

export function featuredProjectsToProject() {
  return featuredProjects.map<Project>(project => ({
    appUrl: project.actions.find(action => action.label === 'View App')?.url,
    codeUrl: project.actions.find(action => action.label === 'Source Code')?.url,
    title: project.title,
    slug: project.slug,
    authors: project.authors,
    description: project.description,
    images: project.gallery || [project.image],
    tags: project.techStack,
    status: project.status,
    metrics: project.metrics,
    actions: project.actions,
  }))
}
