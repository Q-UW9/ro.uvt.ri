import { Mail, Phone } from 'lucide-react'
import { InnerPageTemplate } from '../components/templates/InnerPageTemplate/InnerPageTemplate'

const accordion = [
  // ── Teaching Staff ──────────────────────────────────────
  {
    title: 'General Information — Teaching Staff',
    content: (
      <p>
        Teaching staff from partner universities can deliver teaching hours at West University
        of Timișoara under the Erasmus+ programme. Before applying, check with your home
        institution's International Office to confirm a bilateral agreement is in place with UVT
        and that your mobility has been approved.
      </p>
    ),
  },
  {
    title: 'Academic Details — Teaching Staff',
    content: (
      <div className="space-y-3">
        <p>
          All academic arrangements — including scheduled classes, teaching language, timetable,
          and student level — must be agreed directly with the Erasmus+ academic coordinator of
          the relevant UVT faculty.
        </p>
        <p>
          A full list of departmental Erasmus+ coordinators by faculty is available from the DRI
          office upon request.
        </p>
      </div>
    ),
  },
  {
    title: 'Administrative Details & Accommodation — Teaching Staff',
    content: (
      <div className="space-y-4">
        <p>
          All administrative arrangements are handled by the DRI Erasmus+ Incoming Office.
          Contact: <strong>Horatiu Hot</strong> —{' '}
          <a href="mailto:horatiu.hot@ri.uvt.ro" className="text-uvt-blue hover:underline">
            horatiu.hot@ri.uvt.ro
          </a>
        </p>

        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Accommodation Options</h4>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>
              <strong>Hotel accommodation</strong>: a list of recommended hotels in Timișoara is
              available from the DRI office
            </li>
            <li>
              <strong>University guest room</strong>: located in the student dormitory area, a
              10-minute walk from the main university building. Dual rooms with private shower and
              small kitchenette. Rate: 71.4 RON (~22 EUR) per night per bed. Equipped with TV and
              fridge; bed linen included
            </li>
          </ul>
        </div>

        <p>
          At the end of your stay, DRI will provide a certificate confirming your teaching period
          and the name of the class delivered.
        </p>
      </div>
    ),
  },

  // ── Administrative Staff — Staff Training Week ──────────
  {
    title: 'Erasmus International Week — 14th Edition (May 2024)',
    content: (
      <div className="space-y-3">
        <p>
          The 14th Erasmus International Week was held in person in Timișoara from{' '}
          <strong>13–17 May 2024</strong>. The event welcomed academic and administrative staff
          from partner universities for a week of knowledge exchange and networking.
        </p>
        <p className="font-medium text-gray-800">Programme highlights:</p>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>Presentations from all 11 UVT faculties</li>
          <li>Internationalisation workshops and discussions</li>
          <li>Teaching activities and job-shadowing sessions</li>
          <li>Networking events and cultural activities in Timișoara</li>
        </ul>
        <div className="grid grid-cols-2 gap-4 rounded-lg bg-gray-50 p-4 text-sm">
          <div>
            <p className="font-medium text-gray-700">Application deadline</p>
            <p>20 March 2024</p>
          </div>
          <div>
            <p className="font-medium text-gray-700">Participation fee</p>
            <p>80 EUR / person</p>
          </div>
          <div>
            <p className="font-medium text-gray-700">Includes</p>
            <p>Materials, lunches, dinners, coffee breaks</p>
          </div>
          <div>
            <p className="font-medium text-gray-700">Max participants</p>
            <p>80 (max 2 per institution)</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Erasmus Staff Training Week — 3rd Edition (April 2016)',
    content: (
      <div className="space-y-3">
        <p>
          The 3rd Erasmus Staff Training Week took place from <strong>18–22 April 2016</strong>{' '}
          and was open to all staff members from partner universities.
        </p>
        <p className="font-medium text-gray-800">Programme highlights:</p>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>Presentations from 11 UVT faculties</li>
          <li>DRI department overview and international strategy session</li>
          <li>Job shadowing opportunities</li>
          <li>Museum visit and city tour of Timișoara</li>
          <li>Networking dinner and farewell dinner at a renowned restaurant and winery</li>
        </ul>
        <div className="grid grid-cols-2 gap-4 rounded-lg bg-gray-50 p-4 text-sm">
          <div>
            <p className="font-medium text-gray-700">Application deadline</p>
            <p>20 March 2016</p>
          </div>
          <div>
            <p className="font-medium text-gray-700">Participation fee</p>
            <p>80 EUR / person</p>
          </div>
          <div>
            <p className="font-medium text-gray-700">Includes</p>
            <p>Coffee breaks, networking dinner, farewell dinner</p>
          </div>
          <div>
            <p className="font-medium text-gray-700">Accommodation</p>
            <p>Hotel Central Timișoara — 160 RON/night (single), 180 RON/night (double)</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Erasmus Staff Training Week — 2nd Edition (April 2015)',
    content: (
      <div className="space-y-3">
        <p>
          The 2nd edition ran from <strong>20–24 April 2015</strong>. Accommodation was provided
          in the UVT student dormitory on campus (5-minute walk from the venue). Dual rooms with
          bed linen and internet access.
        </p>
        <div className="grid grid-cols-2 gap-4 rounded-lg bg-gray-50 p-4 text-sm">
          <div>
            <p className="font-medium text-gray-700">Application deadline</p>
            <p>20 March 2015</p>
          </div>
          <div>
            <p className="font-medium text-gray-700">Participation fee</p>
            <p>150 EUR / person (accommodation included)</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Erasmus Staff Training Week — 1st Edition (April 2014)',
    content: (
      <p>
        The inaugural Staff Training Week took place from <strong>7–11 April 2014</strong>. It
        was designed for partner university staff interested in learning more about UVT and
        Erasmus+ collaboration opportunities. Application deadline: <strong>1 March 2014</strong>.
      </p>
    ),
  },
]

function ErasmusIncomingStaffPage() {
  return (
    <InnerPageTemplate
      title="Erasmus+ Incoming Staff"
      subtitle="Teaching mobility and staff training weeks at West University of Timișoara"
      accordion={accordion}
    >
      <p>
        West University of Timișoara welcomes incoming Erasmus+ staff for teaching visits and
        administrative training mobility. Whether you are a lecturer looking to deliver a guest
        module or an administrator attending our annual Staff Training Week, the DRI team will
        support your stay from application to departure.
      </p>
      <p>
        UVT has 11 faculties spanning sciences, humanities, economics, law, arts, and sports,
        offering a wide range of collaboration opportunities for incoming academic and
        administrative staff.
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

export default ErasmusIncomingStaffPage
