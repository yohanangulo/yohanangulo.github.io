import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'John Doe - Senior Flutter Engineer',
  description: 'Portfolio of John Doe, Senior Flutter Engineer specializing in mobile development',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className="dark" lang="en">
      <body className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display overflow-x-hidden antialiased selection:bg-primary selection:text-white">
        {children}
      </body>
    </html>
  )
}
