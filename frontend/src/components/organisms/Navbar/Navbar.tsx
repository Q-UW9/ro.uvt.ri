import { useState } from 'react'
import clsx from 'clsx'

import { FaBars, FaTimes } from 'react-icons/fa'

import { Button } from '../../atoms/Button/Button'

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Admissions', href: '#' },
  { label: 'Erasmus', href: '#' },
  { label: 'Contact', href: '#' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-6">
        
        {/* Logo */}
        <div className="text-xl font-bold text-uvt-blue">
          UVT RI
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium transition-colors hover:text-uvt-blue"
            >
              {link.label}
            </a>
          ))}

          <Button size="sm">
            Apply Now
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl md:hidden"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={clsx(
          'overflow-hidden transition-all duration-300 md:hidden',
          isOpen ? 'max-h-96 border-t border-gray-200' : 'max-h-0'
        )}
      >
        <nav className="flex flex-col gap-4 px-6 py-5">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium"
            >
              {link.label}
            </a>
          ))}

          <Button size="sm">
            Apply Now
          </Button>
        </nav>
      </div>
    </header>
  )
}