import clsx from 'clsx'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  onClick?: () => void
}

const variants = {
  primary:
    'bg-uvt-blue text-white hover:bg-uvt-navy',

  secondary:
    'bg-uvt-gold text-black hover:opacity-90',

  ghost:
    'border border-gray-300 bg-white text-black hover:bg-gray-100',
}

const sizes = {
  sm: 'px-3 py-2 text-sm',
  md: 'px-5 py-3 text-base',
  lg: 'px-7 py-4 text-lg',
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  type = 'button',
  disabled = false,
  onClick,
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        'rounded-lg font-medium transition-all duration-200',
        'focus:outline-none focus:ring-2 focus:ring-uvt-blue focus:ring-offset-2',
        'disabled:cursor-not-allowed disabled:opacity-50',
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </button>
  )
}