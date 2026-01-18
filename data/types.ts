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
  color: 'green' | 'blue' | 'gray' | 'red'
}

export interface FeaturedProject {
  id: number
  title: string
  authors?: Author[]
  status?: ProjectStatus
  description: string
  metrics: ProjectMetric[]
  techStack: string[]
  actions: ProjectAction[]
  image: string
}

export interface Project {
  title: string
  authors?: Author[]
  description: string
  images: string[]
  tags: string[]
  categories: string[]
}
