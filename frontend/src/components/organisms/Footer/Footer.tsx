import { Link } from 'react-router-dom'
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react'

import { useLocale } from '../../../context/LocaleContext'

export function Footer() {
  const locale = useLocale()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto grid max-w-[1280px] gap-8 px-6 py-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="mb-4 font-bold text-white">UVT International Relations</h3>
          <p className="mb-4 text-sm leading-6">
            Information for Erasmus+ mobility, international students,
            scholarships, partnerships, and university cooperation.
          </p>
          <div className="flex gap-3">
            <a href="#" aria-label="Facebook" className="transition-colors hover:text-blue-400">
              <Facebook className="size-5" />
            </a>
            <a href="#" aria-label="Instagram" className="transition-colors hover:text-blue-400">
              <Instagram className="size-5" />
            </a>
            <a href="#" aria-label="LinkedIn" className="transition-colors hover:text-blue-400">
              <Linkedin className="size-5" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-bold text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to={`/${locale}/about`} className="transition-colors hover:text-blue-400">
                About DRI
              </Link>
            </li>
            <li>
              <Link to={`/${locale}/erasmus`} className="transition-colors hover:text-blue-400">
                Erasmus+
              </Link>
            </li>
            <li>
              <Link to={`/${locale}/international-students`} className="transition-colors hover:text-blue-400">
                International Students
              </Link>
            </li>
            <li>
              <Link to={`/${locale}/partnerships`} className="transition-colors hover:text-blue-400">
                Partnerships
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-bold text-white">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to={`/${locale}/scholarships-exchanges`} className="transition-colors hover:text-blue-400">
                Scholarships & Exchanges
              </Link>
            </li>
            <li>
              <Link to={`/${locale}/calls`} className="transition-colors hover:text-blue-400">
                Calls
              </Link>
            </li>
            <li>
              <Link to={`/${locale}/resources`} className="transition-colors hover:text-blue-400">
                Resources
              </Link>
            </li>
            <li>
              <Link to={`/${locale}/news`} className="transition-colors hover:text-blue-400">
                News
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-bold text-white">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0" />
              <span>Bulevardul Vasile Pârvan 4, Timișoara 300223, Romania</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="size-4 shrink-0" />
              <span>+40 256 592 111</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="size-4 shrink-0" />
              <span>contact@e-uvt.ro</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 px-6 py-6 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} West University of Timișoara. All rights reserved.</p>
      </div>
    </footer>
  )
}
