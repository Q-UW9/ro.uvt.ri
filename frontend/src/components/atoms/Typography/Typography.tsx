import clsx from 'clsx'

interface TypographyProps {
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'body'
    | 'caption'

  children: React.ReactNode
  className?: string
}

const styles = {
  h1: 'text-5xl font-bold leading-tight',
  h2: 'text-4xl font-bold leading-tight',
  h3: 'text-2xl font-semibold',
  body: 'text-base leading-7',
  caption: 'text-sm text-gray-500',
}

export function Typography({
  variant = 'body',
  children,
  className,
}: TypographyProps) {
  const Component = variant === 'body'
    ? 'p'
    : variant === 'caption'
    ? 'span'
    : variant

  return (
    <Component
      className={clsx(styles[variant], className)}
    >
      {children}
    </Component>
  )
}