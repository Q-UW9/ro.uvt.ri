import type { ReactNode, JSX } from 'react'

import { PageLayout } from '../PageLayout/PageLayout'
import { PageTransition } from '../PageTransition/PageTransition'

import { AccordionSection } from '../../organisms/AccordionSection/AccordionSection'
import { DocumentDownloadList } from '../../organisms/DocumentDownloadList/DocumentDownloadList'

import { Container } from '../../../layouts/Container'

// ── Types ─────────────────────────────────────────────────

interface AccordionItem {
  title: string
  content: ReactNode | JSX.Element | string
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

        {/* Hero banner — dark gradient matching HeroSection style */}
        <section className="relative h-[380px] flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-uvt-navy/95 to-uvt-blue/80" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(242,183,5,0.07),transparent_60%)]" />
          <div className="relative z-10 mx-auto max-w-[1280px] w-full px-6 text-white">
            <span className="mb-4 inline-block rounded-full bg-uvt-gold/20 px-3 py-1 text-xs font-medium text-uvt-gold border border-uvt-gold/30">
              West University of Timișoara
            </span>
            <h1 className="mt-3 text-4xl font-bold md:text-5xl leading-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-4 max-w-2xl text-lg text-blue-100">
                {subtitle}
              </p>
            )}
          </div>
        </section>

        {/* Page content */}
        <Container className="py-16">

          <main className="prose prose-gray max-w-none">
            {children}
          </main>

          {/* Optional accordion — FAQ or expandable content */}
          {accordion && accordion.length > 0 && (
            <div className="mt-16">
              <h2 className="mb-6 text-2xl font-semibold text-gray-900">
                Frequently Asked Questions
              </h2>
              <AccordionSection items={accordion} />
            </div>
          )}

          {/* Optional document downloads */}
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
