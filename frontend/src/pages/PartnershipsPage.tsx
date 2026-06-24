import { InnerPageTemplate } from '../components/templates/InnerPageTemplate/InnerPageTemplate'

const accordion = [
  {
    title: 'How can our institution sign a bilateral agreement with UVT?',
    content:
      'Please contact the DRI office at dri@e-uvt.ro with a brief description of your institution and the type of collaboration you are interested in. Our team will guide you through the agreement process.',
  },
  {
    title: 'What types of agreements does UVT sign?',
    content:
      'UVT signs inter-institutional Erasmus+ agreements, bilateral student/staff exchange agreements, joint degree agreements, and research memoranda of understanding.',
  },
  {
    title: 'How long does it take to establish a new partnership?',
    content:
      'The process typically takes 2–4 months from initial contact to a signed agreement, depending on administrative procedures on both sides.',
  },
]

function PartnershipsPage() {
  return (
    <InnerPageTemplate
      title="Partnerships"
      subtitle="Global academic collaborations"
      accordion={accordion}
    >
      <p>
        West University of Timișoara maintains a broad network of international
        academic partnerships spanning more than 60 countries across Europe,
        Asia, the Americas, and Africa.
      </p>
      <p>
        Our agreements enable student and staff exchanges, joint research
        projects, dual-degree programmes, and collaborative curriculum
        development. We are always open to establishing new partnerships with
        high-quality institutions that share our commitment to academic
        excellence and internationalization.
      </p>
      <p>
        If your institution is interested in collaborating with UVT, please
        reach out to the DRI office — we welcome new partnerships at any time.
      </p>
    </InnerPageTemplate>
  )
}

export default PartnershipsPage
