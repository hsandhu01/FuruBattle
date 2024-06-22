const Competition = require('../models/Competition');
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

exports.getLeaderboard = async (req, res) => {
  try {
    const competition = await Competition.findById(req.params.id).populate('participants.user', 'name email');

    if (!competition) {
      return res.status(404).json({ msg: 'Competition not found' });
    }

    const leaderboard = await Promise.all(
      competition.participants.map(async (participant) => {
        let totalValue = participant.cash;

        for (let holding of participant.holdings) {
          const price = await getStockPrice(holding.symbol);
          totalValue += price * holding.quantity;
        }

        return {
          user: participant.user,
          totalValue,
        };
      })
    );

    leaderboard.sort((a, b) => b.totalValue - a.totalValue);

    res.json(leaderboard);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};