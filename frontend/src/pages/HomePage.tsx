import { useEffect, useState } from 'react'
import { HomePageTemplate } from '../components/templates/HomePageTemplate/HomePageTemplate'
import { getPosts } from '../api/wordpress'
import { homeSections } from '../data/homeSections'

// Static hero — WP Page API not needed yet
const heroData = {
  title: 'International Relations at West University of Timișoara',
  subtitle:
    'Explore Erasmus+ opportunities, international student pathways, partnership programmes, and resources — all in one place.',
  primaryButtonText: 'Explore Erasmus+',
  primaryButtonLink: '/erasmus',
  secondaryButtonText: 'International Students',
  secondaryButtonLink: '/international-students',
}

function HomePage() {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getPosts({ per_page: 4 })
      .then((data) => {
        setNews(
          data.map((post) => ({
            id: post.id,
            title: post.title.rendered,
            date: post.date,
            excerpt: post.excerpt.rendered,
            slug: post.slug,
          }))
        )
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  return (
    <HomePageTemplate
      heroData={heroData}
      cards={homeSections}
      news={loading ? [] : news}
    />
  )
}

export default HomePage
