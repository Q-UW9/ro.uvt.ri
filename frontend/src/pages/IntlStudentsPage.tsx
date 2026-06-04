import { useEffect, useState } from 'react'
import { InnerPageTemplate } from '../components/templates/InnerPageTemplate/InnerPageTemplate'
import { getPage } from '../api/wordpress'
import type { WPPage } from '../types/wordpress'

function IntlStudentsPage() {
  const [page, setPage] = useState<WPPage | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    getPage('international-students')
      .then(setPage)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  // Map ACF FAQ section to accordion format
  const accordion = page?.acf?.faqs?.map((faq) => ({
    title: faq.question,
    content: faq.answer,
  })) ?? []

  // Map ACF document repeater
  const documents = page?.acf?.documents?.map((doc) => ({
    label: doc.label,
    url: doc.file_url,
    fileType: 'PDF',
  })) ?? []

  return (
    <InnerPageTemplate
      title={loading ? 'International Students' : page?.title?.rendered ?? 'International Students'}
      accordion={accordion}
      documents={documents}
    >
      {loading && <p className="text-gray-500">Loading...</p>}
      {error && <p className="text-red-500">Could not load content.</p>}
      {!loading && !error && page && (
        <div dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
      )}
      {!loading && !error && !page && (
        <p className="text-gray-500">Content coming soon.</p>
      )}
    </InnerPageTemplate>
  )
}

export default IntlStudentsPage
