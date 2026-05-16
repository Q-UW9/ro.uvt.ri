import { HeroSection } from '../../organisms/HeroSection/HeroSection'

interface Section {
  type: string
  data?: any
}

interface Props {
  sections: Section[]
}

export function SectionRenderer({
  sections,
}: Props) {
  return (
    <>
      {sections.map((section, index) => {
        switch (section.type) {
          case 'hero':
            return (
              <HeroSection
                key={index}
                {...section.data}
              />
            )

          default:
            return null
        }
      })}
    </>
  )
}