import { InnerPageTemplate } from '../components/templates/InnerPageTemplate/InnerPageTemplate'

const accordion = [
  {
    title: 'Objective 1 — Contributing to International Dialogue on University Internationalisation',
    content: (
      <ul className="list-disc pl-5 space-y-2 text-gray-700">
        <li>
          Coordinating, implementing, and promoting internationalisation activities at UVT in
          collaboration with the vice-rector responsible and the UVT faculties.
        </li>
        <li>
          Implementing the European university vision in collaboration with the UNITA European
          Universities Alliance and relevant internal and external structures at local, regional,
          national, and European level.
        </li>
        <li>
          Managing UVT's portfolio of affiliations with international university networks and
          bilateral Memoranda of Understanding, and supporting activities arising from these.
        </li>
      </ul>
    ),
  },
  {
    title: 'Objective 2 — Implementing Erasmus+ and Other Mobility Programmes',
    content: (
      <ul className="list-disc pl-5 space-y-2 text-gray-700">
        <li>
          Managing UVT's portfolio of Erasmus+ bilateral agreements and Erasmus+ projects
          implemented in collaboration with the UVT faculties.
        </li>
        <li>
          Writing, implementing, and reporting on international mobility projects with Erasmus+
          partners. Ensuring access for all UVT target groups (students, teaching staff, and
          administrative staff) to all types of outgoing mobilities available under the Erasmus+
          Guide, and providing support to incoming mobility beneficiaries.
        </li>
        <li>
          Promoting Erasmus+ programme opportunities and providing support towards achieving
          European Commission targets on student and staff mobility.
        </li>
      </ul>
    ),
  },
  {
    title: 'Objective 3 — Attracting International Students and Lecturers',
    content: (
      <ul className="list-disc pl-5 space-y-2 text-gray-700">
        <li>
          Supporting UVT faculties in developing and promoting study programmes taught in a foreign
          language, double or multiple-degree programmes, joint/European degree programmes, and
          other internationally oriented programmes such as summer schools.
        </li>
        <li>
          Coordinating the recruitment and admission of degree-seeking international students from
          EU and non-EU countries.
        </li>
        <li>
          Internationalising UVT's human resources by attracting international lecturers and
          researchers through governmental programmes and agreements, or through the Visiting@UVT
          programme. Strengthening institutional capacity by connecting UVT with its international
          alumni and diaspora.
        </li>
      </ul>
    ),
  },
  {
    title: 'Objective 4 — Integrating UVT into the UNITA European Universities Alliance',
    content: (
      <ul className="list-disc pl-5 space-y-2 text-gray-700">
        <li>
          Coordinating UNITA projects and activities developed and implemented under the European
          Universities Initiative. Promoting opportunities offered by the alliance to UVT target
          groups: students, teaching staff, researchers, and administrative staff.
        </li>
        <li>
          Coordinating the RO European Universities network and involving UVT in initiatives and
          actions at local, regional, national, and European level regarding European university
          alliances.
        </li>
        <li>
          Providing advisory, consultancy, and support services for developing initiatives, actions,
          projects, programmes, and services connected to UNITA's main lines of action. Facilitating
          UVT's integration into UNITA and aligning UVT policies with those of the alliance.
        </li>
      </ul>
    ),
  },
  {
    title: 'Objective 5 — Strengthening Institutional Capacity through International Promotion',
    content: (
      <ul className="list-disc pl-5 space-y-2 text-gray-700">
        <li>
          Developing and implementing "internationalisation at home" activities together with
          faculties, the Doctoral Studies Council, teaching staff, researchers, administrative
          staff, and students, to provide international experiences to the widest possible share
          of the UVT community.
        </li>
        <li>
          Supporting participation in international events representing UVT abroad, and organising
          international events at UVT to promote the university, the city of Timișoara, and
          Romanian higher education.
        </li>
        <li>
          Strengthening institutional capacity by promoting UVT internationally and attracting
          external resources for internationalisation.
        </li>
      </ul>
    ),
  },
]

function MissionPage() {
  return (
    <InnerPageTemplate
      title="Our Mission"
      subtitle="The strategic direction of the Department of International Relations"
      accordion={accordion}
    >
      <div className="rounded-xl border-l-4 border-uvt-blue bg-blue-50 p-6">
        <p className="text-lg leading-relaxed text-gray-800">
          The mission of the Department of International Relations (DRI) at West University of
          Timișoara is to integrate the international dimension across all of UVT's priority
          areas, in line with the institution's strategic development lines and its
          internationalisation strategy.
        </p>
      </div>

      <h2 className="mt-10 mb-4 text-2xl font-semibold text-gray-900">General Objectives</h2>
      <p className="text-gray-600 mb-6">
        DRI's five general objectives support UVT's institutional development policy on
        international cooperation at local, regional, national, European, and global level:
      </p>

      <ol className="list-decimal pl-5 space-y-3 text-gray-700">
        <li>
          Contributing to national, European, and global dialogue on the transformative potential
          of university internationalisation, by continuously developing UVT's internationalisation
          strategy and aligning it with institutional priorities and sector trends.
        </li>
        <li>
          Implementing Erasmus+ programme activities and other mobility programmes at UVT, and
          increasing the number of mobilities in line with European Commission objectives and
          those of UVT.
        </li>
        <li>
          Increasing UVT's institutional capacity to attract international students and lecturers,
          and to connect with its diaspora, by supporting UVT's efforts to internationalise its
          curriculum and research.
        </li>
        <li>
          Integrating UVT into the UNITA European Universities Alliance and embedding the UNITA
          dimension across all of UVT's strategic development lines. Coordinating all
          UNITA-related activities at UVT.
        </li>
        <li>
          Increasing UVT's institutional capacity by supporting the internationalisation activities
          of the UVT community — faculties, teaching staff, researchers, administrative staff, and
          students — both at home and abroad.
        </li>
      </ol>

      <h2 className="mt-12 mb-2 text-2xl font-semibold text-gray-900">Specific Objectives</h2>
      <p className="text-gray-600 mb-2">
        Each general objective is supported by specific operational goals. Expand the sections below
        to view them.
      </p>
    </InnerPageTemplate>
  )
}

export default MissionPage
