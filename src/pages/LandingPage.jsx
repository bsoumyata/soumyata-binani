import { Link } from 'react-router-dom'

export default function LandingPage() {

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <h1 className="text-6xl font-bold mb-4 text-gray-900">
        Hi, I'm Soumyata
      </h1>
      <p className="text-lg text-gray-600 mb-8 text-center max-w-md">
        Welcome to my portfolio. Click below to view the Apple proposal.
      </p>
      <Link
        to="/for-apple"
        className="inline-flex items-center px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
      >
        View Apple Proposal
      </Link>
    </div>
  )
}
