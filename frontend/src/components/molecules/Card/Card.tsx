import clsx from 'clsx'

import { Button } from '../../atoms/Button/Button'
import { Typography } from '../../atoms/Typography/Typography'

interface CardProps {
  title: string
  description: string
<<<<<<< HEAD

  imageUrl?: string

  buttonText?: string

=======
  imageUrl?: string
  buttonText?: string
>>>>>>> ba646335e604c4c7254f64ece240316625d70c16
  className?: string
}

export function Card({
  title,
  description,
  imageUrl,
  buttonText,
  className,
}: CardProps) {
  return (
    <article
      className={clsx(
        'overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md',
        className
      )}
    >
<<<<<<< HEAD
      {/* Optional Image */}
=======
      {/* Optional image */}
>>>>>>> ba646335e604c4c7254f64ece240316625d70c16
      {imageUrl && (
        <div className="h-52 w-full overflow-hidden bg-gray-100">
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-cover"
          />
        </div>
      )}

      {/* Content */}
      <div className="space-y-4 p-6">
        <Typography variant="h3">
          {title}
        </Typography>

        <Typography
          variant="body"
          className="text-gray-600"
        >
          {description}
        </Typography>

        {buttonText && (
          <div className="pt-2">
            <Button variant="primary">
              {buttonText}
            </Button>
          </div>
        )}
      </div>
    </article>
  )
}