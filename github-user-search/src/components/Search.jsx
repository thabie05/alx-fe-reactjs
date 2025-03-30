import { useState } from 'react';
import { fetchUserData } from '../services/githubService';

export default function Search() {
  const [searchParams, setSearchParams] = useState({
    username: '',
    location: '',
    minRepos: ''
  });
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(err.message || 'Looks like we cant find the user');
    setUsers([]);

    try {
      const { users } = await fetchUserData({
        username: searchParams.username,
        location: searchParams.location,
        minRepos: searchParams.minRepos
      });
      setUsers(users);
    } catch (err) {
      setError(err.message || 'Looks like we cant find the user');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setSearchParams(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <form onSubmit={handleSubmit} className="mb-8 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            name="username"
            value={searchParams.username}
            onChange={handleInputChange}
            placeholder="Username"
            className="p-2 border rounded"
          />
          <input
            type="text"
            name="location"
            value={searchParams.location}
            onChange={handleInputChange}
            placeholder="Location"
            className="p-2 border rounded"
          />
          <input
            type="number"
            name="minRepos"
            value={searchParams.minRepos}
            onChange={handleInputChange}
            placeholder="Min Repos"
            className="p-2 border rounded"
            min="0"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 disabled:bg-gray-400"
        >
          {loading ? 'Searching...' : 'Search Users'}
        </button>
      </form>

      {error && (
        <div className="p-4 mb-4 text-red-700 bg-red-100 rounded">
          {error}
        </div>
      )}

      <div className="space-y-4">
        {users.map(user => (
          <div key={user.id} className="border rounded-lg p-4">
            <div className="flex items-center gap-4">
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-20 h-20 rounded-full"
              />
              <div>
                <h2 className="text-xl font-bold">{user.login}</h2>
                {user.location && (
                  <p className="text-gray-600">📍 {user.location}</p>
                )}
                {user.public_repos && (
                  <p className="text-gray-600">📦 Repos: {user.public_repos}</p>
                )}
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
        ))}
      </div>
    </div>
  );
}