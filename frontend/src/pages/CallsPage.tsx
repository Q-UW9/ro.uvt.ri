import { useEffect, useState } from 'react'
import { InnerPageTemplate } from '../components/templates/InnerPageTemplate/InnerPageTemplate'
import { ContentGrid } from '../components/templates/ContentGrid/ContentGrid'
import { Card } from '../components/molecules/Card/Card'
import { getCalls } from '../api/wordpress'
import { useLocale } from '../context/LocaleContext'
import type { WPCall } from '../types/wordpress'

function CallsPage() {
  const locale = useLocale()
  const [calls, setCalls] = useState<WPCall[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    getCalls()
      .then(setCalls)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  return (
    <InnerPageTemplate title="Open Calls">
      {loading && <p className="text-gray-500">Loading calls...</p>}
      {error  && <p className="text-red-500">Could not load content.</p>}
      {!loading && !error && calls.length === 0 && (
        <p className="text-gray-500">No calls available at the moment.</p>
      )}
      {!loading && !error && calls.length > 0 && (
        <ContentGrid columns={3}>
          {calls.map((call) => (
            <Card
              key={call.id}
              title={call.title.rendered}
              description={call.excerpt.rendered.replace(/<[^>]+>/g, '')}
              buttonText="View Call"
              route={`/${locale}/calls/${call.slug}`}
            />
          ))}
        </ContentGrid>
      )}
    </InnerPageTemplate>
  )
}

export default CallsPage
