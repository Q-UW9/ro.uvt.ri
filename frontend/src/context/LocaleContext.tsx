import { createContext, useContext } from 'react'

export type Locale = 'ro' | 'en'

export const SUPPORTED_LOCALES: Locale[] = ['ro', 'en']
export const DEFAULT_LOCALE: Locale = 'en'

interface LocaleContextValue {
  locale: Locale
}

export const LocaleContext = createContext<LocaleContextValue>({
  locale: DEFAULT_LOCALE,
})

export function useLocale(): Locale {
  return useContext(LocaleContext).locale
}
