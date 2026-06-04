import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getCalls } from '../api/wordpress'
import type { WpCall } from '../api/types'
import { InnerPageTemplate } from '../components/templates/InnerPageTemplate/InnerPageTemplate'
import { useLocale } from '../context/LocaleContext'

export default function CallsPage() {
  const locale = useLocale()
  const [calls, setCalls]     = useState<WpCall[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState<string | null>(null)

  useEffect(() => {
    getCalls()
      .then(setCalls)
      .catch(e => setError(e.message))
      .finally(() => setLoading(false))
  }, [])

  return (
    <InnerPageTemplate title="Calls for Applications">
      {loading && <p className="text-gray-500">Loading…</p>}
      {error   && <p className="text-red-600">Failed to load: {error}</p>}
      {!loading && !error && calls.length === 0 && (
        <p className="text-gray-500">No calls published yet.</p>
      )}
      <ul className="space-y-6">
        {calls.map(call => (
          <li key={call.id} className="border-b pb-4">
            <Link
              to={`/${locale}/calls/${call.slug}`}
              className="text-xl font-semibold text-blue-700 hover:underline"
              dangerouslySetInnerHTML={{ __html: call.title.rendered }}
            />
            {call.acf.deadline && (
              <p className="mt-1 text-sm text-gray-500">
                Deadline: {call.acf.deadline}
              </p>
            )}
            <div
              className="mt-2 text-gray-700"
              dangerouslySetInnerHTML={{ __html: call.excerpt.rendered }}
            />
          </li>
        ))}
      </ul>
    </InnerPageTemplate>
  )
}
