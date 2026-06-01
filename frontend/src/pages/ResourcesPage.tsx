import { useEffect, useState } from 'react'
import { InnerPageTemplate } from '../components/templates/InnerPageTemplate/InnerPageTemplate'
import { ContentGrid } from '../components/templates/ContentGrid/ContentGrid'
import { Card } from '../components/molecules/Card/Card'
import { getResources } from '../api/wordpress'
import { useLocale } from '../context/LocaleContext'
import type { WPResource } from '../types/wordpress'

function ResourcesPage() {
  const locale = useLocale()
  const [resources, setResources] = useState<WPResource[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    getResources()
      .then(setResources)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  return (
    <InnerPageTemplate title="Resources">
      {loading && <p className="text-gray-500">Loading resources...</p>}
      {error  && <p className="text-red-500">Could not load content.</p>}
      {!loading && !error && resources.length === 0 && (
        <p className="text-gray-500">No resources available at the moment.</p>
      )}
      {!loading && !error && resources.length > 0 && (
        <ContentGrid columns={3}>
          {resources.map((res) => (
            <Card
              key={res.id}
              title={res.title.rendered}
              description={res.excerpt.rendered.replace(/<[^>]+>/g, '')}
              buttonText="View Resource"
              route={`/${locale}/resources/${res.slug}`}
            />
          ))}
        </ContentGrid>
      )}
    </InnerPageTemplate>
  )
}

export default ResourcesPage
