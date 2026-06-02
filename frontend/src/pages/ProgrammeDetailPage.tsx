import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProgramme } from '../api/wordpress'
import type { WpProgramme } from '../api/types'
import { InnerPageTemplate } from '../components/templates/InnerPageTemplate/InnerPageTemplate'

export default function ProgrammeDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const [programme, setProgramme] = useState<WpProgramme | null>(null)
  const [loading, setLoading]     = useState(true)
  const [error, setError]         = useState<string | null>(null)

  useEffect(() => {
    if (!slug) return
    getProgramme(slug)
      .then(data => {
        if (!data) throw new Error('Not found')
        setProgramme(data)
      })
      .catch(e => setError(e.message))
      .finally(() => setLoading(false))
  }, [slug])

  if (loading) return <InnerPageTemplate title="Loading…"><p /></InnerPageTemplate>
  if (error)   return <InnerPageTemplate title="Error"><p className="text-red-600">{error}</p></InnerPageTemplate>
  if (!programme) return null

  return (
    <InnerPageTemplate title={programme.title.rendered}>
      <div className="mb-8 grid grid-cols-2 gap-4 rounded-xl border border-gray-200 bg-gray-50 p-6 text-sm md:grid-cols-3">
        {programme.acf.duration && (
          <div><p className="font-medium text-gray-500">Duration</p><p>{programme.acf.duration}</p></div>
        )}
        {programme.acf.language && (
          <div><p className="font-medium text-gray-500">Language</p><p>{programme.acf.language}</p></div>
        )}
        {programme.acf.partner_institution && (
          <div><p className="font-medium text-gray-500">Partner Institution</p><p>{programme.acf.partner_institution}</p></div>
        )}
        {programme.acf.application_deadline && (
          <div><p className="font-medium text-gray-500">Deadline</p><p>{programme.acf.application_deadline}</p></div>
        )}
        {programme.acf.country && (
          <div><p className="font-medium text-gray-500">Country</p><p>{programme.acf.country}</p></div>
        )}
        {programme.acf.coordinator_email && (
          <div><p className="font-medium text-gray-500">Contact</p>
          <a href={`mailto:${programme.acf.coordinator_email}`} className="text-blue-600 hover:underline">{programme.acf.coordinator_email}</a></div>
        )}
      </div>
      <div dangerouslySetInnerHTML={{ __html: programme.content.rendered }} />
    </InnerPageTemplate>
  )
}
