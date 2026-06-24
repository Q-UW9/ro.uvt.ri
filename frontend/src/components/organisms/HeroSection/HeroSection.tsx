import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'

import { Button } from '../../ui/button'

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
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">

      {/* Dark gradient background — UVT navy → UVT blue */}
      <div className="absolute inset-0 bg-gradient-to-r from-uvt-navy/95 to-uvt-blue/80" />

      {/* Subtle texture overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(242,183,5,0.08),transparent_60%)]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 mx-auto max-w-[1280px] px-6 text-center text-white w-full"
      >

        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-6 inline-block rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium backdrop-blur-sm border border-white/20"
        >
          West University of Timișoara
        </motion.span>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="mb-6 text-4xl font-bold leading-tight md:text-6xl"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mx-auto mb-8 max-w-[600px] text-lg leading-8 text-blue-100"
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65 }}
          className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >

          {primaryButtonText && (
            <Button size="lg" asChild>
              <Link to={primaryButtonLink || '/'}>
                {primaryButtonText}
                <ChevronRight className="ml-1 size-4" />
              </Link>
            </Button>
          )}

          {secondaryButtonText && (
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 hover:bg-white/20 text-white border-white/50 hover:border-white"
              asChild
            >
              <Link to={secondaryButtonLink || '/'}>
                {secondaryButtonText}
              </Link>
            </Button>
          )}

        </motion.div>

      </motion.div>

    </section>
  )
}
