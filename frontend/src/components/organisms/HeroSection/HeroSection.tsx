import { Link } from 'react-router-dom'

import { Button } from '../../atoms/Button/Button'

interface HeroSectionProps {
  title: string
  subtitle: string

  primaryButtonText?: string
  secondaryButtonText?: string

  primaryButtonLink?: string
  secondaryButtonLink?: string
}

export function HeroSection({
  title,
  subtitle,

  primaryButtonText,
  secondaryButtonText,

  primaryButtonLink,
  secondaryButtonLink,
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white" />

      <div className="relative mx-auto max-w-[1280px] px-6 py-28">

        <div className="max-w-[700px] space-y-8">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium">
            West University of Timișoara
          </span>

          <h1 className="text-6xl font-bold leading-tight">
            {title}
          </h1>

          <p className="max-w-[600px] text-lg leading-8 text-gray-600">
            {subtitle}
          </p>

          <div className="flex flex-wrap gap-4">

            {primaryButtonText && (
              <Link to={primaryButtonLink || '/'}>
                <Button>
                  {primaryButtonText}
                </Button>
              </Link>
            )}

            {secondaryButtonText && (
              <Link to={secondaryButtonLink || '/'}>
                <Button variant="secondary">
                  {secondaryButtonText}
                </Button>
              </Link>
            )}

          </div>

        </div>

      </div>
    </section>
  )
}