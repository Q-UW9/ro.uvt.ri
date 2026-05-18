import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

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

      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}

        transition={{
          duration: .7
        }}

        className="relative mx-auto max-w-[1280px] px-6 py-28"
      >

        <div className="max-w-[700px] space-y-8">

          <motion.span
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}

            transition={{
              delay:.2
            }}

            className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium"
          >
            West University of Timișoara
          </motion.span>

          <motion.h1
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}

            transition={{
              delay:.3
            }}

            className="text-6xl font-bold leading-tight"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}

            transition={{
              delay:.5
            }}

            className="max-w-[600px] text-lg leading-8 text-gray-600"
          >
            {subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}

            transition={{
              delay:.7
            }}

            className="flex flex-wrap gap-4"
          >

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

          </motion.div>

        </div>

      </motion.div>

    </section>
  )
}