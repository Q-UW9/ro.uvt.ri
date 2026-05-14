import clsx from 'clsx'
import { Link } from 'react-router-dom'

import { LanguageSwitcher } from '../../atoms/LanguageSwitcher/LanguageSwitcher'

const navLinks = [
  {
    label: 'Home',
    to: '/',
  },

  {
    label: 'Admissions',
    to: '/admissions',
  },

  {
    label: 'Erasmus',
    to: '/erasmus',
  },

  {
    label: 'Research',
    to: '/research',
  },

  {
    label: 'Contact',
    to: '/contact',
  },
]

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-bold text-uvt-blue"
        >
          UVT RI
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className={clsx(
                'text-sm font-medium text-gray-700 transition-colors hover:text-uvt-blue'
              )}
            >
              {link.label}
            </Link>
          ))}

          <LanguageSwitcher />
        </nav>

        {/* Mobile */}
        <button
          type="button"
          className="rounded-lg border border-gray-200 px-4 py-2 text-sm md:hidden"
        >
          Menu
        </button>
      </div>
    </header>
  )
}