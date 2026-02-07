'use client'

import { createContext, useCallback, useContext, useState } from 'react'

const PROJECT_PAGE_SIZE = 4

type ProjectsPaginationContextType = {
  visibleCount: number
  loadMore: () => void
  reset: () => void
}

const ProjectsPaginationContext = createContext<ProjectsPaginationContextType | null>(null)

export const ProjectsPaginationProvider = ({ children }: { children: React.ReactNode }) => {
  const [visibleCount, setVisibleCount] = useState(PROJECT_PAGE_SIZE)

  const reset = useCallback(() => {
    setVisibleCount(PROJECT_PAGE_SIZE)
  }, [])

  const loadMore = useCallback(() => {
    setVisibleCount(prev => prev + PROJECT_PAGE_SIZE)
  }, [])

  return (
    <ProjectsPaginationContext.Provider value={{ visibleCount, loadMore, reset }}>
      {children}
    </ProjectsPaginationContext.Provider>
  )
}

export const useProjectsPagination = () => {
  const context = useContext(ProjectsPaginationContext)

  if (!context) {
    throw new Error('useProjectsPagination must be used within a ProjectsPaginationProvider')
  }

  return context
}
