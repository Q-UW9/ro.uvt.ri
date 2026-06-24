import { Mail, Phone, Clock } from 'lucide-react'
import { InnerPageTemplate } from '../components/templates/InnerPageTemplate/InnerPageTemplate'

const accordion = [
  {
    title: 'Study Mobility — 1 Semester or 1 Academic Year',
    content: (
      <div className="space-y-3">
        <p>
          UVT students can study at a partner university for one semester or a full academic
          year under the Erasmus+ programme. Your credits are recognised upon return via the
          Learning Agreement and ECTS transfer.
        </p>
        <p className="font-medium text-gray-800">Key steps:</p>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>Check available places and partner universities via your faculty coordinator</li>
          <li>Apply through the DRI selection process (each faculty holds its own selection)</li>
          <li>Once selected: complete your Learning Agreement and ECTS forms</li>
          <li>Review the Erasmus+ Student Charter for your rights and responsibilities</li>
          <li>Upon return: submit required documents for grant completion and credit recognition</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Traineeship Mobility — Minimum 2 Months',
    content: (
      <div className="space-y-3">
        <p>
          Erasmus+ traineeship mobility allows UVT students to complete a work placement at a
          company or organisation abroad for a minimum of 2 months. Traineeships can be done
          during studies or within one year of graduation.
        </p>
        <p>
          Contact the DRI Erasmus+ Office for information on the application process, available
          host organisations, and financial support for traineeship placements.
        </p>
      </div>
    ),
  },
  {
    title: 'Short-Term Mobility — Blended Intensive Programmes (BIPs, ~5 Days)',
    content: (
      <div className="space-y-4">
        <p>
          Blended Intensive Programmes (BIPs) combine a short physical mobility abroad (typically
          around 5 days) with a mandatory online component. They are organised by partner
          universities and open to UVT students at all levels.
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>Check the current BIP Offers List for available programmes</li>
          <li>Apply through the standard Erasmus+ short-term selection process</li>
          <li>Once selected: prepare required financial contract documents</li>
          <li>Upon return: complete the final mobility report</li>
        </ul>
        <div className="flex flex-col gap-1 rounded-lg bg-blue-50 p-4 text-sm">
          <p className="font-medium text-gray-800">Contact — BIPs & Short-Term Mobilities</p>
          <p className="font-medium text-gray-700">Alice Andreea OPREA</p>
          <p className="flex items-center gap-2 text-gray-600">
            <Mail className="size-3.5 shrink-0 text-uvt-blue" />
            <a href="mailto:alice.oprea@e-uvt.ro" className="text-uvt-blue hover:underline">
              alice.oprea@e-uvt.ro
            </a>
          </p>
          <p className="flex items-center gap-2 text-gray-600">
            <Phone className="size-3.5 shrink-0 text-uvt-blue" />
            0256 592 324
          </p>
          <p className="flex items-center gap-2 text-gray-500">
            <Clock className="size-3.5 shrink-0" />
            Monday – Thursday, 10:00 – 14:00
          </p>
        </div>
      </div>
    ),
  },
  {
    title: 'Short-Term Doctoral Mobilities — 5 to 30 Days',
    content: (
      <div className="space-y-3">
        <p>
          PhD students at UVT can apply for short-term Erasmus+ doctoral mobilities lasting
          between 5 and 30 days. These mobilities support research visits, joint supervision,
          and collaboration with partner institutions.
        </p>
        <div className="flex flex-col gap-1 rounded-lg bg-blue-50 p-4 text-sm">
          <p className="font-medium text-gray-800">Contact — Doctoral Mobilities</p>
          <p className="font-medium text-gray-700">Alice Andreea OPREA</p>
          <p className="flex items-center gap-2 text-gray-600">
            <Mail className="size-3.5 shrink-0 text-uvt-blue" />
            <a href="mailto:alice.oprea@e-uvt.ro" className="text-uvt-blue hover:underline">
              alice.oprea@e-uvt.ro
            </a>
          </p>
          <p className="flex items-center gap-2 text-gray-600">
            <Phone className="size-3.5 shrink-0 text-uvt-blue" />
            0256 592 324
          </p>
          <p className="flex items-center gap-2 text-gray-500">
            <Clock className="size-3.5 shrink-0" />
            Monday – Thursday, 10:00 – 14:00
          </p>
        </div>
      </div>
    ),
  },
  {
    title: 'Students with Special Needs',
    content: (
      <p>
        Erasmus+ especially encourages students with special needs or disabilities to participate
        in mobility. Additional financial support is available beyond the standard grant. UVT
        students with special needs have been taking part in Erasmus+ mobilities since the
        2013/2014 academic year. Contact the DRI Erasmus+ Office for details on the available
        top-up support and how to apply.
      </p>
    ),
  },
  {
    title: 'Erasmus+ Departmental Coordinators',
    content: (
      <div className="space-y-3">
        <p>Each UVT faculty has a departmental Erasmus+ coordinator who is responsible for:</p>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>Organising the student selection process for Erasmus+ mobility</li>
          <li>Advising students on course selection at the host university</li>
          <li>Consulting on course recognition upon return</li>
          <li>Approving teaching staff Erasmus+ programmes</li>
        </ul>
        <p>
          A full list of departmental coordinators by faculty is available from the DRI office.
        </p>
      </div>
    ),
  },
  {
    title: 'Eligibility Criteria',
    content: (
      <div className="space-y-4">
        <p>To be eligible for Erasmus+ mobility, you must meet all of the following criteria:</p>

        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Enrollment Status</h4>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>You must be enrolled as a student at UVT at the time of application</li>
            <li>
              <strong>BA students</strong>: eligible from the 2nd semester of Year 1 onwards;
              first study mobility can take place in Year 2
            </li>
            <li><strong>MA and PhD students</strong>: eligible from enrollment</li>
            <li>
              <strong>Traineeships and BIPs</strong>: can start from the 2nd semester of Year 1,
              after completing Semester 1 grades
            </li>
            <li>
              You must maintain student status at UVT until the end of your mobility (except
              graduates applying for traineeship)
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Academic Performance</h4>
          <p className="text-gray-700">
            Minimum weighted average of <strong>7.00</strong> across all completed university
            studies, with no outstanding failed subjects at the time of departure.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Language Requirement</h4>
          <p className="text-gray-700">
            You must demonstrate knowledge of the language in which courses or activities will
            be conducted at the host institution. The minimum recommended level is{' '}
            <strong>B1</strong> per the Common European Framework of Reference for Languages
            (CEFR).
          </p>
        </div>
      </div>
    ),
  },
]

function ErasmusOutgoingStudentsPage() {
  return (
    <InnerPageTemplate
      title="Erasmus+ Outgoing Students"
      subtitle="Study abroad, complete a traineeship, or join a short-term programme"
      accordion={accordion}
    >
      <p>
        The Erasmus+ programme gives UVT students the opportunity to study, train, or participate
        in intensive programmes at partner universities across Europe and beyond. Mobilities range
        from a few days to a full academic year, and all come with an Erasmus+ grant to support
        your costs abroad.
      </p>
      <p>
        Applications are managed through your faculty's departmental Erasmus+ coordinator.
        Selection results and available places are communicated each semester.
      </p>

      <div className="mt-8 rounded-xl border border-gray-200 bg-gray-50 p-6">
        <h3 className="mb-4 font-semibold text-gray-900">Contact — Erasmus+ Outgoing Office</h3>
        <div className="space-y-2 text-sm">
          <p className="font-medium text-gray-800">DRI Erasmus+ Outgoing Team</p>
          <p className="flex items-center gap-2 text-gray-600">
            <Mail className="size-4 shrink-0 text-uvt-blue" />
            <a href="mailto:erasmus.out@e-uvt.ro" className="text-uvt-blue hover:underline">
              erasmus.out@e-uvt.ro
            </a>
          </p>
          <p className="flex items-center gap-2 text-gray-600">
            <Phone className="size-4 shrink-0 text-uvt-blue" />
            +40 256 592 112
          </p>
        </div>
      </div>
    </InnerPageTemplate>
  )
}

export default ErasmusOutgoingStudentsPage
