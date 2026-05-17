import { Link } from 'react-router-dom'
import { PageLayout } from '../components/templates/PageLayout/PageLayout'

function NotFoundPage() {
  return (
    <PageLayout>
      <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
        <h1 className="mb-4 text-6xl font-bold text-blue-600">404</h1>
        <p className="mb-8 text-xl text-gray-600">Page not found.</p>
        <Link
          to="/"
          className="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
        >
          Back to home
        </Link>
      </div>
    </PageLayout>
  )
}

export default NotFoundPage
