import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getResources } from '../api/wordpress'
import type { WpResource } from '../api/types'
import { InnerPageTemplate } from '../components/templates/InnerPageTemplate/InnerPageTemplate'
import { useLocale } from '../context/LocaleContext'

export default function ResourcesPage() {
  const locale = useLocale()
  const [resources, setResources] = useState<WpResource[]>([])
  const [loading, setLoading]     = useState(true)
  const [error, setError]         = useState<string | null>(null)

  useEffect(() => {
    getResources()
      .then(setResources)
      .catch(e => setError(e.message))
      .finally(() => setLoading(false))
  }, [])

  return (
    <InnerPageTemplate title="Resources">
      {loading && <p className="text-gray-500">Loading…</p>}
      {error   && <p className="text-red-600">Failed to load: {error}</p>}
      {!loading && !error && resources.length === 0 && (
        <p className="text-gray-500">No resources published yet.</p>
      )}
      <ul className="space-y-6">
        {resources.map(res => (
          <li key={res.id} className="border-b pb-4">
            <Link
              to={`/${locale}/resources/${res.slug}`}
              className="text-xl font-semibold text-blue-700 hover:underline"
              dangerouslySetInnerHTML={{ __html: res.title.rendered }}
            />
            {res.acf.file_type && (
              <p className="mt-1 text-sm text-gray-500">Type: {res.acf.file_type}</p>
            )}
            <div
              className="mt-2 text-gray-700"
              dangerouslySetInnerHTML={{ __html: res.excerpt.rendered }}
            />
          </li>
        ))}
      </ul>
    </InnerPageTemplate>
  )
}
