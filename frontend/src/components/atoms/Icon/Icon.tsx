import {
  FaGlobe,
  FaArrowRight,
  FaUserGraduate,
  FaEnvelope,
} from 'react-icons/fa'

interface IconProps {
  name:
    | 'globe'
    | 'arrow'
    | 'graduate'
    | 'mail'

  className?: string
}

const icons = {
  globe: FaGlobe,
  arrow: FaArrowRight,
  graduate: FaUserGraduate,
  mail: FaEnvelope,
}

export function Icon({
  name,
  className,
}: IconProps) {
  const Component = icons[name]

  return (
    <Component
      className={className}
    />
  )
}