import { InnerPageTemplate } from '../components/templates/InnerPageTemplate/InnerPageTemplate'

const accordion = [
  {
    title: 'What is the Department of Research and Internationalization?',
    content:
      'The Department of Research and Internationalization (DRI) coordinates all international academic partnerships, mobility programmes, and research collaborations at West University of Timișoara.',
  },
  {
    title: 'How can I contact the DRI team?',
    content:
      'You can reach us by email at dri@e-uvt.ro or visit us in person at the UVT main campus, Building A, Room 101, Monday–Friday 09:00–16:00.',
  },
  {
    title: 'Which programmes does DRI manage?',
    content:
      'DRI manages Erasmus+, bilateral agreements, scholarships, and international student admissions on behalf of the university.',
  },
]

function AboutPage() {
  return (
    <InnerPageTemplate
      title="About DRI"
      subtitle="Department of Research and Internationalization"
      accordion={accordion}
    >
      <p>
        The Department of Research and Internationalization at West University of
        Timișoara is the central office responsible for fostering global academic
        partnerships, coordinating student and staff mobility, and promoting
        international research collaboration.
      </p>
      <p>
        Founded in 2005, DRI has grown to support over 300 bilateral agreements
        with universities across Europe and beyond, facilitating the exchange of
        thousands of students and academic staff each year.
      </p>
      <p>
        Our mission is to strengthen UVT's presence in the global academic
        community while providing outstanding support to incoming and outgoing
        students, researchers, and faculty.
      </p>
    </InnerPageTemplate>
  )
}

export default AboutPage
