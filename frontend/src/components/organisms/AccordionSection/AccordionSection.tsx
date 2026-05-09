import { useState } from 'react'
import clsx from 'clsx'

interface AccordionItem {
  title: string
  content: React.ReactNode
}

interface AccordionSectionProps {
  items: AccordionItem[]
  className?: string
}

export function AccordionSection({
  items,
  className,
}: AccordionSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className={clsx('space-y-4', className)}>
      {items.map((item, index) => {
        const isOpen = openIndex === index

        return (
          <div
            key={index}
            className="overflow-hidden rounded-xl border border-gray-200 bg-white"
          >
            <button
              type="button"
              onClick={() => toggleAccordion(index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between p-5 text-left transition-colors hover:bg-gray-50"
            >
              <span className="text-lg font-medium">
                {item.title}
              </span>

              <span
                className={clsx(
                  'text-2xl transition-transform duration-200',
                  isOpen && 'rotate-45'
                )}
              >
                +
              </span>
            </button>

            {isOpen && (
              <div className="border-t border-gray-200 p-5 text-gray-700">
                {item.content}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}