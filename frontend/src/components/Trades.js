import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Trades() {
  const [trades, setTrades] = useState([]);

  useEffect(() => {
    const fetchTrades = async () => {
      try {
        const result = await axios.get('http://localhost:5000/api/trades', {
          headers: {
            'x-auth-token': localStorage.getItem('token')
          }
        });
        setTrades(result.data);
      } catch (error) {
        console.error('Error fetching trades:', error);
      }
    };

    fetchTrades();
  }, []);

  return (
    <div>
      <h1>Trades</h1>
      <ul>
        {trades.map(trade => (
          <li key={trade._id}>
            {trade.symbol} - {trade.quantity} shares at ${trade.price} ({trade.type})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Trades;