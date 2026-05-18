import type { ReactNode } from 'react'

import { PageLayout } from '../PageLayout/PageLayout'
import { PageTransition } from '../PageTransition/PageTransition'

import { SectionHeader } from '../../molecules/SectionHeader/SectionHeader'
import { AccordionSection } from '../../organisms/AccordionSection/AccordionSection'
import { DocumentDownloadList } from '../../organisms/DocumentDownloadList/DocumentDownloadList'

import { Container } from '../../../layouts/Container'

// ── Types ────────────────────────────────────────────────

interface AccordionItem {
  question: string
  answer: string
}

interface DocumentItem {
  label: string
  url: string
  fileType?: string
}

interface InnerPageTemplateProps {
  title: string
  subtitle?: string
  children: ReactNode
  accordion?: AccordionItem[]
  documents?: DocumentItem[]
}

// ── Component ─────────────────────────────────────────────

export function InnerPageTemplate({
  title,
  subtitle,
  children,
  accordion,
  documents,
}: InnerPageTemplateProps) {
  return (
    <PageTransition>
      <PageLayout>
        <Container className="py-16">

          {/* Page title */}
          <SectionHeader
            title={title}
            subtitle={subtitle}
            className="mb-10"
          />

          {/* Main content — WP page body or CPT entry */}
          <main className="prose prose-gray max-w-none">
            {children}
          </main>

          {/* Optional accordion — FAQ or expandable content */}
          {accordion && accordion.length > 0 && (
            <div className="mt-16">
              <AccordionSection items={accordion} />
            </div>
          )}

          {/* Optional document downloads — calls and resource detail pages */}
          {documents && documents.length > 0 && (
            <div className="mt-16">
              <h2 className="mb-6 text-2xl font-semibold text-gray-900">
                Documents
              </h2>
              <DocumentDownloadList documents={documents} />
            </div>
          )}

        </Container>
      </PageLayout>
    </PageTransition>
  )
}
