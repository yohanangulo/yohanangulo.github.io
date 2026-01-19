import { notFound } from 'next/navigation'
import { featuredProjects } from '@/../data'
import ProjectDetailsClient from '@/components/ProjectDetailsClient'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return featuredProjects.map(project => ({
    slug: project.slug,
  }))
}

export default async function ProjectDetailsPage({ params }: PageProps) {
  const { slug } = await params
  const project = featuredProjects.find(p => p.slug === slug)

  if (!project) notFound()

  return <ProjectDetailsClient project={project} />
}
