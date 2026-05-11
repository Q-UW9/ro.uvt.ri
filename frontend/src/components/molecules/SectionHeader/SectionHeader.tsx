import { Typography } from '../../atoms/Typography/Typography'

interface SectionHeaderProps {
  title: string
  subtitle?: string
  className?: string
}

export function SectionHeader({
  title,
  subtitle,
  className,
}: SectionHeaderProps) {
  return (
    <div className={className}>
      <Typography variant="h2">
        {title}
      </Typography>

      {subtitle && (
        <Typography
          variant="body"
          className="mt-4 max-w-3xl text-gray-600"
        >
          {subtitle}
        </Typography>
      )}

      <div className="mt-6 h-1 w-20 bg-uvt-gold rounded-full" />
    </div>
  )
}