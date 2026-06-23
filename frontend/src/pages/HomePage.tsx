import { useEffect, useState } from 'react'

import { getPosts } from '../api/wordpress'
import { HomePageTemplate } from '../components/templates/HomePageTemplate/HomePageTemplate'
import { useLocale } from '../context/LocaleContext'
import { homeSections } from '../data/homeSections'

interface WordPressPost {
  id: number
  date: string
  slug: string
  title: {
    rendered: string
  }
  excerpt: {
    rendered: string
  }
}

interface NewsItem {
  id: number
  title: string
  date: string
  excerpt: string
  slug: string
}

function HomePage() {
  const locale = useLocale()
  const [news, setNews] = useState<NewsItem[]>([])

  const heroData = {
    title: 'International Relations at West University of Timișoara',
    subtitle:
      'Explore Erasmus+ opportunities, international student pathways, partnership programmes, and resources — all in one place.',
    primaryButtonText: 'Explore Erasmus+',
    primaryButtonLink: `/${locale}/erasmus`,
    secondaryButtonText: 'International Students',
    secondaryButtonLink: `/${locale}/international-students`,
  }

  useEffect(() => {
    getPosts({ per_page: 4 })
      .then((data: WordPressPost[]) => {
        setNews(
          data.map((post) => ({
            id: post.id,
            title: post.title.rendered,
            date: post.date,
            excerpt: post.excerpt.rendered,
            slug: post.slug,
          })),
        )
      })
      .catch(() => {
        setNews([])
      })
  }, [])

  return <HomePageTemplate heroData={heroData} cards={homeSections} news={news} />
}

export default HomePage
