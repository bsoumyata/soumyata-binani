import { Link } from 'react-router-dom'

export default function ForApple() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-200 px-4 py-6">
        <div className="max-w-6xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-6"
          >
            ← Back
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Proposal for Apple
          </h1>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 p-12 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Apple Proposal Placeholder
          </h2>
          <p className="text-gray-600 mb-4">
            This is where the Apple proposal will go.
          </p>
          <p className="text-sm text-gray-500">
            Replace this with your actual proposal component.
          </p>
        </div>
      </main>
    </div>
  )
}
