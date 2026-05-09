import { Button } from '../../atoms/Button/Button'
import { Typography } from '../../atoms/Typography/Typography'

interface HeroSectionProps {
  title: string
  subtitle: string
  primaryButtonText?: string
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
      <div className="mx-auto flex max-w-[1280px] flex-col gap-12 px-6 md:flex-row md:items-center md:justify-between">
        
        {/* Left Content */}
        <div className="max-w-2xl space-y-6">
          <Typography variant="h1">
            {title}
          </Typography>

          <Typography
            variant="body"
            className="text-lg text-gray-600"
          >
            {subtitle}
          </Typography>

          <div className="flex flex-wrap gap-4 pt-4">
            {primaryButtonText && (
              <Button variant="primary" size="lg">
                {primaryButtonText}
              </Button>
            )}

            {secondaryButtonText && (
              <Button variant="ghost" size="lg">
                {secondaryButtonText}
              </Button>
            )}
          </div>
        </div>

        {/* Right Side Placeholder */}
        <div className="flex h-[300px] w-full items-center justify-center rounded-2xl bg-white shadow-sm md:w-[450px]">
          <p className="text-gray-400">
            Future Hero Image / Illustration
          </p>
        </div>
      </div>
    </section>
  )
}