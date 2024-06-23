import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const result = await axios.get('http://localhost:5000/api/leaderboard/667755201f98ae8859078033', {
          headers: {
            'x-auth-token': localStorage.getItem('token')
          }
        });
        setLeaderboard(result.data);
      } catch (error) {
        console.error('Error fetching leaderboard:', error);
      }
    };

    fetchLeaderboard();
  }, []);

  return (
    <div>
      <h1>Leaderboard</h1>
      <ul>
        {leaderboard.map((user, index) => (
          <li key={index}>
            {user.name} - ${user.totalValue}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Leaderboard;
