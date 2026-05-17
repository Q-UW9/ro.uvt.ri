import { Link } from 'react-router-dom'

const navLinks = [
  { label: 'About',                  to: '/about' },
  { label: 'Erasmus',                to: '/erasmus' },
  { label: 'International Students', to: '/international-students' },
  { label: 'Programmes',             to: '/programmes' },
  { label: 'Partnerships',           to: '/partnerships' },
  { label: 'News',                   to: '/news' },
  { label: 'Contact',                to: '/contact' },
]

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-blue-700">
          UVT RI
        </Link>

        {/* Nav links — desktop */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm font-medium text-gray-700 transition hover:text-blue-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu placeholder — to be wired up */}
        <button
          className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 md:hidden"
          aria-label="Open menu"
        >
          ☰
        </button>

      </div>
    </header>
  )
}
