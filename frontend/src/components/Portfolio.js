import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Portfolio() {
  const [portfolio, setPortfolio] = useState({ cash: 0, holdings: [] });

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const result = await axios.get('http://localhost:5000/api/portfolio', {
          headers: {
            'x-auth-token': localStorage.getItem('token')
          }
        });
        setPortfolio(result.data);
      } catch (error) {
        console.error('Error fetching portfolio:', error);
      }
    };

    fetchPortfolio();
  }, []);

  return (
    <div>
      <h1>Portfolio</h1>
      <p>Cash: ${portfolio.cash}</p>
      <h2>Holdings</h2>
      <ul>
        {portfolio.holdings.map((holding, index) => (
          <li key={index}>
            {holding.symbol} - {holding.quantity} shares
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Portfolio;