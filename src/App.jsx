import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { usePageTracking } from './hooks/usePageTracking'
import LandingPage from './pages/LandingPage'
import ForApple from './pages/for-Apple'
import ForTomoCredit from './pages/for-TomoCredit'
import ForFeathr from './pages/for-Feathr'

function AppRoutes() {
  usePageTracking()

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/for-Apple" element={<ForApple />} />
      <Route path="/for-TomoCredit" element={<ForTomoCredit />} />
      <Route path="/for-Feathr" element={<ForFeathr />} />
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
