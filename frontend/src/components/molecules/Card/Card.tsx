import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import { Card as ShadCard, CardHeader, CardTitle, CardDescription, CardContent } from '../../ui/card'
import { Button } from '../../ui/button'
import { ChevronRight } from 'lucide-react'

interface CardProps {
  title: string
  description: string
  buttonText?: string
  route?: string
  icon?: React.ComponentType<{ className?: string }>
}

export function Card({
  title,
  description,
  buttonText,
  route = '/',
  icon: Icon,
}: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
    >
      <ShadCard className="h-full hover:shadow-lg transition-shadow duration-200">

        <CardHeader>
          {Icon && (
            <div className="mb-3 inline-flex size-12 items-center justify-center rounded-lg bg-uvt-blue/10 text-uvt-blue">
              <Icon className="size-6" />
            </div>
          )}
          <CardTitle className="text-xl">{title}</CardTitle>
        </CardHeader>

        <CardContent className="flex flex-col gap-4">
          <CardDescription className="text-sm leading-6 text-gray-600">
            {description}
          </CardDescription>

          {buttonText && (
            <Button variant="outline" size="sm" asChild className="mt-auto w-fit">
              <Link to={route}>
                {buttonText}
                <ChevronRight className="ml-1 size-3.5" />
              </Link>
            </Button>
          )}
        </CardContent>

      </ShadCard>
    </motion.div>
  )
}
