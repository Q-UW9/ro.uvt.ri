import { useState } from 'react'
import clsx from 'clsx'

interface TabItem {
  label: string
  content: React.ReactNode
}

interface TabsSectionProps {
  tabs: TabItem[]
}

export function TabsSection({
  tabs,
}: TabsSectionProps) {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section className="py-16">
      {/* Tab Buttons */}
      <div className="flex flex-wrap gap-4 border-b border-gray-200 pb-4">
        {tabs.map((tab, index) => (
          <button
            key={tab.label}
            type="button"
            onClick={() => setActiveTab(index)}
            aria-selected={activeTab === index}
            className={clsx(
              'rounded-lg px-5 py-2 text-sm font-medium transition-all',
              activeTab === index
                ? 'bg-uvt-blue text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Active Content */}
      <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        {tabs[activeTab]?.content}
      </div>
    </section>
  )
}