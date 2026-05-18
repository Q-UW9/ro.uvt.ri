import { useParams } from 'react-router-dom'
import { InnerPageTemplate } from '../components/templates/InnerPageTemplate/InnerPageTemplate'

function ProgrammeDetailPage() {
  const { slug } = useParams<{ slug: string }>()

  return (
    <InnerPageTemplate title="Programme: ${slug}">
      <p>Content coming soon.</p>
    </InnerPageTemplate>
  )
}

export default ProgrammeDetailPage
