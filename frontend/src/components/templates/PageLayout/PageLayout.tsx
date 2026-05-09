import { Container } from '../../../layouts/Container'

interface PageLayoutProps {
  children: React.ReactNode
}

export function PageLayout({
  children,
}: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <main className="py-16">
        <Container>
          {children}
        </Container>
      </main>
    </div>
  )
}