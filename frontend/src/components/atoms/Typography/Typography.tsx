import clsx from 'clsx'

interface TypographyProps {
  children: React.ReactNode
  variant?: 'h1' | 'h2' | 'h3' | 'body' | 'caption'
  className?: string
}

const variants = {
  h1: 'text-5xl font-bold leading-tight',
  h2: 'text-4xl font-bold leading-tight',
  h3: 'text-2xl font-semibold leading-snug',
  body: 'text-base leading-7',
  caption: 'text-sm text-gray-500',
}

export function Typography({
  children,
  variant = 'body',
  className,
}: TypographyProps) {
  const Component =
    variant === 'h1'
      ? 'h1'
      : variant === 'h2'
      ? 'h2'
      : variant === 'h3'
      ? 'h3'
      : 'p'

  return (
    <Component
      className={clsx(
        variants[variant],
        className
      )}
    >
      {children}
    </Component>
  )
}