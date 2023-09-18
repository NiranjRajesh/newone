import React from 'react'
import TableComponent from './TableComponent'
import { useSearch } from '../util/SearchContext';
const Pharmacy = () => {
  const { searchQuery, searchResults, updateSearchQuery } = useSearch();

  return (
    <div className='m-container'>  
       <div className='heading'
    >
            <h2>Pharmacy Details</h2>
            <div></div>
            </div>
     <TableComponent />

            </div>
  )
}

export default Pharmacy