import { InnerPageTemplate } from '../components/templates/InnerPageTemplate/InnerPageTemplate'

const contacts = [
  { role: 'General enquiries', email: 'dri@e-uvt.ro', phone: '+40 256 592 111' },
  { role: 'Erasmus+ outgoing students', email: 'erasmus.out@e-uvt.ro', phone: '+40 256 592 112' },
  { role: 'Erasmus+ incoming students', email: 'erasmus.in@e-uvt.ro', phone: '+40 256 592 113' },
  { role: 'International admissions', email: 'admissions.intl@e-uvt.ro', phone: '+40 256 592 114' },
  { role: 'Partnerships & agreements', email: 'partnerships@e-uvt.ro', phone: '+40 256 592 115' },
]

function ContactPage() {
  return (
    <InnerPageTemplate
      title="Contact"
      subtitle="Get in touch with the DRI team"
    >
      <p>
        Our office is located in <strong>Building A, Room 101</strong>, West
        University of Timișoara, Bd. Vasile Pârvan 4, 300223 Timișoara, Romania.
      </p>
      <p>Office hours: Monday – Friday, 09:00 – 16:00</p>

      <div className="mt-8 overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="px-4 py-3 font-semibold text-gray-700">Department</th>
              <th className="px-4 py-3 font-semibold text-gray-700">Email</th>
              <th className="px-4 py-3 font-semibold text-gray-700">Phone</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((c, i) => (
              <tr key={i} className="border-t border-gray-200 hover:bg-gray-50">
                <td className="px-4 py-3 text-gray-800">{c.role}</td>
                <td className="px-4 py-3">
                  <a href={`mailto:${c.email}`} className="text-blue-600 hover:underline">
                    {c.email}
                  </a>
                </td>
                <td className="px-4 py-3 text-gray-700">{c.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </InnerPageTemplate>
  )
}

export default ContactPage
