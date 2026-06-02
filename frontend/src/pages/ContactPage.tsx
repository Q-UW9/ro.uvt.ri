import { useEffect, useState } from 'react'
import { InnerPageTemplate } from '../components/templates/InnerPageTemplate/InnerPageTemplate'
import { getPage } from '../api/wordpress'

function ContactPage() {
  const [title, setTitle] = useState('Contact')
  const [content, setContent] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    getPage('contact')
      .then((page) => {
        if (page) {
          setTitle(page.title.rendered)
          setContent(page.content.rendered)
        }
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  return (
    <InnerPageTemplate title={title}>
      {loading && <p>Loading...</p>}
      {error && <p>Could not load content.</p>}
      {!loading && !error && content && (
        <div dangerouslySetInnerHTML={{ __html: content }} />
      )}
      {!loading && !error && !content && (
        <p>No content available yet.</p>
      )}
    </InnerPageTemplate>
  )
}

export default ContactPage
