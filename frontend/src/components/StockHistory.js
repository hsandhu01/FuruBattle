import React, { useState } from 'react';
import axios from 'axios';

const StockHistory = () => {
  const [symbol, setSymbol] = useState('');
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  const fetchStockData = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/stocks/history/${symbol}`);
      console.log(response.data); // Log to check the data structure
      setData(response.data);
      setError('');
    } catch (error) {
      console.error(error); // Log error for debugging
      setError('Error fetching data');
      setData([]);
    }
  };

  return (
    <div>
      <h2>Stock History</h2>
      <input 
        type="text" 
        value={symbol} 
        onChange={(e) => setSymbol(e.target.value.toUpperCase())} 
        placeholder="Enter stock symbol" 
      />
      <button onClick={fetchStockData}>Fetch History</button>
      {error && <p>{error}</p>}
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Open</th>
            <th>High</th>
            <th>Low</th>
            <th>Close</th>
            <th>Volume</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((day, index) => (
              <tr key={index}>
                <td>{day.date}</td>
                <td>{day.open}</td>
                <td>{day.high}</td>
                <td>{day.low}</td>
                <td>{day.close}</td>
                <td>{day.volume}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default StockHistory;