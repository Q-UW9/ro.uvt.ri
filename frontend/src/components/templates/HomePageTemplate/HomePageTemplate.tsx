import { Link } from 'react-router-dom'
import { Globe, Users, BookOpen, Award, GraduationCap } from 'lucide-react'

import { useLocale } from '../../../context/LocaleContext'
import { PageLayout } from '../PageLayout/PageLayout'
import { PageTransition } from '../PageTransition/PageTransition'
import { ContentGrid } from '../ContentGrid/ContentGrid'
import { SectionRenderer } from '../SectionRenderer/SectionRenderer'

import { Card } from '../../molecules/Card/Card'
import { SectionHeader } from '../../molecules/SectionHeader/SectionHeader'
import { NewsSection } from '../../organisms/NewsSection/NewsSection'
import { Button } from '../../ui/button'

import { Container } from '../../../layouts/Container'

// ── Types ─────────────────────────────────────────────────

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

// ── Stats ─────────────────────────────────────────────────

const stats = [
  { icon: Globe,     value: '200+',   label: 'Bilateral Agreements' },
  { icon: Users,     value: '30+',    label: 'Partner Countries' },
  { icon: BookOpen,  value: '15,000+', label: 'Students Supported' },
  { icon: Award,     value: '50+',    label: 'Scholarships / Year' },
]

// ── Component ─────────────────────────────────────────────

export function HomePageTemplate({
  heroData,
  cards,
  news,
}: HomePageTemplateProps) {
  const locale = useLocale()
  const sections = [{ type: 'hero', data: heroData }]

  return (
    <PageTransition>
      <PageLayout>

        {/* Hero — full width */}
        <SectionRenderer sections={sections} />

        {/* Stats strip */}
        <section className="border-b bg-white py-12">
          <Container>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="mx-auto mb-4 inline-flex size-14 items-center justify-center rounded-full bg-uvt-blue/10 text-uvt-blue">
                    <stat.icon className="size-7" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                  <div className="mt-1 text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </Container>
        </section>

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
                  route={`/${locale}/${card.route}`}
                />
              ))}
            </ContentGrid>
          </Container>
        </section>

        {/* Latest news */}
        <NewsSection items={news} />

        {/* CTA section */}
        <section className="bg-uvt-navy py-20">
          <Container>
            <div className="text-center text-white">
              <GraduationCap className="mx-auto mb-6 size-14 text-uvt-gold" />
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Ready to Start Your Journey?
              </h2>
              <p className="mx-auto mb-8 max-w-xl text-lg text-blue-200">
                Whether you're planning to study, teach, or collaborate internationally — DRI is here to guide you every step of the way.
              </p>
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Button size="lg" className="bg-uvt-gold text-uvt-navy hover:bg-uvt-gold/90 font-semibold" asChild>
                  <Link to={`/${locale}/erasmus`}>Explore Erasmus+</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/40 bg-white/10 text-white hover:bg-white/20 hover:border-white"
                  asChild
                >
                  <Link to={`/${locale}/contact`}>Contact Us</Link>
                </Button>
              </div>
            </div>
          </Container>
        </section>

      </PageLayout>
    </PageTransition>
  )
}
