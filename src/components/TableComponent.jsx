import React,{useEffect,useState} from 'react';
import {useSearch} from '../util/SearchContext'

const TableComponent = () => {

  const { searchResults} = useSearch();
 
  return (
    <table className="custom-table">
      <thead>
        <tr>
          <th className="table-heading">Date</th>
          <th className="table-heading">Quantity</th>
          <th className="table-heading">Provider Full Name</th>
          <th className="table-heading">Specialty Code</th>
        </tr>
      </thead>
      <tbody>
        {searchResults.map((item, index) => (
          <tr key={index}>
            <td>{item.date}</td>
            <td>{item.quantity}</td>
            <td>{item.pfname}</td>
            <td>{item.code}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
