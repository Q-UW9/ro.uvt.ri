import type { ReactNode } from 'react'

import { PageLayout } from '../PageLayout/PageLayout'
import { PageTransition } from '../PageTransition/PageTransition'
import { ContentGrid } from '../ContentGrid/ContentGrid'
import { SectionRenderer } from '../SectionRenderer/SectionRenderer'

import { Card } from '../../molecules/Card/Card'
import { SectionHeader } from '../../molecules/SectionHeader/SectionHeader'

import { NewsSection } from '../../organisms/NewsSection/NewsSection'

import { Container } from '../../../layouts/Container'

// ── Types ────────────────────────────────────────────────

interface HeroData {
  title: string
  subtitle: string
  primaryButtonText?: string
  primaryButtonLink?: string
  secondaryButtonText?: string
  secondaryButtonLink?: string
}

interface CardData {
  id: number
  title: string
  description: string
  buttonText?: string
  route?: string
}

interface NewsItem {
  id: number
  title: string
  date: string
  excerpt: string
  slug: string
}

interface HomePageTemplateProps {
  heroData: HeroData
  cards: CardData[]
  news: NewsItem[]
}

// ── Component ─────────────────────────────────────────────

export function HomePageTemplate({
  heroData,
  cards,
  news,
}: HomePageTemplateProps) {
  // SectionRenderer expects a sections array with type + data
  const sections = [
    {
      type: 'hero',
      data: heroData,
    },
  ]

  return (
    <PageTransition>
      <PageLayout>

        {/* Hero — full width, no container */}
        <SectionRenderer sections={sections} />

        {/* Audience shortcut cards */}
        <section className="py-20">
          <Container>

            <SectionHeader
              title="Explore UVT Opportunities"
              subtitle="Navigate quickly based on your goals and find the right pathway."
              className="mb-10"
            />

            <ContentGrid columns={3}>
              {cards.map((card) => (
                <Card
                  key={card.id}
                  title={card.title}
                  description={card.description}
                  buttonText={card.buttonText}
                  route={card.route}
                />
              ))}
            </ContentGrid>

          </Container>
        </section>

        {/* Latest news / announcements */}
        <NewsSection items={news} />

      </PageLayout>
    </PageTransition>
  )
}
