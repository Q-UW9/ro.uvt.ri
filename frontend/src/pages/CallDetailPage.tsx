import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getCall } from '../api/wordpress'
import type { WpCall } from '../api/types'
import { InnerPageTemplate } from '../components/templates/InnerPageTemplate/InnerPageTemplate'

export default function CallDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const [call, setCall]       = useState<WpCall | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState<string | null>(null)

  useEffect(() => {
    if (!slug) return
    getCall(slug)
      .then(data => {
        if (!data) throw new Error('Not found')
        setCall(data)
      })
      .catch(e => setError(e.message))
      .finally(() => setLoading(false))
  }, [slug])

  if (loading) return <InnerPageTemplate title="Loading…"><p /></InnerPageTemplate>
  if (error)   return <InnerPageTemplate title="Error"><p className="text-red-600">{error}</p></InnerPageTemplate>
  if (!call)   return null

  return (
    <InnerPageTemplate
      title={call.title.rendered}
      accordion={call.acf.application_steps?.map(s => ({
        question: 'Step',
        answer: s.step,
      }))}
      documents={call.acf.documents?.map(d => ({
        label: d.label,
        url: d.url,
        fileType: 'PDF',
      }))}
    >
      {call.acf.deadline && (
        <p className="mb-4 text-sm font-medium text-gray-500">
          Deadline: <strong>{call.acf.deadline}</strong>
        </p>
      )}
      {call.acf.eligibility && (
        <section className="mb-6">
          <h2 className="mb-2 text-lg font-semibold">Eligibility</h2>
          <p>{call.acf.eligibility}</p>
        </section>
      )}
      <div dangerouslySetInnerHTML={{ __html: call.content.rendered }} />
    </InnerPageTemplate>
  )
}
