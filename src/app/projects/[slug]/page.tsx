import { notFound } from 'next/navigation'
import { allProjects } from '@/../data'
import ProjectDetailsClient from '@/components/ProjectDetailsClient'

interface PageProps {
  params: Promise<{ slug: string }>
}

// Only generate static params for projects that have a slug
const projectsWithSlug = allProjects.filter(p => p.slug)

export async function generateStaticParams() {
  return projectsWithSlug.map(project => ({
    slug: project.slug,
  }))
}

export default async function ProjectDetailsPage({ params }: PageProps) {
  const { slug } = await params
  const project = projectsWithSlug.find(p => p.slug === slug)

  if (!project) notFound()

  return <ProjectDetailsClient project={project} />
}
