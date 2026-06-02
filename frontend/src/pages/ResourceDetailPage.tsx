import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getResource } from '../api/wordpress'
import type { WpResource } from '../api/types'
import { InnerPageTemplate } from '../components/templates/InnerPageTemplate/InnerPageTemplate'

export default function ResourceDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const [resource, setResource] = useState<WpResource | null>(null)
  const [loading, setLoading]   = useState(true)
  const [error, setError]       = useState<string | null>(null)

  useEffect(() => {
    if (!slug) return
    getResource(slug)
      .then(data => {
        if (!data) throw new Error('Not found')
        setResource(data)
      })
      .catch(e => setError(e.message))
      .finally(() => setLoading(false))
  }, [slug])

  if (loading) return <InnerPageTemplate title="Loading…"><p /></InnerPageTemplate>
  if (error)   return <InnerPageTemplate title="Error"><p className="text-red-600">{error}</p></InnerPageTemplate>
  if (!resource) return null

  const documents = resource.acf.file_url ? [{
    label: resource.title.rendered,
    url: resource.acf.file_url,
    fileType: resource.acf.file_type ?? 'PDF',
  }] : []

  return (
    <InnerPageTemplate title={resource.title.rendered} documents={documents}>
      {resource.acf.audience_notes && (
        <div className="mb-6 text-gray-700"
          dangerouslySetInnerHTML={{ __html: resource.acf.audience_notes }}
        />
      )}
      <div dangerouslySetInnerHTML={{ __html: resource.content.rendered }} />
    </InnerPageTemplate>
  )
}
