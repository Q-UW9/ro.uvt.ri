import { InnerPageTemplate } from '../components/templates/InnerPageTemplate/InnerPageTemplate'

const newsItems = [
  {
    date: 'June 2025',
    title: 'Erasmus+ Application Window Now Open',
    body: 'The spring application round for Erasmus+ study and traineeship mobility for the 2025–2026 academic year is now open. Deadline: 30 June 2025.',
  },
  {
    date: 'May 2025',
    title: 'UVT Joins New European University Alliance',
    body: 'West University of Timișoara has been accepted into a new EU-funded European University Alliance focused on sustainable development and digital transformation.',
  },
  {
    date: 'April 2025',
    title: 'Bilateral Scholarship Call — Government of Japan',
    body: 'The Romanian Ministry of Education has announced 5 scholarships for UVT students to study at Japanese universities in 2025–2026. Applications close 15 May 2025.',
  },
  {
    date: 'March 2025',
    title: 'Welcome Day for Incoming Erasmus+ Students',
    body: 'DRI hosted the spring Welcome Day for over 80 incoming Erasmus+ students from 25 countries. Students received information about campus services, housing, and local life in Timișoara.',
  },
]

function NewsPage() {
  return (
    <InnerPageTemplate
      title="News"
      subtitle="Latest updates from DRI"
    >
      <ul className="space-y-8 list-none p-0">
        {newsItems.map((item, i) => (
          <li key={i} className="border-b border-gray-200 pb-6 last:border-0">
            <p className="text-sm text-gray-500 mb-1">{item.date}</p>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
            <p className="text-gray-700">{item.body}</p>
          </li>
        ))}
      </ul>
    </InnerPageTemplate>
  )
}

export default NewsPage
