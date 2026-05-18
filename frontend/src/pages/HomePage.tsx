import { HomePageTemplate } from '../components/templates/HomePageTemplate/HomePageTemplate'
import { homeSections } from '../data/homeSections'
import { announcements } from '../data/announcements'

// Static hero data — will be replaced by a WP Page API call
// once Role 6 delivers rest-api-exposure-checklist.md
const heroData = {
  title: 'International Relations at West University of Timișoara',
  subtitle:
    'Explore Erasmus opportunities, international student pathways, partnership programmes, and resources — all in one place.',
  primaryButtonText: 'Explore Erasmus',
  primaryButtonLink: '/erasmus',
  secondaryButtonText: 'International Students',
  secondaryButtonLink: '/international-students',
}

function HomePage() {
  return (
    <HomePageTemplate
      heroData={heroData}
      cards={homeSections}
      news={announcements}
    />
  )
}

export default HomePage
