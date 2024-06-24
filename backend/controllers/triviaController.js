const triviaQuestions = [
  {
    question: "What is the largest stock exchange in the world?",
    options: ["NASDAQ", "New York Stock Exchange", "Tokyo Stock Exchange", "Shanghai Stock Exchange"],
    answer: "New York Stock Exchange"
  },
  // Add more questions
];

exports.getTriviaQuestions = (req, res) => {
  res.json(triviaQuestions);
};