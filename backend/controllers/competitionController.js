const Competition = require('../models/Competition');
const User = require('../models/User');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

exports.createCompetition = async (req, res) => {
  const { name, startDate, endDate } = req.body;

  try {
    const competition = new Competition({
      name,
      createdBy: new ObjectId(req.user.id),
      participants: [new ObjectId(req.user.id)],
      startDate,
      endDate,
    });

    await competition.save();
    res.json(competition);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.getCompetitions = async (req, res) => {
  try {
    const competitions = await Competition.find().populate('participants', 'name email');
    res.json(competitions);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.joinCompetition = async (req, res) => {
  try {
    const competition = await Competition.findById(new ObjectId(req.params.id));

    if (!competition) {
      return res.status(404).json({ msg: 'Competition not found' });
    }

    if (competition.participants.includes(new ObjectId(req.user.id))) {
      return res.status(400).json({ msg: 'User already joined the competition' });
    }

    competition.participants.push(new ObjectId(req.user.id));
    await competition.save();

    res.json(competition);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.getLeaderboard = async (req, res) => {
  try {
    const competitionId = req.params.competitionId;

    // Validate competitionId
    if (!ObjectId.isValid(competitionId)) {
      return res.status(400).json({ msg: 'Invalid competition ID' });
    }

    const competition = await Competition.findById(new ObjectId(competitionId));

    if (!competition) {
      return res.status(404).json({ msg: 'Competition not found' });
    }

    const users = await User.find({}).select('portfolio name');
    const leaderboard = users.map(user => {
      let totalValue = user.portfolio.cash;
      user.portfolio.holdings.forEach(holding => {
        const price = getStockPrice(holding.symbol);
        totalValue += price * holding.quantity;
      });
      return { userId: user._id, username: user.name, totalValue };
    });

    leaderboard.sort((a, b) => b.totalValue - a.totalValue);

    res.json(leaderboard);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
