import { Navbar } from '../components/organisms/Navbar/Navbar'
import { HeroSection } from '../components/organisms/HeroSection/HeroSection'
import { TabsSection } from '../components/organisms/TabsSection/TabsSection'
import { Footer } from '../components/organisms/Footer/Footer'
import { Card } from '../components/molecules/Card/Card'

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

  const demoCards = [
    {
      title: 'Erasmus Opportunities',
      description:
        'Explore international mobility and exchange programs.',
    },

    {
      title: 'Admissions 2026',
      description:
        'Learn about the latest admissions requirements and deadlines.',
    },

    {
      title: 'International Students',
      description:
        'Resources and support for international applicants.',
    },
  ]

  return (
    <>
      <Navbar />

      <HeroSection
        title="Welcome to UVT RI"
        subtitle="Building a reusable frontend architecture for the university platform."
        primaryButtonText="Get Started"
        secondaryButtonText="Learn More"
      />

      <TabsSection tabs={demoTabs} />

      <div className={s.container}>
        <div className={s.card}>
          <div className={s.icon}>🚧</div>

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

      <Footer />
    </>
  )
}

export default UnderConstruction