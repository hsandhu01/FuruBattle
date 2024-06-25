const axios = require('axios');
const moment = require('moment');

const getStockHistory = async (req, res) => {
  const { symbol } = req.params;
  const { range } = req.query;

  let outputSize = 'full';
  if (range === '1m') outputSize = 'compact';

  try {
    const response = await axios.get(`https://www.alphavantage.co/query`, {
      params: {
        function: 'TIME_SERIES_DAILY_ADJUSTED',
        symbol: symbol,
        apikey: process.env.ALPHA_VANTAGE_API_KEY,
        outputsize: outputSize
      }
    });

    const data = response.data['Time Series (Daily)'];
    if (!data) {
      return res.status(404).json({ message: 'Stock data not found' });
    }
    
    const endDate = moment();
    const startDate = moment().subtract(1, 'year');
    
    if (range === '1m') startDate.subtract(1, 'month');
    else if (range === '3m') startDate.subtract(3, 'months');
    else if (range === '6m') startDate.subtract(6, 'months');
    else if (range === '5y') startDate.subtract(5, 'years');

    const stockData = Object.keys(data)
      .filter(date => moment(date).isBetween(startDate, endDate))
      .map(date => ({
      date,
      open: parseFloat(data[date]['1. open']),
      high: parseFloat(data[date]['2. high']),
      low: parseFloat(data[date]['3. low']),
      close: parseFloat(data[date]['4. close']),
      volume: data[date]['6. volume'],
    }))
    .sort((a, b) => new Date(b.date) - new Date(a.date));

    res.json(stockData);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching stock data', error: error.message });
  }
};

module.exports = {
  getStockHistory,
};
