import { Link } from 'react-router-dom'
import {
  Award,
  BookOpen,
  ChevronRight,
  Globe,
  GraduationCap,
  Handshake,
  Mail,
  Newspaper,
  Plane,
  Users,
} from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { ImageWithFallback } from '@/components/common/ImageWithFallback'

import { PageLayout } from '../PageLayout/PageLayout'
import { PageTransition } from '../PageTransition/PageTransition'
import { useLocale } from '../../../context/LocaleContext'

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

const stats = [
  { icon: Users, value: '16,000+', label: 'Students' },
  { icon: BookOpen, value: '100+', label: 'Programmes' },
  { icon: Globe, value: '50+', label: 'Partner Universities' },
  { icon: Award, value: '300+', label: 'Faculty Members' },
]

const featureIcons = [GraduationCap, Plane, Globe, Users, Handshake, Mail]

function stripHtml(value: string) {
  return value.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').trim()
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat('en', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(value))
}

function localePath(locale: string, route = '/') {
  if (route.startsWith(`/${locale}`)) return route
  if (route === '/') return `/${locale}`
  return `/${locale}${route.startsWith('/') ? route : `/${route}`}`
}

export function HomePageTemplate({ heroData, cards, news }: HomePageTemplateProps) {
  const locale = useLocale()

  return (
    <PageTransition>
      <PageLayout>
        <div className="flex flex-col">
          <section className="relative flex min-h-[620px] items-center overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600"
              alt="University campus"
              className="absolute inset-0 size-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-900/85 to-blue-700/60" />
            <div className="relative z-10 mx-auto grid w-full max-w-[1280px] gap-10 px-6 py-24 text-white lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
              <div>
                <Badge className="mb-6 bg-white/15 text-white hover:bg-white/20">
                  West University of Timișoara
                </Badge>

                <h1 className="mb-6 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
                  {heroData.title}
                </h1>

                <p className="mb-8 max-w-2xl text-lg leading-8 text-blue-50 md:text-xl">
                  {heroData.subtitle}
                </p>

                <div className="flex flex-wrap gap-4">
                  {heroData.primaryButtonText && (
                    <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                      <Link to={heroData.primaryButtonLink || `/${locale}`}>
                        {heroData.primaryButtonText}
                        <ChevronRight className="size-4" />
                      </Link>
                    </Button>
                  )}

                  {heroData.secondaryButtonText && (
                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="border-white/40 bg-white/10 text-white hover:bg-white hover:text-blue-700"
                    >
                      <Link to={heroData.secondaryButtonLink || `/${locale}`}>
                        {heroData.secondaryButtonText}
                      </Link>
                    </Button>
                  )}
                </div>
              </div>

              <Card className="hidden border-white/20 bg-white/10 text-white shadow-2xl backdrop-blur lg:block">
                <CardHeader>
                  <CardTitle className="text-2xl">International Office</CardTitle>
                  <CardDescription className="text-blue-50">
                    Quick access to mobility, admissions, partnerships, and student support.
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="rounded-lg bg-white/10 p-4">
                    <p className="text-sm text-blue-100">Popular section</p>
                    <p className="mt-1 text-xl font-semibold">Erasmus+ Mobility</p>
                  </div>
                  <div className="rounded-lg bg-white/10 p-4">
                    <p className="text-sm text-blue-100">For applicants</p>
                    <p className="mt-1 text-xl font-semibold">International Students</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="bg-white py-14">
            <div className="mx-auto grid max-w-[1280px] gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <Card key={stat.label} className="text-center transition-shadow hover:shadow-md">
                  <CardHeader>
                    <div className="mx-auto mb-2 flex size-14 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <stat.icon className="size-7" />
                    </div>
                    <CardTitle className="text-3xl">{stat.value}</CardTitle>
                    <CardDescription>{stat.label}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </section>

          <section className="bg-gray-50 py-20">
            <div className="mx-auto max-w-[1280px] px-6">
              <div className="mx-auto mb-12 max-w-3xl text-center">
                <Badge variant="secondary" className="mb-4">Start here</Badge>
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                  Explore UVT Opportunities
                </h2>
                <p className="text-lg text-gray-600">
                  Navigate quickly based on your goals and find the right international pathway.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {cards.map((card, index) => {
                  const Icon = featureIcons[index % featureIcons.length]

                  return (
                    <Card key={card.id} className="group transition-all hover:-translate-y-1 hover:shadow-lg">
                      <CardHeader>
                        <div className="mb-4 flex size-14 items-center justify-center rounded-lg bg-blue-100 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                          <Icon className="size-7" />
                        </div>
                        <CardTitle className="text-xl">{card.title}</CardTitle>
                        <CardDescription className="text-base leading-7">
                          {card.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        {card.buttonText && (
                          <Button asChild variant="outline">
                            <Link to={localePath(locale, card.route)}>
                              {card.buttonText}
                              <ChevronRight className="size-4" />
                            </Link>
                          </Button>
                        )}
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          </section>

          <section className="py-20">
            <div className="mx-auto max-w-[1280px] px-6">
              <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <Badge variant="secondary" className="mb-4">Updates</Badge>
                  <h2 className="text-3xl font-bold md:text-4xl">Latest News</h2>
                  <p className="mt-3 max-w-2xl text-lg text-gray-600">
                    Follow recent announcements, opportunities, and international relations updates.
                  </p>
                </div>

                <Button asChild variant="outline">
                  <Link to={`/${locale}/news`}>View all news</Link>
                </Button>
              </div>

              {news.length > 0 ? (
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                  {news.map((item) => (
                    <Card key={item.id} className="overflow-hidden transition-shadow hover:shadow-lg">
                      <CardHeader>
                        <div className="mb-3 flex size-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                          <Newspaper className="size-6" />
                        </div>
                        <p className="text-xs font-medium uppercase tracking-wide text-blue-600">
                          {formatDate(item.date)}
                        </p>
                        <CardTitle className="line-clamp-2 text-lg leading-6">
                          {stripHtml(item.title)}
                        </CardTitle>
                        <CardDescription className="line-clamp-3 leading-6">
                          {stripHtml(item.excerpt)}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button asChild variant="link" className="px-0">
                          <Link to={`/${locale}/news`}>
                            Read more
                            <ChevronRight className="size-4" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card>
                  <CardHeader>
                    <CardTitle>No news loaded yet</CardTitle>
                    <CardDescription>
                      News will appear here when the WordPress API returns posts.
                    </CardDescription>
                  </CardHeader>
                </Card>
              )}
            </div>
          </section>

          <section className="bg-blue-600 py-20 text-white">
            <div className="mx-auto max-w-[1280px] px-6 text-center">
              <Globe className="mx-auto mb-6 size-14" />
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Ready to connect with UVT?
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-blue-100">
                Contact the Department of International Relations for guidance on mobility,
                partnerships, admissions, and international opportunities.
              </p>
              <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                <Link to={`/${locale}/contact`}>Contact Us</Link>
              </Button>
            </div>
          </section>
        </div>
      </PageLayout>
    </PageTransition>
  )
}
