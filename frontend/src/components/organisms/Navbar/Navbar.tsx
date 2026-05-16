import clsx from 'clsx'
import { Link, NavLink } from 'react-router-dom'

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
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4">

        <Link
          to="/"
          className="text-xl font-bold text-uvt-blue"
        >
          UVT RI
        </Link>

        <nav className="hidden items-center gap-8 md:flex">

          {navLinks.map((link) => (

            <NavLink
              key={link.label}
              to={link.to}

              className={({isActive})=>

              clsx(
                'text-sm font-medium transition-colors',

                isActive
                  ? 'text-uvt-blue'
                  : 'text-gray-700 hover:text-uvt-blue'
              )

              }

            >
              {link.label}
            </NavLink>

          ))}

          <LanguageSwitcher/>

        </nav>

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