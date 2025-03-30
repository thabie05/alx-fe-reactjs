import { useState } from 'react'
import { fetchUserData } from '../services/githubService'

export default function Search() {
  const [input, setInput] = useState('')
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!input) return
    
    setLoading(true)
    setError('')
    
    try {
      const { data } = await fetchUserData(input)
      setUser(data)
    } catch (err) {
      setError(err.message || 'User not found')
      setUser(null)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter GitHub username"
            className="flex-1 p-2 border rounded"
          />
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400"
          >
            {loading ? 'Searching...' : 'Search'}
          </button>
        </div>
      </form>

      {error && (
        <div className="p-4 mb-4 text-red-700 bg-red-100 rounded">
          {error}
        </div>
      )}

      {user && (
        <div className="border rounded-lg p-4">
          <div className="flex items-center gap-4">
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-20 h-20 rounded-full"
            />
            <div>
              <h2 className="text-xl font-bold">{user.name || user.login}</h2>
              <p className="text-gray-600">{user.bio}</p>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                View Profile
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}