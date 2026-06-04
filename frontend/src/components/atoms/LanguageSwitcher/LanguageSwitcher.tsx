import { useNavigate, useLocation, useParams } from 'react-router-dom'
import clsx from 'clsx'
import {
  SUPPORTED_LOCALES,
  DEFAULT_LOCALE,
  useLocale,
  type Locale,
} from '../../../context/LocaleContext'

function triggerGoogleTranslate(lang: Locale) {
  // Find the Google Translate select element and change it
  const select = document.querySelector('.goog-te-combo') as HTMLSelectElement
  if (select) {
    select.value = lang
    select.dispatchEvent(new Event('change'))
  }
}

export function LanguageSwitcher() {
  const navigate = useNavigate()
  const location = useLocation()
  const { locale: currentLocale } = useParams<{ locale: string }>()
  const activeLocale = useLocale()

  function switchLocale(newLocale: Locale) {
    if (newLocale === activeLocale) return

    // 1. Update the URL
    const currentPath = location.pathname
    const localeSegment = currentLocale ?? DEFAULT_LOCALE
    const newPath = currentPath.startsWith(`/${localeSegment}`)
      ? currentPath.replace(`/${localeSegment}`, `/${newLocale}`)
      : `/${newLocale}`

    navigate(newPath)

    // 2. Trigger Google Translate
    triggerGoogleTranslate(newLocale)
  }

  return (
    <div className="flex rounded-xl border border-gray-200 p-1">
      {SUPPORTED_LOCALES.map((lang) => (
        <button
          key={lang}
          type="button"
          onClick={() => switchLocale(lang)}
          aria-label={`Switch to ${lang.toUpperCase()}`}
          className={clsx(
            'rounded-lg px-3 py-1 text-sm font-medium uppercase transition',
            activeLocale === lang
              ? 'bg-uvt-blue text-white'
              : 'text-gray-600 hover:text-uvt-blue'
          )}
        >
          {lang}
        </button>
      ))}
    </div>
  )
}
