import { Button } from '../../atoms/Button/Button'
<<<<<<< HEAD
import { Typography } from '../../atoms/Typography/Typography'
=======
>>>>>>> ba646335e604c4c7254f64ece240316625d70c16

interface HeroSectionProps {
  title: string
  subtitle: string
<<<<<<< HEAD
  primaryButtonText?: string
=======
  primaryButtonText: string
>>>>>>> ba646335e604c4c7254f64ece240316625d70c16
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
<<<<<<< HEAD
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
=======
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
>>>>>>> ba646335e604c4c7254f64ece240316625d70c16
        </div>
      </div>
    </section>
  )
}