const axios = require('axios');

const ALPHA_VANTAGE_API_KEY = process.env.ALPHA_VANTAGE_API_KEY;

async function getStockPrice(symbol) {
  try {
    const response = await axios.get(`https://www.alphavantage.co/query`, {
      params: {
        function: 'TIME_SERIES_INTRADAY',
        symbol: symbol,
        interval: '1min',
        apikey: ALPHA_VANTAGE_API_KEY
      }
    });

    const timeSeries = response.data['Time Series (1min)'];
    const latestTimestamp = Object.keys(timeSeries)[0];
    const latestData = timeSeries[latestTimestamp];
    const stockPrice = parseFloat(latestData['4. close']);

    return stockPrice;
  } catch (error) {
    console.error('Error fetching stock price:', error);
    throw error;
  }
}

module.exports = { getStockPrice };