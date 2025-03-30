import { useState } from 'react';
import { searchUsers } from '../../services/githubService';

const SearchAdvanced = () => {
  const [params, setParams] = useState({
    username: '',
    location: '',
    repos: ''
  });
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [pagination, setPagination] = useState({
    page: 1,
    hasMore: false,
    totalCount: 0
  });

  const handleSearch = async (newSearch = true) => {
    try {
      setLoading(true);
      setError('');
      
      const page = newSearch ? 1 : pagination.page;
      const response = await searchUsers(params, page);

      setResults(prev => newSearch ? response.users : [...prev, ...response.users]);
      setPagination({
        page: response.nextPage,
        hasMore: response.hasMore,
        totalCount: response.totalCount
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setParams(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <form 
        onSubmit={(e) => { e.preventDefault(); handleSearch(true); }}
        className="bg-white p-6 rounded-lg shadow-custom mb-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={params.username}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
              placeholder="Search by username..."
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Location
            </label>
            <input
              type="text"
              name="location"
              value={params.location}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
              placeholder="Filter by location..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Minimum Repos
            </label>
            <input
              type="number"
              name="repos"
              value={params.repos}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
              placeholder="Repositories count..."
              min="0"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:bg-gray-400 transition-colors"
        >
          {loading ? 'Searching...' : 'Search Users'}
        </button>
      </form>

      {error && (
        <div className="p-4 mb-4 text-red-700 bg-red-100 rounded-lg">
          {error}
        </div>
      )}

      {results.length > 0 && (
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg shadow-custom">
            <h3 className="text-lg font-semibold mb-4">
              Found {pagination.totalCount} results
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {results.map(user => (
                <div key={user.id} className="flex items-center p-4 border rounded-lg">
                  <img
                    src={user.avatar_url}
                    alt={user.login}
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-medium text-gray-900">{user.login}</h4>
                    {user.location && (
                      <p className="text-sm text-gray-600 mt-1">
                        📍 {user.location}
                      </p>
                    )}
                    <div className="mt-2">
                      <a
                        href={user.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline text-sm"
                      >
                        View Profile →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {pagination.hasMore && (
            <button
              onClick={() => handleSearch(false)}
              disabled={loading}
              className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200 disabled:bg-gray-300 transition-colors"
            >
              {loading ? 'Loading...' : 'Load More'}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchAdvanced;