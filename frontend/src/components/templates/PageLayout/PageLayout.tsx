import type { ReactNode } from 'react'

import { Footer } from '../../organisms/Footer/Footer'
import { Navbar } from '../../organisms/Navbar/Navbar'

interface PageLayoutProps {
  children: ReactNode
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
