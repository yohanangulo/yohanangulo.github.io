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
  {
    images: [
      '/redviral/001.png',
      '/redviral/002.png',
      '/redviral/003.png',
      '/redviral/004.png',
      '/redviral/005.png',
      '/redviral/006.png',
      '/redviral/007.png',
      '/redviral/008.png',
    ],
    authors: [yohanAuthor, { name: 'Kiwi Company', url: 'https://www.kiwicompany.io/' }],
    slug: 'redviral',
    title: 'RedViral',
    description:
      'Task completion and micro-earning platform where users complete social media engagement tasks (TikTok, YouTube, Facebook, Instagram) to earn rewards. Features embedded WebView with JavaScript injection for task verification, real-time task tracking, wallet management, and OTA updates via Shorebird. Built with Clean Architecture and Firebase integration for analytics, crash reporting, and push notifications.',
    tags: ['Clean Architecture', 'BLoC', 'Firebase', 'Dio', 'Shorebird OTA', 'WebView', 'Freezed'],
    categories: ['Android'],
    status: { text: 'In Production', color: 'green' },
    metrics: [
      { icon: 'sync_alt', label: 'State Management', value: 'BLoC' },
      { icon: 'architecture', label: 'Architecture', value: 'Clean (Layer-First)' },
      { icon: 'cloud_sync', label: 'Backend', value: 'Firebase + REST API' },
    ],
    appUrl: 'https://www.redviral.app',
  },
  {
    images: [
      '/yegasigur/001.png',
      '/yegasigur/002.png',
      '/yegasigur/003.png',
      '/yegasigur/004.png',
      '/yegasigur/005.png',
      '/yegasigur/006.png',
      '/yegasigur/007.png',
      '/yegasigur/008.png',
    ],
    slug: 'yegasigur',
    title: 'YegaSigur (Started from a template)',
    description:
      'Full-featured ride-sharing and vehicle rental mobile app enabling users to book rides, track drivers in real-time via Google Maps, and pay through 8+ integrated gateways including Stripe, PayPal, and Razorpay. Features Firestore-powered live chat, wallet management, multi-stop trips, and driver rating system with support for 11 languages.',
    tags: [
      'GetX',
      'Firebase',
      'Google Maps',
      'Stripe',
      'Real-time Tracking',
      'Multi-Payment Gateway',
      'Firestore Chat',
    ],
    categories: ['iOS', 'Android'],
    status: { text: 'In Production', color: 'green' },
    metrics: [
      { icon: 'sync_alt', label: 'State Management', value: 'GetX' },
      { icon: 'architecture', label: 'Architecture', value: 'MVVM (Feature-First)' },
      { icon: 'cloud_sync', label: 'Backend', value: 'REST API + Firebase' },
      { icon: 'payments', label: 'Payments', value: '8+ Gateways' },
      { icon: 'translate', label: 'Languages', value: '11 Supported' },
    ],
    appUrl: 'https://yegasigur.com/',
  },
  {
    slug: 'flutterchatapp',
    title: 'Flutter Chat App',
    description:
      'Real-time chat application built with Flutter and Firebase. Features user authentication, instant messaging, and push notifications.',
    images: ['/flutterchatapp/001.png', '/flutterchatapp/flutter_chat_demo.gif', '/flutterchatapp/002.png'],
    tags: ['Flutter', 'Firebase', 'Chat App'],
    codeUrl: 'https://github.com/yohanangulo/flutter-chat',
  },
  {
    slug: 'cinemapedia',
    title: 'Cinemapedia',
    description:
      'Movie catalog app built with Flutter and the TMDB API. Features movie browsing, search, and detailed information pages.',
    images: ['/cinemapedia/demo.mp4'],
    tags: ['Flutter', 'TMDB API', 'Movie Catalog'],
    codeUrl: 'https://github.com/yohanangulo/fernando-flutter/tree/main/cinemapedia',
  },
  {
    slug: 'toktik',
    title: 'TokTik',
    description: 'TikTok clone built with Flutter.',
    images: ['/toktik/demo.mp4'],
    tags: ['Flutter', 'Firebase', 'TikTok Clone'],
    codeUrl: 'https://github.com/yohanangulo/fernando-flutter/tree/main/toktik',
  },
  {
    slug: 'greatplaces',
    title: 'Great Places',
    description:
      'Flutter mobile app for managing memorable places with GPS tracking, Google Maps integration, camera support, and SQLite storage. Built with Riverpod state management and Material Design 3.',
    images: ['/greatplaces/002.png', '/greatplaces/demo.gif', '/greatplaces/003.png'],
    tags: ['Flutter', 'Firebase', 'Places'],
    codeUrl: 'https://github.com/yohanangulo/great-places',
  },
]
