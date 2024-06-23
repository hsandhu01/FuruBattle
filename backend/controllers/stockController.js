const axios = require('axios');

exports.getStockHistory = async (req, res) => {
  const { symbol } = req.params;

  try {
    const response = await axios.get('https://www.alphavantage.co/query', {
      params: {
        function: 'TIME_SERIES_DAILY',
        symbol: symbol,
        apikey: process.env.ALPHA_VANTAGE_API_KEY
      }
    });
    const timeSeries = response.data['Time Series (Daily)'];
    const formattedData = Object.keys(timeSeries).map(date => ({
      date,
      ...timeSeries[date]
    }));
    res.json(formattedData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch stock history' });
  }
};