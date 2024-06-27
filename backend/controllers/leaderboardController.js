const Leaderboard = require('../models/Leaderboard');

exports.saveScore = async (req, res) => {
  const { score } = req.body;
  try {
    const newScore = new Leaderboard({
      user: req.user.id,
      score,
    });
    await newScore.save();
    res.json(newScore);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.getLeaderboard = async (req, res) => {
  try {
    const leaderboard = await Leaderboard.find()
      .populate('user', 'name')
      .sort({ score: -1 })
      .limit(10);
    res.json(leaderboard);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
