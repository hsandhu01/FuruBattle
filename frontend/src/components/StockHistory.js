import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const fetchStockData = async (sym, range) => {
  try {
    const response = await axios.get(`http://localhost:5000/api/stocks/history/${sym.toUpperCase()}`, {
      params: { range: range }
    });
    return response.data;
  } catch (error) {
    toast.error('Error fetching stock history');
    console.error('Error fetching stock history:', error);
    return [];
  }
};

const StockHistory = () => {
  const [symbol, setSymbol] = useState('AAPL');
  const [stockData, setStockData] = useState([]);
  const [timeRange, setTimeRange] = useState('1y');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadStockData = async () => {
      setLoading(true);
      const data = await fetchStockData(symbol, timeRange);
      setStockData(data);
    };
    loadStockData();
  }, [symbol, timeRange]);

  const chartData = {
    labels: stockData.map(entry => entry.date),
    datasets: [
      {
        label: 'Close Price',
        data: stockData.map(entry => entry.close),
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: `${symbol.toUpperCase()} Stock Price History`,
      },
    },
  };

  return (
    <div className="container">
      <h2>Stock History for {symbol.toUpperCase()}</h2>
      <div className="row">
        <div className="col-md-6">
          <input
            type="text"
            value={symbol}
            onChange={(e) => setSymbol(e.target.value)}
            placeholder="Enter stock symbol"
            className="form-control"
          />
        </div>
        <div className="col-md-6">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="form-control"
          >
            <option value="1m">1 Month</option>
            <option value="3m">3 Months</option>
            <option value="6m">6 Months</option>
            <option value="1y">1 Year</option>
            <option value="5y">5 Years</option>
          </select>
        </div>
      </div>
      <button onClick={() => fetchStockData(symbol, timeRange)} className="btn btn-primary mt-2" disabled={loading}>
        {loading ? 'Loading...' : 'Get History'}
      </button>
      
      {stockData.length > 0 && (
        <div className="mt-4">
          <Line data={chartData} options={chartOptions} />
        </div>
      )}
      
      <table className="table table-striped mt-4">
        <thead>
          <tr>
            <th>Date</th>
            <th>Open</th>
            <th>High</th>
            <th>Low</th>
            <th>Close</th>
            <th>Volume</th>
            <th>Change</th>
            <th>% Change</th>
          </tr>
        </thead>
        <tbody>
          {stockData.map((entry, index) => (
            <tr key={entry.date}>
              <td>{entry.date}</td>
              <td>{parseFloat(entry.open).toFixed(2)}</td>
              <td>{parseFloat(entry.high).toFixed(2)}</td>
              <td>{parseFloat(entry.low).toFixed(2)}</td>
              <td>{parseFloat(entry.close).toFixed(2)}</td>
              <td>{parseInt(entry.volume).toLocaleString()}</td>
              <td>{index < stockData.length - 1 
                ? (entry.close - stockData[index + 1].close).toFixed(2) 
                : '-'}
              </td>
              <td>{index < stockData.length - 1 
                ? ((entry.close - stockData[index + 1].close) / stockData[index + 1].close * 100).toFixed(2) + '%'
                : '-'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {stockData.length > 0 && (
        <div className="mt-4">
          <h3>Key Statistics</h3>
          <p>Highest Price: ${Math.max(...stockData.map(entry => parseFloat(entry.high))).toFixed(2)}</p>
          <p>Lowest Price: ${Math.min(...stockData.map(entry => parseFloat(entry.low))).toFixed(2)}</p>
          <p>Average Volume: {(stockData.reduce((sum, entry) => sum + parseInt(entry.volume), 0) / stockData.length).toFixed(0)}</p>
        </div>
      )}
      
      <ToastContainer />
    </div>
  );
};

export default StockHistory;
