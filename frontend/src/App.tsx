import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { LocaleLayout } from './layouts/LocaleLayout'
import { DEFAULT_LOCALE } from './context/LocaleContext'

// Pages
import HomePage                       from './pages/HomePage'
import AboutPage                      from './pages/AboutPage'
import MissionPage                    from './pages/MissionPage'
import TeamPage                       from './pages/TeamPage'
import ContactPage                    from './pages/ContactPage'
import PartnershipsPage               from './pages/PartnershipsPage'
import ScholarshipsExchangesPage      from './pages/ScholarshipsExchangesPage'
import SearchPage                     from './pages/SearchPage'
import SitemapPage                    from './pages/SitemapPage'
import NewsPage                       from './pages/NewsPage'

import ErasmusPage                    from './pages/ErasmusPage'
import ErasmusIncomingStudentsPage    from './pages/ErasmusIncomingStudentsPage'
import ErasmusOutgoingStudentsPage    from './pages/ErasmusOutgoingStudentsPage'
import ErasmusIncomingStaffPage       from './pages/ErasmusIncomingStaffPage'
import ErasmusOutgoingStaffPage       from './pages/ErasmusOutgoingStaffPage'
import ErasmusPartnerCountriesPage    from './pages/ErasmusPartnerCountriesPage'
import ErasmusCooperationProjectsPage from './pages/ErasmusCooperationProjectsPage'

import IntlStudentsPage               from './pages/IntlStudentsPage'
import IntlNonEuPage                  from './pages/IntlNonEuPage'
import IntlEuPage                     from './pages/IntlEuPage'
import IntlUkrainePage                from './pages/IntlUkrainePage'
import IntlRefugeesPage               from './pages/IntlRefugeesPage'
import IntlPreparatoryPage            from './pages/IntlPreparatoryPage'
import IntlFreeMoversPage             from './pages/IntlFreeMoversPage'

import CallsPage                      from './pages/CallsPage'
import CallDetailPage                 from './pages/CallDetailPage'
import StoriesPage                    from './pages/StoriesPage'
import StoryDetailPage                from './pages/StoryDetailPage'
import ResourcesPage                  from './pages/ResourcesPage'
import ResourceDetailPage             from './pages/ResourceDetailPage'
import ProgrammesPage                 from './pages/ProgrammesPage'
import ProgrammeDetailPage            from './pages/ProgrammeDetailPage'

import NotFoundPage                   from './pages/NotFoundPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Redirect bare "/" to default locale */}
        <Route
          path="/"
          element={<Navigate to={`/${DEFAULT_LOCALE}`} replace />}
        />

        {/* ── Locale wrapper ─────────────────────────────────
            All real routes live under /:locale
            LocaleLayout validates the locale and provides context
        ──────────────────────────────────────────────────── */}
        <Route path="/:locale" element={<LocaleLayout />}>

          {/* Home */}
          <Route index element={<HomePage />} />

          {/* Static top-level */}
          <Route path="about"                  element={<AboutPage />} />
          <Route path="mission"               element={<MissionPage />} />
          <Route path="team"                  element={<TeamPage />} />
          <Route path="partnerships"           element={<PartnershipsPage />} />
          <Route path="scholarships-exchanges" element={<ScholarshipsExchangesPage />} />
          <Route path="contact"                element={<ContactPage />} />
          <Route path="news"                   element={<NewsPage />} />
          <Route path="search"                 element={<SearchPage />} />
          <Route path="sitemap"                element={<SitemapPage />} />

          {/* Erasmus+ */}
          <Route path="erasmus"                          element={<ErasmusPage />} />
          <Route path="erasmus/incoming-students"        element={<ErasmusIncomingStudentsPage />} />
          <Route path="erasmus/outgoing-students"        element={<ErasmusOutgoingStudentsPage />} />
          <Route path="erasmus/incoming-staff"           element={<ErasmusIncomingStaffPage />} />
          <Route path="erasmus/outgoing-staff"           element={<ErasmusOutgoingStaffPage />} />
          <Route path="erasmus/partner-countries"        element={<ErasmusPartnerCountriesPage />} />
          <Route path="erasmus/cooperation-projects"     element={<ErasmusCooperationProjectsPage />} />

          {/* International Students */}
          <Route path="international-students"                     element={<IntlStudentsPage />} />
          <Route path="international-students/non-eu"              element={<IntlNonEuPage />} />
          <Route path="international-students/eu"                  element={<IntlEuPage />} />
          <Route path="international-students/ukraine"             element={<IntlUkrainePage />} />
          <Route path="international-students/refugees"            element={<IntlRefugeesPage />} />
          <Route path="international-students/preparatory-year"    element={<IntlPreparatoryPage />} />
          <Route path="international-students/free-movers"         element={<IntlFreeMoversPage />} />

          {/* CPT: Calls */}
          <Route path="calls"                  element={<CallsPage />} />
          <Route path="calls/:slug"            element={<CallDetailPage />} />

          {/* CPT: Stories */}
          <Route path="stories"                element={<StoriesPage />} />
          <Route path="stories/:slug"          element={<StoryDetailPage />} />

          {/* CPT: Resources */}
          <Route path="resources"              element={<ResourcesPage />} />
          <Route path="resources/:slug"        element={<ResourceDetailPage />} />

          {/* CPT: Programmes */}
          <Route path="programmes"             element={<ProgrammesPage />} />
          <Route path="programmes/:slug"       element={<ProgrammeDetailPage />} />

        </Route>

        {/* 404 fallback */}
        <Route path="*" element={<NotFoundPage />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
