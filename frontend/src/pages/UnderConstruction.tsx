import { NewsSection } from '../components/organisms/NewsSection/NewsSection'

import { ContentGrid } from '../components/templates/ContentGrid/ContentGrid'
import { PageLayout } from '../components/templates/PageLayout/PageLayout'
import { PageTransition } from '../components/templates/PageTransition/PageTransition'
import { SectionRenderer } from '../components/templates/SectionRenderer/SectionRenderer'

import { Card } from '../components/molecules/Card/Card'

import { homeSections } from '../data/homeSections'
import { homePageData } from '../data/homePageData'
import { announcements } from '../data/announcements'

import { s } from './UnderConstruction.styles'

function UnderConstruction() {
  return (
    <PageTransition>
      <PageLayout>

        <SectionRenderer
          sections={homePageData}
        />

        {/* Audience cards */}
        <section className="mx-auto max-w-[1280px] px-6 py-20">

          <h2 className="mb-4 text-4xl font-bold">
            Explore UVT Opportunities
          </h2>

          <p className="mb-10 max-w-[700px] text-gray-600">
            Navigate quickly based on your goals and find the right pathway.
          </p>

          <ContentGrid columns={3}>

            {homeSections.map((card) => (

              <Card
                key={card.id}
                title={card.title}
                description={card.description}
                buttonText={card.buttonText}
                route={card.route}
              />

            ))}

          </ContentGrid>

        </section>

        <NewsSection
          items={announcements}
        />

        <div className={s.container}>
          <div className={s.card}>

            <div className={s.icon}>
              🚧
            </div>

            <h1 className={s.title}>
              Site în lucru
            </h1>

            <p className={s.text}>
              Site-ul este în construcție.
              Vă rugăm reveniți curând.
            </p>

            <p className={s.subtitle}>
              The site is under construction.
              Please check back soon.
            </p>

          </div>
        </div>

      </PageLayout>
    </PageTransition>
  )
}

export default UnderConstruction