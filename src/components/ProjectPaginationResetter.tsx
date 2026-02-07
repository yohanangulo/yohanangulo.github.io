'use client'

import { useProjectsPagination } from '@/providers/projects-pagination-provider'
import { useEffect } from 'react'

export default function ProjectPaginationResetter() {
  const { reset } = useProjectsPagination()

  useEffect(reset, [reset])

  return null
}
