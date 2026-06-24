import { Mail, Phone } from 'lucide-react'
import { PageLayout } from '../components/templates/PageLayout/PageLayout'
import { PageTransition } from '../components/templates/PageTransition/PageTransition'
import { Container } from '../layouts/Container'

interface TeamMember {
  name: string
  role: string
  email: string
  phone: string
  bio: string
}

interface Department {
  name: string
  members: TeamMember[]
}

const departments: Department[] = [
  {
    name: 'Directorate of International Relations',
    members: [
      {
        name: 'Andra-Mirona STAN-DRAGOTESC',
        role: 'Director, DRI · UNITA Institutional Coordinator',
        email: 'andra.dragotesc@e-uvt.ro',
        phone: '+40 256 592 372',
        bio: 'Coordinates the activities of the Directorate of International Relations at UVT and UVT\'s activities within the UNITA European Universities Alliance. Oversees implementation of UVT\'s internationalisation strategy, coordinates collaboration between DRI and the UVT faculties, and manages UVT\'s integration into the UNITA alliance.',
      },
    ],
  },
  {
    name: 'Global Partnerships & International Students Service',
    members: [
      {
        name: 'Roxana DIACONESCU',
        role: 'Head of Global Partnerships & International Students Service',
        email: 'roxana.diaconescu@e-uvt.ro',
        phone: '+40 256 592 352',
        bio: 'Coordinates the service\'s activities, including international admissions and transfers for foreign citizens wishing to pursue a full degree programme at UVT at undergraduate or master\'s level. Also implements international marketing activities for recruiting international students and lecturers, establishing cooperation agreements, and representing UVT at international events.',
      },
      {
        name: 'Rebeca DRAGOMIR',
        role: 'Specialist — International Students (EU & Non-EU)',
        email: 'rebeca.dragomir@e-uvt.ro',
        phone: '+40 256 592 227',
        bio: 'Provides information on enrolment and admission to undergraduate, postgraduate, and doctoral programmes. Liaises with the Ministry of Education (CNRED, General Directorate for International Relations) on diploma equivalence attestations and acceptance letters. Also manages communication with recruitment platforms and social media channels.',
      },
      {
        name: 'Andrei NISTORESCU',
        role: 'Specialist — International Students (Non-EU)',
        email: 'andrei.nistorescu@e-uvt.ro',
        phone: '+40 256 592 227',
        bio: 'Advises prospective non-EU students on enrolment conditions, required documents, and tuition fees. Handles correspondence with the Ministry of Education for acceptance letters and processes tuition fee reimbursement requests in accordance with national methodology and UVT regulations.',
      },
      {
        name: 'Ionela-Claudia POPESCU',
        role: 'Specialist — International Lecturers',
        email: 'claudia.popescu@e-uvt.ro',
        phone: '+40 256 592 653',
        bio: 'Provides administrative support for international lecturers and collaborators being recruited by UVT under ministerial orders or bilateral agreements. Liaises with the HR Directorate and faculties, and coordinates with embassies and the relevant ministry. Implements the Visiting@WUT programme for international lecturers.',
      },
      {
        name: 'Alex-Gabriel BALTAC',
        role: 'Specialist — International Networks & Partnerships',
        email: 'alex.baltac@e-uvt.ro',
        phone: '+40 256 592 683',
        bio: 'Manages UVT\'s communication with international university associations and networks. Provides administrative support for developing cooperation with strategic partners — universities, governmental and non-governmental organisations, research centres, companies, and diplomatic missions. Coordinates academic exchange programmes under international network memberships and bilateral agreements.',
      },
    ],
  },
  {
    name: 'European Cooperation Service',
    members: [
      {
        name: 'Oana IVAN-HOROBEȚ',
        role: 'Head of European Cooperation Service · Erasmus+ Institutional Coordinator',
        email: 'oana.ivan@e-uvt.ro',
        phone: '+40 256 592 372',
        bio: 'Coordinates the European Cooperation Service and serves as Erasmus+ Institutional Coordinator, ensuring programme implementation in accordance with UVT\'s Erasmus Charter for Higher Education (ECHE). Manages communication between the service, UVT faculties, the National Agency (ANPCDEFP), and European bodies responsible for Erasmus+.',
      },
      {
        name: 'Cristina COJOCARU',
        role: 'Erasmus+ Coordinator — Erasmus+ Unit Head',
        email: 'cristina.cojocaru@e-uvt.ro',
        phone: '+40 256 592 271',
        bio: 'Manages the portfolio of Erasmus+ bilateral mobility agreements from initiation to completion. Coordinates the Erasmus+ Unit\'s activities on promotion, organisation, implementation, and monitoring of Erasmus+ mobilities at UVT, and reports to the National Agency.',
      },
      {
        name: 'Ana-Maria MECEA',
        role: 'Erasmus+ Incoming Students Officer',
        email: 'ana.mecea@e-uvt.ro',
        phone: '+40 256 592 271',
        bio: 'Coordinates all Erasmus+ incoming mobilities for students and teaching staff at UVT, from nomination by partner institutions through to completion of the mobility. Also promotes UVT\'s Erasmus+ mobility offer to partner universities.',
      },
      {
        name: 'Flavia SEREȘ',
        role: 'Erasmus+ Incoming Short-Term Officer',
        email: 'flavia.seres@e-uvt.ro',
        phone: '+40 256 592 682',
        bio: 'Organises and implements Erasmus+ outgoing study mobility programmes, advising students on obtaining Erasmus+ grants. Manages promotion and implementation of international mobility projects at UVT from beneficiary selection through to return.',
      },
      {
        name: 'Elena STARCIUC',
        role: 'Erasmus+ Outgoing Studies Officer',
        email: 'elena.starciuc@e-uvt.ro',
        phone: '+40 256 592 682',
        bio: 'Organises and implements Erasmus+ outgoing study mobility programmes, providing advice and support to UVT students seeking Erasmus+ grants. Oversees promotion and implementation of international mobility projects from selection to return.',
      },
      {
        name: 'Denisa BULZA',
        role: 'Erasmus+ Outgoing Traineeship Officer',
        email: 'denisa.bulza@e-uvt.ro',
        phone: '+40 256 592 324',
        bio: 'Coordinates Erasmus+ outgoing traineeship mobility for students. Advises and monitors UVT students undertaking long-term work placements abroad, from initial application through to final reporting. Promotes traineeship mobility opportunities among UVT students.',
      },
    ],
  },
]

function MemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 flex flex-col gap-3 hover:shadow-md transition-shadow">
      <div>
        <p className="font-semibold text-gray-900">{member.name}</p>
        <p className="text-sm text-uvt-blue mt-0.5">{member.role}</p>
      </div>
      <p className="text-sm text-gray-600 leading-relaxed flex-1">{member.bio}</p>
      <div className="space-y-1 pt-2 border-t border-gray-100 text-sm">
        <a
          href={`mailto:${member.email}`}
          className="flex items-center gap-2 text-gray-600 hover:text-uvt-blue transition-colors"
        >
          <Mail className="size-3.5 shrink-0" />
          {member.email}
        </a>
        <p className="flex items-center gap-2 text-gray-600">
          <Phone className="size-3.5 shrink-0" />
          {member.phone}
        </p>
      </div>
    </div>
  )
}

function TeamPage() {
  return (
    <PageTransition>
      <PageLayout>

        {/* Hero */}
        <section className="relative h-[380px] flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-uvt-navy/95 to-uvt-blue/80" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(242,183,5,0.07),transparent_60%)]" />
          <div className="relative z-10 mx-auto max-w-[1280px] w-full px-6 text-white">
            <span className="mb-4 inline-block rounded-full bg-uvt-gold/20 px-3 py-1 text-xs font-medium text-uvt-gold border border-uvt-gold/30">
              West University of Timișoara
            </span>
            <h1 className="mt-3 text-4xl font-bold md:text-5xl leading-tight">Our Team</h1>
            <p className="mt-4 max-w-2xl text-lg text-blue-100">
              Meet the people behind the Department of International Relations
            </p>
          </div>
        </section>

        {/* Content */}
        <Container className="py-16 space-y-16">
          {departments.map((dept) => (
            <section key={dept.name}>
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900">{dept.name}</h2>
                <div className="mt-3 h-1 w-16 rounded-full bg-uvt-gold" />
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {dept.members.map((member) => (
                  <MemberCard key={member.email} member={member} />
                ))}
              </div>
            </section>
          ))}
        </Container>

      </PageLayout>
    </PageTransition>
  )
}

export default TeamPage
