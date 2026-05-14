import {
BrowserRouter,
Routes,
Route
} from 'react-router-dom'

import HomePage from './pages/HomePage'
import AdmissionsPage from './pages/AdmissionsPage'
import ErasmusPage from './pages/ErasmusPage'
import ResearchPage from './pages/ResearchPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<HomePage />}
        />

        <Route
          path="/admissions"
          element={<AdmissionsPage />}
        />

        <Route
          path="/erasmus"
          element={<ErasmusPage />}
        />

        <Route
          path="/research"
          element={<ResearchPage />}
        />

        <Route
          path="/contact"
          element={<ContactPage />}
        />

      </Routes>
    </BrowserRouter>
  )
}

export default App