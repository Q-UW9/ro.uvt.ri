import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getProgrammes } from '../api/wordpress'
import type { WpProgramme } from '../api/types'
import { InnerPageTemplate } from '../components/templates/InnerPageTemplate/InnerPageTemplate'
import { useLocale } from '../context/LocaleContext'

export default function ProgrammesPage() {
  const locale = useLocale()
  const [programmes, setProgrammes] = useState<WpProgramme[]>([])
  const [loading, setLoading]       = useState(true)
  const [error, setError]           = useState<string | null>(null)

  useEffect(() => {
    getProgrammes()
      .then(setProgrammes)
      .catch(e => setError(e.message))
      .finally(() => setLoading(false))
  }, [])

  return (
    <InnerPageTemplate title="Programmes">
      {loading && <p className="text-gray-500">Loading…</p>}
      {error   && <p className="text-red-600">Failed to load: {error}</p>}
      {!loading && !error && programmes.length === 0 && (
        <p className="text-gray-500">No programmes published yet.</p>
      )}
      <ul className="space-y-6">
        {programmes.map(prog => (
          <li key={prog.id} className="border-b pb-4">
            <Link
              to={`/${locale}/programmes/${prog.slug}`}
              className="text-xl font-semibold text-blue-700 hover:underline"
              dangerouslySetInnerHTML={{ __html: prog.title.rendered }}
            />
            {prog.acf.duration && (
              <p className="mt-1 text-sm text-gray-500">Duration: {prog.acf.duration}</p>
            )}
            <div
              className="mt-2 text-gray-700"
              dangerouslySetInnerHTML={{ __html: prog.excerpt.rendered }}
            />
          </li>
        ))}
      </ul>
    </InnerPageTemplate>
  )
}
