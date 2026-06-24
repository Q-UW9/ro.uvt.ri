import { Mail, Phone } from 'lucide-react'
import { InnerPageTemplate } from '../components/templates/InnerPageTemplate/InnerPageTemplate'

const accordion = [
  {
    title: 'General Information',
    content: (
      <p>
        The Erasmus+ programme enables students from partner universities to study or complete a
        traineeship at West University of Timișoara. Financial support is provided through your
        home university. Study periods last 1 or 2 semesters; traineeships are flexible in
        duration. All credits earned at UVT are recognised through the ECTS (European Credit
        Transfer System).
      </p>
    ),
  },
  {
    title: 'Long-Term Study Mobilities',
    content: (
      <div className="space-y-3">
        <p>
          Once selected by your home university, you will need to complete several steps to
          prepare your stay at UVT:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>Review the Academic Calendar for your semester</li>
          <li>Arrange accommodation (dormitories or private)</li>
          <li>Browse the ECTS Info Packs and course catalogues per faculty</li>
          <li>Complete the Learning Agreement with your departmental Erasmus+ coordinator</li>
          <li>Familiarise yourself with the Erasmus+ Student Charter and your rights</li>
        </ul>
        <p>
          Your faculty's departmental Erasmus+ coordinator will guide you on course selection
          and academic recognition. A full list of departmental coordinators is available from
          the DRI office.
        </p>
      </div>
    ),
  },
  {
    title: 'Traineeship Mobility — Internship at DRI',
    content: (
      <div className="space-y-4">
        <p>
          Incoming Erasmus+ students can complete a traineeship at the Department of International
          Relations (DRI), supporting staff in everyday international office work.
        </p>

        <div>
          <h4 className="font-semibold text-gray-900 mb-1">Requirements</h4>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>B1/B2 level English proficiency</li>
            <li>Good organisational skills</li>
            <li>Microsoft Office proficiency</li>
            <li>Reliability and enthusiasm</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 mb-1">What We Offer</h4>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>Information on living and working in Timișoara</li>
            <li>Accommodation in student dormitories (~120 EUR/month)</li>
            <li>Student discounts across the city</li>
            <li>Language course information</li>
            <li>Visa assistance where needed</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 mb-1">How to Apply</h4>
          <p className="text-gray-700">
            Send the following to the DRI Incoming Office: an introduction letter, a Europass CV
            in English, and a copy of your degree certificate or study records.
          </p>
        </div>

        <p className="text-sm text-gray-500 italic">
          DRI is committed to equal opportunity — no discrimination based on race, gender,
          nationality, religion, or sexual orientation.
        </p>
      </div>
    ),
  },
]

function ErasmusIncomingStudentsPage() {
  return (
    <InnerPageTemplate
      title="Erasmus+ Incoming Students"
      subtitle="Study and traineeship opportunities at West University of Timișoara"
      accordion={accordion}
    >
      <p>
        West University of Timișoara welcomes Erasmus+ students for study and traineeship
        mobilities. With active bilateral agreements covering hundreds of partner institutions
        across Europe, UVT offers a rich academic and cultural experience in one of Romania's
        most dynamic cities.
      </p>
      <p>
        Whether you are coming for a semester, a full academic year, or a short internship, the
        DRI team is here to support you from the moment you are selected until you return home.
      </p>

      <div className="mt-8 rounded-xl border border-gray-200 bg-gray-50 p-6">
        <h3 className="mb-4 font-semibold text-gray-900">Contact — Erasmus+ Incoming Office</h3>
        <div className="space-y-2 text-sm">
          <p className="font-medium text-gray-800">Ana-Maria MECEA — Erasmus+ Incoming Officer</p>
          <p className="flex items-center gap-2 text-gray-600">
            <Mail className="size-4 shrink-0 text-uvt-blue" />
            <a href="mailto:erasmus.incoming@e-uvt.ro" className="text-uvt-blue hover:underline">
              erasmus.incoming@e-uvt.ro
            </a>
          </p>
          <p className="flex items-center gap-2 text-gray-600">
            <Phone className="size-4 shrink-0 text-uvt-blue" />
            +40 256 592 271
          </p>
        </div>
      </div>
    </InnerPageTemplate>
  )
}

export default ErasmusIncomingStudentsPage
