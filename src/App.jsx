import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { usePageTracking } from './hooks/usePageTracking'
import LandingPage from './pages/LandingPage'
import ForApple from './pages/for-Apple'

function AppRoutes() {
  usePageTracking()

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/for-apple" element={<ForApple />} />
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
