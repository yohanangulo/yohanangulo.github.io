import { defaultAuthors, yohanAuthor } from './authors'
import type { FeaturedProject } from './types'

export const featuredProjects: FeaturedProject[] = [
  {
    id: 1,
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
  },
  {
    id: 2,
    title: 'Venley',
    status: { text: 'Live on Store', color: 'green' },
    authors: [yohanAuthor, { name: 'Venley Team', url: 'https://www.venley.ai/' }],
    description:
      'A legal research platform for Venezuelan lawyers and law students. Features comprehensive access to TSJ court judgments, official gazettes, and legal acts with advanced search, personal collections, and      subscription-based premium features. Implements clean architecture with BLoC state management.',
    metrics: [
      { icon: 'sync_alt', label: 'State Management', value: 'BLoC/Cubit' },
      { icon: 'architecture', label: 'Architecture', value: 'Clean (Feature-First)' },
    ],
    techStack: ['Flutter', 'BLoC', 'Firebase', 'Retrofit', 'Go Router', 'Freezed', 'Clean Arch'],
    actions: [
      {
        icon: 'smartphone',
        label: 'View App',
        type: 'primary',
        url: 'https://play.google.com/store/apps/details?id=io.venley.app',
      },
    ],
    image: '/venley/demo.mp4',
  },
  {
    id: 3,
    title: 'SpendingPal',
    status: { text: 'In Development', color: 'red' },
    description:
      'A personal expense tracking application for managing daily spending. Features transaction management with categories, dashboard analytics, speech-to-text input, multi-language support (English/Spanish), and offline-first architecture with cloud sync. Implements clean architecture with BLoC state management.',
    metrics: [
      { icon: 'sync_alt', label: 'State Management', value: 'BLoC/Cubit' },
      { icon: 'architecture', label: 'Architecture', value: 'Clean (Feature-First)' },
    ],
    techStack: ['Flutter', 'BLoC', 'Firebase', 'Drift', 'Go Router', 'Freezed', 'Clean Arch'],
    actions: [
      {
        icon: 'code',
        label: 'View Code',
        type: 'secondary',
        url: 'https://github.com/yohanangulo/spending-pal',
      },
    ],
    image: '/spendingpal/video_demo.mp4',
  },
]
