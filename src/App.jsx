import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { usePageTracking } from './hooks/usePageTracking'
import LandingPage from './pages/LandingPage'
import ProposalPage from './pages/ProposalPage'

function AppRoutes() {
  usePageTracking()

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/for-:company" element={<ProposalPage />} />
    </Routes>
  )
}

export default function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  )
}
