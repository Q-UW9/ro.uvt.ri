import clsx from 'clsx'

interface ContentGridProps {
  children: React.ReactNode
  columns?: 2 | 3 | 4
  className?: string
}

const columnVariants = {
  2: 'md:grid-cols-2',
  3: 'md:grid-cols-3',
  4: 'md:grid-cols-4',
}

export function ContentGrid({
  children,
  columns = 3,
  className,
}: ContentGridProps) {
  return (
    <div
      className={clsx(
        'grid gap-6',
        columnVariants[columns],
        className
      )}
    >
      {children}
    </div>
  )
}