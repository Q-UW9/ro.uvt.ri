import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getStories } from '../api/wordpress'
import type { WpStory } from '../api/types'
import { InnerPageTemplate } from '../components/templates/InnerPageTemplate/InnerPageTemplate'
import { useLocale } from '../context/LocaleContext'

export default function StoriesPage() {
  const locale = useLocale()
  const [stories, setStories] = useState<WpStory[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState<string | null>(null)

  useEffect(() => {
    getStories()
      .then(setStories)
      .catch(e => setError(e.message))
      .finally(() => setLoading(false))
  }, [])

  return (
    <InnerPageTemplate title="Student Stories">
      {loading && <p className="text-gray-500">Loading…</p>}
      {error   && <p className="text-red-600">Failed to load: {error}</p>}
      {!loading && !error && stories.length === 0 && (
        <p className="text-gray-500">No stories published yet.</p>
      )}
      <ul className="space-y-6">
        {stories.map(story => (
          <li key={story.id} className="border-b pb-4">
            <Link
              to={`/${locale}/stories/${story.slug}`}
              className="text-xl font-semibold text-blue-700 hover:underline"
              dangerouslySetInnerHTML={{ __html: story.title.rendered }}
            />
            {story.acf.author && (
              <p className="mt-1 text-sm text-gray-500">By {story.acf.author}</p>
            )}
            <div
              className="mt-2 text-gray-700"
              dangerouslySetInnerHTML={{ __html: story.excerpt.rendered }}
            />
          </li>
        ))}
      </ul>
    </InnerPageTemplate>
  )
}
