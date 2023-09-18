import React, { useState } from 'react';
import { useSearch } from '../util/SearchContext';

const SearchComponent = () => {
  
  const { searchQuery} = useSearch();
  
  const handleInputChange = (e) => {
    
  };

  const handleSearch = () => {
    

    // Filter results based on the search query


  
  };

  return (
    <div className='searchContainer'>
    <p>Memeber Id:</p>
      <input
        type="text"
        placeholder="Enter"
        value={searchQuery}
        onChange={handleInputChange}
      />
      <button className='btn' onClick={handleSearch}>Show</button>
      

    </div>
  );
};

export default SearchComponent;
