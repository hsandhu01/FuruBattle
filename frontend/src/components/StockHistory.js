import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const StockHistory = () => {
  const [symbol, setSymbol] = useState('AAPL');
  const [stockData, setStockData] = useState([]);

  const fetchStockData = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/stocks/history/${symbol.toUpperCase()}`);
      setStockData(response.data);
    } catch (error) {
      toast.error('Error fetching stock history');
      console.error('Error fetching stock history:', error);
    }
  };

  return (
    <div className="container">
      <h2>Stock History for {symbol.toUpperCase()}</h2>
      <input
        type="text"
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
        placeholder="Enter stock symbol"
      />
      <button onClick={fetchStockData} className="btn btn-primary mt-2">Get History</button>
      <table className="table table-striped mt-4">
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
          {stockData.map((entry) => (
            <tr key={entry.date}>
              <td>{entry.date}</td>
              <td>{entry['1. open']}</td>
              <td>{entry['2. high']}</td>
              <td>{entry['3. low']}</td>
              <td>{entry['4. close']}</td>
              <td>{entry['5. volume']}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <ToastContainer />
    </div>
  );
};

export default StockHistory;