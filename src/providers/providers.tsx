import { ProjectsPaginationProvider } from './projects-pagination-provider'

type Props = {
  children: React.ReactNode
}

export default function Providers({ children }: Props) {
  return <ProjectsPaginationProvider>{children}</ProjectsPaginationProvider>
}
