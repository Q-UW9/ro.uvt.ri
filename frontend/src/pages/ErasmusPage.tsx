import { InnerPageTemplate } from '../components/templates/InnerPageTemplate/InnerPageTemplate'

const accordion = [
  {
    title: 'Who can apply for Erasmus+?',
    content:
      'All enrolled UVT students who have completed at least one academic year are eligible to apply for an Erasmus+ study or traineeship mobility.',
  },
  {
    title: 'How long can I study abroad with Erasmus+?',
    content:
      'Study periods range from 2 to 12 months per study cycle (Bachelor, Master, PhD). Traineeships can last from 2 to 12 months as well.',
  },
  {
    title: 'Will my grades be recognised when I return?',
    content:
      'Yes. The Learning Agreement signed before departure ensures full academic recognition of credits earned abroad through ECTS transfer.',
  },
  {
    title: 'What financial support is available?',
    content:
      'Erasmus+ grants vary by destination country. Monthly grants cover a portion of living costs abroad; amounts are published each application cycle on the DRI website.',
  },
]

const documents = [
  { label: 'Erasmus+ Student Charter', url: '#', fileType: 'PDF' },
  { label: 'Learning Agreement Template', url: '#', fileType: 'PDF' },
  { label: 'Grant Agreement Template', url: '#', fileType: 'PDF' },
]

function ErasmusPage() {
  return (
    <InnerPageTemplate
      title="Erasmus+"
      subtitle="Study and train across Europe"
      accordion={accordion}
      documents={documents}
    >
      <p>
        The Erasmus+ programme offers UVT students and staff the opportunity to
        study, train, teach, or gain professional experience at partner
        institutions across Europe and beyond.
      </p>
      <p>
        UVT holds an Erasmus Charter for Higher Education (ECHE) and maintains
        active bilateral agreements with more than 200 universities in 30
        countries. Application windows open twice per year — in autumn for the
        following academic year and in spring for the summer semester.
      </p>
      <p>
        Explore the sub-sections to learn about opportunities for incoming and
        outgoing students and staff, partner countries, and cooperation projects.
      </p>
    </InnerPageTemplate>
  )
}

export default ErasmusPage
