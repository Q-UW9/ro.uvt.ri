import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { InnerPageTemplate } from '../components/templates/InnerPageTemplate/InnerPageTemplate'
import { getProgramme } from '../api/wordpress'
import type { WPProgramme } from '../types/wordpress'

function ProgrammeDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const [programme, setProgramme] = useState<WPProgramme | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!slug) return
    getProgramme(slug)
      .then(setProgramme)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [slug])

  if (loading) return <InnerPageTemplate title="Loading..."><p>Loading...</p></InnerPageTemplate>
  if (error || !programme) return <InnerPageTemplate title="Not Found"><p>Could not load this programme.</p></InnerPageTemplate>

  return (
    <InnerPageTemplate title={programme.title.rendered}>
      {/* Key details */}
      <div className="mb-8 grid grid-cols-2 gap-4 rounded-xl border border-gray-200 bg-gray-50 p-6 text-sm md:grid-cols-3">
        {programme.acf.duration && (
          <div><span className="font-medium text-gray-500">Duration</span><p className="text-gray-900">{programme.acf.duration}</p></div>
        )}
        {programme.acf.language && (
          <div><span className="font-medium text-gray-500">Language</span><p className="text-gray-900">{programme.acf.language}</p></div>
        )}
        {programme.acf.partner_institution && (
          <div><span className="font-medium text-gray-500">Partner Institution</span><p className="text-gray-900">{programme.acf.partner_institution}</p></div>
        )}
        {programme.acf.application_deadline && (
          <div><span className="font-medium text-gray-500">Application Deadline</span><p className="text-gray-900">{programme.acf.application_deadline}</p></div>
        )}
        {programme.acf.country && (
          <div><span className="font-medium text-gray-500">Country</span><p className="text-gray-900">{programme.acf.country}</p></div>
        )}
        {programme.acf.coordinator_email && (
          <div><span className="font-medium text-gray-500">Contact</span><a href={`mailto:${programme.acf.coordinator_email}`} className="text-blue-600 hover:underline">{programme.acf.coordinator_email}</a></div>
        )}
      </div>
      <div dangerouslySetInnerHTML={{ __html: programme.content.rendered }} />
    </InnerPageTemplate>
  )
}

export default ProgrammeDetailPage
