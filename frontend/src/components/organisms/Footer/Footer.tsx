import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'
import { useLocale } from '../../../context/LocaleContext'

export function Footer() {
  const locale = useLocale()
  const l = (path: string) => `/${locale}/${path}`

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-[1280px] px-6 py-12">

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">

          {/* Branding */}
          <div>
            <h3 className="mb-4 font-bold text-white">West University of Timișoara</h3>
            <p className="mb-4 text-sm">
              Department of Research and Internationalization — your gateway to global academic mobility, Erasmus+, and international partnerships.
            </p>
            <div className="flex gap-4 text-sm">
              <a href="https://www.facebook.com/uvtimisoara" target="_blank" rel="noopener noreferrer" className="hover:text-uvt-gold transition-colors">Facebook</a>
              <a href="https://twitter.com/uvt_timisoara" target="_blank" rel="noopener noreferrer" className="hover:text-uvt-gold transition-colors">Twitter</a>
              <a href="https://www.linkedin.com/school/universitatea-de-vest-din-timisoara" target="_blank" rel="noopener noreferrer" className="hover:text-uvt-gold transition-colors">LinkedIn</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-bold text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to={l('about')} className="hover:text-uvt-gold transition-colors">About DRI</Link></li>
              <li><Link to={l('erasmus')} className="hover:text-uvt-gold transition-colors">Erasmus+</Link></li>
              <li><Link to={l('international-students')} className="hover:text-uvt-gold transition-colors">International Students</Link></li>
              <li><Link to={l('partnerships')} className="hover:text-uvt-gold transition-colors">Partnerships</Link></li>
              <li><Link to={l('news')} className="hover:text-uvt-gold transition-colors">News</Link></li>
            </ul>
          </div>

          {/* Mobility */}
          <div>
            <h3 className="mb-4 font-bold text-white">Mobility</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to={l('erasmus/incoming-students')} className="hover:text-uvt-gold transition-colors">Incoming Students</Link></li>
              <li><Link to={l('erasmus/outgoing-students')} className="hover:text-uvt-gold transition-colors">Outgoing Students</Link></li>
              <li><Link to={l('erasmus/partner-countries')} className="hover:text-uvt-gold transition-colors">Partner Countries</Link></li>
              <li><Link to={l('scholarships-exchanges')} className="hover:text-uvt-gold transition-colors">Scholarships</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-bold text-white">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="size-4 mt-0.5 shrink-0" />
                <span>Bulevardul Vasile Pârvan 4, Timișoara 300223, Romania</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-4 shrink-0" />
                <span>+40 256 592 111</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-4 shrink-0" />
                <span>dri@e-uvt.ro</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} West University of Timișoara — Department of Research and Internationalization. All rights reserved.</p>
        </div>

      </div>
    </footer>
  )
}
