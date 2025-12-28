import Link from 'next/link'
import { ReactNode } from 'react'

type NavigationProps = {
  children: ReactNode
}

export default function Navigation({ children }: NavigationProps) {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/5 bg-background-dark/80 backdrop-blur-md supports-backdrop-filter:bg-background-dark/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="flex items-center justify-center size-8 rounded bg-primary/10 text-primary border border-primary/20">
              <span className="material-icons text-[20px]">terminal</span>
            </div>
            <div>
              <h1 className="text-white text-sm font-bold leading-none tracking-tight">John Doe</h1>
              <span className="text-slate-400 text-xs font-medium">Senior Flutter Engineer</span>
            </div>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {children}
            <Link className="text-slate-300 hover:text-white text-sm font-medium transition-colors" href="/#skills">
              Skills
            </Link>
            <Link className="text-slate-300 hover:text-white text-sm font-medium transition-colors" href="/#about">
              About
            </Link>
            <button className="cursor-pointer flex items-center justify-center gap-2 h-9 px-4 bg-primary hover:bg-primary/90 text-white text-sm font-bold rounded-lg transition-all shadow-[0_0_15px_rgba(43,140,238,0.3)] hover:shadow-[0_0_20px_rgba(43,140,238,0.5)]">
              <span className="capitalize">resume</span>
            </button>
          </div>
          <button className="md:hidden text-slate-300 hover:text-white">
            <span className="material-icons">menu</span>
          </button>
        </div>
      </div>
    </nav>
  )
}
