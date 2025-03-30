import React from 'react';

const SearchForm = ({ searchTerm, handleSearch, setSearchTerm }) => {
  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search GitHub users..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;