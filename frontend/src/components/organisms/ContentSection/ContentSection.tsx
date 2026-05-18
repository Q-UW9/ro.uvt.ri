import clsx from 'clsx'

interface ContentSectionProps {
  children: React.ReactNode
  className?: string
}

export function ContentSection({
  children,
  className,
}: ContentSectionProps) {
  return (
    <section
      className={clsx(
        'py-16 md:py-24',
        className
      )}
    >
      {children}
    </section>
  )
}