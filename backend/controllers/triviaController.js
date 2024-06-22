const Trivia = require('../models/Trivia');

exports.getTrivia = async (req, res) => {
  try {
    const trivia = await Trivia.find();
    res.json(trivia);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.addTrivia = async (req, res) => {
  const { question, options, correctAnswer } = req.body;

  try {
    const newTrivia = new Trivia({
      question,
      options,
      correctAnswer,
    });

    const trivia = await newTrivia.save();
    res.json(trivia);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};