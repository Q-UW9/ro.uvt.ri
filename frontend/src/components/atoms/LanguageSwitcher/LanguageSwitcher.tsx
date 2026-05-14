import { useState } from 'react'
import clsx from 'clsx'

const languages = ['EN', 'RO']

export function LanguageSwitcher() {
  const [active, setActive] =
    useState('EN')

  return (
    <div className="flex rounded-xl border border-gray-200 p-1">
      {languages.map((language) => (
        <button
          key={language}
          type="button"
          onClick={() =>
            setActive(language)
          }
          className={clsx(
            'rounded-lg px-3 py-1 text-sm transition',

            active === language &&
              'bg-uvt-blue text-white'
          )}
        >
          {language}
        </button>
      ))}
    </div>
  )
}