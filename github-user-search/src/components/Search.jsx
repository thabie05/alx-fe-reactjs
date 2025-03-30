import { useState } from 'react';
import { searchUsers } from '../services/githubService';

export default function Search() {
  const [searchParams, setSearchParams] = useState({
    username: '',
    location: ''
  });
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const response = await searchUsers({
        username: searchParams.username,
        location: searchParams.location
      });
      setUsers(response.users);
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
        <div className="space-y-2">
          <input
            type="text"
            name="username"
            value={searchParams.username}
            onChange={handleInputChange}
            placeholder="Username"
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="location"
            value={searchParams.location}
            onChange={handleInputChange}
            placeholder="Location"
            className="w-full p-2 border rounded"
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

      {error && <div className="text-red-600 mb-4">{error}</div>}

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