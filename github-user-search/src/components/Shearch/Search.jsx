import React, { useState } from 'react';
import { fetchUserData } from '../../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username) return;

    setLoading(true);
    setError('');
    setUserData(null);

    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p className="loading">Loading...</p>}
      
      {error && (
        <p className="error">
          <span style={{ color: 'red' }}>Error:</span> {error}
        </p>
      )}

      {userData && (
        <div className="user-profile">
          <img
            src={userData.avatar_url}
            alt={userData.login}
            className="avatar"
          />
          <div className="user-info">
            <h2>{userData.name || userData.login}</h2>
            <p>{userData.bio && <em>{userData.bio}</em>}</p>
            <a
              href={userData.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="profile-link"
            >
              View GitHub Profile
            </a>
            <div className="stats">
              <span>Followers: {userData.followers}</span>
              <span>Following: {userData.following}</span>
              <span>Repos: {userData.public_repos}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;