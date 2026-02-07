import type { Metadata } from 'next'
import './globals.css'
import ScrollToTop from '@/components/ScrollToTop'
import { messages } from '../../data'
import Providers from '@/providers/providers'

export const metadata: Metadata = {
  title: messages.meta_title,
  description: messages.meta_description,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className="dark" lang="en">
      <Providers>
        <body className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display overflow-x-hidden antialiased selection:bg-primary selection:text-white">
          {children}
          <ScrollToTop />
        </body>
      </Providers>
    </html>
  )
}
