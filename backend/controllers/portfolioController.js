const User = require('../models/User');
const axios = require('axios');

const getStockPrice = async (symbol) => {
  const response = await axios.get(`https://www.alphavantage.co/query`, {
    params: {
      function: 'TIME_SERIES_INTRADAY',
      symbol: symbol,
      interval: '1min',
      apikey: 'GHAEXZWKRC184TKV'
    }
  });
  const timeSeries = response.data['Time Series (1min)'];
  const latestTime = Object.keys(timeSeries)[0];
  return parseFloat(timeSeries[latestTime]['1. open']);
};

exports.getPortfolio = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('portfolio');
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    let totalValue = user.portfolio.cash;
    const holdings = await Promise.all(
      user.portfolio.holdings.map(async (holding) => {
        const price = await getStockPrice(holding.symbol);
        const value = price * holding.quantity;
        totalValue += value;
        return { ...holding.toObject(), price, value };
      })
    );

    res.json({ cash: user.portfolio.cash, holdings, totalValue });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
