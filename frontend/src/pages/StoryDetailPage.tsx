import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { InnerPageTemplate } from '../components/templates/InnerPageTemplate/InnerPageTemplate'
import { getStory } from '../api/wordpress'
import type { WPStory } from '../types/wordpress'

function StoryDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const [story, setStory] = useState<WPStory | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!slug) return
    getStory(slug)
      .then(setStory)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [slug])

  if (loading) return <InnerPageTemplate title="Loading..."><p>Loading...</p></InnerPageTemplate>
  if (error || !story) return <InnerPageTemplate title="Not Found"><p>Could not load this story.</p></InnerPageTemplate>

  return (
    <InnerPageTemplate title={story.title.rendered} subtitle={story.acf.author}>
      {story.acf.pull_quote && (
        <blockquote className="mb-8 border-l-4 border-uvt-blue pl-6 text-xl italic text-gray-600">
          "{story.acf.pull_quote}"
        </blockquote>
      )}
      {story.acf.story_date && (
        <p className="mb-6 text-sm text-gray-400">{story.acf.story_date}</p>
      )}
      <div dangerouslySetInnerHTML={{ __html: story.content.rendered }} />
    </InnerPageTemplate>
  )
}

export default StoryDetailPage
