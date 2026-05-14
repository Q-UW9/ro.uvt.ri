import { HeroSection } from '../components/organisms/HeroSection/HeroSection'
import { TabsSection } from '../components/organisms/TabsSection/TabsSection'

import { ContentGrid } from '../components/templates/ContentGrid/ContentGrid'
import { PageLayout } from '../components/templates/PageLayout/PageLayout'

import { Card } from '../components/molecules/Card/Card'

import { Divider } from '../components/atoms/Divider/Divider'
import { Icon } from '../components/atoms/Icon/Icon'

import { cardsData } from '../data/cards'

import { s } from './UnderConstruction.styles'

function UnderConstruction() {
  const demoTabs = [
    {
      label: 'Admissions',
      content: (
        <p>
          Admissions information will appear here.
        </p>
      ),
    },

    {
      label: 'Erasmus',
      content: (
        <p>
          Erasmus exchange details will appear here.
        </p>
      ),
    },

    {
      label: 'Contact',
      content: (
        <p>
          Contact information will appear here.
        </p>
      ),
    },
  ]

  return (
    <PageLayout>
      <HeroSection
        title="Welcome to UVT RI"
        subtitle="Building a reusable frontend architecture for the university platform."
        primaryButtonText="Get Started"
        secondaryButtonText="Learn More"
      />

      <div className="mx-auto max-w-[1280px] px-6">
        <TabsSection tabs={demoTabs} />
      </div>

      <div className="mx-auto max-w-[1280px] px-6 py-16">
        <ContentGrid columns={3}>
          {cardsData.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              description={card.description}
              buttonText={card.buttonText}
            />
          ))}
        </ContentGrid>
      </div>

      <div className="mx-auto max-w-[1280px] space-y-8 px-6 py-12">

        <Divider />

        <div className="flex gap-6 text-3xl">
          <Icon name="globe" />
          <Icon name="graduate" />
          <Icon name="mail" />
        </div>

      </div>

      <div className={s.container}>
        <div className={s.card}>
          <div className={s.icon}>
            🚧
          </div>

          <h1 className={s.title}>
            Site în lucru
          </h1>

          <p className={s.text}>
            Site-ul este în construcție. Vă rugăm reveniți curând.
          </p>

          <p className={s.subtitle}>
            The site is under construction. Please check back soon.
          </p>
        </div>
      </div>
    </PageLayout>
  )
}

export default UnderConstruction