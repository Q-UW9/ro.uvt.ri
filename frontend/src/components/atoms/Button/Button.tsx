import clsx from 'clsx'
import type { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
}

export function Button({
  children,
  variant='primary',
  size='md',
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(

        'rounded-xl font-medium transition-all duration-200',
        'focus:outline-none focus:ring-2 focus:ring-blue-300',
        'active:scale-95',

        /* Primary */
        variant === 'primary' &&
          `
          bg-blue-600
          text-white

          hover:bg-blue-700
          active:bg-blue-800
          shadow-sm
          hover:shadow-md
          `,

        /* Secondary */
        variant === 'secondary' &&
          `
          border border-blue-600
          text-blue-600
          bg-white

          hover:bg-blue-50
          active:bg-blue-100
          `,

        /* Sizes */
        size === 'sm' && 'px-4 py-2 text-sm',

        size === 'md' && 'px-6 py-3',

        size === 'lg' && 'px-8 py-4 text-lg',

        className
      )}

      {...props}
    >
      {children}
    </button>
  )
}