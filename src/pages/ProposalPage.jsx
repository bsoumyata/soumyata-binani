import React, { Suspense } from 'react'
import { useParams, Link } from 'react-router-dom'

// automatically import all proposal components in this directory
const proposalModules = import.meta.glob('./for-*.jsx')

export default function ProposalPage() {
  const { company } = useParams()
  const key = `./for-${company}.jsx`
  const ComponentLoader = proposalModules[key]

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
            Proposal for {company.charAt(0).toUpperCase() + company.slice(1)}
          </h1>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        {ComponentLoader ? (
          <Suspense fallback={<p>Loading...</p>}>
            <ComponentLoader />
          </Suspense>
        ) : (
          <div className="bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 p-12 text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Proposal not found
            </h2>
            <p className="text-gray-600">
              There is no proposal component for "{company}" yet. Create a file named
              <code className="bg-gray-200 px-2 py-1 rounded">for-{company}.jsx</code> in the
              <code className="bg-gray-200 px-2 py-1 rounded">src/pages</code> folder.
            </p>
          </div>
        )}
      </main>
    </div>
  )
}
