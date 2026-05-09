import { Navbar } from '../components/organisms/Navbar/Navbar'

import { s } from './UnderConstruction.styles'

import { HeroSection } from '../components/organisms/HeroSection/HeroSection'

function UnderConstruction() {
  return (
    <>
      <Navbar />

      <HeroSection
      title="Welcome to UVT RI"
      subtitle="Building a reusable frontend architecture for the university platform."
      primaryButtonText="Get Started"
      secondaryButtonText="Learn More"
      />

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
    </>
  )
}

export default UnderConstruction