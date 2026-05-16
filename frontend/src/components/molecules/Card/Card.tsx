import { Link } from 'react-router-dom'

import { Button } from '../../atoms/Button/Button'

interface CardProps {
  title: string
  description: string
  buttonText?: string
  route?: string
}

export function Card({
  title,
  description,
  buttonText,
  route='/'
}:CardProps) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

      <h3 className="mb-4 text-2xl font-semibold">
        {title}
      </h3>

      <p className="mb-6 text-gray-600">
        {description}
      </p>

      {buttonText && (
        <Link to={route}>
          <Button>
            {buttonText}
          </Button>
        </Link>
      )}

    </div>
  )
}