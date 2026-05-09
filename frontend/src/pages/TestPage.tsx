import { PageLayout } from '../components/templates/PageLayout/PageLayout'
import { Typography } from '../components/atoms/Typography/Typography'
import { Button } from '../components/atoms/Button/Button'
import { SectionHeader } from '../components/molechules/SectionHeader/SectionHeader'
import { AccordionSection } from '../components/organisms/AccordionSection/AccordionSection'

const accordionItems = [
  {
    title: 'What is Erasmus?',
    content:
      'Erasmus is an international exchange program.',
  },

  {
    title: 'How do I apply?',
    content:
      'Applications are submitted through the university portal.',
  },
]

export function TestPage() {
  return (
    <PageLayout>
      <SectionHeader
        title="Frontend Architecture Test"
        subtitle="Testing reusable component system consistency."
      />

      <div className="mt-12 space-y-10">
        <div className="space-y-4">
          <Typography variant="h1">
            Typography System
          </Typography>

          <Typography variant="body">
            This confirms typography consistency.
          </Typography>
        </div>

        <div className="flex gap-4">
          <Button variant="primary">
            Primary Button
          </Button>

          <Button variant="secondary">
            Secondary Button
          </Button>

          <Button variant="ghost">
            Ghost Button
          </Button>
        </div>

        <AccordionSection items={accordionItems} />
      </div>
    </PageLayout>
  )
}