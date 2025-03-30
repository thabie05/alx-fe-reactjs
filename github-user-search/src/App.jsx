import { useState } from 'react';
import { searchUsers } from './services/github.api';
import SearchForm from './components/SearchForm/SearchForm';
import UserList from './components/UserList/UserList';

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
      <SearchForm 
        searchTerm={searchTerm}
        handleSearch={handleSearch}
        setSearchTerm={setSearchTerm}
      />
      <UserList users={results} />
    </div>
  );
}

export default App;