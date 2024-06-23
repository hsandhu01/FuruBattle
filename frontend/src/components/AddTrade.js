import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddTrade() {
  const [symbol, setSymbol] = useState('');
  const [quantity, setQuantity] = useState('');
  const [type, setType] = useState('buy');
  const navigate = useNavigate();

  const handleAddTrade = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        'http://localhost:5000/api/trades',
        { symbol, quantity, type, competitionId: '667755201f98ae8859078033' },
        {
          headers: {
            'x-auth-token': localStorage.getItem('token')
          }
        }
      );
      navigate('/trades');
    } catch (error) {
      console.error('Add trade failed:', error);
    }
  };

  return (
    <div className="container">
      <h2>Add Trade</h2>
      <form onSubmit={handleAddTrade}>
        <div className="form-group">
          <label>Symbol:</label>
          <input type="text" className="form-control" value={symbol} onChange={(e) => setSymbol(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Quantity:</label>
          <input type="number" className="form-control" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Type:</label>
          <select className="form-control" value={type} onChange={(e) => setType(e.target.value)} required>
            <option value="buy">Buy</option>
            <option value="sell">Sell</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Add Trade</button>
      </form>
    </div>
  );
}

export default AddTrade;