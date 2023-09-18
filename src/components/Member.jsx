import React,{useState,useEffect} from 'react'
import { useSearch } from '../util/SearchContext';
const Member = () => {
  
  const { searchResults} = useSearch();


  return (
    <div className='m-container'>
        <div className='heading'
>
        <h2>Member Details</h2>
        <a href="">Delete Member</a>
        </div>
       
        <div className='member-details'>
            <div className="l-detail">
            <p className='name'>{searchResults.firstname+ " " +searchResults.lastname}</p>
            <p className='dob'>{searchResults.dateofbirth} </p>
            <p>Address:</p>
            <p>66683, william</p>
            </div>
            <div className="r-detail">

                <p>Gender: {searchResults.gender==="F"?"Female":"Male"}</p>
                <p>Phone: 568-299-00</p>
            </div>
       

        </div>
    </div>
  )
}

export default Member