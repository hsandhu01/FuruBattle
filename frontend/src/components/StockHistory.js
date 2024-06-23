import React, { useEffect, useState } from 'react';
import axios from 'axios';

function StockHistory({ symbol }) {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchStockHistory = async () => {
      try {
        const response = await axios.get(
          `https://www.alphavantage.co/query`, {
            params: {
              function: 'TIME_SERIES_DAILY',
              symbol: symbol,
              apikey: process.env.REACT_APP_ALPHA_VANTAGE_API_KEY,
            },
          }
        );
        const timeSeries = response.data['Time Series (Daily)'];
        const formattedData = Object.keys(timeSeries).map(date => ({
          date,
          ...timeSeries[date]
        }));
        setHistory(formattedData);
      } catch (error) {
        console.error('Error fetching stock history:', error);
      }
    };

    fetchStockHistory();
  }, [symbol]);

  return (
    <div>
      <h2>{symbol} Stock History</h2>
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
          {history.map((entry) => (
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
    </div>
  );
}

export default StockHistory;