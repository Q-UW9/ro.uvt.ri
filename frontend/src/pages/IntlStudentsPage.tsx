import { InnerPageTemplate } from '../components/templates/InnerPageTemplate/InnerPageTemplate'

const accordion = [
  {
    title: 'What documents do I need to enrol as an international student?',
    content:
      'You will need a valid passport, your original diploma and academic transcript (with certified Romanian or English translation), proof of language proficiency, and a completed enrolment application form.',
  },
  {
    title: 'Is health insurance mandatory?',
    content:
      'Yes. All international students must hold valid health insurance for the duration of their studies. EU/EEA students can use their European Health Insurance Card (EHIC).',
  },
  {
    title: 'Does UVT offer accommodation?',
    content:
      'UVT has student dormitories on campus. International students may apply for a room through the Student Services office. Places are limited and allocated on a first-come, first-served basis.',
  },
  {
    title: 'Are there Romanian language courses available?',
    content:
      'Yes. UVT offers a preparatory year programme in Romanian as well as short intensive language courses throughout the academic year.',
  },
]

const documents = [
  { label: 'International Student Handbook', url: '#', fileType: 'PDF' },
  { label: 'Enrolment Application Form', url: '#', fileType: 'PDF' },
]

function IntlStudentsPage() {
  return (
    <InnerPageTemplate
      title="International Students"
      subtitle="Your guide to studying at UVT"
      accordion={accordion}
      documents={documents}
    >
      <p>
        West University of Timișoara welcomes students from all over the world.
        Whether you are joining us through an exchange programme, as a
        degree-seeking student, or as a free mover, our team is here to make
        your transition as smooth as possible.
      </p>
      <p>
        Timișoara — the 2023 European Capital of Culture — is one of Romania's
        most vibrant and multicultural cities, making it an ideal place to live
        and study.
      </p>
      <p>
        Browse the sub-sections below for information tailored to your specific
        situation: EU/EEA students, non-EU students, Ukrainian students,
        refugees, preparatory year applicants, and free movers.
      </p>
    </InnerPageTemplate>
  )
}

export default IntlStudentsPage
