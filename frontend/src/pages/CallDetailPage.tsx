import { useParams } from 'react-router-dom'
import { InnerPageTemplate } from '../components/templates/InnerPageTemplate/InnerPageTemplate'

// TODO: fetch call by slug from api/wordpress.js once Role 6 delivers
// rest-api-exposure-checklist.md and CPT field names are confirmed.
function CallDetailPage() {
  const { slug } = useParams<{ slug: string }>()

  return (
    <InnerPageTemplate title={`Call: ${slug}`}>
      <p>Content coming soon.</p>
    </InnerPageTemplate>
  )
}

export default CallDetailPage
