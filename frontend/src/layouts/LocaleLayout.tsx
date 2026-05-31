import { useParams, Navigate, Outlet } from 'react-router-dom'
import {
  LocaleContext,
  SUPPORTED_LOCALES,
  DEFAULT_LOCALE,
  type Locale,
} from '../context/LocaleContext'

export function LocaleLayout() {
  const { locale } = useParams<{ locale: string }>()

  // If locale is missing or not supported, redirect to default
  if (!locale || !SUPPORTED_LOCALES.includes(locale as Locale)) {
    return <Navigate to={`/${DEFAULT_LOCALE}`} replace />
  }

  return (
    <LocaleContext.Provider value={{ locale: locale as Locale }}>
      <Outlet />
    </LocaleContext.Provider>
  )
}
