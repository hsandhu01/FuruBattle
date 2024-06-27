const Trade = require('../models/Trade');
const Competition = require('../models/Competition');
const axios = require('axios');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

const getStockPrice = async (symbol) => {
  const response = await axios.get(`https://www.alphavantage.co/query`, {
    params: {
      function: 'TIME_SERIES_INTRADAY',
      symbol: symbol,
      interval: '1min',
      apikey: process.env.ALPHA_VANTAGE_API_KEY // Use the environment variable here
    }
  });
  const timeSeries = response.data['Time Series (1min)'];
  const latestTime = Object.keys(timeSeries)[0];
  return parseFloat(timeSeries[latestTime]['1. open']);
};

exports.getTrades = async (req, res) => {
  try {
    const trades = await Trade.find({ user: new ObjectId(req.user.id) }).sort({ date: -1 });
    res.json(trades);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.addTrade = async (req, res) => {
  const { symbol, quantity, type, competitionId } = req.body;

  try {
    // Validate competitionId
    if (!ObjectId.isValid(competitionId)) {
      return res.status(400).json({ msg: 'Invalid competition ID' });
    }

    const competition = await Competition.findById(new ObjectId(competitionId));
    if (!competition) {
      return res.status(404).json({ msg: 'Competition not found' });
    }

    const participant = competition.participants.find(
      (p) => p.user.toString() === req.user.id
    );

    if (!participant) {
      return res.status(400).json({ msg: 'User not part of the competition' });
    }

    const price = await getStockPrice(symbol);

    const newTrade = new Trade({
      user: new ObjectId(req.user.id),
      symbol,
      quantity,
      price,
      type,
    });

    const trade = await newTrade.save();

    if (type === 'buy') {
      if (participant.cash < price * quantity) {
        return res.status(400).json({ msg: 'Not enough cash to buy' });
      }
      participant.cash -= price * quantity;
      const holding = participant.holdings.find((h) => h.symbol === symbol);
      if (holding) {
        holding.quantity += quantity;
      } else {
        participant.holdings.push({ symbol, quantity });
      }
    } else if (type === 'sell') {
      const holding = participant.holdings.find((h) => h.symbol === symbol);
      if (!holding || holding.quantity < quantity) {
        return res.status(400).json({ msg: 'Not enough holdings to sell' });
      }
      holding.quantity -= quantity;
      if (holding.quantity === 0) {
        participant.holdings = participant.holdings.filter(
          (h) => h.symbol !== symbol
        );
      }
      participant.cash += price * quantity;
    }

    await competition.save();

    res.json(trade);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
