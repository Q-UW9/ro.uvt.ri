interface DividerProps {
  className?: string
}

export function Divider({
  className = '',
}: DividerProps) {
  return (
    <hr
      className={`
        border-0
        h-px
        w-full
        bg-gray-200
        ${className}
      `}
    />
  )
}