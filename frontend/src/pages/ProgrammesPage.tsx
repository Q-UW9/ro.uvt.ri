import { useEffect, useState } from 'react'
import { InnerPageTemplate } from '../components/templates/InnerPageTemplate/InnerPageTemplate'
import { ContentGrid } from '../components/templates/ContentGrid/ContentGrid'
import { Card } from '../components/molecules/Card/Card'
import { getProgrammes } from '../api/wordpress'
import { useLocale } from '../context/LocaleContext'
import type { WPProgramme } from '../types/wordpress'

function ProgrammesPage() {
  const locale = useLocale()
  const [programmes, setProgrammes] = useState<WPProgramme[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    getProgrammes()
      .then(setProgrammes)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  return (
    <InnerPageTemplate title="Programmes">
      {loading && <p className="text-gray-500">Loading programmes...</p>}
      {error  && <p className="text-red-500">Could not load content.</p>}
      {!loading && !error && programmes.length === 0 && (
        <p className="text-gray-500">No programmes available at the moment.</p>
      )}
      {!loading && !error && programmes.length > 0 && (
        <ContentGrid columns={3}>
          {programmes.map((prog) => (
            <Card
              key={prog.id}
              title={prog.title.rendered}
              description={prog.excerpt.rendered.replace(/<[^>]+>/g, '')}
              buttonText="View Programme"
              route={`/${locale}/programmes/${prog.slug}`}
            />
          ))}
        </ContentGrid>
      )}
    </InnerPageTemplate>
  )
}

export default ProgrammesPage
