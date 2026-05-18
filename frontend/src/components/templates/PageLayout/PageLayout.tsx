import type { ReactNode } from 'react'

import { Navbar } from '../../organisms/Navbar/Navbar'
import { Footer } from '../../organisms/Footer/Footer'

interface PageLayoutProps {
  children: ReactNode
}

export function PageLayout({
  children,
}: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />

      <main>
        {children}
      </main>

      <Footer />
    </div>
  )
}