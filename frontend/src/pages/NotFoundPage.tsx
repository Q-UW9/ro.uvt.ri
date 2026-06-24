import { Link } from 'react-router-dom'
import { PageLayout } from '../components/templates/PageLayout/PageLayout'
import { Button } from '../components/ui/button'

function NotFoundPage() {
  return (
    <PageLayout>
      <div className="flex min-h-[60vh] flex-col items-center justify-center text-center px-6">
        <div className="mb-4 text-8xl font-bold text-uvt-navy">404</div>
        <h1 className="mb-3 text-2xl font-semibold text-gray-900">Page not found</h1>
        <p className="mb-8 text-gray-600">The page you're looking for doesn't exist or has been moved.</p>
        <Button asChild>
          <Link to="/">Back to home</Link>
        </Button>
      </div>
    </PageLayout>
  )
}

export default NotFoundPage
