import React, { useState } from 'react';
import { useSearch } from '../util/SearchContext';

const SearchComponent = () => {
  
  const { searchQuery, updateSearchQuery,updateSearchResults} = useSearch();
  
  const handleInputChange = (e) => {
    updateSearchQuery(e.target.value);
  };
  const handleSearch = async () => {
    try {
      // Send a request to the backend to perform the search
      const results = await searchDatabase(searchQuery);
   
      updateSearchResults(results);
    } catch (error) {
      console.error('Error searching database:', error);
    }
  };

  const searchDatabase = async (query) => {
    try {

      //Evide api ede get with id
      const response = await fetch(`https://localhost:7004/api/web/${query}`, {
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  };


  return (
    <div className='searchContainer'>
    <p>Memeber Id:</p>
      <input
        type="text"
        placeholder="Enter"
        className='search-bar'
        value={searchQuery}
        onChange={handleInputChange}
      />
      <button className='btn' onClick={handleSearch}>Show</button>
      

    </div>
  );
};

export default SearchComponent;
