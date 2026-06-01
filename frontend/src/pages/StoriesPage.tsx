import { useEffect, useState } from 'react'
import { InnerPageTemplate } from '../components/templates/InnerPageTemplate/InnerPageTemplate'
import { ContentGrid } from '../components/templates/ContentGrid/ContentGrid'
import { Card } from '../components/molecules/Card/Card'
import { getStories } from '../api/wordpress'
import { useLocale } from '../context/LocaleContext'
import type { WPStory } from '../types/wordpress'

function StoriesPage() {
  const locale = useLocale()
  const [stories, setStories] = useState<WPStory[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    getStories()
      .then(setStories)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  return (
    <InnerPageTemplate title="Student Stories">
      {loading && <p className="text-gray-500">Loading stories...</p>}
      {error  && <p className="text-red-500">Could not load content.</p>}
      {!loading && !error && stories.length === 0 && (
        <p className="text-gray-500">No stories available at the moment.</p>
      )}
      {!loading && !error && stories.length > 0 && (
        <ContentGrid columns={3}>
          {stories.map((story) => (
            <Card
              key={story.id}
              title={story.title.rendered}
              description={story.excerpt.rendered.replace(/<[^>]+>/g, '')}
              buttonText="Read Story"
              route={`/${locale}/stories/${story.slug}`}
            />
          ))}
        </ContentGrid>
      )}
    </InnerPageTemplate>
  )
}

export default StoriesPage
