import { useState } from 'react'
import { searchUsers } from '../services/githubService'

export default function AdvancedSearch() {
  const [params, setParams] = useState({
    username: '',
    location: '',
    repos: ''
  })
  const [results, setResults] = useState([])
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSearch = async (newSearch = true) => {
    try {
      setLoading(true)
      setError('')
      
      const currentPage = newSearch ? 1 : page
      const response = await searchUsers(params, currentPage)
      
      setResults(prev => newSearch ? response.data.items : [...prev, ...response.data.items])
      setHasMore(response.data.items.length > 0)
      setPage(currentPage + 1)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={params.username}
            onChange={(e) => setParams(p => ({...p, username: e.target.value}))}
            className="p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Location"
            name="location"
            value={params.location}
            onChange={(e) => setParams(p => ({...p, location: e.target.value}))}
            className="p-2 border rounded"
          />
          <input
            type="number"
            placeholder="Min Repos"
            name="repos"
            value={params.repos}
            onChange={(e) => setParams(p => ({...p, repos: e.target.value}))}
            className="p-2 border rounded"
          />
        </div>
        <button
          onClick={() => handleSearch(true)}
          disabled={loading}
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 disabled:bg-gray-400"
        >
          {loading ? 'Searching...' : 'Search Users'}
        </button>
      </div>

      {error && <div className="text-red-600 mb-4">{error}</div>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {results.map(user => (
          <div key={user.id} className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-center gap-4">
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h3 className="font-bold">{user.login}</h3>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-sm"
                >
                  View Profile
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {hasMore && (
        <button
          onClick={() => handleSearch(false)}
          disabled={loading}
          className="w-full mt-4 bg-gray-100 p-2 rounded hover:bg-gray-200 disabled:bg-gray-300"
        >
          Load More
        </button>
      )}
    </div>
  )
}