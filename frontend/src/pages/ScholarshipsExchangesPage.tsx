import { InnerPageTemplate } from '../components/templates/InnerPageTemplate/InnerPageTemplate'

const accordion = [
  {
    title: 'How do I apply for a bilateral scholarship?',
    content:
      'Bilateral scholarships are awarded through government-to-government agreements. Applications are submitted via the Romanian Ministry of Education and are announced on the DRI website each spring.',
  },
  {
    title: 'Can I hold an Erasmus+ grant and a national scholarship at the same time?',
    content:
      'In most cases, yes. Erasmus+ grants can be combined with national or UVT scholarships unless the funding rules of a specific scheme state otherwise.',
  },
  {
    title: 'Are there scholarships specifically for PhD students?',
    content:
      'Yes. UVT participates in several programmes targeting doctoral researchers, including Marie Skłodowska-Curie Actions and bilateral research grants.',
  },
]

const documents = [
  { label: 'Scholarship Overview 2024–2025', url: '#', fileType: 'PDF' },
  { label: 'Application Guide', url: '#', fileType: 'PDF' },
]

function ScholarshipsExchangesPage() {
  return (
    <InnerPageTemplate
      title="Scholarships & Exchanges"
      subtitle="Funding opportunities for students and researchers"
      accordion={accordion}
      documents={documents}
    >
      <p>
        UVT offers and participates in a wide range of scholarship and exchange
        programmes for both incoming and outgoing students and researchers.
      </p>
      <p>
        Opportunities include Erasmus+ mobility grants, bilateral government
        scholarships, merit-based UVT awards, and external funding schemes from
        the Romanian Ministry of Education and the European Commission.
      </p>
      <p>
        Check the DRI announcements board regularly for open calls, deadlines,
        and eligibility criteria.
      </p>
    </InnerPageTemplate>
  )
}

export default ScholarshipsExchangesPage
