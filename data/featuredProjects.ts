import { defaultAuthors } from './authors'
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
      },
      {
        icon: 'code',
        label: 'Source Code',
        type: 'secondary',
      },
    ],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuClTjpVqePQJ5HC4TLcNcnhpsY5m55tx8A4iUTGYaRN_To3yERD3HgGHh2q0hy3oQFPVVSYt5x86nDwpJwyFhvQKQpsJVCuuxMOQcQ7OVuC-HTg6-DwTCZvvkMH0XWVvt2T70u9wZ24-qaCtQgFxJtuD900xbjdRdEDsxE4k_eY6XKjq0qFoONuKIrcuPtYFFMzIxZQOoT-4IVKK_n6RHPOq3fQjAoULn_4ltCUDjLu0LjofkzMJrhBhyO_yQyH606_bFN0DWP--UOM',
  },
  {
    id: 1,
    title: 'Context First',
    authors: [],
    status: { text: 'Live on Store', color: 'green' },
    description:
      'A high-frequency trading dashboard designed for rapid financial decision making. Solved complex state synchronization challenges using Bloc and WebSockets for real-time ticker updates.',
    metrics: [
      { icon: 'sync_alt', label: 'State Management', value: 'Complex (Bloc)' },
      { icon: 'architecture', label: 'Architecture', value: 'Clean, Scalable' },
    ],
    techStack: ['Flutter', 'Bloc', 'GraphQL', 'Clean Arch'],
    actions: [
      { icon: 'smartphone', label: 'View App', type: 'primary' },
      { icon: 'code', label: 'Source Code', type: 'secondary' },
    ],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuClTjpVqePQJ5HC4TLcNcnhpsY5m55tx8A4iUTGYaRN_To3yERD3HgGHh2q0hy3oQFPVVSYt5x86nDwpJwyFhvQKQpsJVCuuxMOQcQ7OVuC-HTg6-DwTCZvvkMH0XWVvt2T70u9wZ24-qaCtQgFxJtuD900xbjdRdEDsxE4k_eY6XKjq0qFoONuKIrcuPtYFFMzIxZQOoT-4IVKK_n6RHPOq3fQjAoULn_4ltCUDjLu0LjofkzMJrhBhyO_yQyH606_bFN0DWP--UOM',
  },
  {
    id: 2,
    title: 'ShopScale',
    authors: [],
    status: { text: 'Scaling Phase', color: 'blue' },
    description:
      'A white-label e-commerce solution focused on smooth list virtualization and image optimization. Implemented custom caching strategies to handle large product catalogs.',
    metrics: [
      { icon: 'group', label: 'User Base', value: '50k+ Active' },
      { icon: 'speed', label: 'FPS', value: 'Consistent 60' },
    ],
    techStack: ['Flutter', 'Riverpod', 'Firebase', 'Stripe SDK'],
    actions: [
      { icon: 'smartphone', label: 'View App', type: 'primary' },
      { icon: 'lock', label: 'Private Repo', type: 'secondary' },
    ],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCQ784jcoXC8XMkKjyFKIxEm_nZKRdOfv30rU_d-Au2a_1oBI6JrVryo5Ixu9kIOxOMdeKCk0KNtHvrP7G9u30Ki1SVqY4aoiBlpYIFQTvB32vcjFdjsoUvIMCisDRZUMg1xmF4jktbaXkVXt3QwMRDz_3mGbZdrsFxERWVHWjgIhK2AbSh6j2aBHexCV9vyspTxm9XU0dGL4CORt2MbCi4APX5KaFWK53Pq11XilMRheIxFj1uMUS8EqOUBGaq0EJXKDUo5gFkyDBk',
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
