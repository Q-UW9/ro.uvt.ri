import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu } from 'lucide-react'

import { LanguageSwitcher } from '../../atoms/LanguageSwitcher/LanguageSwitcher'
import { useLocale } from '../../../context/LocaleContext'
import { Button } from '../../ui/button'
import { Sheet, SheetContent, SheetTrigger } from '../../ui/sheet'

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
  const location = useLocation()
  const [open, setOpen] = useState(false)

  const isActive = (path: string) =>
    location.pathname === `/${locale}/${path}` ||
    location.pathname.startsWith(`/${locale}/${path}/`)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
      <div className="mx-auto flex h-16 max-w-[1280px] items-center px-6">

        {/* Logo */}
        <Link to={`/${locale}`} className="flex items-center mr-8">
          <img src="/image.png" alt="West University of Timișoara" className="h-10 w-auto [filter:brightness(0)_invert(1)_sepia(1)_hue-rotate(190deg)_saturate(6)_brightness(0.7)]" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-5 lg:flex flex-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={`/${locale}/${link.path}`}
              className={`text-sm font-medium transition-colors hover:text-uvt-blue ${
                isActive(link.path) ? 'text-uvt-blue' : 'text-gray-600'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="hidden lg:flex items-center gap-3 ml-auto">
          <LanguageSwitcher />
          <Button asChild size="sm">
            <Link to={`/${locale}/international-students`}>
              Get Started
            </Link>
          </Button>
        </div>

        {/* Mobile */}
        <div className="flex lg:hidden items-center gap-2 ml-auto">
          <LanguageSwitcher />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px]">
              <nav className="flex flex-col gap-4 mt-8 px-4">
                <Link
                  to={`/${locale}`}
                  onClick={() => setOpen(false)}
                  className="flex items-center mb-4"
                >
                  <img src="/image.png" alt="West University of Timișoara" className="h-8 w-auto" />
                </Link>
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={`/${locale}/${link.path}`}
                    onClick={() => setOpen(false)}
                    className={`text-base font-medium transition-colors hover:text-uvt-blue ${
                      isActive(link.path) ? 'text-uvt-blue' : 'text-gray-700'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button asChild className="mt-4">
                  <Link to={`/${locale}/international-students`} onClick={() => setOpen(false)}>
                    Get Started
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </header>
  )
}
