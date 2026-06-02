import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getStory } from '../api/wordpress'
import type { WpStory } from '../api/types'
import { InnerPageTemplate } from '../components/templates/InnerPageTemplate/InnerPageTemplate'

export default function StoryDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const [story, setStory]     = useState<WpStory | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState<string | null>(null)

  useEffect(() => {
    if (!slug) return
    getStory(slug)
      .then(data => {
        if (!data) throw new Error('Not found')
        setStory(data)
      })
      .catch(e => setError(e.message))
      .finally(() => setLoading(false))
  }, [slug])

  if (loading) return <InnerPageTemplate title="Loading…"><p /></InnerPageTemplate>
  if (error)   return <InnerPageTemplate title="Error"><p className="text-red-600">{error}</p></InnerPageTemplate>
  if (!story)  return null

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
