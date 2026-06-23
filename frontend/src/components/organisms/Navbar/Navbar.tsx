import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { GraduationCap, Menu } from 'lucide-react'

import { LanguageSwitcher } from '../../atoms/LanguageSwitcher/LanguageSwitcher'
import { useLocale } from '../../../context/LocaleContext'

import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

const navLinks = [
  { label: 'About DRI', path: 'about' },
  { label: 'Erasmus+', path: 'erasmus' },
  { label: 'International Students', path: 'international-students' },
  { label: 'Scholarships & Exchanges', path: 'scholarships-exchanges' },
  { label: 'Partnerships', path: 'partnerships' },
  { label: 'News', path: 'news' },
  { label: 'Contact', path: 'contact' },
]

export function Navbar() {
  const locale = useLocale()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-4 sm:px-6">
        <Link
          to={`/${locale}`}
          className="flex items-center gap-2 text-xl font-bold text-uvt-blue"
        >
          <GraduationCap className="size-8" />
          <span className="hidden sm:inline">UVT RI</span>
          <span className="sm:hidden">UVT</span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={`/${locale}/${link.path}`}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-uvt-blue ${
                  isActive ? 'text-uvt-blue' : 'text-gray-600'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="lg:hidden"
                aria-label="Open menu"
              >
                <Menu className="size-6" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetTitle className="sr-only">Navigation menu</SheetTitle>

              <nav className="mt-8 flex flex-col gap-4 px-2">
                <Link
                  to={`/${locale}`}
                  onClick={() => setOpen(false)}
                  className="mb-4 flex items-center gap-2 text-xl font-bold text-uvt-blue"
                >
                  <GraduationCap className="size-7" />
                  UVT RI
                </Link>

                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={`/${locale}/${link.path}`}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `rounded-lg px-3 py-2 text-lg font-medium transition-colors hover:bg-uvt-gray hover:text-uvt-blue ${
                        isActive ? 'text-uvt-blue' : 'text-gray-700'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
