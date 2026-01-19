export interface Author {
  name: string
  url?: string
}

export interface ProjectMetric {
  icon: string
  label: string
  value: string
}

export interface ProjectAction {
  icon: string
  label: string
  type: 'primary' | 'secondary'
  url?: string
}

export interface ProjectStatus {
  text: string
  color: 'green' | 'blue' | 'gray' | 'red' | 'orange'
}

export interface FeaturedProject {
  id: number
  slug: string
  title: string
  authors?: Author[]
  status?: ProjectStatus
  description: string
  metrics: ProjectMetric[]
  techStack: string[]
  actions: ProjectAction[]
  image: string
  gallery?: string[]
}

export interface Project {
  title: string
  slug?: string
  authors?: Author[]
  description: string
  images: string[]
  tags: string[]
  categories?: string[]
  codeUrl?: string
  appUrl?: string
  // Optional fields for details page
  status?: ProjectStatus
  metrics?: ProjectMetric[]
  actions?: ProjectAction[]
}
