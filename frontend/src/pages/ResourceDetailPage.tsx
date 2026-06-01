import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { InnerPageTemplate } from '../components/templates/InnerPageTemplate/InnerPageTemplate'
import { getResource } from '../api/wordpress'
import type { WPResource } from '../types/wordpress'

function ResourceDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const [resource, setResource] = useState<WPResource | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!slug) return
    getResource(slug)
      .then(setResource)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [slug])

  if (loading) return <InnerPageTemplate title="Loading..."><p>Loading...</p></InnerPageTemplate>
  if (error || !resource) return <InnerPageTemplate title="Not Found"><p>Could not load this resource.</p></InnerPageTemplate>

  const documents = resource.acf.file_url ? [{
    label: resource.title.rendered,
    url: resource.acf.file_url,
    fileType: resource.acf.file_type ?? 'PDF',
  }] : []

  return (
    <InnerPageTemplate
      title={resource.title.rendered}
      documents={documents}
    >
      {resource.acf.audience_notes && (
        <div
          className="mb-6 text-gray-700"
          dangerouslySetInnerHTML={{ __html: resource.acf.audience_notes }}
        />
      )}
      <div dangerouslySetInnerHTML={{ __html: resource.content.rendered }} />
    </InnerPageTemplate>
  )
}

export default ResourceDetailPage
