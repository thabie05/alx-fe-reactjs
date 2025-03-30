import { useState } from 'react';
import { searchUsers } from './services/github.api';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const users = await searchUsers(searchTerm);
    setResults(users);
  };

  return (
    <div className="container">
      <h1>GitHub User Search</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search GitHub users..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      
      <div className="results">
        {results.map(user => (
          <div key={user.id} className="user-card">
            <img src={user.avatar_url} alt={user.login} />
            <div>
              <h3>{user.login}</h3>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;