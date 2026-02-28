import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { usePageTracking } from './hooks/usePageTracking'
import LandingPage from './pages/LandingPage'
import ForApple from './pages/for-Apple'
import ForTomoCredit from './pages/for-TomoCredit'
import ForFeathr from './pages/for-Feathr'
import ForTollBit from './pages/for-TollBit'
import ForTalos from './pages/for-Talos'

function AppRoutes() {
  usePageTracking()

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/for-Apple" element={<ForApple />} />
      <Route path="/for-TomoCredit" element={<ForTomoCredit />} />
      <Route path="/for-Feathr" element={<ForFeathr />} />
      <Route path="/for-TollBit" element={<ForTollBit />} />
      <Route path="/for-Talos" element={<ForTalos />} />
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
