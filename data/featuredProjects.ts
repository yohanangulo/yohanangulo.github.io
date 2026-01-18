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
      'A personal journaling and mindfulness app featuring AI-driven insights and multi-modal entries (audio, text, image). Implements a robust offline-first sync engine using Isar and Firestore for seamless dat persistence.',
    metrics: [
      {
        icon: 'sync_alt',
        label: 'State Management',
        value: 'Riverpod',
      },
      {
        icon: 'architecture',
        label: 'Architecture',
        value: 'Clean (Feature-First)',
      },
    ],
    techStack: ['Flutter', 'Riverpod', 'Firebase', 'Isar', 'Clean Arch'],
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
    title: 'Connect',
    authors: [],
    description:
      'Real-time messaging architecture supporting complex media attachments and voice notes. Built with a custom WebSocket implementation and offline-first database syncing.',
    metrics: [
      { icon: 'hub', label: 'Concurrency', value: '500+ Active' },
      { icon: 'verified_user', label: 'Delivery Rate', value: '99.99%' },
    ],
    techStack: ['Flutter', 'WebSockets', 'GoRouter', 'Drift DB'],
    actions: [
      { icon: 'smartphone', label: 'View App', type: 'primary' },
      { icon: 'code', label: 'Source Code', type: 'secondary' },
    ],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDFPD6F8SOhDkOywNQMl9gL6TFCt-ffvmIe35aiQ2nvUMMcFpEKTWFeTn2LeZWGEPnEu9OhOsSYZN3dqt5X2Vsj0M4wq6AovY0Q-fudySNblsvKAtmPn5kCEnzP7yoDG3i66J2z3i39rO5ccJLWENoTPoxOmgqO_FL-YKOKaBtOEVwmmJ7gRSCe5CBqbdxVu6XgstkjX-DOoTbquKEr7LcylZDv-tZX2ojrkbPwfcwCqgE8dEtmReLO6bSXky86ZXjhWLaXxOBw3cza',
  },
]
