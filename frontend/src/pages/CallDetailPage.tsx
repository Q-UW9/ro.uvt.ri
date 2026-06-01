import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { InnerPageTemplate } from '../components/templates/InnerPageTemplate/InnerPageTemplate'
import { getCall } from '../api/wordpress'
import type { WPCall } from '../types/wordpress'

function CallDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const [call, setCall] = useState<WPCall | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!slug) return
    getCall(slug)
      .then(setCall)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [slug])

  if (loading) return <InnerPageTemplate title="Loading..."><p>Loading...</p></InnerPageTemplate>
  if (error || !call) return <InnerPageTemplate title="Not Found"><p>Could not load this call.</p></InnerPageTemplate>

  // Map ACF documents to DocumentDownloadList format
  const documents = call.acf.documents?.map((doc) => ({
    label: doc.label,
    url: doc.url,
    fileType: 'PDF',
  })) ?? []

  // Map ACF application_steps to AccordionSection format
  const accordion = call.acf.application_steps?.map((item, i) => ({
    title: `Step ${i + 1}`,
    content: item.step,
  })) ?? []

  return (
    <InnerPageTemplate
      title={call.title.rendered}
      accordion={accordion}
      documents={documents}
    >
      {/* Deadline + eligibility */}
      {call.acf.deadline && (
        <p className="mb-4 text-sm font-medium text-gray-500">
          Deadline: <span className="text-gray-900">{call.acf.deadline}</span>
        </p>
      )}
      {call.acf.eligibility && (
        <div
          className="mb-6 text-gray-700"
          dangerouslySetInnerHTML={{ __html: call.acf.eligibility }}
        />
      )}
      <div dangerouslySetInnerHTML={{ __html: call.content.rendered }} />
    </InnerPageTemplate>
  )
}

export default CallDetailPage
