const axios = require('axios');

const getStockHistory = async (req, res) => {
  const { symbol } = req.params;
  try {
    const response = await axios.get(`https://www.alphavantage.co/query`, {
      params: {
        function: 'TIME_SERIES_DAILY_ADJUSTED',
        symbol: symbol,
        apikey: process.env.ALPHA_VANTAGE_API_KEY
      }
    });

    const data = response.data['Time Series (Daily)'];
    if (!data) {
      return res.status(404).json({ message: 'Stock data not found' });
    }

    const stockData = Object.keys(data).map(date => ({
      date,
      open: data[date]['1. open'],
      high: data[date]['2. high'],
      low: data[date]['3. low'],
      close: data[date]['4. close'],
      volume: data[date]['6. volume'],
    }));

    res.json(stockData);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching stock data', error: error.message });
  }
};

module.exports = {
  getStockHistory,
};