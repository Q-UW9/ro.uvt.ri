import { useParams } from 'react-router-dom'
import { InnerPageTemplate } from '../components/templates/InnerPageTemplate/InnerPageTemplate'

function ResourceDetailPage() {
  const { slug } = useParams<{ slug: string }>()

  return (
    <InnerPageTemplate title="Resource: ${slug}">
      <p>Content coming soon.</p>
    </InnerPageTemplate>
  )
}

export default ResourceDetailPage
