import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Calendar, ArrowRight } from 'lucide-react'

import { Card, CardHeader, CardTitle, CardContent } from '../../ui/card'
import { Badge } from '../../ui/badge'
import { Button } from '../../ui/button'
import { Container } from '../../../layouts/Container'

interface NewsItem {
  id: number
  title: string
  date: string
  excerpt: string
  slug: string
}

interface NewsSectionProps {
  items: NewsItem[]
}

export function NewsSection({ items }: NewsSectionProps) {
  if (items.length === 0) return null

  return (
    <section className="bg-gray-50 py-20">
      <Container>

        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Latest Updates
            </h2>
            <p className="mt-2 text-gray-600">
              Stay informed with news from the DRI office
            </p>
            <div className="mt-4 h-1 w-16 rounded-full bg-uvt-gold" />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-200">

                <CardHeader>
                  <div className="mb-2 flex items-center gap-3">
                    <Badge variant="secondary">News</Badge>
                    <span className="flex items-center gap-1 text-xs text-gray-500">
                      <Calendar className="size-3" />
                      {new Date(item.date).toLocaleDateString('en-GB', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </span>
                  </div>
                  <CardTitle className="text-lg leading-snug hover:text-uvt-blue transition-colors">
                    <span dangerouslySetInnerHTML={{ __html: item.title }} />
                  </CardTitle>
                </CardHeader>

                <CardContent className="flex flex-col gap-4">
                  <div
                    className="text-sm text-gray-600 line-clamp-3 [&_p]:m-0"
                    dangerouslySetInnerHTML={{ __html: item.excerpt }}
                  />
                  <Button variant="ghost" size="sm" className="w-fit text-uvt-blue hover:text-uvt-navy" asChild>
                    <Link to={`/ro/news`}>
                      Read more <ArrowRight className="ml-1 size-3.5" />
                    </Link>
                  </Button>
                </CardContent>

              </Card>
            </motion.div>
          ))}
        </div>

      </Container>
    </section>
  )
}
