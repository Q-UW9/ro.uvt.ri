import { Link } from 'react-router-dom'
import { LanguageSwitcher } from '../../atoms/LanguageSwitcher/LanguageSwitcher'
import { useLocale } from '../../../context/LocaleContext'

const navLinks = [
  { label: 'About DRI',                path: 'about' },
  { label: 'Erasmus+',                 path: 'erasmus' },
  { label: 'International Students',   path: 'international-students' },
  { label: 'Scholarships & Exchanges', path: 'scholarships-exchanges' },
  { label: 'Partnerships',             path: 'partnerships' },
  { label: 'News',                     path: 'news' },
  { label: 'Contact',                  path: 'contact' },
]

export function Navbar() {
  const locale = useLocale()

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4">

        {/* Logo — goes to locale home */}
        <Link to={`/${locale}`} className="text-xl font-bold text-uvt-blue">
          UVT RI
        </Link>

        {/* Nav links — desktop */}
        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={`/${locale}/${link.path}`}
              className="text-sm font-medium text-gray-700 transition hover:text-uvt-blue"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side — language switcher + mobile menu */}
        <div className="flex items-center gap-3">
          <LanguageSwitcher />

          {/* Mobile menu placeholder — to be wired up */}
          <button
            className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 lg:hidden"
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>

      </div>
    </header>
  )
}
