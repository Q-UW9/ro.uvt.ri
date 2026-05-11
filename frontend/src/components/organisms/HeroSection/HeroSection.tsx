import { Button } from '../../atoms/Button/Button'

interface HeroSectionProps {
  title: string
  subtitle: string
  primaryButtonText: string
  secondaryButtonText?: string
}

export function HeroSection({
  title,
  subtitle,
  primaryButtonText,
  secondaryButtonText,
}: HeroSectionProps) {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto flex max-w-[1280px] flex-col items-start gap-8 px-6">
        
        <div className="max-w-3xl space-y-6">
          <h1 className="text-5xl font-bold leading-tight text-gray-900">
            {title}
          </h1>

          <p className="text-lg leading-8 text-gray-600">
            {subtitle}
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <Button variant="primary">
            {primaryButtonText}
          </Button>

          {secondaryButtonText && (
            <Button variant="secondary">
              {secondaryButtonText}
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}