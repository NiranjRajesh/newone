import React,{useEffect,useState} from 'react';

const TableComponent = () => {
    const [data, setJsonData] = useState([]);

  useEffect(() => {
    // Load JSON data from a file
    fetch('pharmacy.json') // Replace with the actual path to your JSON file
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setJsonData(data.item);
      })
      .catch((error) => {
        console.error('Error loading JSON data:', error);
      });
  }, []);
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
        {data.map((item, index) => (
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
